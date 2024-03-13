# Notes - Interact with Cloud Services via a CLI

## TOPICS
* AWS CLI
* Elastic Beanstalk CLI
* AWS S3 CLI

### Using CLI
CLI's are often used to:

* Deploy code to cloud services
* Check the health of a service
* Get information about a service

THe most common place to use them is in pipelines as these can't interactively login to a portal.

### AWS CLI
Use `aws configure` to configure access key ID + Secret for authenticating CLI to AWS.

When wanting to use the IAM user from CLI, you may need to run `aws configure set aws_session_token ""`.

### S3 From CLI
Run the following command to create a public bucket in the us-east-2 region:

`aws s3api  create-bucket --bucket mybucket033212455158 --acl bucket-owner-full-control --region us-east-2 --create-bucket-configuration LocationConstraint=us-east-2`

* Syntax:
	* `--bucket` option specifies the bucket name of your choice. It must be unique across all AWS accounts.
	* `--acl` option specifies the accessibility level
	* `--region` specifies the AWS region where you want to create this bucket.
	* `--create-bucket-configuration` option autiomatically creates bucket in default region.
	* `LocationConstraint=us-east-2` specifies bucket configuration should be create is us-east-2.

Run the following command to upload a `sample.html` file to the newly created bucket:

`aws s3api put-object --bucket mybucket033212455158 --key sample.html --body sample.html --content-type text/html`

* Syntax
	* `--key` option specifies the name you want to assign to your object in the bucket
	* `--body` option specifies the file name (complete path) to upload from your local system
	* `--content-type` specifies the standard MIME type describing the format of the contents.

Run the following command to delete an object/file from S3 bucket: 

`aws s3api delete-object --bucket mybucket033212455158 --key sample.html`

### EB CLI
AWS created a dedicated Elastic Beanstalk (EB) CLI. 

The EB CLI is simple to use and provides a set of easy commands that let you control your application environment in a convenient way.

The core use of EB CLI is to perform one of the following actions:

* Create environments
* Deploy new versions of code
* View logs of an EB App

### Create and Deploy a sample NodeJS application to EB
Follow the below commands to create a new instace of EB and deploy a sample NodeJS app.

* `mkdir eb-app`

* `eb init` = creates ".elasticbeanstalk/config.yml" file in the current directory.

* `eb create --sample --single --instance-types t2.small` 
	* The [eb create](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb3-create.html) will bundle your application. 
	* If present in the current directory it will deploy to the EB. 
	* Otherwise, a sample application will be deployed.
	* We can aslo specify the `--sample` for deploying a sample instead.

The above command will take up to 15 minutes to actualise deploying the app and provisions the following:

1. An EC2 instance (size: t2.small) to host your application without a load balancer by using `--single` option.
1. A security group (firewall rules) for the EC2 instance
1. An S3 bucket to store the application artifacts
1. A CloudWatch alarm for logging and monitoring
1. A domain name

For troubleshooting an app use `eb logs`.

To deploy new updates to code, re-run `eb deploy`.

If you have multiple environments running, you can associate the EB CLI with a particular one using: `eb list` and `eb use {env}`.

To delete an EB app/environment, run `eb list` and `eb terminate {env}`.

> See [EB CLI command reference](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb3-cmd-commands.html) for all available commands

