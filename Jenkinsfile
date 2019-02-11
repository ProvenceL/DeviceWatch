pipeline {
	agent none
		parameters {
			choice choices: [ 'DevUI', 'ProdUI'], description: 'Please choose build target', name: 'BuildTarget'
		}

	stages {
	
	stage('Build & Deploy UI Test') {
			when { 
				beforeAgent true
					expression { params.BuildTarget == 'DevUI' } 
			}
			agent {
				docker {
					image 'registry.cn-shanghai.aliyuncs.com/bluescorp/nodejs'
						args '-v /etc/passwd:/etc/passwd -v /var/lib/jenkins:/var/lib/jenkins'
				}
			}
			steps {
				sh "./deploy.sh"
			}
		}
       	stage('Build & Deploy UI Dev') {
			when { 
				beforeAgent true
					expression { params.BuildTarget == 'ProdUI' } 
			}
			agent {
				docker {
					image 'registry.cn-shanghai.aliyuncs.com/bluescorp/nodejs'
						args '-v /etc/passwd:/etc/passwd -v /var/lib/jenkins:/var/lib/jenkins'
				}
			}
			steps {
				sh "./deploy.sh"
			}
		}

	}

	post {
                failure {
                        mail to: 'tech@bluescorpion.cn',
                             subject: "Failed Pipeline: ${currentBuild.fullDisplayName}",
                             body: "Something is wrong with ${env.BUILD_URL}"
                }
                success {
                        mail to: 'tech@bluescorpion.cn',
                             subject: "Succeeded Pipeline: ${currentBuild.fullDisplayName}",
                             body: "The pipeline ${currentBuild.fullDisplayName} completed successfully."
                }
        }
}

