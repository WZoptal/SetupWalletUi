# Conversion Instructions

## Convert Angular Web App to Ionic App

At the project root run the commands:

- `ng add @ionic/angular`
- `ionic init`

The `ionic init` command will ask you to choose a name for your app. This name must be consistent with the name your app already has been given in the angular.json file as the `"defaultProject"` property.

If you wish to choose a name that differs from the `"defaultProject"` property, then after you execute the `ionic init` command with the new name, you must make changes to several places in the project.

- app.component.ts `title` property should be converted to the new project name.
- Search the angular.json file for each instance of the old `"defaultProject"` property value and convert those instances to the new project name.
- I searched the entire project for any string that matched the old `"defaultProject"` value and converted that to the new project name for consistency throughout the project.

In the angular.json file change the `"outputPath"` property to be `"www"`.
In the Dockerfile look for a string that match the old `"outputPath"` value and change it to `www`. In this project the Dockerfile had:

`COPY --from=build /usr/local/app/dist/SMPL-Wallet /usr/share/nginx/html` with `dist/SMPL-Wallet` matching the old `"outputPath"` value.

I change the line to read:
`COPY --from=build /usr/local/app/www /usr/share/nginx/html`

The project should now successfully run as an Ionic Web App with the commands:

- `docker-compose down`
- `docker-compose up -d`
- `ionic serve --project="smpl-wallet-ui" --port 4200`

## Convert Ionic Web App to Mobile with Capacitor

Run the command:

- `ionic capacitor run android --project="smpl-wallet-ui" --port 4200`

This will enable the capacitor integration and install all dependencies. You must have Android Studio set up correctly for the app to run in an Android emulator.
