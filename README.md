# ssh ec2

```
icacls.exe jenkins.pem /reset
icacls.exe jenkins.pem /grant:r "$($env:username):(r)"
icacls.exe jenkins.pem /inheritance:r
```

ssh -i "jenkins.pem" ubuntu@ec2-54-167-65-199.compute-1.amazonaws.com


aws cloudformation create-stack --stack-name eksClusterRole-CloudFormation --region us-east-1 --template-body file://role.yml --capabilities "CAPABILITY_IAM"

aws eks create-cluster --region us-east-1 --name devops-capstone-eks --kubernetes-version 1.20 --role-arn arn:aws:iam::993544404756:role/eksClusterRole-CloudFormation-eksClusterRole-14FP6W0VZAWZK --resources-vpc-config subnetIds=subnet-78bbc259,subnet-318c8f7c,subnet-42d4a81d,subnet-12cbb874,securityGroupIds=sg-0e607918ae88e77a0


## hadolint for Dockerfile
```
sudo wget -O /bin/hadolint https://github.com/hadolint/hadolint/releases/download/v2.7.0/hadolint-Linux-x86_64

chmod +x /bin/hadolint
```

# create an ec2 ubuntu and install packages:

```
sudo apt update
sudo apt upgrade

sudo apt install wget
sudo apt-get install gnupg

sudo apt-get install curl unzip

sudo apt-get install git

sudo apt install maven
```

# docker - https://docs.docker.com/engine/install/ubuntu/
AWS EC2 - https://phoenixnap.com/kb/how-to-install-docker-on-ubuntu-18-04

```
sudo apt-get install apt-transport-https ca-certificates curl gnupg lsb-release
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt-get install docker-ce docker-ce-cli containerd.io
```

## If ubuntu container
```
sudo apt-get install systemctl
```

## jenkins - https://pkg.jenkins.io/debian-stable/

```
wget -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo apt-key add -
sh -c 'echo deb https://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
sudo apt-get update
sudo apt-get install jenkins
```

## AWS EC2 Ubuntu 20.4 - https://www.jenkins.io/doc/book/installing/linux/
```
wget -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo apt-key add -
sudo sh -c 'echo deb https://pkg.jenkins.io/debian-stable binary/ > \
    /etc/apt/sources.list.d/jenkins.list'
sudo apt-get update
sudo apt-get install jenkins
```

```
apt update
apt search openjdk
apt install openjdk-11-jdk
```

## start
```
sudo systemctl start jenkins
sudo systemctl status jenkins
```

## kubectl - https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/

```
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
curl -LO "https://dl.k8s.io/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl.sha256"

echo "$(<kubectl.sha256) kubectl" | sha256sum --check
install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl

kubectl version --client
```

## aws cli - https://docs.aws.amazon.com/pt_br/cli/latest/userguide/install-cliv2-linux.html

```
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
./aws/install -i /usr/local/aws-cli -b /usr/local/bin

aws --version
```