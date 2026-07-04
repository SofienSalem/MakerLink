pipeline {
    agent any

    environment {
        NODEJS_HOME = tool 'NodeJS'
        PATH = "$NODEJS_HOME/bin:${env.PATH}"
        DOCKER_REGISTRY = 'docker.io'
        DOCKER_REPO = 'haykel2000/app-maker-admin-front'
        APP_NAME = 'my-app'
        DOCKER_LOGIN = 'sofiensalem'
        DOCKER_PASSWORD = '8T)77;#?B6bASnG'
    }

    stages {
        stage('Setup Node.js') {
            steps {
                script {
                    tool name: 'NodeJS', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
                }
            }
        }
        stage('Build') {
            steps {
                sh 'npm install -f'
            }
        }
        stage('Unit Test') {
            steps {
                  echo "======UnitTest========="
                 //sh 'npm run test -- --coverage' 
            }
        }
        stage('Sonarqube Analysis') {
            environment {
                SONARQUBE_PROJECT_KEY = "MakerAdmin"
                SCANNER_HOME = tool 'sonar-scanner'
                
            }
            steps {
                echo "======SONARQUBE========="
                withSonarQubeEnv('sq1') {
                    sh """
                        ${SCANNER_HOME}/bin/sonar-scanner \\
                        -D sonar.login=admin \\
                        -D sonar.password=baher \\
                        -D sonar.projectKey=${SONARQUBE_PROJECT_KEY} \\
                        -D"sonar.sources=." \\
                        -Dsonar.genericcoverage.reportVersion=1 \\
                        -Dsonar.genericcoverage.reportPaths=coverage.xml 
                    """
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "======Build Docker Image========="
 
                sh 'docker build -t sofiensalem/app-maker-admin-front:latest -f Dockerfile .'
        }
        }
         stage('Docker login') {
                steps {
                    sh 'docker login -u $DOCKER_LOGIN -p $DOCKER_PASSWORD'
                    echo 'Docker login'

                     }
                    }
        stage('Docker Push') {
            steps {
                echo "====== Docker Push========="
               
                    sh 'docker tag $DOCKER_REPO:latest $DOCKER_REPO:latest'
                    sh 'docker push $DOCKER_REPO:latest'
                
            }
        }
        stage('Pull docker image') {
            steps {
                echo "====== Docker Pull========="
                    sh 'docker pull $DOCKER_REPO'
                
            }
        }
        stage('Run docker image') {
            steps {
                
                    sh 'docker run -d -p 4200:4200 $DOCKER_REPO'
                
            }
        }    
    }
}
