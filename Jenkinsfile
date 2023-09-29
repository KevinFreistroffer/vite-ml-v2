pipeline {
    agent any
    stages {
        stage('checkout') {
            steps {
                git branch: 'main',url: 'https://github.com/KevinFreistroffer/vite-ml-v2.git'
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