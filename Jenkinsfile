node {
    def app

    stage('Clone repository') {
        checkout scm
    }

    stage('Build') {
        sh 'docker build --target builder -t connorfitzgerald/savings-pot-ui:test .'
        sh 'docker build --target runner -t connorfitzgerald/savings-pot-ui:latest .'
    }

    // Tests not yet implemented
    // stage('Test') {
    //     sh 'docker container run --rm connorfitzgerald/savings-pot-ui:test npm test'
    // }

    stage('Push') {
        withCredentials([usernamePassword(credentialsId: 'docker-connorfitzgerald', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
            sh 'docker login -u $USER -p $PASS'
        }

        sh 'docker push connorfitzgerald/savings-pot-ui:latest'
    }

    stage('Deploy') {
        ansiColor('xterm') {
            ansiblePlaybook(
                playbook: 'CI/ansible-deploy.yaml',
                colorized: true
            )
        }
    }
}