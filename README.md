# CI/CD Pipeline for Calculator WebApp 🔥  

This repository contains a **Calculator WebApp** project with an integrated **CI/CD pipeline** using **GitHub Actions** and **Jenkins** to automate building, testing, and deploying the Dockerized application. 🎯  

## 🛠️ Tech Stack  
- **Node.js** (for backend logic)  
- **Jest** (for testing)  
- **Docker** (for containerization)  
- **GitHub Actions** (for CI/CD)  
- **Jenkins** (for CI/CD Automation)  

## 🚀 Features  
✅ **Automatic Testing**: Runs tests after every push to the `main` branch to ensure application integrity. 🧪  
🐳 **Docker Build & Push**: Successful tests trigger Docker image creation and deployment to **Docker Hub**.  
⚙️ **CI/CD Pipeline**: **GitHub Actions & Jenkins** automate testing, building, and deployment processes.  

---

## 💡 CI/CD Pipelines  

### **GitHub Actions Workflow**  
The **GitHub Actions** pipeline is set up to trigger on every push to the `main` branch.  

### **Workflow Structure:**  
#### **1️⃣ build-test Job**  
- Sets up the **Node.js** environment.  
- Installs dependencies (`npm install`).  
- Runs tests using **Jest**.  

#### **2️⃣ docker-build-push Job**  
- Logs into **Docker Hub** using **GitHub Secrets**.  
- Builds the Docker image and pushes it to **Docker Hub**.  
- Logs out from Docker Hub after deployment. 🚀  

### **Jenkins Pipeline**  
A **Jenkinsfile** is included for CI/CD automation using **Jenkins**.  

#### **Jenkins Pipeline Stages:**  
1. **Checkout Code**: Pulls the latest changes from the repository.  
2. **Set up Node.js**: Installs Node.js and dependencies.  
3. **Run Tests**: Executes Jest tests.  
4. **Build Docker Image**: Builds the Docker container.  
5. **Push to Docker Hub**: Logs into **Docker Hub** and uploads the image.  
6. **Deployment (Optional)**: Can be extended for automated deployment.  

---

## 🖼️ Screenshot on Test Failure  
![Image](https://github.com/user-attachments/assets/3cde33b3-f3d9-432f-a9f0-513c88d3f894)
---

## 🧑‍💻 GitHub Secrets Configuration  
To securely log in to Docker Hub, set up the following secrets in **GitHub Secrets**:  

- **DOCKERHUB_USERNAME**: Your Docker Hub username.  
- **DOCKERHUB_TOKEN**: Your Docker Hub Personal Access Token (PAT).  

🔒 These secrets are securely injected into GitHub Actions for authentication during the build process.  

---

## 🐳 Docker Hub Integration  
Once the **Docker image** is successfully built, it is tagged and pushed to **Docker Hub** with:  

- `latest`: The most recent version of the app.  
- `${{ github.sha }}`: A unique identifier for each commit.  

Find your Docker image on **Docker Hub**:  
👉 **[martinjohny/calculator-webapp](https://hub.docker.com/r/martinjohny/calculator-webapp)**  

---

## ⚙️ CI/CD Pipeline Summary  
1. **GitHub Actions** automates testing and Docker image creation.  
2. **Jenkins** provides an additional automation pipeline for more flexibility.  
3. **Docker Hub** stores the containerized app for deployment.  

