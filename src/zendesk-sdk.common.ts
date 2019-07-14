export interface AnonUserIdentity {
  name?: string;
  email?: string;
}

export interface RequestOptions {
  requestId?: string;
  requestSubject?: string;
  addDeviceInfo?: boolean;
  tags?: Array<string>;
  files?: Array<File>;
  customFields?: Array<zendesk.support.CustomField>;
  ticketForm?: {
    ticketFormId: string;
    customFields: Array<zendesk.support.CustomField>
  };
}


export interface ArticleOptions {
  /** default: false */
  contactUsButtonVisible?: boolean;
}

export interface HelpCenterOptions {
  /** default: { contactUsButtonVisible: false } */
  articleOptions?: ArticleOptions;
  /** default: false */
  contactUsButtonVisible?: boolean;
  /** default: false */
  categoriesCollapsedAndroid?: boolean;
  /** default: true */
  conversationsMenu?: boolean;
}

export interface InitConfig {
  zendeskUrl: string;
  applicationId: string;
  clientId: string;
  userLocale?: string;
  /** AnonUserIdentity object or JWT Token string */
  identity?: AnonUserIdentity | string;
}

export interface IosThemeSimple {
  primaryColor: any;
}