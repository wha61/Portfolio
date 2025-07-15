const video = document.getElementById("video");
let recognition;
let isListening = false;
let mediaStream = null;
let spokenText = ""

// 1. 初始化摄像头
async function initCamera() {
  try {
    // mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    mediaStream = await navigator.mediaDevices.getUserMedia({
    video: {
        facingMode: { exact: "environment" } // 指定使用后置摄像头
    },
    audio: false
    });
    video.srcObject = mediaStream;
  } catch (err) {
    alert("❌ 无法访问摄像头：" + err.message);
  }
}

// 2. 启动语音识别监听
function startRecognition() {
  if (isListening) return;
  isListening = true;
  spokenText = "";

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert("❌ 当前浏览器不支持语音识别");
    return;
  }

  recognition = new SpeechRecognition();
  recognition.lang = "zh-CN";
  recognition.interimResults = false;
  recognition.continuous = true;

  recognition.onresult = async (event) => {
    const text = event.results[event.results.length - 1][0].transcript.trim();
    console.log("🗣️ 用户说：", text);
    spokenText += text + " ";

    // 实时展示用户语音内容
    const userDiv = document.getElementById("user-text");
    if (userDiv) userDiv.textContent += "🗣️ " + text + "\n";

    if (text.includes("发送请求")) {
      recognition.stop();
      isListening = false;
      await handleCaptureAndSend(spokenText);
      spokenText = "";
    }
  };

  recognition.onerror = (e) => {
    console.error("❌ 识别错误:", e.error);
    isListening = false;
  };

  recognition.start();
  console.log("🎤 开始监听语音...等待 '发送请求'");
}

// 3. 截图并调用 GPT 分析
async function handleCaptureAndSend(userText) {
  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  const imageBase64 = canvas.toDataURL("image/jpeg").split(",")[1];

  try {
    const response = await fetch("https://d23c715ecb87.ngrok-free.app/api/image-analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        imageBase64: imageBase64,
        userText: userText || "请分析图像"
      })
    });
    
    const result = await response.json();
    const resultText = result.reply || "⚠️ 无有效返回结果";
    speakAndPrint(resultText);


  } catch (err) {
    console.error("❌ 请求或解析失败:", err);
    speakAndPrint("❌ 分析失败，请稍后再试。");
  }
}

// 4. 逐字显示 + 朗读 AI 回复
function speakAndPrint(text) {
  const synth = window.speechSynthesis;
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "zh-CN";
  synth.speak(utter);

  const responseDiv = document.getElementById("response");
  responseDiv.textContent = "";
  let i = 0;
  const interval = setInterval(() => {
    responseDiv.textContent += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 50); // 每 50ms 打一个字
}

// 页面加载时初始化摄像头
window.onload = initCamera;
