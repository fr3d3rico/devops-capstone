[![CircleCI](https://circleci.com/gh/fr3d3rico/devops-capstone.svg?style=shield)](https://circleci.com/gh/fr3d3rico/devops-capstone)

# Udacity - Devops Capstone Project

This is an capstone project for Udacity Devops course.

[![Project](https://github.com/fr3d3rico/devops-capstone/blob/main/images/devops-capstone.jpg)](https://github.com/fr3d3rico/devops-capstone/blob/main/images/devops-capstone.jpg)

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