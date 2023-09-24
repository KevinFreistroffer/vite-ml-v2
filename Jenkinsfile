pipeline {
    agent { docker { image 'node:18.18.0-alpine3.18' } }
    stages {
        stage('build') {
            environment {
                HOME="."
            }
            steps {
                sh 'node --version'
            }
        }
    }
}