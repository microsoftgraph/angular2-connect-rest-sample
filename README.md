# O365-Angular2-Microsoft-Graph-MyFiles
This sample is a simple Angular2 web application for authenticating to Azure AD and calling into the Microsoft Graph. It it built with TypeScript and does not rely on any libraries for authentication or calling into the Microsoft Graph.

## Getting Started
1. Clone repository.
2. Register your application using the App Registration tool at [dev.office.com](http://dev.office.com/app-registration) and use http://127.0.0.1:8080/ as the Sign on and Redirect URIs.
3. Update the src/svcConsts/svcConsts.ts with the Client ID from the app registration and your tenant name.
4. Open command prompt at the project location and run **npm install** to pull down all the project dependencies and dev environment dependencies.
5. Run **npm start** to start and debug the app