# _Hosting a Full-Stack App On AWS_

## Project Overview
The focus of this project is the host two application on a cloud environment.

A `FRONTEND` that is deployed to an AWS `S3 Bucket` and a `BACKEND` app that is deployed to `Elastic Beanstalk`.

The application should be built and run locally to confirm 1) They run okay locally & 2) They run connected to AWS resources.

To deploy updates to the apps hosted in AWS, this project leverages CircleCI for CI/CD operations when commited to `main`.

The pipeline runs the same commands as local i.e. `npm run install` and has a dedicated `deploy` stage to publish updates to AWS.

There are key environment variables that need configuring which when passed to the backend api, instruct it to run in a near production way.

For more information about the: Architecture, Pipeline, and Dependencies. See included documentation within the `documentation` folder.

## Screenshot of the working application
Udagram `FRONTEND` app hosted in S3 bucket:

![FRONTEND](https://projectfourmediabucket.s3.us-east-2.amazonaws.com/FRONTEND.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMiJIMEYCIQDmE4mGnKZbMNm4Os1qat%2FvXkMNar6%2FXkOoqKX2Nq4xsQIhALBYSQG7VOuz9oSH0ekiM4oL6w8syoXCcxnxL1mXaeHbKoUDCH8QAhoMMzI5ODExNDI5OTY4Igyn6O3ZtupvYVMKxo0q4gKyNvLMFpH3SmjZmAn5Fa4HwvESbcJt39IhtbU3xOS11aeAbu7qWXBzgSGDJpjS9wxeJs%2Fmlttm6s8yGSYLwi73wkIRiPrgrwIyPKf2mA52rwbybzvDPO4R8yHlhy1jbRJIwcHtq4OfhE250PZgFJztsUe%2FD7gKmFFlXcKu8HgeQoRPZy%2FxzdrVbT4UTIpYS4follSIi57bHaqbhG%2FHTWOvTJwQfp808IrZAyCNPok0czGCbYKhx3Jfdi1Oln3tDcbIDfkGuGXqGTnrMqAT3F6a11yIz3e2WgqgeEvFNCog3hxgkKxNJ9S9ifGoBbCNxRWlvgeILpxNbj3O6UGvlusQNuTILnkl9hiOW14ziInQ5uOmrYozR%2B%2BcRQhF8SdreUhIaM20YfXf6FiGQTC3heL7vtw9KO%2FcFENIappjWBLzhaU%2FxP8ufoxPT8gteTuooUsQN7EIKblzMBwAL5EwAwR6Nhswq4aZrwY6hgLHBfJwmI%2B7awmgUBXRgDgzUalj5AheRWj2ukzaEQ%2FI7ZQStj42frQNfpuoqU1L2cGjF0TWGfIyc9eRdaiX%2FECjvTiGRbGntkByGnJvURuncNXVuKCNTSqlHJe3nSKVuUXRzlmiM1uYQ%2B44dFBp0IFCSsDwK7260TmrO5vADHYXfBhyKQrEbtRngdDGvDfB2uTciw1C40%2BZ8holaxdeY0xHJxBKjYfE4tKkvwGomJj9bgaSII1kPsuwMbF9VgquWf%2F5Jihdz1LVgiFX4ti%2FgNajUH544TFRTVVD2%2Fs%2Bdn4hOVJAmyB011osldYxsfAoByn875YzCNdTiSp7pGSaHVNPsklHO%2ByQ&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240304T234630Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAUZSSLBJIOQSYOGGC%2F20240304%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=f486f2d57da682ae7bbcf01565a36ba192eeabec068b9b7dd641d5f167e6e9d0)

Udagram `BACKEND` app hosted on Elastic Beanstalk:

![BACKEND](https://projectfourmediabucket.s3.us-east-2.amazonaws.com/BACKEND.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMiJIMEYCIQDmE4mGnKZbMNm4Os1qat%2FvXkMNar6%2FXkOoqKX2Nq4xsQIhALBYSQG7VOuz9oSH0ekiM4oL6w8syoXCcxnxL1mXaeHbKoUDCH8QAhoMMzI5ODExNDI5OTY4Igyn6O3ZtupvYVMKxo0q4gKyNvLMFpH3SmjZmAn5Fa4HwvESbcJt39IhtbU3xOS11aeAbu7qWXBzgSGDJpjS9wxeJs%2Fmlttm6s8yGSYLwi73wkIRiPrgrwIyPKf2mA52rwbybzvDPO4R8yHlhy1jbRJIwcHtq4OfhE250PZgFJztsUe%2FD7gKmFFlXcKu8HgeQoRPZy%2FxzdrVbT4UTIpYS4follSIi57bHaqbhG%2FHTWOvTJwQfp808IrZAyCNPok0czGCbYKhx3Jfdi1Oln3tDcbIDfkGuGXqGTnrMqAT3F6a11yIz3e2WgqgeEvFNCog3hxgkKxNJ9S9ifGoBbCNxRWlvgeILpxNbj3O6UGvlusQNuTILnkl9hiOW14ziInQ5uOmrYozR%2B%2BcRQhF8SdreUhIaM20YfXf6FiGQTC3heL7vtw9KO%2FcFENIappjWBLzhaU%2FxP8ufoxPT8gteTuooUsQN7EIKblzMBwAL5EwAwR6Nhswq4aZrwY6hgLHBfJwmI%2B7awmgUBXRgDgzUalj5AheRWj2ukzaEQ%2FI7ZQStj42frQNfpuoqU1L2cGjF0TWGfIyc9eRdaiX%2FECjvTiGRbGntkByGnJvURuncNXVuKCNTSqlHJe3nSKVuUXRzlmiM1uYQ%2B44dFBp0IFCSsDwK7260TmrO5vADHYXfBhyKQrEbtRngdDGvDfB2uTciw1C40%2BZ8holaxdeY0xHJxBKjYfE4tKkvwGomJj9bgaSII1kPsuwMbF9VgquWf%2F5Jihdz1LVgiFX4ti%2FgNajUH544TFRTVVD2%2Fs%2Bdn4hOVJAmyB011osldYxsfAoByn875YzCNdTiSp7pGSaHVNPsklHO%2ByQ&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240304T234659Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAUZSSLBJIOQSYOGGC%2F20240304%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=c4431d1d82801e7506d9041105adbfba30a19ccfa90784b69a16f397683f5e5f)



## Link to hosted FRONTEND
The frontend udagram application is hosted in an S3 bucket as a static site.

This is available at: http://udagramfrontendbucket.s3-website.us-east-2.amazonaws.com/

## Dependencies For Setup
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

