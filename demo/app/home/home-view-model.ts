import { Observable } from "tns-core-modules/data/observable";
import { ZendeskSdk, InitConfig, HelpCenterOptions } from "nativescript-zendesk-sdk";

export class HomeViewModel extends Observable {
    constructor() {
        super();

        const initConfig: InitConfig = {
            applicationId: 'dc7a21824e1596be8a4a75891e10461ca74d79e51fbb944d',
            zendeskUrl: 'https://nativescript-sdk.zendesk.com',
            clientId: 'mobile_sdk_client_f9d6dd75b827d16cc820',
        };
        ZendeskSdk.initialize(initConfig);
        ZendeskSdk.setAnonymousIdentity({ name: "rhanb", email: "jb@gmail.com" });

        ZendeskSdk.showHelpCenter(<HelpCenterOptions>{
            categoriesCollapsedAndroid: true,
            conversationsMenu: true,
            conversationsMenuIos: true,
            showAsModalForIos: true
        });
        // ZendeskSdk.createRequest();
    }
}
