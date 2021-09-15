[![CircleCI](https://circleci.com/gh/fr3d3rico/devops-capstone.svg?style=shield)](https://circleci.com/gh/fr3d3rico/devops-capstone)

# Udacity - Devops Capstone Project

This is an capstone project for Udacity Devops course. I choose to create a Jenkins pipeline, because I am already able to deploy using circleci. I already implemented a pipeline at (https://github.com/fr3d3rico/cloud-developer-capstone) repository.

[![Project](https://github.com/fr3d3rico/devops-capstone/blob/main/images/devops-capstone.jpg)](https://github.com/fr3d3rico/devops-capstone/blob/main/images/devops-capstone.jpg)

I decided to create an EC2 Ubuntu instance outside the Kubernetes cluster. This instance has installed the following packages and tools:

| Candy | Link |
| ----- | ---- |
| Docker | [Docker](https://www.docker.com/) |
| Node 13 / 14 | [Node.js](https://nodejs.org/) |
| NPM | [NPM](https://www.npmjs.com/) |
| Git | [GIT](https://git-scm.com/) |
| AWS cli | [AWS cli](https://aws.amazon.com/cli/) |
| Kubectl cli | [kubectl](https://kubernetes.io/docs/tasks/tools/) |
| Jenkins | [Jenkins](https://www.jenkins.io/) |
| wget | sudo apt install wget |
| gnup | sudo apt-get install gnupg |
| curl + unzip | sudo apt-get install curl unzip |
| Hadlint | (ttps://github.com/hadolint/hadolint/releases/download/v2.7.0/hadolint-Linux-x86_64) |
| Open JDK 11 | apt install openjdk-11-jdk |


## Jenkins Pipelines

### eks-create-cluster (jenkins-create-cluster)

This pipeline creates the cluster and deploy first version of the app.
[jenkins-create-cluster]

### eks-jenkins-pipeline (jenkins)

This pipeline update the app.
[jenkins]

[![Jenkins Pipeline](https://github.com/fr3d3rico/devops-capstone/blob/main/images/devops-capstone.flow.jpg)](https://github.com/fr3d3rico/devops-capstone/blob/main/images/devops-capstone.flow.jpg)

## Circle CI Pipeline

This project is covered by circleci pipeline to test the app, but it does not deploy.
[.circleci/config.yml]

## Feel free to send a message!
Fred