## WEEK21

### Live Classes
21.1 -> Mono repos and turborepo: What, why of monorepos, Build System vs Build System Orchestrator vs Monorepo Framework, TurboRepo as Build System Orchestrator, Initial Setup and explore

21.2 -> Monorepos Continued: Project init, adding and exporting components from ui module, added other nodejs services, adding express and wss server, extending tsconfig.json, adding dev and build scripts, turbo.json and overriding this.


### Recorded Classes


### Notion Notes
21.1 -> https://projects.100xdevs.com/tracks/monorepo/monorepo-1
21.2 -> Same as 21.1


### Extras
21.1 -> 
- TurboRepo: Build System Orchestrator. What i assume is, suppose some folks were using mono repo, they might have faced issues with builds, like which service to build first and then which one, its a complex problem when the codebase is huge. Then there were problems with build caching, etc. There's where TurboRepo came into picture, it solves the above complexities
- Build System: tsc, esbuid, nextbuild, etc. Build System Orchestrator: TurboRepo, Monorepo Framework: Lerna, pnpm workspaces, etc
- TurboRepo: Caching, Parallelization, Dependency Graph Awareness

21.2 -> 
- Things to keep in mind for TurboRepo:
    - 1. Initialised a monorepo
    - 2. We learned how to create a design system/ re-use/import things from a 'ui module.
    - 3. We learnt about "exports" in package.json
    - 4. We created a vary minimal frontend for our chat app
    ---
    - 1. We added a ws and a http-server folder
    - 2. We initialized package.json in both of them
    - 3. We put the common tsconfig.json in the 'typescript-configs' module and extended the tsconfig.json in both of the services from the 'typescript-configs' module
    - 4. We added code to the express server
    - 5. We added a dev and a build script
    - 6. Overriding turbo.json, understanding turbo.json

- turbo.json: build task
    - `"dependsOn": ["^build"]` -> This line for Dependency Graph Awareness
    - `"inputs": ["$TURBO_DEFAULT$", ".env*"]` -> This line is to know which files to watch for cache invalidation
    - `"outputs": [".next/**", "!.next/cache/**"]` -> This line is for providing the build folders to turbo, so that if there is no change in the code of a particular service, it will dump out the cached build


### Confusion:
- I have a confusion, I am using turbo repo, suppose in the apps directory, I have a nextjs and a nodejs project. Then when I do turbo build, do the code of the packages ui folder comes up to my .next build folder if the nextjs project is using any specific component from the packages ui folder??
- Yes the code of the packages ui folder comes up to the build folder after running build command
- That is why we can deploy each service separately