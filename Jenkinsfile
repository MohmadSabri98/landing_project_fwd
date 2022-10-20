
pipeline {
    agent {label 'ec2'}

    stages {
        stage('Cloning our Git') {
            steps {
                git url:'https://github.com/mahmoud254/jenkins_nodejs_example',
                    credentialsId: 'github'

                
            }
        }


    }
}
