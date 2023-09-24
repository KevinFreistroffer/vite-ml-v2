pipeline {
    agent any

    stages {
        stage('checkout') {
            git branch: 'main',url: 'https://github.com/KevinFreistroffer/vite-ml-v2.git'
        }
        stage('Build') {
            steps {
                // Your build steps here (e.g., compiling code, running tests)
                sh 'npm install' 
            }
        }
        // stage('Deploy') {
        //     steps {
        //         // Your deployment steps here (e.g., deploying to a test server)
        //     }
        // }
    }
}