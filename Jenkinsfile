#!/usr/bin/env groovy

pipeline {
  agent any

  stages {
    stage ('Output Environment') {
      steps {
        echo 'Hello World'
        script {
          sh "printenv"
        }
      }
    }
  }
}
