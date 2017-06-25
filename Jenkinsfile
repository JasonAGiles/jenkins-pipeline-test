#!/usr/bin/env groovy

pipeline {
  agent { label 'ecs-dind-slave' }

  stages {
    stage ('Output Environment') {
      steps {
        echo 'Hello World from Docker Container on ECS'
        echo 'Bump the file'
        script {
          sh "printenv"
          sh """
            docker -v
            docker info
          """
        }
      }
    }
  }
}
