#!/usr/bin/env groovy

pipeline {
  agent { label 'ecs-dind-slave' }

  stages {
    stage ('Build App Image') {
      steps {
        sh """
          docker build -t jenkins-pipeline-test:latest .
        """
      }
    }

    stage ('Build Test Image') {
      steps {
        script {
          sh """
            docker build -t jenkins-pipeline-test:test -f Dockerfile-Test .
          """
        }
      }
    }

    stage ('Test') {
      steps {
        script {
          sh """
            docker run --rm jenkins-pipeline-test:test
          """
        }
      }
    }

    stage ('Push App Image') {
      steps {
        echo "This is where the image would be pushed.  Need IAM role to perform that"
      }
    }


  }
}
