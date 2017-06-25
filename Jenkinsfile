#!/usr/bin/env groovy

pipeline {
  agent { label 'ecs-dind-slave' }

  stages {
    stage ('Print Messages') {
      steps {
        echo 'Hello World from Docker Container on ECS'
      }
    }

    stage ('Docker Version') {
      steps {
        script {
          sh "docker -v"
        }
      }
    }

    stage ('Docker Info') {
      steps {
        script {
          sh "docker info"
        }
      }
    }

    stage ('Docker Hello World') {
      steps {
        script {
          sh "docker run hello-world"
        }
      }
    }


  }
}
