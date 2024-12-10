---
title: "Projects" 
date: 2023-02-18T11:08:02-12:00
draft: false
---
Here are the technical projects that I build.

[ML Development](https://wha61.github.io/Portfolio/about/projects#ml-development) |
[Web Development](https://wha61.github.io/Portfolio/about/projects#web-development) |
[Mobile Development](https://wha61.github.io/Portfolio/about/projects#mobile-development) |
[OS Development](https://wha61.github.io/Portfolio/about/projects#os-development)

The basic intro and technical stack are provided.

For detailed information you can check the Github link below each project.

---

# ML Development

## Fantasia Ambience: Intelligent Ambient Audio Generation System  

<!-- <div style="position: relative; width: 100%; padding-bottom: 56.25%;">
  <iframe src="fantasia.html" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" frameborder="0"></iframe>
</div> -->

A research project in collaboration with PhD student Sheng-Yang Chiu and supervised by **Professor Xingdong Yang** at SFU, **Fantasia Ambience** is an intelligent system that identifies ambient sounds and creates customized atmospheric audio based on user preferences. 

Targeted for submission to the **ACM Conference on Designing Interactive Systems (DIS) 2025**, the project leverages advanced technologies for audio detection and generation.  

> • Developed an application that intelligently classifies input sounds and generates customized artificial audio outputs based on user-defined preferences. <br>
> 
> • Integrated large-scale model libraries, including **UNet-based diffusion models**, for sound tagging and audio generation, designing and implementing a comprehensive architecture for advanced audio processing. <br>
> 
> • Managed the cloud deployment of the application using **AWS Lambda**, ensuring high-performance and scalability. <br>

**Tech Stack:**  

- **Machine Learning:** PyTorch, UNet-based diffusion models.  
- **Audio Processing:** Sound detection and tagging, TTA (Test-Time Augmentation) generation.  
- **Cloud Deployment:** AWS Lambda.  

## Advanced Object Detection and Semantic Segmentation Using Deep Learning  

<div style="position: relative; width: 100%; padding-bottom: 56.25%;">
  <iframe src="object_detection.html" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" frameborder="0"></iframe>
</div>

A course project at Simon Fraser University focusing on advanced deep learning techniques for object detection and semantic segmentation. The project utilized state-of-the-art architectures and datasets to develop and evaluate high-performance machine learning models.  

> • Implemented and fine-tuned **Faster R-CNN** and **Mask R-CNN** models, achieving an **AP50 improvement** from 38.8% to 69.8%. <br>
> 
> • Enhanced training stability with **FP16 precision**, optimized hyperparameters, and configured anchor sizes for precise object detection. <br>
> 
> • Designed **U-Net adaptations with skip connections**, achieving a **Mean IoU of 95.3%** for semantic segmentation. <br>
> 
> • Developed and evaluated deep learning pipelines using **PyTorch**, **Detectron2**, and **COCO datasets**. <br>

**Tech Stack:**  

- **Machine Learning Frameworks:** PyTorch, Detectron2.  
- **Models:** Faster R-CNN, Mask R-CNN, U-Net.  
- **Datasets:** COCO (Common Objects in Context).  
- **Optimization Techniques:** FP16 precision, hyperparameter tuning, anchor configuration.  

<a target="_blank" href="https://github.com/wha61/Detection-SemanticSegmentation-InstanceSegmentation">GitHub</a>&emsp;

## Image Classification of CIFAR100 Dataset using PyTorch  

<!-- <div style="position: relative; width: 100%; padding-bottom: 56.25%;">
  <iframe src="cifar100_classification.html" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" frameborder="0"></iframe>
</div> -->

A course project at Simon Fraser University aimed at achieving high classification accuracy on the **CIFAR100 dataset** through advanced deep learning techniques. The project was part of a competitive Kaggle competition, showcasing cutting-edge approaches in computer vision.  

> • Designed and implemented a **Deep Convolutional Neural Network (CNN)** using PyTorch, achieving **78% classification accuracy** on the test set. <br>
> 
> • Improved model performance by applying **transfer learning** and **data augmentation**, leading to a **13th percentile placement** in the Kaggle competition. <br>
> 
> • Optimized the baseline architecture, reducing training time and enhancing prediction accuracy through **hyperparameter tuning** and **batch normalization**. <br>

**Tech Stack:**  

- **Machine Learning Frameworks:** PyTorch.  
- **Dataset:** CIFAR100.  
- **Techniques:** Transfer learning, data augmentation, batch normalization.  
- **Optimization:** Hyperparameter tuning, architecture improvement.  

<a target="_blank" href="https://github.com/wha61/Image-classification-and-PyTorch-Introduction">GitHub</a>&emsp;

## 3D Reconstruction  

<div style="position: relative; width: 100%; padding-bottom: 56.25%;">
  <iframe src="3d-reconstruction.html" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" frameborder="0"></iframe>
</div>

A course project at Simon Fraser University focusing on implementing key techniques for 3D reconstruction, including sparse and dense reconstruction, pose estimation, and multi-view stereo. The project involved applying computer vision algorithms to reconstruct 3D structures from 2D images.  

> • Implemented the **Eight Point Algorithm** to compute the fundamental matrix (F) and the **Essential Matrix (E)** for accurate epipolar geometry and pose estimation. <br>
> 
> • Developed a **Normalized Cross-Correlation (NCC)**-based approach for reliable feature matching and accurate epipolar correspondences. <br>
> 
> • Triangulated 3D points using **Singular Value Decomposition (SVD)** and ensured depth consistency with positive z-coordinates for all points. <br>
> 
> • Performed **Image Rectification** and dense window matching to generate a depth map. <br>
> 
> • Achieved low re-projection errors and optimized intrinsic/extrinsic parameters for accurate pose estimation. <br>

**Tech Stack:**  

- **Algorithms:** Eight Point Algorithm, Epipolar Geometry, Triangulation, Pose Estimation.  
- **Techniques:** NCC matching, Image Rectification, Depth Map Generation.  
- **Libraries/Tools:** Python, NumPy, Matplotlib.  

<a target="_blank" href="https://github.com/wha61/3D-Reconstruction">GitHub</a>&emsp;


# Web Development

## Civil Explosive Product Monitoring System

<div style="position: relative; width: 100%; padding-bottom: 56.25%;">
  <iframe src="cems.html" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" frameborder="0"></iframe>
</div>

A Domain-Driven Design (DDD) architectual patten based system engineered to streamline the monitoring and management of civil explosive products for Sinopec (China Petrochemical Corp). The platform integrates comprehensive functionalities including product registration, tracking, security management, license approval, and inventory control. During my time at work, I was responsible for the design and development of the daily status page. Additionally, I communicated in reagulary with the client each week, successfully completing the trial run of the system.

**Tech Stack:**

- **Back-end:** ASP.NET (C#), ABP Framework, MS SQL Server
- **Web Front-end:** React, AntDesignPro, UMI
- **Code Repository:** Docker, Kubernetes, GitLab Actions.

## iCradle Health Care System

<div style="position: relative; width: 100%; padding-bottom: 56.25%;">
  <iframe src="cradle.html" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" frameborder="0"></iframe>
</div>

<img src="cradle_mobile.png" class="d-block w-100" alt="Festivie Main">

A health care delivery support system designed to assist pregnant women in the Bidi Bidi refugee settlement in Uganda and manage medical patient referrals in Sierra Leone. The platform integrates functionalities for community health monitoring and patient record management. Field workers use an Android app to monitor health and refer patients to health centers. Health care workers in the centers use a web app to access patient records, record treatments, and recommend follow-ups. Developed in collaboration with doctors at Kings College London, the system aims to be actively used to provide direct health benefits.

**Tech Stack:**

- **Back-end:** Python, Flask
- **Web Front-end:** React, TypeScript
- **Mobile Apps:** Kotlin
- **Testing:** Cypress, Detekt
- **DevOps:** Git Workflow, CI/CD, SFU's GitHub Enterprise server
- **Agile Development:** Scrum, Kanban

<a target="_blank" href="https://github.com/drbfraser/CRADLE-Platform">GitHub</a>&emsp;
<a target="_blank" href="https://cradleplatform.com/">Demo</a>

## Festival Planner

<div style="position: relative; width: 100%; padding-bottom: 56.25%;">
  <iframe src="festivie.html" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" frameborder="0"></iframe>
</div>

A MERN stack web application designed to enhance the festival-going experience for both organizers and attendees. Acting as a comprehensive hub, it offers real-time updates and personalized planning tools tailored to various large-scale events, including music festivals, conventions, and carnivals.

Stack: React, NodeJS, Express, MongoDB, Docker, GCP, Web Socket, GitLab Actions    

<a target="_blank" href="https://github.com/wha61/FestivalPlanner-MERNstack">GitHub</a>&emsp;
<a target="_blank" href="http://47.120.67.126:3000/">Demo</a>

## Course-Planner 
![[cp_demo1.png]]
![[cp_demo2.png]]

A Spring Boot server application designed to assist students in planning their courses by providing insights into the historical offering patterns of courses at SFU. Utilizing a REST  interface, it supports a web-based UI for easy access and interaction. The server processes locally stored CSV/JSON files containing detailed data on SFU course offerings, organizing this information into a structured model. Through its REST API, students can retrieve data that may help predict future course availability, thereby facilitating more informed course planning and scheduling decisions.

Stack: Spring Boot, Java, HTML/CSS/JavaScript.  

<a target="_blank" href="https://github.com/wha61/Course-Planner">GitHub</a>

## Covid-19-DataViewerCanada
![[covid.png]]

A frontend web app using Angular framework and ChartJs that achieve COVID-19 data viewer function for Canada, will display COVID-19 statistics by regions in Canada while allowing users to filter and save the data for a given time period. This is done by leveraging two web APIs: a data manager API, and the Canada open-covid API (https://opencovid.ca/api/)

Stack: Angular, Bootstrap, ChartJS.

<a target="_blank" href="https://github.com/wha61/Covid-19-DataViewerCanada">GitHub</a>&emsp;
<a target="_blank" href="http://47.120.67.126:81/">Demo</a>

## Chatroom Beta

<div style="position: relative; width: 100%; padding-bottom: 56.25%;">
  <iframe src="chatroom.html" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" frameborder="0"></iframe>
</div>

A dynamic and interactive web application designed to facilitate real-time communication among users. Utilizing a robust stack of eact, NodeJs, and MySQL, this project aims to provide a seamless chat experience with a focus on security, efficiency, and user-friendly design.

Stack: React, NodeJs, Express, Socket.io, Encryption.

<a target="_blank" href="https://github.com/wha61/Chatroom">GitHub</a>

## Weather Forecast

<div style="position: relative; width: 100%; padding-bottom: 56.25%;">
  <iframe src="weather.html" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" frameborder="0"></iframe>
</div>

Retrieve weather information based on location or city name

Stack: Vue, OpenWeatherMap API.

<a target="_blank" href="https://github.com/wha61/weatherForecast">GitHub</a>&emsp;
<a target="_blank" href="http://47.120.67.126:8080/">Demo</a>

## Recipe
![DEMO](RecipeDemo.gif)

A full stack recipe app using the PEAN stack (PostgreSQL, Express framework, NodeJS, and Angular as the frontend framework), encapsulated in Docker containers for both frontend and backend, and deployed on Docker Hub.

Stack: PostgreSQL, Express, NodeJS, Angular, Docker, Docker Compose

<a target="_blank" href="https://github.com/wha61/Recipe-PEANstack-WebApp">GitHub</a>

# Mobile Development

## Flame 
![[flame.png]]

Ever planed to go see a concert with a friend before they cancel last minute? A wasted ticket is a common occurance and it can be a daunting task to quicksell that ticket. Flame is a secondhand ticket selling app that provides a platform for users to easily sell that ticket that they quickly need to get rid of.

Stack: Kotlin, Android SDK, MVVM Design pattern.

<a target="_blank" href="https://github.com/wha61/Flame">GitHub</a>&emsp;
<a target="_blank" href="https://youtu.be/dKfO1vNCFzM">Video Demo</a>&emsp;
<a target="_blank" href="https://github.com/wha61/Flame/blob/main/public/Flame.apk">Apk Download</a>&emsp;

## MyRuns-Fitness 
![[myruns.png]]

MyRuns is an Android fitness application designed to track and log various exercise activities while providing real-time location updates using the Google Maps API. It offers users the capability to monitor their workout progress, including speed, distance, and route taken, which is visually represented on a map for easy navigation and review. The app also archives each workout session in a history tab for future reference.

Additionally, the settings tab provides customization options, allowing users to tailor the app according to their personal preferences. This app utilizes the GoogleMaps API to display the user's location and track their movement in order to display the speed, distance, etc. The app also features activity recognition that detects whether the user is sitting, walking, or running through a classification model in Weka.

A standout feature of MyRuns is its integrated activity recognition technology, which employs a sophisticated classification model developed in Weka. This model accurately identifies the user's current activity state, distinguishing between states such as sitting, walking, and running, thereby enhancing the app's capability to provide activity-specific tracking and insights.

Stack: Kotlin, Android SDK, MVVM Design pattern.

<a target="_blank" href="https://github.com/wha61/MyRuns-Fitness-AndroidAPP">GitHub</a>&emsp;
<a target="_blank" href="https://github.com/wha61/MyRuns-Fitness-AndroidAPP/blob/main/app-debug.apk">Apk Download</a>&emsp;

# OS Development

## C-Shell
![DEMO](cshell.png)

A command-line interpreter or shell supporting the environment variables, history of executed commands, and basic shell functionalities.

Stack: C, Linux/Unix

<a target="_blank" href="https://github.com/wha61/CShell">GitHub</a>

## Lets-Talk

From port 3000 to port 3001:
![DEMO](letstalk1.png)
From port 3001 to port 3000:
![DEMO](letstalk2.png)

A chatroom with many features built in C implemented with multithreading concepts and UDP. This chatroom enables a user at one terminal to communicate with a user at another terminal.

Stack: C, Linux/Unix, Multithreading, UDP

<a target="_blank" href="https://github.com/wha61/Lets-Talk">GitHub</a>

