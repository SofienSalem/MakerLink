pipeline {
    agent any

    environment {
        DOCKER_REPO = 'sofiensalem/app-maker-admin-front'
    }

    tools {
        nodejs 'NodeJS'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install -f'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${DOCKER_REPO}:${env.BUILD_NUMBER} -t ${DOCKER_REPO}:latest -f Dockerfile ."
            }
        }

        stage('Docker Login & Push') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                    sh "docker push ${DOCKER_REPO}:${env.BUILD_NUMBER}"
                    sh "docker push ${DOCKER_REPO}:latest"
                }
            }
        }

        stage('Deploy') {
            steps {
                sh "docker rm -f app-maker-admin-front || true"
                sh "docker run -d --name app-maker-admin-front -p 4200:4200 ${DOCKER_REPO}:latest"
            }
        }
    }

    post {
        always {
            sh 'docker logout || true'
        }
    }
}