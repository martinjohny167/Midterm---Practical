# 🚀 Calculator WebApp - CI/CD Pipeline  

This repository contains the **Calculator WebApp**, a simple web-based calculator with an automated **CI/CD pipeline** using **GitHub Actions** and **Jenkins**. The pipeline automates testing, Docker image creation, and deployment to **Docker Hub**.  

---

## 📁 Repository Structure  

```
calculator-webapp/
│— .github/workflows/        # GitHub Actions CI/CD pipeline configuration
│— jenkinsfile               # Jenkins pipeline definition
│— src/                      # Source code for the application
│— tests/                    # Unit tests using Jest
│— Dockerfile                # Dockerfile for containerizing the application
│— package.json              # Node.js project dependencies
│— README.md                 # Project documentation (this file)
```

---

## 🛠️ **How to Build and Run the Application**  

### **1⃣ Run Locally (Without Docker)**  
#### **Prerequisites:**  
- Install **Node.js** (v18+)  
- Install **npm**  

#### **Steps:**  
```sh
# Clone the repository
git clone https://github.com/martinjohny/calculator-webapp.git
cd calculator-webapp

# Install dependencies
npm install

# Start the application
npm start
```
The application will run on `http://localhost:3000`.  

---

### **2⃣ Run Using Docker**  
#### **Prerequisites:**  
- Install **Docker**  

#### **Steps:**  
```sh
# Build Docker image
docker build -t calculator-webapp .

# Run the container
docker run -p 3000:3000 calculator-webapp
```
The application will be available at `http://localhost:3000`.  

---

## ✅ **Testing the CI/CD Pipeline**  

The **CI/CD pipeline** is automatically triggered when:  
1⃣ A new commit is pushed to the `main` branch.  
2⃣ A **Pull Request** is created or updated.  

#### **Manually Triggering the Workflow**  
1. Navigate to the **Actions** tab in the GitHub repository.  
2. Select the latest workflow run and click **"Run workflow"**.  
3. Monitor the logs for build, test, and deployment status.  

#### **Run Tests Locally**  
```sh
# Run Jest tests
npm test
```

---
🖼️ Test Failure Handling

If a test fails, the pipeline halts execution. Below is an example screenshot showing a failed test:
![Image](https://github.com/user-attachments/assets/dc7a4c2e-b822-4d28-835a-b5779ece4533)


## 🐳 **Pulling Docker Image from Docker Hub**  

Once the Docker image is built and pushed to **Docker Hub**, you can pull and run it:  

#### **Pull Docker Image**  
```sh
docker pull martinjohny/calculator-webapp:latest
```

#### **Run the Docker Container**  
```sh
docker run -p 3000:3000 martinjohny/calculator-webapp
```
This will make the application available at `http://localhost:3000`.  

---

## 🔧 **Running the Jenkins Pipeline**  

### **Prerequisites:**  
- **Jenkins installed** on your system.  
- **Docker installed** and running.  
- **Jenkins credentials** for Docker Hub configured (`dockerhub-username`, `dockerhub-token`).  

### **Steps to Run the Jenkins Pipeline:**  
1⃣ Open **Jenkins Dashboard** → Click on **New Item**.  
2⃣ Choose **Pipeline** and name it **CalculatorWebApp**.  
3⃣ Select **Pipeline from SCM**, then enter the GitHub repository URL.  
4⃣ Under **Script Path**, specify `Jenkinsfile`.  
5⃣ Click **Save** and **Build Now**.  

### **Pipeline Stages:**  
1. **Checkout Code** - Pulls the latest changes from the repository.  
2. **Set up Node.js** - Installs dependencies.  
3. **Run Tests** - Executes Jest tests.  
4. **Build Docker Image** - Builds the Docker container.  
5. **Push to Docker Hub** - Logs into Docker Hub and uploads the image.  
6. **Clean Up** - Removes unused Docker resources.  

---

## 📌 **CI/CD Pipeline Summary**  

👉 **GitHub Actions** automates testing and Docker image creation.  
👉 **Jenkins** provides an additional automation pipeline for flexibility.  
👉 **Docker Hub** stores the containerized app for deployment.  

🎯 **Project Link:** [GitHub Repository](https://https://github.com/martinjohny167/Midterm---Practical)  
🐳 **Docker Image:** [Docker Hub](https://hub.docker.com/r/martinjohny/calculator-webapp)  

