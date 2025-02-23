# 📦 CI/CD Pipeline for Calculator WebApp 🔥

This repository contains a **Calculator WebApp** project with an integrated **CI/CD pipeline** using **GitHub Actions** for automating the process of building, testing, and deploying the Dockerized application. 🎯

---

## 🛠️ Tech Stack

- **Node.js** (for backend logic)
- **Jest** (for testing)
- **Docker** (for containerization)
- **GitHub Actions** (for CI/CD)
  
---

## 🚀 Features

- **Automatic Testing**: After every push to the `main` branch, tests will be run to verify the integrity of your application. 🧪✅
- **Docker Build & Push**: Every successful test run triggers the creation and deployment of a Docker image to Docker Hub. 🐳
- **CI/CD Pipeline**: Using GitHub Actions to automate testing and deployment processes. ⚙️🤖

---

## 💡 GitHub Actions CI/CD Pipeline

This project is set up to use GitHub Actions for Continuous Integration (CI) and Continuous Deployment (CD). Here’s how it works:

1. **Push to `main` Branch**: When code is pushed to the `main` branch, the pipeline is triggered. The workflow is set to run the tests and then build and push a Docker image to Docker Hub. 🔄

2. **Workflow Structure**: 
   - **`build-test` Job**: 
     - Installs dependencies.
     - Runs tests using Jest. 
   - **`docker-build-push` Job**: 
     - Logs into Docker Hub using GitHub secrets.
     - Builds the Docker image and pushes it to Docker Hub with the `latest` tag and the unique commit SHA tag.
     - Logs out from Docker Hub after the build is complete. 🚪

---

## 🖼️ Screenshot on Test Failure

If a test fails in the pipeline, 

![Image](https://github.com/user-attachments/assets/3cde33b3-f3d9-432f-a9f0-513c88d3f894)

---

## 🧑‍💻 GitHub Secrets Configuration

To securely log in to Docker Hub and push the Docker image, the following secrets need to be set in your GitHub repository:

### Steps to set up DockerHub credentials in GitHub Secrets:

1. Navigate to your GitHub repository.
2. Go to **Settings** > **Secrets** > **New repository secret**.
3. Add the following secrets:
    - **`DOCKERHUB_USERNAME`**: Your Docker Hub username.
    - **`DOCKERHUB_TOKEN`**: Your Docker Hub Personal Access Token (PAT).

🔒 These secrets are securely injected into the GitHub Actions pipeline for authentication during the build process.

---

## 🐳 Docker Hub Integration

Once the Docker image is successfully built, it is tagged and pushed to Docker Hub with the following tags:

- `latest`: The most recent version of the application.
- `${{ github.sha }}`: A unique identifier for each commit.

You can find your Docker image on Docker Hub by navigating to:
https://hub.docker.com/r/martinjohny/calculator-webapp

---

## ⚙️ Workflow Explanation

### **CI/CD Pipeline:**

#### 1. **build-test Job** 🧪

- **Set up Node.js**: The pipeline starts by setting up the Node.js environment.
- **Install Dependencies**: `npm install` installs the required dependencies.
- **Run Tests**: Jest runs the tests to ensure everything works fine.

#### 2. **docker-build-push Job** 🚀

- **Docker Hub Login**: Authenticates with Docker Hub using the secrets.
- **Build & Push Docker Image**: The Docker image is built using the current code and pushed to Docker Hub.
- **Logout**: Finally, logs out from Docker Hub for security purposes.

---

