## WEEK15

### Live Classes
15.1 -> Docker I -> Why? Containerization, Docker Engine, Docker CLI, Docker registry, Images vs containers, Port mapping, common commands, Dockerfile, Building and Running Images, env variables, docker exec.✅

15.2 -> Docker II -> Layers in Docker(Caching), Optimising Dockerfile, Networks and volumes.✅


### Recorded Classes
15.3 -> Docker III -> Pushing to Dockerhub, docker-compose✅

15.4 -> Bind Mounts in Docker(Syncing local folder with folder inside container)✅ (Need one more revision/implementation)


### Notion Notes
Link - https://quickest-juniper-f9c.notion.site/Cohort-2-0-FullStack-Open-Source-6b6c2a9f1282499aba4782b88bf7e204


### Assignments



### Extra Links
After 15.1 -> 
Link to the Steps
1. https://projects.100xdevs.com/tracks/docker-2/docker-2-1


### Extras
1. The env variables which must be present in the .env file, are passed through the docker command, env variables can be passed by both .env files as well as by the command line.

2. We are adding the "RUN npm prisma generate" in our Dockerfile, so that the prisma client is generated with the environment variables passed with the command when the docker image is built.