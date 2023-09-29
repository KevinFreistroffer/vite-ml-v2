pipeline {
    agent any
    stages {
        stage('checkout') {
            steps {
                git branch: 'main',url: 'https://github.com/KevinFreistroffer/vite-ml-v2.git'
                bat 'npm run install'
            }
        }
        stage('Build') {
            steps {
                // Your build steps here (e.g., compiling code, running tests)
                bat 'npm run build' 
            }
        }
        stage('Build') {
            steps {
                // Your build steps here (e.g., compiling code, running tests)
                bat 'npm run build' 
            }
        }
    }
}