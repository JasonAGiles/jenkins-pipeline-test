#!/usr/bin/env groovy

pipeline {
  agent any

  stages {
    stage ('Output Environment') {
      steps {
        script {
          sh "printenv"
        }
      }
    }
  }
}
