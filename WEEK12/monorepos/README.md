### Deploying npm packages, Intro to Monorepos


### Deploy npm packages

1. mkdir common, cd common, npm init -y, npx tsc --init

2. Update tsconfig.json:
"rootDir": "./src",
"outDir": "./dist",
"declaration": true,
- Why we set declaration to true?
- When we push our package to npm, we don't push the ts files, rather we push the js files. So, we need to generate the declaration files, so that the .d.ts files which consists only the type information, are pushed to npm.
- ts files -> js files + .d.ts files

3. Sign up/login to npmjs.org, Run npm login, Update the name in package.json to be in your own npm namespace, Update main to be dist/index.js

4. Add src to .npmignore
5. Put all the necessary files in src, tsc -b to generate the output.
6. npm publish --access public


### Intro to Monorepos

1. Before the era of mono repos, people used to push their packages to npm, and then use them in their projects.

2. Now, with the feature of monorepos, we can have multiple packages in a single repo, and we can use them in our projects directly from local file system without pushing them to npm.

3. Advantages of monorepos:
- Code Sharing and Reuse: With a monorepo, you can easily share and reuse code across multiple projects, as all the code is in the same repository.

- For any small change in a package/code/components you don't need to push it to npm, you can directly use it in your project.

- Simplified Dependency Management: Managing dependencies is easier in a monorepo because you only have one place to update a dependency across all projects.

- Atomic Commits: You can make changes across multiple projects in a single commit, which is particularly useful when making breaking changes.

- Collaboration: Teams can work together on different projects within the same repository, improving collaboration.

- Single Build and Test Environment: With a monorepo, you can have a single place to build, test, and deploy your code, simplifying these processes.

4. Suppose we want some code from another package/folder in the same monorepo, we can mention about that package/folder in the package.json of the current package/folder, and then we can use it in our code.