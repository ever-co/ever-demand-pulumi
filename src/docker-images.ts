import * as aws from '@pulumi/aws';
import * as awsx from '@pulumi/awsx';
import * as config from './config';
import { Environment } from './environments';

export const createDockerImages = async (environment: Environment) => {
	// const apiRepoName = `ever/api-${environment.toLowerCase()}`;

	// const repositoryApi = new aws.ecr.Repository(apiRepoName, {
	// 	name: apiRepoName
	// });

	// const webappRepoName = `ever/webapp-${environment.toLowerCase()}`;

	// const repositoryWebapp = new aws.ecr.Repository(webappRepoName, {
	// 	name: webappRepoName
	// });
	const apiImage: aws.ecr.GetImageResult = await aws.ecr.getImage({
		registryId: config.awsEcrRegistry,
		repositoryName: 'ever-core',
		imageTag: 'latest',
	});

	// // Build and publish a Docker image to a private ECR registry for API.
	// if (environment !== Environment.Prod) {
	// 	apiImage = awsx.ecs.Image.fromDockerBuild(repositoryApi, {
	// 		context: config.dockerContextPath,
	// 		dockerfile: config.dockerAPIFile
	// 	});
	// } else {
	// 	apiImage = awsx.ecr.buildAndPushImage(
	// 		apiRepoName,
	// 		{
	// 			context: config.dockerContextPath,
	// 			dockerfile: config.dockerAPIFile
	// 		},
	// 		{ repository: repositoryApi }
	// 	);
	// }
	const adminAppImage: aws.ecr.GetImageResult = await aws.ecr.getImage({
		registryId: config.awsEcrRegistry,
		repositoryName: 'ever-admin-web-angular',
		imageTag: 'latest',
	});

	// // Build and publish a Docker image to a private ECR registry for Web App.
	// if (environment !== Environment.Prod) {
	// 	adminAppImage = awsx.ecs.Image.fromDockerBuild(repositoryWebapp, {
	// 		context: config.dockerContextPath,
	// 		dockerfile: config.dockerWebappFile
	// 	});
	// } else {
	// 	adminAppImage = awsx.ecr.buildAndPushImage(
	// 		webappRepoName,
	// 		{
	// 			context: config.dockerContextPath,
	// 			dockerfile: config.dockerWebappFile
	// 		},
	// 		{ repository: repositoryWebapp }
	// 	);
	// }

	return { apiImage, adminAppImage };
};
