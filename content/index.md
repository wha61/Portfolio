---
title: Good things take time 
---



<!-- [Email](mailto:wha61@sfu.ca)  |  [Github](https://github.com/wha61) | [Linkedin](https://www.linkedin.com/in/wenxiang-he/) -->

<!-- <div style="position: relative; width: 100%; padding-bottom: 200px; color: var(--text-color); background: var(--bg-color);">
  <iframe 
    src="typing-effect.html" 
    style="position: absolute; width: 100%; height: 100%; border: none; background: transparent;"
    allowtransparency="true"
  ></iframe>
</div> -->

<style>
  .fixed-50-layout {
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin: 20px 0;
  }

  .fixed-50-column {
    flex: 1 1 50%;
    width: 50%;
  }

  .aspect-container {
    position: relative;
    width: 100%;
    aspect-ratio: 4 / 5;
  }

  .aspect-container iframe,
  .aspect-container img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    border: none;
  }

  /* 📱 仍可设置在极端小屏时自动堆叠（可选） */
  @media (max-width: 600px) {
    .fixed-50-layout {
      flex-direction: column;
    }

    .fixed-50-column {
      width: 100%;
    }
  }
</style>

<div class="fixed-50-layout">
  <!-- 右侧照片 -->
  <div class="fixed-50-column">
    <div class="aspect-container">
      <img 
        src="me.png" 
        alt="Bruce's Photo">
    </div>
  </div>
  <!-- 左侧打字动画 -->
  <div class="fixed-50-column">
    <div class="aspect-container">
      <iframe 
        src="typing-effect.html" 
        allowtransparency="true"
        style="background: transparent;"></iframe>
    </div>
  </div>


</div>

<br>

<!-- ✅ Font Awesome 图标库（CDN） -->
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
  integrity="sha512-...略..."
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>

<style>
  .link-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin: 1.5rem 0;
  }

  .link-button {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 16px;
    border-radius: 6px;
    font-family: 'Inter', sans-serif;
    font-size: 0.85rem;
    font-weight: 600;
    text-decoration: none;
    color: #fff;
    min-width: 120px;
    height: 36px;
    transition: all 0.2s ease-in-out;
  }

  .link-button:hover {
    filter: brightness(1.15);
    transform: translateY(-1px);
  }

  /* 🎨 按钮颜色匹配截图 */
  .email { background-color: #6c4f27; }
  .cv { background-color: #873f33; }
  .github { background-color: #29584a; }
  .linkedin { background-color: #2c3c80; }

  /* 图标变小 */
  .link-button i {
    font-size: 0.75rem;
  }
</style>

<!-- ✅ 按钮内容 -->
<div class="link-grid">
  <a href="mailto:your-email@example.com" class="link-button email">
    <i class="fas fa-envelope"></i> Email
  </a>
  <a href="https://github.com/wha61" class="link-button github" target="_blank">
    <i class="fab fa-github"></i> Github
  </a>
  <a href="https://linkedin.com/in/wenxiang-he/" class="link-button linkedin" target="_blank">
    <i class="fab fa-linkedin"></i> LinkedIn
  </a>
  <a href="https://your-cv-link.com" class="link-button cv" target="_blank">
    <i class="fas fa-file-pdf"></i> CV
  </a>
</div>





<!-- ## Hello! I’m Bruce. 5th year [Computing Science](https://www.sfu.ca/computing/current-students/undergraduate-students/programs/computing-science-major.html) Undergraduate @ Simon Fraser University.  -->



## Content Catalogs Here 👇

-  **[Experience](about/experience.md) : Professional (co-op & research) experience, educational background, and volunteer;**
-  **[Projects](about/projects.md) : Research and application projects developed individually and collaboratively;**
-  **[Courses](courses/) : Influential Computing Science courses that shaped my learning journey;**
-  **[Blogs](blogs/) : Thoughts and reflections from my learning journey.**
-  **[Videos](Videos/) : That I find meaningful and useful.**
-  **[Links](Link/) : Unimportant links**

<!-- I am a Full Stack Software Developer with expertise in frontend, backend, and database management, as well as mobile app development and software testing. My strong interest and proficiency extend to Machine Learning, Artificial Intelligence, Computer Vision, and Robotics Systems.

Previously, I worked as a Full Stack Software Developer at Shandong Leading Petro-Tech, Sinopec. This summer, I completed a software engineering role developing the [iCradle Health Care System](https://github.com/drbfraser/CRADLE-Platform), a health care delivery support system for pregnant women, under the guidance of [Dr. Brian Fraser](https://www.sfu.ca/computing/people/faculty/brianfraser.html). Additionally, I was part of the [Prestrack-DSTI](https://www.dsti.gov.sl/prestrack/) testing team for a new [software release](https://www.dsti.gov.sl/prestrack/).

Currently, I am a research assistant at the [SFU Mars Lab](https://robotics.sfu.ca/mars.html) and have started my role as a Teaching Assistant at Simon Fraser University, working alongside [Dr. Brian Fraser](https://www.sfu.ca/computing/people/faculty/brianfraser.html) in [Python Programming course](https://opencoursehub.cs.sfu.ca/bfraser/grav-cms/cmpt120/home).

I am also pursuing the [AWS Certified Cloud Practitioner Certification](https://aws.amazon.com/certification/certified-cloud-practitioner/). -->

<style>
  .section {
    max-width: 750px;
    margin: 0 auto;
    padding: 2rem 1rem;
    font-family: 'Inter', sans-serif;
  }

  .section-title {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }

  .item {
    margin-bottom: 1.8rem;
    line-height: 1.6;
  }

  .item strong {
    font-weight: 600;
  }

  .item-date {
    font-size: 0.9rem;
    color: #999;
    margin-top: 0.3rem;
  }

  @media (prefers-color-scheme: dark) {
    .item-date {
      color: #aaa;
    }
  }
</style>

<div class="section">
  <div class="section-title">------Experience (Updated Regularly)------</div>


  <!-- <div class="item">
    💻 <strong>Full Stack Software Developer</strong> experienced in frontend, backend, database design, mobile app development, and software testing. Also passionate about <strong>Machine Learning</strong>, <strong>Artificial Intelligence</strong>, <strong>Computer Vision</strong>, and <strong>Robotics Systems</strong>.
    <div class="item-date">Ongoing</div>
  </div> -->

  <div class="item">
    <span style="display: inline-flex; align-items: center; font-size: 1.5rem; height: 1em;">👨‍🏫</span>
    Currently working as a <strong>Teaching Assistant</strong> for 
    <a href="https://opencoursehub.cs.sfu.ca/bfraser/grav-cms/cmpt213/home" target="_blank">
        CMPT 213 – Object-Oriented Programming in Java
    </a>
    and 
    <a href="https://opencoursehub.cs.sfu.ca/cmpt201/grav/home/d2-brian" target="_blank">
        CMPT 201 – Systems Programming
    </a> 
    at <strong>Simon Fraser University</strong>.
    <div class="item-date">Fall 2025 – Present</div>
  </div>
  
  <div class="item">
    <span style="display: inline-flex; align-items: center; font-size: 1.5rem; height: 1em;">🎓</span> 
    Started the <strong>Master of Professional Computer Science (Big Data)</strong> program at 
    <a href="https://www.sfu.ca/" target="_blank"><strong>Simon Fraser University</strong></a>, 
    focusing on Big Data systems, AI safety, and LLM jailbreak research.
    <div class="item-date">Fall 2025 – Present</div>
  </div>


  <div class="item">
      <span style="display: inline-flex; align-items: center; font-size: 1.5rem; height: 1em;">🛢️</span> Worked at <a href="http://www.sinopecgroup.com/group/en/" target="_blank"><strong>China Sinopec Geophysical Co., Ltd.</strong></a> helping build internal systems for training and deploying enterprise LLMs.
      <div class="item-date">Spring 2025 – Summer 2025</div>
  </div>

  <div class="item">
      <span style="display: inline-flex; align-items: center; font-size: 1.5rem; height: 1em;">🎓</span> Graduated with degree <strong>Bachelor of Science in Computing Science</strong> from <strong>Simon Fraser University</strong>.
      <div class="item-date">December 2024</div>
  </div>

  <div class="item">
      <span style="display: inline-flex; align-items: center; font-size: 1.5rem; height: 1em;">👨‍🏫</span> Worked as a <strong>Teaching Assistant</strong> for <a href="https://opencoursehub.cs.sfu.ca/bfraser/grav-cms/cmpt120/home" target="_blank">CMPT 120 – Python Programming</a> with <a href="https://www.sfu.ca/fas/computing/people/faculty/faculty-members/brian-fraser.html" target="_blank">Dr. Brian Fraser</a> at <strong>Simon Fraser University</strong>.
      <div class="item-date">Fall 2024</div>
  </div>

  <div class="item">
      <span style="display: inline-flex; align-items: center; font-size: 1.5rem; height: 1em;">👨‍🏫</span> Worked as an <strong>Undergraduate Research Assistant</strong> at <a href="https://robotics.sfu.ca/mars.html" target="_blank"><strong>The Multi-Agent Robotic Systems (MARS) Lab</strong></a> at <strong>Simon Fraser University</strong>, working on an NSERC USRA-funded project about robotics systems and reinforcement learning experiments, under the guidance of <a href="https://www.sfu.ca/fas/computing/people/faculty/faculty-members/mo-chen.html" target="_blank"><strong>Professor Mo Chen</strong></a>.
      <div class="item-date">Summer 2024</div>
  </div>

  <div class="item">
      <span style="display: inline-flex; align-items: center; font-size: 1.5rem; height: 1em;">🏢</span> Worked as a <strong>Software Test Engineer</strong> at <a href="https://www.dsti.gov.sl/prestrack/" target="_blank"><strong>Prestrack</strong></a>, a Pregnancy Registration and Service Tracking application developed by the <a href="https://www.dsti.gov.sl/" target="_blank"><strong>Directorate of Science, Technology and Innovation (DSTI), Sierra Leone</strong></a>.
      <div class="item-date">Summer 2024</div>
  </div>

  <div class="item">
      <span style="display: inline-flex; align-items: center; font-size: 1.5rem; height: 1em;">🧑‍💻</span> Contributed to the development of the <a href="https://github.com/drbfraser/CRADLE-Platform" target="_blank"><strong>iCradle Health Care System</strong></a>, a vital signs monitor, alert and support system for pregnant women, under the guidance of <a href="https://www.sfu.ca/fas/computing/people/faculty/faculty-members/brian-fraser.html" target="_blank"><strong>Dr. Brian Fraser</strong></a>.
      <div class="item-date">Summer 2024</div>
  </div>

  <div class="item">
      <span style="display: inline-flex; align-items: center; font-size: 1.5rem; height: 1em;">🛢️</span> Worked as a <strong>Full Stack Software Developer</strong> at <a href="https://robotics.sfu.ca/mars.html" target="_blank"><strong>Shandong Leading Petro-Tech, Shengli Oilfield Group, Sinopec</strong></a>, building an internal Civil Explosive Product Monitoring System.
      <div class="item-date">Spring 2024</div>
  </div>

  <div class="item">
      <span style="display: inline-flex; align-items: center; font-size: 1.5rem; height: 1em;">🛢️</span> Worked as a <strong>Logging Interpretation and System Operations Intern</strong> at <strong>China Sinopec Geophysical Co., Ltd.</strong>, focusing on logging data processing, Oracle Database, and Linux-based storage systems.
      <div class="item-date">Summer 2021</div>
  </div>


  <!-- <div class="item">
    ☁️ Currently pursuing the <a href="https://aws.amazon.com/certification/certified-cloud-practitioner/" target="_blank"><strong>AWS Certified Cloud Practitioner Certification</strong></a>.
    <div class="item-date">In Progress</div>
  </div> -->

  <!-- 🔗 Bottom Centered Button -->
<div style="text-align: center; margin-top: 2.5rem;">
  <a href="https://wenxianghe.com/about/experience" target="_blank" class="project-button-link">
    🔗 View All Experience
  </a>
</div>
</div>







<style>
  .featured-project-container {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    gap: 36px;
    margin: 3rem 0 4rem 0;
    font-family: 'Inter', sans-serif;
  }

  .project-image-container {
    position: relative; /* 用于定位文字提示 */
    flex: 1 1 45%;
    max-width: 540px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
    margin: 0 auto;
  }

  .project-image-container img {
    width: 100%;
    height: auto;
    display: block;
    filter: brightness(0.6); /* 默认微微暗 */
    transition: all 0.4s ease;
  }

  .project-image-container:hover img {
    filter: brightness(1) contrast(1); /* 鼠标悬停增强亮度/对比 */
  }

  /* 📍 中间提示文字 */
  .project-image-container .hover-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1rem;
    font-weight: 600;
    color: white;
    background: rgba(0, 0, 0, 0.5);
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  .project-image-container:hover .hover-text {
    opacity: 1;
  }

  .project-text-container {
    flex: 1 1 50%;
    max-width: 620px;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    margin-top: -1rem;
  }

  .project-title {
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--text-color); /* ✅ 使用主题变量替代硬编码颜色 */
  }

  .project-desc-box {
    background-color: var(--desc-bg, #1e293b);
    padding: 1rem 1.2rem;
    border-radius: 10px;
    font-size: 0.95rem;
    color: var(--desc-text, #e5e7eb);
    line-height: 1.6;
  }

  .project-tech {
    font-size: 0.8rem;
    font-family: monospace;
    color: var(--tech-color, #6b7280);
    margin-top: 0.2rem;
  }

  a[href^="http"]::after {
    display: none !important;
  }

  @media (max-width: 768px) {
    .featured-project-container {
      flex-direction: column;
      text-align: left;
    }

    .project-text-container {
      margin-top: 1rem;
    }
  }

  /* 🔘 Button-style link (outlined, adaptive) */
  .project-button-link {
    display: inline-block;
    border: 2px solid #2563eb;
    color: #2563eb;
    padding: 10px 20px;
    border-radius: 6px;
    font-size: 0.95rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .project-button-link:hover {
    background-color: rgba(37, 99, 235, 0.1);
  }

  @media (prefers-color-scheme: light) {
    .project-button-link {
      color: #1d4ed8;
      border-color: #1d4ed8;
    }

    .project-button-link:hover {
      background-color: rgba(29, 78, 216, 0.1);
    }
  }
</style>

<div class="section">
  <div class="section-title">------Featured Research and Projects 
------</div>
</div>

<!-- 🧠 LLM Jailbreak & Safety Research -->
<div class="featured-project-container">

  <a href="https://wenxianghe.com/about/projects#llm-jailbreak-research" class="project-image-container" target="_blank">
    <img src="pics/llm-jailbreak.png" alt="LLM Jailbreak Research Screenshot" />
    <div class="hover-text">Click for details</div>
  </a>

  <div class="project-text-container">
    <div class="project-title">LLM Jailbreak & Safety Evaluation Research</div>
    <div class="project-desc-box">
      A systematic research project focused on evaluating and bypassing safety mechanisms in modern large language models 
      (LLMs). The work explores multi-stage jailbreak pipelines, adversarial prompting, safety-aligned system prompt 
      manipulation, and automated template → slot filling frameworks.  
      <br><br>
      Includes experiments across GPT-4/5 series, Claude models, Gemini 2.0/2.5, and Qwen2.5, with an emphasis on 
      safety-evasion patterns, robustness evaluation, and long-context jailbreak behavior.
    </div>
    <div class="project-tech">
      Python · PyTorch · OpenAI API · Anthropic API · Gemini API · Prompt Engineering · LLM Safety Evaluation · Multi-Stage Jailbreak Pipelines
    </div>
  </div>
</div>


<!-- 💻 Civil Explosive Monitoring System -->
<div class="featured-project-container">
  <a href="https://wenxianghe.com/about/projects#civil-explosive-product-monitoring-system" class="project-image-container" target="_blank">
    <img src="pics/cems-main.png" alt="Civil Explosive Monitoring System Screenshot" />
    <div class="hover-text">Click for details</div>
  </a>


  <div class="project-text-container">
    <!-- <div class="project-subtitle">Featured Project</div> -->
    <div class="project-title">Civil Explosive Product Monitoring System</div>
    <div class="project-desc-box">
      A Domain-Driven Design (DDD) architectual patten based system engineered to streamline the monitoring and management of civil explosive products for Sinopec (China Petrochemical Corp), integrates comprehensive functionalities including product registration, tracking, security management, license approval, and inventory control.
    </div>
    <div class="project-tech">
      ASP.NET (C#) · ABP Framework · MS SQL Server · React · AntDesignPro · UMI · Docker · Kubernetes · GitLab Actions
    </div>
  </div>
</div>



<!-- 💻 Featured Project Card -->
<div class="featured-project-container">

  <a href="https://wenxianghe.com/about/projects#icradle-health-care-system" class="project-image-container" target="_blank">
    <img src="pics/cradle.png" alt="iCradle Health Care System Screenshot" />
    <div class="hover-text">Click for details</div>
  </a>

  <div class="project-text-container">
    <!-- <div class="project-subtitle">Featured Project</div> -->
    <div class="project-title">iCradle Health Care System</div>
    <div class="project-desc-box">
      A health care delivery support system designed to assist pregnant women in the Bidi Bidi refugee settlement in Uganda and manage medical patient referrals in Sierra Leone. 
    </div>
    <div class="project-tech">
      Python · Flask · React · TypeScript · Kotlin · Cypress · Detekt · CI/CD · GitHub Enterprise · Scrum · Kanban
    </div>
  </div>
</div>


<!-- 🔗 Bottom Centered Button -->
<div style="text-align: center; margin-top: 2.5rem;">
  <a href="https://wenxianghe.com/about/projects" target="_blank" class="project-button-link">
    🔗 View All Projects
  </a>
</div>






<!-- In my free time, I enjoy playing badminton, where I serve as a Teaching Assistant at [Stage 18 Badminton Centre](https://www.stage18badminton.com/), traveling, and eating delicious food.


This is my digital space where I share my experiences, projects, thoughts, and so on. It's still under construction, but I plan to keep it updated regularly. Stay tuned for updates and thanks for stopping by!

💪😃🧠🎾🍲 -->

<style>
  .section {
    max-width: 750px;
    margin: 0 auto;
    padding: 2rem 1rem;
    font-family: 'Inter', sans-serif;
  }

  .section-title {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }

  .misc-item {
    margin-bottom: 1.2rem;
    font-size: 1rem;
    line-height: 1.6;
  }

  .misc-item span {
    margin-right: 0.6rem;
  }
</style>

<div class="section">
  <div class="section-title">More About Me</div>

  <div class="misc-item">
    In my free time, I enjoy playing badminton, and I am honored to serve as a Coach Assistant at <a href="https://www.stage18badminton.com/" target="_blank">Stage 18 Badminton Centre</a>.
  </div>

  <div class="misc-item">
    I also enjoy traveling and discovering new places and food.
  </div>

  <!-- <div class="misc-item">
    <span>✈️</span> I also enjoy traveling and discovering new places and food.
    <div style="margin-top:10px;">
      <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1TzAogw9WdBpqfcF7DXFh2eVEO_AIDns&ehbc=2E312F" width="640" height="480"></iframe>
    </div>
  </div> -->

  <div class="misc-item">
    This is my digital space where I share my experiences, projects, thoughts, and more.
  </div>

  <div class="misc-item">
    It’s still under construction, but I plan to keep it updated regularly. Thanks for stopping by!
  </div>

  
</div>


<!-- 🌐 Embedded Website: HammyHome -->
<div class="section">
  <div class="section-title">Digital pet: Hammy</div>
  <div style="position: relative; width: 100%; padding-top: 60%;">
    <iframe 
      src="https://hammyhome.com/" 
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
      loading="lazy"
      allowfullscreen>
    </iframe>
  </div>
</div>



<div id="clustrmaps-container">
    <script type="text/javascript" id="clustrmaps" src="//clustrmaps.com/globe.js?d=_RARPnJtxhnMzNqgUJkwyY4L1L6xzx8JiPcO6AsEnY0"></script>
</div>


<!-- ![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fwha61.github.io%2FPortfolio%2F&count_bg=%23848D7D&title_bg=%2343D7D7&icon=&icon_color=%23000000&title=Total+view&edge_flat=false) -->






