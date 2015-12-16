import { Component, View } from "angular2/core";
import { Http, Headers } from "angular2/http";

import { AuthHelper } from "../authHelper/authHelper"

@Component({
	selector: "files"
})

@View({
	templateUrl: "src/files/view-files.html"
})

export class Files {
	private files = [];
	constructor(http:Http, authHelper:AuthHelper) {
		// Perform REST call into Microsoft Graph for files on OneDrive for Business
		http.get("https://graph.microsoft.com/v1.0/me/drive/root/children", {
			headers: new Headers({ "Authorization": "Bearer " + authHelper.access_token })
		})
		.subscribe(res => {
			// Check the response status before trying to display files
			if (res.status === 200)
				this.files = res.json().value;
			else
				alert("An error occurred calling the Microsoft Graph: " + res.status);
		});
	}
}