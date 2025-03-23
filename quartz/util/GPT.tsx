// /** @jsx h */
// /** @jsxFrag Fragment */
// import { h, Fragment } from "preact"
// import { useEffect, useState } from "preact/hooks"

// interface Props {
//   text: string
//   thinkingDelay?: number
//   minTypingDelay?: number
//   maxTypingDelay?: number
//   textClassName?: string
//   styles?: h.JSX.CSSProperties
//   caretBackground?: string
//   cursorBlinkSpeed?: number
//   notDisplayCaretAfterFinishes?: boolean
//   onComplete?: () => void
// }

// export default function TextEffect({
//   text,
//   thinkingDelay = 4000,
//   minTypingDelay = 50,
//   maxTypingDelay = 100,
//   textClassName,
//   styles = {},
//   caretBackground = "#333",
//   cursorBlinkSpeed = 1000,
//   notDisplayCaretAfterFinishes,
//   onComplete
// }: Props): h.JSX.Element {
//   // 调试日志开关
//   const DEBUG = true
//   const log = DEBUG ? console.log : () => {}

//   // 组件状态
//   const [words, setWords] = useState<string[]>([])
//   const [index, setIndex] = useState<number>(0)
//   const [displayText, setDisplayText] = useState<string>("")
//   const [opacity, setOpacity] = useState<number>(1)
//   const [finish, setFinish] = useState<boolean>(false)

//   // 初始化文字分割
//   useEffect(() => {
//     log("[INIT] Splitting text:", text)
//     const wordsArray = text.split(/(\s+)/)
//     setWords(wordsArray)
//     setIndex(0)
//     setDisplayText("")
//     setFinish(false)
//     log("[INIT] Reset states")
//   }, [text])

//   // 光标闪烁动画
//   useEffect(() => {
//     log("[CURSOR] Start blinking")
//     const interval = setInterval(() => {
//       setOpacity(prev => {
//         const newVal = prev === 1 ? 0 : 1
//         log("[CURSOR] Opacity change:", newVal)
//         return newVal
//       })
//     }, cursorBlinkSpeed)
//     return () => {
//       log("[CURSOR] Cleanup blinking")
//       clearInterval(interval)
//     }
//   }, [cursorBlinkSpeed])

//   // 核心打字逻辑
//   useEffect(() => {
//     log("[TYPING] Update trigger - index:", index, "words:", words.length)
    
//     if (index >= words.length) {
//       log("[TYPING] All words processed")
//       setFinish(true)
//       return
//     }

//     const word = words[index]
//     let delay = Math.random() * (maxTypingDelay - minTypingDelay) + minTypingDelay

//     // 动态延迟调整
//     if (word.length > 15) delay *= 3
//     else if (word.length > 10) delay *= 2
//     else if (word.length < 5) delay *= 0.8

//     // 初始延迟处理
//     if (index === 0) {
//       delay += thinkingDelay
//       log("[TYPING] Initial delay:", delay)
//     }

//     log("[TYPING] Scheduling word:", word, "delay:", delay)
    
//     const timeout = setTimeout(() => {
//       log("[TYPING] Adding word:", word)
//       setDisplayText(prev => {
//         const newText = prev + word
//         log("[TEXT] Update:", newText)
//         return newText
//       })
//       setIndex(prev => {
//         const newIndex = prev + 1
//         log("[INDEX] Update:", newIndex)
//         return newIndex
//       })
//     }, delay) as unknown as number

//     return () => {
//       log("[TYPING] Cleanup timeout")
//       clearTimeout(timeout)
//     }
//   }, [index, words, thinkingDelay, minTypingDelay, maxTypingDelay])

//   // 完成回调
//   useEffect(() => {
//     if (finish) {
//       log("[FINISH] Animation completed")
//       onComplete?.()
//     }
//   }, [finish])

//   // 光标位置计算
//   const fontSize = parseInt(String(styles.fontSize || "16"), 10)
//   const lineHeight = styles.lineHeight 
//     ? parseFloat(String(styles.lineHeight))
//     : 1.2
//   const translateY = fontSize * lineHeight * 0.15

//   // 渲染日志
//   log("[RENDER] Current state:", {
//     displayText,
//     words,
//     index,
//     finish,
//     opacity,
//     translateY
//   })

//   return (
//     <div 
//       style={{ 
//         display: 'inline-block',
//         position: 'relative',
//         border: DEBUG ? "1px solid red" : undefined // 调试边框
//       }}
//     >
//       <span 
//         style={{
//           ...styles,
//           visibility: displayText ? "visible" : "hidden" // 防止布局抖动
//         }} 
//         className={textClassName}
//         aria-live="polite"
//       >
//         {displayText || " "} {/* 保留空位 */}
//       </span>
      
//       {/* 光标元素 */}
//       {!notDisplayCaretAfterFinishes && (
//         <span
//           style={{
//             position: 'absolute',
//             width: `${fontSize / 2}px`,
//             height: `${fontSize * lineHeight}px`,
//             background: caretBackground,
//             transform: `translateY(${translateY}px)`,
//             opacity: finish ? 0 : opacity,
//             transition: 'opacity 0.3s ease',
//             pointerEvents: 'none' // 防止遮挡点击
//           }}
//           aria-hidden="true"
//         />
//       )}
//     </div>
//   )
// }