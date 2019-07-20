import { Component, OnInit } from "@angular/core";
import { ZendeskSdk } from "nativescript-zendesk-sdk";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    showHelpCenter() {
        ZendeskSdk.showHelpCenter({
            contactUsButtonVisible: true,
            categoriesCollapsed: false,
            conversationsMenu: false
        });
    }
    
    createRequest() {
        ZendeskSdk.createRequest({
            requestSubject: 'toto android',
            tags: ['sdk', 'android'],
            customFields: [{
                id: '360003316300',
                value: 'Toto'
            }]
        });
    }
    
    
    showRequestList() {
        ZendeskSdk.showRequestList();
    }
    
    showArticle() {
        ZendeskSdk.showArticle('360000496800');
    }
}
