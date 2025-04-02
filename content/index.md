---
title: Home 🏬
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
    aspect-ratio: 4 / 4.5;
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
  <a href="https://your-cv-link.com" class="link-button cv" target="_blank">
    <i class="fas fa-file-pdf"></i> CV
  </a>
  <a href="https://github.com/wha61" class="link-button github" target="_blank">
    <i class="fab fa-github"></i> Github
  </a>
  <a href="https://linkedin.com/in/wenxiang-he/" class="link-button linkedin" target="_blank">
    <i class="fab fa-linkedin"></i> LinkedIn
  </a>
</div>





<!-- ## Hello! I’m Bruce. 5th year [Computing Science](https://www.sfu.ca/computing/current-students/undergraduate-students/programs/computing-science-major.html) Undergraduate @ Simon Fraser University.  -->



### Content Catalogs Here 👇

-  **[Experience](about/experience.md) : My educational background, work (co-op), and volunteering experiences;**
-  **[Projects](about/projects.md) : Personal and team projects I've developed;**
-  **[Courses](courses/) : Taken related to Computing Science;**
-  **[Blogs](blogs/) : Thoughts and reflections from my learning journey.**
-  **[Videos](Videos/) : That I find meaningful and useful.**

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
  <div class="section-title">Experience (Updated Regularly 🔄)</div>


  <!-- <div class="item">
    💻 <strong>Full Stack Software Developer</strong> experienced in frontend, backend, database design, mobile app development, and software testing. Also passionate about <strong>Machine Learning</strong>, <strong>Artificial Intelligence</strong>, <strong>Computer Vision</strong>, and <strong>Robotics Systems</strong>.
    <div class="item-date">Ongoing</div>
  </div> -->
  
  <div class="item">
    🏢 Currently working at <strong>China Petrochemical Corporation (Sinopec)</strong> on applying large-scale models to logging interpretation. Recently exploring <strong>DeepSeek</strong>, large model deployment strategies, and agent frameworks.
    <div class="item-date">Spring 2025 – Present</div>
  </div>


  <div class="item">
    🎓 Graduated with degree <strong>Bachelor of Science in Computing Science</strong> from <strong>Simon Fraser University</strong>.
    <div class="item-date">December 2024</div>
  </div>


  <div class="item">
    👨‍🏫 Served as a <strong>Teaching Assistant</strong> for <a href="https://opencoursehub.cs.sfu.ca/bfraser/grav-cms/cmpt120/home" target="_blank">CMPT 120 – Python Programming</a> with <a href="https://www.sfu.ca/computing/people/faculty/brianfraser.html" target="_blank">Dr. Brian Fraser</a> at <strong>Simon Fraser University</strong>.
    <div class="item-date">Fall 2024</div>
  </div>

  <div class="item">
    👨‍🏫 Worked as a <strong>Research Assistant</strong> at the <a href="https://robotics.sfu.ca/mars.html" target="_blank">SFU <strong>MARS Lab</strong></a>, working on robotics systems and reinforcement learning experiments.
    <div class="item-date">Summer 2024 – Fall 2024</div>
  </div>

  <div class="item">
    🏢 Worked as a QA tester on <a href="https://www.dsti.gov.sl/prestrack/" target="_blank"><strong>Prestrack</strong></a>, a new software project developed by the <a href="https://www.dsti.com/" target="_blank"><strong>Directorate of Science, Technology and Innovation (DSTI)</strong></a>, Sierra Leone.
    <div class="item-date">Summer 2024</div>
  </div>

  <div class="item">
    🧑‍💻 Completed a software engineering project developing the <a href="https://github.com/drbfraser/CRADLE-Platform" target="_blank"><strong>iCradle Health Care System</strong></a>, a support platform for maternal care, under the guidance of <a href="https://www.sfu.ca/computing/people/faculty/brianfraser.html" target="_blank"><strong>Dr. Brian Fraser</strong></a>.
    <div class="item-date">Summer 2024</div>
  </div>

  <div class="item">
    🏢 Worked at <strong>Shandong Leading Petro-Tech, Sinopec</strong> as a Full Stack Developer, building internal platforms and systems.
    <div class="item-date">Spring 2024</div>
  </div>

  <div class="item">
    🛢️ Worked as a <strong>Logging Interpretation and System Operations Intern</strong> at <strong>China Sinopec Geophysical Co., Ltd.</strong>, focusing on logging data processing, Oracle Database, and Linux-based storage systems.
    <div class="item-date">Summer 2021</div>
  </div>


  <!-- <div class="item">
    ☁️ Currently pursuing the <a href="https://aws.amazon.com/certification/certified-cloud-practitioner/" target="_blank"><strong>AWS Certified Cloud Practitioner Certification</strong></a>.
    <div class="item-date">In Progress</div>
  </div> -->
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
    <span>🏸</span> In my free time, I enjoy playing badminton, where I serve as a Teaching Assistant at <a href="https://www.stage18badminton.com/" target="_blank">Stage 18 Badminton Centre</a>.
  </div>

  <div class="misc-item">
    <span>✈️</span> I also enjoy traveling and discovering new places and food.
  </div>

  <div class="misc-item">
    <span>💻</span> This is my digital space where I share my experiences, projects, thoughts, and more.
  </div>

  <div class="misc-item">
    <span>🚧</span> It’s still under construction, but I plan to keep it updated regularly. Thanks for stopping by!
  </div>
</div>


<div id="clustrmaps-container">
    <script type="text/javascript" id="clustrmaps" src="//clustrmaps.com/globe.js?d=_RARPnJtxhnMzNqgUJkwyY4L1L6xzx8JiPcO6AsEnY0"></script>
</div>


![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fwha61.github.io%2FPortfolio%2F&count_bg=%23848D7D&title_bg=%2343D7D7&icon=&icon_color=%23000000&title=Total+view&edge_flat=false)






