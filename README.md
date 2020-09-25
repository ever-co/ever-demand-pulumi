# Deploy and Manage Ever Platform on Clouds

![Pulumi](https://github.com/ever-co/ever-pulumi/workflows/Pulumi/badge.svg?branch=master)

## Introduction

**IMPORTANT: WIP, NOT READY YET FOR ANY USE!**

-   This projects uses [Pulumi](https://www.pulumi.com) to easy and quickly deploy [Ever Platform](https://github.com/ever-co/ever) into Clouds with single command (`pulumi up --yes`).
-   It currently supports AWS EKS Kubernetes Clusters (for Angular / Ionic apps and Backend Core Apis), Application Load Balancers and Serverless PostgreSQL DB deployments.

## Quick start

-   Setup [Docker](https://docs.docker.com/install)
-   Setup [eksctl](https://docs.aws.amazon.com/en_pv/eks/latest/userguide/getting-started-eksctl.html) (if production k8s deployment required)
-   Setup [Helm](https://helm.sh/docs/using_helm/#installing-helm) (if production k8s deployments required). Don't forget to run `helm init`!
-   Setup [Pulumi](https://www.pulumi.com/docs/reference/install)
-   Setup [AWS CLI](https://docs.aws.amazon.com/en_pv/cli/latest/userguide/cli-chap-install.html)
-   Configure cloud credentials locally with `aws configure` and create AWS profile: `ever` (or replace AWS profile name in Pulumi.\*.yaml files)
-   Change (optionally) Pulumi Stack with `pulumi stack select dev`, where `dev` is stack name.
-   Deploy to Cloud: `pulumi up --yes`
-   Enjoy

Note: different stacks may use different services, e.g. AWS EKS (k8s) for `prod` (production) stack, AWS ECS Fargate for `demo` stack or AWS ECS container instances (with EC2) for `dev` stack.

Links:

-   Read more about Pulumi at <https://github.com/pulumi/pulumi>
-   For CircleCI configuration, see <https://github.com/pulumi/circleci>

## Implementation

Implementation currently based on Pulumi libraries specific to AWS Cloud.
That's why no other Clouds currently supported, but it should be possible at some point to rewrite code using Pulumi Cloud-Agnostic Packages,
see <https://github.com/pulumi/pulumi-cloud>, <https://www.pulumi.com/docs/reference/pkg/nodejs/pulumi/cloud>, <https://www.pulumi.com/docs/tutorials/cloudfx>, etc.
(AWS and Azure clouds should be supported in such case)

Note: for some of AWS specific features (if Pulumi does not support them yet) we can use AWS CDK, see <https://docs.aws.amazon.com/en_pv/cdk/latest/guide/home.html>

### Branches, Pulumi Stacks and Environments

We have 2 branches for Ever Pulumi repo:

-   `master` branch for deployments to `prod`, `dev` and `demo` environments
-   `develop` branch for Development only, without any deployments

Before Ever SaaS Platform will be ready, we just deploy current Ever Platform to all environments.

Each Github branch may correspond to separate Pulumi Stacks in the future.
Mapping defined in the [./pulumi/ci.json](https://github.com/ever-co/ever-pulumi/blob/develop/.pulumi/ci.json) file.

In addition, Ever Platform build might use different settings for each environment (e.g NODE_ENV set to `production` for production env)

## TODO

-   [ ] Setup [Redash](https://github.com/getredash/redash) in the same cluster, see <https://github.com/getredash/redash/blob/master/setup/docker-compose.yml> (optionally, but it's great to have that for Ever)

-   [ ] Finish setup Github Actions, see <https://github.com/ever-co/ever-pulumi/blob/master/.github/workflows/main.yml>

-   [ ] Fix CircleCI build for this pulumi project: currently it does not have Docker in the build VM and so stage to build docker containers fails and also we should pull Ever repo into sub-folder for Docker builds or found another way.

See also <https://www.pulumi.com/docs/guides/continuous-delivery/circleci> and <https://circleci.com/orbs/registry/orb/pulumi/pulumi>

-   [ ] Security Group of Fargate Service should be added to RDS Cluster for full access to RDS DB. Note: it should be done this way: first we create such security group, next we use it when create RDS Cluster and next we use it when create Fargate Cluster

-   Must READ: <https://www.pulumi.com/docs/guides/k8s-the-prod-way> (how to setup k8s for production with Pulumi)

## Pulumi related FAQ

-   Removed resource manually in the Cloud? Run `pulumi refresh`

## Pulumi related Open-Source projects and Examples

-   Github Pulumi Actions: see <https://github.com/pulumi/actions> and <https://www.pulumi.com/docs/guides/continuous-delivery/github-actions>
-   <https://github.com/cappalyst/cappalyst-pulumi>
-   <https://www.npmjs.com/package/@operator-error/pulumi-lambda-cert>
-   <https://github.com/jen20/pulumi-aws-vpc>
-   <https://github.com/ibrasho/pulumi-github>
-   <https://github.com/k-higuchi0440/pulumi-aws-staticsite-builder>
-   <https://github.com/pulumi/examples/tree/master/kubernetes-ts-jenkins> - this seems to be very good solution to run Jenkins in k8s with Pulumi
-   <https://github.com/pulumi/examples/tree/master/kubernetes-ts-multicloud> - multi-cloud deployment for k8s
-   <https://github.com/pulumi/examples/tree/master/kubernetes-ts-sock-shop> - lots of micro-services and DBs (including Mongo / MySQL / RabbitMQ queue, etc)

## k8s

-   Run proxy: `kubectl proxy`
-   Get all running pods: `kubectl get pods -A`

## Contribute

-   Please give us :star: on Github, it **helps**!
-   You are more than welcome to submit feature requests
-   Pull requests are always welcome! Please base pull requests against the _develop_ branch and follow the [contributing guide](.github/CONTRIBUTING.md).

## Collaborators and Contributors

### Development Team

#### Core

-   Ruslan Konviser ([Evereq](https://github.com/evereq))

### Contributors

-   View all of our [contributors](https://github.com/ever-co/ever/graphs/contributors)

## Contact Us

-   [Discord Chat](https://discord.gg/msqRJ4w)
-   [Slack Community](https://join.slack.com/t/everplatform/shared_invite/enQtNzc2NzI1OTgwMjQwLTBkODI3OTU2ZDI1YTQwNWE3OGExYWUwYjE5NThkMjRiYjA0NmFiNzZhYWUzNWViNWI4Nzg2YTc3MzY2MjY0YzU)
-   [Spectrum Community](https://spectrum.chat/ever)
-   [Gitter Chat](https://gitter.im/ever-co/ever)
-   [CodeMentor](https://www.codementor.io/evereq)
-   [Telegram](https://t.me/everplatform)
-   For business inquiries: <mailto:ever@ever.co>
-   Please report security vulnerabilities to <mailto:security@ever.co>
-   [Ever Platform @ Twitter](https://twitter.com/everplatform)
-   [Ever Platform @ Facebook](https://www.facebook.com/everplatform)

## Security

Ever Platform follows good security practices, but 100% security cannot be guaranteed in any software!  
Ever Platform is provided AS IS without any warranty. Use at your own risk!  
See more details in the [LICENSE.md](LICENSE.md).

In a production setup, all client-side to server-side (backend, APIs) communications should be encrypted using HTTPS/WSS/SSL (REST APIs, GraphQL endpoint, Socket.io WebSockets, etc.).

## License

This software is available under [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.txt)

This program is free software: you can redistribute it and/or modify it under the terms of the corresponding licenses described in the LICENSE files located in software sub-folders and under the terms of licenses described in individual files.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

You should have received a copy of the relevant GNU Licenses along with this program. If not, see http://www.gnu.org/licenses/.

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fever-co%2Fever-pulumi.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fever-co%2Fever-pulumi?ref=badge_large)

## Trademarks

**Ever**® is a registered trademark of [Ever Co. LTD](https://ever.co).  
**Ever® Platform™**, **Ever® Platform Community™**, **Ever® Platform Small Business™** and **Ever® Platform Enterprise™** are all trademarks of [Ever Co. LTD](https://ever.co).

The trademarks may only be used with the written permission of Ever Co. LTD. and may not be used to promote or otherwise market competitive products or services.

All other brand and product names are trademarks, registered trademarks or service marks of their respective holders.

_Copyright © 2019-Present, Ever Co. LTD. All rights reserved._
