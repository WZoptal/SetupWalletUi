# SMPLWallet

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.7.

## Development SetUp

All of the following commands should be run at the root of the project.

- Verify that you have created a branch based from staging.
- All pull requests must be created to merge into staging or a lower branch.
- Never commit changes to the main or staging branches.
- Before creating a pull request into staging, make sure your branch is not behind staging by any commits. Run `git merge staging` to merge staging into your branch. Resolve any conflicts that may arrise from the merge and verify that your branch still functions as expected.

- Install node packages with `npm i`. (You may need to run with the flag `--legacy-peer-deps`.)
  - In order to successfully install the `@smplfinance` node packages, you must define `SMPL_NPM_TOKEN` as an environment variable in your `~/.bashrc` file, if your development on a Linux operating system; or `~/.zshrc` file, if you are developing on a Mac operating system.
    - Generate a Github personal access token with at least read access to Github packages.
    - Copy the personal access token.
    - Add `export SMPL_NPM_TOKEN=[your Github personal access token]` on a new line in your associated `~/.*shrc` file.

- Follow the instructions pinned to the devchat slack channel
    1) Install docker 
    2) download the docker-config.json file
    3) Run mv ./docker-config.json ~/.docker/config.json
    - In order to successfully pull the needed docker containers from the container registry, you must add the [docker/config.json](https://github.com/SmplFinance/SmplDocs/blob/main/docker/config.json) file from the SmplFinance/SmplDocs repository to your the `~/.docker/config.json` path on your local machine.

    - Run `docker-compose up -d` to run the docker containers this project is dependent on.
  
- Follow the https://capacitorjs.com/docs/android instructions

    1) Install Android studio and Android SDK
    2) Run `ionic build`
    3) Install the chrome apk on chrome inside the Android emulator
    4) Run `npx cap run android`


- Run `npm run start` to start the dev server.

- Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Smpl Packages
@smplfinance packages require authentication. You simply need to define an environment variable `SMPL_NPM_TOKEN`.
The value should be set to a github access key from your account. Alternatively you can create a .npmrc file 
in your home directory with the appropriate credentials. 

## Token
If you want to send token to a user, do the following
Start the service.
Copy the address from the instruction page
Then inter the SmplChain docker image.
```shell
docker-compose exec SmplChain bash
```
Then, in the container run the following. "$WALLET_ADDRESS" is the address you copied from the instruction page.

```shell
docker-compose exec SmplChain smpl-chaind tx bank send smpl1qzweszzcnkcyr2cn36dlt5upp99ce5eyranlzc $WALLET_ADDRESS 1000smpl
```


smpl1akyfngpnjgq58mlmuxeyvxx624t70quft6ggx3


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Running in Capacitor for Android

Install Android Studio and have proper SDK packages installed. Look at the environment setup and android section here. [Capacitor Environment Setup](https://capacitorjs.com/docs/getting-started/environment-setup)
Ensure you have a virtual device set up and docker-compose running.
Run `npx cap run android` then select a device to run in an android emulator.

## Deployment

### Staging:

1. Verify that you are running the latest commit on staging:
  - `git checkout staging`
  - `git pull`
  - Check the versions of all smplfinance package/container dependencies to make sure they match the latest release
2. Verify that the project runs locally as expected:
  - `npm i` (You may need to add the `--legacy-peer-deps` flag if the command fails with an error.)
  - `docker-compose up -d`
  - `npm run start`
  - open browser to [http://localhost:4200](http://localhost:4200)
3. Verify that all tests pass:
  - `npm run test`
4. Tag commit and checkout for deploy:
  - Verify that package.json, do-spec.staging.yaml, do-spec.prod.yaml have the desired version/tag.
    - Important: the last digit of the version/tag should be odd to signify that the build points to staging endpoints.
  - Make sure all local changes have been committed and pushed following normal process (branch from staging, commit changes, create pull request for review).
  - `git tag <version>`
  - `git push origin <version>`
  - `git checkout <version>`
5. Build and deploy staging application:
  - `npm run image:versioned-staging`
  - `npm run push:versioned-staging`
  - `doctl app list`
  - copy the ID for the smpl-wallet-ui-staging app
  - `doctl app update <app-ID> --spec ./do-spec.staging.yaml --wait`

### Production:

1. Verify that you are running the latest commit on staging:
  - `git checkout staging`
  - `git pull`
  - Check the versions of all smplfinance package/container dependencies to make sure they match the latest release
2. Verify that the project runs locally as expected:
  - `npm i` (You may need to add the `--legacy-peer-deps` flag if the command fails with an error.)
  - `npm run start`
  - open browser to [http://localhost:4200](http://localhost:4200)
3. Verify that all tests pass:
  - `npm run test`
4. Tag commit and checkout for deploy:
  - Verify that package.json, do-spec.staging.yaml, do-spec.prod.yaml have the desired version/tag.
    - Important: the last digit of the version/tag should be even to signify that the build points to production endpoints.
  - Make sure all local changes have been committed and pushed following normal process (branch from staging, commit changes, create pull request for review).
  - Create a pull request from the staging branch to main.
  - Once the changes have been merged to main:
    - `git checkout main`
    - Verify the project runs as expect and passes all tests again
    - `git tag <version>`
    - `git push origin <version>`
    - `git checkout <version>`
5. Build and deploy production application:
  - `npm run image:versioned-prod`
  - `npm run push:versioned-prod`
  - `doctl app list`
  - copy the ID for the smpl-wallet-ui-prod app
  - `doctl app update <app-ID> --spec ./do-spec.prod.yaml --wait`


## Cordova build steps

1. Remove the android and plugin folder from the root directory
2. Change the static IP in the following files 
     - src/app/configs/keycloakconfig.ts
     - resources/android/xml/network_security_config.xml
3. Run the command to add platform ` ionic cordova platform add android`
4. Run the command to create build  `ionic cordova build android`


### Helpful commands:
```docker-compose exec SmplChain  smpl-chaind tx roles add bank smpl1q28v96p6lhyac2ghjlyylsl4290tl722x9kmtg --from alice```
```docker-compose exec SmplChain smpl-chaind tx smplcoins mintsusdse 10000 --from alice```
```docker-compose exec SmplChain smpl-chaind tx bank send smpl1q28v96p6lhyac2ghjlyylsl4290tl722x9kmtg smpl1amjrtwxjtngwgsfun6xgmr9ut8v4v9dh6c0nsd 10usdse```

## To Set Keycloak Url:
- Run npm run set-url --keycloak_url="KEYCLOAK_URL"
