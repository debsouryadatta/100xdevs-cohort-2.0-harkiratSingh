## WEEK21

### Live Classes
21.1 -> Mono repos and turborepo: What, why of monorepos, Build System vs Build System Orchestrator vs Monorepo Framework, TurboRepo as Build System Orchestrator, Initial Setup and explore

21.2 -> 


### Recorded Classes


### Notion Notes
21.1 -> https://projects.100xdevs.com/tracks/monorepo/monorepo-1
21.2 -> 


### Extras
21.1 -> 
- TurboRepo: Build System Orchestrator. What i assume is, suppose some folks were using mono repo, they might have faced issues with builds, like which service to build first and then which one, its a complex problem when the codebase is huge. Then there were problems with build caching, etc. There's where TurboRepo came into picture, it solves the above complexities
- Build System: tsc, esbuid, nextbuild, etc. Build System Orchestrator: TurboRepo, Monorepo Framework: Lerna, pnpm workspaces, etc
- TurboRepo: Caching, Parallelization, Dependency Graph Awareness

21.2 -> 
- Things to keep in mind for TurboRepo:
    - In the packages folder, inside ui package, we need to export the components individually on the package.json of the ui package
    
