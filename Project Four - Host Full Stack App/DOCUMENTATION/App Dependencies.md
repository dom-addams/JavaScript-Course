# App Dependencies
This application consists of a Frontend built with Angular and a Backend built with typescript.

For the applications to run and connect, the API service must be deployed first and once running, the frontend should be deployed.

The backend API requires an Postgress DB running. For this project, the dependency is a running RDS Database running postgres engine.

The frontend has a depency on Typescript, it requires `"typescript": "3.5.3"` be installed. If this is not passed as a dependency in `package.json` it breaks the app.

## Dependency Tools
To setup this project from scratch, the following dependencies are required:

```
- Node v14.15.0
- NPM v6.14.8
- AWS CLI v2.15.24
- EB CLI 3.20.3
- AWS Account
- AWS RDS running Postgres
- AWS S3 Bucket with public access
- AWS Elastic Beanstalk
```

## Environment Variables
In addition to previously mentioned tools and resources, the app requires the following ENV VARS be configured.

This can be done via a `.env` file or with a script.

The below example is setting using a bash script:

```
export POSTGRES_USERNAME=postgres
export POSTGRES_PASSWORD=postgres
export POSTGRES_HOST=rdsdbinstance.us-east-1.rds.amazonaws.com
export POSTGRES_DB=postgres
export DB_PORT=443
export AWS_BUCKET=arn:aws:s3:::awsbucket
export AWS_REGION=us-east-1
export AWS_PROFILE=default
export JWT_SECRET=mysecretstring
export URL=http://localhost:8100
```

