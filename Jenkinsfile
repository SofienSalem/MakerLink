pipeline {

    agent any

    environment {
        NODEJS_HOME = tool 'NodeJS'
        PATH = "${NODEJS_HOME};${env.PATH}"
        DOCKER_REGISTRY = 'docker.io'
        DOCKER_REPO = 'haykel2000/app-maker-admin-front'
        APP_NAME = 'my-app'
        DOCKER_LOGIN = 'sofiensalem'
        DOCKER_PASSWORD = '8T)77;#?B6bASnG'
    }

    stages {

        stage('Build') {
            steps {
                bat 'npm install -f'
            }
        }

        stage('Unit Test') {
            steps {
                echo "======UnitTest========="
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
                    bat """
                        %SCANNER_HOME%\\bin\\sonar-scanner ^
                        -D sonar.login=admin ^
                        -D sonar.password=baher ^
                        -D sonar.projectKey=%SONARQUBE_PROJECT_KEY% ^
                        -D sonar.sources=. ^
                        -D sonar.genericcoverage.reportVersion=1 ^
                        -D sonar.genericcoverage.reportPaths=coverage.xml
                    """
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "======Build Docker Image========="
                bat 'docker build -t sofiensalem/app-maker-admin-front:latest -f Dockerfile .'
            }
        }

        stage('Docker login') {
            steps {
                bat 'docker login -u %DOCKER_LOGIN% -p %DOCKER_PASSWORD%'
                echo 'Docker login'
            }
        }

        stage('Docker Push') {
            steps {
                echo "====== Docker Push========="
                bat 'docker push %DOCKER_REPO%:latest'
            }
        }

        stage('Pull docker image') {
            steps {
                echo "====== Docker Pull========="
                bat 'docker pull %DOCKER_REPO%:latest'
            }
        }

        stage('Run docker image') {
            steps {
                bat 'docker run -d -p 4200:4200 %DOCKER_REPO%:latest'
            }
        }
    }
}