- The env variables which must be present in the .env file, are passed through the docker command, env variables can be passed by both .env files as well as by the command line.

- We are adding the "RUN npm prisma generate" in our Dockerfile, so that the prisma client is generated with the environment variables passed with the command when the docker image is built.