pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = "calculator-webapp"  // Docker image name
        DOCKER_TAG = "${GIT_COMMIT}"  // Docker image tag using Git commit hash
        DOCKERHUB_USERNAME = credentials('dockerhub-username') // Docker Hub username stored in Jenkins credentials
        DOCKERHUB_TOKEN = credentials('dockerhub-token')       // Docker Hub token stored in Jenkins credentials
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from GitHub
                git 'https://github.com/your-username/calculator-webapp.git'
            }
        }

        stage('Set up Node.js') {
            steps {
                script {
                    // Install Node.js (if not already installed on the Jenkins node)
                    sh 'curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -'
                    sh 'sudo apt-get install -y nodejs'
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install npm dependencies
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                // Run Jest tests
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                // Build the Docker image
                script {
                    sh 'docker build -t ${DOCKERHUB_USERNAME}/${DOCKER_IMAGE}:${DOCKER_TAG} .'
                }
            }
        }

        stage('Login to Docker Hub') {
            steps {
                // Log in to Docker Hub using Jenkins credentials
                script {
                    sh "echo $DOCKERHUB_TOKEN | docker login -u $DOCKERHUB_USERNAME --password-stdin"
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                // Push the Docker image to Docker Hub
                script {
                    sh 'docker push ${DOCKERHUB_USERNAME}/${DOCKER_IMAGE}:${DOCKER_TAG}'
                    sh 'docker push ${DOCKERHUB_USERNAME}/${DOCKER_IMAGE}:latest'  // Optionally push the latest tag as well
                }
            }
        }

        stage('Logout from Docker Hub') {
            steps {
                // Log out from Docker Hub
                script {
                    sh 'docker logout'
                }
            }
        }
    }

    post {
        always {
            // Clean up after the job
            cleanWs()  // Optionally clean up the workspace
        }

        success {
            echo "Pipeline executed successfully"
        }

        failure {
            echo "Pipeline failed"
        }
    }
}
