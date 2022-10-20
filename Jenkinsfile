
pipeline {
    agent {label 'ec2'}

    stages {
        stage('Cloning our Git') {
            steps {
                git url:'https://github.com/mahmoud254/jenkins_nodejs_example',
                    credentialsId: 'github'

                
            }
        }
         stage('Building our image'){
            steps {
                sh "docker build . -t mohmadss/myapp:22" 
            }
        }
         stage('Push image') {
             steps {
                withDockerRegistry([ credentialsId: "dohucred", url: "" ]) {
                    sh "docker push mohmadss/myapp:22"
                }
             }
        }


    }
}
