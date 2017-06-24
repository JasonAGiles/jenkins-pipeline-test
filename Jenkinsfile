#!/usr/bin/env groovy

pipeline {
  agent { label 'ecs-jnlp-slave' }

  stages {
    stage ('Output Environment') {
      steps {
        echo 'Hello World from Docker Container on ECS'
        script {
          sh "printenv"
        }
      }
    }
  }
}
