pipeline {
    agent any

    options {
        timestamps()
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                dir('devsecops-portfolio/portfolio-next') {
                    sh 'node -v && npm -v'
                    sh 'npm ci --fetch-retries=5 --fetch-timeout=120000'
                }
            }
        }

        stage('Build') {
            steps {
                dir('devsecops-portfolio/portfolio-next') {
                    sh 'npm run build'
                }
            }
        }
    }

    post {
        success { echo 'Build réussi' }
        failure { echo 'Build échoué' }
    }
}
