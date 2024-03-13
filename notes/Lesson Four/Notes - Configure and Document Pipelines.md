# Notes - Configure and Document Pipelines

## TOPICS
* Basics of a pipeline
* Continuous Integration
* Continuous Deployment
* Documentation

### Writing the Basic Pipeline
CircleCI pipeline file is typically a YAML format file located at `.circleci/config.yml`.

* **Version** this defined which version of CircleCI should be used
* **Orbs** are a set of instructions that allow configuring the pipeline and adding tools i.e. node
* **Jobs** are groups of commands that perform different actions on your code i.e. `npm i`
* **Workflows** control the order and how jobs are run i.e. making jobs depend on another before running

Pipeline file structure:

* `version` of CircleCI i.e. `2.1`
* `orbs` for what tools to use i.e. `node: circleci/node@18.x`
* `jobs` i.e. `build: docker: - image: @cimg/base:stable"`
* `workflows` i.e. `udagram: jobs: - build`

> [CircleCI getting started](https://circleci.com/docs/2.0/getting-started/)

### Continuous Integration
This refers to the part of the process where your code is built and tested by the pipeline.

Typically, the steps involved are:

* Install required tools
* Install dependencies with commands like `npm install`
* Lint the code with tools like `ESLint` or `Prettier`
* Test by running test scripts
* Build code to a compiled folder usually called `build/`

### Continuous Delivery and Deployment
Continuous delivery or continuous deployment are both steps used to refer to publish or deploying an application.

Publishing apps refers to publishing to registries such as Docker HUB.

Deploying an app refers to sending the latest code or Docker image to a specific environment such as Elastic Beanstalk.

Continuous Delivery focuses on delivering updates to your applications and environments.

Continuous Deployment focuses on deploying updates or creating new environments alongside the code.

### Documentation
Documenting is important in order to properly communicate difficult parts of an application.

Documentation also serves as a good reference when it comes to onboarding new people on a project or diagnosing something that is going wrong.

Some examples of documentation are:

* Architecture diagrams - used to provide visual reference of code to infrastructure for a project.
* Runbooks - guides for how to perform certain operations.
* Markdown files - used to provide formatted text such as a README file for repositories.
* Documentation sites - Sites designed to provide documentation as a service such as Confluence.
