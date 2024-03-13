# Notes - Setting Up PROD ENV in AWS

## TOPICS
* Approach to new application
* Deploy a Database
* Deploy a server and website
* Hosting a full stack app

## Tools used in this lesson
* **AWS Relational Database Service (RDS):** It has many databases and SQL variants and provides easy management.
* **AWS Elastic Beanstalk (EB):** This is an orchestration service that allows you to run servers in multiple languages and runtimes.
* **AWS Simple Storage Service (S3):** We will use this tool for configuring web hosting and for hosting files in general.

## Process for setting up PROD with new app
* open the package.json(opens in a new tab) in order to understand which framework is used.
* Research the framework to understand at a high level the ideas behind the framework.
* Try to identify any communication to other applications in the code.

## RDS Overview
Database supports the following engines:

* Oracle
* PostgreSQL
* MySQL
* MariaDB
* SQL Server

It also supports the following features:

* failover
* backups
* restore
* encryption
* security
* monitoring
* data replication
* scalability

## Elastic Beanstalk Overview
AWS Elastic Beanstalk is a serverless service meaning you don't worry about scaling or configuring the underlying virtual machines.

It supports Java, .NET, PHP, Node.js, Python, Ruby, and Go platforms.

To run an app, you upload a ZIP file to beanstalk and configure some settings.

After uploading the application zip file, Elastic Beanstalk will handle  the rest i.e. deploying to EC2 VMs.

* **Elastic Beanstalk offers the following advantages:**
	* Free: You only pay for the servers that elastic beanstalk uses. The extra tools are free of charge.
	* Pre-built Environments: Most major programming languages are supported out of the box.
	* Simple Server Management: Security updates and system upgrades are done for you.
	* Easy Scaling: If you need to provision extra servers, you can quickly change your configuration.

* **What does Elastic Beanstalk use?**
	* Elastic Compute Cloud (EC2): Used for hosting servers.
	* Simple Storage Service (S3): Used for storing application code and sending it to other servers.
	* Simple Notification Service (SNS): Provides a way to notify you of events inside the environment.

> [Getting started using Elastic Beanstalk](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/GettingStarted.html)

> Specify an environment variable in the Elastic Beanstalk environment >> Configuration >> Software settings >> Environment Properties section.

> [Pass Environment Variables](https://repost.aws/knowledge-center/elastic-beanstalk-pass-variables) to the Elastic Beanstalk environment.

## S3 Overview
Elastic Beanstalk can use AWS S3 to server HTML files for a web application.

S3 Stands for Simple Storage Service. It is AWS's file storage service. S3 is different from a hard drive. It can be referred to as object-based storage.

* Limitations and Strengths of S3
	* **S3 can't run a file system:** S3 is just meant to serve files and cannot act as an operating system.
	* **Fine-grained permission system:** We can control the access to the bucket with Access Control List (ACL) policy, which is a file written in JSON or yml.
	* **Configurable for web hosting:** We can serve static files like HTML and CSS on S3.

> [Enabling Website Hosting on S3](https://docs.aws.amazon.com/AmazonS3/latest/dev/EnableWebsiteHosting.html)

