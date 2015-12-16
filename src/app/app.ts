import { Component, provide } from "angular2/core";
import { bootstrap } from "angular2/platform/browser";
import { 
	Router,
	RouteConfig,
	ROUTER_DIRECTIVES,
	ROUTER_PROVIDERS,
	LocationStrategy,
	HashLocationStrategy
} from "angular2/router";
import { HTTP_PROVIDERS } from "angular2/http";

import { Login } from "../login/login";
import { Files } from "../files/files";
import { AuthHelper } from "../authHelper/authHelper";

@Component({
	selector: "files-app",
	template: "<router-outlet></router-outlet>",
	directives: [ROUTER_DIRECTIVES],
	providers: [HTTP_PROVIDERS]
})

// Configure the routes for the app
@RouteConfig([
	{ name: "Login", component: Login, path: "/login" },
	{ name: "Files", component: Files, path: "/files" }
])

export class App {
	constructor(router:Router, auth:AuthHelper) {
		// Route the user to a view based on presence of access token
		if (auth.access_token !== null) {
			// access token exists...display the users files
			router.navigate(["/Files"]);
		}
		else {
			// access token doesn't exist, so the user needs to login
			router.navigate(["/Login"]);
		}
	}
}

bootstrap(App, [AuthHelper, ROUTER_PROVIDERS, provide(LocationStrategy, { useClass: HashLocationStrategy })]);