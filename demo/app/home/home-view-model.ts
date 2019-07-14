import { Observable } from "tns-core-modules/data/observable";
import {
    ZendeskSdk,
    InitConfig,
    HelpCenterOptions
} from "nativescript-zendesk-sdk";
import { applicationId, zendeskUrl, clientId } from "../../../secrets";

export class HomeViewModel extends Observable {
    constructor() {
        super();

        const initConfig: InitConfig = {
            applicationId,
            zendeskUrl,
            clientId
        };
        ZendeskSdk.initialize(initConfig);
        ZendeskSdk.setAnonymousIdentity({
            name: "test",
            email: "test@gmail.com"
        });

        ZendeskSdk.setIosTheme({
            primaryColor: "red"
        });
    }

    showHelpCenter() {
        ZendeskSdk.showHelpCenter(<HelpCenterOptions>{
            categoriesCollapsedAndroid: true,
            conversationsMenu: true,
            conversationsMenuIos: false,
            showAsModalForIos: false,
            contactUsButtonVisible: false
        });
    }
}
