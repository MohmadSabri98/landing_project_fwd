
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
                sh "docker build . -t mohmadsabri/myapp:$BUILD_NUMBER" 
            }
        }
         stage('Push image') {
             steps {
                   withCredentials([usernamePassword(credentialsId: 'dohucred', usernameVariable: 'USERNAME', passwordVariable: 'PASS')])  {
                       sh 'echo $PASS | docker login -u $USERNAME --password-stdin'
                       
                    sh "docker push mohmadsabri/myapp:$BUILD_NUMBER"
                }
             }
        }
        
        
        
         stage('cd') {
             steps {
                   
                       sh "docker run -d -p 80:80 mohmadsabri/myapp:$BUILD_NUMBER"
                       
                  
                
             }
        }
        
        
                post{
                success{
                slackSend channel: 'jenkins', message: 'app deploy successfully'
                }
                        failure { 
                        slackSend channel: 'jenkins', message: 'build not successfully'
                        
                        }
                    
            }

    }
}
