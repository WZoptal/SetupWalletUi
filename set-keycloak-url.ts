
const fs = require('fs');
const targetPath = './src/environments/keycloak-url.ts';
// Load node modules
require('dotenv').config();
const DEFAULT_URL = 'http://192.168.1.118:8080/auth';

// `keycloak-url.ts` file structure
const keycloakUrlFile  = `// This file generate automatically when we build app, default URL=${DEFAULT_URL}
export const keyCloakUrl = {
  url: '${process.env.npm_config_keycloak_url || ''}/auth',
};
`;

fs.writeFile(targetPath, keycloakUrlFile, function (err: any) {
  if (err) {
    throw console.error(err);
  } else {
    console.log(`keycloak-url file generated correctly at ${targetPath} \n`);
  }
});
