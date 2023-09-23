pipeline {
    // agent any {
    //     docker {
    //         image 'node:18.18.0-alpine3.18' 
    //         args '-p 3000:3000' 
    //     }
    // }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
    }
}


// pipeline {
// agent any
//     stages {
//         stage('build') {
//             steps {
//                 script {
//                    /* the return value gets caught and saved into the variable MY_CONTAINER */
//                    MY_CONTAINER = bat(script: '@docker run -d -i python:3.10.7-alpine', returnStdout: true).trim()
//                    echo "mycontainer_id is ${MY_CONTAINER}"
//                    /* python --version gets executed inside the Container */
//                    bat "docker exec ${MY_CONTAINER} python --version "
//                    /* the Container gets removed */
//                    bat "docker rm -f ${MY_CONTAINER}"
//                         }
//                     }
//                 }
//             }
//         }
 