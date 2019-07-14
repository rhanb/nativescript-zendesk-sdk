import { device } from "tns-core-modules/platform";
import { topmost } from "tns-core-modules/ui/frame";
import {
  AnonUserIdentity,
  HelpCenterOptions,
  InitConfig,
  IosThemeSimple,
  ZendeskSdk as ZendeskSdkBase
} from "./zendesk-sdk";
import { ArticleOptions, RequestOptions } from "./zendesk-sdk.common";

export * from "./zendesk-sdk.common";

export class ZendeskSdk implements ZendeskSdkBase {
  public static initialize(config: InitConfig): ZendeskSdk {
    zendesk.core.Zendesk.INSTANCE.init(
      topmost().android.activity,
      config.zendeskUrl,
      config.applicationId,
      config.clientId
    );

    if (!config.identity) {
      ZendeskSdk.setAnonymousIdentity();
    } else if (typeof config.identity === "object") {
      ZendeskSdk.setAnonymousIdentity(config.identity);
    } else if (typeof config.identity === "string") {
      ZendeskSdk.setJwtIdentity(config.identity);
    }

    zendesk.support.Support.INSTANCE.init(zendesk.core.Zendesk.INSTANCE);

    if (config.userLocale) {
      ZendeskSdk.setUserLocale(config.userLocale);
    }

    return ZendeskSdk;
  }

  public static setUserLocale(locale: string): ZendeskSdk {
    if (zendesk.support.Support.INSTANCE) {
      zendesk.support.Support.INSTANCE.setHelpCenterLocaleOverride(
        new java.util.Locale(locale)
      );
    }

    return ZendeskSdk;
  }

  public static setAnonymousIdentity(
    anonUserIdentity: AnonUserIdentity = {}
  ): ZendeskSdk {
    const anonymousIdentityBuilder: zendesk.core.AnonymousIdentity.Builder = new zendesk.core.AnonymousIdentity.Builder();

    if (anonUserIdentity.name) {
      anonymousIdentityBuilder.withNameIdentifier(anonUserIdentity.name);
    }

    if (anonUserIdentity.email) {
      anonymousIdentityBuilder.withEmailIdentifier(anonUserIdentity.email);
    }

    zendesk.core.Zendesk.INSTANCE.setIdentity(anonymousIdentityBuilder.build());

    return ZendeskSdk;
  }

  public static setJwtIdentity(jwtUserIdentifier: string): ZendeskSdk {
    zendesk.core.Zendesk.INSTANCE.setIdentity(
      new zendesk.core.JwtIdentity(jwtUserIdentifier)
    );

    return ZendeskSdk;
  }

  public static configureRequests(config: RequestOptions = {}): ZendeskSdk {
    const temp = zendesk.support.request.RequestActivity.builder();

    if (config.requestSubject) {
      temp.withRequestSubject(config.requestSubject);
    }

    const tags = [];

    if (config.addDeviceInfo) {
      for (const p in device) {
        const value: any = (<any>device)[p];
        if (typeof value === "string" && value.length) {
          const tag: string = value.replace(/(\s|,)/g, "");
          tags.push(`${p}:${tag}`);
        }
      }
    }

    if (config.tags && config.tags.length) {
      for (const value of config.tags) {
        if (typeof value === "string" && value.length) {
          const tag: string = value.replace(/(\s|,)/g, "");
          tags.push(tag);
        }
      }
    }

    if (tags.length) {
      temp.withTags(tags);
    }

    ZendeskSdk._requestUiConfig = temp.config();

    return ZendeskSdk;
  }

  private static getHelpCenterUiConfigs(
    options: HelpCenterOptions = {},
    uiConfig: zendesk.commonui.UiConfig[] = []
  ) {
    if (uiConfig.length === 0) {
      uiConfig.push(ZendeskSdk._requestUiConfig);
    }

    if (options.articleOptions) {
      uiConfig.push(this._initArticle(options.articleOptions).config());
    }

    return this.getRequestUiConfigAsArray(uiConfig);
  }

  public static showHelpCenter(
    options: HelpCenterOptions = {},
    uiConfig: zendesk.commonui.UiConfig[] = []
  ): void {
    this._initHelpCenter(options).show(
      topmost().android.activity,
      this.getHelpCenterUiConfigs(options, uiConfig)
    );
  }

  public static showHelpCenterForCategoryIds(
    categoryIds: Array<number>,
    options: HelpCenterOptions = {},
    uiConfig: zendesk.commonui.UiConfig[] = []
  ): void {
    this._initHelpCenter(options)
      .withArticlesForCategoryIds(<any>categoryIds)
      .show(
        topmost().android.activity,
        this.getHelpCenterUiConfigs(options, uiConfig)
      );
  }

  public static showHelpCenterForSectionIds(
    sectionIds: Array<number>,
    options: HelpCenterOptions = {},
    uiConfig: zendesk.commonui.UiConfig[] = []
  ): void {
    this._initHelpCenter(options)
      .withArticlesForSectionIds(<any>sectionIds)
      .show(
        topmost().android.activity,
        this.getHelpCenterUiConfigs(options, uiConfig)
      );
  }

  public static showHelpCenterForLabelNames(
    labelNames: Array<string>,
    options: HelpCenterOptions = {},
    uiConfig: zendesk.commonui.UiConfig[] = []
  ): void {
    this._initHelpCenter(options)
      .withLabelNames(<any>labelNames)
      .show(
        topmost().android.activity,
        this.getHelpCenterUiConfigs(options, uiConfig)
      );
  }

  public static showArticle(
    articleId: string,
    options: ArticleOptions = {},
    uiConfig: zendesk.commonui.UiConfig[] = []
  ): void {
    this._initArticle(options, articleId).show(
      topmost().android.activity,
      this.getRequestUiConfigAsArray(uiConfig)
    );
  }

  public static createRequest(
    options: RequestOptions = {},
    uiConfig: zendesk.commonui.UiConfig[] = []
  ) {
    this._initRequest(options).show(
      topmost().android.activity,
      this.getRequestUiConfigAsArray(uiConfig)
    );
  }

  public static setIosTheme(_theme: IosThemeSimple): ZendeskSdk {
    return ZendeskSdk;
  }

  private static _requestUiConfig: zendesk.commonui.UiConfig = null;

  private static getRequestUiConfigAsArray(
    uiConfig: zendesk.commonui.UiConfig[] = []
  ): java.util.ArrayList<zendesk.belvedere.BelvedereUi.UiConfig> {
    const requestUiConfig: zendesk.commonui.UiConfig[] =
      uiConfig.length > 0 ? uiConfig : [ZendeskSdk._requestUiConfig];
    return new java.util.ArrayList(java.util.Arrays.asList(requestUiConfig));
  }

  private static _initHelpCenter(
    options: HelpCenterOptions
  ): zendesk.support.guide.HelpCenterUiConfig.Builder {
    return zendesk.support.guide.HelpCenterActivity.builder()
      .withContactUsButtonVisible(true)
      .withCategoriesCollapsed(
        !!options.categoriesCollapsedAndroid
          ? options.categoriesCollapsedAndroid
          : false
      )
      .withShowConversationsMenuButton(
        !!options.conversationsMenu ? options.conversationsMenu : false
      );
  }

  private static _initArticle(
    options: ArticleOptions,
    articleId?: string
  ): zendesk.support.guide.ArticleUiConfig.Builder {
    const articleBuilder = articleId
      ? zendesk.support.guide.ViewArticleActivity.builder(parseInt(articleId))
      : zendesk.support.guide.ViewArticleActivity.builder();
    return articleBuilder.withContactUsButtonVisible(
      !!options.contactUsButtonVisible ? options.contactUsButtonVisible : false
    );
  }

  private static _initRequest(
    options: RequestOptions
  ): zendesk.support.request.RequestUiConfig.Builder {
    let requestBuilder = zendesk.support.request.RequestActivity.builder();

    if (options.requestId) {
      requestBuilder = requestBuilder.withRequestId(options.requestId);
    }

    if (options.requestSubject) {
      requestBuilder = requestBuilder.withRequestSubject(
        options.requestSubject
      );
    }

    if (options.tags && options.tags.length > 0) {
      requestBuilder = requestBuilder.withTags(
        new java.util.ArrayList(java.util.Arrays.asList(options.tags))
      );
    }

    if (options.customFields && options.customFields.length > 0) {
      requestBuilder = requestBuilder.withCustomFields(
        new java.util.ArrayList(java.util.Arrays.asList(options.customFields))
      );
    }

    if (options.files && options.files.length > 0) {
      requestBuilder = requestBuilder.withFiles(
        new java.util.ArrayList(java.util.Arrays.asList(options.files))
      );
    }

    if (
      options.ticketForm &&
      options.ticketForm.ticketFormId &&
      options.ticketForm.customFields &&
      options.ticketForm.customFields.length > 0
    ) {
      requestBuilder = requestBuilder.withTicketForm(
        parseInt(options.ticketForm.ticketFormId),
        new java.util.ArrayList(java.util.Arrays.asList(options.files))
      );
    }

    return requestBuilder;
  }
}
