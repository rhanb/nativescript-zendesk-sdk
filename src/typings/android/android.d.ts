/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module zendesk {
		export module collection {
			export class CountedSet<E>  extends java.util.Set<any> {
				public static class: java.lang.Class<com.zendesk.collection.CountedSet<any>>;
				public static NOT_FOUND: number;
				public contains(param0: any): boolean;
				public addAll(param0: java.util.Collection<any>): boolean;
				public toArray(param0: native.Array<any>): native.Array<any>;
				public iterator(): java.util.Iterator<any>;
				public retainAll(param0: java.util.Collection<any>): boolean;
				public constructor();
				public size(): number;
				public toArray(): native.Array<any>;
				public containsAll(param0: java.util.Collection<any>): boolean;
				public add(param0: any): boolean;
				public removeAll(param0: java.util.Collection<any>): boolean;
				public clear(): void;
				public constructor(param0: number);
				public isEmpty(): boolean;
				public getCount(param0: any): number;
				public remove(param0: any): boolean;
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module func {
			export class ZFunc1<Param1, Return>  extends java.lang.Object {
				public static class: java.lang.Class<com.zendesk.func.ZFunc1<any,any>>;
				/**
				 * Constructs a new instance of the com.zendesk.func.ZFunc1<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					apply(param0: Param1): Return;
				});
				public constructor();
				public apply(param0: Param1): Return;
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module func {
			export class ZFunc2<Param1, Param2, Return>  extends java.lang.Object {
				public static class: java.lang.Class<com.zendesk.func.ZFunc2<any,any,any>>;
				/**
				 * Constructs a new instance of the com.zendesk.func.ZFunc2<any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					apply(param0: Param1, param1: Param2): Return;
				});
				public constructor();
				public apply(param0: Param1, param1: Param2): Return;
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module logger {
			export class Logger {
				public static class: java.lang.Class<com.zendesk.logger.Logger>;
				public static e(param0: string, param1: string, param2: java.lang.Throwable, param3: native.Array<any>): void;
				public static d(param0: string, param1: string, param2: native.Array<any>): void;
				public static e(param0: string, param1: com.zendesk.service.ErrorResponse): void;
				public static i(param0: string, param1: string, param2: native.Array<any>): void;
				public static d(param0: string, param1: string, param2: java.lang.Throwable, param3: native.Array<any>): void;
				public static w(param0: string, param1: string, param2: native.Array<any>): void;
				public static w(param0: string, param1: string, param2: java.lang.Throwable, param3: native.Array<any>): void;
				public static removeAllLogAppender(): void;
				public static isLoggable(): boolean;
				public static v(param0: string, param1: string, param2: native.Array<any>): void;
				public static v(param0: string, param1: string, param2: java.lang.Throwable, param3: native.Array<any>): void;
				public static setLoggable(param0: boolean): void;
				public static i(param0: string, param1: string, param2: java.lang.Throwable, param3: native.Array<any>): void;
				public static e(param0: string, param1: string, param2: native.Array<any>): void;
				public static addLogAppender(param0: com.zendesk.logger.Logger.LogAppender): void;
			}
			export module Logger {
				export class Android extends com.zendesk.logger.Logger.LogAppender {
					public static class: java.lang.Class<com.zendesk.logger.Logger.Android>;
					public log(param0: com.zendesk.logger.Logger.Priority, param1: string, param2: string, param3: java.lang.Throwable): void;
				}
				export class Java extends com.zendesk.logger.Logger.LogAppender {
					public static class: java.lang.Class<com.zendesk.logger.Logger.Java>;
					public log(param0: com.zendesk.logger.Logger.Priority, param1: string, param2: string, param3: java.lang.Throwable): void;
				}
				export class LogAppender {
					public static class: java.lang.Class<com.zendesk.logger.Logger.LogAppender>;
					/**
					 * Constructs a new instance of the com.zendesk.logger.Logger$LogAppender interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						log(param0: com.zendesk.logger.Logger.Priority, param1: string, param2: string, param3: java.lang.Throwable): void;
					});
					public constructor();
					public log(param0: com.zendesk.logger.Logger.Priority, param1: string, param2: string, param3: java.lang.Throwable): void;
				}
				export class Priority {
					public static class: java.lang.Class<com.zendesk.logger.Logger.Priority>;
					public static VERBOSE: com.zendesk.logger.Logger.Priority;
					public static DEBUG: com.zendesk.logger.Logger.Priority;
					public static INFO: com.zendesk.logger.Logger.Priority;
					public static WARN: com.zendesk.logger.Logger.Priority;
					public static ERROR: com.zendesk.logger.Logger.Priority;
					public static valueOf(param0: string): com.zendesk.logger.Logger.Priority;
					public static values(): native.Array<com.zendesk.logger.Logger.Priority>;
				}
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module logger {
			export class LoggerHelper {
				public static class: java.lang.Class<com.zendesk.logger.LoggerHelper>;
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module sdk {
			export class BuildConfig {
				public static class: java.lang.Class<com.zendesk.sdk.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module sdk {
			export module providers {
				export class BuildConfig {
					public static class: java.lang.Class<com.zendesk.sdk.providers.BuildConfig>;
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module service {
			export class CancellableCompositeZendeskCallback<T>  extends com.zendesk.service.ZendeskCallback<any> {
				public static class: java.lang.Class<com.zendesk.service.CancellableCompositeZendeskCallback<any>>;
				public remove(param0: com.zendesk.service.SafeZendeskCallback<any>): void;
				public onSuccess(param0: any): void;
				public cancel(): void;
				public onError(param0: com.zendesk.service.ErrorResponse): void;
				public add(param0: com.zendesk.service.SafeZendeskCallback<any>): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module service {
			export class ErrorResponse {
				public static class: java.lang.Class<com.zendesk.service.ErrorResponse>;
				/**
				 * Constructs a new instance of the com.zendesk.service.ErrorResponse interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					isNetworkError(): boolean;
					isConversionError(): boolean;
					isHTTPError(): boolean;
					getReason(): string;
					getStatus(): number;
					getUrl(): string;
					getResponseBody(): string;
					getResponseBodyType(): string;
					getResponseHeaders(): java.util.List<com.zendesk.service.Header>;
				});
				public constructor();
				public static NON_HTTP_ERROR: number;
				/** @deprecated */
				public isNetworkError(): boolean;
				/** @deprecated */
				public isConversionError(): boolean;
				public getResponseBody(): string;
				public getResponseBodyType(): string;
				public getReason(): string;
				public getResponseHeaders(): java.util.List<com.zendesk.service.Header>;
				public getStatus(): number;
				public isHTTPError(): boolean;
				public getUrl(): string;
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module service {
			export class ErrorResponseAdapter extends com.zendesk.service.ErrorResponse {
				public static class: java.lang.Class<com.zendesk.service.ErrorResponseAdapter>;
				public getResponseBody(): string;
				/** @deprecated */
				public isNetworkError(): boolean;
				/** @deprecated */
				public isConversionError(): boolean;
				public isNetworkError(): boolean;
				public getResponseHeaders(): java.util.List<com.zendesk.service.Header>;
				public getStatus(): number;
				public getUrl(): string;
				public constructor(param0: string);
				public isConversionError(): boolean;
				public constructor();
				public getResponseBodyType(): string;
				public getReason(): string;
				public static fromException(param0: java.lang.Throwable): com.zendesk.service.ErrorResponse;
				public isHTTPError(): boolean;
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module service {
			export class Header {
				public static class: java.lang.Class<com.zendesk.service.Header>;
				public hashCode(): number;
				public getValue(): string;
				public equals(param0: any): boolean;
				public getName(): string;
				public toString(): string;
				public constructor(param0: string, param1: string);
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module service {
			export class HttpConstants {
				public static class: java.lang.Class<com.zendesk.service.HttpConstants>;
				/**
				 * Constructs a new instance of the com.zendesk.service.HttpConstants interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
				public static APPLICATION_JSON: string;
				public static HTTP_LENGTH_REQUIRED: number;
				public static HTTP_RESET: number;
				public static HTTP_VERSION: number;
				public static HTTP_PRECON_FAILED: number;
				public static HTTP_CLIENT_TIMEOUT: number;
				public static HTTP_SEE_OTHER: number;
				public static HTTP_BAD_REQUEST: number;
				public static HTTP_ACCEPTED: number;
				public static HTTP_NOT_ACCEPTABLE: number;
				public static HTTP_PROXY_AUTH: number;
				public static HTTP_BLOCKED: number;
				public static HTTP_REQ_TOO_LONG: number;
				public static HTTP_BAD_GATEWAY: number;
				public static HTTP_MOVED_PERM: number;
				public static HTTP_NO_CONTENT: number;
				public static HTTP_GATEWAY_TIMEOUT: number;
				public static HTTP_PAYMENT_REQUIRED: number;
				public static HTTP_NOT_MODIFIED: number;
				public static HTTP_BAD_METHOD: number;
				public static HTTP_NOT_AUTHORITATIVE: number;
				public static HTTP_UNPROCESSABLE_ENTITY: number;
				public static HTTP_INTERNAL_ERROR: number;
				public static HTTP_USE_PROXY: number;
				public static HTTP_UNAVAILABLE: number;
				public static HTTP_OK: number;
				public static HTTP_ENTITY_TOO_LARGE: number;
				public static USER_AGENT_HEADER: string;
				public static HTTP_MOVED_TEMP: number;
				public static HTTP_GONE: number;
				public static AUTHORIZATION_HEADER: string;
				public static ACCEPT_HEADER: string;
				public static HTTP_FORBIDDEN: number;
				public static HTTP_NOT_IMPLEMENTED: number;
				public static HTTP_UNAUTHORIZED: number;
				public static HTTP_UNSUPPORTED_TYPE: number;
				public static HTTP_NOT_FOUND: number;
				public static HTTP_PARTIAL: number;
				public static HTTP_CONFLICT: number;
				public static HTTP_MULT_CHOICE: number;
				public static HTTP_CREATED: number;
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module service {
			export class RetrofitErrorResponse extends com.zendesk.service.ErrorResponse {
				public static class: java.lang.Class<com.zendesk.service.RetrofitErrorResponse>;
				public getResponseBody(): string;
				/** @deprecated */
				public isNetworkError(): boolean;
				/** @deprecated */
				public isConversionError(): boolean;
				public static response(param0: retrofit2.Response): com.zendesk.service.RetrofitErrorResponse;
				public isNetworkError(): boolean;
				public getResponseHeaders(): java.util.List<com.zendesk.service.Header>;
				public static throwable(param0: java.lang.Throwable): com.zendesk.service.RetrofitErrorResponse;
				public getStatus(): number;
				public getUrl(): string;
				public isConversionError(): boolean;
				public getResponseBodyType(): string;
				public getReason(): string;
				public isHTTPError(): boolean;
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module service {
			export class RetrofitZendeskCallbackAdapter<E, F>  extends retrofit2.Callback<any> {
				public static class: java.lang.Class<com.zendesk.service.RetrofitZendeskCallbackAdapter<any,any>>;
				public static DEFAULT_EXTRACTOR: com.zendesk.service.RetrofitZendeskCallbackAdapter.RequestExtractor<any,any>;
				public constructor(param0: com.zendesk.service.ZendeskCallback<any>);
				public constructor(param0: com.zendesk.service.ZendeskCallback<any>, param1: com.zendesk.service.RetrofitZendeskCallbackAdapter.RequestExtractor<any,any>);
				public onFailure(param0: retrofit2.Call<any>, param1: java.lang.Throwable): void;
				public onResponse(param0: retrofit2.Call<any>, param1: retrofit2.Response<any>): void;
			}
			export module RetrofitZendeskCallbackAdapter {
				export class DefaultExtractor<E>  extends com.zendesk.service.RetrofitZendeskCallbackAdapter.RequestExtractor<any,any> {
					public static class: java.lang.Class<com.zendesk.service.RetrofitZendeskCallbackAdapter.DefaultExtractor<any>>;
					public extract(param0: any): any;
				}
				export class RequestExtractor<E, F>  extends java.lang.Object {
					public static class: java.lang.Class<com.zendesk.service.RetrofitZendeskCallbackAdapter.RequestExtractor<any,any>>;
					/**
					 * Constructs a new instance of the com.zendesk.service.RetrofitZendeskCallbackAdapter$RequestExtractor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						extract(param0: E): F;
					});
					public constructor();
					public extract(param0: E): F;
				}
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module service {
			export class SafeZendeskCallback<T>  extends com.zendesk.service.ZendeskCallback<any> {
				public static class: java.lang.Class<com.zendesk.service.SafeZendeskCallback<any>>;
				public constructor(param0: com.zendesk.service.ZendeskCallback<any>);
				public onSuccess(param0: any): void;
				public static from(param0: com.zendesk.service.ZendeskCallback<any>): com.zendesk.service.SafeZendeskCallback<any>;
				public cancel(): void;
				public onError(param0: com.zendesk.service.ErrorResponse): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module service {
			export abstract class ZendeskCallback<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.zendesk.service.ZendeskCallback<any>>;
				public onSuccess(param0: T): void;
				public onError(param0: com.zendesk.service.ErrorResponse): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module service {
			export class ZendeskDateTypeAdapter extends com.google.gson.TypeAdapter<java.util.Date> {
				public static class: java.lang.Class<com.zendesk.service.ZendeskDateTypeAdapter>;
				public read(param0: com.google.gson.stream.JsonReader): java.util.Date;
				public write(param0: com.google.gson.stream.JsonWriter, param1: java.util.Date): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module service {
			export class ZendeskException {
				public static class: java.lang.Class<com.zendesk.service.ZendeskException>;
				public constructor(param0: retrofit2.Response);
				public errorResponse(): com.zendesk.service.ErrorResponse;
				public toString(): string;
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: com.zendesk.service.ErrorResponse);
				public constructor(param0: string);
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module util {
			export class BooleanUtils {
				public static class: java.lang.Class<com.zendesk.util.BooleanUtils>;
				public static isTrue(param0: java.lang.Boolean): boolean;
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module util {
			export class CollectionUtils {
				public static class: java.lang.Class<com.zendesk.util.CollectionUtils>;
				public static unmodifiableList(param0: java.util.List): java.util.List;
				public static mapKeys(param0: java.util.Map, param1: com.zendesk.func.ZFunc1<any,any>): java.util.Map;
				public static isNotEmpty(param0: native.Array<any>): boolean;
				public static copyOf(param0: java.util.List): java.util.List;
				public static map(param0: java.util.Collection, param1: com.zendesk.func.ZFunc1<any,any>): java.util.List;
				public static mapValues(param0: java.util.Map, param1: com.zendesk.func.ZFunc1<any,any>): java.util.Map;
				public static findFirst(param0: java.util.Collection, param1: com.zendesk.func.ZFunc1<any,any>): any;
				public static filter(param0: java.util.Collection, param1: com.zendesk.func.ZFunc1<any,any>): java.util.List;
				public static isEmpty(param0: native.Array<any>): boolean;
				public static groupingBy(param0: java.util.Collection, param1: com.zendesk.func.ZFunc1<any,any>): java.util.Map;
				public static isEmpty(param0: java.util.Collection): boolean;
				public static equalsByContents(param0: java.util.Collection, param1: java.util.Collection): boolean;
				public static copyOf(param0: java.util.Map): java.util.Map;
				public static getOrDefault(param0: java.util.Map, param1: any, param2: any): any;
				public static appendOrReplace(param0: java.util.Collection, param1: any, param2: com.zendesk.func.ZFunc2<any,any,any>): java.util.List;
				public static toPrimitiveLong(param0: native.Array<java.lang.Long>, param1: number): native.Array<number>;
				public static combineLists(param0: native.Array<java.util.List>): java.util.List;
				public static toPrimitiveLong(param0: native.Array<java.lang.Long>): native.Array<number>;
				public static map(param0: java.util.Map, param1: com.zendesk.func.ZFunc1<any,any>, param2: com.zendesk.func.ZFunc1<any,any>): java.util.Map;
				public static isNotEmpty(param0: java.util.Collection): boolean;
				public static filter(param0: java.util.Map, param1: com.zendesk.func.ZFunc2<any,any,any>): java.util.Map;
				public static associate(param0: java.util.Collection, param1: com.zendesk.func.ZFunc1<any,any>): java.util.Map;
				public static ensureEmpty(param0: java.util.List): java.util.List;
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module util {
			export class ColorUtils {
				public static class: java.lang.Class<com.zendesk.util.ColorUtils>;
				public static LOG_TAG: string;
				public static apiColorToAndroidColor(param0: string): java.lang.Integer;
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module util {
			export class DateUtils {
				public static class: java.lang.Class<com.zendesk.util.DateUtils>;
				public static isToday(param0: java.util.Date): boolean;
				public static isYesterday(param0: java.util.Date): boolean;
				public static deserialiseFromISO8601(param0: string): java.util.Date;
				public static getBeginOfDay(param0: java.util.Date): java.util.Date;
				public static isSameDay(param0: java.util.Date, param1: java.util.Date): boolean;
				public static serialiseToISO8601(param0: java.util.Date): string;
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module util {
			export class DigestUtils {
				public static class: java.lang.Class<com.zendesk.util.DigestUtils>;
				public static md5(param0: string): string;
				public static sha512(param0: string): string;
				public static sha384(param0: string): string;
				public static sha1(param0: string): string;
				public constructor();
				public static sha256(param0: string): string;
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module util {
			export class FileUtils {
				public static class: java.lang.Class<com.zendesk.util.FileUtils>;
				public static humanReadableFileSize(param0: java.lang.Long): string;
				public static humanReadableFileSize(param0: java.lang.Long, param1: boolean): string;
				public static getFileExtension(param0: string): string;
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module util {
			export class LocaleUtil {
				public static class: java.lang.Class<com.zendesk.util.LocaleUtil>;
				public static forLanguageTag(param0: string): java.util.Locale;
				public static toLanguageTag(param0: java.util.Locale): string;
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module util {
			export class MimeUtils {
				public static class: java.lang.Class<com.zendesk.util.MimeUtils>;
				public static hasMimeType(param0: string): boolean;
				public static hasExtension(param0: string): boolean;
				public static guessMimeTypeFromExtension(param0: string): string;
				public static guessExtensionFromMimeType(param0: string): string;
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module util {
			export class NumberFormatUtil {
				public static class: java.lang.Class<com.zendesk.util.NumberFormatUtil>;
				public static format(param0: number): string;
				public static format(param0: number, param1: com.zendesk.util.NumberFormatUtil.SuffixFormatDelegate): string;
			}
			export module NumberFormatUtil {
				export class NumberSuffix {
					public static class: java.lang.Class<com.zendesk.util.NumberFormatUtil.NumberSuffix>;
					public static NONE: com.zendesk.util.NumberFormatUtil.NumberSuffix;
					public static KILO: com.zendesk.util.NumberFormatUtil.NumberSuffix;
					public static MEGA: com.zendesk.util.NumberFormatUtil.NumberSuffix;
					public static GIGA: com.zendesk.util.NumberFormatUtil.NumberSuffix;
					public static TERA: com.zendesk.util.NumberFormatUtil.NumberSuffix;
					public static PETA: com.zendesk.util.NumberFormatUtil.NumberSuffix;
					public static EXA: com.zendesk.util.NumberFormatUtil.NumberSuffix;
					public static valueOf(param0: string): com.zendesk.util.NumberFormatUtil.NumberSuffix;
					public static values(): native.Array<com.zendesk.util.NumberFormatUtil.NumberSuffix>;
					public getSuffix(): string;
				}
				export class SuffixFormatDelegate {
					public static class: java.lang.Class<com.zendesk.util.NumberFormatUtil.SuffixFormatDelegate>;
					/**
					 * Constructs a new instance of the com.zendesk.util.NumberFormatUtil$SuffixFormatDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getSuffix(param0: com.zendesk.util.NumberFormatUtil.NumberSuffix): string;
					});
					public constructor();
					public getSuffix(param0: com.zendesk.util.NumberFormatUtil.NumberSuffix): string;
				}
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module util {
			export class ObjectUtils {
				public static class: java.lang.Class<com.zendesk.util.ObjectUtils>;
				public static getOrDefault(param0: any, param1: any): any;
				public static toString(param0: any, param1: string): string;
				public static getOrDefault(param0: java.util.concurrent.Callable, param1: any): any;
				public static checkNonNull(param0: native.Array<any>): boolean;
				public static toString(param0: any): string;
				public static hash(param0: native.Array<any>): number;
				public static hashCode(param0: any): number;
				public static equals(param0: any, param1: any): boolean;
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module util {
			export class RegexUtils {
				public static class: java.lang.Class<com.zendesk.util.RegexUtils>;
				public static escape(param0: string): string;
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module util {
			export class StringUtils {
				public static class: java.lang.Class<com.zendesk.util.StringUtils>;
				public static EMPTY_STRING: string;
				public static LINE_SEPARATOR: string;
				public static ensureEmpty(param0: string): string;
				public static toCsvString(param0: java.util.List<string>): string;
				public static toCsvString(param0: native.Array<string>): string;
				public static capitalize(param0: string): string;
				public static toDateInIsoFormat(param0: java.util.Date): string;
				public static isNumeric(param0: string): boolean;
				public static toCsvStringNumber(param0: native.Array<java.lang.Number>): string;
				public static toCsvStringNumber(param0: java.util.List<any>): string;
				public static startsWithIdeographic(param0: string): boolean;
				public static isEmpty(param0: string): boolean;
				public static toCsvString(param0: native.Array<number>): string;
				public static escapeEcmaScript(param0: string): string;
				public static fromCsv(param0: string): java.util.List<string>;
				public static hasLength(param0: string): boolean;
				public static hasLengthMany(param0: native.Array<string>): boolean;
			}
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class Belvedere {
			public static class: java.lang.Class<zendesk.belvedere.Belvedere>;
			public static from(param0: globalAndroid.content.Context): zendesk.belvedere.Belvedere;
			public getFilesFromActivityOnResult(param0: number, param1: number, param2: globalAndroid.content.Intent, param3: zendesk.belvedere.Callback<java.util.List<zendesk.belvedere.MediaResult>>, param4: boolean): void;
			public camera(): zendesk.belvedere.MediaIntent.CameraIntentBuilder;
			public getFilesFromActivityOnResult(param0: number, param1: number, param2: globalAndroid.content.Intent, param3: zendesk.belvedere.Callback<java.util.List<zendesk.belvedere.MediaResult>>): void;
			public resolveUris(param0: java.util.List<globalAndroid.net.Uri>, param1: string, param2: zendesk.belvedere.Callback<java.util.List<zendesk.belvedere.MediaResult>>): void;
			public document(): zendesk.belvedere.MediaIntent.DocumentIntentBuilder;
			public getShareIntent(param0: globalAndroid.net.Uri, param1: string): globalAndroid.content.Intent;
			public revokePermissionsForUri(param0: globalAndroid.net.Uri): void;
			public grantPermissionsForUri(param0: globalAndroid.content.Intent, param1: globalAndroid.net.Uri): void;
			public clearStorage(): void;
			public getViewIntent(param0: globalAndroid.net.Uri, param1: string): globalAndroid.content.Intent;
			public getFile(param0: string, param1: string): zendesk.belvedere.MediaResult;
			public static setSingletonInstance(param0: zendesk.belvedere.Belvedere): void;
		}
		export module Belvedere {
			export class Builder {
				public static class: java.lang.Class<zendesk.belvedere.Belvedere.Builder>;
				public build(): zendesk.belvedere.Belvedere;
				public logger(param0: zendesk.belvedere.L.Logger): zendesk.belvedere.Belvedere.Builder;
				public constructor(param0: globalAndroid.content.Context);
				public debug(param0: boolean): zendesk.belvedere.Belvedere.Builder;
			}
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class BelvedereDialog {
			public static class: java.lang.Class<zendesk.belvedere.BelvedereDialog>;
			public onStart(): void;
			public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
			public onCreate(param0: globalAndroid.os.Bundle): void;
			public constructor();
			public onRequestPermissionsResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
			public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
		}
		export module BelvedereDialog {
			export class Adapter extends globalAndroid.widget.ArrayAdapter<zendesk.belvedere.MediaIntent> {
				public static class: java.lang.Class<zendesk.belvedere.BelvedereDialog.Adapter>;
				public getView(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
			}
			export class AttachmentSource {
				public static class: java.lang.Class<zendesk.belvedere.BelvedereDialog.AttachmentSource>;
				public getDrawable(): number;
				public static from(param0: zendesk.belvedere.MediaIntent, param1: globalAndroid.content.Context): zendesk.belvedere.BelvedereDialog.AttachmentSource;
				public getText(): string;
			}
			export class StartActivity {
				public static class: java.lang.Class<zendesk.belvedere.BelvedereDialog.StartActivity>;
				/**
				 * Constructs a new instance of the zendesk.belvedere.BelvedereDialog$StartActivity interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					startActivity(param0: zendesk.belvedere.MediaIntent): void;
					getContext(): globalAndroid.content.Context;
				});
				public constructor();
				public startActivity(param0: zendesk.belvedere.MediaIntent): void;
				public getContext(): globalAndroid.content.Context;
			}
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class BelvedereFileProvider {
			public static class: java.lang.Class<zendesk.belvedere.BelvedereFileProvider>;
			public constructor();
			public query(param0: globalAndroid.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string): globalAndroid.database.Cursor;
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class BelvedereUi {
			public static class: java.lang.Class<zendesk.belvedere.BelvedereUi>;
			public static imageStream(param0: globalAndroid.content.Context): zendesk.belvedere.BelvedereUi.ImageStreamBuilder;
			public constructor();
			public static install(param0: globalAndroid.support.v7.app.AppCompatActivity): zendesk.belvedere.ImageStream;
			public static showDialog(param0: globalAndroid.support.v4.app.FragmentManager, param1: native.Array<zendesk.belvedere.MediaIntent>): void;
			public static showDialog(param0: globalAndroid.support.v4.app.FragmentManager, param1: java.util.List<zendesk.belvedere.MediaIntent>): void;
		}
		export module BelvedereUi {
			export class ImageStreamBuilder {
				public static class: java.lang.Class<zendesk.belvedere.BelvedereUi.ImageStreamBuilder>;
				public withExtraItems(param0: java.util.List<zendesk.belvedere.MediaResult>): zendesk.belvedere.BelvedereUi.ImageStreamBuilder;
				public withSelectedItems(param0: java.util.List<zendesk.belvedere.MediaResult>): zendesk.belvedere.BelvedereUi.ImageStreamBuilder;
				public withMaxFileSize(param0: number): zendesk.belvedere.BelvedereUi.ImageStreamBuilder;
				public withFullScreenOnly(param0: boolean): zendesk.belvedere.BelvedereUi.ImageStreamBuilder;
				public withCameraIntent(): zendesk.belvedere.BelvedereUi.ImageStreamBuilder;
				public withDocumentIntent(param0: string, param1: boolean): zendesk.belvedere.BelvedereUi.ImageStreamBuilder;
				public withTouchableItems(param0: native.Array<number>): zendesk.belvedere.BelvedereUi.ImageStreamBuilder;
				public showPopup(param0: globalAndroid.support.v7.app.AppCompatActivity): void;
			}
			export class UiConfig {
				public static class: java.lang.Class<zendesk.belvedere.BelvedereUi.UiConfig>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<zendesk.belvedere.BelvedereUi.UiConfig>;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public describeContents(): number;
			}
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class BitmapUtils {
			public static class: java.lang.Class<zendesk.belvedere.BitmapUtils>;
			public static getImageDimensions(param0: java.io.File): globalAndroid.util.Pair<java.lang.Integer,java.lang.Integer>;
			public constructor();
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class BuildConfig {
			public static class: java.lang.Class<zendesk.belvedere.BuildConfig>;
			public static DEBUG: boolean;
			public static APPLICATION_ID: string;
			public static BUILD_TYPE: string;
			public static FLAVOR: string;
			public static VERSION_CODE: number;
			public static VERSION_NAME: string;
			public constructor();
		}
	}
}

declare module zendesk {
	export module belvedere {
		export abstract class Callback<E>  extends java.lang.Object {
			public static class: java.lang.Class<zendesk.belvedere.Callback<any>>;
			public success(param0: E): void;
			public cancel(): void;
			public constructor();
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class FixedWidthImageView {
			public static class: java.lang.Class<zendesk.belvedere.FixedWidthImageView>;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
			public showImage(param0: com.sebchlan.picassocompat.PicassoCompat, param1: globalAndroid.net.Uri, param2: number, param3: number, param4: zendesk.belvedere.FixedWidthImageView.DimensionsCallback): void;
			public onBitmapLoaded(param0: globalAndroid.graphics.Bitmap, param1: com.sebchlan.picassocompat.PicassoCompat.LoadedFrom): void;
			public onBitmapFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
			public onPrepareLoad(param0: globalAndroid.graphics.drawable.Drawable): void;
			public onMeasure(param0: number, param1: number): void;
			public constructor(param0: globalAndroid.content.Context);
			public showImage(param0: com.sebchlan.picassocompat.PicassoCompat, param1: globalAndroid.net.Uri, param2: zendesk.belvedere.FixedWidthImageView.CalculatedDimensions): void;
		}
		export module FixedWidthImageView {
			export class CalculatedDimensions {
				public static class: java.lang.Class<zendesk.belvedere.FixedWidthImageView.CalculatedDimensions>;
			}
			export class DimensionsCallback {
				public static class: java.lang.Class<zendesk.belvedere.FixedWidthImageView.DimensionsCallback>;
				/**
				 * Constructs a new instance of the zendesk.belvedere.FixedWidthImageView$DimensionsCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onImageDimensionsFound(param0: zendesk.belvedere.FixedWidthImageView.CalculatedDimensions): void;
				});
				public constructor();
				public onImageDimensionsFound(param0: zendesk.belvedere.FixedWidthImageView.CalculatedDimensions): void;
			}
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class FloatingActionMenu {
			public static class: java.lang.Class<zendesk.belvedere.FloatingActionMenu>;
			public onClick(param0: globalAndroid.view.View): void;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
			public addMenuItem(param0: number, param1: number, param2: number, param3: globalAndroid.view.View.OnClickListener): void;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
			public constructor(param0: globalAndroid.content.Context);
		}
		export module FloatingActionMenu {
			export abstract class AnimationListenerAdapter {
				public static class: java.lang.Class<zendesk.belvedere.FloatingActionMenu.AnimationListenerAdapter>;
				public onAnimationStart(param0: globalAndroid.view.animation.Animation): void;
				public onAnimationEnd(param0: globalAndroid.view.animation.Animation): void;
				public onAnimationRepeat(param0: globalAndroid.view.animation.Animation): void;
			}
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class ImageStream {
			public static class: java.lang.Class<zendesk.belvedere.ImageStream>;
			public addListener(param0: zendesk.belvedere.ImageStream.Listener): void;
			public dismiss(): void;
			public getKeyboardHelper(): zendesk.belvedere.KeyboardHelper;
			public wasOpen(): boolean;
			public onCreate(param0: globalAndroid.os.Bundle): void;
			public onPause(): void;
			public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
			public constructor();
			public onRequestPermissionsResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
			public isAttachmentsPopupVisible(): boolean;
			public addScrollListener(param0: zendesk.belvedere.ImageStream.ScrollListener): void;
		}
		export module ImageStream {
			export class Listener {
				public static class: java.lang.Class<zendesk.belvedere.ImageStream.Listener>;
				/**
				 * Constructs a new instance of the zendesk.belvedere.ImageStream$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onDismissed(): void;
					onVisible(): void;
					onMediaSelected(param0: java.util.List<zendesk.belvedere.MediaResult>): void;
					onMediaDeselected(param0: java.util.List<zendesk.belvedere.MediaResult>): void;
				});
				public constructor();
				public onDismissed(): void;
				public onVisible(): void;
				public onMediaDeselected(param0: java.util.List<zendesk.belvedere.MediaResult>): void;
				public onMediaSelected(param0: java.util.List<zendesk.belvedere.MediaResult>): void;
			}
			export class ScrollListener {
				public static class: java.lang.Class<zendesk.belvedere.ImageStream.ScrollListener>;
				/**
				 * Constructs a new instance of the zendesk.belvedere.ImageStream$ScrollListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onScroll(param0: number, param1: number, param2: number): void;
				});
				public constructor();
				public onScroll(param0: number, param1: number, param2: number): void;
			}
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class ImageStreamAdapter extends globalAndroid.support.v7.widget.RecyclerView.Adapter<globalAndroid.support.v7.widget.RecyclerView.ViewHolder> {
			public static class: java.lang.Class<zendesk.belvedere.ImageStreamAdapter>;
			public getItemCount(): number;
			public getItemViewType(param0: number): number;
			public getItemId(param0: number): number;
			public onBindViewHolder(param0: globalAndroid.support.v7.widget.RecyclerView.ViewHolder, param1: number): void;
			public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): globalAndroid.support.v7.widget.RecyclerView.ViewHolder;
		}
		export module ImageStreamAdapter {
			export class Listener {
				public static class: java.lang.Class<zendesk.belvedere.ImageStreamAdapter.Listener>;
				/**
				 * Constructs a new instance of the zendesk.belvedere.ImageStreamAdapter$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onOpenCamera(): void;
					onSelectionChanged(param0: zendesk.belvedere.ImageStreamItems.Item): boolean;
				});
				public constructor();
				public onOpenCamera(): void;
				public onSelectionChanged(param0: zendesk.belvedere.ImageStreamItems.Item): boolean;
			}
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class ImageStreamItems {
			public static class: java.lang.Class<zendesk.belvedere.ImageStreamItems>;
		}
		export module ImageStreamItems {
			export abstract class Item {
				public static class: java.lang.Class<zendesk.belvedere.ImageStreamItems.Item>;
			}
			export class StaticItem extends zendesk.belvedere.ImageStreamItems.Item {
				public static class: java.lang.Class<zendesk.belvedere.ImageStreamItems.StaticItem>;
				public bind(param0: globalAndroid.view.View): void;
			}
			export class StreamItemFile extends zendesk.belvedere.ImageStreamItems.Item {
				public static class: java.lang.Class<zendesk.belvedere.ImageStreamItems.StreamItemFile>;
			}
			export class StreamItemImage extends zendesk.belvedere.ImageStreamItems.Item {
				public static class: java.lang.Class<zendesk.belvedere.ImageStreamItems.StreamItemImage>;
				public bind(param0: globalAndroid.view.View): void;
			}
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class ImageStreamModel extends zendesk.belvedere.ImageStreamMvp.Model {
			public static class: java.lang.Class<zendesk.belvedere.ImageStreamModel>;
			public getGooglePhotosIntent(): zendesk.belvedere.MediaIntent;
			public removeFromSelectedItems(param0: zendesk.belvedere.MediaResult): java.util.List<zendesk.belvedere.MediaResult>;
			public getLatestImages(): java.util.List<zendesk.belvedere.MediaResult>;
			public hasDocumentIntent(): boolean;
			public getSelectedMediaResults(): java.util.List<zendesk.belvedere.MediaResult>;
			public getDocumentIntent(): zendesk.belvedere.MediaIntent;
			public hasGooglePhotosIntent(): boolean;
			public hasCameraIntent(): boolean;
			public getCameraIntent(): zendesk.belvedere.MediaIntent;
			public showFullScreenOnly(): boolean;
			public addToSelectedItems(param0: zendesk.belvedere.MediaResult): java.util.List<zendesk.belvedere.MediaResult>;
			public getMaxFileSize(): number;
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class ImageStreamMvp {
			public static class: java.lang.Class<zendesk.belvedere.ImageStreamMvp>;
			/**
			 * Constructs a new instance of the zendesk.belvedere.ImageStreamMvp interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
		export module ImageStreamMvp {
			export class Model {
				public static class: java.lang.Class<zendesk.belvedere.ImageStreamMvp.Model>;
				/**
				 * Constructs a new instance of the zendesk.belvedere.ImageStreamMvp$Model interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getLatestImages(): java.util.List<zendesk.belvedere.MediaResult>;
					hasCameraIntent(): boolean;
					hasDocumentIntent(): boolean;
					hasGooglePhotosIntent(): boolean;
					getCameraIntent(): zendesk.belvedere.MediaIntent;
					getDocumentIntent(): zendesk.belvedere.MediaIntent;
					getGooglePhotosIntent(): zendesk.belvedere.MediaIntent;
					getSelectedMediaResults(): java.util.List<zendesk.belvedere.MediaResult>;
					addToSelectedItems(param0: zendesk.belvedere.MediaResult): java.util.List<zendesk.belvedere.MediaResult>;
					removeFromSelectedItems(param0: zendesk.belvedere.MediaResult): java.util.List<zendesk.belvedere.MediaResult>;
					getMaxFileSize(): number;
					showFullScreenOnly(): boolean;
				});
				public constructor();
				public removeFromSelectedItems(param0: zendesk.belvedere.MediaResult): java.util.List<zendesk.belvedere.MediaResult>;
				public addToSelectedItems(param0: zendesk.belvedere.MediaResult): java.util.List<zendesk.belvedere.MediaResult>;
				public getCameraIntent(): zendesk.belvedere.MediaIntent;
				public getDocumentIntent(): zendesk.belvedere.MediaIntent;
				public hasGooglePhotosIntent(): boolean;
				public getSelectedMediaResults(): java.util.List<zendesk.belvedere.MediaResult>;
				public showFullScreenOnly(): boolean;
				public getLatestImages(): java.util.List<zendesk.belvedere.MediaResult>;
				public getGooglePhotosIntent(): zendesk.belvedere.MediaIntent;
				public hasCameraIntent(): boolean;
				public hasDocumentIntent(): boolean;
				public getMaxFileSize(): number;
			}
			export class Presenter {
				public static class: java.lang.Class<zendesk.belvedere.ImageStreamMvp.Presenter>;
				/**
				 * Constructs a new instance of the zendesk.belvedere.ImageStreamMvp$Presenter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					init(): void;
					onImageStreamScrolled(param0: number, param1: number, param2: number): void;
					dismiss(): void;
				});
				public constructor();
				public onImageStreamScrolled(param0: number, param1: number, param2: number): void;
				public dismiss(): void;
				public init(): void;
			}
			export class View {
				public static class: java.lang.Class<zendesk.belvedere.ImageStreamMvp.View>;
				/**
				 * Constructs a new instance of the zendesk.belvedere.ImageStreamMvp$View interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					initViews(param0: boolean): void;
					showImageStream(param0: java.util.List<zendesk.belvedere.MediaResult>, param1: java.util.List<zendesk.belvedere.MediaResult>, param2: boolean, param3: boolean, param4: zendesk.belvedere.ImageStreamAdapter.Listener): void;
					showDocumentMenuItem(param0: globalAndroid.view.View.OnClickListener): void;
					showGooglePhotosMenuItem(param0: globalAndroid.view.View.OnClickListener): void;
					openMediaIntent(param0: zendesk.belvedere.MediaIntent, param1: zendesk.belvedere.ImageStream): void;
					showToast(param0: number): void;
					updateToolbarTitle(param0: number): void;
					shouldShowFullScreen(): boolean;
				});
				public constructor();
				public initViews(param0: boolean): void;
				public showImageStream(param0: java.util.List<zendesk.belvedere.MediaResult>, param1: java.util.List<zendesk.belvedere.MediaResult>, param2: boolean, param3: boolean, param4: zendesk.belvedere.ImageStreamAdapter.Listener): void;
				public shouldShowFullScreen(): boolean;
				public showToast(param0: number): void;
				public openMediaIntent(param0: zendesk.belvedere.MediaIntent, param1: zendesk.belvedere.ImageStream): void;
				public updateToolbarTitle(param0: number): void;
				public showGooglePhotosMenuItem(param0: globalAndroid.view.View.OnClickListener): void;
				public showDocumentMenuItem(param0: globalAndroid.view.View.OnClickListener): void;
			}
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class ImageStreamPresenter extends zendesk.belvedere.ImageStreamMvp.Presenter {
			public static class: java.lang.Class<zendesk.belvedere.ImageStreamPresenter>;
			public dismiss(): void;
			public init(): void;
			public onImageStreamScrolled(param0: number, param1: number, param2: number): void;
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class ImageStreamService {
			public static class: java.lang.Class<zendesk.belvedere.ImageStreamService>;
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class ImageStreamUi implements zendesk.belvedere.ImageStreamMvp.View {
			public static class: java.lang.Class<zendesk.belvedere.ImageStreamUi>;
			public dismiss(): void;
			public updateToolbarTitle(param0: number): void;
			public showDocumentMenuItem(param0: globalAndroid.view.View.OnClickListener): void;
			public openMediaIntent(param0: zendesk.belvedere.MediaIntent, param1: zendesk.belvedere.ImageStream): void;
			public showImageStream(param0: java.util.List<zendesk.belvedere.MediaResult>, param1: java.util.List<zendesk.belvedere.MediaResult>, param2: boolean, param3: boolean, param4: zendesk.belvedere.ImageStreamAdapter.Listener): void;
			public initViews(param0: boolean): void;
			public showGooglePhotosMenuItem(param0: globalAndroid.view.View.OnClickListener): void;
			public showToast(param0: number): void;
			public shouldShowFullScreen(): boolean;
		}
		export module ImageStreamUi {
			export class ToolbarBehavior extends globalAndroid.support.design.widget.CoordinatorLayout.Behavior<globalAndroid.view.View> {
				public static class: java.lang.Class<zendesk.belvedere.ImageStreamUi.ToolbarBehavior>;
				public layoutDependsOn(param0: globalAndroid.support.design.widget.CoordinatorLayout, param1: globalAndroid.view.View, param2: globalAndroid.view.View): boolean;
				public onDependentViewChanged(param0: globalAndroid.support.design.widget.CoordinatorLayout, param1: globalAndroid.view.View, param2: globalAndroid.view.View): boolean;
			}
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class IntentRegistry {
			public static class: java.lang.Class<zendesk.belvedere.IntentRegistry>;
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class KeyboardHelper {
			public static class: java.lang.Class<zendesk.belvedere.KeyboardHelper>;
			public static inject(param0: globalAndroid.app.Activity): zendesk.belvedere.KeyboardHelper;
			public getKeyboardHeight(): number;
			public getInputTrap(): globalAndroid.widget.EditText;
			public isKeyboardVisible(): boolean;
			public addListener(param0: zendesk.belvedere.KeyboardHelper.Listener): void;
		}
		export module KeyboardHelper {
			export class KeyboardTreeObserver {
				public static class: java.lang.Class<zendesk.belvedere.KeyboardHelper.KeyboardTreeObserver>;
				public onGlobalLayout(): void;
			}
			export class Listener {
				public static class: java.lang.Class<zendesk.belvedere.KeyboardHelper.Listener>;
				/**
				 * Constructs a new instance of the zendesk.belvedere.KeyboardHelper$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onKeyboardVisible(): void;
					onKeyboardDismissed(): void;
				});
				public constructor();
				public onKeyboardDismissed(): void;
				public onKeyboardVisible(): void;
			}
			export class SizeListener {
				public static class: java.lang.Class<zendesk.belvedere.KeyboardHelper.SizeListener>;
				/**
				 * Constructs a new instance of the zendesk.belvedere.KeyboardHelper$SizeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onSizeChanged(param0: number): void;
				});
				public constructor();
				public onSizeChanged(param0: number): void;
			}
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class L {
			public static class: java.lang.Class<zendesk.belvedere.L>;
		}
		export module L {
			export class DefaultLogger extends zendesk.belvedere.L.Logger {
				public static class: java.lang.Class<zendesk.belvedere.L.DefaultLogger>;
				public e(param0: string, param1: string, param2: java.lang.Throwable): void;
				public setLoggable(param0: boolean): void;
				public w(param0: string, param1: string): void;
				public e(param0: string, param1: string): void;
				public d(param0: string, param1: string): void;
			}
			export class Logger {
				public static class: java.lang.Class<zendesk.belvedere.L.Logger>;
				/**
				 * Constructs a new instance of the zendesk.belvedere.L$Logger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					d(param0: string, param1: string): void;
					w(param0: string, param1: string): void;
					e(param0: string, param1: string): void;
					e(param0: string, param1: string, param2: java.lang.Throwable): void;
					setLoggable(param0: boolean): void;
				});
				public constructor();
				public e(param0: string, param1: string, param2: java.lang.Throwable): void;
				public setLoggable(param0: boolean): void;
				public w(param0: string, param1: string): void;
				public e(param0: string, param1: string): void;
				public d(param0: string, param1: string): void;
			}
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class MediaIntent {
			public static class: java.lang.Class<zendesk.belvedere.MediaIntent>;
			public static CREATOR: globalAndroid.os.Parcelable.Creator<zendesk.belvedere.MediaIntent>;
			public getTarget(): number;
			public getPermission(): string;
			public describeContents(): number;
			public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
			public open(param0: globalAndroid.app.Activity): void;
			public open(param0: globalAndroid.support.v4.app.Fragment): void;
			public getIntent(): globalAndroid.content.Intent;
			public isAvailable(): boolean;
		}
		export module MediaIntent {
			export class CameraIntentBuilder {
				public static class: java.lang.Class<zendesk.belvedere.MediaIntent.CameraIntentBuilder>;
				public build(): zendesk.belvedere.MediaIntent;
				public open(param0: globalAndroid.support.v4.app.Fragment): void;
				public open(param0: globalAndroid.app.Activity): void;
			}
			export class DocumentIntentBuilder {
				public static class: java.lang.Class<zendesk.belvedere.MediaIntent.DocumentIntentBuilder>;
				public build(): zendesk.belvedere.MediaIntent;
				public contentType(param0: string): zendesk.belvedere.MediaIntent.DocumentIntentBuilder;
				public open(param0: globalAndroid.support.v4.app.Fragment): void;
				public allowMultiple(param0: boolean): zendesk.belvedere.MediaIntent.DocumentIntentBuilder;
				public open(param0: globalAndroid.app.Activity): void;
			}
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class MediaResult extends java.lang.Object {
			public static class: java.lang.Class<zendesk.belvedere.MediaResult>;
			public static UNKNOWN_VALUE: number;
			public static CREATOR: globalAndroid.os.Parcelable.Creator<zendesk.belvedere.MediaResult>;
			public getFile(): java.io.File;
			public equals(param0: any): boolean;
			public getMimeType(): string;
			public getHeight(): number;
			public getWidth(): number;
			public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
			public getSize(): number;
			public constructor(param0: java.io.File, param1: globalAndroid.net.Uri, param2: globalAndroid.net.Uri, param3: string, param4: string, param5: number, param6: number, param7: number);
			public compareTo(param0: zendesk.belvedere.MediaResult): number;
			public getName(): string;
			public getUri(): globalAndroid.net.Uri;
			public describeContents(): number;
			public getOriginalUri(): globalAndroid.net.Uri;
			public hashCode(): number;
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class MediaSource {
			public static class: java.lang.Class<zendesk.belvedere.MediaSource>;
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class PermissionManager {
			public static class: java.lang.Class<zendesk.belvedere.PermissionManager>;
		}
		export module PermissionManager {
			export class InternalPermissionCallback {
				public static class: java.lang.Class<zendesk.belvedere.PermissionManager.InternalPermissionCallback>;
				/**
				 * Constructs a new instance of the zendesk.belvedere.PermissionManager$InternalPermissionCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					result(param0: java.util.Map<string,java.lang.Boolean>, param1: java.util.List<string>): void;
				});
				public constructor();
				public result(param0: java.util.Map<string,java.lang.Boolean>, param1: java.util.List<string>): void;
			}
			export class PermissionCallback {
				public static class: java.lang.Class<zendesk.belvedere.PermissionManager.PermissionCallback>;
				/**
				 * Constructs a new instance of the zendesk.belvedere.PermissionManager$PermissionCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onPermissionsGranted(param0: java.util.List<zendesk.belvedere.MediaIntent>): void;
					onPermissionsDenied(): void;
				});
				public constructor();
				public onPermissionsDenied(): void;
				public onPermissionsGranted(param0: java.util.List<zendesk.belvedere.MediaIntent>): void;
			}
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class PermissionStorage {
			public static class: java.lang.Class<zendesk.belvedere.PermissionStorage>;
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class PermissionUtil {
			public static class: java.lang.Class<zendesk.belvedere.PermissionUtil>;
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class ResolveUriTask extends globalAndroid.os.AsyncTask<globalAndroid.net.Uri,java.lang.Void,java.util.List<zendesk.belvedere.MediaResult>> {
			public static class: java.lang.Class<zendesk.belvedere.ResolveUriTask>;
			public doInBackground(param0: native.Array<globalAndroid.net.Uri>): java.util.List<zendesk.belvedere.MediaResult>;
			public onPostExecute(param0: java.util.List<zendesk.belvedere.MediaResult>): void;
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class SelectableView {
			public static class: java.lang.Class<zendesk.belvedere.SelectableView>;
			public onClick(param0: globalAndroid.view.View): void;
			public setSelected(param0: boolean): void;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
			public setContentDescriptionStrings(param0: string, param1: string): void;
			public setSelectionListener(param0: zendesk.belvedere.SelectableView.SelectionListener): void;
			public constructor(param0: globalAndroid.content.Context);
		}
		export module SelectableView {
			export class SelectionListener {
				public static class: java.lang.Class<zendesk.belvedere.SelectableView.SelectionListener>;
				/**
				 * Constructs a new instance of the zendesk.belvedere.SelectableView$SelectionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onSelectionChanged(param0: boolean): boolean;
				});
				public constructor();
				public onSelectionChanged(param0: boolean): boolean;
			}
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class Storage {
			public static class: java.lang.Class<zendesk.belvedere.Storage>;
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class Utils {
			public static class: java.lang.Class<zendesk.belvedere.Utils>;
		}
		export module Utils {
			export class RoundedTransformation {
				public static class: java.lang.Class<zendesk.belvedere.Utils.RoundedTransformation>;
				public transform(param0: globalAndroid.graphics.Bitmap): globalAndroid.graphics.Bitmap;
				public key(): string;
			}
		}
	}
}

declare module zendesk {
	export module belvedere {
		export module ui {
			export class BuildConfig {
				public static class: java.lang.Class<zendesk.belvedere.ui.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module zendesk {
	export module commonui {
		export class AgentFileCellView {
			public static class: java.lang.Class<zendesk.commonui.AgentFileCellView>;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			public onFinishInflate(): void;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
			public constructor(param0: globalAndroid.content.Context);
			public update(param0: zendesk.commonui.AgentFileCellView.State): void;
		}
		export module AgentFileCellView {
			export class State {
				public static class: java.lang.Class<zendesk.commonui.AgentFileCellView.State>;
			}
		}
	}
}

declare module zendesk {
	export module commonui {
		export class AgentImageCellView {
			public static class: java.lang.Class<zendesk.commonui.AgentImageCellView>;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			public onFinishInflate(): void;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
			public constructor(param0: globalAndroid.content.Context);
		}
		export module AgentImageCellView {
			export class State {
				public static class: java.lang.Class<zendesk.commonui.AgentImageCellView.State>;
			}
		}
	}
}

declare module zendesk {
	export module commonui {
		export class AgentMessageView {
			public static class: java.lang.Class<zendesk.commonui.AgentMessageView>;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			public onFinishInflate(): void;
			public update(param0: zendesk.commonui.AgentMessageView.State): void;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
			public constructor(param0: globalAndroid.content.Context);
		}
		export module AgentMessageView {
			export class State {
				public static class: java.lang.Class<zendesk.commonui.AgentMessageView.State>;
				public constructor(param0: zendesk.commonui.ConversationCellProps, param1: string, param2: string, param3: boolean);
			}
		}
	}
}

declare module zendesk {
	export module commonui {
		export class AlmostRealProgressBar {
			public static class: java.lang.Class<zendesk.commonui.AlmostRealProgressBar>;
			public static STOP_ANIMATION_DURATION: number;
			public static ALPHA_FADE_DURATION: number;
			public static STOP_DEBOUNCE_TIME: number;
			public static START_DEBOUNCE_TIME: number;
			public static SIMPLE_PROGRESSBAR: java.util.List<zendesk.commonui.AlmostRealProgressBar.Step>;
			public static DONT_STOP_MOVING: java.util.List<zendesk.commonui.AlmostRealProgressBar.Step>;
			public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
			public stop(param0: number): void;
			public start(param0: java.util.List<zendesk.commonui.AlmostRealProgressBar.Step>): void;
			public onSaveInstanceState(): globalAndroid.os.Parcelable;
			public constructor(param0: globalAndroid.content.Context);
		}
		export module AlmostRealProgressBar {
			export class State {
				public static class: java.lang.Class<zendesk.commonui.AlmostRealProgressBar.State>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<zendesk.commonui.AlmostRealProgressBar.State>;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public constructor(param0: globalAndroid.os.Parcelable, param1: number, param2: java.util.List<zendesk.commonui.AlmostRealProgressBar.Step>);
			}
			export class StateAwareAnimator {
				public static class: java.lang.Class<zendesk.commonui.AlmostRealProgressBar.StateAwareAnimator>;
				public onAnimationEnd(param0: globalAndroid.animation.Animator): void;
				public onAnimationCancel(param0: globalAndroid.animation.Animator): void;
				public onAnimationRepeat(param0: globalAndroid.animation.Animator): void;
				public onAnimationStart(param0: globalAndroid.animation.Animator): void;
			}
			export class Step extends java.lang.Object {
				public static class: java.lang.Class<zendesk.commonui.AlmostRealProgressBar.Step>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<zendesk.commonui.AlmostRealProgressBar.Step>;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public compareTo(param0: zendesk.commonui.AlmostRealProgressBar.Step): number;
				public describeContents(): number;
			}
		}
	}
}

declare module zendesk {
	export module commonui {
		export class ArticlesResponseView {
			public static class: java.lang.Class<zendesk.commonui.ArticlesResponseView>;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			public onFinishInflate(): void;
			public update(param0: zendesk.commonui.ArticlesResponseView.State): void;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
			public constructor(param0: globalAndroid.content.Context);
		}
		export module ArticlesResponseView {
			export class ArticleSuggestionViewState {
				public static class: java.lang.Class<zendesk.commonui.ArticlesResponseView.ArticleSuggestionViewState>;
			}
			export class State {
				public static class: java.lang.Class<zendesk.commonui.ArticlesResponseView.State>;
				public constructor(param0: string, param1: boolean, param2: zendesk.commonui.ConversationCellProps, param3: java.util.List<zendesk.commonui.ArticlesResponseView.ArticleSuggestionViewState>);
			}
		}
	}
}

declare module zendesk {
	export module commonui {
		export class AttachmentsIndicator {
			public static class: java.lang.Class<zendesk.commonui.AttachmentsIndicator>;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
			public constructor(param0: globalAndroid.content.Context);
		}
	}
}

declare module zendesk {
	export module commonui {
		export class AvatarContainer {
			public static class: java.lang.Class<zendesk.commonui.AvatarContainer>;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
			public constructor(param0: globalAndroid.content.Context);
		}
	}
}

declare module zendesk {
	export module commonui {
		export class AvatarState {
			public static class: java.lang.Class<zendesk.commonui.AvatarState>;
			public constructor(param0: any, param1: string, param2: string, param3: number);
		}
	}
}

declare module zendesk {
	export module commonui {
		export class AvatarView {
			public static class: java.lang.Class<zendesk.commonui.AvatarView>;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
			public showLetter(param0: string, param1: any): void;
			public constructor(param0: globalAndroid.content.Context);
			public showDefault(param0: number, param1: any): void;
			public showImage(param0: com.sebchlan.picassocompat.PicassoCompat, param1: string): void;
		}
	}
}

declare module zendesk {
	export module commonui {
		export class BuildConfig {
			public static class: java.lang.Class<zendesk.commonui.BuildConfig>;
			public static DEBUG: boolean;
			public static APPLICATION_ID: string;
			public static BUILD_TYPE: string;
			public static FLAVOR: string;
			public static VERSION_CODE: number;
			public static VERSION_NAME: string;
			public constructor();
		}
	}
}

declare module zendesk {
	export module commonui {
		export class CacheFragment {
			public static class: java.lang.Class<zendesk.commonui.CacheFragment>;
			public getOrDefault(param0: string, param1: any): any;
			public get(param0: string): any;
			public put(param0: string, param1: any): void;
			public remove(param0: string): void;
			public static from(param0: globalAndroid.support.v4.app.FragmentActivity): zendesk.commonui.CacheFragment;
			public getOrDefault(param0: string, param1: zendesk.commonui.CacheFragment.Supplier<any>): any;
			public contains(param0: string): boolean;
			public constructor();
		}
		export module CacheFragment {
			export class Supplier<T>  extends java.lang.Object {
				public static class: java.lang.Class<zendesk.commonui.CacheFragment.Supplier<any>>;
				/**
				 * Constructs a new instance of the zendesk.commonui.CacheFragment$Supplier interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					get(): T;
				});
				public constructor();
				public get(): T;
			}
		}
	}
}

declare module zendesk {
	export module commonui {
		export class Cell<T>  extends java.lang.Object {
			public static class: java.lang.Class<zendesk.commonui.Cell<any>>;
			/**
			 * Constructs a new instance of the zendesk.commonui.Cell<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getId(): string;
				areContentsTheSame(param0: zendesk.commonui.Cell<any>): boolean;
				getViewClassType(): java.lang.Class<T>;
				getLayoutRes(): number;
				bind(param0: T): void;
			});
			public constructor();
			public getId(): string;
			public areContentsTheSame(param0: zendesk.commonui.Cell<any>): boolean;
			public bind(param0: T): void;
			public getLayoutRes(): number;
			public getViewClassType(): java.lang.Class<T>;
		}
	}
}

declare module zendesk {
	export module commonui {
		export class CellListAdapter extends globalAndroid.support.v7.recyclerview.extensions.ListAdapter<zendesk.commonui.Cell<any>,globalAndroid.support.v7.widget.RecyclerView.ViewHolder> {
			public static class: java.lang.Class<zendesk.commonui.CellListAdapter>;
			public getItemViewType(param0: number): number;
			public onBindViewHolder(param0: globalAndroid.support.v7.widget.RecyclerView.ViewHolder, param1: number): void;
			public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): globalAndroid.support.v7.widget.RecyclerView.ViewHolder;
		}
		export module CellListAdapter {
			export class CellDiffUtil extends globalAndroid.support.v7.util.DiffUtil.ItemCallback<zendesk.commonui.Cell<any>> {
				public static class: java.lang.Class<zendesk.commonui.CellListAdapter.CellDiffUtil>;
				public areContentsTheSame(param0: zendesk.commonui.Cell<any>, param1: zendesk.commonui.Cell<any>): boolean;
				public areItemsTheSame(param0: zendesk.commonui.Cell<any>, param1: zendesk.commonui.Cell<any>): boolean;
			}
		}
	}
}

declare module zendesk {
	export module commonui {
		export class ContactOptionsView {
			public static class: java.lang.Class<zendesk.commonui.ContactOptionsView>;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
			public update(param0: zendesk.commonui.ContactOptionsView.State): void;
			public constructor(param0: globalAndroid.content.Context);
		}
		export module ContactOptionsView {
			export class ContactOptionState {
				public static class: java.lang.Class<zendesk.commonui.ContactOptionsView.ContactOptionState>;
			}
			export class State {
				public static class: java.lang.Class<zendesk.commonui.ContactOptionsView.State>;
				public constructor(param0: string, param1: string, param2: boolean, param3: zendesk.commonui.ConversationCellProps, param4: java.util.List<zendesk.commonui.ContactOptionsView.ContactOptionState>);
			}
		}
	}
}

declare module zendesk {
	export module commonui {
		export class ConversationCell {
			public static class: java.lang.Class<zendesk.commonui.ConversationCell>;
		}
		export module ConversationCell {
			export class ArticlesResponse extends zendesk.commonui.Cell<zendesk.commonui.ArticlesResponseView> {
				public static class: java.lang.Class<zendesk.commonui.ConversationCell.ArticlesResponse>;
				public getViewClassType(): java.lang.Class<any>;
				public bind(param0: any): void;
				public getId(): string;
				public getLayoutRes(): number;
				public bind(param0: zendesk.commonui.ArticlesResponseView): void;
				public areContentsTheSame(param0: zendesk.commonui.Cell<any>): boolean;
				public getViewClassType(): java.lang.Class<zendesk.commonui.ArticlesResponseView>;
			}
			export class ContactOptions extends zendesk.commonui.Cell<zendesk.commonui.ContactOptionsView> {
				public static class: java.lang.Class<zendesk.commonui.ConversationCell.ContactOptions>;
				public getViewClassType(): java.lang.Class<any>;
				public bind(param0: any): void;
				public getId(): string;
				public bind(param0: zendesk.commonui.ContactOptionsView): void;
				public getLayoutRes(): number;
				public areContentsTheSame(param0: zendesk.commonui.Cell<any>): boolean;
				public getViewClassType(): java.lang.Class<zendesk.commonui.ContactOptionsView>;
			}
			export class FileQuery extends zendesk.commonui.Cell<zendesk.commonui.EndUserFileCellView> {
				public static class: java.lang.Class<zendesk.commonui.ConversationCell.FileQuery>;
				public getViewClassType(): java.lang.Class<any>;
				public bind(param0: any): void;
				public bind(param0: zendesk.commonui.EndUserFileCellView): void;
				public getId(): string;
				public getLayoutRes(): number;
				public getViewClassType(): java.lang.Class<zendesk.commonui.EndUserFileCellView>;
				public areContentsTheSame(param0: zendesk.commonui.Cell<any>): boolean;
			}
			export class FileResponse extends zendesk.commonui.Cell<zendesk.commonui.AgentFileCellView> {
				public static class: java.lang.Class<zendesk.commonui.ConversationCell.FileResponse>;
				public bind(param0: zendesk.commonui.AgentFileCellView): void;
				public getViewClassType(): java.lang.Class<any>;
				public bind(param0: any): void;
				public getId(): string;
				public getLayoutRes(): number;
				public areContentsTheSame(param0: zendesk.commonui.Cell<any>): boolean;
				public getViewClassType(): java.lang.Class<zendesk.commonui.AgentFileCellView>;
			}
			export class ImageQuery extends zendesk.commonui.Cell<zendesk.commonui.EndUserImageCellView> {
				public static class: java.lang.Class<zendesk.commonui.ConversationCell.ImageQuery>;
				public getViewClassType(): java.lang.Class<any>;
				public bind(param0: any): void;
				public getId(): string;
				public getLayoutRes(): number;
				public bind(param0: zendesk.commonui.EndUserImageCellView): void;
				public areContentsTheSame(param0: zendesk.commonui.Cell<any>): boolean;
				public getViewClassType(): java.lang.Class<zendesk.commonui.EndUserImageCellView>;
			}
			export class ImageResponse extends zendesk.commonui.Cell<zendesk.commonui.AgentImageCellView> {
				public static class: java.lang.Class<zendesk.commonui.ConversationCell.ImageResponse>;
				public bind(param0: zendesk.commonui.AgentImageCellView): void;
				public getViewClassType(): java.lang.Class<any>;
				public bind(param0: any): void;
				public getId(): string;
				public getLayoutRes(): number;
				public areContentsTheSame(param0: zendesk.commonui.Cell<any>): boolean;
				public getViewClassType(): java.lang.Class<zendesk.commonui.AgentImageCellView>;
			}
			export class ResponseOptions extends zendesk.commonui.Cell<zendesk.commonui.ResponseOptionsView> {
				public static class: java.lang.Class<zendesk.commonui.ConversationCell.ResponseOptions>;
				public getViewClassType(): java.lang.Class<any>;
				public bind(param0: any): void;
				public getId(): string;
				public bind(param0: zendesk.commonui.ResponseOptionsView): void;
				public getLayoutRes(): number;
				public areContentsTheSame(param0: zendesk.commonui.Cell<any>): boolean;
				public getViewClassType(): java.lang.Class<zendesk.commonui.ResponseOptionsView>;
			}
			export class SystemMessage extends zendesk.commonui.Cell<zendesk.commonui.SystemMessageView> {
				public static class: java.lang.Class<zendesk.commonui.ConversationCell.SystemMessage>;
				public getViewClassType(): java.lang.Class<any>;
				public bind(param0: any): void;
				public bind(param0: zendesk.commonui.SystemMessageView): void;
				public getId(): string;
				public getLayoutRes(): number;
				public getViewClassType(): java.lang.Class<zendesk.commonui.SystemMessageView>;
				public areContentsTheSame(param0: zendesk.commonui.Cell<any>): boolean;
			}
			export class TextQuery extends zendesk.commonui.Cell<zendesk.commonui.EndUserMessageView> {
				public static class: java.lang.Class<zendesk.commonui.ConversationCell.TextQuery>;
				public getViewClassType(): java.lang.Class<any>;
				public bind(param0: any): void;
				public getViewClassType(): java.lang.Class<zendesk.commonui.EndUserMessageView>;
				public getId(): string;
				public bind(param0: zendesk.commonui.EndUserMessageView): void;
				public getLayoutRes(): number;
				public areContentsTheSame(param0: zendesk.commonui.Cell<any>): boolean;
			}
			export class TextResponse extends zendesk.commonui.Cell<zendesk.commonui.AgentMessageView> {
				public static class: java.lang.Class<zendesk.commonui.ConversationCell.TextResponse>;
				public getViewClassType(): java.lang.Class<any>;
				public bind(param0: any): void;
				public getId(): string;
				public getLayoutRes(): number;
				public areContentsTheSame(param0: zendesk.commonui.Cell<any>): boolean;
				public getViewClassType(): java.lang.Class<zendesk.commonui.AgentMessageView>;
				public bind(param0: zendesk.commonui.AgentMessageView): void;
			}
			export class TypingIndicator extends zendesk.commonui.Cell<zendesk.commonui.TypingIndicatorView> {
				public static class: java.lang.Class<zendesk.commonui.ConversationCell.TypingIndicator>;
				public getViewClassType(): java.lang.Class<any>;
				public bind(param0: any): void;
				public getId(): string;
				public getLayoutRes(): number;
				public getViewClassType(): java.lang.Class<zendesk.commonui.TypingIndicatorView>;
				public areContentsTheSame(param0: zendesk.commonui.Cell<any>): boolean;
				public bind(param0: zendesk.commonui.TypingIndicatorView): void;
			}
		}
	}
}

declare module zendesk {
	export module commonui {
		export class ConversationCellFactory {
			public static class: java.lang.Class<zendesk.commonui.ConversationCellFactory>;
		}
	}
}

declare module zendesk {
	export module commonui {
		export class ConversationCellProps {
			public static class: java.lang.Class<zendesk.commonui.ConversationCellProps>;
			public equals(param0: any): boolean;
			public hashCode(): number;
		}
	}
}

declare module zendesk {
	export module commonui {
		export class ConversationCellPropsFactory {
			public static class: java.lang.Class<zendesk.commonui.ConversationCellPropsFactory>;
			public constructor(param0: globalAndroid.content.res.Resources);
			public create(param0: java.util.List<zendesk.commonui.ConversationItem>): java.util.List<zendesk.commonui.ConversationCellProps>;
		}
		export module ConversationCellPropsFactory {
			export class InteractionType {
				public static class: java.lang.Class<zendesk.commonui.ConversationCellPropsFactory.InteractionType>;
				public static QUERY: zendesk.commonui.ConversationCellPropsFactory.InteractionType;
				public static RESPONSE: zendesk.commonui.ConversationCellPropsFactory.InteractionType;
				public static NONE: zendesk.commonui.ConversationCellPropsFactory.InteractionType;
				public static valueOf(param0: string): zendesk.commonui.ConversationCellPropsFactory.InteractionType;
				public static values(): native.Array<zendesk.commonui.ConversationCellPropsFactory.InteractionType>;
			}
		}
	}
}

declare module zendesk {
	export module commonui {
		export abstract class ConversationItem {
			public static class: java.lang.Class<zendesk.commonui.ConversationItem>;
			public constructor();
		}
		export module ConversationItem {
			export class AgentLabelState {
				public static class: java.lang.Class<zendesk.commonui.ConversationItem.AgentLabelState>;
				public isBot(): boolean;
				public constructor(param0: string, param1: string, param2: boolean);
				public constructor(param0: string, param1: boolean);
				public getAgentId(): string;
				public getAgentName(): string;
			}
			export class ArticlesResponse extends zendesk.commonui.ConversationItem.Response {
				public static class: java.lang.Class<zendesk.commonui.ConversationItem.ArticlesResponse>;
				public constructor(param0: string, param1: zendesk.commonui.ConversationItem.AgentLabelState, param2: java.util.List<zendesk.commonui.ConversationItem.ArticlesResponse.ArticleSuggestion>);
				public getArticleSuggestions(): java.util.List<zendesk.commonui.ConversationItem.ArticlesResponse.ArticleSuggestion>;
				public constructor(param0: string, param1: zendesk.commonui.ConversationItem.AgentLabelState);
				public constructor();
			}
			export module ArticlesResponse {
				export class ArticleSuggestion {
					public static class: java.lang.Class<zendesk.commonui.ConversationItem.ArticlesResponse.ArticleSuggestion>;
					public getTitle(): string;
					public constructor(param0: string, param1: string, param2: zendesk.commonui.OnArticleSuggestionSelectionListener);
					public getSnippet(): string;
					public getListener(): zendesk.commonui.OnArticleSuggestionSelectionListener;
				}
			}
			export class ContactResponse extends zendesk.commonui.ConversationItem.TextResponse {
				public static class: java.lang.Class<zendesk.commonui.ConversationItem.ContactResponse>;
				public constructor(param0: string, param1: zendesk.commonui.ConversationItem.AgentLabelState, param2: string, param3: java.util.List<zendesk.commonui.ConversationItem.ContactResponse.ContactOption>);
				public constructor(param0: string, param1: zendesk.commonui.ConversationItem.AgentLabelState, param2: string);
				public getContactOptions(): java.util.List<zendesk.commonui.ConversationItem.ContactResponse.ContactOption>;
				public constructor(param0: string, param1: zendesk.commonui.ConversationItem.AgentLabelState);
				public constructor();
			}
			export module ContactResponse {
				export class ContactOption {
					public static class: java.lang.Class<zendesk.commonui.ConversationItem.ContactResponse.ContactOption>;
					public getName(): string;
					public getOnClickListener(): globalAndroid.view.View.OnClickListener;
					public constructor(param0: string, param1: globalAndroid.view.View.OnClickListener);
				}
			}
			export class FileQuery extends zendesk.commonui.ConversationItem.Query {
				public static class: java.lang.Class<zendesk.commonui.ConversationItem.FileQuery>;
				public getFileSize(): string;
				public getFileName(): string;
				public getFilePath(): string;
				public constructor(param0: string, param1: zendesk.commonui.ConversationItem.QueryStatus, param2: zendesk.commonui.MessageActionListener, param3: string, param4: string, param5: string);
				public constructor();
			}
			export class FileResponse extends zendesk.commonui.ConversationItem.Response {
				public static class: java.lang.Class<zendesk.commonui.ConversationItem.FileResponse>;
				public getFileSize(): string;
				public getFileName(): string;
				public constructor(param0: string, param1: zendesk.commonui.ConversationItem.AgentLabelState, param2: string, param3: string, param4: string);
				public getFilePath(): string;
				public constructor(param0: string, param1: zendesk.commonui.ConversationItem.AgentLabelState);
				public constructor();
			}
			export class ImageQuery extends zendesk.commonui.ConversationItem.Query {
				public static class: java.lang.Class<zendesk.commonui.ConversationItem.ImageQuery>;
				public getFilePath(): string;
				public constructor(param0: string, param1: zendesk.commonui.ConversationItem.QueryStatus, param2: zendesk.commonui.MessageActionListener, param3: string);
				public constructor();
			}
			export class ImageResponse extends zendesk.commonui.ConversationItem.Response {
				public static class: java.lang.Class<zendesk.commonui.ConversationItem.ImageResponse>;
				public constructor(param0: string, param1: zendesk.commonui.ConversationItem.AgentLabelState, param2: string);
				public getFilePath(): string;
				public constructor(param0: string, param1: zendesk.commonui.ConversationItem.AgentLabelState);
				public constructor();
			}
			export abstract class Query extends zendesk.commonui.ConversationItem {
				public static class: java.lang.Class<zendesk.commonui.ConversationItem.Query>;
				public getMessageActionListener(): zendesk.commonui.MessageActionListener;
				public getId(): string;
				public getQueryStatus(): zendesk.commonui.ConversationItem.QueryStatus;
			}
			export class QueryStatus {
				public static class: java.lang.Class<zendesk.commonui.ConversationItem.QueryStatus>;
				public static PENDING: zendesk.commonui.ConversationItem.QueryStatus;
				public static DELIVERED: zendesk.commonui.ConversationItem.QueryStatus;
				public static FAILED: zendesk.commonui.ConversationItem.QueryStatus;
				public static valueOf(param0: string): zendesk.commonui.ConversationItem.QueryStatus;
				public static values(): native.Array<zendesk.commonui.ConversationItem.QueryStatus>;
			}
			export class Response extends zendesk.commonui.ConversationItem {
				public static class: java.lang.Class<zendesk.commonui.ConversationItem.Response>;
				public getAgentLabelState(): zendesk.commonui.ConversationItem.AgentLabelState;
				public getId(): string;
				public constructor(param0: string, param1: zendesk.commonui.ConversationItem.AgentLabelState);
				public constructor();
			}
			export class ResponseOptions extends zendesk.commonui.ConversationItem {
				public static class: java.lang.Class<zendesk.commonui.ConversationItem.ResponseOptions>;
				public getResponseOptions(): java.util.List<zendesk.commonui.ResponseOption>;
				public getId(): string;
				public getResponseOptionHandler(): zendesk.commonui.ResponseOptionHandler;
				public constructor(param0: string, param1: java.util.List<zendesk.commonui.ResponseOption>, param2: zendesk.commonui.ResponseOptionHandler);
				public constructor();
			}
			export class SystemMessage extends zendesk.commonui.ConversationItem {
				public static class: java.lang.Class<zendesk.commonui.ConversationItem.SystemMessage>;
				public getId(): string;
				public getSystemMessage(): string;
				public constructor(param0: string, param1: string);
				public constructor();
			}
			export class TextQuery extends zendesk.commonui.ConversationItem.Query {
				public static class: java.lang.Class<zendesk.commonui.ConversationItem.TextQuery>;
				public constructor(param0: string, param1: zendesk.commonui.ConversationItem.QueryStatus, param2: zendesk.commonui.MessageActionListener, param3: string);
				public getMessage(): string;
				public constructor();
				public constructor(param0: string, param1: zendesk.commonui.ConversationItem.QueryStatus, param2: string);
			}
			export class TextResponse extends zendesk.commonui.ConversationItem.Response {
				public static class: java.lang.Class<zendesk.commonui.ConversationItem.TextResponse>;
				public constructor(param0: string, param1: zendesk.commonui.ConversationItem.AgentLabelState, param2: string);
				public constructor(param0: string, param1: zendesk.commonui.ConversationItem.AgentLabelState);
				public getMessage(): string;
				public constructor();
			}
			export class TypingIndicator extends zendesk.commonui.ConversationItem.Response {
				public static class: java.lang.Class<zendesk.commonui.ConversationItem.TypingIndicator>;
				public constructor(param0: string, param1: zendesk.commonui.ConversationItem.AgentLabelState);
				public constructor();
			}
			export class TypingState {
				public static class: java.lang.Class<zendesk.commonui.ConversationItem.TypingState>;
				public getAgentLabelState(): zendesk.commonui.ConversationItem.AgentLabelState;
				public constructor(param0: boolean, param1: zendesk.commonui.ConversationItem.AgentLabelState);
				public isTyping(): boolean;
				public constructor(param0: boolean);
			}
		}
	}
}

declare module zendesk {
	export module commonui {
		export class ConversationState {
			public static class: java.lang.Class<zendesk.commonui.ConversationState>;
			public newBuilder(): zendesk.commonui.ConversationState.Builder;
		}
		export module ConversationState {
			export class Builder {
				public static class: java.lang.Class<zendesk.commonui.ConversationState.Builder>;
				public withTitle(param0: string): zendesk.commonui.ConversationState.Builder;
				public withSubtitle(param0: string): zendesk.commonui.ConversationState.Builder;
				public build(): zendesk.commonui.ConversationState;
				public withTypingIndicatorState(param0: zendesk.commonui.ConversationItem.TypingState): zendesk.commonui.ConversationState.Builder;
				public constructor(param0: zendesk.commonui.ConversationState);
				public withAvatarStates(param0: java.util.List<zendesk.commonui.AvatarState>): zendesk.commonui.ConversationState.Builder;
				public withEnabled(param0: boolean): zendesk.commonui.ConversationState.Builder;
				public withProgressBarVisible(param0: boolean): zendesk.commonui.ConversationState.Builder;
				public withLostConnection(param0: boolean): zendesk.commonui.ConversationState.Builder;
				public constructor();
				public withCells(param0: java.util.List<zendesk.commonui.ConversationItem>): zendesk.commonui.ConversationState.Builder;
			}
		}
	}
}

declare module zendesk {
	export module commonui {
		export class ConversationView {
			public static class: java.lang.Class<zendesk.commonui.ConversationView>;
			public static DEFAULT_ANIMATION_DURATION: number;
			public constructor(param0: globalAndroid.support.v7.app.AppCompatActivity, param1: zendesk.commonui.ConversationViewModel, param2: com.sebchlan.picassocompat.PicassoCompat);
			public constructor(param0: globalAndroid.support.v7.app.AppCompatActivity, param1: zendesk.commonui.ConversationViewModel, param2: com.sebchlan.picassocompat.PicassoCompat, param3: globalAndroid.view.View.OnClickListener);
		}
	}
}

declare module zendesk {
	export module commonui {
		export class ConversationViewModel {
			public static class: java.lang.Class<zendesk.commonui.ConversationViewModel>;
			/**
			 * Constructs a new instance of the zendesk.commonui.ConversationViewModel interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getInputTextConsumer(): zendesk.commonui.InputBox.InputTextConsumer;
				getTextWatcher(): globalAndroid.text.TextWatcher;
				getLiveConversationState(): any;
				onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
			});
			public constructor();
			public getLiveConversationState(): any;
			public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
			public getInputTextConsumer(): zendesk.commonui.InputBox.InputTextConsumer;
			public getTextWatcher(): globalAndroid.text.TextWatcher;
		}
	}
}

declare module zendesk {
	export module commonui {
		export class DefaultViewObserver<T>  extends zendesk.commonui.ViewObserver<any> {
			public static class: java.lang.Class<zendesk.commonui.DefaultViewObserver<any>>;
			public onAction(param0: any): void;
			public addListener(param0: zendesk.commonui.ViewListener<any>): void;
		}
	}
}

declare module zendesk {
	export module commonui {
		export class EndUserFileCellView {
			public static class: java.lang.Class<zendesk.commonui.EndUserFileCellView>;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			public onFinishInflate(): void;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
			public update(param0: zendesk.commonui.EndUserFileCellView.State): void;
			public constructor(param0: globalAndroid.content.Context);
		}
		export module EndUserFileCellView {
			export class State {
				public static class: java.lang.Class<zendesk.commonui.EndUserFileCellView.State>;
			}
		}
	}
}

declare module zendesk {
	export module commonui {
		export class EndUserImageCellView {
			public static class: java.lang.Class<zendesk.commonui.EndUserImageCellView>;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			public onFinishInflate(): void;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
			public update(param0: zendesk.commonui.EndUserImageCellView.State): void;
			public constructor(param0: globalAndroid.content.Context);
		}
		export module EndUserImageCellView {
			export class State {
				public static class: java.lang.Class<zendesk.commonui.EndUserImageCellView.State>;
				public getId(): string;
				public hashCode(): number;
				public equals(param0: any): boolean;
			}
		}
	}
}

declare module zendesk {
	export module commonui {
		export class EndUserMessageView {
			public static class: java.lang.Class<zendesk.commonui.EndUserMessageView>;
			public update(param0: zendesk.commonui.EndUserMessageView.State): void;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			public onFinishInflate(): void;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
			public constructor(param0: globalAndroid.content.Context);
		}
		export module EndUserMessageView {
			export class State {
				public static class: java.lang.Class<zendesk.commonui.EndUserMessageView.State>;
				public constructor(param0: string, param1: zendesk.commonui.ConversationCellProps, param2: zendesk.commonui.ConversationItem.QueryStatus, param3: string, param4: zendesk.commonui.MessageActionListener);
				public hashCode(): number;
				public equals(param0: any): boolean;
			}
		}
	}
}

declare module zendesk {
	export module commonui {
		export class InputBox {
			public static class: java.lang.Class<zendesk.commonui.InputBox>;
			public setInputTextConsumer(param0: zendesk.commonui.InputBox.InputTextConsumer): void;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			public setAttachmentsIndicatorClickListener(param0: globalAndroid.view.View.OnClickListener): void;
			public setInputTextWatcher(param0: globalAndroid.text.TextWatcher): void;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
			public setAttachmentsCount(param0: number): void;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
			public dispatchTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
			public constructor(param0: globalAndroid.content.Context);
			public setEnabled(param0: boolean): void;
			public dispatchKeyEventPreIme(param0: globalAndroid.view.KeyEvent): boolean;
			public focusInputTextField(): void;
		}
		export module InputBox {
			export class InputTextConsumer {
				public static class: java.lang.Class<zendesk.commonui.InputBox.InputTextConsumer>;
				/**
				 * Constructs a new instance of the zendesk.commonui.InputBox$InputTextConsumer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onConsumeText(param0: string): boolean;
				});
				public constructor();
				public onConsumeText(param0: string): boolean;
			}
		}
	}
}

declare module zendesk {
	export module commonui {
		export class LostConnectionBanner {
			public static class: java.lang.Class<zendesk.commonui.LostConnectionBanner>;
		}
		export module LostConnectionBanner {
			export class State {
				public static class: java.lang.Class<zendesk.commonui.LostConnectionBanner.State>;
				public static ENTERING: zendesk.commonui.LostConnectionBanner.State;
				public static ENTERED: zendesk.commonui.LostConnectionBanner.State;
				public static EXITING: zendesk.commonui.LostConnectionBanner.State;
				public static EXITED: zendesk.commonui.LostConnectionBanner.State;
				public static valueOf(param0: string): zendesk.commonui.LostConnectionBanner.State;
				public static values(): native.Array<zendesk.commonui.LostConnectionBanner.State>;
			}
		}
	}
}

declare module zendesk {
	export module commonui {
		export class MainThreadExecutorService {
			public static class: java.lang.Class<zendesk.commonui.MainThreadExecutorService>;
			public awaitTermination(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
			public shutdownNow(): java.util.List<java.lang.Runnable>;
			public isTerminated(): boolean;
			public isShutdown(): boolean;
			public execute(param0: java.lang.Runnable): void;
			public shutdown(): void;
			public static get(): zendesk.commonui.MainThreadExecutorService;
		}
	}
}

declare module zendesk {
	export module commonui {
		export class MessageActionListener {
			public static class: java.lang.Class<zendesk.commonui.MessageActionListener>;
			/**
			 * Constructs a new instance of the zendesk.commonui.MessageActionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				delete(param0: string): void;
				retry(param0: string): void;
				copy(param0: string): void;
			});
			public constructor();
			public copy(param0: string): void;
			public retry(param0: string): void;
			public delete(param0: string): void;
		}
	}
}

declare module zendesk {
	export module commonui {
		export class MessageActionType {
			public static class: java.lang.Class<zendesk.commonui.MessageActionType>;
			public static COPY: zendesk.commonui.MessageActionType;
			public static RETRY: zendesk.commonui.MessageActionType;
			public static DELETE: zendesk.commonui.MessageActionType;
			public static values(): native.Array<zendesk.commonui.MessageActionType>;
			public static valueOf(param0: string): zendesk.commonui.MessageActionType;
		}
	}
}

declare module zendesk {
	export module commonui {
		export class MessagePopUpHelper {
			public static class: java.lang.Class<zendesk.commonui.MessagePopUpHelper>;
		}
		export module MessagePopUpHelper {
			export class Option {
				public static class: java.lang.Class<zendesk.commonui.MessagePopUpHelper.Option>;
				public static COPY: zendesk.commonui.MessagePopUpHelper.Option;
				public static RETRY: zendesk.commonui.MessagePopUpHelper.Option;
				public static DELETE: zendesk.commonui.MessagePopUpHelper.Option;
				public static valueOf(param0: string): zendesk.commonui.MessagePopUpHelper.Option;
				public static values(): native.Array<zendesk.commonui.MessagePopUpHelper.Option>;
			}
		}
	}
}

declare module zendesk {
	export module commonui {
		export class MessageStatusView {
			public static class: java.lang.Class<zendesk.commonui.MessageStatusView>;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			public setStatus(param0: zendesk.commonui.ConversationItem.QueryStatus): void;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
			public constructor(param0: globalAndroid.content.Context);
		}
	}
}

declare module zendesk {
	export module commonui {
		export class OnArticleSuggestionSelectionListener {
			public static class: java.lang.Class<zendesk.commonui.OnArticleSuggestionSelectionListener>;
			/**
			 * Constructs a new instance of the zendesk.commonui.OnArticleSuggestionSelectionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onArticleSuggestionSelected(param0: globalAndroid.content.Context): void;
			});
			public constructor();
			public onArticleSuggestionSelected(param0: globalAndroid.content.Context): void;
		}
	}
}

declare module zendesk {
	export module commonui {
		export class PicassoTransformations {
			public static class: java.lang.Class<zendesk.commonui.PicassoTransformations>;
		}
		export module PicassoTransformations {
			export class BlurTransformation {
				public static class: java.lang.Class<zendesk.commonui.PicassoTransformations.BlurTransformation>;
				public transform(param0: globalAndroid.graphics.Bitmap): globalAndroid.graphics.Bitmap;
				public key(): string;
			}
			export class RoundedTransformation {
				public static class: java.lang.Class<zendesk.commonui.PicassoTransformations.RoundedTransformation>;
				public transform(param0: globalAndroid.graphics.Bitmap): globalAndroid.graphics.Bitmap;
				public key(): string;
			}
		}
	}
}

declare module zendesk {
	export module commonui {
		export class RecyclerViewScroller {
			public static class: java.lang.Class<zendesk.commonui.RecyclerViewScroller>;
		}
	}
}

declare module zendesk {
	export module commonui {
		export class ResponseOption {
			public static class: java.lang.Class<zendesk.commonui.ResponseOption>;
			public constructor(param0: string, param1: string);
			public getId(): string;
			public equals(param0: any): boolean;
			public getText(): string;
			public hashCode(): number;
		}
	}
}

declare module zendesk {
	export module commonui {
		export class ResponseOptionHandler {
			public static class: java.lang.Class<zendesk.commonui.ResponseOptionHandler>;
			/**
			 * Constructs a new instance of the zendesk.commonui.ResponseOptionHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onResponseOptionSelected(param0: zendesk.commonui.ResponseOption): void;
			});
			public constructor();
			public onResponseOptionSelected(param0: zendesk.commonui.ResponseOption): void;
		}
	}
}

declare module zendesk {
	export module commonui {
		export class ResponseOptionsView {
			public static class: java.lang.Class<zendesk.commonui.ResponseOptionsView>;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			public onFinishInflate(): void;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
			public constructor(param0: globalAndroid.content.Context);
		}
		export module ResponseOptionsView {
			export class Adapter extends globalAndroid.support.v7.recyclerview.extensions.ListAdapter<zendesk.commonui.ResponseOption,globalAndroid.support.v7.widget.RecyclerView.ViewHolder> {
				public static class: java.lang.Class<zendesk.commonui.ResponseOptionsView.Adapter>;
				public onBindViewHolder(param0: globalAndroid.support.v7.widget.RecyclerView.ViewHolder, param1: number): void;
				public update(param0: zendesk.commonui.ResponseOptionsView.State): void;
				public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): globalAndroid.support.v7.widget.RecyclerView.ViewHolder;
			}
			export module Adapter {
				export class ResponseOptionsDiffCallback extends globalAndroid.support.v7.util.DiffUtil.ItemCallback<zendesk.commonui.ResponseOption> {
					public static class: java.lang.Class<zendesk.commonui.ResponseOptionsView.Adapter.ResponseOptionsDiffCallback>;
					public areContentsTheSame(param0: zendesk.commonui.ResponseOption, param1: zendesk.commonui.ResponseOption): boolean;
					public areItemsTheSame(param0: zendesk.commonui.ResponseOption, param1: zendesk.commonui.ResponseOption): boolean;
				}
			}
			export class ItemOffsetDecoration {
				public static class: java.lang.Class<zendesk.commonui.ResponseOptionsView.ItemOffsetDecoration>;
				public getItemOffsets(param0: globalAndroid.graphics.Rect, param1: globalAndroid.view.View, param2: globalAndroid.support.v7.widget.RecyclerView, param3: globalAndroid.support.v7.widget.RecyclerView.State): void;
			}
			export class State {
				public static class: java.lang.Class<zendesk.commonui.ResponseOptionsView.State>;
				public constructor(param0: java.util.List<zendesk.commonui.ResponseOption>, param1: zendesk.commonui.ResponseOptionHandler, param2: zendesk.commonui.ConversationCellProps);
			}
		}
	}
}

declare module zendesk {
	export module commonui {
		export class SystemMessageView {
			public static class: java.lang.Class<zendesk.commonui.SystemMessageView>;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
			public constructor(param0: globalAndroid.content.Context);
		}
		export module SystemMessageView {
			export class State {
				public static class: java.lang.Class<zendesk.commonui.SystemMessageView.State>;
				public getProps(): zendesk.commonui.ConversationCellProps;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getText(): string;
			}
		}
	}
}

declare module zendesk {
	export module commonui {
		export abstract class TextWatcherAdapter {
			public static class: java.lang.Class<zendesk.commonui.TextWatcherAdapter>;
			public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
			public constructor();
			public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
			public afterTextChanged(param0: globalAndroid.text.Editable): void;
		}
	}
}

declare module zendesk {
	export module commonui {
		export class Timer {
			public static class: java.lang.Class<zendesk.commonui.Timer>;
			public disable(): void;
			public start(): boolean;
		}
		export module Timer {
			export class Factory {
				public static class: java.lang.Class<zendesk.commonui.Timer.Factory>;
				public constructor(param0: globalAndroid.os.Handler);
				public create(param0: java.lang.Runnable, param1: number): zendesk.commonui.Timer;
			}
		}
	}
}

declare module zendesk {
	export module commonui {
		export class TypingIndicatorView {
			public static class: java.lang.Class<zendesk.commonui.TypingIndicatorView>;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			public onFinishInflate(): void;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
			public update(param0: zendesk.commonui.TypingIndicatorView.State): void;
			public constructor(param0: globalAndroid.content.Context);
		}
		export module TypingIndicatorView {
			export class State {
				public static class: java.lang.Class<zendesk.commonui.TypingIndicatorView.State>;
			}
		}
	}
}

declare module zendesk {
	export module commonui {
		export class UiConfig {
			public static class: java.lang.Class<zendesk.commonui.UiConfig>;
			/**
			 * Constructs a new instance of the zendesk.commonui.UiConfig interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getUiConfigs(): java.util.List<zendesk.commonui.UiConfig>;
			});
			public constructor();
			public getUiConfigs(): java.util.List<zendesk.commonui.UiConfig>;
		}
	}
}

declare module zendesk {
	export module commonui {
		export class UiConfigUtil {
			public static class: java.lang.Class<zendesk.commonui.UiConfigUtil>;
			public static addToMap(param0: java.util.Map<string,any>, param1: zendesk.commonui.UiConfig): void;
			public static findConfigForType(param0: java.util.List, param1: java.lang.Class): zendesk.commonui.UiConfig;
			public static addToIntent(param0: globalAndroid.content.Intent, param1: zendesk.commonui.UiConfig): void;
			public static addToBundle(param0: globalAndroid.os.Bundle, param1: zendesk.commonui.UiConfig): void;
			public static fromBundle(param0: globalAndroid.os.Bundle, param1: java.lang.Class): zendesk.commonui.UiConfig;
			public static addSelfIfNotInList(param0: java.util.List<zendesk.commonui.UiConfig>, param1: zendesk.commonui.UiConfig): java.util.List<zendesk.commonui.UiConfig>;
			public static fromMap(param0: java.util.Map, param1: java.lang.Class): zendesk.commonui.UiConfig;
			public static extractConfigsFromMap(param0: java.util.Map<string,any>): java.util.List<zendesk.commonui.UiConfig>;
		}
	}
}

declare module zendesk {
	export module commonui {
		export class UiUtils {
			public static class: java.lang.Class<zendesk.commonui.UiUtils>;
			public static decodeHtmlEntities(param0: string): string;
			public themeAttributeToPixels(param0: number, param1: globalAndroid.content.Context, param2: number, param3: number): number;
			public static themeAttributeToColor(param0: number, param1: globalAndroid.content.Context, param2: number): number;
			public static setTint(param0: number, param1: globalAndroid.graphics.drawable.Drawable, param2: globalAndroid.view.View): void;
			public static resolveColor(param0: number, param1: globalAndroid.content.Context): number;
			public static setVisibility(param0: globalAndroid.view.View, param1: number): void;
		}
		export module UiUtils {
			export class ScreenSize {
				public static class: java.lang.Class<zendesk.commonui.UiUtils.ScreenSize>;
				public static UNKNOWN: zendesk.commonui.UiUtils.ScreenSize;
				public static UNDEFINED: zendesk.commonui.UiUtils.ScreenSize;
				public static X_LARGE: zendesk.commonui.UiUtils.ScreenSize;
				public static LARGE: zendesk.commonui.UiUtils.ScreenSize;
				public static NORMAL: zendesk.commonui.UiUtils.ScreenSize;
				public static SMALL: zendesk.commonui.UiUtils.ScreenSize;
				public static values(): native.Array<zendesk.commonui.UiUtils.ScreenSize>;
				public static valueOf(param0: string): zendesk.commonui.UiUtils.ScreenSize;
			}
		}
	}
}

declare module zendesk {
	export module commonui {
		export class UtilsAttachment {
			public static class: java.lang.Class<zendesk.commonui.UtilsAttachment>;
		}
	}
}

declare module zendesk {
	export module commonui {
		export class UtilsCellView {
			public static class: java.lang.Class<zendesk.commonui.UtilsCellView>;
		}
	}
}

declare module zendesk {
	export module commonui {
		export class ValueAnimators {
			public static class: java.lang.Class<zendesk.commonui.ValueAnimators>;
		}
	}
}

declare module zendesk {
	export module commonui {
		export class ViewListener<T>  extends java.lang.Object {
			public static class: java.lang.Class<zendesk.commonui.ViewListener<any>>;
			/**
			 * Constructs a new instance of the zendesk.commonui.ViewListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onAction(param0: T): void;
			});
			public constructor();
			public onAction(param0: T): void;
		}
	}
}

declare module zendesk {
	export module commonui {
		export abstract class ViewObserver<T>  extends zendesk.commonui.ViewListener<any> {
			public static class: java.lang.Class<zendesk.commonui.ViewObserver<any>>;
			public static clicks(param0: any, param1: zendesk.commonui.ViewObserver<any>): globalAndroid.view.View.OnClickListener;
			public onAction(param0: any): void;
			public static clicks(param0: zendesk.commonui.ViewObserver<java.lang.Void>): globalAndroid.view.View.OnClickListener;
			public static create(): zendesk.commonui.ViewObserver<any>;
			public addListener(param0: zendesk.commonui.ViewListener<any>): void;
			public constructor();
		}
	}
}

declare module zendesk {
	export module commonui {
		export class ZendeskTextView {
			public static class: java.lang.Class<zendesk.commonui.ZendeskTextView>;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
			public dispatchTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
			public constructor(param0: globalAndroid.content.Context);
		}
	}
}

declare module zendesk {
	export module core {
		export class AcceptHeaderInterceptor {
			public static class: java.lang.Class<zendesk.core.AcceptHeaderInterceptor>;
			public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
		}
	}
}

declare module zendesk {
	export module core {
		export class AcceptLanguageHeaderInterceptor {
			public static class: java.lang.Class<zendesk.core.AcceptLanguageHeaderInterceptor>;
			public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
			public constructor(param0: globalAndroid.content.Context);
		}
	}
}

declare module zendesk {
	export module core {
		export class AccessProvider {
			public static class: java.lang.Class<zendesk.core.AccessProvider>;
			/**
			 * Constructs a new instance of the zendesk.core.AccessProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getAndStoreAuthTokenViaAnonymous(param0: zendesk.core.AnonymousIdentity): zendesk.core.AccessToken;
				getAndStoreAuthTokenViaJwt(param0: zendesk.core.JwtIdentity): zendesk.core.AccessToken;
			});
			public constructor();
			public static NO_JWT_ERROR_MESSAGE: string;
			public getAndStoreAuthTokenViaAnonymous(param0: zendesk.core.AnonymousIdentity): zendesk.core.AccessToken;
			public getAndStoreAuthTokenViaJwt(param0: zendesk.core.JwtIdentity): zendesk.core.AccessToken;
		}
	}
}

declare module zendesk {
	export module core {
		export class AccessService {
			public static class: java.lang.Class<zendesk.core.AccessService>;
			/**
			 * Constructs a new instance of the zendesk.core.AccessService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getAuthTokenForJwt(param0: zendesk.core.AuthenticationRequestWrapper): retrofit2.Call<zendesk.core.AuthenticationResponse>;
				getAuthTokenForAnonymous(param0: zendesk.core.AuthenticationRequestWrapper): retrofit2.Call<zendesk.core.AuthenticationResponse>;
			});
			public constructor();
			public getAuthTokenForJwt(param0: zendesk.core.AuthenticationRequestWrapper): retrofit2.Call<zendesk.core.AuthenticationResponse>;
			public getAuthTokenForAnonymous(param0: zendesk.core.AuthenticationRequestWrapper): retrofit2.Call<zendesk.core.AuthenticationResponse>;
		}
	}
}

declare module zendesk {
	export module core {
		export class AccessToken {
			public static class: java.lang.Class<zendesk.core.AccessToken>;
			public equals(param0: any): boolean;
			public getUserId(): string;
			public hashCode(): number;
		}
	}
}

declare module zendesk {
	export module core {
		export class ActionDescription {
			public static class: java.lang.Class<zendesk.core.ActionDescription>;
			public getLocalizedLabel(): string;
			public getLocalizedAccessibilityLabel(): string;
			public getIcon(): number;
			public constructor(param0: string, param1: string, param2: number);
		}
	}
}

declare module zendesk {
	export module core {
		export class ActionHandler {
			public static class: java.lang.Class<zendesk.core.ActionHandler>;
			/**
			 * Constructs a new instance of the zendesk.core.ActionHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				canHandle(param0: string): boolean;
				handle(param0: java.util.Map<string,any>, param1: globalAndroid.content.Context): void;
				getPriority(): number;
				getActionDescription(): zendesk.core.ActionDescription;
				updateSettings(param0: java.util.Map<string,com.google.gson.JsonElement>): void;
			});
			public constructor();
			public getActionDescription(): zendesk.core.ActionDescription;
			public handle(param0: java.util.Map<string,any>, param1: globalAndroid.content.Context): void;
			public getPriority(): number;
			public canHandle(param0: string): boolean;
			public updateSettings(param0: java.util.Map<string,com.google.gson.JsonElement>): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class ActionHandlerRegistry {
			public static class: java.lang.Class<zendesk.core.ActionHandlerRegistry>;
			/**
			 * Constructs a new instance of the zendesk.core.ActionHandlerRegistry interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				add(param0: zendesk.core.ActionHandler): void;
				remove(param0: zendesk.core.ActionHandler): void;
				clear(): void;
				handlerByAction(param0: string): zendesk.core.ActionHandler;
				handlersByAction(param0: string): java.util.List<zendesk.core.ActionHandler>;
				updateSettings(param0: java.util.Map<string,com.google.gson.JsonElement>): void;
			});
			public constructor();
			public clear(): void;
			public handlersByAction(param0: string): java.util.List<zendesk.core.ActionHandler>;
			public remove(param0: zendesk.core.ActionHandler): void;
			public updateSettings(param0: java.util.Map<string,com.google.gson.JsonElement>): void;
			public add(param0: zendesk.core.ActionHandler): void;
			public handlerByAction(param0: string): zendesk.core.ActionHandler;
		}
	}
}

declare module zendesk {
	export module core {
		export class AnonymousIdentity extends zendesk.core.Identity {
			public static class: java.lang.Class<zendesk.core.AnonymousIdentity>;
			public equals(param0: any): boolean;
			public getSdkGuid(): string;
			public getName(): string;
			public constructor();
			public hashCode(): number;
			public getEmail(): string;
		}
		export module AnonymousIdentity {
			export class Builder {
				public static class: java.lang.Class<zendesk.core.AnonymousIdentity.Builder>;
				public withEmailIdentifier(param0: string): zendesk.core.AnonymousIdentity.Builder;
				public withNameIdentifier(param0: string): zendesk.core.AnonymousIdentity.Builder;
				public build(): zendesk.core.Identity;
				public constructor();
			}
		}
	}
}

declare module zendesk {
	export module core {
		export class ApiAnonymousIdentity extends zendesk.core.Identity {
			public static class: java.lang.Class<zendesk.core.ApiAnonymousIdentity>;
		}
	}
}

declare module zendesk {
	export module core {
		export class ApplicationConfiguration {
			public static class: java.lang.Class<zendesk.core.ApplicationConfiguration>;
			public getZendeskUrl(): string;
			public equals(param0: any): boolean;
			public constructor(param0: string, param1: string, param2: string);
			public getApplicationId(): string;
			public getOauthClientId(): string;
			public hashCode(): number;
		}
	}
}

declare module zendesk {
	export module core {
		export class Attachment {
			public static class: java.lang.Class<zendesk.core.Attachment>;
			public getSize(): java.lang.Long;
			public getUrl(): string;
			public getThumbnails(): java.util.List<zendesk.core.Attachment>;
			public getId(): java.lang.Long;
			public getFileName(): string;
			public getContentType(): string;
			public getContentUrl(): string;
		}
	}
}

declare module zendesk {
	export module core {
		export class AuthenticationProvider {
			public static class: java.lang.Class<zendesk.core.AuthenticationProvider>;
			/**
			 * Constructs a new instance of the zendesk.core.AuthenticationProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getIdentity(): zendesk.core.Identity;
			});
			public constructor();
			public getIdentity(): zendesk.core.Identity;
		}
	}
}

declare module zendesk {
	export module core {
		export class AuthenticationRequestWrapper {
			public static class: java.lang.Class<zendesk.core.AuthenticationRequestWrapper>;
		}
	}
}

declare module zendesk {
	export module core {
		export class AuthenticationResponse {
			public static class: java.lang.Class<zendesk.core.AuthenticationResponse>;
		}
	}
}

declare module zendesk {
	export module core {
		export class AuthenticationType {
			public static class: java.lang.Class<zendesk.core.AuthenticationType>;
			public static JWT: zendesk.core.AuthenticationType;
			public static ANONYMOUS: zendesk.core.AuthenticationType;
			public static values(): native.Array<zendesk.core.AuthenticationType>;
			public static valueOf(param0: string): zendesk.core.AuthenticationType;
		}
	}
}

declare module zendesk {
	export module core {
		export class BaseStorage {
			public static class: java.lang.Class<zendesk.core.BaseStorage>;
			/**
			 * Constructs a new instance of the zendesk.core.BaseStorage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				put(param0: string, param1: string): void;
				put(param0: string, param1: any): void;
				get(param0: string): string;
				get(param0: string, param1: java.lang.Class): any;
				remove(param0: string): void;
				clear(): void;
			});
			public constructor();
			public get(param0: string): string;
			public clear(): void;
			public put(param0: string, param1: any): void;
			public remove(param0: string): void;
			public get(param0: string, param1: java.lang.Class): any;
			public put(param0: string, param1: string): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class BlipsCoreProvider {
			public static class: java.lang.Class<zendesk.core.BlipsCoreProvider>;
			/**
			 * Constructs a new instance of the zendesk.core.BlipsCoreProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				coreInitialized(): void;
				corePushEnabled(): void;
				corePushDisabled(param0: java.lang.Long): void;
			});
			public constructor();
			public corePushDisabled(param0: java.lang.Long): void;
			public coreInitialized(): void;
			public corePushEnabled(): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class BlipsFormatHelper {
			public static class: java.lang.Class<zendesk.core.BlipsFormatHelper>;
		}
	}
}

declare module zendesk {
	export module core {
		export class BlipsGroup {
			public static class: java.lang.Class<zendesk.core.BlipsGroup>;
			public static REQUIRED: zendesk.core.BlipsGroup;
			public static BEHAVIOURAL: zendesk.core.BlipsGroup;
			public static PATHFINDER: zendesk.core.BlipsGroup;
			public static values(): native.Array<zendesk.core.BlipsGroup>;
			public static valueOf(param0: string): zendesk.core.BlipsGroup;
		}
	}
}

declare module zendesk {
	export module core {
		export class BlipsPermissions {
			public static class: java.lang.Class<zendesk.core.BlipsPermissions>;
		}
	}
}

declare module zendesk {
	export module core {
		export class BlipsProvider {
			public static class: java.lang.Class<zendesk.core.BlipsProvider>;
			/**
			 * Constructs a new instance of the zendesk.core.BlipsProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				sendBlip(param0: zendesk.core.UserAction, param1: zendesk.core.BlipsGroup): void;
				sendBlip(param0: zendesk.core.PageView, param1: zendesk.core.BlipsGroup): void;
			});
			public constructor();
			public sendBlip(param0: zendesk.core.UserAction, param1: zendesk.core.BlipsGroup): void;
			public sendBlip(param0: zendesk.core.PageView, param1: zendesk.core.BlipsGroup): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class BlipsRequest {
			public static class: java.lang.Class<zendesk.core.BlipsRequest>;
		}
		export module BlipsRequest {
			export class ApiPageView {
				public static class: java.lang.Class<zendesk.core.BlipsRequest.ApiPageView>;
			}
			export class ApiUserAction {
				public static class: java.lang.Class<zendesk.core.BlipsRequest.ApiUserAction>;
			}
		}
	}
}

declare module zendesk {
	export module core {
		export class BlipsService {
			public static class: java.lang.Class<zendesk.core.BlipsService>;
			/**
			 * Constructs a new instance of the zendesk.core.BlipsService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				send(param0: string): retrofit2.Call<java.lang.Void>;
			});
			public constructor();
			public send(param0: string): retrofit2.Call<java.lang.Void>;
		}
	}
}

declare module zendesk {
	export module core {
		export class BlipsSettings {
			public static class: java.lang.Class<zendesk.core.BlipsSettings>;
		}
	}
}

declare module zendesk {
	export module core {
		export class BuildConfig {
			public static class: java.lang.Class<zendesk.core.BuildConfig>;
			public static DEBUG: boolean;
			public static APPLICATION_ID: string;
			public static BUILD_TYPE: string;
			public static FLAVOR: string;
			public static VERSION_CODE: number;
			public static VERSION_NAME: string;
			public constructor();
		}
	}
}

declare module zendesk {
	export module core {
		export class CachingInterceptor {
			public static class: java.lang.Class<zendesk.core.CachingInterceptor>;
			public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
		}
	}
}

declare module zendesk {
	export module core {
		export class Constants {
			public static class: java.lang.Class<zendesk.core.Constants>;
			/**
			 * Constructs a new instance of the zendesk.core.Constants interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
			public static APPLICATION_JSON: string;
			public static ACCEPT_LANGUAGE: string;
			public static USER_AGENT_HEADER_KEY: string;
			public static X_ZENDESK_CLIENT_HEADER_NAME: string;
			public static PUSH_DEVICE_IDENTIFIER: string;
			public static X_ZENDESK_CLIENT_HEADER_VALUE_FORMAT: string;
			public static X_ZENDESK_CLIENT_VERSION_HEADER_NAME: string;
			public static ACCEPT_HEADER: string;
			public static AUTHORIZATION_HEADER: string;
			public static TEXT_JSON: string;
			public static USER_AGENT_HEADER_TEMPLATE: string;
			public static CLIENT_IDENTIFIER_HEADER: string;
			public static VARIANT: string;
			public static AUTHORIZATION_BEARER_FORMAT: string;
		}
	}
}

declare module zendesk {
	export module core {
		export class CoreModule {
			public static class: java.lang.Class<zendesk.core.CoreModule>;
		}
	}
}

declare module zendesk {
	export module core {
		export class CoreModule_ActionHandlerRegistryFactory extends dagger.internal.Factory<zendesk.core.ActionHandlerRegistry> {
			public static class: java.lang.Class<zendesk.core.CoreModule_ActionHandlerRegistryFactory>;
			public get(): zendesk.core.ActionHandlerRegistry;
			public static actionHandlerRegistry(param0: zendesk.core.CoreModule): zendesk.core.ActionHandlerRegistry;
			public constructor(param0: zendesk.core.CoreModule);
			public static create(param0: zendesk.core.CoreModule): zendesk.core.CoreModule_ActionHandlerRegistryFactory;
		}
	}
}

declare module zendesk {
	export module core {
		export class CoreModule_GetApplicationConfigurationFactory extends dagger.internal.Factory<zendesk.core.ApplicationConfiguration> {
			public static class: java.lang.Class<zendesk.core.CoreModule_GetApplicationConfigurationFactory>;
			public static getApplicationConfiguration(param0: zendesk.core.CoreModule): zendesk.core.ApplicationConfiguration;
			public get(): zendesk.core.ApplicationConfiguration;
			public constructor(param0: zendesk.core.CoreModule);
			public static create(param0: zendesk.core.CoreModule): zendesk.core.CoreModule_GetApplicationConfigurationFactory;
		}
	}
}

declare module zendesk {
	export module core {
		export class CoreModule_GetApplicationContextFactory extends dagger.internal.Factory<globalAndroid.content.Context> {
			public static class: java.lang.Class<zendesk.core.CoreModule_GetApplicationContextFactory>;
			public get(): globalAndroid.content.Context;
			public static create(param0: zendesk.core.CoreModule): zendesk.core.CoreModule_GetApplicationContextFactory;
			public static getApplicationContext(param0: zendesk.core.CoreModule): globalAndroid.content.Context;
			public constructor(param0: zendesk.core.CoreModule);
		}
	}
}

declare module zendesk {
	export module core {
		export class CoreModule_GetAuthenticationProviderFactory extends dagger.internal.Factory<zendesk.core.AuthenticationProvider> {
			public static class: java.lang.Class<zendesk.core.CoreModule_GetAuthenticationProviderFactory>;
			public static getAuthenticationProvider(param0: zendesk.core.CoreModule): zendesk.core.AuthenticationProvider;
			public get(): zendesk.core.AuthenticationProvider;
			public static create(param0: zendesk.core.CoreModule): zendesk.core.CoreModule_GetAuthenticationProviderFactory;
			public constructor(param0: zendesk.core.CoreModule);
		}
	}
}

declare module zendesk {
	export module core {
		export class CoreModule_GetBlipsProviderFactory extends dagger.internal.Factory<zendesk.core.BlipsProvider> {
			public static class: java.lang.Class<zendesk.core.CoreModule_GetBlipsProviderFactory>;
			public static getBlipsProvider(param0: zendesk.core.CoreModule): zendesk.core.BlipsProvider;
			public static create(param0: zendesk.core.CoreModule): zendesk.core.CoreModule_GetBlipsProviderFactory;
			public get(): zendesk.core.BlipsProvider;
			public constructor(param0: zendesk.core.CoreModule);
		}
	}
}

declare module zendesk {
	export module core {
		export class CoreModule_GetExecutorFactory extends dagger.internal.Factory<java.util.concurrent.Executor> {
			public static class: java.lang.Class<zendesk.core.CoreModule_GetExecutorFactory>;
			public static getExecutor(param0: zendesk.core.CoreModule): java.util.concurrent.Executor;
			public static create(param0: zendesk.core.CoreModule): zendesk.core.CoreModule_GetExecutorFactory;
			public get(): java.util.concurrent.Executor;
			public constructor(param0: zendesk.core.CoreModule);
		}
	}
}

declare module zendesk {
	export module core {
		export class CoreModule_GetExecutorServiceFactory extends dagger.internal.Factory<java.util.concurrent.ExecutorService> {
			public static class: java.lang.Class<zendesk.core.CoreModule_GetExecutorServiceFactory>;
			public static create(param0: zendesk.core.CoreModule): zendesk.core.CoreModule_GetExecutorServiceFactory;
			public constructor(param0: zendesk.core.CoreModule);
			public get(): java.util.concurrent.ExecutorService;
			public static getExecutorService(param0: zendesk.core.CoreModule): java.util.concurrent.ExecutorService;
		}
	}
}

declare module zendesk {
	export module core {
		export class CoreModule_GetMemoryCacheFactory extends dagger.internal.Factory<zendesk.core.MemoryCache> {
			public static class: java.lang.Class<zendesk.core.CoreModule_GetMemoryCacheFactory>;
			public static create(param0: zendesk.core.CoreModule): zendesk.core.CoreModule_GetMemoryCacheFactory;
			public static getMemoryCache(param0: zendesk.core.CoreModule): zendesk.core.MemoryCache;
			public get(): zendesk.core.MemoryCache;
			public constructor(param0: zendesk.core.CoreModule);
		}
	}
}

declare module zendesk {
	export module core {
		export class CoreModule_GetNetworkInfoProviderFactory extends dagger.internal.Factory<zendesk.core.NetworkInfoProvider> {
			public static class: java.lang.Class<zendesk.core.CoreModule_GetNetworkInfoProviderFactory>;
			public static getNetworkInfoProvider(param0: zendesk.core.CoreModule): zendesk.core.NetworkInfoProvider;
			public get(): zendesk.core.NetworkInfoProvider;
			public constructor(param0: zendesk.core.CoreModule);
			public static create(param0: zendesk.core.CoreModule): zendesk.core.CoreModule_GetNetworkInfoProviderFactory;
		}
	}
}

declare module zendesk {
	export module core {
		export class CoreModule_GetPushRegistrationProviderFactory extends dagger.internal.Factory<zendesk.core.PushRegistrationProvider> {
			public static class: java.lang.Class<zendesk.core.CoreModule_GetPushRegistrationProviderFactory>;
			public get(): zendesk.core.PushRegistrationProvider;
			public static create(param0: zendesk.core.CoreModule): zendesk.core.CoreModule_GetPushRegistrationProviderFactory;
			public static getPushRegistrationProvider(param0: zendesk.core.CoreModule): zendesk.core.PushRegistrationProvider;
			public constructor(param0: zendesk.core.CoreModule);
		}
	}
}

declare module zendesk {
	export module core {
		export class CoreModule_GetRestServiceProviderFactory extends dagger.internal.Factory<zendesk.core.RestServiceProvider> {
			public static class: java.lang.Class<zendesk.core.CoreModule_GetRestServiceProviderFactory>;
			public static getRestServiceProvider(param0: zendesk.core.CoreModule): zendesk.core.RestServiceProvider;
			public static create(param0: zendesk.core.CoreModule): zendesk.core.CoreModule_GetRestServiceProviderFactory;
			public constructor(param0: zendesk.core.CoreModule);
			public get(): zendesk.core.RestServiceProvider;
		}
	}
}

declare module zendesk {
	export module core {
		export class CoreModule_GetScheduledExecutorServiceFactory extends dagger.internal.Factory<java.util.concurrent.ScheduledExecutorService> {
			public static class: java.lang.Class<zendesk.core.CoreModule_GetScheduledExecutorServiceFactory>;
			public get(): java.util.concurrent.ScheduledExecutorService;
			public static getScheduledExecutorService(param0: zendesk.core.CoreModule): java.util.concurrent.ScheduledExecutorService;
			public constructor(param0: zendesk.core.CoreModule);
			public static create(param0: zendesk.core.CoreModule): zendesk.core.CoreModule_GetScheduledExecutorServiceFactory;
		}
	}
}

declare module zendesk {
	export module core {
		export class CoreModule_GetSessionStorageFactory extends dagger.internal.Factory<zendesk.core.SessionStorage> {
			public static class: java.lang.Class<zendesk.core.CoreModule_GetSessionStorageFactory>;
			public get(): zendesk.core.SessionStorage;
			public constructor(param0: zendesk.core.CoreModule);
			public static create(param0: zendesk.core.CoreModule): zendesk.core.CoreModule_GetSessionStorageFactory;
			public static getSessionStorage(param0: zendesk.core.CoreModule): zendesk.core.SessionStorage;
		}
	}
}

declare module zendesk {
	export module core {
		export class CoreModule_GetSettingsProviderFactory extends dagger.internal.Factory<zendesk.core.SettingsProvider> {
			public static class: java.lang.Class<zendesk.core.CoreModule_GetSettingsProviderFactory>;
			public static getSettingsProvider(param0: zendesk.core.CoreModule): zendesk.core.SettingsProvider;
			public constructor(param0: zendesk.core.CoreModule);
			public get(): zendesk.core.SettingsProvider;
			public static create(param0: zendesk.core.CoreModule): zendesk.core.CoreModule_GetSettingsProviderFactory;
		}
	}
}

declare module zendesk {
	export module core {
		export class CoreSettings extends zendesk.core.Settings {
			public static class: java.lang.Class<zendesk.core.CoreSettings>;
			public getAuthentication(): zendesk.core.AuthenticationType;
		}
	}
}

declare module zendesk {
	export module core {
		export class CoreSettingsStorage {
			public static class: java.lang.Class<zendesk.core.CoreSettingsStorage>;
			/**
			 * Constructs a new instance of the zendesk.core.CoreSettingsStorage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getCoreSettings(): zendesk.core.CoreSettings;
				getBlipsSettings(): zendesk.core.BlipsSettings;
			});
			public constructor();
			public getBlipsSettings(): zendesk.core.BlipsSettings;
			public getCoreSettings(): zendesk.core.CoreSettings;
		}
	}
}

declare module zendesk {
	export module core {
		export abstract class CustomNetworkConfig {
			public static class: java.lang.Class<zendesk.core.CustomNetworkConfig>;
			public configureOkHttpClient(param0: okhttp3.OkHttpClient.Builder): void;
			public constructor();
			public configureRetrofit(param0: retrofit2.Retrofit.Builder): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class DaggerZendeskApplicationComponent extends zendesk.core.ZendeskApplicationComponent {
			public static class: java.lang.Class<zendesk.core.DaggerZendeskApplicationComponent>;
			public static builder(): zendesk.core.DaggerZendeskApplicationComponent.Builder;
			public zendeskShadow(): zendesk.core.ZendeskShadow;
		}
		export module DaggerZendeskApplicationComponent {
			export class Builder {
				public static class: java.lang.Class<zendesk.core.DaggerZendeskApplicationComponent.Builder>;
				public zendeskApplicationModule(param0: zendesk.core.ZendeskApplicationModule): zendesk.core.DaggerZendeskApplicationComponent.Builder;
				public build(): zendesk.core.ZendeskApplicationComponent;
				/** @deprecated */
				public zendeskStorageModule(param0: zendesk.core.ZendeskStorageModule): zendesk.core.DaggerZendeskApplicationComponent.Builder;
				/** @deprecated */
				public zendeskProvidersModule(param0: zendesk.core.ZendeskProvidersModule): zendesk.core.DaggerZendeskApplicationComponent.Builder;
				public zendeskNetworkModule(param0: zendesk.core.ZendeskNetworkModule): zendesk.core.DaggerZendeskApplicationComponent.Builder;
			}
		}
	}
}

declare module zendesk {
	export module core {
		export class DeviceInfo {
			public static class: java.lang.Class<zendesk.core.DeviceInfo>;
			public static getCurrentLocale(param0: globalAndroid.content.Context): java.util.Locale;
		}
	}
}

declare module zendesk {
	export module core {
		export class GsonSerializer extends zendesk.core.Serializer {
			public static class: java.lang.Class<zendesk.core.GsonSerializer>;
			public deserialize(param0: any, param1: java.lang.Class): any;
			public serialize(param0: any): string;
		}
	}
}

declare module zendesk {
	export module core {
		export class Identity {
			public static class: java.lang.Class<zendesk.core.Identity>;
			/**
			 * Constructs a new instance of the zendesk.core.Identity interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
	}
}

declare module zendesk {
	export module core {
		export class IdentityManager {
			public static class: java.lang.Class<zendesk.core.IdentityManager>;
			/**
			 * Constructs a new instance of the zendesk.core.IdentityManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				identityIsDifferent(param0: zendesk.core.Identity): boolean;
				updateAndPersistIdentity(param0: zendesk.core.Identity): zendesk.core.Identity;
				getSdkGuid(): string;
				getStoredAccessTokenAsBearerToken(): string;
				getIdentity(): zendesk.core.Identity;
				getBlipsUuid(): string;
				storeAccessToken(param0: zendesk.core.AccessToken): void;
				getUserId(): java.lang.Long;
			});
			public constructor();
			public getSdkGuid(): string;
			public storeAccessToken(param0: zendesk.core.AccessToken): void;
			public updateAndPersistIdentity(param0: zendesk.core.Identity): zendesk.core.Identity;
			public getUserId(): java.lang.Long;
			public getIdentity(): zendesk.core.Identity;
			public identityIsDifferent(param0: zendesk.core.Identity): boolean;
			public getBlipsUuid(): string;
			public getStoredAccessTokenAsBearerToken(): string;
		}
	}
}

declare module zendesk {
	export module core {
		export class IdentityStorage {
			public static class: java.lang.Class<zendesk.core.IdentityStorage>;
			/**
			 * Constructs a new instance of the zendesk.core.IdentityStorage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				storeAccessToken(param0: zendesk.core.AccessToken): void;
				getStoredAccessToken(): zendesk.core.AccessToken;
				storeUserId(param0: java.lang.Long): void;
				getUserId(): java.lang.Long;
				getUuid(): string;
				storeIdentity(param0: zendesk.core.Identity): void;
				getIdentity(): zendesk.core.Identity;
				clear(): void;
				updateBlipsUuid(): string;
				getBlipsUuid(): string;
				updateSdkGuid(): string;
				storeSdkGuid(param0: string): void;
			});
			public constructor();
			public clear(): void;
			public storeAccessToken(param0: zendesk.core.AccessToken): void;
			public storeIdentity(param0: zendesk.core.Identity): void;
			public getUserId(): java.lang.Long;
			public getIdentity(): zendesk.core.Identity;
			public updateSdkGuid(): string;
			public getStoredAccessToken(): zendesk.core.AccessToken;
			public getUuid(): string;
			public getBlipsUuid(): string;
			public updateBlipsUuid(): string;
			public storeSdkGuid(param0: string): void;
			public storeUserId(param0: java.lang.Long): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class JwtIdentity extends zendesk.core.Identity {
			public static class: java.lang.Class<zendesk.core.JwtIdentity>;
			public equals(param0: any): boolean;
			public getJwtUserIdentifier(): string;
			public constructor(param0: string);
			public hashCode(): number;
		}
	}
}

declare module zendesk {
	export module core {
		export class LegacyIdentityMigrator {
			public static class: java.lang.Class<zendesk.core.LegacyIdentityMigrator>;
		}
	}
}

declare module zendesk {
	export module core {
		export class MemoryCache {
			public static class: java.lang.Class<zendesk.core.MemoryCache>;
			/**
			 * Constructs a new instance of the zendesk.core.MemoryCache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				get(param0: string): any;
				getOrDefault(param0: string, param1: any): any;
				contains(param0: string): boolean;
				put(param0: string, param1: any): void;
				remove(param0: string): void;
				clear(): void;
			});
			public constructor();
			public getOrDefault(param0: string, param1: any): any;
			public clear(): void;
			public get(param0: string): any;
			public put(param0: string, param1: any): void;
			public remove(param0: string): void;
			public contains(param0: string): boolean;
		}
	}
}

declare module zendesk {
	export module core {
		export class NetworkAware {
			public static class: java.lang.Class<zendesk.core.NetworkAware>;
			/**
			 * Constructs a new instance of the zendesk.core.NetworkAware interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onNetworkAvailable(): void;
				onNetworkUnavailable(): void;
			});
			public constructor();
			public onNetworkAvailable(): void;
			public onNetworkUnavailable(): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class NetworkInfoProvider {
			public static class: java.lang.Class<zendesk.core.NetworkInfoProvider>;
			/**
			 * Constructs a new instance of the zendesk.core.NetworkInfoProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				register(): void;
				unregister(): void;
				isNetworkAvailable(): boolean;
				addNetworkAwareListener(param0: java.lang.Integer, param1: zendesk.core.NetworkAware): void;
				removeNetworkAwareListener(param0: java.lang.Integer): void;
				clearNetworkAwareListeners(): void;
				addRetryAction(param0: java.lang.Integer, param1: zendesk.core.RetryAction): void;
				removeRetryAction(param0: java.lang.Integer): void;
				clearRetryActions(): void;
			});
			public constructor();
			public clearNetworkAwareListeners(): void;
			public removeNetworkAwareListener(param0: java.lang.Integer): void;
			public isNetworkAvailable(): boolean;
			public addNetworkAwareListener(param0: java.lang.Integer, param1: zendesk.core.NetworkAware): void;
			public register(): void;
			public addRetryAction(param0: java.lang.Integer, param1: zendesk.core.RetryAction): void;
			public removeRetryAction(param0: java.lang.Integer): void;
			public clearRetryActions(): void;
			public unregister(): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class NetworkUtils {
			public static class: java.lang.Class<zendesk.core.NetworkUtils>;
		}
	}
}

declare module zendesk {
	export module core {
		export class PageView {
			public static class: java.lang.Class<zendesk.core.PageView>;
			public getValue(): java.util.Map<string,any>;
			public constructor(param0: string, param1: string, param2: string, param3: string, param4: string);
			public getNavigatorLanguage(): string;
			public getPageTitle(): string;
			public getUrl(): string;
			public getChannel(): string;
			public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: java.util.Map<string,any>);
			public getVersion(): string;
		}
	}
}

declare module zendesk {
	export module core {
		export abstract class PassThroughErrorZendeskCallback<E>  extends com.zendesk.service.ZendeskCallback<any> {
			public static class: java.lang.Class<zendesk.core.PassThroughErrorZendeskCallback<any>>;
			public onError(param0: com.zendesk.service.ErrorResponse): void;
			public onSuccess(param0: any): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class ProviderStore {
			public static class: java.lang.Class<zendesk.core.ProviderStore>;
			/**
			 * Constructs a new instance of the zendesk.core.ProviderStore interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				userProvider(): zendesk.core.UserProvider;
				pushRegistrationProvider(): zendesk.core.PushRegistrationProvider;
			});
			public constructor();
			public pushRegistrationProvider(): zendesk.core.PushRegistrationProvider;
			public userProvider(): zendesk.core.UserProvider;
		}
	}
}

declare module zendesk {
	export module core {
		export class PushDeviceIdStorage {
			public static class: java.lang.Class<zendesk.core.PushDeviceIdStorage>;
			/**
			 * Constructs a new instance of the zendesk.core.PushDeviceIdStorage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				storePushDeviceId(param0: string): void;
				getPushDeviceId(): string;
				hasStoredDeviceId(): boolean;
				removePushDeviceId(): void;
			});
			public constructor();
			public removePushDeviceId(): void;
			public hasStoredDeviceId(): boolean;
			public getPushDeviceId(): string;
			public storePushDeviceId(param0: string): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class PushRegistrationProvider {
			public static class: java.lang.Class<zendesk.core.PushRegistrationProvider>;
			/**
			 * Constructs a new instance of the zendesk.core.PushRegistrationProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				registerWithDeviceIdentifier(param0: string, param1: com.zendesk.service.ZendeskCallback<string>): void;
				registerWithUAChannelId(param0: string, param1: com.zendesk.service.ZendeskCallback<string>): void;
				unregisterDevice(param0: com.zendesk.service.ZendeskCallback<java.lang.Void>): void;
				isRegisteredForPush(): boolean;
			});
			public constructor();
			public registerWithDeviceIdentifier(param0: string, param1: com.zendesk.service.ZendeskCallback<string>): void;
			public registerWithUAChannelId(param0: string, param1: com.zendesk.service.ZendeskCallback<string>): void;
			public unregisterDevice(param0: com.zendesk.service.ZendeskCallback<java.lang.Void>): void;
			public isRegisteredForPush(): boolean;
		}
	}
}

declare module zendesk {
	export module core {
		export class PushRegistrationRequest {
			public static class: java.lang.Class<zendesk.core.PushRegistrationRequest>;
		}
	}
}

declare module zendesk {
	export module core {
		export class PushRegistrationRequestWrapper {
			public static class: java.lang.Class<zendesk.core.PushRegistrationRequestWrapper>;
		}
	}
}

declare module zendesk {
	export module core {
		export class PushRegistrationResponse {
			public static class: java.lang.Class<zendesk.core.PushRegistrationResponse>;
		}
	}
}

declare module zendesk {
	export module core {
		export class PushRegistrationResponseWrapper {
			public static class: java.lang.Class<zendesk.core.PushRegistrationResponseWrapper>;
		}
	}
}

declare module zendesk {
	export module core {
		export class PushRegistrationService {
			public static class: java.lang.Class<zendesk.core.PushRegistrationService>;
			/**
			 * Constructs a new instance of the zendesk.core.PushRegistrationService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				registerDevice(param0: zendesk.core.PushRegistrationRequestWrapper): retrofit2.Call<zendesk.core.PushRegistrationResponseWrapper>;
				unregisterDevice(param0: string): retrofit2.Call<java.lang.Void>;
			});
			public constructor();
			public unregisterDevice(param0: string): retrofit2.Call<java.lang.Void>;
			public registerDevice(param0: zendesk.core.PushRegistrationRequestWrapper): retrofit2.Call<zendesk.core.PushRegistrationResponseWrapper>;
		}
	}
}

declare module zendesk {
	export module core {
		export class RestServiceProvider {
			public static class: java.lang.Class<zendesk.core.RestServiceProvider>;
			/**
			 * Constructs a new instance of the zendesk.core.RestServiceProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				createRestService(param0: java.lang.Class, param1: string, param2: string): any;
				createRestService(param0: java.lang.Class, param1: string, param2: string, param3: zendesk.core.CustomNetworkConfig): any;
				getMediaOkHttpClient(): okhttp3.OkHttpClient;
				getCoreOkHttpClient(): okhttp3.OkHttpClient;
			});
			public constructor();
			public createRestService(param0: java.lang.Class, param1: string, param2: string, param3: zendesk.core.CustomNetworkConfig): any;
			public createRestService(param0: java.lang.Class, param1: string, param2: string): any;
			public getMediaOkHttpClient(): okhttp3.OkHttpClient;
			public getCoreOkHttpClient(): okhttp3.OkHttpClient;
		}
	}
}

declare module zendesk {
	export module core {
		export class RetryAction {
			public static class: java.lang.Class<zendesk.core.RetryAction>;
			/**
			 * Constructs a new instance of the zendesk.core.RetryAction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onRetry(): void;
			});
			public constructor();
			public onRetry(): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class SdkSettings {
			public static class: java.lang.Class<zendesk.core.SdkSettings>;
		}
	}
}

declare module zendesk {
	export module core {
		export class SdkSettingsProviderInternal {
			public static class: java.lang.Class<zendesk.core.SdkSettingsProviderInternal>;
			/**
			 * Constructs a new instance of the zendesk.core.SdkSettingsProviderInternal interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getCoreSettings(): zendesk.core.CoreSettings;
				getBlipsSettings(): zendesk.core.BlipsSettings;
			});
			public constructor();
			public getBlipsSettings(): zendesk.core.BlipsSettings;
			public getCoreSettings(): zendesk.core.CoreSettings;
		}
	}
}

declare module zendesk {
	export module core {
		export class SdkSettingsService {
			public static class: java.lang.Class<zendesk.core.SdkSettingsService>;
			/**
			 * Constructs a new instance of the zendesk.core.SdkSettingsService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getSettings(param0: string, param1: string): retrofit2.Call<java.util.Map<string,com.google.gson.JsonElement>>;
			});
			public constructor();
			public getSettings(param0: string, param1: string): retrofit2.Call<java.util.Map<string,com.google.gson.JsonElement>>;
		}
	}
}

declare module zendesk {
	export module core {
		export abstract class SdkStartUpProvider {
			public static class: java.lang.Class<zendesk.core.SdkStartUpProvider>;
			public onCreate(): boolean;
			public onStartUp(param0: globalAndroid.content.Context): void;
			public update(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues, param2: string, param3: native.Array<string>): number;
			public delete(param0: globalAndroid.net.Uri, param1: string, param2: native.Array<string>): number;
			public constructor();
			public query(param0: globalAndroid.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string): globalAndroid.database.Cursor;
			public insert(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues): globalAndroid.net.Uri;
			public getType(param0: globalAndroid.net.Uri): string;
		}
	}
}

declare module zendesk {
	export module core {
		export class Serializer {
			public static class: java.lang.Class<zendesk.core.Serializer>;
			/**
			 * Constructs a new instance of the zendesk.core.Serializer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				deserialize(param0: any, param1: java.lang.Class): any;
				serialize(param0: any): string;
			});
			public constructor();
			public deserialize(param0: any, param1: java.lang.Class): any;
			public serialize(param0: any): string;
		}
	}
}

declare module zendesk {
	export module core {
		export class SessionConfiguration {
			public static class: java.lang.Class<zendesk.core.SessionConfiguration>;
		}
		export module SessionConfiguration {
			export class Builder {
				public static class: java.lang.Class<zendesk.core.SessionConfiguration.Builder>;
				public build(): zendesk.core.SessionConfiguration;
			}
		}
	}
}

declare module zendesk {
	export module core {
		export class SessionStorage {
			public static class: java.lang.Class<zendesk.core.SessionStorage>;
			/**
			 * Constructs a new instance of the zendesk.core.SessionStorage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getAdditionalSdkStorage(): zendesk.core.BaseStorage;
				getZendeskCacheDir(): java.io.File;
				getZendeskDataDir(): java.io.File;
				clear(): void;
			});
			public constructor();
			public clear(): void;
			public getZendeskCacheDir(): java.io.File;
			public getAdditionalSdkStorage(): zendesk.core.BaseStorage;
			public getZendeskDataDir(): java.io.File;
		}
	}
}

declare module zendesk {
	export module core {
		export class Settings {
			public static class: java.lang.Class<zendesk.core.Settings>;
			/**
			 * Constructs a new instance of the zendesk.core.Settings interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
	}
}

declare module zendesk {
	export module core {
		export class SettingsPack<E>  extends java.lang.Object {
			public static class: java.lang.Class<zendesk.core.SettingsPack<any>>;
			public getSettings(): E;
			public getCoreSettings(): zendesk.core.CoreSettings;
		}
	}
}

declare module zendesk {
	export module core {
		export class SettingsProvider {
			public static class: java.lang.Class<zendesk.core.SettingsProvider>;
			/**
			 * Constructs a new instance of the zendesk.core.SettingsProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getCoreSettings(param0: com.zendesk.service.ZendeskCallback<zendesk.core.CoreSettings>): void;
				getSettingsForSdk(param0: string, param1: java.lang.Class, param2: com.zendesk.service.ZendeskCallback<any>): void;
			});
			public constructor();
			public getSettingsForSdk(param0: string, param1: java.lang.Class, param2: com.zendesk.service.ZendeskCallback<any>): void;
			public getCoreSettings(param0: com.zendesk.service.ZendeskCallback<zendesk.core.CoreSettings>): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class SettingsStorage {
			public static class: java.lang.Class<zendesk.core.SettingsStorage>;
			/**
			 * Constructs a new instance of the zendesk.core.SettingsStorage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getSettings(param0: string, param1: java.lang.Class): any;
				storeRawSettings(param0: java.util.Map<string,com.google.gson.JsonElement>): void;
				hasStoredSettings(): boolean;
				areSettingsUpToDate(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
				clear(): void;
			});
			public constructor();
			public clear(): void;
			public getSettings(param0: string, param1: java.lang.Class): any;
			public areSettingsUpToDate(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
			public storeRawSettings(param0: java.util.Map<string,com.google.gson.JsonElement>): void;
			public hasStoredSettings(): boolean;
		}
	}
}

declare module zendesk {
	export module core {
		export class SharedPreferencesStorage extends zendesk.core.BaseStorage {
			public static class: java.lang.Class<zendesk.core.SharedPreferencesStorage>;
			public get(param0: string): string;
			public clear(): void;
			public put(param0: string, param1: any): void;
			public remove(param0: string): void;
			public get(param0: string, param1: java.lang.Class): any;
			public put(param0: string, param1: string): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class Storage {
			public static class: java.lang.Class<zendesk.core.Storage>;
			/**
			 * Constructs a new instance of the zendesk.core.Storage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getSessionStorage(): zendesk.core.SessionStorage;
				clear(): void;
				hasSdkConfigChanged(param0: zendesk.core.ApplicationConfiguration): boolean;
				storeSdkHash(param0: zendesk.core.ApplicationConfiguration): void;
			});
			public constructor();
			public clear(): void;
			public hasSdkConfigChanged(param0: zendesk.core.ApplicationConfiguration): boolean;
			public storeSdkHash(param0: zendesk.core.ApplicationConfiguration): void;
			public getSessionStorage(): zendesk.core.SessionStorage;
		}
	}
}

declare module zendesk {
	export module core {
		export class Tls12SocketFactory {
			public static class: java.lang.Class<zendesk.core.Tls12SocketFactory>;
			public static enableTls12OnPreLollipop(param0: okhttp3.OkHttpClient.Builder): okhttp3.OkHttpClient.Builder;
			public createSocket(param0: string, param1: number): java.net.Socket;
			public createSocket(param0: java.net.InetAddress, param1: number): java.net.Socket;
			public getSupportedCipherSuites(): native.Array<string>;
			public constructor(param0: javax.net.ssl.SSLSocketFactory);
			public getDefaultCipherSuites(): native.Array<string>;
			public createSocket(param0: java.net.Socket, param1: string, param2: number, param3: boolean): java.net.Socket;
			public createSocket(param0: java.net.InetAddress, param1: number, param2: java.net.InetAddress, param3: number): java.net.Socket;
			public createSocket(param0: string, param1: number, param2: java.net.InetAddress, param3: number): java.net.Socket;
		}
	}
}

declare module zendesk {
	export module core {
		export class User {
			public static class: java.lang.Class<zendesk.core.User>;
			public getTags(): java.util.List<string>;
			public getName(): string;
			public getId(): java.lang.Long;
			public getUserFields(): java.util.Map<string,string>;
			public getPhoto(): string;
			public constructor();
			public isAgent(): boolean;
		}
	}
}

declare module zendesk {
	export module core {
		export class UserAction {
			public static class: java.lang.Class<zendesk.core.UserAction>;
			public getValue(): java.util.Map<string,any>;
			public getLabel(): string;
			public getAction(): string;
			public getChannel(): string;
			public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: java.util.Map<string,any>);
			public getVersion(): string;
			public constructor(param0: string, param1: string, param2: string, param3: string);
			public getCategory(): string;
		}
	}
}

declare module zendesk {
	export module core {
		export class UserAgentAndClientHeadersInterceptor {
			public static class: java.lang.Class<zendesk.core.UserAgentAndClientHeadersInterceptor>;
			public constructor(param0: string, param1: string);
			public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
		}
	}
}

declare module zendesk {
	export module core {
		export class UserField {
			public static class: java.lang.Class<zendesk.core.UserField>;
			public getTitle(): string;
			public getUrl(): string;
			public getUserFieldOptions(): java.util.List<zendesk.core.UserFieldOption>;
			public getRegexpForValidation(): string;
			public getUserFieldType(): zendesk.core.UserField.UserFieldType;
			public getCreatedAt(): java.util.Date;
			public constructor();
			public getUpdatedAt(): java.util.Date;
			public getRawDescription(): string;
			public getRawTitle(): string;
			public getId(): java.lang.Long;
			public getKey(): string;
			public getDescription(): string;
			public isSystem(): boolean;
			public getPosition(): java.lang.Long;
			public isActive(): boolean;
		}
		export module UserField {
			export class UserFieldType {
				public static class: java.lang.Class<zendesk.core.UserField.UserFieldType>;
				public static Integer: zendesk.core.UserField.UserFieldType;
				public static Decimal: zendesk.core.UserField.UserFieldType;
				public static Checkbox: zendesk.core.UserField.UserFieldType;
				public static Date: zendesk.core.UserField.UserFieldType;
				public static Text: zendesk.core.UserField.UserFieldType;
				public static Textarea: zendesk.core.UserField.UserFieldType;
				public static Dropdown: zendesk.core.UserField.UserFieldType;
				public static Regexp: zendesk.core.UserField.UserFieldType;
				public static valueOf(param0: string): zendesk.core.UserField.UserFieldType;
				public static values(): native.Array<zendesk.core.UserField.UserFieldType>;
			}
		}
	}
}

declare module zendesk {
	export module core {
		export class UserFieldOption {
			public static class: java.lang.Class<zendesk.core.UserFieldOption>;
			public getRawName(): string;
			public getName(): string;
			public getId(): java.lang.Long;
			public constructor();
			public getValue(): string;
		}
	}
}

declare module zendesk {
	export module core {
		export class UserFieldRequest {
			public static class: java.lang.Class<zendesk.core.UserFieldRequest>;
		}
	}
}

declare module zendesk {
	export module core {
		export class UserFieldResponse {
			public static class: java.lang.Class<zendesk.core.UserFieldResponse>;
		}
	}
}

declare module zendesk {
	export module core {
		export class UserProvider {
			public static class: java.lang.Class<zendesk.core.UserProvider>;
			/**
			 * Constructs a new instance of the zendesk.core.UserProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				addTags(param0: java.util.List<string>, param1: com.zendesk.service.ZendeskCallback<java.util.List<string>>): void;
				deleteTags(param0: java.util.List<string>, param1: com.zendesk.service.ZendeskCallback<java.util.List<string>>): void;
				getUserFields(param0: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.core.UserField>>): void;
				setUserFields(param0: java.util.Map<string,string>, param1: com.zendesk.service.ZendeskCallback<java.util.Map<string,string>>): void;
				getUser(param0: com.zendesk.service.ZendeskCallback<zendesk.core.User>): void;
			});
			public constructor();
			public getUserFields(param0: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.core.UserField>>): void;
			public setUserFields(param0: java.util.Map<string,string>, param1: com.zendesk.service.ZendeskCallback<java.util.Map<string,string>>): void;
			public getUser(param0: com.zendesk.service.ZendeskCallback<zendesk.core.User>): void;
			public addTags(param0: java.util.List<string>, param1: com.zendesk.service.ZendeskCallback<java.util.List<string>>): void;
			public deleteTags(param0: java.util.List<string>, param1: com.zendesk.service.ZendeskCallback<java.util.List<string>>): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class UserResponse {
			public static class: java.lang.Class<zendesk.core.UserResponse>;
		}
	}
}

declare module zendesk {
	export module core {
		export class UserService {
			public static class: java.lang.Class<zendesk.core.UserService>;
			/**
			 * Constructs a new instance of the zendesk.core.UserService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				addTags(param0: zendesk.core.UserTagRequest): retrofit2.Call<zendesk.core.UserResponse>;
				deleteTags(param0: string): retrofit2.Call<zendesk.core.UserResponse>;
				getUserFields(): retrofit2.Call<zendesk.core.UserFieldResponse>;
				setUserFields(param0: zendesk.core.UserFieldRequest): retrofit2.Call<zendesk.core.UserResponse>;
				getUser(): retrofit2.Call<zendesk.core.UserResponse>;
			});
			public constructor();
			public addTags(param0: zendesk.core.UserTagRequest): retrofit2.Call<zendesk.core.UserResponse>;
			public getUser(): retrofit2.Call<zendesk.core.UserResponse>;
			public getUserFields(): retrofit2.Call<zendesk.core.UserFieldResponse>;
			public deleteTags(param0: string): retrofit2.Call<zendesk.core.UserResponse>;
			public setUserFields(param0: zendesk.core.UserFieldRequest): retrofit2.Call<zendesk.core.UserResponse>;
		}
	}
}

declare module zendesk {
	export module core {
		export class UserTagRequest {
			public static class: java.lang.Class<zendesk.core.UserTagRequest>;
		}
	}
}

declare module zendesk {
	export module core {
		export class Zendesk {
			public static class: java.lang.Class<zendesk.core.Zendesk>;
			public static INSTANCE: zendesk.core.Zendesk;
			public setIdentity(param0: zendesk.core.Identity): void;
			public init(param0: globalAndroid.content.Context, param1: string, param2: string, param3: string): void;
			public actionHandlerRegistry(): zendesk.core.ActionHandlerRegistry;
			public getIdentity(): zendesk.core.Identity;
			public static valueOf(param0: string): zendesk.core.Zendesk;
			public static values(): native.Array<zendesk.core.Zendesk>;
			public isInitialized(): boolean;
			public provider(): zendesk.core.ProviderStore;
			public coreModule(): zendesk.core.CoreModule;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskAccessInterceptor {
			public static class: java.lang.Class<zendesk.core.ZendeskAccessInterceptor>;
			public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskAccessProvider extends zendesk.core.AccessProvider {
			public static class: java.lang.Class<zendesk.core.ZendeskAccessProvider>;
			public getAndStoreAuthTokenViaAnonymous(param0: zendesk.core.AnonymousIdentity): zendesk.core.AccessToken;
			public getAndStoreAuthTokenViaJwt(param0: zendesk.core.JwtIdentity): zendesk.core.AccessToken;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskActionHandlerRegistry extends zendesk.core.ActionHandlerRegistry {
			public static class: java.lang.Class<zendesk.core.ZendeskActionHandlerRegistry>;
			public clear(): void;
			public handlersByAction(param0: string): java.util.List<zendesk.core.ActionHandler>;
			public remove(param0: zendesk.core.ActionHandler): void;
			public updateSettings(param0: java.util.Map<string,com.google.gson.JsonElement>): void;
			public add(param0: zendesk.core.ActionHandler): void;
			public handlerByAction(param0: string): zendesk.core.ActionHandler;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskApplicationComponent {
			public static class: java.lang.Class<zendesk.core.ZendeskApplicationComponent>;
			/**
			 * Constructs a new instance of the zendesk.core.ZendeskApplicationComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				zendeskShadow(): zendesk.core.ZendeskShadow;
			});
			public constructor();
			public zendeskShadow(): zendesk.core.ZendeskShadow;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskApplicationModule {
			public static class: java.lang.Class<zendesk.core.ZendeskApplicationModule>;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskApplicationModule_ProvideApplicationConfigurationFactory extends dagger.internal.Factory<zendesk.core.ApplicationConfiguration> {
			public static class: java.lang.Class<zendesk.core.ZendeskApplicationModule_ProvideApplicationConfigurationFactory>;
			public static provideApplicationConfiguration(param0: zendesk.core.ZendeskApplicationModule): zendesk.core.ApplicationConfiguration;
			public get(): zendesk.core.ApplicationConfiguration;
			public static create(param0: zendesk.core.ZendeskApplicationModule): zendesk.core.ZendeskApplicationModule_ProvideApplicationConfigurationFactory;
			public constructor(param0: zendesk.core.ZendeskApplicationModule);
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskApplicationModule_ProvideApplicationContextFactory extends dagger.internal.Factory<globalAndroid.content.Context> {
			public static class: java.lang.Class<zendesk.core.ZendeskApplicationModule_ProvideApplicationContextFactory>;
			public static create(param0: zendesk.core.ZendeskApplicationModule): zendesk.core.ZendeskApplicationModule_ProvideApplicationContextFactory;
			public get(): globalAndroid.content.Context;
			public constructor(param0: zendesk.core.ZendeskApplicationModule);
			public static provideApplicationContext(param0: zendesk.core.ZendeskApplicationModule): globalAndroid.content.Context;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskApplicationModule_ProvideBase64SerializerFactory extends dagger.internal.Factory<zendesk.core.Serializer> {
			public static class: java.lang.Class<zendesk.core.ZendeskApplicationModule_ProvideBase64SerializerFactory>;
			public get(): zendesk.core.Serializer;
			public static provideBase64Serializer(param0: zendesk.core.ZendeskApplicationModule, param1: any): zendesk.core.Serializer;
			public constructor(param0: zendesk.core.ZendeskApplicationModule, param1: javax.inject.Provider<zendesk.core.Serializer>);
			public static create(param0: zendesk.core.ZendeskApplicationModule, param1: javax.inject.Provider<zendesk.core.Serializer>): zendesk.core.ZendeskApplicationModule_ProvideBase64SerializerFactory;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskApplicationModule_ProvideDeviceInfoFactory extends dagger.internal.Factory<zendesk.core.DeviceInfo> {
			public static class: java.lang.Class<zendesk.core.ZendeskApplicationModule_ProvideDeviceInfoFactory>;
			public get(): zendesk.core.DeviceInfo;
			public static create(param0: javax.inject.Provider<globalAndroid.content.Context>): zendesk.core.ZendeskApplicationModule_ProvideDeviceInfoFactory;
			public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>);
			public static provideDeviceInfo(param0: globalAndroid.content.Context): zendesk.core.DeviceInfo;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskApplicationModule_ProvideExecutorFactory extends dagger.internal.Factory<java.util.concurrent.ScheduledExecutorService> {
			public static class: java.lang.Class<zendesk.core.ZendeskApplicationModule_ProvideExecutorFactory>;
			public static provideExecutor(): java.util.concurrent.ScheduledExecutorService;
			public get(): java.util.concurrent.ScheduledExecutorService;
			public static create(): zendesk.core.ZendeskApplicationModule_ProvideExecutorFactory;
			public constructor();
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskApplicationModule_ProvideExecutorServiceFactory extends dagger.internal.Factory<java.util.concurrent.ExecutorService> {
			public static class: java.lang.Class<zendesk.core.ZendeskApplicationModule_ProvideExecutorServiceFactory>;
			public static provideExecutorService(param0: java.util.concurrent.ScheduledExecutorService): java.util.concurrent.ExecutorService;
			public constructor(param0: javax.inject.Provider<java.util.concurrent.ScheduledExecutorService>);
			public static create(param0: javax.inject.Provider<java.util.concurrent.ScheduledExecutorService>): zendesk.core.ZendeskApplicationModule_ProvideExecutorServiceFactory;
			public get(): java.util.concurrent.ExecutorService;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskApplicationModule_ProvideGsonFactory extends dagger.internal.Factory<com.google.gson.Gson> {
			public static class: java.lang.Class<zendesk.core.ZendeskApplicationModule_ProvideGsonFactory>;
			public get(): com.google.gson.Gson;
			public static create(): zendesk.core.ZendeskApplicationModule_ProvideGsonFactory;
			public constructor();
			public static provideGson(): com.google.gson.Gson;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskApplicationModule_ProvideHttpLoggingInterceptorFactory extends dagger.internal.Factory<okhttp3.logging.HttpLoggingInterceptor> {
			public static class: java.lang.Class<zendesk.core.ZendeskApplicationModule_ProvideHttpLoggingInterceptorFactory>;
			public static provideHttpLoggingInterceptor(): okhttp3.logging.HttpLoggingInterceptor;
			public constructor();
			public static create(): zendesk.core.ZendeskApplicationModule_ProvideHttpLoggingInterceptorFactory;
			public get(): okhttp3.logging.HttpLoggingInterceptor;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskApplicationModule_ProvideZendeskFactory extends dagger.internal.Factory<zendesk.core.ZendeskShadow> {
			public static class: java.lang.Class<zendesk.core.ZendeskApplicationModule_ProvideZendeskFactory>;
			public get(): zendesk.core.ZendeskShadow;
			public static create(param0: javax.inject.Provider<zendesk.core.Storage>, param1: javax.inject.Provider<zendesk.core.LegacyIdentityMigrator>, param2: javax.inject.Provider<zendesk.core.IdentityManager>, param3: javax.inject.Provider<zendesk.core.BlipsCoreProvider>, param4: javax.inject.Provider<zendesk.core.PushRegistrationProvider>, param5: javax.inject.Provider<zendesk.core.CoreModule>, param6: javax.inject.Provider<zendesk.core.ProviderStore>): zendesk.core.ZendeskApplicationModule_ProvideZendeskFactory;
			public static provideZendesk(param0: any, param1: any, param2: any, param3: any, param4: zendesk.core.PushRegistrationProvider, param5: zendesk.core.CoreModule, param6: zendesk.core.ProviderStore): zendesk.core.ZendeskShadow;
			public constructor(param0: javax.inject.Provider<zendesk.core.Storage>, param1: javax.inject.Provider<zendesk.core.LegacyIdentityMigrator>, param2: javax.inject.Provider<zendesk.core.IdentityManager>, param3: javax.inject.Provider<zendesk.core.BlipsCoreProvider>, param4: javax.inject.Provider<zendesk.core.PushRegistrationProvider>, param5: javax.inject.Provider<zendesk.core.CoreModule>, param6: javax.inject.Provider<zendesk.core.ProviderStore>);
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskApplicationModule_ProvideZendeskLocaleConverterFactory extends dagger.internal.Factory<zendesk.core.ZendeskLocaleConverter> {
			public static class: java.lang.Class<zendesk.core.ZendeskApplicationModule_ProvideZendeskLocaleConverterFactory>;
			public static create(param0: zendesk.core.ZendeskApplicationModule): zendesk.core.ZendeskApplicationModule_ProvideZendeskLocaleConverterFactory;
			public get(): zendesk.core.ZendeskLocaleConverter;
			public constructor(param0: zendesk.core.ZendeskApplicationModule);
			public static provideZendeskLocaleConverter(param0: zendesk.core.ZendeskApplicationModule): zendesk.core.ZendeskLocaleConverter;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskAuthHeaderInterceptor {
			public static class: java.lang.Class<zendesk.core.ZendeskAuthHeaderInterceptor>;
			public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskAuthenticationProvider extends zendesk.core.AuthenticationProvider {
			public static class: java.lang.Class<zendesk.core.ZendeskAuthenticationProvider>;
			public getIdentity(): zendesk.core.Identity;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskBase64Serializer extends zendesk.core.Serializer {
			public static class: java.lang.Class<zendesk.core.ZendeskBase64Serializer>;
			public deserialize(param0: any, param1: java.lang.Class): any;
			public serialize(param0: any): string;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskBlipsProvider implements zendesk.core.BlipsProvider, zendesk.core.BlipsCoreProvider {
			public static class: java.lang.Class<zendesk.core.ZendeskBlipsProvider>;
			public sendBlip(param0: zendesk.core.UserAction, param1: zendesk.core.BlipsGroup): void;
			public corePushDisabled(param0: java.lang.Long): void;
			public coreInitialized(): void;
			public sendBlip(param0: zendesk.core.PageView, param1: zendesk.core.BlipsGroup): void;
			public corePushEnabled(): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskCoreSettingsStorage extends zendesk.core.CoreSettingsStorage {
			public static class: java.lang.Class<zendesk.core.ZendeskCoreSettingsStorage>;
			public getBlipsSettings(): zendesk.core.BlipsSettings;
			public getCoreSettings(): zendesk.core.CoreSettings;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskDiskLruCache extends zendesk.core.BaseStorage {
			public static class: java.lang.Class<zendesk.core.ZendeskDiskLruCache>;
			public get(param0: string): string;
			public clear(): void;
			public put(param0: string, param1: any): void;
			public remove(param0: string): void;
			public get(param0: string, param1: java.lang.Class): any;
			public put(param0: string, param1: string): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskIdentityManager extends zendesk.core.IdentityManager {
			public static class: java.lang.Class<zendesk.core.ZendeskIdentityManager>;
			public getSdkGuid(): string;
			public storeAccessToken(param0: zendesk.core.AccessToken): void;
			public updateAndPersistIdentity(param0: zendesk.core.Identity): zendesk.core.Identity;
			public getUserId(): java.lang.Long;
			public getIdentity(): zendesk.core.Identity;
			public identityIsDifferent(param0: zendesk.core.Identity): boolean;
			public getBlipsUuid(): string;
			public getStoredAccessTokenAsBearerToken(): string;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskIdentityStorage extends zendesk.core.IdentityStorage {
			public static class: java.lang.Class<zendesk.core.ZendeskIdentityStorage>;
			public clear(): void;
			public storeAccessToken(param0: zendesk.core.AccessToken): void;
			public storeIdentity(param0: zendesk.core.Identity): void;
			public getUserId(): java.lang.Long;
			public getIdentity(): zendesk.core.Identity;
			public updateSdkGuid(): string;
			public getStoredAccessToken(): zendesk.core.AccessToken;
			public getUuid(): string;
			public getBlipsUuid(): string;
			public updateBlipsUuid(): string;
			public storeSdkGuid(param0: string): void;
			public storeUserId(param0: java.lang.Long): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskLocaleConverter {
			public static class: java.lang.Class<zendesk.core.ZendeskLocaleConverter>;
			public toHelpCenterLocaleString(param0: java.util.Locale): string;
			public constructor();
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskLruMemoryCache extends zendesk.core.MemoryCache {
			public static class: java.lang.Class<zendesk.core.ZendeskLruMemoryCache>;
			public cache: globalAndroid.util.LruCache<string,any>;
			public getOrDefault(param0: string, param1: any): any;
			public clear(): void;
			public get(param0: string): any;
			public put(param0: string, param1: any): void;
			public remove(param0: string): void;
			public contains(param0: string): boolean;
			public constructor();
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkInfoProvider implements zendesk.core.NetworkInfoProvider, zendesk.core.NetworkAware {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkInfoProvider>;
			public clearNetworkAwareListeners(): void;
			public removeNetworkAwareListener(param0: java.lang.Integer): void;
			public isNetworkAvailable(): boolean;
			public onNetworkAvailable(): void;
			public addNetworkAwareListener(param0: java.lang.Integer, param1: zendesk.core.NetworkAware): void;
			public register(): void;
			public addRetryAction(param0: java.lang.Integer, param1: zendesk.core.RetryAction): void;
			public removeRetryAction(param0: java.lang.Integer): void;
			public clearRetryActions(): void;
			public unregister(): void;
			public onNetworkUnavailable(): void;
		}
		export module ZendeskNetworkInfoProvider {
			export class CurrentState {
				public static class: java.lang.Class<zendesk.core.ZendeskNetworkInfoProvider.CurrentState>;
				public static CONNECTED: zendesk.core.ZendeskNetworkInfoProvider.CurrentState;
				public static DISCONNECTED: zendesk.core.ZendeskNetworkInfoProvider.CurrentState;
				public static values(): native.Array<zendesk.core.ZendeskNetworkInfoProvider.CurrentState>;
				public static valueOf(param0: string): zendesk.core.ZendeskNetworkInfoProvider.CurrentState;
			}
			export class NetworkAvailabilityBroadcastReceiver {
				public static class: java.lang.Class<zendesk.core.ZendeskNetworkInfoProvider.NetworkAvailabilityBroadcastReceiver>;
				public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
			}
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule>;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule_ProvideAcceptLanguageHeaderInterceptorFactory extends dagger.internal.Factory<zendesk.core.AcceptLanguageHeaderInterceptor> {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule_ProvideAcceptLanguageHeaderInterceptorFactory>;
			public static provideAcceptLanguageHeaderInterceptor(param0: globalAndroid.content.Context): zendesk.core.AcceptLanguageHeaderInterceptor;
			public get(): zendesk.core.AcceptLanguageHeaderInterceptor;
			public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>);
			public static create(param0: javax.inject.Provider<globalAndroid.content.Context>): zendesk.core.ZendeskNetworkModule_ProvideAcceptLanguageHeaderInterceptorFactory;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule_ProvideAccessInterceptorFactory extends dagger.internal.Factory<zendesk.core.ZendeskAccessInterceptor> {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule_ProvideAccessInterceptorFactory>;
			public static create(param0: javax.inject.Provider<zendesk.core.IdentityManager>, param1: javax.inject.Provider<zendesk.core.AccessProvider>, param2: javax.inject.Provider<zendesk.core.Storage>, param3: javax.inject.Provider<zendesk.core.CoreSettingsStorage>): zendesk.core.ZendeskNetworkModule_ProvideAccessInterceptorFactory;
			public get(): zendesk.core.ZendeskAccessInterceptor;
			public constructor(param0: javax.inject.Provider<zendesk.core.IdentityManager>, param1: javax.inject.Provider<zendesk.core.AccessProvider>, param2: javax.inject.Provider<zendesk.core.Storage>, param3: javax.inject.Provider<zendesk.core.CoreSettingsStorage>);
			public static provideAccessInterceptor(param0: any, param1: any, param2: any, param3: any): zendesk.core.ZendeskAccessInterceptor;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule_ProvideAuthHeaderInterceptorFactory extends dagger.internal.Factory<zendesk.core.ZendeskAuthHeaderInterceptor> {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule_ProvideAuthHeaderInterceptorFactory>;
			public static provideAuthHeaderInterceptor(param0: any): zendesk.core.ZendeskAuthHeaderInterceptor;
			public get(): zendesk.core.ZendeskAuthHeaderInterceptor;
			public constructor(param0: javax.inject.Provider<zendesk.core.IdentityManager>);
			public static create(param0: javax.inject.Provider<zendesk.core.IdentityManager>): zendesk.core.ZendeskNetworkModule_ProvideAuthHeaderInterceptorFactory;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule_ProvideBaseOkHttpClientFactory extends dagger.internal.Factory<okhttp3.OkHttpClient> {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule_ProvideBaseOkHttpClientFactory>;
			public constructor(param0: zendesk.core.ZendeskNetworkModule, param1: javax.inject.Provider<okhttp3.logging.HttpLoggingInterceptor>, param2: javax.inject.Provider<zendesk.core.ZendeskOauthIdHeaderInterceptor>, param3: javax.inject.Provider<zendesk.core.UserAgentAndClientHeadersInterceptor>, param4: javax.inject.Provider<java.util.concurrent.ExecutorService>);
			public static create(param0: zendesk.core.ZendeskNetworkModule, param1: javax.inject.Provider<okhttp3.logging.HttpLoggingInterceptor>, param2: javax.inject.Provider<zendesk.core.ZendeskOauthIdHeaderInterceptor>, param3: javax.inject.Provider<zendesk.core.UserAgentAndClientHeadersInterceptor>, param4: javax.inject.Provider<java.util.concurrent.ExecutorService>): zendesk.core.ZendeskNetworkModule_ProvideBaseOkHttpClientFactory;
			public static provideBaseOkHttpClient(param0: zendesk.core.ZendeskNetworkModule, param1: okhttp3.logging.HttpLoggingInterceptor, param2: any, param3: any, param4: java.util.concurrent.ExecutorService): okhttp3.OkHttpClient;
			public get(): okhttp3.OkHttpClient;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule_ProvideCachingInterceptorFactory extends dagger.internal.Factory<zendesk.core.CachingInterceptor> {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule_ProvideCachingInterceptorFactory>;
			public get(): zendesk.core.CachingInterceptor;
			public static create(param0: javax.inject.Provider<zendesk.core.BaseStorage>): zendesk.core.ZendeskNetworkModule_ProvideCachingInterceptorFactory;
			public constructor(param0: javax.inject.Provider<zendesk.core.BaseStorage>);
			public static provideCachingInterceptor(param0: zendesk.core.BaseStorage): zendesk.core.CachingInterceptor;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule_ProvideCoreOkHttpClientFactory extends dagger.internal.Factory<okhttp3.OkHttpClient> {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule_ProvideCoreOkHttpClientFactory>;
			public static provideCoreOkHttpClient(param0: okhttp3.OkHttpClient, param1: any, param2: any): okhttp3.OkHttpClient;
			public static create(param0: javax.inject.Provider<okhttp3.OkHttpClient>, param1: javax.inject.Provider<zendesk.core.AcceptLanguageHeaderInterceptor>, param2: javax.inject.Provider<zendesk.core.AcceptHeaderInterceptor>): zendesk.core.ZendeskNetworkModule_ProvideCoreOkHttpClientFactory;
			public constructor(param0: javax.inject.Provider<okhttp3.OkHttpClient>, param1: javax.inject.Provider<zendesk.core.AcceptLanguageHeaderInterceptor>, param2: javax.inject.Provider<zendesk.core.AcceptHeaderInterceptor>);
			public get(): okhttp3.OkHttpClient;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule_ProvideCoreRetrofitFactory extends dagger.internal.Factory<retrofit2.Retrofit> {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule_ProvideCoreRetrofitFactory>;
			public constructor(param0: javax.inject.Provider<zendesk.core.ApplicationConfiguration>, param1: javax.inject.Provider<com.google.gson.Gson>, param2: javax.inject.Provider<okhttp3.OkHttpClient>);
			public static provideCoreRetrofit(param0: zendesk.core.ApplicationConfiguration, param1: com.google.gson.Gson, param2: okhttp3.OkHttpClient): retrofit2.Retrofit;
			public static create(param0: javax.inject.Provider<zendesk.core.ApplicationConfiguration>, param1: javax.inject.Provider<com.google.gson.Gson>, param2: javax.inject.Provider<okhttp3.OkHttpClient>): zendesk.core.ZendeskNetworkModule_ProvideCoreRetrofitFactory;
			public get(): retrofit2.Retrofit;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule_ProvideMediaOkHttpClientFactory extends dagger.internal.Factory<okhttp3.OkHttpClient> {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule_ProvideMediaOkHttpClientFactory>;
			public static create(param0: javax.inject.Provider<okhttp3.OkHttpClient>, param1: javax.inject.Provider<zendesk.core.ZendeskAccessInterceptor>, param2: javax.inject.Provider<zendesk.core.ZendeskAuthHeaderInterceptor>, param3: javax.inject.Provider<zendesk.core.ZendeskSettingsInterceptor>, param4: javax.inject.Provider<zendesk.core.CachingInterceptor>, param5: javax.inject.Provider<zendesk.core.ZendeskUnauthorizedInterceptor>): zendesk.core.ZendeskNetworkModule_ProvideMediaOkHttpClientFactory;
			public static provideMediaOkHttpClient(param0: okhttp3.OkHttpClient, param1: any, param2: any, param3: any, param4: any, param5: any): okhttp3.OkHttpClient;
			public constructor(param0: javax.inject.Provider<okhttp3.OkHttpClient>, param1: javax.inject.Provider<zendesk.core.ZendeskAccessInterceptor>, param2: javax.inject.Provider<zendesk.core.ZendeskAuthHeaderInterceptor>, param3: javax.inject.Provider<zendesk.core.ZendeskSettingsInterceptor>, param4: javax.inject.Provider<zendesk.core.CachingInterceptor>, param5: javax.inject.Provider<zendesk.core.ZendeskUnauthorizedInterceptor>);
			public get(): okhttp3.OkHttpClient;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule_ProvideOkHttpClientFactory extends dagger.internal.Factory<okhttp3.OkHttpClient> {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule_ProvideOkHttpClientFactory>;
			public static create(param0: javax.inject.Provider<okhttp3.OkHttpClient>, param1: javax.inject.Provider<zendesk.core.ZendeskAccessInterceptor>, param2: javax.inject.Provider<zendesk.core.ZendeskUnauthorizedInterceptor>, param3: javax.inject.Provider<zendesk.core.ZendeskAuthHeaderInterceptor>, param4: javax.inject.Provider<zendesk.core.ZendeskSettingsInterceptor>, param5: javax.inject.Provider<zendesk.core.AcceptHeaderInterceptor>, param6: javax.inject.Provider<okhttp3.Cache>): zendesk.core.ZendeskNetworkModule_ProvideOkHttpClientFactory;
			public static provideOkHttpClient(param0: okhttp3.OkHttpClient, param1: any, param2: any, param3: any, param4: any, param5: any, param6: okhttp3.Cache): okhttp3.OkHttpClient;
			public get(): okhttp3.OkHttpClient;
			public constructor(param0: javax.inject.Provider<okhttp3.OkHttpClient>, param1: javax.inject.Provider<zendesk.core.ZendeskAccessInterceptor>, param2: javax.inject.Provider<zendesk.core.ZendeskUnauthorizedInterceptor>, param3: javax.inject.Provider<zendesk.core.ZendeskAuthHeaderInterceptor>, param4: javax.inject.Provider<zendesk.core.ZendeskSettingsInterceptor>, param5: javax.inject.Provider<zendesk.core.AcceptHeaderInterceptor>, param6: javax.inject.Provider<okhttp3.Cache>);
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule_ProvideRestServiceProviderFactory extends dagger.internal.Factory<zendesk.core.RestServiceProvider> {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule_ProvideRestServiceProviderFactory>;
			public static create(param0: javax.inject.Provider<retrofit2.Retrofit>, param1: javax.inject.Provider<okhttp3.OkHttpClient>, param2: javax.inject.Provider<okhttp3.OkHttpClient>, param3: javax.inject.Provider<okhttp3.OkHttpClient>): zendesk.core.ZendeskNetworkModule_ProvideRestServiceProviderFactory;
			public constructor(param0: javax.inject.Provider<retrofit2.Retrofit>, param1: javax.inject.Provider<okhttp3.OkHttpClient>, param2: javax.inject.Provider<okhttp3.OkHttpClient>, param3: javax.inject.Provider<okhttp3.OkHttpClient>);
			public get(): zendesk.core.RestServiceProvider;
			public static provideRestServiceProvider(param0: retrofit2.Retrofit, param1: okhttp3.OkHttpClient, param2: okhttp3.OkHttpClient, param3: okhttp3.OkHttpClient): zendesk.core.RestServiceProvider;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule_ProvideRetrofitFactory extends dagger.internal.Factory<retrofit2.Retrofit> {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule_ProvideRetrofitFactory>;
			public constructor(param0: javax.inject.Provider<zendesk.core.ApplicationConfiguration>, param1: javax.inject.Provider<com.google.gson.Gson>, param2: javax.inject.Provider<okhttp3.OkHttpClient>);
			public get(): retrofit2.Retrofit;
			public static provideRetrofit(param0: zendesk.core.ApplicationConfiguration, param1: com.google.gson.Gson, param2: okhttp3.OkHttpClient): retrofit2.Retrofit;
			public static create(param0: javax.inject.Provider<zendesk.core.ApplicationConfiguration>, param1: javax.inject.Provider<com.google.gson.Gson>, param2: javax.inject.Provider<okhttp3.OkHttpClient>): zendesk.core.ZendeskNetworkModule_ProvideRetrofitFactory;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule_ProvideSettingsInterceptorFactory extends dagger.internal.Factory<zendesk.core.ZendeskSettingsInterceptor> {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule_ProvideSettingsInterceptorFactory>;
			public static provideSettingsInterceptor(param0: any, param1: any): zendesk.core.ZendeskSettingsInterceptor;
			public static create(param0: javax.inject.Provider<zendesk.core.SdkSettingsProviderInternal>, param1: javax.inject.Provider<zendesk.core.SettingsStorage>): zendesk.core.ZendeskNetworkModule_ProvideSettingsInterceptorFactory;
			public constructor(param0: javax.inject.Provider<zendesk.core.SdkSettingsProviderInternal>, param1: javax.inject.Provider<zendesk.core.SettingsStorage>);
			public get(): zendesk.core.ZendeskSettingsInterceptor;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule_ProvideZendeskBasicHeadersInterceptorFactory extends dagger.internal.Factory<zendesk.core.ZendeskOauthIdHeaderInterceptor> {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule_ProvideZendeskBasicHeadersInterceptorFactory>;
			public constructor(param0: zendesk.core.ZendeskNetworkModule, param1: javax.inject.Provider<zendesk.core.ApplicationConfiguration>);
			public static provideZendeskBasicHeadersInterceptor(param0: zendesk.core.ZendeskNetworkModule, param1: zendesk.core.ApplicationConfiguration): zendesk.core.ZendeskOauthIdHeaderInterceptor;
			public get(): zendesk.core.ZendeskOauthIdHeaderInterceptor;
			public static create(param0: zendesk.core.ZendeskNetworkModule, param1: javax.inject.Provider<zendesk.core.ApplicationConfiguration>): zendesk.core.ZendeskNetworkModule_ProvideZendeskBasicHeadersInterceptorFactory;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule_ProvideZendeskUnauthorizedInterceptorFactory extends dagger.internal.Factory<zendesk.core.ZendeskUnauthorizedInterceptor> {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule_ProvideZendeskUnauthorizedInterceptorFactory>;
			public static create(param0: javax.inject.Provider<zendesk.core.SessionStorage>): zendesk.core.ZendeskNetworkModule_ProvideZendeskUnauthorizedInterceptorFactory;
			public get(): zendesk.core.ZendeskUnauthorizedInterceptor;
			public static provideZendeskUnauthorizedInterceptor(param0: zendesk.core.SessionStorage): zendesk.core.ZendeskUnauthorizedInterceptor;
			public constructor(param0: javax.inject.Provider<zendesk.core.SessionStorage>);
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule_ProvidesAcceptHeaderInterceptorFactory extends dagger.internal.Factory<zendesk.core.AcceptHeaderInterceptor> {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule_ProvidesAcceptHeaderInterceptorFactory>;
			public static create(): zendesk.core.ZendeskNetworkModule_ProvidesAcceptHeaderInterceptorFactory;
			public static providesAcceptHeaderInterceptor(): zendesk.core.AcceptHeaderInterceptor;
			public get(): zendesk.core.AcceptHeaderInterceptor;
			public constructor();
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule_ProvidesUserAgentHeaderInterceptorFactory extends dagger.internal.Factory<zendesk.core.UserAgentAndClientHeadersInterceptor> {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule_ProvidesUserAgentHeaderInterceptorFactory>;
			public static providesUserAgentHeaderInterceptor(param0: zendesk.core.ZendeskNetworkModule): zendesk.core.UserAgentAndClientHeadersInterceptor;
			public get(): zendesk.core.UserAgentAndClientHeadersInterceptor;
			public constructor(param0: zendesk.core.ZendeskNetworkModule);
			public static create(param0: zendesk.core.ZendeskNetworkModule): zendesk.core.ZendeskNetworkModule_ProvidesUserAgentHeaderInterceptorFactory;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule_Proxy {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule_Proxy>;
			public static newInstance(): zendesk.core.ZendeskNetworkModule;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskOauthIdHeaderInterceptor {
			public static class: java.lang.Class<zendesk.core.ZendeskOauthIdHeaderInterceptor>;
			public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
			public constructor(param0: string);
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProviderStore extends zendesk.core.ProviderStore {
			public static class: java.lang.Class<zendesk.core.ZendeskProviderStore>;
			public pushRegistrationProvider(): zendesk.core.PushRegistrationProvider;
			public userProvider(): zendesk.core.UserProvider;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule>;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ActionHandlerRegistryFactory extends dagger.internal.Factory<zendesk.core.ActionHandlerRegistry> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ActionHandlerRegistryFactory>;
			public get(): zendesk.core.ActionHandlerRegistry;
			public static create(): zendesk.core.ZendeskProvidersModule_ActionHandlerRegistryFactory;
			public static actionHandlerRegistry(): zendesk.core.ActionHandlerRegistry;
			public constructor();
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProvideAccessProviderFactory extends dagger.internal.Factory<zendesk.core.AccessProvider> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProvideAccessProviderFactory>;
			public constructor(param0: javax.inject.Provider<zendesk.core.IdentityManager>, param1: javax.inject.Provider<zendesk.core.AccessService>);
			public static create(param0: javax.inject.Provider<zendesk.core.IdentityManager>, param1: javax.inject.Provider<zendesk.core.AccessService>): zendesk.core.ZendeskProvidersModule_ProvideAccessProviderFactory;
			public static provideAccessProvider(param0: any, param1: any): zendesk.core.AccessProvider;
			public get(): zendesk.core.AccessProvider;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProvideAccessServiceFactory extends dagger.internal.Factory<zendesk.core.AccessService> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProvideAccessServiceFactory>;
			public constructor(param0: javax.inject.Provider<retrofit2.Retrofit>);
			public static create(param0: javax.inject.Provider<retrofit2.Retrofit>): zendesk.core.ZendeskProvidersModule_ProvideAccessServiceFactory;
			public static provideAccessService(param0: retrofit2.Retrofit): zendesk.core.AccessService;
			public get(): zendesk.core.AccessService;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProvideBlipsServiceFactory extends dagger.internal.Factory<zendesk.core.BlipsService> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProvideBlipsServiceFactory>;
			public constructor(param0: javax.inject.Provider<retrofit2.Retrofit>);
			public get(): zendesk.core.BlipsService;
			public static provideBlipsService(param0: retrofit2.Retrofit): zendesk.core.BlipsService;
			public static create(param0: javax.inject.Provider<retrofit2.Retrofit>): zendesk.core.ZendeskProvidersModule_ProvideBlipsServiceFactory;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProvideCoreSdkModuleFactory extends dagger.internal.Factory<zendesk.core.CoreModule> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProvideCoreSdkModuleFactory>;
			public get(): zendesk.core.CoreModule;
			public constructor(param0: javax.inject.Provider<zendesk.core.SettingsProvider>, param1: javax.inject.Provider<zendesk.core.RestServiceProvider>, param2: javax.inject.Provider<zendesk.core.BlipsProvider>, param3: javax.inject.Provider<zendesk.core.SessionStorage>, param4: javax.inject.Provider<zendesk.core.NetworkInfoProvider>, param5: javax.inject.Provider<zendesk.core.MemoryCache>, param6: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>, param7: javax.inject.Provider<java.util.concurrent.ScheduledExecutorService>, param8: javax.inject.Provider<globalAndroid.content.Context>, param9: javax.inject.Provider<zendesk.core.AuthenticationProvider>, param10: javax.inject.Provider<zendesk.core.ApplicationConfiguration>, param11: javax.inject.Provider<zendesk.core.PushRegistrationProvider>);
			public static create(param0: javax.inject.Provider<zendesk.core.SettingsProvider>, param1: javax.inject.Provider<zendesk.core.RestServiceProvider>, param2: javax.inject.Provider<zendesk.core.BlipsProvider>, param3: javax.inject.Provider<zendesk.core.SessionStorage>, param4: javax.inject.Provider<zendesk.core.NetworkInfoProvider>, param5: javax.inject.Provider<zendesk.core.MemoryCache>, param6: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>, param7: javax.inject.Provider<java.util.concurrent.ScheduledExecutorService>, param8: javax.inject.Provider<globalAndroid.content.Context>, param9: javax.inject.Provider<zendesk.core.AuthenticationProvider>, param10: javax.inject.Provider<zendesk.core.ApplicationConfiguration>, param11: javax.inject.Provider<zendesk.core.PushRegistrationProvider>): zendesk.core.ZendeskProvidersModule_ProvideCoreSdkModuleFactory;
			public static provideCoreSdkModule(param0: zendesk.core.SettingsProvider, param1: zendesk.core.RestServiceProvider, param2: zendesk.core.BlipsProvider, param3: zendesk.core.SessionStorage, param4: zendesk.core.NetworkInfoProvider, param5: zendesk.core.MemoryCache, param6: zendesk.core.ActionHandlerRegistry, param7: java.util.concurrent.ScheduledExecutorService, param8: globalAndroid.content.Context, param9: zendesk.core.AuthenticationProvider, param10: zendesk.core.ApplicationConfiguration, param11: zendesk.core.PushRegistrationProvider): zendesk.core.CoreModule;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProvideProviderStoreFactory extends dagger.internal.Factory<zendesk.core.ProviderStore> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProvideProviderStoreFactory>;
			public get(): zendesk.core.ProviderStore;
			public static provideProviderStore(param0: zendesk.core.UserProvider, param1: zendesk.core.PushRegistrationProvider): zendesk.core.ProviderStore;
			public constructor(param0: javax.inject.Provider<zendesk.core.UserProvider>, param1: javax.inject.Provider<zendesk.core.PushRegistrationProvider>);
			public static create(param0: javax.inject.Provider<zendesk.core.UserProvider>, param1: javax.inject.Provider<zendesk.core.PushRegistrationProvider>): zendesk.core.ZendeskProvidersModule_ProvideProviderStoreFactory;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProvidePushRegistrationProviderFactory extends dagger.internal.Factory<zendesk.core.PushRegistrationProvider> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProvidePushRegistrationProviderFactory>;
			public get(): zendesk.core.PushRegistrationProvider;
			public constructor(param0: javax.inject.Provider<zendesk.core.PushRegistrationService>, param1: javax.inject.Provider<zendesk.core.IdentityManager>, param2: javax.inject.Provider<zendesk.core.SettingsProvider>, param3: javax.inject.Provider<zendesk.core.BlipsCoreProvider>, param4: javax.inject.Provider<zendesk.core.PushDeviceIdStorage>, param5: javax.inject.Provider<globalAndroid.content.Context>);
			public static providePushRegistrationProvider(param0: any, param1: any, param2: zendesk.core.SettingsProvider, param3: any, param4: any, param5: globalAndroid.content.Context): zendesk.core.PushRegistrationProvider;
			public static create(param0: javax.inject.Provider<zendesk.core.PushRegistrationService>, param1: javax.inject.Provider<zendesk.core.IdentityManager>, param2: javax.inject.Provider<zendesk.core.SettingsProvider>, param3: javax.inject.Provider<zendesk.core.BlipsCoreProvider>, param4: javax.inject.Provider<zendesk.core.PushDeviceIdStorage>, param5: javax.inject.Provider<globalAndroid.content.Context>): zendesk.core.ZendeskProvidersModule_ProvidePushRegistrationProviderFactory;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProvidePushRegistrationServiceFactory extends dagger.internal.Factory<zendesk.core.PushRegistrationService> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProvidePushRegistrationServiceFactory>;
			public constructor(param0: javax.inject.Provider<retrofit2.Retrofit>);
			public static providePushRegistrationService(param0: retrofit2.Retrofit): zendesk.core.PushRegistrationService;
			public static create(param0: javax.inject.Provider<retrofit2.Retrofit>): zendesk.core.ZendeskProvidersModule_ProvidePushRegistrationServiceFactory;
			public get(): zendesk.core.PushRegistrationService;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProvideSdkSettingsProviderFactory extends dagger.internal.Factory<zendesk.core.SettingsProvider> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProvideSdkSettingsProviderFactory>;
			public constructor(param0: javax.inject.Provider<zendesk.core.ZendeskSettingsProvider>);
			public static create(param0: javax.inject.Provider<zendesk.core.ZendeskSettingsProvider>): zendesk.core.ZendeskProvidersModule_ProvideSdkSettingsProviderFactory;
			public get(): zendesk.core.SettingsProvider;
			public static provideSdkSettingsProvider(param0: any): zendesk.core.SettingsProvider;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProvideSdkSettingsProviderInternalFactory extends dagger.internal.Factory<zendesk.core.SdkSettingsProviderInternal> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProvideSdkSettingsProviderInternalFactory>;
			public constructor(param0: javax.inject.Provider<zendesk.core.ZendeskSettingsProvider>);
			public static create(param0: javax.inject.Provider<zendesk.core.ZendeskSettingsProvider>): zendesk.core.ZendeskProvidersModule_ProvideSdkSettingsProviderInternalFactory;
			public static provideSdkSettingsProviderInternal(param0: any): zendesk.core.SdkSettingsProviderInternal;
			public get(): zendesk.core.SdkSettingsProviderInternal;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProvideSdkSettingsServiceFactory extends dagger.internal.Factory<zendesk.core.SdkSettingsService> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProvideSdkSettingsServiceFactory>;
			public constructor(param0: javax.inject.Provider<retrofit2.Retrofit>);
			public get(): zendesk.core.SdkSettingsService;
			public static create(param0: javax.inject.Provider<retrofit2.Retrofit>): zendesk.core.ZendeskProvidersModule_ProvideSdkSettingsServiceFactory;
			public static provideSdkSettingsService(param0: retrofit2.Retrofit): zendesk.core.SdkSettingsService;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProvideUserProviderFactory extends dagger.internal.Factory<zendesk.core.UserProvider> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProvideUserProviderFactory>;
			public constructor(param0: javax.inject.Provider<zendesk.core.UserService>);
			public static create(param0: javax.inject.Provider<zendesk.core.UserService>): zendesk.core.ZendeskProvidersModule_ProvideUserProviderFactory;
			public get(): zendesk.core.UserProvider;
			public static provideUserProvider(param0: any): zendesk.core.UserProvider;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProvideUserServiceFactory extends dagger.internal.Factory<zendesk.core.UserService> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProvideUserServiceFactory>;
			public constructor(param0: javax.inject.Provider<retrofit2.Retrofit>);
			public get(): zendesk.core.UserService;
			public static provideUserService(param0: retrofit2.Retrofit): zendesk.core.UserService;
			public static create(param0: javax.inject.Provider<retrofit2.Retrofit>): zendesk.core.ZendeskProvidersModule_ProvideUserServiceFactory;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProvideZendeskSdkSettingsProviderFactory extends dagger.internal.Factory<zendesk.core.ZendeskSettingsProvider> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProvideZendeskSdkSettingsProviderFactory>;
			public get(): zendesk.core.ZendeskSettingsProvider;
			public static provideZendeskSdkSettingsProvider(param0: any, param1: any, param2: any, param3: zendesk.core.ActionHandlerRegistry, param4: any, param5: zendesk.core.ZendeskLocaleConverter, param6: zendesk.core.ApplicationConfiguration, param7: globalAndroid.content.Context): zendesk.core.ZendeskSettingsProvider;
			public constructor(param0: javax.inject.Provider<zendesk.core.SdkSettingsService>, param1: javax.inject.Provider<zendesk.core.SettingsStorage>, param2: javax.inject.Provider<zendesk.core.CoreSettingsStorage>, param3: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>, param4: javax.inject.Provider<zendesk.core.Serializer>, param5: javax.inject.Provider<zendesk.core.ZendeskLocaleConverter>, param6: javax.inject.Provider<zendesk.core.ApplicationConfiguration>, param7: javax.inject.Provider<globalAndroid.content.Context>);
			public static create(param0: javax.inject.Provider<zendesk.core.SdkSettingsService>, param1: javax.inject.Provider<zendesk.core.SettingsStorage>, param2: javax.inject.Provider<zendesk.core.CoreSettingsStorage>, param3: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>, param4: javax.inject.Provider<zendesk.core.Serializer>, param5: javax.inject.Provider<zendesk.core.ZendeskLocaleConverter>, param6: javax.inject.Provider<zendesk.core.ApplicationConfiguration>, param7: javax.inject.Provider<globalAndroid.content.Context>): zendesk.core.ZendeskProvidersModule_ProvideZendeskSdkSettingsProviderFactory;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProviderBlipsCoreProviderFactory extends dagger.internal.Factory<zendesk.core.BlipsCoreProvider> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProviderBlipsCoreProviderFactory>;
			public static create(param0: javax.inject.Provider<zendesk.core.ZendeskBlipsProvider>): zendesk.core.ZendeskProvidersModule_ProviderBlipsCoreProviderFactory;
			public get(): zendesk.core.BlipsCoreProvider;
			public static providerBlipsCoreProvider(param0: any): zendesk.core.BlipsCoreProvider;
			public constructor(param0: javax.inject.Provider<zendesk.core.ZendeskBlipsProvider>);
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProviderBlipsProviderFactory extends dagger.internal.Factory<zendesk.core.BlipsProvider> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProviderBlipsProviderFactory>;
			public static create(param0: javax.inject.Provider<zendesk.core.ZendeskBlipsProvider>): zendesk.core.ZendeskProvidersModule_ProviderBlipsProviderFactory;
			public static providerBlipsProvider(param0: any): zendesk.core.BlipsProvider;
			public get(): zendesk.core.BlipsProvider;
			public constructor(param0: javax.inject.Provider<zendesk.core.ZendeskBlipsProvider>);
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProviderConnectivityManagerFactory extends dagger.internal.Factory<globalAndroid.net.ConnectivityManager> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProviderConnectivityManagerFactory>;
			public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>);
			public get(): globalAndroid.net.ConnectivityManager;
			public static create(param0: javax.inject.Provider<globalAndroid.content.Context>): zendesk.core.ZendeskProvidersModule_ProviderConnectivityManagerFactory;
			public static providerConnectivityManager(param0: globalAndroid.content.Context): globalAndroid.net.ConnectivityManager;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProviderNetworkInfoProviderFactory extends dagger.internal.Factory<zendesk.core.NetworkInfoProvider> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProviderNetworkInfoProviderFactory>;
			public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<globalAndroid.net.ConnectivityManager>);
			public static providerNetworkInfoProvider(param0: globalAndroid.content.Context, param1: globalAndroid.net.ConnectivityManager): zendesk.core.NetworkInfoProvider;
			public get(): zendesk.core.NetworkInfoProvider;
			public static create(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<globalAndroid.net.ConnectivityManager>): zendesk.core.ZendeskProvidersModule_ProviderNetworkInfoProviderFactory;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProviderZendeskBlipsProviderFactory extends dagger.internal.Factory<zendesk.core.ZendeskBlipsProvider> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProviderZendeskBlipsProviderFactory>;
			public get(): zendesk.core.ZendeskBlipsProvider;
			public static create(param0: javax.inject.Provider<zendesk.core.BlipsService>, param1: javax.inject.Provider<zendesk.core.DeviceInfo>, param2: javax.inject.Provider<zendesk.core.Serializer>, param3: javax.inject.Provider<zendesk.core.IdentityManager>, param4: javax.inject.Provider<zendesk.core.ApplicationConfiguration>, param5: javax.inject.Provider<zendesk.core.CoreSettingsStorage>, param6: javax.inject.Provider<java.util.concurrent.ExecutorService>): zendesk.core.ZendeskProvidersModule_ProviderZendeskBlipsProviderFactory;
			public static providerZendeskBlipsProvider(param0: any, param1: any, param2: any, param3: any, param4: zendesk.core.ApplicationConfiguration, param5: any, param6: java.util.concurrent.ExecutorService): zendesk.core.ZendeskBlipsProvider;
			public constructor(param0: javax.inject.Provider<zendesk.core.BlipsService>, param1: javax.inject.Provider<zendesk.core.DeviceInfo>, param2: javax.inject.Provider<zendesk.core.Serializer>, param3: javax.inject.Provider<zendesk.core.IdentityManager>, param4: javax.inject.Provider<zendesk.core.ApplicationConfiguration>, param5: javax.inject.Provider<zendesk.core.CoreSettingsStorage>, param6: javax.inject.Provider<java.util.concurrent.ExecutorService>);
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_Proxy {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_Proxy>;
			public static newInstance(): zendesk.core.ZendeskProvidersModule;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskPushDeviceIdStorage extends zendesk.core.PushDeviceIdStorage {
			public static class: java.lang.Class<zendesk.core.ZendeskPushDeviceIdStorage>;
			public removePushDeviceId(): void;
			public hasStoredDeviceId(): boolean;
			public getPushDeviceId(): string;
			public storePushDeviceId(param0: string): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskPushRegistrationProvider extends zendesk.core.PushRegistrationProvider {
			public static class: java.lang.Class<zendesk.core.ZendeskPushRegistrationProvider>;
			public registerWithDeviceIdentifier(param0: string, param1: com.zendesk.service.ZendeskCallback<string>): void;
			public registerWithUAChannelId(param0: string, param1: com.zendesk.service.ZendeskCallback<string>): void;
			public unregisterDevice(param0: com.zendesk.service.ZendeskCallback<java.lang.Void>): void;
			public isRegisteredForPush(): boolean;
		}
		export module ZendeskPushRegistrationProvider {
			export class TokenType {
				public static class: java.lang.Class<zendesk.core.ZendeskPushRegistrationProvider.TokenType>;
				public static Identifier: zendesk.core.ZendeskPushRegistrationProvider.TokenType;
				public static UrbanAirshipChannelId: zendesk.core.ZendeskPushRegistrationProvider.TokenType;
				public static valueOf(param0: string): zendesk.core.ZendeskPushRegistrationProvider.TokenType;
				public static values(): native.Array<zendesk.core.ZendeskPushRegistrationProvider.TokenType>;
			}
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskRestServiceProvider extends zendesk.core.RestServiceProvider {
			public static class: java.lang.Class<zendesk.core.ZendeskRestServiceProvider>;
			public createRestService(param0: java.lang.Class, param1: string, param2: string, param3: zendesk.core.CustomNetworkConfig): any;
			public createRestService(param0: java.lang.Class, param1: string, param2: string): any;
			public getMediaOkHttpClient(): okhttp3.OkHttpClient;
			public getCoreOkHttpClient(): okhttp3.OkHttpClient;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskSessionStorage extends zendesk.core.SessionStorage {
			public static class: java.lang.Class<zendesk.core.ZendeskSessionStorage>;
			public clear(): void;
			public getZendeskCacheDir(): java.io.File;
			public getAdditionalSdkStorage(): zendesk.core.BaseStorage;
			public getZendeskDataDir(): java.io.File;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskSettingsInterceptor {
			public static class: java.lang.Class<zendesk.core.ZendeskSettingsInterceptor>;
			public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskSettingsProvider implements zendesk.core.SettingsProvider, zendesk.core.SdkSettingsProviderInternal {
			public static class: java.lang.Class<zendesk.core.ZendeskSettingsProvider>;
			public getSettingsForSdk(param0: string, param1: java.lang.Class, param2: com.zendesk.service.ZendeskCallback<any>): void;
			public getBlipsSettings(): zendesk.core.BlipsSettings;
			public getCoreSettings(): zendesk.core.CoreSettings;
			public getCoreSettings(param0: com.zendesk.service.ZendeskCallback<zendesk.core.CoreSettings>): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskSettingsStorage extends zendesk.core.SettingsStorage {
			public static class: java.lang.Class<zendesk.core.ZendeskSettingsStorage>;
			public clear(): void;
			public getSettings(param0: string, param1: java.lang.Class): any;
			public areSettingsUpToDate(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
			public storeRawSettings(param0: java.util.Map<string,com.google.gson.JsonElement>): void;
			public hasStoredSettings(): boolean;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskShadow {
			public static class: java.lang.Class<zendesk.core.ZendeskShadow>;
			public setIdentity(param0: zendesk.core.Identity): void;
			public providers(): zendesk.core.ProviderStore;
			public getIdentity(): zendesk.core.Identity;
			public coreModule(): zendesk.core.CoreModule;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorage extends zendesk.core.Storage {
			public static class: java.lang.Class<zendesk.core.ZendeskStorage>;
			public clear(): void;
			public hasSdkConfigChanged(param0: zendesk.core.ApplicationConfiguration): boolean;
			public storeSdkHash(param0: zendesk.core.ApplicationConfiguration): void;
			public getSessionStorage(): zendesk.core.SessionStorage;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule>;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvideAdditionalSdkBaseStorageFactory extends dagger.internal.Factory<zendesk.core.BaseStorage> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvideAdditionalSdkBaseStorageFactory>;
			public static provideAdditionalSdkBaseStorage(param0: globalAndroid.content.Context, param1: any): zendesk.core.BaseStorage;
			public get(): zendesk.core.BaseStorage;
			public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<zendesk.core.Serializer>);
			public static create(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<zendesk.core.Serializer>): zendesk.core.ZendeskStorageModule_ProvideAdditionalSdkBaseStorageFactory;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvideAuthProviderFactory extends dagger.internal.Factory<zendesk.core.AuthenticationProvider> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvideAuthProviderFactory>;
			public static create(param0: javax.inject.Provider<zendesk.core.IdentityManager>): zendesk.core.ZendeskStorageModule_ProvideAuthProviderFactory;
			public static provideAuthProvider(param0: any): zendesk.core.AuthenticationProvider;
			public get(): zendesk.core.AuthenticationProvider;
			public constructor(param0: javax.inject.Provider<zendesk.core.IdentityManager>);
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvideCacheFactory extends dagger.internal.Factory<okhttp3.Cache> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvideCacheFactory>;
			public constructor(param0: javax.inject.Provider<java.io.File>);
			public static create(param0: javax.inject.Provider<java.io.File>): zendesk.core.ZendeskStorageModule_ProvideCacheFactory;
			public static provideCache(param0: java.io.File): okhttp3.Cache;
			public get(): okhttp3.Cache;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvideCoreSettingsStorageFactory extends dagger.internal.Factory<zendesk.core.CoreSettingsStorage> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvideCoreSettingsStorageFactory>;
			public static create(param0: javax.inject.Provider<zendesk.core.SettingsStorage>): zendesk.core.ZendeskStorageModule_ProvideCoreSettingsStorageFactory;
			public get(): zendesk.core.CoreSettingsStorage;
			public static provideCoreSettingsStorage(param0: any): zendesk.core.CoreSettingsStorage;
			public constructor(param0: javax.inject.Provider<zendesk.core.SettingsStorage>);
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvideIdentityBaseStorageFactory extends dagger.internal.Factory<zendesk.core.BaseStorage> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvideIdentityBaseStorageFactory>;
			public static create(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<zendesk.core.Serializer>): zendesk.core.ZendeskStorageModule_ProvideIdentityBaseStorageFactory;
			public get(): zendesk.core.BaseStorage;
			public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<zendesk.core.Serializer>);
			public static provideIdentityBaseStorage(param0: globalAndroid.content.Context, param1: any): zendesk.core.BaseStorage;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvideIdentityManagerFactory extends dagger.internal.Factory<zendesk.core.IdentityManager> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvideIdentityManagerFactory>;
			public static create(param0: javax.inject.Provider<zendesk.core.IdentityStorage>): zendesk.core.ZendeskStorageModule_ProvideIdentityManagerFactory;
			public static provideIdentityManager(param0: any): zendesk.core.IdentityManager;
			public constructor(param0: javax.inject.Provider<zendesk.core.IdentityStorage>);
			public get(): zendesk.core.IdentityManager;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvideIdentityStorageFactory extends dagger.internal.Factory<zendesk.core.IdentityStorage> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvideIdentityStorageFactory>;
			public static provideIdentityStorage(param0: zendesk.core.BaseStorage): zendesk.core.IdentityStorage;
			public constructor(param0: javax.inject.Provider<zendesk.core.BaseStorage>);
			public get(): zendesk.core.IdentityStorage;
			public static create(param0: javax.inject.Provider<zendesk.core.BaseStorage>): zendesk.core.ZendeskStorageModule_ProvideIdentityStorageFactory;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvideLegacyIdentityBaseStorageFactory extends dagger.internal.Factory<zendesk.core.SharedPreferencesStorage> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvideLegacyIdentityBaseStorageFactory>;
			public static create(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<zendesk.core.Serializer>): zendesk.core.ZendeskStorageModule_ProvideLegacyIdentityBaseStorageFactory;
			public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<zendesk.core.Serializer>);
			public get(): zendesk.core.SharedPreferencesStorage;
			public static provideLegacyIdentityBaseStorage(param0: globalAndroid.content.Context, param1: any): zendesk.core.SharedPreferencesStorage;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvideLegacyIdentityStorageFactory extends dagger.internal.Factory<zendesk.core.LegacyIdentityMigrator> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvideLegacyIdentityStorageFactory>;
			public static provideLegacyIdentityStorage(param0: any, param1: any, param2: any, param3: any, param4: any): zendesk.core.LegacyIdentityMigrator;
			public constructor(param0: javax.inject.Provider<zendesk.core.SharedPreferencesStorage>, param1: javax.inject.Provider<zendesk.core.SharedPreferencesStorage>, param2: javax.inject.Provider<zendesk.core.IdentityStorage>, param3: javax.inject.Provider<zendesk.core.IdentityManager>, param4: javax.inject.Provider<zendesk.core.PushDeviceIdStorage>);
			public get(): zendesk.core.LegacyIdentityMigrator;
			public static create(param0: javax.inject.Provider<zendesk.core.SharedPreferencesStorage>, param1: javax.inject.Provider<zendesk.core.SharedPreferencesStorage>, param2: javax.inject.Provider<zendesk.core.IdentityStorage>, param3: javax.inject.Provider<zendesk.core.IdentityManager>, param4: javax.inject.Provider<zendesk.core.PushDeviceIdStorage>): zendesk.core.ZendeskStorageModule_ProvideLegacyIdentityStorageFactory;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvideLegacyPushBaseStorageFactory extends dagger.internal.Factory<zendesk.core.SharedPreferencesStorage> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvideLegacyPushBaseStorageFactory>;
			public static provideLegacyPushBaseStorage(param0: globalAndroid.content.Context, param1: any): zendesk.core.SharedPreferencesStorage;
			public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<zendesk.core.Serializer>);
			public get(): zendesk.core.SharedPreferencesStorage;
			public static create(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<zendesk.core.Serializer>): zendesk.core.ZendeskStorageModule_ProvideLegacyPushBaseStorageFactory;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvideMemoryCacheFactory extends dagger.internal.Factory<zendesk.core.MemoryCache> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvideMemoryCacheFactory>;
			public static provideMemoryCache(): zendesk.core.MemoryCache;
			public static create(): zendesk.core.ZendeskStorageModule_ProvideMemoryCacheFactory;
			public get(): zendesk.core.MemoryCache;
			public constructor();
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvidePushDeviceIdStorageFactory extends dagger.internal.Factory<zendesk.core.PushDeviceIdStorage> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvidePushDeviceIdStorageFactory>;
			public static providePushDeviceIdStorage(param0: zendesk.core.BaseStorage): zendesk.core.PushDeviceIdStorage;
			public constructor(param0: javax.inject.Provider<zendesk.core.BaseStorage>);
			public static create(param0: javax.inject.Provider<zendesk.core.BaseStorage>): zendesk.core.ZendeskStorageModule_ProvidePushDeviceIdStorageFactory;
			public get(): zendesk.core.PushDeviceIdStorage;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvideSdkBaseStorageFactory extends dagger.internal.Factory<zendesk.core.BaseStorage> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvideSdkBaseStorageFactory>;
			public static create(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<zendesk.core.Serializer>): zendesk.core.ZendeskStorageModule_ProvideSdkBaseStorageFactory;
			public static provideSdkBaseStorage(param0: globalAndroid.content.Context, param1: any): zendesk.core.BaseStorage;
			public get(): zendesk.core.BaseStorage;
			public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<zendesk.core.Serializer>);
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvideSdkStorageFactory extends dagger.internal.Factory<zendesk.core.Storage> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvideSdkStorageFactory>;
			public static create(param0: javax.inject.Provider<zendesk.core.SettingsStorage>, param1: javax.inject.Provider<zendesk.core.SessionStorage>, param2: javax.inject.Provider<zendesk.core.BaseStorage>, param3: javax.inject.Provider<zendesk.core.MemoryCache>): zendesk.core.ZendeskStorageModule_ProvideSdkStorageFactory;
			public get(): zendesk.core.Storage;
			public constructor(param0: javax.inject.Provider<zendesk.core.SettingsStorage>, param1: javax.inject.Provider<zendesk.core.SessionStorage>, param2: javax.inject.Provider<zendesk.core.BaseStorage>, param3: javax.inject.Provider<zendesk.core.MemoryCache>);
			public static provideSdkStorage(param0: any, param1: zendesk.core.SessionStorage, param2: zendesk.core.BaseStorage, param3: zendesk.core.MemoryCache): zendesk.core.Storage;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvideSerializerFactory extends dagger.internal.Factory<zendesk.core.Serializer> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvideSerializerFactory>;
			public get(): zendesk.core.Serializer;
			public constructor(param0: javax.inject.Provider<com.google.gson.Gson>);
			public static create(param0: javax.inject.Provider<com.google.gson.Gson>): zendesk.core.ZendeskStorageModule_ProvideSerializerFactory;
			public static provideSerializer(param0: com.google.gson.Gson): zendesk.core.Serializer;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvideSessionStorageFactory extends dagger.internal.Factory<zendesk.core.SessionStorage> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvideSessionStorageFactory>;
			public static provideSessionStorage(param0: any, param1: zendesk.core.BaseStorage, param2: zendesk.core.BaseStorage, param3: okhttp3.Cache, param4: java.io.File, param5: java.io.File, param6: java.io.File): zendesk.core.SessionStorage;
			public get(): zendesk.core.SessionStorage;
			public static create(param0: javax.inject.Provider<zendesk.core.IdentityStorage>, param1: javax.inject.Provider<zendesk.core.BaseStorage>, param2: javax.inject.Provider<zendesk.core.BaseStorage>, param3: javax.inject.Provider<okhttp3.Cache>, param4: javax.inject.Provider<java.io.File>, param5: javax.inject.Provider<java.io.File>, param6: javax.inject.Provider<java.io.File>): zendesk.core.ZendeskStorageModule_ProvideSessionStorageFactory;
			public constructor(param0: javax.inject.Provider<zendesk.core.IdentityStorage>, param1: javax.inject.Provider<zendesk.core.BaseStorage>, param2: javax.inject.Provider<zendesk.core.BaseStorage>, param3: javax.inject.Provider<okhttp3.Cache>, param4: javax.inject.Provider<java.io.File>, param5: javax.inject.Provider<java.io.File>, param6: javax.inject.Provider<java.io.File>);
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvideSettingsBaseStorageFactory extends dagger.internal.Factory<zendesk.core.BaseStorage> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvideSettingsBaseStorageFactory>;
			public static provideSettingsBaseStorage(param0: globalAndroid.content.Context, param1: any): zendesk.core.BaseStorage;
			public get(): zendesk.core.BaseStorage;
			public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<zendesk.core.Serializer>);
			public static create(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<zendesk.core.Serializer>): zendesk.core.ZendeskStorageModule_ProvideSettingsBaseStorageFactory;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvideSettingsStorageFactory extends dagger.internal.Factory<zendesk.core.SettingsStorage> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvideSettingsStorageFactory>;
			public get(): zendesk.core.SettingsStorage;
			public constructor(param0: javax.inject.Provider<zendesk.core.BaseStorage>);
			public static provideSettingsStorage(param0: zendesk.core.BaseStorage): zendesk.core.SettingsStorage;
			public static create(param0: javax.inject.Provider<zendesk.core.BaseStorage>): zendesk.core.ZendeskStorageModule_ProvideSettingsStorageFactory;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvidesBelvedereDirFactory extends dagger.internal.Factory<java.io.File> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvidesBelvedereDirFactory>;
			public static create(param0: javax.inject.Provider<globalAndroid.content.Context>): zendesk.core.ZendeskStorageModule_ProvidesBelvedereDirFactory;
			public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>);
			public get(): java.io.File;
			public static providesBelvedereDir(param0: globalAndroid.content.Context): java.io.File;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvidesCacheDirFactory extends dagger.internal.Factory<java.io.File> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvidesCacheDirFactory>;
			public static create(param0: javax.inject.Provider<globalAndroid.content.Context>): zendesk.core.ZendeskStorageModule_ProvidesCacheDirFactory;
			public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>);
			public get(): java.io.File;
			public static providesCacheDir(param0: globalAndroid.content.Context): java.io.File;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvidesDataDirFactory extends dagger.internal.Factory<java.io.File> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvidesDataDirFactory>;
			public static create(param0: javax.inject.Provider<globalAndroid.content.Context>): zendesk.core.ZendeskStorageModule_ProvidesDataDirFactory;
			public static providesDataDir(param0: globalAndroid.content.Context): java.io.File;
			public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>);
			public get(): java.io.File;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvidesDiskLruStorageFactory extends dagger.internal.Factory<zendesk.core.BaseStorage> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvidesDiskLruStorageFactory>;
			public static create(param0: javax.inject.Provider<java.io.File>, param1: javax.inject.Provider<zendesk.core.Serializer>): zendesk.core.ZendeskStorageModule_ProvidesDiskLruStorageFactory;
			public constructor(param0: javax.inject.Provider<java.io.File>, param1: javax.inject.Provider<zendesk.core.Serializer>);
			public get(): zendesk.core.BaseStorage;
			public static providesDiskLruStorage(param0: java.io.File, param1: any): zendesk.core.BaseStorage;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_Proxy {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_Proxy>;
			public static newInstance(): zendesk.core.ZendeskStorageModule;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskUnauthorizedInterceptor {
			public static class: java.lang.Class<zendesk.core.ZendeskUnauthorizedInterceptor>;
			public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskUserProvider extends zendesk.core.UserProvider {
			public static class: java.lang.Class<zendesk.core.ZendeskUserProvider>;
			public getUserFields(param0: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.core.UserField>>): void;
			public setUserFields(param0: java.util.Map<string,string>, param1: com.zendesk.service.ZendeskCallback<java.util.Map<string,string>>): void;
			public getUser(param0: com.zendesk.service.ZendeskCallback<zendesk.core.User>): void;
			public addTags(param0: java.util.List<string>, param1: com.zendesk.service.ZendeskCallback<java.util.List<string>>): void;
			public deleteTags(param0: java.util.List<string>, param1: com.zendesk.service.ZendeskCallback<java.util.List<string>>): void;
		}
	}
}

declare module zendesk {
	export module suas {
		export class Action<E>  extends java.lang.Object {
			public static class: java.lang.Class<zendesk.suas.Action<any>>;
			public toString(): string;
			public getActionType(): string;
			public getData(): any;
			public getData(param0: java.lang.Class): any;
			public getRawData(): E;
			public constructor(param0: string, param1: E);
			public constructor(param0: string);
		}
	}
}

declare module zendesk {
	export module suas {
		export class CombinedMiddleware extends zendesk.suas.Middleware {
			public static class: java.lang.Class<zendesk.suas.CombinedMiddleware>;
			public onAction(param0: zendesk.suas.Action<any>, param1: zendesk.suas.GetState, param2: zendesk.suas.Dispatcher, param3: zendesk.suas.Continuation): void;
		}
	}
}

declare module zendesk {
	export module suas {
		export class CombinedReducer {
			public static class: java.lang.Class<zendesk.suas.CombinedReducer>;
			public reduce(param0: zendesk.suas.State, param1: zendesk.suas.Action<any>): zendesk.suas.CombinedReducer.ReduceResult;
			public getEmptyState(): zendesk.suas.State;
		}
		export module CombinedReducer {
			export class ReduceResult {
				public static class: java.lang.Class<zendesk.suas.CombinedReducer.ReduceResult>;
			}
		}
	}
}

declare module zendesk {
	export module suas {
		export class CombinedSubscription extends zendesk.suas.Subscription {
			public static class: java.lang.Class<zendesk.suas.CombinedSubscription>;
			public informWithCurrentState(): void;
			public removeListener(): void;
			public static from(param0: native.Array<zendesk.suas.Subscription>): zendesk.suas.Subscription;
			public static from(param0: java.util.Collection<zendesk.suas.Subscription>): zendesk.suas.Subscription;
			public addListener(): void;
		}
	}
}

declare module zendesk {
	export module suas {
		export class Continuation {
			public static class: java.lang.Class<zendesk.suas.Continuation>;
			/**
			 * Constructs a new instance of the zendesk.suas.Continuation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				next(param0: zendesk.suas.Action<any>): void;
			});
			public constructor();
			public next(param0: zendesk.suas.Action<any>): void;
		}
	}
}

declare module zendesk {
	export module suas {
		export class Dispatcher {
			public static class: java.lang.Class<zendesk.suas.Dispatcher>;
			/**
			 * Constructs a new instance of the zendesk.suas.Dispatcher interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				dispatch(param0: zendesk.suas.Action<any>): void;
			});
			public constructor();
			public dispatch(param0: zendesk.suas.Action<any>): void;
		}
	}
}

declare module zendesk {
	export module suas {
		export class Executors {
			public static class: java.lang.Class<zendesk.suas.Executors>;
		}
		export module Executors {
			export class AndroidExecutor {
				public static class: java.lang.Class<zendesk.suas.Executors.AndroidExecutor>;
				public execute(param0: java.lang.Runnable): void;
				public constructor();
			}
			export class DefaultCurrentThreadExecutor {
				public static class: java.lang.Class<zendesk.suas.Executors.DefaultCurrentThreadExecutor>;
				public execute(param0: java.lang.Runnable): void;
				public constructor();
			}
		}
	}
}

declare module zendesk {
	export module suas {
		export class Filter<E>  extends java.lang.Object {
			public static class: java.lang.Class<zendesk.suas.Filter<any>>;
			/**
			 * Constructs a new instance of the zendesk.suas.Filter<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				filter(param0: E, param1: E): boolean;
			});
			public constructor();
			public filter(param0: E, param1: E): boolean;
		}
	}
}

declare module zendesk {
	export module suas {
		export class Filters {
			public static class: java.lang.Class<zendesk.suas.Filters>;
			public static DEFAULT: zendesk.suas.Filter<any>;
			public static EQUALS: zendesk.suas.Filter<any>;
		}
		export module Filters {
			export class DefaultFilter extends zendesk.suas.Filter<any> {
				public static class: java.lang.Class<zendesk.suas.Filters.DefaultFilter>;
				public filter(param0: any, param1: any): boolean;
			}
			export class EqualsFilter extends zendesk.suas.Filter<any> {
				public static class: java.lang.Class<zendesk.suas.Filters.EqualsFilter>;
				public filter(param0: any, param1: any): boolean;
			}
		}
	}
}

declare module zendesk {
	export module suas {
		export class GetState {
			public static class: java.lang.Class<zendesk.suas.GetState>;
			/**
			 * Constructs a new instance of the zendesk.suas.GetState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getState(): zendesk.suas.State;
			});
			public constructor();
			public getState(): zendesk.suas.State;
		}
	}
}

declare module zendesk {
	export module suas {
		export class Listener<E>  extends java.lang.Object {
			public static class: java.lang.Class<zendesk.suas.Listener<any>>;
			/**
			 * Constructs a new instance of the zendesk.suas.Listener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				update(param0: E): void;
			});
			public constructor();
			public update(param0: E): void;
		}
	}
}

declare module zendesk {
	export module suas {
		export class Listeners {
			public static class: java.lang.Class<zendesk.suas.Listeners>;
		}
		export module Listeners {
			export class ClassKeyedListener<E>  extends zendesk.suas.Listeners.StateListener {
				public static class: java.lang.Class<zendesk.suas.Listeners.ClassKeyedListener<any>>;
				public getStateKey(): string;
				public update(param0: zendesk.suas.State, param1: zendesk.suas.State, param2: boolean): void;
			}
			export class ClassStringKeyedListener<E>  extends zendesk.suas.Listeners.StateListener {
				public static class: java.lang.Class<zendesk.suas.Listeners.ClassStringKeyedListener<any>>;
				public getStateKey(): string;
				public update(param0: zendesk.suas.State, param1: zendesk.suas.State, param2: boolean): void;
			}
			export class Default extends zendesk.suas.Listeners.StateListener {
				public static class: java.lang.Class<zendesk.suas.Listeners.Default>;
				public getStateKey(): string;
				public update(param0: zendesk.suas.State, param1: zendesk.suas.State, param2: boolean): void;
			}
			export class StateListener {
				public static class: java.lang.Class<zendesk.suas.Listeners.StateListener>;
				/**
				 * Constructs a new instance of the zendesk.suas.Listeners$StateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getStateKey(): string;
					update(param0: zendesk.suas.State, param1: zendesk.suas.State, param2: boolean): void;
				});
				public constructor();
				public getStateKey(): string;
				public update(param0: zendesk.suas.State, param1: zendesk.suas.State, param2: boolean): void;
			}
			export class StateSelectorListener<E>  extends zendesk.suas.Listeners.StateListener {
				public static class: java.lang.Class<zendesk.suas.Listeners.StateSelectorListener<any>>;
				public getStateKey(): string;
				public update(param0: zendesk.suas.State, param1: zendesk.suas.State, param2: boolean): void;
			}
			export class StringKeyedListener<E>  extends zendesk.suas.Listeners.StateListener {
				public static class: java.lang.Class<zendesk.suas.Listeners.StringKeyedListener<any>>;
				public getStateKey(): string;
				public update(param0: zendesk.suas.State, param1: zendesk.suas.State, param2: boolean): void;
			}
		}
	}
}

declare module zendesk {
	export module suas {
		export class Middleware {
			public static class: java.lang.Class<zendesk.suas.Middleware>;
			/**
			 * Constructs a new instance of the zendesk.suas.Middleware interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onAction(param0: zendesk.suas.Action<any>, param1: zendesk.suas.GetState, param2: zendesk.suas.Dispatcher, param3: zendesk.suas.Continuation): void;
			});
			public constructor();
			public onAction(param0: zendesk.suas.Action<any>, param1: zendesk.suas.GetState, param2: zendesk.suas.Dispatcher, param3: zendesk.suas.Continuation): void;
		}
	}
}

declare module zendesk {
	export module suas {
		export abstract class Reducer<E>  extends java.lang.Object {
			public static class: java.lang.Class<zendesk.suas.Reducer<any>>;
			public getInitialState(): E;
			public getStateKey(): string;
			public constructor();
			public reduce(param0: E, param1: zendesk.suas.Action<any>): E;
		}
	}
}

declare module zendesk {
	export module suas {
		export class State {
			public static class: java.lang.Class<zendesk.suas.State>;
			public getState(param0: java.lang.Class): any;
			public equals(param0: any): boolean;
			public updateKey(param0: java.lang.Class, param1: any): void;
			public toString(): string;
			public updateKey(param0: string, param1: any): void;
			public constructor();
			public getState(param0: string, param1: java.lang.Class): any;
			public getState(param0: string): any;
			public hashCode(): number;
		}
	}
}

declare module zendesk {
	export module suas {
		export class StateSelector<E>  extends java.lang.Object {
			public static class: java.lang.Class<zendesk.suas.StateSelector<any>>;
			/**
			 * Constructs a new instance of the zendesk.suas.StateSelector<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				selectData(param0: zendesk.suas.State): E;
			});
			public constructor();
			public selectData(param0: zendesk.suas.State): E;
		}
	}
}

declare module zendesk {
	export module suas {
		export class Store implements zendesk.suas.GetState, zendesk.suas.Dispatcher {
			public static class: java.lang.Class<zendesk.suas.Store>;
			/**
			 * Constructs a new instance of the zendesk.suas.Store interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				reset(param0: zendesk.suas.State): void;
				addListener(param0: zendesk.suas.Listener<zendesk.suas.State>): zendesk.suas.Subscription;
				addListener(param0: zendesk.suas.Filter<zendesk.suas.State>, param1: zendesk.suas.Listener<zendesk.suas.State>): zendesk.suas.Subscription;
				addListener(param0: zendesk.suas.StateSelector<any>, param1: zendesk.suas.Listener<any>): zendesk.suas.Subscription;
				addListener(param0: zendesk.suas.Filter<any>, param1: zendesk.suas.StateSelector<any>, param2: zendesk.suas.Listener<any>): zendesk.suas.Subscription;
				addListener(param0: string, param1: zendesk.suas.Listener<any>): zendesk.suas.Subscription;
				addListener(param0: string, param1: zendesk.suas.Filter<any>, param2: zendesk.suas.Listener<any>): zendesk.suas.Subscription;
				addListener(param0: java.lang.Class, param1: zendesk.suas.Listener<any>): zendesk.suas.Subscription;
				addListener(param0: java.lang.Class, param1: zendesk.suas.Filter<any>, param2: zendesk.suas.Listener<any>): zendesk.suas.Subscription;
				addListener(param0: string, param1: java.lang.Class, param2: zendesk.suas.Listener<any>): zendesk.suas.Subscription;
				addListener(param0: string, param1: java.lang.Class, param2: zendesk.suas.Filter<any>, param3: zendesk.suas.Listener<any>): zendesk.suas.Subscription;
				addActionListener(param0: zendesk.suas.Listener<zendesk.suas.Action<any>>): zendesk.suas.Subscription;
				removeListener(param0: zendesk.suas.Listener<any>): void;
				getState(): zendesk.suas.State;
				dispatch(param0: zendesk.suas.Action<any>): void;
			});
			public constructor();
			public addListener(param0: java.lang.Class, param1: zendesk.suas.Listener<any>): zendesk.suas.Subscription;
			public addActionListener(param0: zendesk.suas.Listener<zendesk.suas.Action<any>>): zendesk.suas.Subscription;
			public removeListener(param0: zendesk.suas.Listener<any>): void;
			public getState(): zendesk.suas.State;
			public addListener(param0: string, param1: java.lang.Class, param2: zendesk.suas.Listener<any>): zendesk.suas.Subscription;
			public dispatch(param0: zendesk.suas.Action<any>): void;
			public reset(param0: zendesk.suas.State): void;
			public addListener(param0: zendesk.suas.Filter<any>, param1: zendesk.suas.StateSelector<any>, param2: zendesk.suas.Listener<any>): zendesk.suas.Subscription;
			public addListener(param0: zendesk.suas.Listener<zendesk.suas.State>): zendesk.suas.Subscription;
			public addListener(param0: java.lang.Class, param1: zendesk.suas.Filter<any>, param2: zendesk.suas.Listener<any>): zendesk.suas.Subscription;
			public addListener(param0: zendesk.suas.Filter<zendesk.suas.State>, param1: zendesk.suas.Listener<zendesk.suas.State>): zendesk.suas.Subscription;
			public addListener(param0: string, param1: zendesk.suas.Listener<any>): zendesk.suas.Subscription;
			public addListener(param0: string, param1: zendesk.suas.Filter<any>, param2: zendesk.suas.Listener<any>): zendesk.suas.Subscription;
			public addListener(param0: zendesk.suas.StateSelector<any>, param1: zendesk.suas.Listener<any>): zendesk.suas.Subscription;
			public addListener(param0: string, param1: java.lang.Class, param2: zendesk.suas.Filter<any>, param3: zendesk.suas.Listener<any>): zendesk.suas.Subscription;
		}
	}
}

declare module zendesk {
	export module suas {
		export class Suas {
			public static class: java.lang.Class<zendesk.suas.Suas>;
			public static createStore(param0: native.Array<zendesk.suas.Reducer<any>>): zendesk.suas.Suas.Builder;
			public static createStore(param0: java.util.Collection<zendesk.suas.Reducer<any>>): zendesk.suas.Suas.Builder;
		}
		export module Suas {
			export class Builder {
				public static class: java.lang.Class<zendesk.suas.Suas.Builder>;
				public withMiddleware(param0: java.util.Collection<zendesk.suas.Middleware>): zendesk.suas.Suas.Builder;
				public withExecutor(param0: java.util.concurrent.Executor): zendesk.suas.Suas.Builder;
				public withMiddleware(param0: native.Array<zendesk.suas.Middleware>): zendesk.suas.Suas.Builder;
				public withInitialState(param0: zendesk.suas.State): zendesk.suas.Suas.Builder;
				public build(): zendesk.suas.Store;
				public withDefaultFilter(param0: zendesk.suas.Filter<any>): zendesk.suas.Suas.Builder;
			}
		}
	}
}

declare module zendesk {
	export module suas {
		export class SuasStore extends zendesk.suas.Store {
			public static class: java.lang.Class<zendesk.suas.SuasStore>;
			public getState(): zendesk.suas.State;
			public addListener(param0: java.lang.Class, param1: zendesk.suas.Listener<any>): zendesk.suas.Subscription;
			public addActionListener(param0: zendesk.suas.Listener<zendesk.suas.Action<any>>): zendesk.suas.Subscription;
			public removeListener(param0: zendesk.suas.Listener<any>): void;
			public addListener(param0: string, param1: java.lang.Class, param2: zendesk.suas.Listener<any>): zendesk.suas.Subscription;
			public dispatch(param0: zendesk.suas.Action<any>): void;
			public reset(param0: zendesk.suas.State): void;
			public addListener(param0: zendesk.suas.Filter<any>, param1: zendesk.suas.StateSelector<any>, param2: zendesk.suas.Listener<any>): zendesk.suas.Subscription;
			public removeListener(param0: zendesk.suas.Listener<any>): void;
			public addListener(param0: zendesk.suas.Listener<zendesk.suas.State>): zendesk.suas.Subscription;
			public addListener(param0: java.lang.Class, param1: zendesk.suas.Filter<any>, param2: zendesk.suas.Listener<any>): zendesk.suas.Subscription;
			public addListener(param0: zendesk.suas.Filter<zendesk.suas.State>, param1: zendesk.suas.Listener<zendesk.suas.State>): zendesk.suas.Subscription;
			public addListener(param0: string, param1: zendesk.suas.Listener<any>): zendesk.suas.Subscription;
			public addListener(param0: string, param1: zendesk.suas.Filter<any>, param2: zendesk.suas.Listener<any>): zendesk.suas.Subscription;
			public addListener(param0: zendesk.suas.StateSelector<any>, param1: zendesk.suas.Listener<any>): zendesk.suas.Subscription;
			public addListener(param0: string, param1: java.lang.Class, param2: zendesk.suas.Filter<any>, param3: zendesk.suas.Listener<any>): zendesk.suas.Subscription;
		}
		export module SuasStore {
			export class ActionListenerSubscription extends zendesk.suas.Subscription {
				public static class: java.lang.Class<zendesk.suas.SuasStore.ActionListenerSubscription>;
				public addListener(): void;
				public removeListener(): void;
				public informWithCurrentState(): void;
			}
			export class DefaultSubscription extends zendesk.suas.Subscription {
				public static class: java.lang.Class<zendesk.suas.SuasStore.DefaultSubscription>;
				public addListener(): void;
				public removeListener(): void;
				public informWithCurrentState(): void;
			}
		}
	}
}

declare module zendesk {
	export module suas {
		export class Subscription {
			public static class: java.lang.Class<zendesk.suas.Subscription>;
			/**
			 * Constructs a new instance of the zendesk.suas.Subscription interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				removeListener(): void;
				addListener(): void;
				informWithCurrentState(): void;
			});
			public constructor();
			public informWithCurrentState(): void;
			public removeListener(): void;
			public addListener(): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class ActivityScope {
			public static class: java.lang.Class<zendesk.support.ActivityScope>;
			/**
			 * Constructs a new instance of the zendesk.support.ActivityScope interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
	}
}

declare module zendesk {
	export module support {
		export class AggregatedCallback<T>  extends com.zendesk.service.ZendeskCallback<any> {
			public static class: java.lang.Class<zendesk.support.AggregatedCallback<any>>;
			public add(param0: com.zendesk.service.ZendeskCallback<any>): boolean;
			public onError(param0: com.zendesk.service.ErrorResponse): void;
			public cancel(): void;
			public constructor();
			public onSuccess(param0: any): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class AnswersTracker extends zendesk.support.ZendeskTracker {
			public static class: java.lang.Class<zendesk.support.AnswersTracker>;
			public requestCreated(): void;
			public requestUpdated(): void;
			public helpCenterSearched(param0: string): void;
			public helpCenterLoaded(): void;
			public helpCenterArticleViewed(): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class ApplicationScope {
			public static class: java.lang.Class<zendesk.support.ApplicationScope>;
			public getZendeskTracker(): zendesk.support.ZendeskTracker;
			public newBuilder(): zendesk.support.ApplicationScope.Builder;
			public getLocale(): java.util.Locale;
		}
		export module ApplicationScope {
			export class Builder {
				public static class: java.lang.Class<zendesk.support.ApplicationScope.Builder>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export class Article {
			public static class: java.lang.Class<zendesk.support.Article>;
			public static UNKNOWN_VOTE_COUNT: number;
			public getTitle(): string;
			public getUrl(): string;
			public isOutdated(): boolean;
			public getCreatedAt(): java.util.Date;
			public constructor();
			public getVoteCount(): number;
			public getUpdatedAt(): java.util.Date;
			public isDraft(): boolean;
			public getSectionId(): java.lang.Long;
			public getAuthor(): zendesk.support.User;
			public getAuthorId(): java.lang.Long;
			public getLocale(): string;
			public getId(): java.lang.Long;
			public getLabelNames(): java.util.List<string>;
			public setAuthor(param0: zendesk.support.User): void;
			public getSourceLocale(): string;
			public isCommentsDisabled(): boolean;
			public getUpvoteCount(): number;
			public getDownvoteCount(): number;
			public getBody(): string;
			public getHtmlUrl(): string;
			public getVoteSum(): number;
		}
	}
}

declare module zendesk {
	export module support {
		export class ArticleItem extends zendesk.support.HelpItem {
			public static class: java.lang.Class<zendesk.support.ArticleItem>;
			public equals(param0: any): boolean;
			public getName(): string;
			public getId(): java.lang.Long;
			public getParentId(): java.lang.Long;
			public constructor(param0: java.lang.Long, param1: java.lang.Long, param2: string);
			public getViewType(): number;
			public hashCode(): number;
		}
	}
}

declare module zendesk {
	export module support {
		export class ArticleResponse {
			public static class: java.lang.Class<zendesk.support.ArticleResponse>;
		}
	}
}

declare module zendesk {
	export module support {
		export class ArticleVote {
			public static class: java.lang.Class<zendesk.support.ArticleVote>;
			public getValue(): java.lang.Integer;
			public equals(param0: any): boolean;
			public getUrl(): string;
			public getId(): java.lang.Long;
			public getUserId(): java.lang.Long;
			public getItemType(): string;
			public getCreatedAt(): java.util.Date;
			public constructor();
			public getUpdatedAt(): java.util.Date;
			public getItemId(): java.lang.Long;
			public hashCode(): number;
		}
	}
}

declare module zendesk {
	export module support {
		export class ArticleVoteResponse {
			public static class: java.lang.Class<zendesk.support.ArticleVoteResponse>;
		}
	}
}

declare module zendesk {
	export module support {
		export class ArticleVoteStorage {
			public static class: java.lang.Class<zendesk.support.ArticleVoteStorage>;
			/**
			 * Constructs a new instance of the zendesk.support.ArticleVoteStorage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				storeArticleVote(param0: java.lang.Long, param1: zendesk.support.ArticleVote): void;
				getStoredArticleVote(param0: java.lang.Long): zendesk.support.ArticleVote;
				removeStoredArticleVote(param0: java.lang.Long): void;
			});
			public constructor();
			public removeStoredArticleVote(param0: java.lang.Long): void;
			public storeArticleVote(param0: java.lang.Long, param1: zendesk.support.ArticleVote): void;
			public getStoredArticleVote(param0: java.lang.Long): zendesk.support.ArticleVote;
		}
	}
}

declare module zendesk {
	export module support {
		export class ArticlesListResponse extends zendesk.support.ArticlesResponse {
			public static class: java.lang.Class<zendesk.support.ArticlesListResponse>;
			public getSections(): java.util.List<zendesk.support.Section>;
			public getCategories(): java.util.List<zendesk.support.Category>;
			public getNextPage(): string;
			public getArticles(): java.util.List<zendesk.support.Article>;
			public getUsers(): java.util.List<zendesk.support.User>;
			public getPreviousPage(): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class ArticlesResponse {
			public static class: java.lang.Class<zendesk.support.ArticlesResponse>;
			/**
			 * Constructs a new instance of the zendesk.support.ArticlesResponse interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getArticles(): java.util.List<zendesk.support.Article>;
				getCategories(): java.util.List<zendesk.support.Category>;
				getSections(): java.util.List<zendesk.support.Section>;
				getUsers(): java.util.List<zendesk.support.User>;
			});
			public constructor();
			public getSections(): java.util.List<zendesk.support.Section>;
			public getCategories(): java.util.List<zendesk.support.Category>;
			public getArticles(): java.util.List<zendesk.support.Article>;
			public getUsers(): java.util.List<zendesk.support.User>;
		}
	}
}

declare module zendesk {
	export module support {
		export class ArticlesSearchResponse extends zendesk.support.ArticlesResponse {
			public static class: java.lang.Class<zendesk.support.ArticlesSearchResponse>;
			public getSections(): java.util.List<zendesk.support.Section>;
			public getCategories(): java.util.List<zendesk.support.Category>;
			public getNextPage(): string;
			public getArticles(): java.util.List<zendesk.support.Article>;
			public getUsers(): java.util.List<zendesk.support.User>;
			public getPreviousPage(): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class Attachment {
			public static class: java.lang.Class<zendesk.support.Attachment>;
			public getSize(): java.lang.Long;
			public getUrl(): string;
			public getId(): java.lang.Long;
			public getFileName(): string;
			public getHeight(): java.lang.Long;
			public getWidth(): java.lang.Long;
			public getThumbnails(): java.util.List<zendesk.support.Attachment>;
			public constructor();
			public getContentType(): string;
			public getContentUrl(): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class AttachmentResponse {
			public static class: java.lang.Class<zendesk.support.AttachmentResponse>;
		}
	}
}

declare module zendesk {
	export module support {
		export class AttachmentSettings {
			public static class: java.lang.Class<zendesk.support.AttachmentSettings>;
		}
	}
}

declare module zendesk {
	export module support {
		export class AttachmentType {
			public static class: java.lang.Class<zendesk.support.AttachmentType>;
			public static INLINE: zendesk.support.AttachmentType;
			public static BLOCK: zendesk.support.AttachmentType;
			public static valueOf(param0: string): zendesk.support.AttachmentType;
			public getAttachmentType(): string;
			public static values(): native.Array<zendesk.support.AttachmentType>;
		}
	}
}

declare module zendesk {
	export module support {
		export class CategoriesResponse {
			public static class: java.lang.Class<zendesk.support.CategoriesResponse>;
		}
	}
}

declare module zendesk {
	export module support {
		export class Category {
			public static class: java.lang.Class<zendesk.support.Category>;
			public getUrl(): string;
			public getLocale(): string;
			public getName(): string;
			public getId(): java.lang.Long;
			public isOutdated(): boolean;
			public getSourceLocale(): string;
			public getCreatedAt(): java.util.Date;
			public getPosition(): number;
			public constructor();
			public getUpdatedAt(): java.util.Date;
			public getDescription(): string;
			public getHtmlUrl(): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class CategoryItem extends zendesk.support.HelpItem {
			public static class: java.lang.Class<zendesk.support.CategoryItem>;
			public equals(param0: any): boolean;
			public setSections(param0: java.util.List<zendesk.support.SectionItem>): void;
			public isExpanded(): boolean;
			public getName(): string;
			public getId(): java.lang.Long;
			public getParentId(): java.lang.Long;
			public setExpanded(param0: boolean): boolean;
			public getSections(): java.util.List<zendesk.support.SectionItem>;
			public constructor();
			public getViewType(): number;
			public hashCode(): number;
		}
	}
}

declare module zendesk {
	export module support {
		export class CategoryResponse {
			public static class: java.lang.Class<zendesk.support.CategoryResponse>;
		}
	}
}

declare module zendesk {
	export module support {
		export class Comment {
			public static class: java.lang.Class<zendesk.support.Comment>;
			public setBody(param0: string): void;
			public getUrl(): string;
			public setAttachments(param0: java.util.List<string>): void;
			public getAttachments(): java.util.List<string>;
			public getCreatedAt(): java.util.Date;
			public constructor();
			public getHtmlBody(): string;
			public getAuthorId(): java.lang.Long;
			public setAuthorId(param0: java.lang.Long): void;
			public getId(): java.lang.Long;
			public getRequestId(): string;
			public isPublic(): boolean;
			public setCreatedAt(param0: java.util.Date): void;
			public getBody(): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class CommentResponse {
			public static class: java.lang.Class<zendesk.support.CommentResponse>;
			public setBody(param0: string): void;
			public getUrl(): string;
			public getCreatedAt(): java.util.Date;
			public constructor();
			public getHtmlBody(): string;
			public setAttachments(param0: java.util.List<zendesk.support.Attachment>): void;
			public getAuthorId(): java.lang.Long;
			public setAuthorId(param0: java.lang.Long): void;
			public getId(): java.lang.Long;
			public getAttachments(): java.util.List<zendesk.support.Attachment>;
			public getRequestId(): string;
			public isPublic(): boolean;
			public setCreatedAt(param0: java.util.Date): void;
			public setId(param0: java.lang.Long): void;
			public getBody(): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class CommentsResponse extends zendesk.support.ResponseWrapper {
			public static class: java.lang.Class<zendesk.support.CommentsResponse>;
			public getOrganizations(): java.util.List<zendesk.support.Organization>;
			public getComments(): java.util.List<zendesk.support.CommentResponse>;
			public constructor();
			public getUsers(): java.util.List<zendesk.support.User>;
		}
	}
}

declare module zendesk {
	export module support {
		export class Constants {
			public static class: java.lang.Class<zendesk.support.Constants>;
			/**
			 * Constructs a new instance of the zendesk.support.Constants interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
			public static USER_AGENT_VARIANT: string;
			public static CUSTOM_HC_CACHING_HEADER: string;
			public static SDK_GUID_HEADER: string;
			public static ACTION_REFRESH_REQUEST_LIST: string;
			public static ACTION_REFRESH_REQUEST_CONVERSATION: string;
			public static HOURS_MINUTES_FORMAT: string;
			public static ACTION_DEFLECTION: string;
			public static STANDARD_CACHING_HEADER: string;
			public static ACTION_CONTACT_OPTION: string;
		}
	}
}

declare module zendesk {
	export module support {
		export class ContactUsSettings {
			public static class: java.lang.Class<zendesk.support.ContactUsSettings>;
			public getTags(): java.util.List<string>;
		}
	}
}

declare module zendesk {
	export module support {
		export class ConversationsSettings {
			public static class: java.lang.Class<zendesk.support.ConversationsSettings>;
		}
	}
}

declare module zendesk {
	export module support {
		export class CreateRequest {
			public static class: java.lang.Class<zendesk.support.CreateRequest>;
			public setMetadata(param0: java.util.Map<string,string>): void;
			public setSubject(param0: string): void;
			public setAttachments(param0: java.util.List<string>): void;
			public setDescription(param0: string): void;
			public setCustomFields(param0: java.util.List<zendesk.support.CustomField>): void;
			public constructor();
			public getCustomFields(): java.util.List<zendesk.support.CustomField>;
			public setTicketFormId(param0: java.lang.Long): void;
			public setTags(param0: java.util.List<string>): void;
			public getId(): string;
			public setId(param0: string): void;
			public getTags(): java.util.List<string>;
			public getSubject(): string;
			public getTicketFormId(): java.lang.Long;
			public getDescription(): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class CreateRequestActionHandler extends zendesk.core.ActionHandler {
			public static class: java.lang.Class<zendesk.support.CreateRequestActionHandler>;
			public getActionDescription(): zendesk.core.ActionDescription;
			public handle(param0: java.util.Map<string,any>, param1: globalAndroid.content.Context): void;
			public getPriority(): number;
			public canHandle(param0: string): boolean;
			public updateSettings(param0: java.util.Map<string,com.google.gson.JsonElement>): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class CreateRequestWrapper {
			public static class: java.lang.Class<zendesk.support.CreateRequestWrapper>;
		}
	}
}

declare module zendesk {
	export module support {
		export class CustomField {
			public static class: java.lang.Class<zendesk.support.CustomField>;
			public getValueBoolean(): java.lang.Boolean;
			public getValueList(): java.util.List<string>;
			public getValueObject(): any;
			public constructor(param0: java.lang.Long, param1: any);
			public getId(): java.lang.Long;
			/** @deprecated */
			public getValue(): string;
			public getValueString(): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class DaggerSupportSdkComponent extends zendesk.support.SupportSdkComponent {
			public static class: java.lang.Class<zendesk.support.DaggerSupportSdkComponent>;
			public plus(param0: zendesk.support.requestlist.RequestListModule): zendesk.support.requestlist.RequestListComponent;
			public plus(param0: zendesk.support.request.RequestModule): zendesk.support.request.RequestComponent;
			public inject(param0: zendesk.support.guide.HelpCenterActivity): void;
			public helpCenterProvider(): zendesk.support.HelpCenterProvider;
			public static builder(): zendesk.support.DaggerSupportSdkComponent.Builder;
			public inject(param0: zendesk.support.SdkDependencyProvider): void;
			public inject(param0: zendesk.support.guide.ViewArticleActivity): void;
			public inject(param0: zendesk.support.DeepLinkingBroadcastReceiver): void;
			public inject(param0: zendesk.support.guide.HelpCenterFragment): void;
		}
		export module DaggerSupportSdkComponent {
			export class Builder {
				public static class: java.lang.Class<zendesk.support.DaggerSupportSdkComponent.Builder>;
				public build(): zendesk.support.SupportSdkComponent;
				public supportSdkModule(param0: zendesk.support.SupportSdkModule): zendesk.support.DaggerSupportSdkComponent.Builder;
				public coreModule(param0: zendesk.core.CoreModule): zendesk.support.DaggerSupportSdkComponent.Builder;
				public supportModule(param0: zendesk.support.SupportModule): zendesk.support.DaggerSupportSdkComponent.Builder;
			}
			export class RequestComponentImpl extends zendesk.support.request.RequestComponent {
				public static class: java.lang.Class<zendesk.support.DaggerSupportSdkComponent.RequestComponentImpl>;
				public inject(param0: zendesk.support.request.RequestViewConversationsEnabled): void;
				public inject(param0: zendesk.support.request.RequestActivity): void;
				public inject(param0: zendesk.support.request.RequestViewConversationsDisabled): void;
			}
			export class RequestListComponentImpl extends zendesk.support.requestlist.RequestListComponent {
				public static class: java.lang.Class<zendesk.support.DaggerSupportSdkComponent.RequestListComponentImpl>;
				public inject(param0: zendesk.support.requestlist.RequestListActivity): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export class DaggerSupportSdkProvidersComponent extends zendesk.support.SupportSdkProvidersComponent {
			public static class: java.lang.Class<zendesk.support.DaggerSupportSdkProvidersComponent>;
			public static builder(): zendesk.support.DaggerSupportSdkProvidersComponent.Builder;
			public inject(param0: zendesk.support.Support): zendesk.support.Support;
		}
		export module DaggerSupportSdkProvidersComponent {
			export class Builder {
				public static class: java.lang.Class<zendesk.support.DaggerSupportSdkProvidersComponent.Builder>;
				public coreModule(param0: zendesk.core.CoreModule): zendesk.support.DaggerSupportSdkProvidersComponent.Builder;
				/** @deprecated */
				public serviceModule(param0: zendesk.support.ServiceModule): zendesk.support.DaggerSupportSdkProvidersComponent.Builder;
				public supportApplicationModule(param0: zendesk.support.SupportApplicationModule): zendesk.support.DaggerSupportSdkProvidersComponent.Builder;
				public storageModule(param0: zendesk.support.StorageModule): zendesk.support.DaggerSupportSdkProvidersComponent.Builder;
				public build(): zendesk.support.SupportSdkProvidersComponent;
				public providerModule(param0: zendesk.support.ProviderModule): zendesk.support.DaggerSupportSdkProvidersComponent.Builder;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export class DeepLinkToRequestActionHandler extends zendesk.core.ActionHandler {
			public static class: java.lang.Class<zendesk.support.DeepLinkToRequestActionHandler>;
			public getActionDescription(): zendesk.core.ActionDescription;
			public handle(param0: java.util.Map<string,any>, param1: globalAndroid.content.Context): void;
			public getPriority(): number;
			public canHandle(param0: string): boolean;
			public updateSettings(param0: java.util.Map<string,com.google.gson.JsonElement>): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class DeepLinkingBroadcastReceiver {
			public static class: java.lang.Class<zendesk.support.DeepLinkingBroadcastReceiver>;
			public static EXTRA_BACK_STACK_ACTIVITIES: string;
			public static EXTRA_REQUEST_INTENT: string;
			public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
			public constructor();
		}
	}
}

declare module zendesk {
	export module support {
		export class DeepLinkingBroadcastReceiver_MembersInjector extends dagger.MembersInjector<zendesk.support.DeepLinkingBroadcastReceiver> {
			public static class: java.lang.Class<zendesk.support.DeepLinkingBroadcastReceiver_MembersInjector>;
			public constructor(param0: javax.inject.Provider<zendesk.support.ZendeskDeepLinkHelper>);
			public static create(param0: javax.inject.Provider<zendesk.support.ZendeskDeepLinkHelper>): dagger.MembersInjector<zendesk.support.DeepLinkingBroadcastReceiver>;
			public injectMembers(param0: zendesk.support.DeepLinkingBroadcastReceiver): void;
			public static injectDeepLinkHelper(param0: zendesk.support.DeepLinkingBroadcastReceiver, param1: zendesk.support.ZendeskDeepLinkHelper): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class EndUserComment {
			public static class: java.lang.Class<zendesk.support.EndUserComment>;
			public setAttachments(param0: java.util.List<string>): void;
			public getAttachments(): java.util.List<string>;
			public constructor();
			public setValue(param0: string): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class FlatArticle extends java.lang.Comparable<zendesk.support.FlatArticle> {
			public static class: java.lang.Class<zendesk.support.FlatArticle>;
			public getCategory(): zendesk.support.Category;
			public toString(): string;
			public constructor(param0: zendesk.support.Category, param1: zendesk.support.Section, param2: zendesk.support.Article);
			public getSection(): zendesk.support.Section;
			public getArticle(): zendesk.support.Article;
			public compareTo(param0: zendesk.support.FlatArticle): number;
		}
	}
}

declare module zendesk {
	export module support {
		export class HelpCenterAttachment {
			public static class: java.lang.Class<zendesk.support.HelpCenterAttachment>;
			public getSize(): java.lang.Long;
			public getUrl(): string;
			public getId(): java.lang.Long;
			public getFileName(): string;
			public getCreatedAt(): java.util.Date;
			public constructor();
			public getContentType(): string;
			public getUpdatedAt(): java.util.Date;
			public getContentUrl(): string;
			public getArticleId(): java.lang.Long;
		}
	}
}

declare module zendesk {
	export module support {
		export class HelpCenterCachingInterceptor {
			public static class: java.lang.Class<zendesk.support.HelpCenterCachingInterceptor>;
			public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
		}
	}
}

declare module zendesk {
	export module support {
		export class HelpCenterCachingNetworkConfig extends zendesk.core.CustomNetworkConfig {
			public static class: java.lang.Class<zendesk.support.HelpCenterCachingNetworkConfig>;
			public configureOkHttpClient(param0: okhttp3.OkHttpClient.Builder): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class HelpCenterProvider {
			public static class: java.lang.Class<zendesk.support.HelpCenterProvider>;
			/**
			 * Constructs a new instance of the zendesk.support.HelpCenterProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getHelp(param0: zendesk.support.HelpRequest, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.HelpItem>>): void;
				getCategories(param0: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Category>>): void;
				getSections(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Section>>): void;
				getArticles(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Article>>): void;
				getArticles(param0: java.lang.Long, param1: string, param2: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Article>>): void;
				listArticles(param0: zendesk.support.ListArticleQuery, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.SearchArticle>>): void;
				listArticlesFlat(param0: zendesk.support.ListArticleQuery, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.FlatArticle>>): void;
				searchArticles(param0: zendesk.support.HelpCenterSearch, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.SearchArticle>>): void;
				getArticle(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback<zendesk.support.Article>): void;
				getSection(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback<zendesk.support.Section>): void;
				getCategory(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback<zendesk.support.Category>): void;
				getAttachments(param0: java.lang.Long, param1: zendesk.support.AttachmentType, param2: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.HelpCenterAttachment>>): void;
				upvoteArticle(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback<zendesk.support.ArticleVote>): void;
				downvoteArticle(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback<zendesk.support.ArticleVote>): void;
				deleteVote(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback<java.lang.Void>): void;
				getSuggestedArticles(param0: zendesk.support.SuggestedArticleSearch, param1: com.zendesk.service.ZendeskCallback<zendesk.support.SuggestedArticleResponse>): void;
				submitRecordArticleView(param0: zendesk.support.Article, param1: java.util.Locale, param2: com.zendesk.service.ZendeskCallback<java.lang.Void>): void;
			});
			public constructor();
			public getAttachments(param0: java.lang.Long, param1: zendesk.support.AttachmentType, param2: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.HelpCenterAttachment>>): void;
			public getArticle(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback<zendesk.support.Article>): void;
			public getArticles(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Article>>): void;
			public getSections(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Section>>): void;
			public getCategory(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback<zendesk.support.Category>): void;
			public deleteVote(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback<java.lang.Void>): void;
			public upvoteArticle(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback<zendesk.support.ArticleVote>): void;
			public submitRecordArticleView(param0: zendesk.support.Article, param1: java.util.Locale, param2: com.zendesk.service.ZendeskCallback<java.lang.Void>): void;
			public downvoteArticle(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback<zendesk.support.ArticleVote>): void;
			public getCategories(param0: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Category>>): void;
			public listArticlesFlat(param0: zendesk.support.ListArticleQuery, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.FlatArticle>>): void;
			public getHelp(param0: zendesk.support.HelpRequest, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.HelpItem>>): void;
			public getArticles(param0: java.lang.Long, param1: string, param2: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Article>>): void;
			public listArticles(param0: zendesk.support.ListArticleQuery, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.SearchArticle>>): void;
			public getSuggestedArticles(param0: zendesk.support.SuggestedArticleSearch, param1: com.zendesk.service.ZendeskCallback<zendesk.support.SuggestedArticleResponse>): void;
			public searchArticles(param0: zendesk.support.HelpCenterSearch, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.SearchArticle>>): void;
			public getSection(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback<zendesk.support.Section>): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class HelpCenterSearch {
			public static class: java.lang.Class<zendesk.support.HelpCenterSearch>;
			public getInclude(): string;
			public getLabelNames(): string;
			public getCategoryIds(): string;
			public getQuery(): string;
			public getPage(): java.lang.Integer;
			public getSectionIds(): string;
			public getPerPage(): java.lang.Integer;
			public withQuery(param0: string): zendesk.support.HelpCenterSearch;
			public getLocale(): java.util.Locale;
		}
		export module HelpCenterSearch {
			export class Builder {
				public static class: java.lang.Class<zendesk.support.HelpCenterSearch.Builder>;
				public withIncludes(param0: native.Array<string>): zendesk.support.HelpCenterSearch.Builder;
				public withLabelNames(param0: native.Array<string>): zendesk.support.HelpCenterSearch.Builder;
				public withSectionId(param0: java.lang.Long): zendesk.support.HelpCenterSearch.Builder;
				public build(): zendesk.support.HelpCenterSearch;
				public withCategoryId(param0: java.lang.Long): zendesk.support.HelpCenterSearch.Builder;
				public perPage(param0: java.lang.Integer): zendesk.support.HelpCenterSearch.Builder;
				public withCategoryIds(param0: java.util.List<java.lang.Long>): zendesk.support.HelpCenterSearch.Builder;
				public page(param0: java.lang.Integer): zendesk.support.HelpCenterSearch.Builder;
				public withSectionIds(param0: java.util.List<java.lang.Long>): zendesk.support.HelpCenterSearch.Builder;
				public constructor();
				public withQuery(param0: string): zendesk.support.HelpCenterSearch.Builder;
				public forLocale(param0: java.util.Locale): zendesk.support.HelpCenterSearch.Builder;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export class HelpCenterService {
			public static class: java.lang.Class<zendesk.support.HelpCenterService>;
			/**
			 * Constructs a new instance of the zendesk.support.HelpCenterService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getHelp(param0: string, param1: string, param2: string, param3: string, param4: number, param5: string, param6: number, param7: string, param8: string): retrofit2.Call<zendesk.support.HelpResponse>;
				getCategories(param0: string): retrofit2.Call<zendesk.support.CategoriesResponse>;
				getSections(param0: string, param1: java.lang.Long, param2: number): retrofit2.Call<zendesk.support.SectionsResponse>;
				getArticles(param0: string, param1: java.lang.Long, param2: string, param3: string, param4: number): retrofit2.Call<zendesk.support.ArticlesListResponse>;
				listArticles(param0: string, param1: string, param2: string, param3: string, param4: string, param5: java.lang.Integer, param6: java.lang.Integer): retrofit2.Call<zendesk.support.ArticlesListResponse>;
				searchArticles(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: java.lang.Integer, param7: java.lang.Integer): retrofit2.Call<zendesk.support.ArticlesSearchResponse>;
				getArticle(param0: string, param1: java.lang.Long, param2: string): retrofit2.Call<zendesk.support.ArticleResponse>;
				getSectionById(param0: string, param1: java.lang.Long): retrofit2.Call<zendesk.support.SectionResponse>;
				getCategoryById(param0: string, param1: java.lang.Long): retrofit2.Call<zendesk.support.CategoryResponse>;
				getAttachments(param0: string, param1: java.lang.Long, param2: string): retrofit2.Call<zendesk.support.AttachmentResponse>;
				upvoteArticle(param0: java.lang.Long, param1: string): retrofit2.Call<zendesk.support.ArticleVoteResponse>;
				downvoteArticle(param0: java.lang.Long, param1: string): retrofit2.Call<zendesk.support.ArticleVoteResponse>;
				deleteVote(param0: java.lang.Long): retrofit2.Call<java.lang.Void>;
				getSuggestedArticles(param0: string, param1: string, param2: string, param3: java.lang.Long, param4: java.lang.Long): retrofit2.Call<zendesk.support.SuggestedArticleResponse>;
				submitRecordArticleView(param0: java.lang.Long, param1: string, param2: zendesk.support.RecordArticleViewRequest): retrofit2.Call<java.lang.Void>;
			});
			public constructor();
			public getSectionById(param0: string, param1: java.lang.Long): retrofit2.Call<zendesk.support.SectionResponse>;
			public getSuggestedArticles(param0: string, param1: string, param2: string, param3: java.lang.Long, param4: java.lang.Long): retrofit2.Call<zendesk.support.SuggestedArticleResponse>;
			public getHelp(param0: string, param1: string, param2: string, param3: string, param4: number, param5: string, param6: number, param7: string, param8: string): retrofit2.Call<zendesk.support.HelpResponse>;
			public getCategoryById(param0: string, param1: java.lang.Long): retrofit2.Call<zendesk.support.CategoryResponse>;
			public submitRecordArticleView(param0: java.lang.Long, param1: string, param2: zendesk.support.RecordArticleViewRequest): retrofit2.Call<java.lang.Void>;
			public listArticles(param0: string, param1: string, param2: string, param3: string, param4: string, param5: java.lang.Integer, param6: java.lang.Integer): retrofit2.Call<zendesk.support.ArticlesListResponse>;
			public downvoteArticle(param0: java.lang.Long, param1: string): retrofit2.Call<zendesk.support.ArticleVoteResponse>;
			public upvoteArticle(param0: java.lang.Long, param1: string): retrofit2.Call<zendesk.support.ArticleVoteResponse>;
			public searchArticles(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: java.lang.Integer, param7: java.lang.Integer): retrofit2.Call<zendesk.support.ArticlesSearchResponse>;
			public getAttachments(param0: string, param1: java.lang.Long, param2: string): retrofit2.Call<zendesk.support.AttachmentResponse>;
			public getArticles(param0: string, param1: java.lang.Long, param2: string, param3: string, param4: number): retrofit2.Call<zendesk.support.ArticlesListResponse>;
			public getSections(param0: string, param1: java.lang.Long, param2: number): retrofit2.Call<zendesk.support.SectionsResponse>;
			public getArticle(param0: string, param1: java.lang.Long, param2: string): retrofit2.Call<zendesk.support.ArticleResponse>;
			public deleteVote(param0: java.lang.Long): retrofit2.Call<java.lang.Void>;
			public getCategories(param0: string): retrofit2.Call<zendesk.support.CategoriesResponse>;
		}
	}
}

declare module zendesk {
	export module support {
		export class HelpCenterSessionCache {
			public static class: java.lang.Class<zendesk.support.HelpCenterSessionCache>;
			/**
			 * Constructs a new instance of the zendesk.support.HelpCenterSessionCache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getLastSearch(): zendesk.support.LastSearch;
				setLastSearch(param0: string, param1: number): void;
				unsetUniqueSearchResultClick(): void;
				isUniqueSearchResultClick(): boolean;
			});
			public constructor();
			public isUniqueSearchResultClick(): boolean;
			public unsetUniqueSearchResultClick(): void;
			public getLastSearch(): zendesk.support.LastSearch;
			public setLastSearch(param0: string, param1: number): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class HelpCenterSettings extends zendesk.core.Settings {
			public static class: java.lang.Class<zendesk.support.HelpCenterSettings>;
			public getLocale(): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class HelpItem {
			public static class: java.lang.Class<zendesk.support.HelpItem>;
			/**
			 * Constructs a new instance of the zendesk.support.HelpItem interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getViewType(): number;
				getName(): string;
				getId(): java.lang.Long;
				getParentId(): java.lang.Long;
			});
			public constructor();
			public static TYPE_LOADING: number;
			public static TYPE_SEE_ALL: number;
			public static TYPE_SECTION: number;
			public static TYPE_NO_RESULTS: number;
			public static TYPE_PADDING: number;
			public static TYPE_CATEGORY: number;
			public static TYPE_ARTICLE: number;
			public getName(): string;
			public getId(): java.lang.Long;
			public getParentId(): java.lang.Long;
			public getViewType(): number;
		}
	}
}

declare module zendesk {
	export module support {
		export class HelpRequest {
			public static class: java.lang.Class<zendesk.support.HelpRequest>;
			public getCategoryIds(): string;
			public getLabelNames(): native.Array<string>;
			public getIncludes(): string;
			public getSectionIds(): string;
			public getArticlesPerPageLimit(): number;
		}
		export module HelpRequest {
			export class Builder {
				public static class: java.lang.Class<zendesk.support.HelpRequest.Builder>;
				public withArticlesPerSectionLimit(param0: number): zendesk.support.HelpRequest.Builder;
				public withLabelNames(param0: native.Array<string>): zendesk.support.HelpRequest.Builder;
				public withCategoryIds(param0: java.util.List<java.lang.Long>): zendesk.support.HelpRequest.Builder;
				public includeCategories(): zendesk.support.HelpRequest.Builder;
				public withSectionIds(param0: java.util.List<java.lang.Long>): zendesk.support.HelpRequest.Builder;
				public build(): zendesk.support.HelpRequest;
				public includeSections(): zendesk.support.HelpRequest.Builder;
				public constructor();
			}
		}
	}
}

declare module zendesk {
	export module support {
		export class HelpResponse {
			public static class: java.lang.Class<zendesk.support.HelpResponse>;
			public getCategories(): java.util.List<zendesk.support.CategoryItem>;
			public getCategoryCount(): number;
		}
	}
}

declare module zendesk {
	export module support {
		export class IdUtil {
			public static class: java.lang.Class<zendesk.support.IdUtil>;
			public constructor();
			public static newLongId(): number;
			public static newStringId(): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class LastSearch {
			public static class: java.lang.Class<zendesk.support.LastSearch>;
		}
	}
}

declare module zendesk {
	export module support {
		export class LegacyRequestMigrator extends zendesk.support.RequestMigrator {
			public static class: java.lang.Class<zendesk.support.LegacyRequestMigrator>;
			public clearLegacyRequestStorage(): void;
			public getLegacyRequests(): java.util.List<zendesk.support.RequestData>;
		}
	}
}

declare module zendesk {
	export module support {
		export class ListArticleQuery {
			public static class: java.lang.Class<zendesk.support.ListArticleQuery>;
			public setLocale(param0: java.util.Locale): void;
			public setResultsPerPage(param0: java.lang.Integer): void;
			public setPage(param0: java.lang.Integer): void;
			public getSortBy(): zendesk.support.SortBy;
			public setSortBy(param0: zendesk.support.SortBy): void;
			public constructor();
			public getPage(): java.lang.Integer;
			public getResultsPerPage(): java.lang.Integer;
			public getInclude(): string;
			public getSortOrder(): zendesk.support.SortOrder;
			public getLabelNames(): string;
			public setInclude(param0: string): void;
			public setLabelNames(param0: string): void;
			public getLocale(): java.util.Locale;
			public setSortOrder(param0: zendesk.support.SortOrder): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class Organization {
			public static class: java.lang.Class<zendesk.support.Organization>;
			public getName(): string;
			public getId(): java.lang.Long;
			public constructor();
		}
	}
}

declare module zendesk {
	export module support {
		export class PicassoTransformations {
			public static class: java.lang.Class<zendesk.support.PicassoTransformations>;
			public static getRoundWithBorderTransformation(param0: number, param1: number, param2: number): com.sebchlan.picassocompat.TransformationCompat;
			public static getRoundedTransformation(param0: number): com.sebchlan.picassocompat.TransformationCompat;
			public static getBlurTransformation(param0: globalAndroid.content.Context): com.sebchlan.picassocompat.TransformationCompat;
		}
		export module PicassoTransformations {
			export class BlurTransformation {
				public static class: java.lang.Class<zendesk.support.PicassoTransformations.BlurTransformation>;
				public transform(param0: globalAndroid.graphics.Bitmap): globalAndroid.graphics.Bitmap;
				public key(): string;
			}
			export class RoundedTransformation {
				public static class: java.lang.Class<zendesk.support.PicassoTransformations.RoundedTransformation>;
				public transform(param0: globalAndroid.graphics.Bitmap): globalAndroid.graphics.Bitmap;
				public key(): string;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export class ProviderModule {
			public static class: java.lang.Class<zendesk.support.ProviderModule>;
		}
	}
}

declare module zendesk {
	export module support {
		export class ProviderModule_ProvideHelpCenterProviderFactory extends dagger.internal.Factory<zendesk.support.HelpCenterProvider> {
			public static class: java.lang.Class<zendesk.support.ProviderModule_ProvideHelpCenterProviderFactory>;
			public get(): zendesk.support.HelpCenterProvider;
			public constructor(param0: zendesk.support.ProviderModule, param1: javax.inject.Provider<zendesk.support.SupportSettingsProvider>, param2: javax.inject.Provider<zendesk.support.SupportBlipsProvider>, param3: javax.inject.Provider<zendesk.support.ZendeskHelpCenterService>, param4: javax.inject.Provider<zendesk.support.HelpCenterSessionCache>, param5: javax.inject.Provider<zendesk.support.ZendeskTracker>);
			public static create(param0: zendesk.support.ProviderModule, param1: javax.inject.Provider<zendesk.support.SupportSettingsProvider>, param2: javax.inject.Provider<zendesk.support.SupportBlipsProvider>, param3: javax.inject.Provider<zendesk.support.ZendeskHelpCenterService>, param4: javax.inject.Provider<zendesk.support.HelpCenterSessionCache>, param5: javax.inject.Provider<zendesk.support.ZendeskTracker>): zendesk.support.ProviderModule_ProvideHelpCenterProviderFactory;
			public static provideHelpCenterProvider(param0: zendesk.support.ProviderModule, param1: zendesk.support.SupportSettingsProvider, param2: zendesk.support.SupportBlipsProvider, param3: any, param4: any, param5: any): zendesk.support.HelpCenterProvider;
		}
	}
}

declare module zendesk {
	export module support {
		export class ProviderModule_ProvideProviderStoreFactory extends dagger.internal.Factory<zendesk.support.ProviderStore> {
			public static class: java.lang.Class<zendesk.support.ProviderModule_ProvideProviderStoreFactory>;
			public static provideProviderStore(param0: zendesk.support.ProviderModule, param1: zendesk.support.HelpCenterProvider, param2: zendesk.support.RequestProvider, param3: zendesk.support.UploadProvider): zendesk.support.ProviderStore;
			public static create(param0: zendesk.support.ProviderModule, param1: javax.inject.Provider<zendesk.support.HelpCenterProvider>, param2: javax.inject.Provider<zendesk.support.RequestProvider>, param3: javax.inject.Provider<zendesk.support.UploadProvider>): zendesk.support.ProviderModule_ProvideProviderStoreFactory;
			public constructor(param0: zendesk.support.ProviderModule, param1: javax.inject.Provider<zendesk.support.HelpCenterProvider>, param2: javax.inject.Provider<zendesk.support.RequestProvider>, param3: javax.inject.Provider<zendesk.support.UploadProvider>);
			public get(): zendesk.support.ProviderStore;
		}
	}
}

declare module zendesk {
	export module support {
		export class ProviderModule_ProvideRequestProviderFactory extends dagger.internal.Factory<zendesk.support.RequestProvider> {
			public static class: java.lang.Class<zendesk.support.ProviderModule_ProvideRequestProviderFactory>;
			public static create(param0: zendesk.support.ProviderModule, param1: javax.inject.Provider<zendesk.support.SupportSettingsProvider>, param2: javax.inject.Provider<zendesk.core.AuthenticationProvider>, param3: javax.inject.Provider<zendesk.support.ZendeskRequestService>, param4: javax.inject.Provider<zendesk.support.RequestStorage>, param5: javax.inject.Provider<zendesk.support.RequestSessionCache>, param6: javax.inject.Provider<zendesk.support.ZendeskTracker>, param7: javax.inject.Provider<zendesk.support.SupportSdkMetadata>, param8: javax.inject.Provider<zendesk.support.SupportBlipsProvider>): zendesk.support.ProviderModule_ProvideRequestProviderFactory;
			public constructor(param0: zendesk.support.ProviderModule, param1: javax.inject.Provider<zendesk.support.SupportSettingsProvider>, param2: javax.inject.Provider<zendesk.core.AuthenticationProvider>, param3: javax.inject.Provider<zendesk.support.ZendeskRequestService>, param4: javax.inject.Provider<zendesk.support.RequestStorage>, param5: javax.inject.Provider<zendesk.support.RequestSessionCache>, param6: javax.inject.Provider<zendesk.support.ZendeskTracker>, param7: javax.inject.Provider<zendesk.support.SupportSdkMetadata>, param8: javax.inject.Provider<zendesk.support.SupportBlipsProvider>);
			public static provideRequestProvider(param0: zendesk.support.ProviderModule, param1: zendesk.support.SupportSettingsProvider, param2: zendesk.core.AuthenticationProvider, param3: any, param4: any, param5: any, param6: any, param7: any, param8: zendesk.support.SupportBlipsProvider): zendesk.support.RequestProvider;
			public get(): zendesk.support.RequestProvider;
		}
	}
}

declare module zendesk {
	export module support {
		export class ProviderModule_ProvideSdkSettingsProviderFactory extends dagger.internal.Factory<zendesk.support.SupportSettingsProvider> {
			public static class: java.lang.Class<zendesk.support.ProviderModule_ProvideSdkSettingsProviderFactory>;
			public constructor(param0: zendesk.support.ProviderModule, param1: javax.inject.Provider<zendesk.core.SettingsProvider>, param2: javax.inject.Provider<java.util.Locale>, param3: javax.inject.Provider<zendesk.core.ZendeskLocaleConverter>);
			public get(): zendesk.support.SupportSettingsProvider;
			public static provideSdkSettingsProvider(param0: zendesk.support.ProviderModule, param1: zendesk.core.SettingsProvider, param2: java.util.Locale, param3: zendesk.core.ZendeskLocaleConverter): zendesk.support.SupportSettingsProvider;
			public static create(param0: zendesk.support.ProviderModule, param1: javax.inject.Provider<zendesk.core.SettingsProvider>, param2: javax.inject.Provider<java.util.Locale>, param3: javax.inject.Provider<zendesk.core.ZendeskLocaleConverter>): zendesk.support.ProviderModule_ProvideSdkSettingsProviderFactory;
		}
	}
}

declare module zendesk {
	export module support {
		export class ProviderModule_ProvideSupportBlipsProviderFactory extends dagger.internal.Factory<zendesk.support.SupportBlipsProvider> {
			public static class: java.lang.Class<zendesk.support.ProviderModule_ProvideSupportBlipsProviderFactory>;
			public static provideSupportBlipsProvider(param0: zendesk.support.ProviderModule, param1: zendesk.core.BlipsProvider, param2: java.util.Locale): zendesk.support.SupportBlipsProvider;
			public constructor(param0: zendesk.support.ProviderModule, param1: javax.inject.Provider<zendesk.core.BlipsProvider>, param2: javax.inject.Provider<java.util.Locale>);
			public static create(param0: zendesk.support.ProviderModule, param1: javax.inject.Provider<zendesk.core.BlipsProvider>, param2: javax.inject.Provider<java.util.Locale>): zendesk.support.ProviderModule_ProvideSupportBlipsProviderFactory;
			public get(): zendesk.support.SupportBlipsProvider;
		}
	}
}

declare module zendesk {
	export module support {
		export class ProviderModule_ProvideSupportModuleFactory extends dagger.internal.Factory<zendesk.support.SupportModule> {
			public static class: java.lang.Class<zendesk.support.ProviderModule_ProvideSupportModuleFactory>;
			public static create(param0: zendesk.support.ProviderModule, param1: javax.inject.Provider<zendesk.support.RequestProvider>, param2: javax.inject.Provider<zendesk.support.UploadProvider>, param3: javax.inject.Provider<zendesk.support.HelpCenterProvider>, param4: javax.inject.Provider<zendesk.support.SupportSettingsProvider>, param5: javax.inject.Provider<zendesk.core.RestServiceProvider>, param6: javax.inject.Provider<zendesk.support.SupportBlipsProvider>, param7: javax.inject.Provider<zendesk.support.ZendeskTracker>, param8: javax.inject.Provider<zendesk.support.ArticleVoteStorage>): zendesk.support.ProviderModule_ProvideSupportModuleFactory;
			public static provideSupportModule(param0: zendesk.support.ProviderModule, param1: zendesk.support.RequestProvider, param2: zendesk.support.UploadProvider, param3: zendesk.support.HelpCenterProvider, param4: zendesk.support.SupportSettingsProvider, param5: zendesk.core.RestServiceProvider, param6: zendesk.support.SupportBlipsProvider, param7: any, param8: zendesk.support.ArticleVoteStorage): zendesk.support.SupportModule;
			public get(): zendesk.support.SupportModule;
			public constructor(param0: zendesk.support.ProviderModule, param1: javax.inject.Provider<zendesk.support.RequestProvider>, param2: javax.inject.Provider<zendesk.support.UploadProvider>, param3: javax.inject.Provider<zendesk.support.HelpCenterProvider>, param4: javax.inject.Provider<zendesk.support.SupportSettingsProvider>, param5: javax.inject.Provider<zendesk.core.RestServiceProvider>, param6: javax.inject.Provider<zendesk.support.SupportBlipsProvider>, param7: javax.inject.Provider<zendesk.support.ZendeskTracker>, param8: javax.inject.Provider<zendesk.support.ArticleVoteStorage>);
		}
	}
}

declare module zendesk {
	export module support {
		export class ProviderModule_ProvideUploadProviderFactory extends dagger.internal.Factory<zendesk.support.UploadProvider> {
			public static class: java.lang.Class<zendesk.support.ProviderModule_ProvideUploadProviderFactory>;
			public static provideUploadProvider(param0: zendesk.support.ProviderModule, param1: any): zendesk.support.UploadProvider;
			public constructor(param0: zendesk.support.ProviderModule, param1: javax.inject.Provider<zendesk.support.ZendeskUploadService>);
			public get(): zendesk.support.UploadProvider;
			public static create(param0: zendesk.support.ProviderModule, param1: javax.inject.Provider<zendesk.support.ZendeskUploadService>): zendesk.support.ProviderModule_ProvideUploadProviderFactory;
		}
	}
}

declare module zendesk {
	export module support {
		export class ProviderModule_ProvideZendeskLocaleConverterFactory extends dagger.internal.Factory<zendesk.core.ZendeskLocaleConverter> {
			public static class: java.lang.Class<zendesk.support.ProviderModule_ProvideZendeskLocaleConverterFactory>;
			public get(): zendesk.core.ZendeskLocaleConverter;
			public static create(param0: zendesk.support.ProviderModule): zendesk.support.ProviderModule_ProvideZendeskLocaleConverterFactory;
			public constructor(param0: zendesk.support.ProviderModule);
			public static provideZendeskLocaleConverter(param0: zendesk.support.ProviderModule): zendesk.core.ZendeskLocaleConverter;
		}
	}
}

declare module zendesk {
	export module support {
		export class ProviderModule_Proxy {
			public static class: java.lang.Class<zendesk.support.ProviderModule_Proxy>;
			public static newInstance(): zendesk.support.ProviderModule;
		}
	}
}

declare module zendesk {
	export module support {
		export class ProviderStore {
			public static class: java.lang.Class<zendesk.support.ProviderStore>;
			/**
			 * Constructs a new instance of the zendesk.support.ProviderStore interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				helpCenterProvider(): zendesk.support.HelpCenterProvider;
				requestProvider(): zendesk.support.RequestProvider;
				uploadProvider(): zendesk.support.UploadProvider;
			});
			public constructor();
			public helpCenterProvider(): zendesk.support.HelpCenterProvider;
			public requestProvider(): zendesk.support.RequestProvider;
			public uploadProvider(): zendesk.support.UploadProvider;
		}
	}
}

declare module zendesk {
	export module support {
		export class RawTicketField {
			public static class: java.lang.Class<zendesk.support.RawTicketField>;
		}
	}
}

declare module zendesk {
	export module support {
		export class RawTicketFieldOption {
			public static class: java.lang.Class<zendesk.support.RawTicketFieldOption>;
			public static create(param0: zendesk.support.RawTicketFieldOption): zendesk.support.TicketFieldOption;
		}
	}
}

declare module zendesk {
	export module support {
		export class RawTicketFieldSystemOption {
			public static class: java.lang.Class<zendesk.support.RawTicketFieldSystemOption>;
		}
	}
}

declare module zendesk {
	export module support {
		export class RawTicketForm {
			public static class: java.lang.Class<zendesk.support.RawTicketForm>;
			public static create(param0: zendesk.support.RawTicketForm, param1: java.util.List<zendesk.support.TicketField>): zendesk.support.TicketForm;
		}
	}
}

declare module zendesk {
	export module support {
		export class RawTicketFormResponse {
			public static class: java.lang.Class<zendesk.support.RawTicketFormResponse>;
		}
	}
}

declare module zendesk {
	export module support {
		export class RecordArticleViewRequest {
			public static class: java.lang.Class<zendesk.support.RecordArticleViewRequest>;
		}
	}
}

declare module zendesk {
	export module support {
		export class Request {
			public static class: java.lang.Class<zendesk.support.Request>;
			public getCommentCount(): java.lang.Integer;
			public getFirstComment(): zendesk.support.Comment;
			public getUrl(): string;
			public getDueAt(): java.util.Date;
			public getRequesterId(): java.lang.Long;
			public getLastCommentingAgents(): java.util.List<zendesk.support.User>;
			public getCreatedAt(): java.util.Date;
			public getStatus(): zendesk.support.RequestStatus;
			public constructor();
			public getUpdatedAt(): java.util.Date;
			public getCustomFields(): java.util.List<zendesk.support.CustomField>;
			public getOrganizationId(): java.lang.Long;
			public setComment(param0: zendesk.support.EndUserComment): void;
			public getId(): string;
			public getSubject(): string;
			public getPriority(): string;
			public getPublicUpdatedAt(): java.util.Date;
			public getLastComment(): zendesk.support.Comment;
			public getDescription(): string;
			public getCollaboratorIds(): java.util.List<java.lang.Long>;
			public getType(): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class RequestData {
			public static class: java.lang.Class<zendesk.support.RequestData>;
			public equals(param0: any): boolean;
			public toString(): string;
			public hashCode(): number;
		}
	}
}

declare module zendesk {
	export module support {
		export class RequestDataList {
			public static class: java.lang.Class<zendesk.support.RequestDataList>;
			public equals(param0: any): boolean;
			public hashCode(): number;
		}
	}
}

declare module zendesk {
	export module support {
		export class RequestMigrator {
			public static class: java.lang.Class<zendesk.support.RequestMigrator>;
			/**
			 * Constructs a new instance of the zendesk.support.RequestMigrator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getLegacyRequests(): java.util.List<zendesk.support.RequestData>;
				clearLegacyRequestStorage(): void;
			});
			public constructor();
			public clearLegacyRequestStorage(): void;
			public getLegacyRequests(): java.util.List<zendesk.support.RequestData>;
		}
	}
}

declare module zendesk {
	export module support {
		export class RequestProvider {
			public static class: java.lang.Class<zendesk.support.RequestProvider>;
			/**
			 * Constructs a new instance of the zendesk.support.RequestProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				createRequest(param0: zendesk.support.CreateRequest, param1: com.zendesk.service.ZendeskCallback<zendesk.support.Request>): void;
				getAllRequests(param0: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Request>>): void;
				getRequests(param0: string, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Request>>): void;
				getComments(param0: string, param1: com.zendesk.service.ZendeskCallback<zendesk.support.CommentsResponse>): void;
				getCommentsSince(param0: string, param1: java.util.Date, param2: boolean, param3: com.zendesk.service.ZendeskCallback<zendesk.support.CommentsResponse>): void;
				addComment(param0: string, param1: zendesk.support.EndUserComment, param2: com.zendesk.service.ZendeskCallback<zendesk.support.Comment>): void;
				getRequest(param0: string, param1: com.zendesk.service.ZendeskCallback<zendesk.support.Request>): void;
				getTicketFormsById(param0: java.util.List<java.lang.Long>, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.TicketForm>>): void;
				getUpdatesForDevice(param0: com.zendesk.service.ZendeskCallback<zendesk.support.RequestUpdates>): void;
				markRequestAsRead(param0: string, param1: number): void;
				markRequestAsUnread(param0: string): void;
			});
			public constructor();
			public createRequest(param0: zendesk.support.CreateRequest, param1: com.zendesk.service.ZendeskCallback<zendesk.support.Request>): void;
			public getCommentsSince(param0: string, param1: java.util.Date, param2: boolean, param3: com.zendesk.service.ZendeskCallback<zendesk.support.CommentsResponse>): void;
			public getUpdatesForDevice(param0: com.zendesk.service.ZendeskCallback<zendesk.support.RequestUpdates>): void;
			public addComment(param0: string, param1: zendesk.support.EndUserComment, param2: com.zendesk.service.ZendeskCallback<zendesk.support.Comment>): void;
			public getComments(param0: string, param1: com.zendesk.service.ZendeskCallback<zendesk.support.CommentsResponse>): void;
			public getTicketFormsById(param0: java.util.List<java.lang.Long>, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.TicketForm>>): void;
			public markRequestAsRead(param0: string, param1: number): void;
			public markRequestAsUnread(param0: string): void;
			public getRequests(param0: string, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Request>>): void;
			public getAllRequests(param0: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Request>>): void;
			public getRequest(param0: string, param1: com.zendesk.service.ZendeskCallback<zendesk.support.Request>): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class RequestResponse {
			public static class: java.lang.Class<zendesk.support.RequestResponse>;
		}
	}
}

declare module zendesk {
	export module support {
		export class RequestService {
			public static class: java.lang.Class<zendesk.support.RequestService>;
			/**
			 * Constructs a new instance of the zendesk.support.RequestService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				createRequest(param0: string, param1: zendesk.support.CreateRequestWrapper): retrofit2.Call<zendesk.support.RequestResponse>;
				getAllRequests(param0: string, param1: string): retrofit2.Call<zendesk.support.RequestsResponse>;
				getManyRequests(param0: string, param1: string, param2: string): retrofit2.Call<zendesk.support.RequestsResponse>;
				getComments(param0: string): retrofit2.Call<zendesk.support.CommentsResponse>;
				getCommentsSince(param0: string, param1: string, param2: string): retrofit2.Call<zendesk.support.CommentsResponse>;
				addComment(param0: string, param1: zendesk.support.UpdateRequestWrapper): retrofit2.Call<zendesk.support.RequestResponse>;
				getRequest(param0: string, param1: string): retrofit2.Call<zendesk.support.RequestResponse>;
				getTicketFormsById(param0: string, param1: string): retrofit2.Call<zendesk.support.RawTicketFormResponse>;
			});
			public constructor();
			public getCommentsSince(param0: string, param1: string, param2: string): retrofit2.Call<zendesk.support.CommentsResponse>;
			public getManyRequests(param0: string, param1: string, param2: string): retrofit2.Call<zendesk.support.RequestsResponse>;
			public getRequest(param0: string, param1: string): retrofit2.Call<zendesk.support.RequestResponse>;
			public getTicketFormsById(param0: string, param1: string): retrofit2.Call<zendesk.support.RawTicketFormResponse>;
			public getComments(param0: string): retrofit2.Call<zendesk.support.CommentsResponse>;
			public addComment(param0: string, param1: zendesk.support.UpdateRequestWrapper): retrofit2.Call<zendesk.support.RequestResponse>;
			public getAllRequests(param0: string, param1: string): retrofit2.Call<zendesk.support.RequestsResponse>;
			public createRequest(param0: string, param1: zendesk.support.CreateRequestWrapper): retrofit2.Call<zendesk.support.RequestResponse>;
		}
	}
}

declare module zendesk {
	export module support {
		export class RequestSessionCache {
			public static class: java.lang.Class<zendesk.support.RequestSessionCache>;
			/**
			 * Constructs a new instance of the zendesk.support.RequestSessionCache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				updateTicketFormCache(param0: java.util.List<zendesk.support.TicketForm>): void;
				getTicketFormsById(param0: java.util.List<java.lang.Long>): java.util.List<zendesk.support.TicketForm>;
				containsAllTicketForms(param0: java.util.List<java.lang.Long>): boolean;
			});
			public constructor();
			public updateTicketFormCache(param0: java.util.List<zendesk.support.TicketForm>): void;
			public getTicketFormsById(param0: java.util.List<java.lang.Long>): java.util.List<zendesk.support.TicketForm>;
			public containsAllTicketForms(param0: java.util.List<java.lang.Long>): boolean;
		}
	}
}

declare module zendesk {
	export module support {
		export class RequestStatus {
			public static class: java.lang.Class<zendesk.support.RequestStatus>;
			public static New: zendesk.support.RequestStatus;
			public static Open: zendesk.support.RequestStatus;
			public static Pending: zendesk.support.RequestStatus;
			public static Hold: zendesk.support.RequestStatus;
			public static Solved: zendesk.support.RequestStatus;
			public static Closed: zendesk.support.RequestStatus;
			public static values(): native.Array<zendesk.support.RequestStatus>;
			public static valueOf(param0: string): zendesk.support.RequestStatus;
		}
	}
}

declare module zendesk {
	export module support {
		export class RequestStorage {
			public static class: java.lang.Class<zendesk.support.RequestStorage>;
			/**
			 * Constructs a new instance of the zendesk.support.RequestStorage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				storeRequestData(param0: java.util.List<zendesk.support.RequestData>): void;
				getRequestData(): java.util.List<zendesk.support.RequestData>;
				isRequestDataExpired(): boolean;
				updateRequestData(param0: java.util.List<zendesk.support.Request>): void;
				markRequestAsRead(param0: string, param1: number): void;
				markRequestAsUnread(param0: string): void;
			});
			public constructor();
			public storeRequestData(param0: java.util.List<zendesk.support.RequestData>): void;
			public getRequestData(): java.util.List<zendesk.support.RequestData>;
			public isRequestDataExpired(): boolean;
			public markRequestAsRead(param0: string, param1: number): void;
			public markRequestAsUnread(param0: string): void;
			public updateRequestData(param0: java.util.List<zendesk.support.Request>): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class RequestUpdates {
			public static class: java.lang.Class<zendesk.support.RequestUpdates>;
			public getRequestUpdates(): java.util.Map<string,java.lang.Integer>;
			public totalUpdates(): number;
			public isRequestUnread(param0: string): boolean;
			public constructor(param0: java.util.Map<string,java.lang.Integer>);
			public hasUpdatedRequests(): boolean;
		}
	}
}

declare module zendesk {
	export module support {
		export class RequestsResponse extends zendesk.support.ResponseWrapper {
			public static class: java.lang.Class<zendesk.support.RequestsResponse>;
		}
	}
}

declare module zendesk {
	export module support {
		export abstract class ResponseWrapper {
			public static class: java.lang.Class<zendesk.support.ResponseWrapper>;
			public getCount(): java.lang.Integer;
			public constructor();
			public getNextPage(): string;
			public getPreviousPage(): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class SdkDependencyProvider {
			public static class: java.lang.Class<zendesk.support.SdkDependencyProvider>;
			public static INSTANCE: zendesk.support.SdkDependencyProvider;
			public static NOT_INITIALIZED_LOG: string;
			public static values(): native.Array<zendesk.support.SdkDependencyProvider>;
			public static valueOf(param0: string): zendesk.support.SdkDependencyProvider;
			public provideSupportSdkComponent(): zendesk.support.SupportSdkComponent;
			public isInitialized(): boolean;
		}
	}
}

declare module zendesk {
	export module support {
		export class SdkDependencyProvider_MembersInjector extends dagger.MembersInjector<zendesk.support.SdkDependencyProvider> {
			public static class: java.lang.Class<zendesk.support.SdkDependencyProvider_MembersInjector>;
			public injectMembers(param0: zendesk.support.SdkDependencyProvider): void;
			public static injectActionHandlers(param0: zendesk.support.SdkDependencyProvider, param1: java.util.List<zendesk.core.ActionHandler>): void;
			public constructor(param0: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>, param1: javax.inject.Provider<java.util.List<zendesk.core.ActionHandler>>);
			public static create(param0: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>, param1: javax.inject.Provider<java.util.List<zendesk.core.ActionHandler>>): dagger.MembersInjector<zendesk.support.SdkDependencyProvider>;
			public static injectRegistry(param0: zendesk.support.SdkDependencyProvider, param1: zendesk.core.ActionHandlerRegistry): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class SearchArticle {
			public static class: java.lang.Class<zendesk.support.SearchArticle>;
			public getCategory(): zendesk.support.Category;
			public getSection(): zendesk.support.Section;
			public getArticle(): zendesk.support.Article;
			public constructor(param0: zendesk.support.Article, param1: zendesk.support.Section, param2: zendesk.support.Category);
		}
	}
}

declare module zendesk {
	export module support {
		export class Section {
			public static class: java.lang.Class<zendesk.support.Section>;
			public getCategoryId(): java.lang.Long;
			public getUrl(): string;
			public isOutdated(): boolean;
			public getArticlesCount(): number;
			public getCreatedAt(): java.util.Date;
			public getPosition(): number;
			public constructor();
			public getUpdatedAt(): java.util.Date;
			public getLocale(): string;
			public getSorting(): string;
			public getName(): string;
			public getId(): java.lang.Long;
			public getSourceLocale(): string;
			public getDescription(): string;
			public getHtmlUrl(): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class SectionItem extends zendesk.support.HelpItem {
			public static class: java.lang.Class<zendesk.support.SectionItem>;
			public addArticle(param0: zendesk.support.ArticleItem): void;
			public equals(param0: any): boolean;
			public getName(): string;
			public getChildren(): java.util.List<zendesk.support.HelpItem>;
			public getId(): java.lang.Long;
			public getParentId(): java.lang.Long;
			public getTotalArticlesCount(): number;
			public constructor();
			public getViewType(): number;
			public hashCode(): number;
		}
	}
}

declare module zendesk {
	export module support {
		export class SectionResponse {
			public static class: java.lang.Class<zendesk.support.SectionResponse>;
		}
	}
}

declare module zendesk {
	export module support {
		export class SectionsResponse {
			public static class: java.lang.Class<zendesk.support.SectionsResponse>;
		}
	}
}

declare module zendesk {
	export module support {
		export class SeeAllArticlesItem extends zendesk.support.HelpItem {
			public static class: java.lang.Class<zendesk.support.SeeAllArticlesItem>;
			public equals(param0: any): boolean;
			public getName(): string;
			public constructor(param0: zendesk.support.SectionItem);
			public getId(): java.lang.Long;
			public getParentId(): java.lang.Long;
			public getSection(): zendesk.support.SectionItem;
			public setLoading(param0: boolean): void;
			public isLoading(): boolean;
			public getViewType(): number;
			public hashCode(): number;
		}
	}
}

declare module zendesk {
	export module support {
		export class ServiceModule {
			public static class: java.lang.Class<zendesk.support.ServiceModule>;
		}
	}
}

declare module zendesk {
	export module support {
		export class ServiceModule_ProvideCustomNetworkConfigFactory extends dagger.internal.Factory<zendesk.support.HelpCenterCachingNetworkConfig> {
			public static class: java.lang.Class<zendesk.support.ServiceModule_ProvideCustomNetworkConfigFactory>;
			public get(): zendesk.support.HelpCenterCachingNetworkConfig;
			public constructor(param0: javax.inject.Provider<zendesk.support.HelpCenterCachingInterceptor>);
			public static create(param0: javax.inject.Provider<zendesk.support.HelpCenterCachingInterceptor>): zendesk.support.ServiceModule_ProvideCustomNetworkConfigFactory;
			public static provideCustomNetworkConfig(param0: any): zendesk.support.HelpCenterCachingNetworkConfig;
		}
	}
}

declare module zendesk {
	export module support {
		export class ServiceModule_ProvideHelpCenterCachingInterceptorFactory extends dagger.internal.Factory<zendesk.support.HelpCenterCachingInterceptor> {
			public static class: java.lang.Class<zendesk.support.ServiceModule_ProvideHelpCenterCachingInterceptorFactory>;
			public static provideHelpCenterCachingInterceptor(): zendesk.support.HelpCenterCachingInterceptor;
			public constructor();
			public get(): zendesk.support.HelpCenterCachingInterceptor;
			public static create(): zendesk.support.ServiceModule_ProvideHelpCenterCachingInterceptorFactory;
		}
	}
}

declare module zendesk {
	export module support {
		export class ServiceModule_ProvideZendeskHelpCenterServiceFactory extends dagger.internal.Factory<zendesk.support.ZendeskHelpCenterService> {
			public static class: java.lang.Class<zendesk.support.ServiceModule_ProvideZendeskHelpCenterServiceFactory>;
			public static create(param0: javax.inject.Provider<zendesk.support.HelpCenterService>, param1: javax.inject.Provider<zendesk.core.ZendeskLocaleConverter>): zendesk.support.ServiceModule_ProvideZendeskHelpCenterServiceFactory;
			public constructor(param0: javax.inject.Provider<zendesk.support.HelpCenterService>, param1: javax.inject.Provider<zendesk.core.ZendeskLocaleConverter>);
			public get(): zendesk.support.ZendeskHelpCenterService;
			public static provideZendeskHelpCenterService(param0: any, param1: zendesk.core.ZendeskLocaleConverter): zendesk.support.ZendeskHelpCenterService;
		}
	}
}

declare module zendesk {
	export module support {
		export class ServiceModule_ProvideZendeskRequestServiceFactory extends dagger.internal.Factory<zendesk.support.ZendeskRequestService> {
			public static class: java.lang.Class<zendesk.support.ServiceModule_ProvideZendeskRequestServiceFactory>;
			public static create(param0: javax.inject.Provider<zendesk.support.RequestService>): zendesk.support.ServiceModule_ProvideZendeskRequestServiceFactory;
			public constructor(param0: javax.inject.Provider<zendesk.support.RequestService>);
			public get(): zendesk.support.ZendeskRequestService;
			public static provideZendeskRequestService(param0: any): zendesk.support.ZendeskRequestService;
		}
	}
}

declare module zendesk {
	export module support {
		export class ServiceModule_ProvideZendeskUploadServiceFactory extends dagger.internal.Factory<zendesk.support.ZendeskUploadService> {
			public static class: java.lang.Class<zendesk.support.ServiceModule_ProvideZendeskUploadServiceFactory>;
			public constructor(param0: javax.inject.Provider<zendesk.support.UploadService>);
			public static provideZendeskUploadService(param0: any): zendesk.support.ZendeskUploadService;
			public static create(param0: javax.inject.Provider<zendesk.support.UploadService>): zendesk.support.ServiceModule_ProvideZendeskUploadServiceFactory;
			public get(): zendesk.support.ZendeskUploadService;
		}
	}
}

declare module zendesk {
	export module support {
		export class ServiceModule_ProvidesHelpCenterServiceFactory extends dagger.internal.Factory<zendesk.support.HelpCenterService> {
			public static class: java.lang.Class<zendesk.support.ServiceModule_ProvidesHelpCenterServiceFactory>;
			public static create(param0: javax.inject.Provider<zendesk.core.RestServiceProvider>, param1: javax.inject.Provider<zendesk.support.HelpCenterCachingNetworkConfig>): zendesk.support.ServiceModule_ProvidesHelpCenterServiceFactory;
			public get(): zendesk.support.HelpCenterService;
			public constructor(param0: javax.inject.Provider<zendesk.core.RestServiceProvider>, param1: javax.inject.Provider<zendesk.support.HelpCenterCachingNetworkConfig>);
			public static providesHelpCenterService(param0: zendesk.core.RestServiceProvider, param1: any): zendesk.support.HelpCenterService;
		}
	}
}

declare module zendesk {
	export module support {
		export class ServiceModule_ProvidesRequestServiceFactory extends dagger.internal.Factory<zendesk.support.RequestService> {
			public static class: java.lang.Class<zendesk.support.ServiceModule_ProvidesRequestServiceFactory>;
			public get(): zendesk.support.RequestService;
			public static providesRequestService(param0: zendesk.core.RestServiceProvider): zendesk.support.RequestService;
			public constructor(param0: javax.inject.Provider<zendesk.core.RestServiceProvider>);
			public static create(param0: javax.inject.Provider<zendesk.core.RestServiceProvider>): zendesk.support.ServiceModule_ProvidesRequestServiceFactory;
		}
	}
}

declare module zendesk {
	export module support {
		export class ServiceModule_ProvidesUploadServiceFactory extends dagger.internal.Factory<zendesk.support.UploadService> {
			public static class: java.lang.Class<zendesk.support.ServiceModule_ProvidesUploadServiceFactory>;
			public static create(param0: javax.inject.Provider<zendesk.core.RestServiceProvider>): zendesk.support.ServiceModule_ProvidesUploadServiceFactory;
			public static providesUploadService(param0: zendesk.core.RestServiceProvider): zendesk.support.UploadService;
			public constructor(param0: javax.inject.Provider<zendesk.core.RestServiceProvider>);
			public get(): zendesk.support.UploadService;
		}
	}
}

declare module zendesk {
	export module support {
		export class ServiceModule_Proxy {
			public static class: java.lang.Class<zendesk.support.ServiceModule_Proxy>;
			public static newInstance(): zendesk.support.ServiceModule;
		}
	}
}

declare module zendesk {
	export module support {
		export class SimpleArticle {
			public static class: java.lang.Class<zendesk.support.SimpleArticle>;
			public getTitle(): string;
			public getId(): java.lang.Long;
			public constructor(param0: java.lang.Long, param1: string);
		}
	}
}

declare module zendesk {
	export module support {
		export class SortBy {
			public static class: java.lang.Class<zendesk.support.SortBy>;
			public static POSITION: zendesk.support.SortBy;
			public static TITLE: zendesk.support.SortBy;
			public static CREATED_AT: zendesk.support.SortBy;
			public static UPDATED_AT: zendesk.support.SortBy;
			public static valueOf(param0: string): zendesk.support.SortBy;
			public static values(): native.Array<zendesk.support.SortBy>;
			public getApiValue(): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class SortOrder {
			public static class: java.lang.Class<zendesk.support.SortOrder>;
			public static ASCENDING: zendesk.support.SortOrder;
			public static DESCENDING: zendesk.support.SortOrder;
			public static values(): native.Array<zendesk.support.SortOrder>;
			public static valueOf(param0: string): zendesk.support.SortOrder;
			public getApiValue(): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class StorageModule {
			public static class: java.lang.Class<zendesk.support.StorageModule>;
		}
	}
}

declare module zendesk {
	export module support {
		export class StorageModule_ProvideArticleVoteStorageFactory extends dagger.internal.Factory<zendesk.support.ArticleVoteStorage> {
			public static class: java.lang.Class<zendesk.support.StorageModule_ProvideArticleVoteStorageFactory>;
			public constructor(param0: zendesk.support.StorageModule, param1: javax.inject.Provider<zendesk.core.SessionStorage>);
			public static create(param0: zendesk.support.StorageModule, param1: javax.inject.Provider<zendesk.core.SessionStorage>): zendesk.support.StorageModule_ProvideArticleVoteStorageFactory;
			public get(): zendesk.support.ArticleVoteStorage;
			public static provideArticleVoteStorage(param0: zendesk.support.StorageModule, param1: zendesk.core.SessionStorage): zendesk.support.ArticleVoteStorage;
		}
	}
}

declare module zendesk {
	export module support {
		export class StorageModule_ProvideHelpCenterSessionCacheFactory extends dagger.internal.Factory<zendesk.support.HelpCenterSessionCache> {
			public static class: java.lang.Class<zendesk.support.StorageModule_ProvideHelpCenterSessionCacheFactory>;
			public static provideHelpCenterSessionCache(param0: zendesk.support.StorageModule): zendesk.support.HelpCenterSessionCache;
			public constructor(param0: zendesk.support.StorageModule);
			public get(): zendesk.support.HelpCenterSessionCache;
			public static create(param0: zendesk.support.StorageModule): zendesk.support.StorageModule_ProvideHelpCenterSessionCacheFactory;
		}
	}
}

declare module zendesk {
	export module support {
		export class StorageModule_ProvideRequestMigratorFactory extends dagger.internal.Factory<zendesk.support.RequestMigrator> {
			public static class: java.lang.Class<zendesk.support.StorageModule_ProvideRequestMigratorFactory>;
			public static create(param0: zendesk.support.StorageModule, param1: javax.inject.Provider<globalAndroid.content.Context>): zendesk.support.StorageModule_ProvideRequestMigratorFactory;
			public get(): zendesk.support.RequestMigrator;
			public constructor(param0: zendesk.support.StorageModule, param1: javax.inject.Provider<globalAndroid.content.Context>);
			public static provideRequestMigrator(param0: zendesk.support.StorageModule, param1: globalAndroid.content.Context): zendesk.support.RequestMigrator;
		}
	}
}

declare module zendesk {
	export module support {
		export class StorageModule_ProvideRequestSessionCacheFactory extends dagger.internal.Factory<zendesk.support.RequestSessionCache> {
			public static class: java.lang.Class<zendesk.support.StorageModule_ProvideRequestSessionCacheFactory>;
			public static create(param0: zendesk.support.StorageModule): zendesk.support.StorageModule_ProvideRequestSessionCacheFactory;
			public get(): zendesk.support.RequestSessionCache;
			public constructor(param0: zendesk.support.StorageModule);
			public static provideRequestSessionCache(param0: zendesk.support.StorageModule): zendesk.support.RequestSessionCache;
		}
	}
}

declare module zendesk {
	export module support {
		export class StorageModule_ProvideRequestStorageFactory extends dagger.internal.Factory<zendesk.support.RequestStorage> {
			public static class: java.lang.Class<zendesk.support.StorageModule_ProvideRequestStorageFactory>;
			public constructor(param0: zendesk.support.StorageModule, param1: javax.inject.Provider<zendesk.core.SessionStorage>, param2: javax.inject.Provider<zendesk.support.RequestMigrator>, param3: javax.inject.Provider<zendesk.core.MemoryCache>);
			public get(): zendesk.support.RequestStorage;
			public static create(param0: zendesk.support.StorageModule, param1: javax.inject.Provider<zendesk.core.SessionStorage>, param2: javax.inject.Provider<zendesk.support.RequestMigrator>, param3: javax.inject.Provider<zendesk.core.MemoryCache>): zendesk.support.StorageModule_ProvideRequestStorageFactory;
			public static provideRequestStorage(param0: zendesk.support.StorageModule, param1: zendesk.core.SessionStorage, param2: any, param3: zendesk.core.MemoryCache): zendesk.support.RequestStorage;
		}
	}
}

declare module zendesk {
	export module support {
		export class StorageModule_Proxy {
			public static class: java.lang.Class<zendesk.support.StorageModule_Proxy>;
			public static newInstance(): zendesk.support.StorageModule;
		}
	}
}

declare module zendesk {
	export module support {
		export class Streams {
			public static class: java.lang.Class<zendesk.support.Streams>;
			public static closeQuietly(param0: java.io.Closeable): void;
			public static toJson(param0: com.google.gson.Gson, param1: okio.Sink, param2: any): void;
			public constructor();
			public static fromJson(param0: com.google.gson.Gson, param1: okio.Source, param2: java.lang.reflect.Type): any;
			public static toWriter(param0: okio.Sink): java.io.Writer;
			public static use(param0: java.io.Closeable, param1: zendesk.support.Streams.Use<any,any>): any;
			public static toReader(param0: okio.Source): java.io.Reader;
		}
		export module Streams {
			export class Use<R, P>  extends java.lang.Object {
				public static class: java.lang.Class<zendesk.support.Streams.Use<any,any>>;
				/**
				 * Constructs a new instance of the zendesk.support.Streams$Use interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					use(param0: P): R;
				});
				public constructor();
				public use(param0: P): R;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export class SuggestedArticleResponse {
			public static class: java.lang.Class<zendesk.support.SuggestedArticleResponse>;
			public getResults(): java.util.List<zendesk.support.SimpleArticle>;
			public constructor();
		}
	}
}

declare module zendesk {
	export module support {
		export class SuggestedArticleSearch {
			public static class: java.lang.Class<zendesk.support.SuggestedArticleSearch>;
			public getLabelNames(): string;
			public getCategoryId(): java.lang.Long;
			public getQuery(): string;
			public getSectionId(): java.lang.Long;
			public getLocale(): java.util.Locale;
		}
		export module SuggestedArticleSearch {
			export class Builder {
				public static class: java.lang.Class<zendesk.support.SuggestedArticleSearch.Builder>;
				public withSectionId(param0: java.lang.Long): zendesk.support.SuggestedArticleSearch.Builder;
				public withQuery(param0: string): zendesk.support.SuggestedArticleSearch.Builder;
				public forLocale(param0: java.util.Locale): zendesk.support.SuggestedArticleSearch.Builder;
				public withLabelNames(param0: native.Array<string>): zendesk.support.SuggestedArticleSearch.Builder;
				public withCategoryId(param0: java.lang.Long): zendesk.support.SuggestedArticleSearch.Builder;
				public build(): zendesk.support.SuggestedArticleSearch;
				public constructor();
			}
		}
	}
}

declare module zendesk {
	export module support {
		export class Support {
			public static class: java.lang.Class<zendesk.support.Support>;
			public static INSTANCE: zendesk.support.Support;
			public provider(): zendesk.support.ProviderStore;
			public setHelpCenterLocaleOverride(param0: java.util.Locale): void;
			public static values(): native.Array<zendesk.support.Support>;
			public refreshRequest(param0: string, param1: globalAndroid.content.Context): boolean;
			public init(param0: zendesk.core.Zendesk): void;
			public static valueOf(param0: string): zendesk.support.Support;
			public getHelpCenterLocaleOverride(): java.util.Locale;
			public isInitialized(): boolean;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportApplicationModule {
			public static class: java.lang.Class<zendesk.support.SupportApplicationModule>;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportApplicationModule_ProvideLocaleFactory extends dagger.internal.Factory<java.util.Locale> {
			public static class: java.lang.Class<zendesk.support.SupportApplicationModule_ProvideLocaleFactory>;
			public static create(param0: zendesk.support.SupportApplicationModule): zendesk.support.SupportApplicationModule_ProvideLocaleFactory;
			public get(): java.util.Locale;
			public constructor(param0: zendesk.support.SupportApplicationModule);
			public static provideLocale(param0: zendesk.support.SupportApplicationModule): java.util.Locale;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportApplicationModule_ProvideMetadataFactory extends dagger.internal.Factory<zendesk.support.SupportSdkMetadata> {
			public static class: java.lang.Class<zendesk.support.SupportApplicationModule_ProvideMetadataFactory>;
			public constructor(param0: zendesk.support.SupportApplicationModule, param1: javax.inject.Provider<globalAndroid.content.Context>);
			public static provideMetadata(param0: zendesk.support.SupportApplicationModule, param1: globalAndroid.content.Context): zendesk.support.SupportSdkMetadata;
			public static create(param0: zendesk.support.SupportApplicationModule, param1: javax.inject.Provider<globalAndroid.content.Context>): zendesk.support.SupportApplicationModule_ProvideMetadataFactory;
			public get(): zendesk.support.SupportSdkMetadata;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportApplicationModule_ProvidesZendeskTrackerFactory extends dagger.internal.Factory<zendesk.support.ZendeskTracker> {
			public static class: java.lang.Class<zendesk.support.SupportApplicationModule_ProvidesZendeskTrackerFactory>;
			public constructor(param0: zendesk.support.SupportApplicationModule);
			public get(): zendesk.support.ZendeskTracker;
			public static providesZendeskTracker(param0: zendesk.support.SupportApplicationModule): zendesk.support.ZendeskTracker;
			public static create(param0: zendesk.support.SupportApplicationModule): zendesk.support.SupportApplicationModule_ProvidesZendeskTrackerFactory;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportBlipsProvider {
			public static class: java.lang.Class<zendesk.support.SupportBlipsProvider>;
			/**
			 * Constructs a new instance of the zendesk.support.SupportBlipsProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				supportSdkInit(): void;
				requestCreated(param0: string): void;
				requestUpdated(param0: string): void;
				requestViewed(param0: string): void;
				requestListViewed(): void;
				helpCenterSearch(param0: string): void;
				articleView(param0: zendesk.support.Article): void;
				articleVote(param0: java.lang.Long, param1: number): void;
			});
			public constructor();
			public requestListViewed(): void;
			public requestCreated(param0: string): void;
			public articleView(param0: zendesk.support.Article): void;
			public requestViewed(param0: string): void;
			public articleVote(param0: java.lang.Long, param1: number): void;
			public supportSdkInit(): void;
			public requestUpdated(param0: string): void;
			public helpCenterSearch(param0: string): void;
		}
		export module SupportBlipsProvider {
			export class ArticleVote {
				public static class: java.lang.Class<zendesk.support.SupportBlipsProvider.ArticleVote>;
				/**
				 * Constructs a new instance of the zendesk.support.SupportBlipsProvider$ArticleVote interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
				public static ARTICLE_VOTE_DOWN: number;
				public static ARTICLE_VOTE_UP: number;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportModule {
			public static class: java.lang.Class<zendesk.support.SupportModule>;
			public constructor(param0: zendesk.support.RequestProvider, param1: zendesk.support.UploadProvider, param2: zendesk.support.HelpCenterProvider, param3: zendesk.support.SupportSettingsProvider, param4: zendesk.support.SupportBlipsProvider, param5: okhttp3.OkHttpClient, param6: zendesk.support.ZendeskTracker, param7: zendesk.support.ArticleVoteStorage);
			public getId(): java.util.UUID;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportModule_ProvidesArticleVoteStorageFactory extends dagger.internal.Factory<zendesk.support.ArticleVoteStorage> {
			public static class: java.lang.Class<zendesk.support.SupportModule_ProvidesArticleVoteStorageFactory>;
			public constructor(param0: zendesk.support.SupportModule);
			public static create(param0: zendesk.support.SupportModule): zendesk.support.SupportModule_ProvidesArticleVoteStorageFactory;
			public get(): zendesk.support.ArticleVoteStorage;
			public static providesArticleVoteStorage(param0: zendesk.support.SupportModule): zendesk.support.ArticleVoteStorage;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportModule_ProvidesBlipsProviderFactory extends dagger.internal.Factory<zendesk.support.SupportBlipsProvider> {
			public static class: java.lang.Class<zendesk.support.SupportModule_ProvidesBlipsProviderFactory>;
			public constructor(param0: zendesk.support.SupportModule);
			public static create(param0: zendesk.support.SupportModule): zendesk.support.SupportModule_ProvidesBlipsProviderFactory;
			public static providesBlipsProvider(param0: zendesk.support.SupportModule): zendesk.support.SupportBlipsProvider;
			public get(): zendesk.support.SupportBlipsProvider;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportModule_ProvidesHelpCenterProviderFactory extends dagger.internal.Factory<zendesk.support.HelpCenterProvider> {
			public static class: java.lang.Class<zendesk.support.SupportModule_ProvidesHelpCenterProviderFactory>;
			public get(): zendesk.support.HelpCenterProvider;
			public static create(param0: zendesk.support.SupportModule): zendesk.support.SupportModule_ProvidesHelpCenterProviderFactory;
			public constructor(param0: zendesk.support.SupportModule);
			public static providesHelpCenterProvider(param0: zendesk.support.SupportModule): zendesk.support.HelpCenterProvider;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportModule_ProvidesOkHttpClientFactory extends dagger.internal.Factory<okhttp3.OkHttpClient> {
			public static class: java.lang.Class<zendesk.support.SupportModule_ProvidesOkHttpClientFactory>;
			public static create(param0: zendesk.support.SupportModule): zendesk.support.SupportModule_ProvidesOkHttpClientFactory;
			public constructor(param0: zendesk.support.SupportModule);
			public static providesOkHttpClient(param0: zendesk.support.SupportModule): okhttp3.OkHttpClient;
			public get(): okhttp3.OkHttpClient;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportModule_ProvidesRequestProviderFactory extends dagger.internal.Factory<zendesk.support.RequestProvider> {
			public static class: java.lang.Class<zendesk.support.SupportModule_ProvidesRequestProviderFactory>;
			public constructor(param0: zendesk.support.SupportModule);
			public static create(param0: zendesk.support.SupportModule): zendesk.support.SupportModule_ProvidesRequestProviderFactory;
			public static providesRequestProvider(param0: zendesk.support.SupportModule): zendesk.support.RequestProvider;
			public get(): zendesk.support.RequestProvider;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportModule_ProvidesSettingsProviderFactory extends dagger.internal.Factory<zendesk.support.SupportSettingsProvider> {
			public static class: java.lang.Class<zendesk.support.SupportModule_ProvidesSettingsProviderFactory>;
			public static create(param0: zendesk.support.SupportModule): zendesk.support.SupportModule_ProvidesSettingsProviderFactory;
			public constructor(param0: zendesk.support.SupportModule);
			public static providesSettingsProvider(param0: zendesk.support.SupportModule): zendesk.support.SupportSettingsProvider;
			public get(): zendesk.support.SupportSettingsProvider;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportModule_ProvidesUploadProviderFactory extends dagger.internal.Factory<zendesk.support.UploadProvider> {
			public static class: java.lang.Class<zendesk.support.SupportModule_ProvidesUploadProviderFactory>;
			public constructor(param0: zendesk.support.SupportModule);
			public static providesUploadProvider(param0: zendesk.support.SupportModule): zendesk.support.UploadProvider;
			public static create(param0: zendesk.support.SupportModule): zendesk.support.SupportModule_ProvidesUploadProviderFactory;
			public get(): zendesk.support.UploadProvider;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportModule_ProvidesZendeskTrackerFactory extends dagger.internal.Factory<zendesk.support.ZendeskTracker> {
			public static class: java.lang.Class<zendesk.support.SupportModule_ProvidesZendeskTrackerFactory>;
			public constructor(param0: zendesk.support.SupportModule);
			public static create(param0: zendesk.support.SupportModule): zendesk.support.SupportModule_ProvidesZendeskTrackerFactory;
			public static providesZendeskTracker(param0: zendesk.support.SupportModule): zendesk.support.ZendeskTracker;
			public get(): zendesk.support.ZendeskTracker;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkComponent {
			public static class: java.lang.Class<zendesk.support.SupportSdkComponent>;
			/**
			 * Constructs a new instance of the zendesk.support.SupportSdkComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				inject(param0: zendesk.support.guide.ViewArticleActivity): void;
				inject(param0: zendesk.support.guide.HelpCenterActivity): void;
				inject(param0: zendesk.support.guide.HelpCenterFragment): void;
				inject(param0: zendesk.support.SdkDependencyProvider): void;
				inject(param0: zendesk.support.DeepLinkingBroadcastReceiver): void;
				helpCenterProvider(): zendesk.support.HelpCenterProvider;
				plus(param0: zendesk.support.request.RequestModule): zendesk.support.request.RequestComponent;
				plus(param0: zendesk.support.requestlist.RequestListModule): zendesk.support.requestlist.RequestListComponent;
			});
			public constructor();
			public static SUPPORT_MAIN_THREAD_EXECUTOR: string;
			public plus(param0: zendesk.support.requestlist.RequestListModule): zendesk.support.requestlist.RequestListComponent;
			public plus(param0: zendesk.support.request.RequestModule): zendesk.support.request.RequestComponent;
			public inject(param0: zendesk.support.guide.HelpCenterActivity): void;
			public helpCenterProvider(): zendesk.support.HelpCenterProvider;
			public inject(param0: zendesk.support.SdkDependencyProvider): void;
			public inject(param0: zendesk.support.guide.ViewArticleActivity): void;
			public inject(param0: zendesk.support.DeepLinkingBroadcastReceiver): void;
			public inject(param0: zendesk.support.guide.HelpCenterFragment): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkMetadata {
			public static class: java.lang.Class<zendesk.support.SupportSdkMetadata>;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkModule {
			public static class: java.lang.Class<zendesk.support.SupportSdkModule>;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkModule_MainThreadExecutorFactory extends dagger.internal.Factory<java.util.concurrent.Executor> {
			public static class: java.lang.Class<zendesk.support.SupportSdkModule_MainThreadExecutorFactory>;
			public constructor(param0: zendesk.support.SupportSdkModule);
			public get(): java.util.concurrent.Executor;
			public static mainThreadExecutor(param0: zendesk.support.SupportSdkModule): java.util.concurrent.Executor;
			public static create(param0: zendesk.support.SupportSdkModule): zendesk.support.SupportSdkModule_MainThreadExecutorFactory;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkModule_ProvidesActionHandlersFactory extends dagger.internal.Factory<java.util.List<zendesk.core.ActionHandler>> {
			public static class: java.lang.Class<zendesk.support.SupportSdkModule_ProvidesActionHandlersFactory>;
			public constructor(param0: zendesk.support.SupportSdkModule);
			public get(): java.util.List<zendesk.core.ActionHandler>;
			public static create(param0: zendesk.support.SupportSdkModule): zendesk.support.SupportSdkModule_ProvidesActionHandlersFactory;
			public static providesActionHandlers(param0: zendesk.support.SupportSdkModule): java.util.List<zendesk.core.ActionHandler>;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkModule_ProvidesDeepLinkHelperFactory extends dagger.internal.Factory<zendesk.support.ZendeskDeepLinkHelper> {
			public static class: java.lang.Class<zendesk.support.SupportSdkModule_ProvidesDeepLinkHelperFactory>;
			public static create(param0: zendesk.support.SupportSdkModule, param1: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>, param2: javax.inject.Provider<zendesk.support.ZendeskDeepLinkParser>): zendesk.support.SupportSdkModule_ProvidesDeepLinkHelperFactory;
			public static providesDeepLinkHelper(param0: zendesk.support.SupportSdkModule, param1: zendesk.core.ActionHandlerRegistry, param2: any): zendesk.support.ZendeskDeepLinkHelper;
			public constructor(param0: zendesk.support.SupportSdkModule, param1: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>, param2: javax.inject.Provider<zendesk.support.ZendeskDeepLinkParser>);
			public get(): zendesk.support.ZendeskDeepLinkHelper;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkModule_ProvidesDeepLinkParserFactory extends dagger.internal.Factory<zendesk.support.ZendeskDeepLinkParser> {
			public static class: java.lang.Class<zendesk.support.SupportSdkModule_ProvidesDeepLinkParserFactory>;
			public static providesDeepLinkParser(param0: zendesk.support.SupportSdkModule, param1: string, param2: java.util.List<zendesk.support.ZendeskDeepLinkParser.Module>): zendesk.support.ZendeskDeepLinkParser;
			public get(): zendesk.support.ZendeskDeepLinkParser;
			public static create(param0: zendesk.support.SupportSdkModule, param1: javax.inject.Provider<string>, param2: javax.inject.Provider<java.util.List<zendesk.support.ZendeskDeepLinkParser.Module>>): zendesk.support.SupportSdkModule_ProvidesDeepLinkParserFactory;
			public constructor(param0: zendesk.support.SupportSdkModule, param1: javax.inject.Provider<string>, param2: javax.inject.Provider<java.util.List<zendesk.support.ZendeskDeepLinkParser.Module>>);
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkModule_ProvidesFactory extends dagger.internal.Factory<com.google.gson.Gson> {
			public static class: java.lang.Class<zendesk.support.SupportSdkModule_ProvidesFactory>;
			public constructor(param0: zendesk.support.SupportSdkModule);
			public static provides(param0: zendesk.support.SupportSdkModule): com.google.gson.Gson;
			public static create(param0: zendesk.support.SupportSdkModule): zendesk.support.SupportSdkModule_ProvidesFactory;
			public get(): com.google.gson.Gson;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkModule_ProvidesParserModuleFactory extends dagger.internal.Factory<java.util.List<zendesk.support.ZendeskDeepLinkParser.Module>> {
			public static class: java.lang.Class<zendesk.support.SupportSdkModule_ProvidesParserModuleFactory>;
			public constructor(param0: zendesk.support.SupportSdkModule);
			public get(): java.util.List<zendesk.support.ZendeskDeepLinkParser.Module>;
			public static providesParserModule(param0: zendesk.support.SupportSdkModule): java.util.List<zendesk.support.ZendeskDeepLinkParser.Module>;
			public static create(param0: zendesk.support.SupportSdkModule): zendesk.support.SupportSdkModule_ProvidesParserModuleFactory;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkModule_ProvidesPicassoFactory extends dagger.internal.Factory<com.sebchlan.picassocompat.PicassoCompat> {
			public static class: java.lang.Class<zendesk.support.SupportSdkModule_ProvidesPicassoFactory>;
			public static create(param0: zendesk.support.SupportSdkModule, param1: javax.inject.Provider<globalAndroid.content.Context>, param2: javax.inject.Provider<okhttp3.OkHttpClient>, param3: javax.inject.Provider<java.util.concurrent.ExecutorService>): zendesk.support.SupportSdkModule_ProvidesPicassoFactory;
			public get(): com.sebchlan.picassocompat.PicassoCompat;
			public constructor(param0: zendesk.support.SupportSdkModule, param1: javax.inject.Provider<globalAndroid.content.Context>, param2: javax.inject.Provider<okhttp3.OkHttpClient>, param3: javax.inject.Provider<java.util.concurrent.ExecutorService>);
			public static providesPicasso(param0: zendesk.support.SupportSdkModule, param1: globalAndroid.content.Context, param2: okhttp3.OkHttpClient, param3: java.util.concurrent.ExecutorService): com.sebchlan.picassocompat.PicassoCompat;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkModule_ProvidesRequestDiskLruCacheFactory extends dagger.internal.Factory<com.jakewharton.disklrucache.DiskLruCache> {
			public static class: java.lang.Class<zendesk.support.SupportSdkModule_ProvidesRequestDiskLruCacheFactory>;
			public static providesRequestDiskLruCache(param0: zendesk.support.SupportSdkModule, param1: zendesk.core.SessionStorage): com.jakewharton.disklrucache.DiskLruCache;
			public get(): com.jakewharton.disklrucache.DiskLruCache;
			public static create(param0: zendesk.support.SupportSdkModule, param1: javax.inject.Provider<zendesk.core.SessionStorage>): zendesk.support.SupportSdkModule_ProvidesRequestDiskLruCacheFactory;
			public constructor(param0: zendesk.support.SupportSdkModule, param1: javax.inject.Provider<zendesk.core.SessionStorage>);
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkModule_ProvidesZendeskUrlFactory extends dagger.internal.Factory<string> {
			public static class: java.lang.Class<zendesk.support.SupportSdkModule_ProvidesZendeskUrlFactory>;
			public static create(param0: zendesk.support.SupportSdkModule, param1: javax.inject.Provider<zendesk.core.ApplicationConfiguration>): zendesk.support.SupportSdkModule_ProvidesZendeskUrlFactory;
			public constructor(param0: zendesk.support.SupportSdkModule, param1: javax.inject.Provider<zendesk.core.ApplicationConfiguration>);
			public get(): string;
			public static providesZendeskUrl(param0: zendesk.support.SupportSdkModule, param1: zendesk.core.ApplicationConfiguration): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkModule_Proxy {
			public static class: java.lang.Class<zendesk.support.SupportSdkModule_Proxy>;
			public static newInstance(): zendesk.support.SupportSdkModule;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkModule_RequestInfoDataSourceFactory extends dagger.internal.Factory<zendesk.support.requestlist.RequestInfoDataSource.LocalDataSource> {
			public static class: java.lang.Class<zendesk.support.SupportSdkModule_RequestInfoDataSourceFactory>;
			public static requestInfoDataSource(param0: zendesk.support.SupportSdkModule, param1: zendesk.support.SupportUiStorage, param2: java.util.concurrent.Executor, param3: java.util.concurrent.ExecutorService): zendesk.support.requestlist.RequestInfoDataSource.LocalDataSource;
			public get(): zendesk.support.requestlist.RequestInfoDataSource.LocalDataSource;
			public constructor(param0: zendesk.support.SupportSdkModule, param1: javax.inject.Provider<zendesk.support.SupportUiStorage>, param2: javax.inject.Provider<java.util.concurrent.Executor>, param3: javax.inject.Provider<java.util.concurrent.ExecutorService>);
			public static create(param0: zendesk.support.SupportSdkModule, param1: javax.inject.Provider<zendesk.support.SupportUiStorage>, param2: javax.inject.Provider<java.util.concurrent.Executor>, param3: javax.inject.Provider<java.util.concurrent.ExecutorService>): zendesk.support.SupportSdkModule_RequestInfoDataSourceFactory;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkModule_SupportUiStorageFactory extends dagger.internal.Factory<zendesk.support.SupportUiStorage> {
			public static class: java.lang.Class<zendesk.support.SupportSdkModule_SupportUiStorageFactory>;
			public get(): zendesk.support.SupportUiStorage;
			public static create(param0: zendesk.support.SupportSdkModule, param1: javax.inject.Provider<com.jakewharton.disklrucache.DiskLruCache>, param2: javax.inject.Provider<com.google.gson.Gson>): zendesk.support.SupportSdkModule_SupportUiStorageFactory;
			public constructor(param0: zendesk.support.SupportSdkModule, param1: javax.inject.Provider<com.jakewharton.disklrucache.DiskLruCache>, param2: javax.inject.Provider<com.google.gson.Gson>);
			public static supportUiStorage(param0: zendesk.support.SupportSdkModule, param1: com.jakewharton.disklrucache.DiskLruCache, param2: com.google.gson.Gson): zendesk.support.SupportUiStorage;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkProvidersComponent {
			public static class: java.lang.Class<zendesk.support.SupportSdkProvidersComponent>;
			/**
			 * Constructs a new instance of the zendesk.support.SupportSdkProvidersComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				inject(param0: zendesk.support.Support): zendesk.support.Support;
			});
			public constructor();
			public inject(param0: zendesk.support.Support): zendesk.support.Support;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkSettings {
			public static class: java.lang.Class<zendesk.support.SupportSdkSettings>;
			public getContactZendeskTags(): java.util.List<string>;
			public isAttachmentsEnabled(): boolean;
			public hasHelpCenterSettings(): boolean;
			public isTicketFormSupportAvailable(): boolean;
			public getHelpCenterLocale(): string;
			public getMaxAttachmentSize(): number;
			public isNeverAskForEmailEnabled(): boolean;
			public getReferrerUrl(): string;
			public constructor(param0: zendesk.support.SupportSettings, param1: zendesk.support.HelpCenterSettings, param2: zendesk.core.AuthenticationType);
			public isHelpCenterArticleVotingEnabled(): boolean;
			public isHelpCenterEnabled(): boolean;
			public getAuthenticationType(): zendesk.core.AuthenticationType;
			public isShowReferrerLogoEnabled(): boolean;
			public isConversationsEnabled(): boolean;
			public isShowClosedRequests(): boolean;
			public getRequestSystemMessage(): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkStartupProvider extends zendesk.core.SdkStartUpProvider {
			public static class: java.lang.Class<zendesk.support.SupportSdkStartupProvider>;
			public onStartUp(param0: globalAndroid.content.Context): void;
			public constructor();
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSettings extends zendesk.core.Settings {
			public static class: java.lang.Class<zendesk.support.SupportSettings>;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSettingsProvider {
			public static class: java.lang.Class<zendesk.support.SupportSettingsProvider>;
			/**
			 * Constructs a new instance of the zendesk.support.SupportSettingsProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getSettings(param0: com.zendesk.service.ZendeskCallback<zendesk.support.SupportSdkSettings>): void;
			});
			public constructor();
			public getSettings(param0: com.zendesk.service.ZendeskCallback<zendesk.support.SupportSdkSettings>): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportUiStorage {
			public static class: java.lang.Class<zendesk.support.SupportUiStorage>;
			public static REQUEST_MAPPER: string;
			public constructor(param0: com.jakewharton.disklrucache.DiskLruCache, param1: com.google.gson.Gson);
			public write(param0: string, param1: any): void;
			public read(param0: string, param1: java.lang.reflect.Type): any;
		}
	}
}

declare module zendesk {
	export module support {
		export class Support_MembersInjector extends dagger.MembersInjector<zendesk.support.Support> {
			public static class: java.lang.Class<zendesk.support.Support_MembersInjector>;
			public static injectBlipsProvider(param0: zendesk.support.Support, param1: zendesk.support.SupportBlipsProvider): void;
			public static injectAuthenticationProvider(param0: zendesk.support.Support, param1: zendesk.core.AuthenticationProvider): void;
			public static injectRequestProvider(param0: zendesk.support.Support, param1: zendesk.support.RequestProvider): void;
			public static injectProviderStore(param0: zendesk.support.Support, param1: zendesk.support.ProviderStore): void;
			public injectMembers(param0: zendesk.support.Support): void;
			public constructor(param0: javax.inject.Provider<zendesk.support.ProviderStore>, param1: javax.inject.Provider<zendesk.support.SupportModule>, param2: javax.inject.Provider<zendesk.support.RequestMigrator>, param3: javax.inject.Provider<zendesk.support.SupportBlipsProvider>, param4: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>, param5: javax.inject.Provider<zendesk.support.RequestProvider>, param6: javax.inject.Provider<zendesk.core.AuthenticationProvider>);
			public static injectSupportModule(param0: zendesk.support.Support, param1: zendesk.support.SupportModule): void;
			public static create(param0: javax.inject.Provider<zendesk.support.ProviderStore>, param1: javax.inject.Provider<zendesk.support.SupportModule>, param2: javax.inject.Provider<zendesk.support.RequestMigrator>, param3: javax.inject.Provider<zendesk.support.SupportBlipsProvider>, param4: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>, param5: javax.inject.Provider<zendesk.support.RequestProvider>, param6: javax.inject.Provider<zendesk.core.AuthenticationProvider>): dagger.MembersInjector<zendesk.support.Support>;
			public static injectActionHandlerRegistry(param0: zendesk.support.Support, param1: zendesk.core.ActionHandlerRegistry): void;
			public static injectRequestMigrator(param0: zendesk.support.Support, param1: any): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class TicketField {
			public static class: java.lang.Class<zendesk.support.TicketField>;
			public getTitle(): string;
			public getId(): number;
			public getTitleInPortal(): string;
			public getRegexpForValidation(): string;
			public getTicketFieldSystemOptions(): java.util.List<zendesk.support.TicketFieldSystemOption>;
			public getDescription(): string;
			public getTicketFieldOptions(): java.util.List<zendesk.support.TicketFieldOption>;
			public getType(): zendesk.support.TicketFieldType;
		}
	}
}

declare module zendesk {
	export module support {
		export class TicketFieldOption {
			public static class: java.lang.Class<zendesk.support.TicketFieldOption>;
			public getName(): string;
			public getId(): number;
			public getValue(): string;
			public isDefault(): boolean;
		}
	}
}

declare module zendesk {
	export module support {
		export class TicketFieldSystemOption {
			public static class: java.lang.Class<zendesk.support.TicketFieldSystemOption>;
			public getName(): string;
			public getValue(): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class TicketFieldType {
			public static class: java.lang.Class<zendesk.support.TicketFieldType>;
			public static Checkbox: zendesk.support.TicketFieldType;
			public static Date: zendesk.support.TicketFieldType;
			public static Decimal: zendesk.support.TicketFieldType;
			public static Description: zendesk.support.TicketFieldType;
			public static Integer: zendesk.support.TicketFieldType;
			public static PartialCreditCard: zendesk.support.TicketFieldType;
			public static Priority: zendesk.support.TicketFieldType;
			public static Status: zendesk.support.TicketFieldType;
			public static TicketType: zendesk.support.TicketFieldType;
			public static Regexp: zendesk.support.TicketFieldType;
			public static Subject: zendesk.support.TicketFieldType;
			public static Tagger: zendesk.support.TicketFieldType;
			public static Text: zendesk.support.TicketFieldType;
			public static TextArea: zendesk.support.TicketFieldType;
			public static MultiSelect: zendesk.support.TicketFieldType;
			public static Unknown: zendesk.support.TicketFieldType;
			public static valueOf(param0: string): zendesk.support.TicketFieldType;
			public static values(): native.Array<zendesk.support.TicketFieldType>;
		}
	}
}

declare module zendesk {
	export module support {
		export class TicketForm {
			public static class: java.lang.Class<zendesk.support.TicketForm>;
			public constructor(param0: number, param1: string, param2: java.util.List<zendesk.support.TicketField>);
			public getName(): string;
			public getId(): number;
			public getTicketFields(): java.util.List<zendesk.support.TicketField>;
		}
	}
}

declare module zendesk {
	export module support {
		export class TicketFormSettings {
			public static class: java.lang.Class<zendesk.support.TicketFormSettings>;
			public isAvailable(): boolean;
		}
	}
}

declare module zendesk {
	export module support {
		export class UiUtils {
			public static class: java.lang.Class<zendesk.support.UiUtils>;
			public static dismissKeyboard(param0: globalAndroid.view.View): void;
			public static decodeHtmlEntities(param0: string): string;
			public static showKeyboard(param0: globalAndroid.view.View): void;
			public internalThemeAttributeToPixels(param0: number, param1: globalAndroid.content.Context, param2: number, param3: number): number;
			public static resolveColor(param0: number, param1: globalAndroid.content.Context): number;
			public static setVisibility(param0: globalAndroid.view.View, param1: number): void;
			public internalThemeAttributeToColor(param0: number, param1: globalAndroid.content.Context, param2: number): number;
			public static themeAttributeToColor(param0: number, param1: globalAndroid.content.Context, param2: number): number;
			public static setTint(param0: number, param1: globalAndroid.graphics.drawable.Drawable, param2: globalAndroid.view.View): void;
			public internalDismissKeyboard(param0: globalAndroid.app.Activity): void;
			public internalShowKeyboard(param0: globalAndroid.view.View): void;
			public internalSetTint(param0: number, param1: globalAndroid.graphics.drawable.Drawable, param2: globalAndroid.view.View): void;
			public static setUiUtils(param0: zendesk.support.UiUtils): void;
			public static dismissKeyboard(param0: globalAndroid.app.Activity): void;
			public internalResolveColor(param0: number, param1: globalAndroid.content.Context): number;
			public internalDismissKeyboard(param0: globalAndroid.view.View): void;
		}
		export module UiUtils {
			export class ScreenSize {
				public static class: java.lang.Class<zendesk.support.UiUtils.ScreenSize>;
				public static UNKNOWN: zendesk.support.UiUtils.ScreenSize;
				public static UNDEFINED: zendesk.support.UiUtils.ScreenSize;
				public static X_LARGE: zendesk.support.UiUtils.ScreenSize;
				public static LARGE: zendesk.support.UiUtils.ScreenSize;
				public static NORMAL: zendesk.support.UiUtils.ScreenSize;
				public static SMALL: zendesk.support.UiUtils.ScreenSize;
				public static values(): native.Array<zendesk.support.UiUtils.ScreenSize>;
				public static valueOf(param0: string): zendesk.support.UiUtils.ScreenSize;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export class UpdateRequestWrapper {
			public static class: java.lang.Class<zendesk.support.UpdateRequestWrapper>;
		}
	}
}

declare module zendesk {
	export module support {
		export class UploadProvider {
			public static class: java.lang.Class<zendesk.support.UploadProvider>;
			/**
			 * Constructs a new instance of the zendesk.support.UploadProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				uploadAttachment(param0: string, param1: java.io.File, param2: string, param3: com.zendesk.service.ZendeskCallback<zendesk.support.UploadResponse>): void;
				deleteAttachment(param0: string, param1: com.zendesk.service.ZendeskCallback<java.lang.Void>): void;
			});
			public constructor();
			public uploadAttachment(param0: string, param1: java.io.File, param2: string, param3: com.zendesk.service.ZendeskCallback<zendesk.support.UploadResponse>): void;
			public deleteAttachment(param0: string, param1: com.zendesk.service.ZendeskCallback<java.lang.Void>): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class UploadResponse {
			public static class: java.lang.Class<zendesk.support.UploadResponse>;
			public getToken(): string;
			public constructor();
			public getAttachment(): zendesk.support.Attachment;
			public getExpiresAt(): java.util.Date;
		}
	}
}

declare module zendesk {
	export module support {
		export class UploadResponseWrapper {
			public static class: java.lang.Class<zendesk.support.UploadResponseWrapper>;
		}
	}
}

declare module zendesk {
	export module support {
		export class UploadService {
			public static class: java.lang.Class<zendesk.support.UploadService>;
			/**
			 * Constructs a new instance of the zendesk.support.UploadService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				uploadAttachment(param0: string, param1: okhttp3.RequestBody): retrofit2.Call<zendesk.support.UploadResponseWrapper>;
				deleteAttachment(param0: string): retrofit2.Call<java.lang.Void>;
			});
			public constructor();
			public uploadAttachment(param0: string, param1: okhttp3.RequestBody): retrofit2.Call<zendesk.support.UploadResponseWrapper>;
			public deleteAttachment(param0: string): retrofit2.Call<java.lang.Void>;
		}
	}
}

declare module zendesk {
	export module support {
		export class User {
			public static class: java.lang.Class<zendesk.support.User>;
			public equals(param0: any): boolean;
			public getTags(): java.util.List<string>;
			public getName(): string;
			public constructor(param0: java.lang.Long, param1: string, param2: zendesk.support.Attachment, param3: boolean, param4: java.lang.Long, param5: java.util.List<string>, param6: java.util.Map<string,string>);
			public getId(): java.lang.Long;
			public getUserFields(): java.util.Map<string,string>;
			public constructor();
			public getPhoto(): zendesk.support.Attachment;
			public getOrganizationId(): java.lang.Long;
			public isAgent(): boolean;
			public hashCode(): number;
		}
	}
}

declare module zendesk {
	export module support {
		export class ViewArticleActionHandler extends zendesk.core.ActionHandler {
			public static class: java.lang.Class<zendesk.support.ViewArticleActionHandler>;
			public getActionDescription(): zendesk.core.ActionDescription;
			public handle(param0: java.util.Map<string,any>, param1: globalAndroid.content.Context): void;
			public getPriority(): number;
			public canHandle(param0: string): boolean;
			public updateSettings(param0: java.util.Map<string,com.google.gson.JsonElement>): void;
			public static data(param0: number, param1: string): java.util.Map<string,any>;
		}
	}
}

declare module zendesk {
	export module support {
		export class ViewArticleDeepLinkParser extends zendesk.support.ZendeskDeepLinkParser.Module {
			public static class: java.lang.Class<zendesk.support.ViewArticleDeepLinkParser>;
			public parse(param0: okhttp3.HttpUrl): zendesk.support.ViewArticleDeepLinkParser.ActionPayload;
		}
		export module ViewArticleDeepLinkParser {
			export class ActionPayload {
				public static class: java.lang.Class<zendesk.support.ViewArticleDeepLinkParser.ActionPayload>;
				public getAction(): string;
				public isValid(): boolean;
				public getPayload(): java.util.Map<string,any>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export class ZendeskArticleVoteStorage extends zendesk.support.ArticleVoteStorage {
			public static class: java.lang.Class<zendesk.support.ZendeskArticleVoteStorage>;
			public removeStoredArticleVote(param0: java.lang.Long): void;
			public storeArticleVote(param0: java.lang.Long, param1: zendesk.support.ArticleVote): void;
			public getStoredArticleVote(param0: java.lang.Long): zendesk.support.ArticleVote;
		}
		export module ZendeskArticleVoteStorage {
			export class ArticleVoteMapWrapper {
				public static class: java.lang.Class<zendesk.support.ZendeskArticleVoteStorage.ArticleVoteMapWrapper>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export class ZendeskAvatarView {
			public static class: java.lang.Class<zendesk.support.ZendeskAvatarView>;
			public showUserWithAvatarImage(param0: com.sebchlan.picassocompat.PicassoCompat, param1: string, param2: string, param3: number): void;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			public showUserWithIdentifier(param0: any): void;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
			public setStroke(param0: number, param1: number): void;
			public showUserWithName(param0: string): void;
			public constructor(param0: globalAndroid.content.Context);
		}
	}
}

declare module zendesk {
	export module support {
		export abstract class ZendeskCallbackSuccess<E>  extends com.zendesk.service.ZendeskCallback<any> {
			public static class: java.lang.Class<zendesk.support.ZendeskCallbackSuccess<any>>;
			public onError(param0: com.zendesk.service.ErrorResponse): void;
			public onSuccess(param0: any): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class ZendeskDeepLinkHelper {
			public static class: java.lang.Class<zendesk.support.ZendeskDeepLinkHelper>;
			public launch(param0: string, param1: zendesk.commonui.UiConfig, param2: globalAndroid.content.Context): boolean;
		}
	}
}

declare module zendesk {
	export module support {
		export class ZendeskDeepLinkParser {
			public static class: java.lang.Class<zendesk.support.ZendeskDeepLinkParser>;
			public parse(param0: string): zendesk.support.ViewArticleDeepLinkParser.ActionPayload;
		}
		export module ZendeskDeepLinkParser {
			export class Module {
				public static class: java.lang.Class<zendesk.support.ZendeskDeepLinkParser.Module>;
				/**
				 * Constructs a new instance of the zendesk.support.ZendeskDeepLinkParser$Module interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					parse(param0: okhttp3.HttpUrl): zendesk.support.ViewArticleDeepLinkParser.ActionPayload;
				});
				public constructor();
				public parse(param0: okhttp3.HttpUrl): zendesk.support.ViewArticleDeepLinkParser.ActionPayload;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export class ZendeskHelpCenterProvider extends zendesk.support.HelpCenterProvider {
			public static class: java.lang.Class<zendesk.support.ZendeskHelpCenterProvider>;
			public getAttachments(param0: java.lang.Long, param1: zendesk.support.AttachmentType, param2: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.HelpCenterAttachment>>): void;
			public getArticle(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback<zendesk.support.Article>): void;
			public getArticles(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Article>>): void;
			public getSections(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Section>>): void;
			public getCategory(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback<zendesk.support.Category>): void;
			public deleteVote(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback<java.lang.Void>): void;
			public upvoteArticle(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback<zendesk.support.ArticleVote>): void;
			public submitRecordArticleView(param0: zendesk.support.Article, param1: java.util.Locale, param2: com.zendesk.service.ZendeskCallback<java.lang.Void>): void;
			public downvoteArticle(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback<zendesk.support.ArticleVote>): void;
			public getCategories(param0: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Category>>): void;
			public listArticlesFlat(param0: zendesk.support.ListArticleQuery, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.FlatArticle>>): void;
			public getHelp(param0: zendesk.support.HelpRequest, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.HelpItem>>): void;
			public getArticles(param0: java.lang.Long, param1: string, param2: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Article>>): void;
			public listArticles(param0: zendesk.support.ListArticleQuery, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.SearchArticle>>): void;
			public getSuggestedArticles(param0: zendesk.support.SuggestedArticleSearch, param1: com.zendesk.service.ZendeskCallback<zendesk.support.SuggestedArticleResponse>): void;
			public searchArticles(param0: zendesk.support.HelpCenterSearch, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.SearchArticle>>): void;
			public getSection(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback<zendesk.support.Section>): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class ZendeskHelpCenterService {
			public static class: java.lang.Class<zendesk.support.ZendeskHelpCenterService>;
			public getAttachments(param0: java.util.Locale, param1: java.lang.Long, param2: zendesk.support.AttachmentType, param3: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.HelpCenterAttachment>>): void;
			public getCategoryById(param0: java.lang.Long, param1: java.util.Locale, param2: com.zendesk.service.ZendeskCallback<zendesk.support.Category>): void;
			public getSectionById(param0: java.lang.Long, param1: java.util.Locale, param2: com.zendesk.service.ZendeskCallback<zendesk.support.Section>): void;
			public getSuggestedArticles(param0: string, param1: java.util.Locale, param2: string, param3: java.lang.Long, param4: java.lang.Long, param5: com.zendesk.service.ZendeskCallback<zendesk.support.SuggestedArticleResponse>): void;
			public getArticle(param0: java.lang.Long, param1: java.util.Locale, param2: string, param3: com.zendesk.service.ZendeskCallback<zendesk.support.Article>): void;
			public downvoteArticle(param0: java.lang.Long, param1: string, param2: com.zendesk.service.ZendeskCallback<zendesk.support.ArticleVoteResponse>): void;
			public deleteVote(param0: java.lang.Long, param1: com.zendesk.service.ZendeskCallback<java.lang.Void>): void;
			public submitRecordArticleView(param0: java.lang.Long, param1: java.util.Locale, param2: zendesk.support.RecordArticleViewRequest, param3: com.zendesk.service.ZendeskCallback<java.lang.Void>): void;
			public getSectionsForCategory(param0: java.lang.Long, param1: java.util.Locale, param2: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Section>>): void;
			public searchArticles(param0: string, param1: java.util.Locale, param2: string, param3: string, param4: string, param5: string, param6: java.lang.Integer, param7: java.lang.Integer, param8: com.zendesk.service.ZendeskCallback<zendesk.support.ArticlesSearchResponse>): void;
			public getCategories(param0: java.util.Locale, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Category>>): void;
			public upvoteArticle(param0: java.lang.Long, param1: string, param2: com.zendesk.service.ZendeskCallback<zendesk.support.ArticleVoteResponse>): void;
			public listArticles(param0: string, param1: java.util.Locale, param2: string, param3: string, param4: string, param5: java.lang.Integer, param6: java.lang.Integer, param7: com.zendesk.service.ZendeskCallback<zendesk.support.ArticlesListResponse>): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class ZendeskHelpCenterSessionCache extends zendesk.support.HelpCenterSessionCache {
			public static class: java.lang.Class<zendesk.support.ZendeskHelpCenterSessionCache>;
			public static DEFAULT_SEARCH: zendesk.support.LastSearch;
			public isUniqueSearchResultClick(): boolean;
			public unsetUniqueSearchResultClick(): void;
			public getLastSearch(): zendesk.support.LastSearch;
			public setLastSearch(param0: string, param1: number): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class ZendeskProviderStore extends zendesk.support.ProviderStore {
			public static class: java.lang.Class<zendesk.support.ZendeskProviderStore>;
			public helpCenterProvider(): zendesk.support.HelpCenterProvider;
			public requestProvider(): zendesk.support.RequestProvider;
			public uploadProvider(): zendesk.support.UploadProvider;
		}
	}
}

declare module zendesk {
	export module support {
		export class ZendeskRequestProvider extends zendesk.support.RequestProvider {
			public static class: java.lang.Class<zendesk.support.ZendeskRequestProvider>;
			public createRequest(param0: zendesk.support.CreateRequest, param1: com.zendesk.service.ZendeskCallback<zendesk.support.Request>): void;
			public getCommentsSince(param0: string, param1: java.util.Date, param2: boolean, param3: com.zendesk.service.ZendeskCallback<zendesk.support.CommentsResponse>): void;
			public getUpdatesForDevice(param0: com.zendesk.service.ZendeskCallback<zendesk.support.RequestUpdates>): void;
			public addComment(param0: string, param1: zendesk.support.EndUserComment, param2: com.zendesk.service.ZendeskCallback<zendesk.support.Comment>): void;
			public getComments(param0: string, param1: com.zendesk.service.ZendeskCallback<zendesk.support.CommentsResponse>): void;
			public getTicketFormsById(param0: java.util.List<java.lang.Long>, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.TicketForm>>): void;
			public markRequestAsRead(param0: string, param1: number): void;
			public markRequestAsUnread(param0: string): void;
			public getRequests(param0: string, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Request>>): void;
			public getAllRequests(param0: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Request>>): void;
			public getRequest(param0: string, param1: com.zendesk.service.ZendeskCallback<zendesk.support.Request>): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class ZendeskRequestService {
			public static class: java.lang.Class<zendesk.support.ZendeskRequestService>;
			public createRequest(param0: string, param1: zendesk.support.CreateRequest, param2: com.zendesk.service.ZendeskCallback<zendesk.support.Request>): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class ZendeskRequestSessionCache extends zendesk.support.RequestSessionCache {
			public static class: java.lang.Class<zendesk.support.ZendeskRequestSessionCache>;
			public updateTicketFormCache(param0: java.util.List<zendesk.support.TicketForm>): void;
			public getTicketFormsById(param0: java.util.List<java.lang.Long>): java.util.List<zendesk.support.TicketForm>;
			public containsAllTicketForms(param0: java.util.List<java.lang.Long>): boolean;
		}
	}
}

declare module zendesk {
	export module support {
		export class ZendeskRequestStorage extends zendesk.support.RequestStorage {
			public static class: java.lang.Class<zendesk.support.ZendeskRequestStorage>;
			public storeRequestData(param0: java.util.List<zendesk.support.RequestData>): void;
			public getRequestData(): java.util.List<zendesk.support.RequestData>;
			public isRequestDataExpired(): boolean;
			public markRequestAsRead(param0: string, param1: number): void;
			public markRequestAsUnread(param0: string): void;
			public updateRequestData(param0: java.util.List<zendesk.support.Request>): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class ZendeskSupportBlipsProvider extends zendesk.support.SupportBlipsProvider {
			public static class: java.lang.Class<zendesk.support.ZendeskSupportBlipsProvider>;
			public requestListViewed(): void;
			public articleView(param0: zendesk.support.Article): void;
			public requestCreated(param0: string): void;
			public articleVote(param0: java.lang.Long, param1: number): void;
			public requestViewed(param0: string): void;
			public supportSdkInit(): void;
			public requestUpdated(param0: string): void;
			public helpCenterSearch(param0: string): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class ZendeskSupportSettingsProvider extends zendesk.support.SupportSettingsProvider {
			public static class: java.lang.Class<zendesk.support.ZendeskSupportSettingsProvider>;
			public getSettings(param0: com.zendesk.service.ZendeskCallback<zendesk.support.SupportSdkSettings>): void;
		}
		export module ZendeskSupportSettingsProvider {
			export class LoadHelpCenterSettings extends com.zendesk.service.ZendeskCallback<zendesk.core.SettingsPack<zendesk.support.HelpCenterSettings>> {
				public static class: java.lang.Class<zendesk.support.ZendeskSupportSettingsProvider.LoadHelpCenterSettings>;
				public onSuccess(param0: any): void;
				public onSuccess(param0: zendesk.core.SettingsPack<zendesk.support.HelpCenterSettings>): void;
				public onError(param0: com.zendesk.service.ErrorResponse): void;
			}
			export class LoadSupportSettings extends com.zendesk.service.ZendeskCallback<zendesk.core.SettingsPack<zendesk.support.SupportSettings>> {
				public static class: java.lang.Class<zendesk.support.ZendeskSupportSettingsProvider.LoadSupportSettings>;
				public onSuccess(param0: any): void;
				public onSuccess(param0: zendesk.core.SettingsPack<zendesk.support.SupportSettings>): void;
				public onError(param0: com.zendesk.service.ErrorResponse): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export class ZendeskTracker {
			public static class: java.lang.Class<zendesk.support.ZendeskTracker>;
			/**
			 * Constructs a new instance of the zendesk.support.ZendeskTracker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				helpCenterLoaded(): void;
				helpCenterSearched(param0: string): void;
				helpCenterArticleViewed(): void;
				requestCreated(): void;
				requestUpdated(): void;
			});
			public constructor();
			public requestCreated(): void;
			public requestUpdated(): void;
			public helpCenterSearched(param0: string): void;
			public helpCenterLoaded(): void;
			public helpCenterArticleViewed(): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class ZendeskUploadProvider extends zendesk.support.UploadProvider {
			public static class: java.lang.Class<zendesk.support.ZendeskUploadProvider>;
			public uploadAttachment(param0: string, param1: java.io.File, param2: string, param3: com.zendesk.service.ZendeskCallback<zendesk.support.UploadResponse>): void;
			public deleteAttachment(param0: string, param1: com.zendesk.service.ZendeskCallback<java.lang.Void>): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class ZendeskUploadService {
			public static class: java.lang.Class<zendesk.support.ZendeskUploadService>;
			public constructor(param0: zendesk.support.UploadService);
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class ArticleUiConfig extends zendesk.commonui.UiConfig {
				public static class: java.lang.Class<zendesk.support.guide.ArticleUiConfig>;
				public isDeflectionEnabled(): boolean;
				public getUiConfigs(): java.util.List<zendesk.commonui.UiConfig>;
				public isContactUsButtonVisible(): boolean;
			}
			export module ArticleUiConfig {
				export class Builder {
					public static class: java.lang.Class<zendesk.support.guide.ArticleUiConfig.Builder>;
					public withContactUsButtonVisible(param0: boolean): zendesk.support.guide.ArticleUiConfig.Builder;
					public show(param0: globalAndroid.content.Context, param1: java.util.List<zendesk.commonui.UiConfig>): void;
					public constructor();
					public withDeflectionEnabled(param0: boolean): zendesk.support.guide.ArticleUiConfig.Builder;
					public intent(param0: globalAndroid.content.Context, param1: native.Array<zendesk.commonui.UiConfig>): globalAndroid.content.Intent;
					public show(param0: globalAndroid.content.Context, param1: native.Array<zendesk.commonui.UiConfig>): void;
					public intent(param0: globalAndroid.content.Context, param1: java.util.List<zendesk.commonui.UiConfig>): globalAndroid.content.Intent;
					public constructor(param0: number);
					public constructor(param0: zendesk.support.Article);
					public config(): zendesk.commonui.UiConfig;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class ArticleViewModel {
				public static class: java.lang.Class<zendesk.support.guide.ArticleViewModel>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class ArticleVotingView {
				public static class: java.lang.Class<zendesk.support.guide.ArticleVotingView>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public bindTo(param0: java.lang.Long, param1: zendesk.support.ArticleVoteStorage, param2: zendesk.support.HelpCenterProvider): void;
			}
			export module ArticleVotingView {
				export class VoteState {
					public static class: java.lang.Class<zendesk.support.guide.ArticleVotingView.VoteState>;
					public static UPVOTED: zendesk.support.guide.ArticleVotingView.VoteState;
					public static DOWNVOTED: zendesk.support.guide.ArticleVotingView.VoteState;
					public static NONE: zendesk.support.guide.ArticleVotingView.VoteState;
					public static values(): native.Array<zendesk.support.guide.ArticleVotingView.VoteState>;
					public static valueOf(param0: string): zendesk.support.guide.ArticleVotingView.VoteState;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class HelpAdapterPresenter extends zendesk.support.guide.HelpMvp.Presenter {
				public static class: java.lang.Class<zendesk.support.guide.HelpAdapterPresenter>;
				public setContentPresenter(param0: zendesk.support.guide.HelpCenterMvp.Presenter): void;
				public getItem(param0: number): zendesk.support.HelpItem;
				public onAttached(): void;
				public onSeeAllClick(param0: zendesk.support.SeeAllArticlesItem): void;
				public constructor(param0: zendesk.support.guide.HelpMvp.View, param1: zendesk.support.guide.HelpMvp.Model, param2: zendesk.core.NetworkInfoProvider, param3: zendesk.support.guide.HelpCenterUiConfig);
				public getItemViewType(param0: number): number;
				public onCategoryClick(param0: zendesk.support.CategoryItem, param1: number): boolean;
				public getItemForBinding(param0: number): zendesk.support.HelpItem;
				public onDetached(): void;
				public getItemCount(): number;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class HelpCenterActivity implements zendesk.support.guide.HelpCenterMvp.View {
				public static class: java.lang.Class<zendesk.support.guide.HelpCenterActivity>;
				public isShowingHelp(): boolean;
				public onPause(): void;
				public setSearchEnabled(param0: boolean): void;
				public constructor();
				public onPrepareOptionsMenu(param0: globalAndroid.view.Menu): boolean;
				public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
				public showLoadingState(): void;
				public announceContentLoaded(): void;
				public hideLoadingState(): void;
				public showSearchResults(param0: java.util.List<zendesk.support.SearchArticle>, param1: string): void;
				public showContactUsButton(): void;
				public showContactZendesk(): void;
				public onResume(): void;
				public getContext(): globalAndroid.content.Context;
				public onCreateOptionsMenu(param0: globalAndroid.view.Menu): boolean;
				public showRequestList(): void;
				public showNoConnectionError(): void;
				public clearSearchResults(): void;
				public dismissError(): void;
				public showLoadArticleErrorWithRetry(param0: zendesk.support.guide.HelpCenterMvp.ErrorType, param1: zendesk.core.RetryAction): void;
				public exitActivity(): void;
				public static builder(): zendesk.support.guide.HelpCenterUiConfig.Builder;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onStart(): void;
				public showHelp(param0: zendesk.support.guide.HelpCenterUiConfig): void;
			}
			export module HelpCenterActivity {
				export class SnackbarStatus {
					public static class: java.lang.Class<zendesk.support.guide.HelpCenterActivity.SnackbarStatus>;
					public static NO_CONNECTION: zendesk.support.guide.HelpCenterActivity.SnackbarStatus;
					public static NONE: zendesk.support.guide.HelpCenterActivity.SnackbarStatus;
					public static CONTENT_ERROR: zendesk.support.guide.HelpCenterActivity.SnackbarStatus;
					public static values(): native.Array<zendesk.support.guide.HelpCenterActivity.SnackbarStatus>;
					public static valueOf(param0: string): zendesk.support.guide.HelpCenterActivity.SnackbarStatus;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class HelpCenterActivity_MembersInjector extends dagger.MembersInjector<zendesk.support.guide.HelpCenterActivity> {
				public static class: java.lang.Class<zendesk.support.guide.HelpCenterActivity_MembersInjector>;
				public injectMembers(param0: zendesk.support.guide.HelpCenterActivity): void;
				public constructor(param0: javax.inject.Provider<zendesk.support.HelpCenterProvider>, param1: javax.inject.Provider<zendesk.support.SupportSettingsProvider>, param2: javax.inject.Provider<zendesk.core.NetworkInfoProvider>, param3: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>);
				public static injectActionHandlerRegistry(param0: zendesk.support.guide.HelpCenterActivity, param1: zendesk.core.ActionHandlerRegistry): void;
				public static create(param0: javax.inject.Provider<zendesk.support.HelpCenterProvider>, param1: javax.inject.Provider<zendesk.support.SupportSettingsProvider>, param2: javax.inject.Provider<zendesk.core.NetworkInfoProvider>, param3: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>): dagger.MembersInjector<zendesk.support.guide.HelpCenterActivity>;
				public static injectSettingsProvider(param0: zendesk.support.guide.HelpCenterActivity, param1: zendesk.support.SupportSettingsProvider): void;
				public static injectNetworkInfoProvider(param0: zendesk.support.guide.HelpCenterActivity, param1: zendesk.core.NetworkInfoProvider): void;
				public static injectHelpCenterProvider(param0: zendesk.support.guide.HelpCenterActivity, param1: zendesk.support.HelpCenterProvider): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class HelpCenterFragment {
				public static class: java.lang.Class<zendesk.support.guide.HelpCenterFragment>;
				public static LOG_TAG: string;
				public static newInstance(param0: zendesk.support.guide.HelpCenterUiConfig): zendesk.support.guide.HelpCenterFragment;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public setPresenter(param0: zendesk.support.guide.HelpCenterMvp.Presenter): void;
				public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
				public constructor();
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class HelpCenterFragment_MembersInjector extends dagger.MembersInjector<zendesk.support.guide.HelpCenterFragment> {
				public static class: java.lang.Class<zendesk.support.guide.HelpCenterFragment_MembersInjector>;
				public static injectHelpCenterProvider(param0: zendesk.support.guide.HelpCenterFragment, param1: zendesk.support.HelpCenterProvider): void;
				public injectMembers(param0: zendesk.support.guide.HelpCenterFragment): void;
				public static injectNetworkInfoProvider(param0: zendesk.support.guide.HelpCenterFragment, param1: zendesk.core.NetworkInfoProvider): void;
				public static create(param0: javax.inject.Provider<zendesk.support.HelpCenterProvider>, param1: javax.inject.Provider<zendesk.core.NetworkInfoProvider>): dagger.MembersInjector<zendesk.support.guide.HelpCenterFragment>;
				public constructor(param0: javax.inject.Provider<zendesk.support.HelpCenterProvider>, param1: javax.inject.Provider<zendesk.core.NetworkInfoProvider>);
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class HelpCenterModel extends zendesk.support.guide.HelpCenterMvp.Model {
				public static class: java.lang.Class<zendesk.support.guide.HelpCenterModel>;
				public getSettings(param0: com.zendesk.service.ZendeskCallback<zendesk.support.SupportSdkSettings>): void;
				public search(param0: java.util.List<java.lang.Long>, param1: java.util.List<java.lang.Long>, param2: string, param3: native.Array<string>, param4: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.SearchArticle>>): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class HelpCenterMvp {
				public static class: java.lang.Class<zendesk.support.guide.HelpCenterMvp>;
				/**
				 * Constructs a new instance of the zendesk.support.guide.HelpCenterMvp interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
			export module HelpCenterMvp {
				export class ErrorType {
					public static class: java.lang.Class<zendesk.support.guide.HelpCenterMvp.ErrorType>;
					public static CATEGORY_LOAD: zendesk.support.guide.HelpCenterMvp.ErrorType;
					public static SECTION_LOAD: zendesk.support.guide.HelpCenterMvp.ErrorType;
					public static ARTICLES_LOAD: zendesk.support.guide.HelpCenterMvp.ErrorType;
					public static valueOf(param0: string): zendesk.support.guide.HelpCenterMvp.ErrorType;
					public static values(): native.Array<zendesk.support.guide.HelpCenterMvp.ErrorType>;
				}
				export class Model {
					public static class: java.lang.Class<zendesk.support.guide.HelpCenterMvp.Model>;
					/**
					 * Constructs a new instance of the zendesk.support.guide.HelpCenterMvp$Model interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						search(param0: java.util.List<java.lang.Long>, param1: java.util.List<java.lang.Long>, param2: string, param3: native.Array<string>, param4: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.SearchArticle>>): void;
						getSettings(param0: com.zendesk.service.ZendeskCallback<zendesk.support.SupportSdkSettings>): void;
					});
					public constructor();
					public getSettings(param0: com.zendesk.service.ZendeskCallback<zendesk.support.SupportSdkSettings>): void;
					public search(param0: java.util.List<java.lang.Long>, param1: java.util.List<java.lang.Long>, param2: string, param3: native.Array<string>, param4: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.SearchArticle>>): void;
				}
				export class Presenter {
					public static class: java.lang.Class<zendesk.support.guide.HelpCenterMvp.Presenter>;
					/**
					 * Constructs a new instance of the zendesk.support.guide.HelpCenterMvp$Presenter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResume(param0: zendesk.support.guide.HelpCenterMvp.View): void;
						onPause(): void;
						onSearchSubmit(param0: string): void;
						onLoad(): void;
						onErrorWithRetry(param0: zendesk.support.guide.HelpCenterMvp.ErrorType, param1: zendesk.core.RetryAction): void;
						init(param0: zendesk.support.guide.HelpCenterUiConfig): void;
						shouldShowConversationsMenuItem(): boolean;
						shouldShowSearchMenuItem(): boolean;
					});
					public constructor();
					public onResume(param0: zendesk.support.guide.HelpCenterMvp.View): void;
					public shouldShowConversationsMenuItem(): boolean;
					public shouldShowSearchMenuItem(): boolean;
					public onLoad(): void;
					public onPause(): void;
					public onSearchSubmit(param0: string): void;
					public onErrorWithRetry(param0: zendesk.support.guide.HelpCenterMvp.ErrorType, param1: zendesk.core.RetryAction): void;
					public init(param0: zendesk.support.guide.HelpCenterUiConfig): void;
				}
				export class View {
					public static class: java.lang.Class<zendesk.support.guide.HelpCenterMvp.View>;
					/**
					 * Constructs a new instance of the zendesk.support.guide.HelpCenterMvp$View interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						showContactUsButton(): void;
						showHelp(param0: zendesk.support.guide.HelpCenterUiConfig): void;
						showSearchResults(param0: java.util.List<zendesk.support.SearchArticle>, param1: string): void;
						clearSearchResults(): void;
						setSearchEnabled(param0: boolean): void;
						showLoadingState(): void;
						hideLoadingState(): void;
						showRequestList(): void;
						showContactZendesk(): void;
						showLoadArticleErrorWithRetry(param0: zendesk.support.guide.HelpCenterMvp.ErrorType, param1: zendesk.core.RetryAction): void;
						showNoConnectionError(): void;
						dismissError(): void;
						getContext(): globalAndroid.content.Context;
						isShowingHelp(): boolean;
						exitActivity(): void;
						announceContentLoaded(): void;
					});
					public constructor();
					public exitActivity(): void;
					public showContactZendesk(): void;
					public showRequestList(): void;
					public setSearchEnabled(param0: boolean): void;
					public dismissError(): void;
					public showContactUsButton(): void;
					public showLoadingState(): void;
					public isShowingHelp(): boolean;
					public hideLoadingState(): void;
					public showSearchResults(param0: java.util.List<zendesk.support.SearchArticle>, param1: string): void;
					public clearSearchResults(): void;
					public showNoConnectionError(): void;
					public showHelp(param0: zendesk.support.guide.HelpCenterUiConfig): void;
					public getContext(): globalAndroid.content.Context;
					public showLoadArticleErrorWithRetry(param0: zendesk.support.guide.HelpCenterMvp.ErrorType, param1: zendesk.core.RetryAction): void;
					public announceContentLoaded(): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class HelpCenterPresenter implements zendesk.support.guide.HelpCenterMvp.Presenter, zendesk.core.NetworkAware {
				public static class: java.lang.Class<zendesk.support.guide.HelpCenterPresenter>;
				public shouldShowConversationsMenuItem(): boolean;
				public onNetworkUnavailable(): void;
				public onLoad(): void;
				public onPause(): void;
				public init(param0: zendesk.support.guide.HelpCenterUiConfig): void;
				public onResume(param0: zendesk.support.guide.HelpCenterMvp.View): void;
				public shouldShowSearchMenuItem(): boolean;
				public onSearchSubmit(param0: string): void;
				public onErrorWithRetry(param0: zendesk.support.guide.HelpCenterMvp.ErrorType, param1: zendesk.core.RetryAction): void;
				public onNetworkAvailable(): void;
			}
			export module HelpCenterPresenter {
				export class ViewSafeRetryZendeskCallback extends com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.SearchArticle>> {
					public static class: java.lang.Class<zendesk.support.guide.HelpCenterPresenter.ViewSafeRetryZendeskCallback>;
					public onError(param0: com.zendesk.service.ErrorResponse): void;
					public onSuccess(param0: any): void;
					public onSuccess(param0: java.util.List<zendesk.support.SearchArticle>): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class HelpCenterUiConfig extends zendesk.commonui.UiConfig {
				public static class: java.lang.Class<zendesk.support.guide.HelpCenterUiConfig>;
				public getCategoryIds(): java.util.List<java.lang.Long>;
				public getLabelNames(): native.Array<string>;
				public getSectionIds(): java.util.List<java.lang.Long>;
				public isShowConversationsMenuButton(): boolean;
				public isDeflectionEnabled(): boolean;
				public getUiConfigs(): java.util.List<zendesk.commonui.UiConfig>;
				public isCollapseCategories(): boolean;
				public isContactUsButtonVisible(): boolean;
			}
			export module HelpCenterUiConfig {
				export class Builder {
					public static class: java.lang.Class<zendesk.support.guide.HelpCenterUiConfig.Builder>;
					public withArticlesForSectionIds(param0: native.Array<java.lang.Long>): zendesk.support.guide.HelpCenterUiConfig.Builder;
					public show(param0: globalAndroid.content.Context, param1: java.util.List<zendesk.commonui.UiConfig>): void;
					public withArticlesForSectionIds(param0: java.util.List<java.lang.Long>): zendesk.support.guide.HelpCenterUiConfig.Builder;
					public withContactUsButtonVisible(param0: boolean): zendesk.support.guide.HelpCenterUiConfig.Builder;
					public withLabelNames(param0: java.util.List<string>): zendesk.support.guide.HelpCenterUiConfig.Builder;
					public intent(param0: globalAndroid.content.Context, param1: native.Array<zendesk.commonui.UiConfig>): globalAndroid.content.Intent;
					public withCategoriesCollapsed(param0: boolean): zendesk.support.guide.HelpCenterUiConfig.Builder;
					public withLabelNames(param0: native.Array<string>): zendesk.support.guide.HelpCenterUiConfig.Builder;
					public withShowConversationsMenuButton(param0: boolean): zendesk.support.guide.HelpCenterUiConfig.Builder;
					public constructor();
					public withArticlesForCategoryIds(param0: native.Array<java.lang.Long>): zendesk.support.guide.HelpCenterUiConfig.Builder;
					public withDeflectionEnabled(param0: boolean): zendesk.support.guide.HelpCenterUiConfig.Builder;
					public show(param0: globalAndroid.content.Context, param1: native.Array<zendesk.commonui.UiConfig>): void;
					public intent(param0: globalAndroid.content.Context, param1: java.util.List<zendesk.commonui.UiConfig>): globalAndroid.content.Intent;
					public withArticlesForCategoryIds(param0: java.util.List<java.lang.Long>): zendesk.support.guide.HelpCenterUiConfig.Builder;
					public config(): zendesk.commonui.UiConfig;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class HelpModel extends zendesk.support.guide.HelpMvp.Model {
				public static class: java.lang.Class<zendesk.support.guide.HelpModel>;
				public getArticles(param0: java.util.List<java.lang.Long>, param1: java.util.List<java.lang.Long>, param2: native.Array<string>, param3: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.HelpItem>>): void;
				public getArticlesForSection(param0: zendesk.support.SectionItem, param1: native.Array<string>, param2: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.ArticleItem>>): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class HelpMvp {
				public static class: java.lang.Class<zendesk.support.guide.HelpMvp>;
				/**
				 * Constructs a new instance of the zendesk.support.guide.HelpMvp interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
			export module HelpMvp {
				export class Model {
					public static class: java.lang.Class<zendesk.support.guide.HelpMvp.Model>;
					/**
					 * Constructs a new instance of the zendesk.support.guide.HelpMvp$Model interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getArticles(param0: java.util.List<java.lang.Long>, param1: java.util.List<java.lang.Long>, param2: native.Array<string>, param3: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.HelpItem>>): void;
						getArticlesForSection(param0: zendesk.support.SectionItem, param1: native.Array<string>, param2: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.ArticleItem>>): void;
					});
					public constructor();
					public getArticles(param0: java.util.List<java.lang.Long>, param1: java.util.List<java.lang.Long>, param2: native.Array<string>, param3: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.HelpItem>>): void;
					public getArticlesForSection(param0: zendesk.support.SectionItem, param1: native.Array<string>, param2: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.ArticleItem>>): void;
				}
				export class Presenter {
					public static class: java.lang.Class<zendesk.support.guide.HelpMvp.Presenter>;
					/**
					 * Constructs a new instance of the zendesk.support.guide.HelpMvp$Presenter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onAttached(): void;
						onDetached(): void;
						setContentPresenter(param0: zendesk.support.guide.HelpCenterMvp.Presenter): void;
						onSeeAllClick(param0: zendesk.support.SeeAllArticlesItem): void;
						onCategoryClick(param0: zendesk.support.CategoryItem, param1: number): boolean;
						getItem(param0: number): zendesk.support.HelpItem;
						getItemCount(): number;
						getItemViewType(param0: number): number;
						getItemForBinding(param0: number): zendesk.support.HelpItem;
					});
					public constructor();
					public getItemForBinding(param0: number): zendesk.support.HelpItem;
					public onCategoryClick(param0: zendesk.support.CategoryItem, param1: number): boolean;
					public onDetached(): void;
					public getItemCount(): number;
					public getItem(param0: number): zendesk.support.HelpItem;
					public onSeeAllClick(param0: zendesk.support.SeeAllArticlesItem): void;
					public getItemViewType(param0: number): number;
					public onAttached(): void;
					public setContentPresenter(param0: zendesk.support.guide.HelpCenterMvp.Presenter): void;
				}
				export class View {
					public static class: java.lang.Class<zendesk.support.guide.HelpMvp.View>;
					/**
					 * Constructs a new instance of the zendesk.support.guide.HelpMvp$View interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						showItems(param0: java.util.List<zendesk.support.HelpItem>): void;
						addItem(param0: number, param1: zendesk.support.HelpItem): void;
						removeItem(param0: number): void;
					});
					public constructor();
					public showItems(param0: java.util.List<zendesk.support.HelpItem>): void;
					public addItem(param0: number, param1: zendesk.support.HelpItem): void;
					public removeItem(param0: number): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class HelpRecyclerViewAdapter extends globalAndroid.support.v7.widget.RecyclerView.Adapter<zendesk.support.guide.HelpRecyclerViewAdapter.HelpViewHolder> implements zendesk.support.guide.HelpMvp.View  {
				public static class: java.lang.Class<zendesk.support.guide.HelpRecyclerViewAdapter>;
				public addItem(param0: number, param1: zendesk.support.HelpItem): void;
				public onDetachedFromRecyclerView(param0: globalAndroid.support.v7.widget.RecyclerView): void;
				public getItemViewType(param0: number): number;
				public onBindViewHolder(param0: zendesk.support.guide.HelpRecyclerViewAdapter.HelpViewHolder, param1: number): void;
				public showItems(param0: java.util.List<zendesk.support.HelpItem>): void;
				public removeItem(param0: number): void;
				public onAttachedToRecyclerView(param0: globalAndroid.support.v7.widget.RecyclerView): void;
				public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): zendesk.support.guide.HelpRecyclerViewAdapter.HelpViewHolder;
				public getItemCount(): number;
			}
			export module HelpRecyclerViewAdapter {
				export class ArticleViewHolder extends zendesk.support.guide.HelpRecyclerViewAdapter.HelpViewHolder {
					public static class: java.lang.Class<zendesk.support.guide.HelpRecyclerViewAdapter.ArticleViewHolder>;
					public bindTo(param0: zendesk.support.HelpItem, param1: number): void;
				}
				export class CategoryViewHolder extends zendesk.support.guide.HelpRecyclerViewAdapter.HelpViewHolder {
					public static class: java.lang.Class<zendesk.support.guide.HelpRecyclerViewAdapter.CategoryViewHolder>;
					public bindTo(param0: zendesk.support.HelpItem, param1: number): void;
					public isExpanded(): boolean;
				}
				export class ExtraPaddingViewHolder extends zendesk.support.guide.HelpRecyclerViewAdapter.HelpViewHolder {
					public static class: java.lang.Class<zendesk.support.guide.HelpRecyclerViewAdapter.ExtraPaddingViewHolder>;
					public bindTo(param0: zendesk.support.HelpItem, param1: number): void;
				}
				export abstract class HelpViewHolder {
					public static class: java.lang.Class<zendesk.support.guide.HelpRecyclerViewAdapter.HelpViewHolder>;
					public bindTo(param0: zendesk.support.HelpItem, param1: number): void;
				}
				export class LoadingViewHolder extends zendesk.support.guide.HelpRecyclerViewAdapter.HelpViewHolder {
					public static class: java.lang.Class<zendesk.support.guide.HelpRecyclerViewAdapter.LoadingViewHolder>;
					public bindTo(param0: zendesk.support.HelpItem, param1: number): void;
				}
				export class NoResultsViewHolder extends zendesk.support.guide.HelpRecyclerViewAdapter.HelpViewHolder {
					public static class: java.lang.Class<zendesk.support.guide.HelpRecyclerViewAdapter.NoResultsViewHolder>;
					public bindTo(param0: zendesk.support.HelpItem, param1: number): void;
				}
				export class SectionViewHolder extends zendesk.support.guide.HelpRecyclerViewAdapter.HelpViewHolder {
					public static class: java.lang.Class<zendesk.support.guide.HelpRecyclerViewAdapter.SectionViewHolder>;
					public bindTo(param0: zendesk.support.HelpItem, param1: number): void;
				}
				export class SeeAllViewHolder extends zendesk.support.guide.HelpRecyclerViewAdapter.HelpViewHolder {
					public static class: java.lang.Class<zendesk.support.guide.HelpRecyclerViewAdapter.SeeAllViewHolder>;
					public bindTo(param0: zendesk.support.HelpItem, param1: number): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class HelpSearchFragment {
				public static class: java.lang.Class<zendesk.support.guide.HelpSearchFragment>;
				public static newInstance(param0: zendesk.support.guide.HelpCenterUiConfig, param1: zendesk.support.HelpCenterProvider): zendesk.support.guide.HelpSearchFragment;
				public updateResults(param0: java.util.List<zendesk.support.SearchArticle>, param1: string): void;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public clearResults(): void;
				public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
				public constructor();
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class HelpSearchRecyclerViewAdapter {
				public static class: java.lang.Class<zendesk.support.guide.HelpSearchRecyclerViewAdapter>;
				public onBindViewHolder(param0: globalAndroid.support.v7.widget.RecyclerView.ViewHolder, param1: number): void;
				public getItemViewType(param0: number): number;
				public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): globalAndroid.support.v7.widget.RecyclerView.ViewHolder;
				public getItemCount(): number;
			}
			export module HelpSearchRecyclerViewAdapter {
				export class HelpSearchViewHolder {
					public static class: java.lang.Class<zendesk.support.guide.HelpSearchRecyclerViewAdapter.HelpSearchViewHolder>;
				}
				export class NoResultsViewHolder {
					public static class: java.lang.Class<zendesk.support.guide.HelpSearchRecyclerViewAdapter.NoResultsViewHolder>;
				}
				export class PaddingViewHolder {
					public static class: java.lang.Class<zendesk.support.guide.HelpSearchRecyclerViewAdapter.PaddingViewHolder>;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class NetworkUtils {
				public static class: java.lang.Class<zendesk.support.guide.NetworkUtils>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class SeparatorDecoration {
				public static class: java.lang.Class<zendesk.support.guide.SeparatorDecoration>;
				public onDrawOver(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.support.v7.widget.RecyclerView, param2: globalAndroid.support.v7.widget.RecyclerView.State): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class ViewArticleActivity {
				public static class: java.lang.Class<zendesk.support.guide.ViewArticleActivity>;
				public static builder(param0: number): zendesk.support.guide.ArticleUiConfig.Builder;
				public showContactZendesk(): void;
				public static builder(param0: zendesk.support.Article): zendesk.support.guide.ArticleUiConfig.Builder;
				public setLoadingState(param0: zendesk.support.guide.ViewArticleActivity.LoadingState): void;
				public static builder(): zendesk.support.guide.ArticleUiConfig.Builder;
				public constructor();
				public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
				public showLoadingErrorState(param0: number): void;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onStart(): void;
				public onStop(): void;
				public onItemClick(param0: globalAndroid.widget.AdapterView<any>, param1: globalAndroid.view.View, param2: number, param3: number): void;
				public onDestroy(): void;
			}
			export module ViewArticleActivity {
				export class ArticleAttachmentAdapter extends globalAndroid.widget.ArrayAdapter<zendesk.support.HelpCenterAttachment> {
					public static class: java.lang.Class<zendesk.support.guide.ViewArticleActivity.ArticleAttachmentAdapter>;
					public getView(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				}
				export class ArticleAttachmentRow {
					public static class: java.lang.Class<zendesk.support.guide.ViewArticleActivity.ArticleAttachmentRow>;
					public constructor(param0: globalAndroid.content.Context);
					public bind(param0: zendesk.support.HelpCenterAttachment): void;
				}
				export class AttachmentRequestCallback extends com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.HelpCenterAttachment>> {
					public static class: java.lang.Class<zendesk.support.guide.ViewArticleActivity.AttachmentRequestCallback>;
					public onSuccess(param0: java.util.List<zendesk.support.HelpCenterAttachment>): void;
					public onError(param0: com.zendesk.service.ErrorResponse): void;
					public onSuccess(param0: any): void;
				}
				export class LoadingState {
					public static class: java.lang.Class<zendesk.support.guide.ViewArticleActivity.LoadingState>;
					public static LOADING: zendesk.support.guide.ViewArticleActivity.LoadingState;
					public static DISPLAYING: zendesk.support.guide.ViewArticleActivity.LoadingState;
					public static ERRORED: zendesk.support.guide.ViewArticleActivity.LoadingState;
					public static ERRORED_ATTACHMENT: zendesk.support.guide.ViewArticleActivity.LoadingState;
					public static valueOf(param0: string): zendesk.support.guide.ViewArticleActivity.LoadingState;
					public static values(): native.Array<zendesk.support.guide.ViewArticleActivity.LoadingState>;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class ViewArticleActivity_MembersInjector extends dagger.MembersInjector<zendesk.support.guide.ViewArticleActivity> {
				public static class: java.lang.Class<zendesk.support.guide.ViewArticleActivity_MembersInjector>;
				public static injectActionHandlerRegistry(param0: zendesk.support.guide.ViewArticleActivity, param1: zendesk.core.ActionHandlerRegistry): void;
				public static injectSupportSettingsProvider(param0: zendesk.support.guide.ViewArticleActivity, param1: zendesk.support.SupportSettingsProvider): void;
				public static injectApplicationConfiguration(param0: zendesk.support.guide.ViewArticleActivity, param1: zendesk.core.ApplicationConfiguration): void;
				public static injectHelpCenterProvider(param0: zendesk.support.guide.ViewArticleActivity, param1: zendesk.support.HelpCenterProvider): void;
				public static injectDeepLinkHelper(param0: zendesk.support.guide.ViewArticleActivity, param1: zendesk.support.ZendeskDeepLinkHelper): void;
				public injectMembers(param0: zendesk.support.guide.ViewArticleActivity): void;
				public static create(param0: javax.inject.Provider<okhttp3.OkHttpClient>, param1: javax.inject.Provider<zendesk.core.ApplicationConfiguration>, param2: javax.inject.Provider<zendesk.support.HelpCenterProvider>, param3: javax.inject.Provider<zendesk.support.ArticleVoteStorage>, param4: javax.inject.Provider<zendesk.support.ZendeskDeepLinkHelper>, param5: javax.inject.Provider<zendesk.core.NetworkInfoProvider>, param6: javax.inject.Provider<zendesk.support.SupportSettingsProvider>, param7: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>): dagger.MembersInjector<zendesk.support.guide.ViewArticleActivity>;
				public constructor(param0: javax.inject.Provider<okhttp3.OkHttpClient>, param1: javax.inject.Provider<zendesk.core.ApplicationConfiguration>, param2: javax.inject.Provider<zendesk.support.HelpCenterProvider>, param3: javax.inject.Provider<zendesk.support.ArticleVoteStorage>, param4: javax.inject.Provider<zendesk.support.ZendeskDeepLinkHelper>, param5: javax.inject.Provider<zendesk.core.NetworkInfoProvider>, param6: javax.inject.Provider<zendesk.support.SupportSettingsProvider>, param7: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>);
				public static injectOkHttpClient(param0: zendesk.support.guide.ViewArticleActivity, param1: okhttp3.OkHttpClient): void;
				public static injectArticleVoteStorage(param0: zendesk.support.guide.ViewArticleActivity, param1: zendesk.support.ArticleVoteStorage): void;
				public static injectNetworkInfoProvider(param0: zendesk.support.guide.ViewArticleActivity, param1: zendesk.core.NetworkInfoProvider): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ActionCreateComment extends zendesk.support.request.AsyncMiddleware.AsyncAction {
				public static class: java.lang.Class<zendesk.support.request.ActionCreateComment>;
				public execute(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState, param2: zendesk.support.request.AsyncMiddleware.Callback): void;
				public actionQueued(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState): void;
			}
			export module ActionCreateComment {
				export class CreateCommentResult {
					public static class: java.lang.Class<zendesk.support.request.ActionCreateComment.CreateCommentResult>;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ActionFactory {
				public static class: java.lang.Class<zendesk.support.request.ActionFactory>;
			}
			export module ActionFactory {
				export class ErrorAction<E>  extends zendesk.suas.Action<any> {
					public static class: java.lang.Class<zendesk.support.request.ActionFactory.ErrorAction<any>>;
					public getErrorResponse(): com.zendesk.service.ErrorResponse;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ActionInstallConfiguration extends zendesk.support.request.AsyncMiddleware.AsyncAction {
				public static class: java.lang.Class<zendesk.support.request.ActionInstallConfiguration>;
				public execute(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState, param2: zendesk.support.request.AsyncMiddleware.Callback): void;
				public actionQueued(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ActionLoadCachedComments extends zendesk.support.request.AsyncMiddleware.AsyncAction {
				public static class: java.lang.Class<zendesk.support.request.ActionLoadCachedComments>;
				public execute(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState, param2: zendesk.support.request.AsyncMiddleware.Callback): void;
				public actionQueued(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState): void;
			}
			export module ActionLoadCachedComments {
				export class LoadComments {
					public static class: java.lang.Class<zendesk.support.request.ActionLoadCachedComments.LoadComments>;
					public run(): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ActionLoadComments extends zendesk.support.request.AsyncMiddleware.AsyncAction {
				public static class: java.lang.Class<zendesk.support.request.ActionLoadComments>;
				public execute(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState, param2: zendesk.support.request.AsyncMiddleware.Callback): void;
				public actionQueued(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState): void;
			}
			export module ActionLoadComments {
				export abstract class MinimumTimeCallback<E>  extends com.zendesk.service.ZendeskCallback<any> {
					public static class: java.lang.Class<zendesk.support.request.ActionLoadComments.MinimumTimeCallback<any>>;
					public onDelayedError(param0: com.zendesk.service.ErrorResponse): void;
					public onError(param0: com.zendesk.service.ErrorResponse): void;
					public onDelayedSuccess(param0: any): void;
					public onSuccess(param0: any): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ActionLoadRequest extends zendesk.support.request.AsyncMiddleware.AsyncAction {
				public static class: java.lang.Class<zendesk.support.request.ActionLoadRequest>;
				public execute(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState, param2: zendesk.support.request.AsyncMiddleware.Callback): void;
				public actionQueued(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ActionLoadSettings extends zendesk.support.request.AsyncMiddleware.AsyncAction {
				public static class: java.lang.Class<zendesk.support.request.ActionLoadSettings>;
				public execute(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState, param2: zendesk.support.request.AsyncMiddleware.Callback): void;
				public actionQueued(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ActionUpdateNameEmail extends zendesk.support.request.AsyncMiddleware.AsyncAction {
				public static class: java.lang.Class<zendesk.support.request.ActionUpdateNameEmail>;
				public execute(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState, param2: zendesk.support.request.AsyncMiddleware.Callback): void;
				public actionQueued(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class AdapterAttachmentCarousel extends globalAndroid.support.v7.widget.RecyclerView.Adapter<zendesk.support.request.AdapterAttachmentCarousel.CarouselViewHolder> {
				public static class: java.lang.Class<zendesk.support.request.AdapterAttachmentCarousel>;
				public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): zendesk.support.request.AdapterAttachmentCarousel.CarouselViewHolder;
				public getItemId(param0: number): number;
				public getItemViewType(param0: number): number;
				public onBindViewHolder(param0: zendesk.support.request.AdapterAttachmentCarousel.CarouselViewHolder, param1: number): void;
				public getItemCount(): number;
			}
			export module AdapterAttachmentCarousel {
				export abstract class CarouselViewHolder {
					public static class: java.lang.Class<zendesk.support.request.AdapterAttachmentCarousel.CarouselViewHolder>;
				}
				export module CarouselViewHolder {
					export class OnRemoveListener {
						public static class: java.lang.Class<zendesk.support.request.AdapterAttachmentCarousel.CarouselViewHolder.OnRemoveListener>;
						/**
						 * Constructs a new instance of the zendesk.support.request.AdapterAttachmentCarousel$CarouselViewHolder$OnRemoveListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onRemove(param0: zendesk.support.request.StateRequestAttachment): void;
						});
						public constructor();
						public onRemove(param0: zendesk.support.request.StateRequestAttachment): void;
					}
				}
				export class FileAttachmentViewHolder extends zendesk.support.request.AdapterAttachmentCarousel.CarouselViewHolder {
					public static class: java.lang.Class<zendesk.support.request.AdapterAttachmentCarousel.FileAttachmentViewHolder>;
				}
				export class ImageAttachmentViewHolder extends zendesk.support.request.AdapterAttachmentCarousel.CarouselViewHolder {
					public static class: java.lang.Class<zendesk.support.request.AdapterAttachmentCarousel.ImageAttachmentViewHolder>;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class AsyncMiddleware extends zendesk.suas.Middleware {
				public static class: java.lang.Class<zendesk.support.request.AsyncMiddleware>;
				public onAction(param0: zendesk.suas.Action<any>, param1: zendesk.suas.GetState, param2: zendesk.suas.Dispatcher, param3: zendesk.suas.Continuation): void;
			}
			export module AsyncMiddleware {
				export class AsyncAction {
					public static class: java.lang.Class<zendesk.support.request.AsyncMiddleware.AsyncAction>;
					/**
					 * Constructs a new instance of the zendesk.support.request.AsyncMiddleware$AsyncAction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						actionQueued(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState): void;
						execute(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState, param2: zendesk.support.request.AsyncMiddleware.Callback): void;
					});
					public constructor();
					public actionQueued(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState): void;
					public execute(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState, param2: zendesk.support.request.AsyncMiddleware.Callback): void;
				}
				export class Callback {
					public static class: java.lang.Class<zendesk.support.request.AsyncMiddleware.Callback>;
					/**
					 * Constructs a new instance of the zendesk.support.request.AsyncMiddleware$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						done(): void;
					});
					public constructor();
					public done(): void;
				}
				export class Item {
					public static class: java.lang.Class<zendesk.support.request.AsyncMiddleware.Item>;
					/**
					 * Constructs a new instance of the zendesk.support.request.AsyncMiddleware$Item interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						execute(param0: zendesk.support.request.AsyncMiddleware.Callback): void;
					});
					public constructor();
					public execute(param0: zendesk.support.request.AsyncMiddleware.Callback): void;
				}
				export class Queue {
					public static class: java.lang.Class<zendesk.support.request.AsyncMiddleware.Queue>;
				}
				export module Queue {
					export class QueueCallback extends zendesk.support.request.AsyncMiddleware.Callback {
						public static class: java.lang.Class<zendesk.support.request.AsyncMiddleware.Queue.QueueCallback>;
						public done(): void;
					}
				}
				export class QueueItem extends zendesk.support.request.AsyncMiddleware.Item {
					public static class: java.lang.Class<zendesk.support.request.AsyncMiddleware.QueueItem>;
					public execute(param0: zendesk.support.request.AsyncMiddleware.Callback): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class AttachmentDownloadService {
				public static class: java.lang.Class<zendesk.support.request.AttachmentDownloadService>;
			}
			export module AttachmentDownloadService {
				export class SaveToFileTask {
					public static class: java.lang.Class<zendesk.support.request.AttachmentDownloadService.SaveToFileTask>;
					public run(): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class AttachmentDownloaderComponent extends zendesk.suas.Listener<zendesk.support.request.StateConversation> {
				public static class: java.lang.Class<zendesk.support.request.AttachmentDownloaderComponent>;
				public update(param0: any): void;
				public update(param0: zendesk.support.request.StateConversation): void;
			}
			export module AttachmentDownloaderComponent {
				export class AttachmentDownloader {
					public static class: java.lang.Class<zendesk.support.request.AttachmentDownloaderComponent.AttachmentDownloader>;
				}
				export module AttachmentDownloader {
					export class CacheCallback extends com.zendesk.service.ZendeskCallback<zendesk.belvedere.MediaResult> {
						public static class: java.lang.Class<zendesk.support.request.AttachmentDownloaderComponent.AttachmentDownloader.CacheCallback>;
						public onSuccess(param0: zendesk.belvedere.MediaResult): void;
						public onSuccess(param0: any): void;
						public onError(param0: com.zendesk.service.ErrorResponse): void;
					}
					export class HttpCallback extends com.zendesk.service.ZendeskCallback<okhttp3.ResponseBody> {
						public static class: java.lang.Class<zendesk.support.request.AttachmentDownloaderComponent.AttachmentDownloader.HttpCallback>;
						public onSuccess(param0: any): void;
						public onError(param0: com.zendesk.service.ErrorResponse): void;
						public onSuccess(param0: okhttp3.ResponseBody): void;
					}
					export class Request {
						public static class: java.lang.Class<zendesk.support.request.AttachmentDownloaderComponent.AttachmentDownloader.Request>;
					}
				}
				export class AttachmentDownloaderSelector {
					public static class: java.lang.Class<zendesk.support.request.AttachmentDownloaderComponent.AttachmentDownloaderSelector>;
					public selectData(param0: zendesk.support.request.StateConversation): java.util.List<zendesk.support.request.AttachmentDownloaderComponent.AttachmentDownloader.Request>;
				}
				export class DownloadCallback extends com.zendesk.service.ZendeskCallback<zendesk.belvedere.MediaResult> {
					public static class: java.lang.Class<zendesk.support.request.AttachmentDownloaderComponent.DownloadCallback>;
					public onError(param0: com.zendesk.service.ErrorResponse): void;
					public onSuccess(param0: zendesk.belvedere.MediaResult): void;
					public onSuccess(param0: any): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class AttachmentHelper {
				public static class: java.lang.Class<zendesk.support.request.AttachmentHelper>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class AttachmentUploadService {
				public static class: java.lang.Class<zendesk.support.request.AttachmentUploadService>;
			}
			export module AttachmentUploadService {
				export class AttachmentUploadResult {
					public static class: java.lang.Class<zendesk.support.request.AttachmentUploadService.AttachmentUploadResult>;
				}
				export class AttachmentsCallback extends com.zendesk.service.ZendeskCallback<zendesk.support.UploadResponse> {
					public static class: java.lang.Class<zendesk.support.request.AttachmentUploadService.AttachmentsCallback>;
					public onSuccess(param0: zendesk.support.UploadResponse): void;
					public onError(param0: com.zendesk.service.ErrorResponse): void;
					public onSuccess(param0: any): void;
				}
				export class ResolveCallback extends zendesk.belvedere.Callback<java.util.List<zendesk.belvedere.MediaResult>> {
					public static class: java.lang.Class<zendesk.support.request.AttachmentUploadService.ResolveCallback>;
					public success(param0: any): void;
					public success(param0: java.util.List<zendesk.belvedere.MediaResult>): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class CellAgentAttachmentGeneric extends zendesk.support.request.CellBase implements zendesk.support.request.CellType.Attachment, zendesk.support.request.CellType.Agent {
				public static class: java.lang.Class<zendesk.support.request.CellAgentAttachmentGeneric>;
				public getInsets(): globalAndroid.graphics.Rect;
				public getLayoutId(): number;
				public getPositionType(): number;
				public getTimeStamp(): java.util.Date;
				public bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
				public setPositionType(param0: number): void;
				public getUniqueId(): number;
				public getGroupId(): number;
				public isAgentNameVisible(): boolean;
				public getAgent(): zendesk.support.request.StateRequestUser;
				public showAgentName(param0: boolean): void;
				public areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
				public getAttachment(): zendesk.support.request.StateRequestAttachment;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class CellAgentAttachmentImage extends zendesk.support.request.CellBase implements zendesk.support.request.CellType.Attachment, zendesk.support.request.CellType.Agent {
				public static class: java.lang.Class<zendesk.support.request.CellAgentAttachmentImage>;
				public getInsets(): globalAndroid.graphics.Rect;
				public getLayoutId(): number;
				public getPositionType(): number;
				public getTimeStamp(): java.util.Date;
				public bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
				public setPositionType(param0: number): void;
				public getUniqueId(): number;
				public getGroupId(): number;
				public isAgentNameVisible(): boolean;
				public getAgent(): zendesk.support.request.StateRequestUser;
				public showAgentName(param0: boolean): void;
				public getAttachment(): zendesk.support.request.StateRequestAttachment;
				public areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class CellAgentMessage extends zendesk.support.request.CellBase implements zendesk.support.request.CellType.Message, zendesk.support.request.CellType.Agent {
				public static class: java.lang.Class<zendesk.support.request.CellAgentMessage>;
				public getInsets(): globalAndroid.graphics.Rect;
				public getLayoutId(): number;
				public getPositionType(): number;
				public getTimeStamp(): java.util.Date;
				public bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
				public setPositionType(param0: number): void;
				public getUniqueId(): number;
				public getGroupId(): number;
				public isAgentNameVisible(): boolean;
				public getAgent(): zendesk.support.request.StateRequestUser;
				public getMessage(): string;
				public showAgentName(param0: boolean): void;
				public areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class CellAttachmentLoadingUtil {
				public static class: java.lang.Class<zendesk.support.request.CellAttachmentLoadingUtil>;
			}
			export module CellAttachmentLoadingUtil {
				export class ImageLoadingLogic {
					public static class: java.lang.Class<zendesk.support.request.CellAttachmentLoadingUtil.ImageLoadingLogic>;
				}
				export module ImageLoadingLogic {
					export class DefaultDisplayStrategy extends zendesk.support.request.CellAttachmentLoadingUtil.ImageLoadingLogic.LoadingStrategy {
						public static class: java.lang.Class<zendesk.support.request.CellAttachmentLoadingUtil.ImageLoadingLogic.DefaultDisplayStrategy>;
						public load(param0: globalAndroid.widget.ImageView, param1: zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.ImageDimensions): void;
					}
					export class DisplayImageFromLocalSource extends zendesk.support.request.CellAttachmentLoadingUtil.ImageLoadingLogic.LoadingStrategy {
						public static class: java.lang.Class<zendesk.support.request.CellAttachmentLoadingUtil.ImageLoadingLogic.DisplayImageFromLocalSource>;
						public load(param0: globalAndroid.widget.ImageView, param1: zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.ImageDimensions): void;
					}
					export class DisplayImageFromWeb extends zendesk.support.request.CellAttachmentLoadingUtil.ImageLoadingLogic.LoadingStrategy {
						public static class: java.lang.Class<zendesk.support.request.CellAttachmentLoadingUtil.ImageLoadingLogic.DisplayImageFromWeb>;
						public load(param0: globalAndroid.widget.ImageView, param1: zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.ImageDimensions): void;
					}
					export class LoadingStrategy {
						public static class: java.lang.Class<zendesk.support.request.CellAttachmentLoadingUtil.ImageLoadingLogic.LoadingStrategy>;
						/**
						 * Constructs a new instance of the zendesk.support.request.CellAttachmentLoadingUtil$ImageLoadingLogic$LoadingStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							load(param0: globalAndroid.widget.ImageView, param1: zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.ImageDimensions): void;
						});
						public constructor();
						public load(param0: globalAndroid.widget.ImageView, param1: zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.ImageDimensions): void;
					}
				}
				export class ImageSizingLogic {
					public static class: java.lang.Class<zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic>;
				}
				export module ImageSizingLogic {
					export class DefaultStrategy extends zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.DimensionStrategy {
						public static class: java.lang.Class<zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.DefaultStrategy>;
						public findDimensions(param0: com.zendesk.service.ZendeskCallback<zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.ImageDimensions>): void;
					}
					export class DimensionStrategy {
						public static class: java.lang.Class<zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.DimensionStrategy>;
						/**
						 * Constructs a new instance of the zendesk.support.request.CellAttachmentLoadingUtil$ImageSizingLogic$DimensionStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							findDimensions(param0: com.zendesk.service.ZendeskCallback<zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.ImageDimensions>): void;
						});
						public constructor();
						public findDimensions(param0: com.zendesk.service.ZendeskCallback<zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.ImageDimensions>): void;
					}
					export class ExistingDimensions extends zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.DimensionStrategy {
						public static class: java.lang.Class<zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.ExistingDimensions>;
						public findDimensions(param0: com.zendesk.service.ZendeskCallback<zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.ImageDimensions>): void;
					}
					export class ImageDimensions {
						public static class: java.lang.Class<zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.ImageDimensions>;
						public toString(): string;
					}
					export class ReadFromBitmap extends zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.DimensionStrategy {
						public static class: java.lang.Class<zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.ReadFromBitmap>;
						public findDimensions(param0: com.zendesk.service.ZendeskCallback<zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.ImageDimensions>): void;
					}
					export class ReadFromPicasso extends zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.DimensionStrategy {
						public static class: java.lang.Class<zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.ReadFromPicasso>;
						public findDimensions(param0: com.zendesk.service.ZendeskCallback<zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.ImageDimensions>): void;
					}
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export abstract class CellBase extends zendesk.support.request.CellType.Base {
				public static class: java.lang.Class<zendesk.support.request.CellBase>;
				public utils: zendesk.support.request.CellBindHelper;
				public getTimeStamp(): java.util.Date;
				public getUniqueId(): number;
				public setPositionType(param0: number): void;
				public bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
				public getGroupId(): number;
				public getLayoutId(): number;
				public getInsets(): globalAndroid.graphics.Rect;
				public areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
				public getPositionType(): number;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class CellBindHelper {
				public static class: java.lang.Class<zendesk.support.request.CellBindHelper>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class CellFactory {
				public static class: java.lang.Class<zendesk.support.request.CellFactory>;
				public generateCells(param0: java.util.List<zendesk.support.request.StateMessage>, param1: java.util.List<zendesk.support.request.StateRequestUser>, param2: zendesk.support.RequestStatus, param3: string): java.util.List<zendesk.support.request.CellType.Base>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class CellMarginDecorator {
				public static class: java.lang.Class<zendesk.support.request.CellMarginDecorator>;
				public static CELL: number;
				public static CELL_START_BLOCK: number;
				public static CELL_WITH_LABEL: number;
				public static CELL_LAST: number;
				public getItemOffsets(param0: globalAndroid.graphics.Rect, param1: globalAndroid.view.View, param2: globalAndroid.support.v7.widget.RecyclerView, param3: globalAndroid.support.v7.widget.RecyclerView.State): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class CellSystemMessages {
				public static class: java.lang.Class<zendesk.support.request.CellSystemMessages>;
			}
			export module CellSystemMessages {
				export class CellDateMessage extends zendesk.support.request.CellBase {
					public static class: java.lang.Class<zendesk.support.request.CellSystemMessages.CellDateMessage>;
					public getUniqueId(): number;
					public getTimeStamp(): java.util.Date;
					public areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
					public getInsets(): globalAndroid.graphics.Rect;
					public getGroupId(): number;
					public getLayoutId(): number;
					public setPositionType(param0: number): void;
					public bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
					public getPositionType(): number;
				}
				export class CellRequestStatus extends zendesk.support.request.CellBase {
					public static class: java.lang.Class<zendesk.support.request.CellSystemMessages.CellRequestStatus>;
					public getUniqueId(): number;
					public getTimeStamp(): java.util.Date;
					public areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
					public getInsets(): globalAndroid.graphics.Rect;
					public getGroupId(): number;
					public getLayoutId(): number;
					public setPositionType(param0: number): void;
					public bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
					public getPositionType(): number;
				}
				export class CellSystemMessage extends zendesk.support.request.CellBase {
					public static class: java.lang.Class<zendesk.support.request.CellSystemMessages.CellSystemMessage>;
					public getUniqueId(): number;
					public getTimeStamp(): java.util.Date;
					public areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
					public getInsets(): globalAndroid.graphics.Rect;
					public getGroupId(): number;
					public getLayoutId(): number;
					public setPositionType(param0: number): void;
					public bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
					public getPositionType(): number;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class CellType {
				public static class: java.lang.Class<zendesk.support.request.CellType>;
				/**
				 * Constructs a new instance of the zendesk.support.request.CellType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
			export module CellType {
				export class Agent extends zendesk.support.request.CellType.Base {
					public static class: java.lang.Class<zendesk.support.request.CellType.Agent>;
					/**
					 * Constructs a new instance of the zendesk.support.request.CellType$Agent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						showAgentName(param0: boolean): void;
						isAgentNameVisible(): boolean;
						getAgent(): zendesk.support.request.StateRequestUser;
						getPositionType(): number;
						setPositionType(param0: number): void;
						getUniqueId(): number;
						getGroupId(): number;
						getLayoutId(): number;
						bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
						areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
						getTimeStamp(): java.util.Date;
						getInsets(): globalAndroid.graphics.Rect;
					});
					public constructor();
					public getUniqueId(): number;
					public isAgentNameVisible(): boolean;
					public getTimeStamp(): java.util.Date;
					public areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
					public getInsets(): globalAndroid.graphics.Rect;
					public getGroupId(): number;
					public getAgent(): zendesk.support.request.StateRequestUser;
					public getLayoutId(): number;
					public showAgentName(param0: boolean): void;
					public setPositionType(param0: number): void;
					public bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
					public getPositionType(): number;
				}
				export class Attachment extends zendesk.support.request.CellType.Base {
					public static class: java.lang.Class<zendesk.support.request.CellType.Attachment>;
					/**
					 * Constructs a new instance of the zendesk.support.request.CellType$Attachment interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getAttachment(): zendesk.support.request.StateRequestAttachment;
						getPositionType(): number;
						setPositionType(param0: number): void;
						getUniqueId(): number;
						getGroupId(): number;
						getLayoutId(): number;
						bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
						areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
						getTimeStamp(): java.util.Date;
						getInsets(): globalAndroid.graphics.Rect;
					});
					public constructor();
					public getUniqueId(): number;
					public getTimeStamp(): java.util.Date;
					public areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
					public getAttachment(): zendesk.support.request.StateRequestAttachment;
					public getInsets(): globalAndroid.graphics.Rect;
					public getGroupId(): number;
					public getLayoutId(): number;
					public setPositionType(param0: number): void;
					public bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
					public getPositionType(): number;
				}
				export class Base {
					public static class: java.lang.Class<zendesk.support.request.CellType.Base>;
					/**
					 * Constructs a new instance of the zendesk.support.request.CellType$Base interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getPositionType(): number;
						setPositionType(param0: number): void;
						getUniqueId(): number;
						getGroupId(): number;
						getLayoutId(): number;
						bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
						areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
						getTimeStamp(): java.util.Date;
						getInsets(): globalAndroid.graphics.Rect;
					});
					public constructor();
					public getUniqueId(): number;
					public getTimeStamp(): java.util.Date;
					public areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
					public getInsets(): globalAndroid.graphics.Rect;
					public getGroupId(): number;
					public getLayoutId(): number;
					public setPositionType(param0: number): void;
					public bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
					public getPositionType(): number;
				}
				export class Message extends zendesk.support.request.CellType.Base {
					public static class: java.lang.Class<zendesk.support.request.CellType.Message>;
					/**
					 * Constructs a new instance of the zendesk.support.request.CellType$Message interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getMessage(): string;
						getPositionType(): number;
						setPositionType(param0: number): void;
						getUniqueId(): number;
						getGroupId(): number;
						getLayoutId(): number;
						bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
						areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
						getTimeStamp(): java.util.Date;
						getInsets(): globalAndroid.graphics.Rect;
					});
					public constructor();
					public getUniqueId(): number;
					public getTimeStamp(): java.util.Date;
					public areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
					public getInsets(): globalAndroid.graphics.Rect;
					public getGroupId(): number;
					public getLayoutId(): number;
					public getMessage(): string;
					public setPositionType(param0: number): void;
					public bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
					public getPositionType(): number;
				}
				export class Stateful extends zendesk.support.request.CellType.Base {
					public static class: java.lang.Class<zendesk.support.request.CellType.Stateful>;
					/**
					 * Constructs a new instance of the zendesk.support.request.CellType$Stateful interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						markAsDelivered(): zendesk.support.request.CellType.Stateful;
						markAsErrored(param0: java.util.List<zendesk.support.request.StateMessage>, param1: boolean): zendesk.support.request.CellType.Stateful;
						getStateMessage(): zendesk.support.request.StateMessage;
						getErrorGroupMessages(): java.util.List<zendesk.support.request.StateMessage>;
						isMarkedAsDelivered(): boolean;
						isErrorShown(): boolean;
						isLastErrorCellOfBlock(): boolean;
						getPositionType(): number;
						setPositionType(param0: number): void;
						getUniqueId(): number;
						getGroupId(): number;
						getLayoutId(): number;
						bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
						areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
						getTimeStamp(): java.util.Date;
						getInsets(): globalAndroid.graphics.Rect;
					});
					public constructor();
					public getErrorGroupMessages(): java.util.List<zendesk.support.request.StateMessage>;
					public getUniqueId(): number;
					public isErrorShown(): boolean;
					public isMarkedAsDelivered(): boolean;
					public getGroupId(): number;
					public setPositionType(param0: number): void;
					public markAsDelivered(): zendesk.support.request.CellType.Stateful;
					public isLastErrorCellOfBlock(): boolean;
					public markAsErrored(param0: java.util.List<zendesk.support.request.StateMessage>, param1: boolean): zendesk.support.request.CellType.Stateful;
					public getPositionType(): number;
					public getTimeStamp(): java.util.Date;
					public areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
					public getInsets(): globalAndroid.graphics.Rect;
					public getLayoutId(): number;
					public getStateMessage(): zendesk.support.request.StateMessage;
					public bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class CellUserAttachmentGeneric extends zendesk.support.request.CellBase implements zendesk.support.request.CellType.Attachment, zendesk.support.request.CellType.Stateful {
				public static class: java.lang.Class<zendesk.support.request.CellUserAttachmentGeneric>;
				public isErrorShown(): boolean;
				public markAsErrored(param0: java.util.List<zendesk.support.request.StateMessage>, param1: boolean): zendesk.support.request.CellType.Stateful;
				public getInsets(): globalAndroid.graphics.Rect;
				public getLayoutId(): number;
				public getPositionType(): number;
				public getErrorGroupMessages(): java.util.List<zendesk.support.request.StateMessage>;
				public getStateMessage(): zendesk.support.request.StateMessage;
				public getTimeStamp(): java.util.Date;
				public markAsDelivered(): zendesk.support.request.CellType.Stateful;
				public isLastErrorCellOfBlock(): boolean;
				public bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
				public setPositionType(param0: number): void;
				public getUniqueId(): number;
				public getGroupId(): number;
				public areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
				public getAttachment(): zendesk.support.request.StateRequestAttachment;
				public isMarkedAsDelivered(): boolean;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class CellUserAttachmentImage extends zendesk.support.request.CellBase implements zendesk.support.request.CellType.Attachment, zendesk.support.request.CellType.Stateful {
				public static class: java.lang.Class<zendesk.support.request.CellUserAttachmentImage>;
				public isErrorShown(): boolean;
				public markAsErrored(param0: java.util.List<zendesk.support.request.StateMessage>, param1: boolean): zendesk.support.request.CellType.Stateful;
				public getInsets(): globalAndroid.graphics.Rect;
				public getLayoutId(): number;
				public getPositionType(): number;
				public getErrorGroupMessages(): java.util.List<zendesk.support.request.StateMessage>;
				public getStateMessage(): zendesk.support.request.StateMessage;
				public getTimeStamp(): java.util.Date;
				public markAsDelivered(): zendesk.support.request.CellType.Stateful;
				public isLastErrorCellOfBlock(): boolean;
				public bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
				public setPositionType(param0: number): void;
				public getUniqueId(): number;
				public getGroupId(): number;
				public getAttachment(): zendesk.support.request.StateRequestAttachment;
				public areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
				public isMarkedAsDelivered(): boolean;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class CellUserMessage extends zendesk.support.request.CellBase implements zendesk.support.request.CellType.Message, zendesk.support.request.CellType.Stateful {
				public static class: java.lang.Class<zendesk.support.request.CellUserMessage>;
				public isErrorShown(): boolean;
				public markAsErrored(param0: java.util.List<zendesk.support.request.StateMessage>, param1: boolean): zendesk.support.request.CellType.Stateful;
				public getInsets(): globalAndroid.graphics.Rect;
				public getLayoutId(): number;
				public getPositionType(): number;
				public getErrorGroupMessages(): java.util.List<zendesk.support.request.StateMessage>;
				public getStateMessage(): zendesk.support.request.StateMessage;
				public getTimeStamp(): java.util.Date;
				public markAsDelivered(): zendesk.support.request.CellType.Stateful;
				public isLastErrorCellOfBlock(): boolean;
				public bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
				public setPositionType(param0: number): void;
				public getUniqueId(): number;
				public getGroupId(): number;
				public getMessage(): string;
				public areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
				public isMarkedAsDelivered(): boolean;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ComponentAttachmentCarousel extends java.lang.Object {
				public static class: java.lang.Class<zendesk.support.request.ComponentAttachmentCarousel>;
				public update(param0: zendesk.support.request.ComponentAttachmentCarousel.AttachmentCarouselModel): void;
				public onMenuItemsInflated(param0: globalAndroid.view.MenuItem, param1: globalAndroid.view.MenuItem): void;
				public onDismissed(): void;
				public onVisible(): void;
				public onMenuItemsClicked(param0: globalAndroid.view.MenuItem): void;
				public onMediaDeselected(param0: java.util.List<zendesk.belvedere.MediaResult>): void;
				public update(param0: any): void;
				public onMediaSelected(param0: java.util.List<zendesk.belvedere.MediaResult>): void;
			}
			export module ComponentAttachmentCarousel {
				export class AttachmentCarouselModel {
					public static class: java.lang.Class<zendesk.support.request.ComponentAttachmentCarousel.AttachmentCarouselModel>;
				}
				export class AttachmentCarouselSelector extends zendesk.suas.StateSelector<zendesk.support.request.ComponentAttachmentCarousel.AttachmentCarouselModel> {
					public static class: java.lang.Class<zendesk.support.request.ComponentAttachmentCarousel.AttachmentCarouselSelector>;
					public selectData(param0: zendesk.suas.State): any;
					public selectData(param0: zendesk.suas.State): zendesk.support.request.ComponentAttachmentCarousel.AttachmentCarouselModel;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ComponentDialog extends zendesk.suas.Listener<zendesk.support.request.StateUi> {
				public static class: java.lang.Class<zendesk.support.request.ComponentDialog>;
				public update(param0: zendesk.support.request.StateUi): void;
				public update(param0: any): void;
			}
			export module ComponentDialog {
				export class OnDismissedListener {
					public static class: java.lang.Class<zendesk.support.request.ComponentDialog.OnDismissedListener>;
					public onDismiss(param0: globalAndroid.content.DialogInterface): void;
				}
				export class RetryDialogListener extends zendesk.support.request.RetryDialog.Listener {
					public static class: java.lang.Class<zendesk.support.request.ComponentDialog.RetryDialogListener>;
					public onRetryMessage(param0: java.util.List<zendesk.support.request.StateMessage>): void;
					public onDeleteMessage(param0: java.util.List<zendesk.support.request.StateMessage>): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ComponentError extends zendesk.suas.Listener<zendesk.support.request.ComponentError.ErrorStateModel> {
				public static class: java.lang.Class<zendesk.support.request.ComponentError>;
				public update(param0: any): void;
				public update(param0: zendesk.support.request.ComponentError.ErrorStateModel): void;
			}
			export module ComponentError {
				export class ErrorStateModel {
					public static class: java.lang.Class<zendesk.support.request.ComponentError.ErrorStateModel>;
				}
				export class ErrorStateSelector extends zendesk.suas.StateSelector<zendesk.support.request.ComponentError.ErrorStateModel> {
					public static class: java.lang.Class<zendesk.support.request.ComponentError.ErrorStateSelector>;
					public selectData(param0: zendesk.suas.State): zendesk.support.request.ComponentError.ErrorStateModel;
					public selectData(param0: zendesk.suas.State): any;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ComponentInputForm extends java.lang.Object {
				public static class: java.lang.Class<zendesk.support.request.ComponentInputForm>;
				public onMenuItemsInflated(param0: globalAndroid.view.MenuItem, param1: globalAndroid.view.MenuItem): void;
				public onKeyboardDismissed(): void;
				public onMenuItemsClicked(param0: globalAndroid.view.MenuItem): void;
				public onKeyboardVisible(): void;
				public update(param0: any): void;
				public update(param0: zendesk.support.request.ComponentInputForm.InputFormModel): void;
			}
			export module ComponentInputForm {
				export class EditTextTextWatcher {
					public static class: java.lang.Class<zendesk.support.request.ComponentInputForm.EditTextTextWatcher>;
					public afterTextChanged(param0: globalAndroid.text.Editable): void;
					public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
					public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
				}
				export class EmailFieldFocusListener {
					public static class: java.lang.Class<zendesk.support.request.ComponentInputForm.EmailFieldFocusListener>;
					public onFocusChange(param0: globalAndroid.view.View, param1: boolean): void;
				}
				export class InputFormModel {
					public static class: java.lang.Class<zendesk.support.request.ComponentInputForm.InputFormModel>;
					public isLoading(): boolean;
				}
				export class InputFormSelector extends zendesk.suas.StateSelector<zendesk.support.request.ComponentInputForm.InputFormModel> {
					public static class: java.lang.Class<zendesk.support.request.ComponentInputForm.InputFormSelector>;
					public selectData(param0: zendesk.suas.State): zendesk.support.request.ComponentInputForm.InputFormModel;
					public selectData(param0: zendesk.suas.State): any;
				}
				export class Validator<T>  extends java.lang.Object {
					public static class: java.lang.Class<zendesk.support.request.ComponentInputForm.Validator<any>>;
					/**
					 * Constructs a new instance of the zendesk.support.request.ComponentInputForm$Validator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						isValid(param0: T): boolean;
					});
					public constructor();
					public isValid(param0: T): boolean;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ComponentMessageComposer extends java.lang.Object {
				public static class: java.lang.Class<zendesk.support.request.ComponentMessageComposer>;
				public onDismissed(): void;
				public update(param0: zendesk.support.request.ComponentMessageComposer.MessageComposerModel): void;
				public onVisible(): void;
				public onMediaDeselected(param0: java.util.List<zendesk.belvedere.MediaResult>): void;
				public update(param0: any): void;
				public getSelector(): zendesk.suas.StateSelector<zendesk.support.request.ComponentMessageComposer.MessageComposerModel>;
				public onMediaSelected(param0: java.util.List<zendesk.belvedere.MediaResult>): void;
				public onAddAttachmentsRequested(): void;
				public onSendMessageRequested(param0: string): void;
			}
			export module ComponentMessageComposer {
				export class MessageComposerModel {
					public static class: java.lang.Class<zendesk.support.request.ComponentMessageComposer.MessageComposerModel>;
				}
				export class MessageComposerSelector extends zendesk.suas.StateSelector<zendesk.support.request.ComponentMessageComposer.MessageComposerModel> {
					public static class: java.lang.Class<zendesk.support.request.ComponentMessageComposer.MessageComposerSelector>;
					public selectData(param0: zendesk.suas.State): any;
					public selectData(param0: zendesk.suas.State): zendesk.support.request.ComponentMessageComposer.MessageComposerModel;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ComponentPersistence extends zendesk.suas.Listener<zendesk.support.request.ComponentPersistence.RequestPersistenceModel> {
				public static class: java.lang.Class<zendesk.support.request.ComponentPersistence>;
				public update(param0: zendesk.support.request.ComponentPersistence.RequestPersistenceModel): void;
				public update(param0: any): void;
			}
			export module ComponentPersistence {
				export class Item {
					public static class: java.lang.Class<zendesk.support.request.ComponentPersistence.Item>;
					/**
					 * Constructs a new instance of the zendesk.support.request.ComponentPersistence$Item interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						persist(): void;
					});
					public constructor();
					public persist(): void;
				}
				export class PersistenceItem extends zendesk.support.request.ComponentPersistence.Item {
					public static class: java.lang.Class<zendesk.support.request.ComponentPersistence.PersistenceItem>;
					public persist(): void;
				}
				export class PersistenceQueue {
					public static class: java.lang.Class<zendesk.support.request.ComponentPersistence.PersistenceQueue>;
					public constructor(param0: java.util.concurrent.Executor);
				}
				export module PersistenceQueue {
					export class Worker {
						public static class: java.lang.Class<zendesk.support.request.ComponentPersistence.PersistenceQueue.Worker>;
						public run(): void;
					}
				}
				export class PersistenceSelector extends zendesk.suas.StateSelector<zendesk.support.request.ComponentPersistence.RequestPersistenceModel> {
					public static class: java.lang.Class<zendesk.support.request.ComponentPersistence.PersistenceSelector>;
					public selectData(param0: zendesk.suas.State): zendesk.support.request.ComponentPersistence.RequestPersistenceModel;
					public selectData(param0: zendesk.suas.State): any;
				}
				export class RequestIdMapper {
					public static class: java.lang.Class<zendesk.support.request.ComponentPersistence.RequestIdMapper>;
					public constructor();
				}
				export class RequestPersistenceModel {
					public static class: java.lang.Class<zendesk.support.request.ComponentPersistence.RequestPersistenceModel>;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ComponentRequestAdapter extends zendesk.suas.Listener<java.util.List<zendesk.support.request.CellType.Base>> {
				public static class: java.lang.Class<zendesk.support.request.ComponentRequestAdapter>;
				public update(param0: java.util.List<zendesk.support.request.CellType.Base>): void;
				public update(param0: any): void;
			}
			export module ComponentRequestAdapter {
				export class DiffCalculator {
					public static class: java.lang.Class<zendesk.support.request.ComponentRequestAdapter.DiffCalculator>;
					public getNewListSize(): number;
					public areContentsTheSame(param0: number, param1: number): boolean;
					public getOldListSize(): number;
					public areItemsTheSame(param0: number, param1: number): boolean;
				}
				export class RequestAdapter extends globalAndroid.support.v7.widget.RecyclerView.Adapter<zendesk.support.request.ComponentRequestAdapter.RequestViewHolder> {
					public static class: java.lang.Class<zendesk.support.request.ComponentRequestAdapter.RequestAdapter>;
					public getItemCount(): number;
					public getItemViewType(param0: number): number;
					public onBindViewHolder(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder, param1: number): void;
					public getItemId(param0: number): number;
					public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): zendesk.support.request.ComponentRequestAdapter.RequestViewHolder;
					public onViewDetachedFromWindow(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
				}
				export class RequestAdapterSelector extends zendesk.suas.StateSelector<java.util.List<zendesk.support.request.CellType.Base>> {
					public static class: java.lang.Class<zendesk.support.request.ComponentRequestAdapter.RequestAdapterSelector>;
					public selectData(param0: zendesk.suas.State): java.util.List<zendesk.support.request.CellType.Base>;
					public selectData(param0: zendesk.suas.State): any;
				}
				export class RequestViewHolder {
					public static class: java.lang.Class<zendesk.support.request.ComponentRequestAdapter.RequestViewHolder>;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ComponentRequestRouter extends zendesk.suas.Listener<zendesk.support.request.ComponentRequestRouter.RequestScreen> {
				public static class: java.lang.Class<zendesk.support.request.ComponentRequestRouter>;
				public update(param0: zendesk.support.request.ComponentRequestRouter.RequestScreen): void;
				public update(param0: any): void;
			}
			export module ComponentRequestRouter {
				export class RequestRouterSelector extends zendesk.suas.StateSelector<zendesk.support.request.ComponentRequestRouter.RequestScreen> {
					public static class: java.lang.Class<zendesk.support.request.ComponentRequestRouter.RequestRouterSelector>;
					public selectData(param0: zendesk.suas.State): any;
					public selectData(param0: zendesk.suas.State): zendesk.support.request.ComponentRequestRouter.RequestScreen;
				}
				export class RequestScreen {
					public static class: java.lang.Class<zendesk.support.request.ComponentRequestRouter.RequestScreen>;
					public static Loading: zendesk.support.request.ComponentRequestRouter.RequestScreen;
					public static EmailForm: zendesk.support.request.ComponentRequestRouter.RequestScreen;
					public static Conversation: zendesk.support.request.ComponentRequestRouter.RequestScreen;
					public static Fin: zendesk.support.request.ComponentRequestRouter.RequestScreen;
					public static valueOf(param0: string): zendesk.support.request.ComponentRequestRouter.RequestScreen;
					public static values(): native.Array<zendesk.support.request.ComponentRequestRouter.RequestScreen>;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ComponentToolbar extends zendesk.suas.Listener<zendesk.support.request.ComponentToolbar.ToolbarModel> {
				public static class: java.lang.Class<zendesk.support.request.ComponentToolbar>;
				public update(param0: zendesk.support.request.ComponentToolbar.ToolbarModel): void;
				public update(param0: any): void;
			}
			export module ComponentToolbar {
				export class ToolbarModel {
					public static class: java.lang.Class<zendesk.support.request.ComponentToolbar.ToolbarModel>;
					public equals(param0: any): boolean;
					public hashCode(): number;
				}
				export class ToolbarSelector extends zendesk.suas.StateSelector<zendesk.support.request.ComponentToolbar.ToolbarModel> {
					public static class: java.lang.Class<zendesk.support.request.ComponentToolbar.ToolbarSelector>;
					public selectData(param0: zendesk.suas.State): zendesk.support.request.ComponentToolbar.ToolbarModel;
					public selectData(param0: zendesk.suas.State): any;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ComponentUpdateActionHandlers extends zendesk.suas.Listener<zendesk.support.request.StateConversation> {
				public static class: java.lang.Class<zendesk.support.request.ComponentUpdateActionHandlers>;
				public update(param0: any): void;
				public update(param0: zendesk.support.request.StateConversation): void;
			}
			export module ComponentUpdateActionHandlers {
				export class RefreshCallback extends com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.requestlist.RequestInfo>> {
					public static class: java.lang.Class<zendesk.support.request.ComponentUpdateActionHandlers.RefreshCallback>;
					public onError(param0: com.zendesk.service.ErrorResponse): void;
					public onSuccess(param0: java.util.List<zendesk.support.requestlist.RequestInfo>): void;
					public onSuccess(param0: any): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class DocumentRenderer {
				public static class: java.lang.Class<zendesk.support.request.DocumentRenderer>;
			}
			export module DocumentRenderer {
				export class HtmlParser {
					public static class: java.lang.Class<zendesk.support.request.DocumentRenderer.HtmlParser>;
				}
				export class Node {
					public static class: java.lang.Class<zendesk.support.request.DocumentRenderer.Node>;
					public getText(): string;
					public getType(): zendesk.support.request.DocumentRenderer.Node.Type;
					public getParent(): zendesk.support.request.DocumentRenderer.Node;
				}
				export module Node {
					export class Type {
						public static class: java.lang.Class<zendesk.support.request.DocumentRenderer.Node.Type>;
						public static B: zendesk.support.request.DocumentRenderer.Node.Type;
						public static I: zendesk.support.request.DocumentRenderer.Node.Type;
						public static Code: zendesk.support.request.DocumentRenderer.Node.Type;
						public static H1: zendesk.support.request.DocumentRenderer.Node.Type;
						public static H2: zendesk.support.request.DocumentRenderer.Node.Type;
						public static H3: zendesk.support.request.DocumentRenderer.Node.Type;
						public static H4: zendesk.support.request.DocumentRenderer.Node.Type;
						public static H5: zendesk.support.request.DocumentRenderer.Node.Type;
						public static H6: zendesk.support.request.DocumentRenderer.Node.Type;
						public static Strong: zendesk.support.request.DocumentRenderer.Node.Type;
						public static U: zendesk.support.request.DocumentRenderer.Node.Type;
						public static Em: zendesk.support.request.DocumentRenderer.Node.Type;
						public static Br: zendesk.support.request.DocumentRenderer.Node.Type;
						public static Hr: zendesk.support.request.DocumentRenderer.Node.Type;
						public static Div: zendesk.support.request.DocumentRenderer.Node.Type;
						public static P: zendesk.support.request.DocumentRenderer.Node.Type;
						public static Li: zendesk.support.request.DocumentRenderer.Node.Type;
						public static A: zendesk.support.request.DocumentRenderer.Node.Type;
						public static Ol: zendesk.support.request.DocumentRenderer.Node.Type;
						public static Ul: zendesk.support.request.DocumentRenderer.Node.Type;
						public static Img: zendesk.support.request.DocumentRenderer.Node.Type;
						public static Text: zendesk.support.request.DocumentRenderer.Node.Type;
						public static Document: zendesk.support.request.DocumentRenderer.Node.Type;
						public static Unknown: zendesk.support.request.DocumentRenderer.Node.Type;
						public static values(): native.Array<zendesk.support.request.DocumentRenderer.Node.Type>;
						public static valueOf(param0: string): zendesk.support.request.DocumentRenderer.Node.Type;
						public getTag(): string;
					}
				}
				export class RichRenderingDocument {
					public static class: java.lang.Class<zendesk.support.request.DocumentRenderer.RichRenderingDocument>;
				}
				export class Style {
					public static class: java.lang.Class<zendesk.support.request.DocumentRenderer.Style>;
					/**
					 * Constructs a new instance of the zendesk.support.request.DocumentRenderer$Style interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						applyStyle(param0: java.util.List<string>, param1: java.util.Map<string,string>): globalAndroid.text.Spannable;
					});
					public constructor();
					public applyStyle(param0: java.util.List<string>, param1: java.util.Map<string,string>): globalAndroid.text.Spannable;
				}
				export module Style {
					export class Bold extends zendesk.support.request.DocumentRenderer.Style {
						public static class: java.lang.Class<zendesk.support.request.DocumentRenderer.Style.Bold>;
						public constructor();
						public applyStyle(param0: java.util.List<string>, param1: java.util.Map<string,string>): globalAndroid.text.Spannable;
					}
					export class Br extends zendesk.support.request.DocumentRenderer.Style {
						public static class: java.lang.Class<zendesk.support.request.DocumentRenderer.Style.Br>;
						public constructor();
						public applyStyle(param0: java.util.List<string>, param1: java.util.Map<string,string>): globalAndroid.text.Spannable;
					}
					export class CodeSpan extends zendesk.support.request.DocumentRenderer.Style {
						public static class: java.lang.Class<zendesk.support.request.DocumentRenderer.Style.CodeSpan>;
						public constructor();
						public applyStyle(param0: java.util.List<string>, param1: java.util.Map<string,string>): globalAndroid.text.Spannable;
					}
					export class Factory {
						public static class: java.lang.Class<zendesk.support.request.DocumentRenderer.Style.Factory>;
					}
					export class Header extends zendesk.support.request.DocumentRenderer.Style.Bold {
						public static class: java.lang.Class<zendesk.support.request.DocumentRenderer.Style.Header>;
						public constructor();
						public applyStyle(param0: java.util.List<string>, param1: java.util.Map<string,string>): globalAndroid.text.Spannable;
					}
					export class Image extends zendesk.support.request.DocumentRenderer.Style {
						public static class: java.lang.Class<zendesk.support.request.DocumentRenderer.Style.Image>;
						public applyStyle(param0: java.util.List<string>, param1: java.util.Map<string,string>): globalAndroid.text.Spannable;
					}
					export class Italic extends zendesk.support.request.DocumentRenderer.Style {
						public static class: java.lang.Class<zendesk.support.request.DocumentRenderer.Style.Italic>;
						public constructor();
						public applyStyle(param0: java.util.List<string>, param1: java.util.Map<string,string>): globalAndroid.text.Spannable;
					}
					export class Li extends zendesk.support.request.DocumentRenderer.Style {
						public static class: java.lang.Class<zendesk.support.request.DocumentRenderer.Style.Li>;
						public constructor();
						public applyStyle(param0: java.util.List<string>, param1: java.util.Map<string,string>): globalAndroid.text.Spannable;
					}
					export class Link extends zendesk.support.request.DocumentRenderer.Style {
						public static class: java.lang.Class<zendesk.support.request.DocumentRenderer.Style.Link>;
						public constructor();
						public applyStyle(param0: java.util.List<string>, param1: java.util.Map<string,string>): globalAndroid.text.Spannable;
					}
					export class SpannableHelper {
						public static class: java.lang.Class<zendesk.support.request.DocumentRenderer.Style.SpannableHelper>;
					}
					export class Unknown extends zendesk.support.request.DocumentRenderer.Style {
						public static class: java.lang.Class<zendesk.support.request.DocumentRenderer.Style.Unknown>;
						public constructor();
						public applyStyle(param0: java.util.List<string>, param1: java.util.Map<string,string>): globalAndroid.text.Spannable;
					}
				}
				export class ZendeskUrlSpan {
					public static class: java.lang.Class<zendesk.support.request.DocumentRenderer.ZendeskUrlSpan>;
					public onClick(param0: globalAndroid.view.View): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class HeadlessComponentListener {
				public static class: java.lang.Class<zendesk.support.request.HeadlessComponentListener>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class HeadlessFragment<E>  extends globalAndroid.support.v4.app.Fragment {
				public static class: java.lang.Class<zendesk.support.request.HeadlessFragment<any>>;
				public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
				public constructor();
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ReducerAndroidLifecycle extends zendesk.suas.Reducer<zendesk.support.request.StateAndroidLifecycle> {
				public static class: java.lang.Class<zendesk.support.request.ReducerAndroidLifecycle>;
				public reduce(param0: any, param1: zendesk.suas.Action<any>): any;
				public getInitialState(): any;
				public getInitialState(): zendesk.support.request.StateAndroidLifecycle;
				public reduce(param0: zendesk.support.request.StateAndroidLifecycle, param1: zendesk.suas.Action<any>): zendesk.support.request.StateAndroidLifecycle;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ReducerAttachments extends zendesk.suas.Reducer<zendesk.support.request.StateAttachments> {
				public static class: java.lang.Class<zendesk.support.request.ReducerAttachments>;
				public reduce(param0: zendesk.support.request.StateAttachments, param1: zendesk.suas.Action<any>): zendesk.support.request.StateAttachments;
				public reduce(param0: any, param1: zendesk.suas.Action<any>): any;
				public getInitialState(): any;
				public getInitialState(): zendesk.support.request.StateAttachments;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ReducerConfiguration extends zendesk.suas.Reducer<zendesk.support.request.StateConfig> {
				public static class: java.lang.Class<zendesk.support.request.ReducerConfiguration>;
				public reduce(param0: zendesk.support.request.StateConfig, param1: zendesk.suas.Action<any>): zendesk.support.request.StateConfig;
				public reduce(param0: any, param1: zendesk.suas.Action<any>): any;
				public getInitialState(): any;
				public getInitialState(): zendesk.support.request.StateConfig;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ReducerConversation extends zendesk.suas.Reducer<zendesk.support.request.StateConversation> {
				public static class: java.lang.Class<zendesk.support.request.ReducerConversation>;
				public reduce(param0: zendesk.support.request.StateConversation, param1: zendesk.suas.Action<any>): zendesk.support.request.StateConversation;
				public reduce(param0: any, param1: zendesk.suas.Action<any>): any;
				public getInitialState(): zendesk.support.request.StateConversation;
				public getInitialState(): any;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ReducerError extends zendesk.suas.Reducer<zendesk.support.request.StateError> {
				public static class: java.lang.Class<zendesk.support.request.ReducerError>;
				public reduce(param0: zendesk.support.request.StateError, param1: zendesk.suas.Action<any>): zendesk.support.request.StateError;
				public reduce(param0: any, param1: zendesk.suas.Action<any>): any;
				public getInitialState(): zendesk.support.request.StateError;
				public getInitialState(): any;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ReducerProgress extends zendesk.suas.Reducer<zendesk.support.request.StateProgress> {
				public static class: java.lang.Class<zendesk.support.request.ReducerProgress>;
				public reduce(param0: any, param1: zendesk.suas.Action<any>): any;
				public reduce(param0: zendesk.support.request.StateProgress, param1: zendesk.suas.Action<any>): zendesk.support.request.StateProgress;
				public getInitialState(): any;
				public getInitialState(): zendesk.support.request.StateProgress;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ReducerUiState extends zendesk.suas.Reducer<zendesk.support.request.StateUi> {
				public static class: java.lang.Class<zendesk.support.request.ReducerUiState>;
				public reduce(param0: any, param1: zendesk.suas.Action<any>): any;
				public reduce(param0: zendesk.support.request.StateUi, param1: zendesk.suas.Action<any>): zendesk.support.request.StateUi;
				public getInitialState(): any;
				public getInitialState(): zendesk.support.request.StateUi;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestAccessibilityHerald extends zendesk.suas.Listener<zendesk.suas.Action<any>> {
				public static class: java.lang.Class<zendesk.support.request.RequestAccessibilityHerald>;
				public update(param0: zendesk.suas.Action<any>): void;
				public update(param0: any): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestActivity {
				public static class: java.lang.Class<zendesk.support.request.RequestActivity>;
				public onBackPressed(): void;
				public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onResume(): void;
				public static builder(): zendesk.support.request.RequestUiConfig.Builder;
				public onCreateOptionsMenu(param0: globalAndroid.view.Menu): boolean;
				public onPause(): void;
				public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
				public constructor();
			}
			export module RequestActivity {
				export class MoveUpWithSnackbarBehaviour {
					public static class: java.lang.Class<zendesk.support.request.RequestActivity.MoveUpWithSnackbarBehaviour>;
					public onDependentViewChanged(param0: globalAndroid.support.design.widget.CoordinatorLayout, param1: globalAndroid.view.View, param2: globalAndroid.view.View): boolean;
					public layoutDependsOn(param0: globalAndroid.support.design.widget.CoordinatorLayout, param1: globalAndroid.view.View, param2: globalAndroid.view.View): boolean;
				}
				export class RefreshRequestActionHandler extends zendesk.core.ActionHandler {
					public static class: java.lang.Class<zendesk.support.request.RequestActivity.RefreshRequestActionHandler>;
					public getPriority(): number;
					public canHandle(param0: string): boolean;
					public updateSettings(param0: java.util.Map<string,com.google.gson.JsonElement>): void;
					public handle(param0: java.util.Map<string,any>, param1: globalAndroid.content.Context): void;
					public getActionDescription(): zendesk.core.ActionDescription;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestActivity_MembersInjector extends dagger.MembersInjector<zendesk.support.request.RequestActivity> {
				public static class: java.lang.Class<zendesk.support.request.RequestActivity_MembersInjector>;
				public static injectPicasso(param0: zendesk.support.request.RequestActivity, param1: com.sebchlan.picassocompat.PicassoCompat): void;
				public injectMembers(param0: zendesk.support.request.RequestActivity): void;
				public static injectHeadlessComponentListener(param0: zendesk.support.request.RequestActivity, param1: any): void;
				public constructor(param0: javax.inject.Provider<zendesk.suas.Store>, param1: javax.inject.Provider<zendesk.support.request.ActionFactory>, param2: javax.inject.Provider<zendesk.support.request.HeadlessComponentListener>, param3: javax.inject.Provider<com.sebchlan.picassocompat.PicassoCompat>, param4: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>);
				public static create(param0: javax.inject.Provider<zendesk.suas.Store>, param1: javax.inject.Provider<zendesk.support.request.ActionFactory>, param2: javax.inject.Provider<zendesk.support.request.HeadlessComponentListener>, param3: javax.inject.Provider<com.sebchlan.picassocompat.PicassoCompat>, param4: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>): dagger.MembersInjector<zendesk.support.request.RequestActivity>;
				public static injectActionHandlerRegistry(param0: zendesk.support.request.RequestActivity, param1: zendesk.core.ActionHandlerRegistry): void;
				public static injectStore(param0: zendesk.support.request.RequestActivity, param1: zendesk.suas.Store): void;
				public static injectAf(param0: zendesk.support.request.RequestActivity, param1: any): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestComponent {
				public static class: java.lang.Class<zendesk.support.request.RequestComponent>;
				/**
				 * Constructs a new instance of the zendesk.support.request.RequestComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					inject(param0: zendesk.support.request.RequestActivity): void;
					inject(param0: zendesk.support.request.RequestViewConversationsEnabled): void;
					inject(param0: zendesk.support.request.RequestViewConversationsDisabled): void;
				});
				public constructor();
				public inject(param0: zendesk.support.request.RequestViewConversationsEnabled): void;
				public inject(param0: zendesk.support.request.RequestActivity): void;
				public inject(param0: zendesk.support.request.RequestViewConversationsDisabled): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestModule {
				public static class: java.lang.Class<zendesk.support.request.RequestModule>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestModule_ProvidesActionFactoryFactory extends dagger.internal.Factory<zendesk.support.request.ActionFactory> {
				public static class: java.lang.Class<zendesk.support.request.RequestModule_ProvidesActionFactoryFactory>;
				public static create(param0: javax.inject.Provider<zendesk.support.RequestProvider>, param1: javax.inject.Provider<zendesk.support.SupportSettingsProvider>, param2: javax.inject.Provider<zendesk.support.UploadProvider>, param3: javax.inject.Provider<zendesk.belvedere.Belvedere>, param4: javax.inject.Provider<zendesk.support.SupportUiStorage>, param5: javax.inject.Provider<java.util.concurrent.ExecutorService>, param6: javax.inject.Provider<java.util.concurrent.Executor>, param7: javax.inject.Provider<zendesk.core.AuthenticationProvider>, param8: javax.inject.Provider<zendesk.support.SupportBlipsProvider>): zendesk.support.request.RequestModule_ProvidesActionFactoryFactory;
				public get(): zendesk.support.request.ActionFactory;
				public constructor(param0: javax.inject.Provider<zendesk.support.RequestProvider>, param1: javax.inject.Provider<zendesk.support.SupportSettingsProvider>, param2: javax.inject.Provider<zendesk.support.UploadProvider>, param3: javax.inject.Provider<zendesk.belvedere.Belvedere>, param4: javax.inject.Provider<zendesk.support.SupportUiStorage>, param5: javax.inject.Provider<java.util.concurrent.ExecutorService>, param6: javax.inject.Provider<java.util.concurrent.Executor>, param7: javax.inject.Provider<zendesk.core.AuthenticationProvider>, param8: javax.inject.Provider<zendesk.support.SupportBlipsProvider>);
				public static providesActionFactory(param0: zendesk.support.RequestProvider, param1: zendesk.support.SupportSettingsProvider, param2: zendesk.support.UploadProvider, param3: zendesk.belvedere.Belvedere, param4: zendesk.support.SupportUiStorage, param5: java.util.concurrent.ExecutorService, param6: java.util.concurrent.Executor, param7: zendesk.core.AuthenticationProvider, param8: zendesk.support.SupportBlipsProvider): zendesk.support.request.ActionFactory;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestModule_ProvidesAsyncMiddlewareFactory extends dagger.internal.Factory<zendesk.support.request.AsyncMiddleware> {
				public static class: java.lang.Class<zendesk.support.request.RequestModule_ProvidesAsyncMiddlewareFactory>;
				public static create(): zendesk.support.request.RequestModule_ProvidesAsyncMiddlewareFactory;
				public get(): zendesk.support.request.AsyncMiddleware;
				public constructor();
				public static providesAsyncMiddleware(): zendesk.support.request.AsyncMiddleware;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestModule_ProvidesAttachmentDownloaderComponentFactory extends dagger.internal.Factory<zendesk.support.request.AttachmentDownloaderComponent> {
				public static class: java.lang.Class<zendesk.support.request.RequestModule_ProvidesAttachmentDownloaderComponentFactory>;
				public get(): zendesk.support.request.AttachmentDownloaderComponent;
				public static providesAttachmentDownloaderComponent(param0: zendesk.suas.Dispatcher, param1: any, param2: any): zendesk.support.request.AttachmentDownloaderComponent;
				public static create(param0: javax.inject.Provider<zendesk.suas.Dispatcher>, param1: javax.inject.Provider<zendesk.support.request.ActionFactory>, param2: javax.inject.Provider<zendesk.support.request.AttachmentDownloaderComponent.AttachmentDownloader>): zendesk.support.request.RequestModule_ProvidesAttachmentDownloaderComponentFactory;
				public constructor(param0: javax.inject.Provider<zendesk.suas.Dispatcher>, param1: javax.inject.Provider<zendesk.support.request.ActionFactory>, param2: javax.inject.Provider<zendesk.support.request.AttachmentDownloaderComponent.AttachmentDownloader>);
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestModule_ProvidesAttachmentDownloaderFactory extends dagger.internal.Factory<zendesk.support.request.AttachmentDownloaderComponent.AttachmentDownloader> {
				public static class: java.lang.Class<zendesk.support.request.RequestModule_ProvidesAttachmentDownloaderFactory>;
				public constructor(param0: javax.inject.Provider<zendesk.belvedere.Belvedere>, param1: javax.inject.Provider<zendesk.support.request.AttachmentDownloadService>);
				public static providesAttachmentDownloader(param0: zendesk.belvedere.Belvedere, param1: any): zendesk.support.request.AttachmentDownloaderComponent.AttachmentDownloader;
				public get(): zendesk.support.request.AttachmentDownloaderComponent.AttachmentDownloader;
				public static create(param0: javax.inject.Provider<zendesk.belvedere.Belvedere>, param1: javax.inject.Provider<zendesk.support.request.AttachmentDownloadService>): zendesk.support.request.RequestModule_ProvidesAttachmentDownloaderFactory;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestModule_ProvidesAttachmentToDiskServiceFactory extends dagger.internal.Factory<zendesk.support.request.AttachmentDownloadService> {
				public static class: java.lang.Class<zendesk.support.request.RequestModule_ProvidesAttachmentToDiskServiceFactory>;
				public constructor(param0: javax.inject.Provider<okhttp3.OkHttpClient>, param1: javax.inject.Provider<java.util.concurrent.ExecutorService>);
				public static create(param0: javax.inject.Provider<okhttp3.OkHttpClient>, param1: javax.inject.Provider<java.util.concurrent.ExecutorService>): zendesk.support.request.RequestModule_ProvidesAttachmentToDiskServiceFactory;
				public static providesAttachmentToDiskService(param0: okhttp3.OkHttpClient, param1: java.util.concurrent.ExecutorService): zendesk.support.request.AttachmentDownloadService;
				public get(): zendesk.support.request.AttachmentDownloadService;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestModule_ProvidesBelvedereFactory extends dagger.internal.Factory<zendesk.belvedere.Belvedere> {
				public static class: java.lang.Class<zendesk.support.request.RequestModule_ProvidesBelvedereFactory>;
				public static providesBelvedere(param0: globalAndroid.content.Context): zendesk.belvedere.Belvedere;
				public static create(param0: javax.inject.Provider<globalAndroid.content.Context>): zendesk.support.request.RequestModule_ProvidesBelvedereFactory;
				public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>);
				public get(): zendesk.belvedere.Belvedere;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestModule_ProvidesComponentListenerFactory extends dagger.internal.Factory<zendesk.support.request.HeadlessComponentListener> {
				public static class: java.lang.Class<zendesk.support.request.RequestModule_ProvidesComponentListenerFactory>;
				public get(): zendesk.support.request.HeadlessComponentListener;
				public static providesComponentListener(param0: any, param1: any, param2: any): zendesk.support.request.HeadlessComponentListener;
				public constructor(param0: javax.inject.Provider<zendesk.support.request.ComponentPersistence>, param1: javax.inject.Provider<zendesk.support.request.AttachmentDownloaderComponent>, param2: javax.inject.Provider<zendesk.support.request.ComponentUpdateActionHandlers>);
				public static create(param0: javax.inject.Provider<zendesk.support.request.ComponentPersistence>, param1: javax.inject.Provider<zendesk.support.request.AttachmentDownloaderComponent>, param2: javax.inject.Provider<zendesk.support.request.ComponentUpdateActionHandlers>): zendesk.support.request.RequestModule_ProvidesComponentListenerFactory;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestModule_ProvidesConUpdatesComponentFactory extends dagger.internal.Factory<zendesk.support.request.ComponentUpdateActionHandlers> {
				public static class: java.lang.Class<zendesk.support.request.RequestModule_ProvidesConUpdatesComponentFactory>;
				public static create(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>, param2: javax.inject.Provider<zendesk.support.requestlist.RequestInfoDataSource.LocalDataSource>): zendesk.support.request.RequestModule_ProvidesConUpdatesComponentFactory;
				public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>, param2: javax.inject.Provider<zendesk.support.requestlist.RequestInfoDataSource.LocalDataSource>);
				public static providesConUpdatesComponent(param0: globalAndroid.content.Context, param1: zendesk.core.ActionHandlerRegistry, param2: zendesk.support.requestlist.RequestInfoDataSource.LocalDataSource): zendesk.support.request.ComponentUpdateActionHandlers;
				public get(): zendesk.support.request.ComponentUpdateActionHandlers;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestModule_ProvidesDiskQueueFactory extends dagger.internal.Factory<zendesk.support.request.ComponentPersistence.PersistenceQueue> {
				public static class: java.lang.Class<zendesk.support.request.RequestModule_ProvidesDiskQueueFactory>;
				public static create(param0: javax.inject.Provider<java.util.concurrent.ExecutorService>): zendesk.support.request.RequestModule_ProvidesDiskQueueFactory;
				public static providesDiskQueue(param0: java.util.concurrent.ExecutorService): zendesk.support.request.ComponentPersistence.PersistenceQueue;
				public constructor(param0: javax.inject.Provider<java.util.concurrent.ExecutorService>);
				public get(): zendesk.support.request.ComponentPersistence.PersistenceQueue;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestModule_ProvidesDispatcherFactory extends dagger.internal.Factory<zendesk.suas.Dispatcher> {
				public static class: java.lang.Class<zendesk.support.request.RequestModule_ProvidesDispatcherFactory>;
				public get(): zendesk.suas.Dispatcher;
				public static create(param0: javax.inject.Provider<zendesk.suas.Store>): zendesk.support.request.RequestModule_ProvidesDispatcherFactory;
				public static providesDispatcher(param0: zendesk.suas.Store): zendesk.suas.Dispatcher;
				public constructor(param0: javax.inject.Provider<zendesk.suas.Store>);
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestModule_ProvidesMessageFactoryFactory extends dagger.internal.Factory<zendesk.support.request.CellFactory> {
				public static class: java.lang.Class<zendesk.support.request.RequestModule_ProvidesMessageFactoryFactory>;
				public constructor(param0: zendesk.support.request.RequestModule, param1: javax.inject.Provider<globalAndroid.content.Context>, param2: javax.inject.Provider<com.sebchlan.picassocompat.PicassoCompat>, param3: javax.inject.Provider<zendesk.support.request.ActionFactory>, param4: javax.inject.Provider<zendesk.suas.Dispatcher>, param5: javax.inject.Provider<zendesk.support.ZendeskDeepLinkHelper>);
				public static providesMessageFactory(param0: zendesk.support.request.RequestModule, param1: globalAndroid.content.Context, param2: com.sebchlan.picassocompat.PicassoCompat, param3: any, param4: zendesk.suas.Dispatcher, param5: zendesk.support.ZendeskDeepLinkHelper): zendesk.support.request.CellFactory;
				public get(): zendesk.support.request.CellFactory;
				public static create(param0: zendesk.support.request.RequestModule, param1: javax.inject.Provider<globalAndroid.content.Context>, param2: javax.inject.Provider<com.sebchlan.picassocompat.PicassoCompat>, param3: javax.inject.Provider<zendesk.support.request.ActionFactory>, param4: javax.inject.Provider<zendesk.suas.Dispatcher>, param5: javax.inject.Provider<zendesk.support.ZendeskDeepLinkHelper>): zendesk.support.request.RequestModule_ProvidesMessageFactoryFactory;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestModule_ProvidesPersistenceComponentFactory extends dagger.internal.Factory<zendesk.support.request.ComponentPersistence> {
				public static class: java.lang.Class<zendesk.support.request.RequestModule_ProvidesPersistenceComponentFactory>;
				public static create(param0: javax.inject.Provider<zendesk.support.SupportUiStorage>, param1: javax.inject.Provider<zendesk.support.request.ComponentPersistence.PersistenceQueue>, param2: javax.inject.Provider<java.util.concurrent.ExecutorService>): zendesk.support.request.RequestModule_ProvidesPersistenceComponentFactory;
				public constructor(param0: javax.inject.Provider<zendesk.support.SupportUiStorage>, param1: javax.inject.Provider<zendesk.support.request.ComponentPersistence.PersistenceQueue>, param2: javax.inject.Provider<java.util.concurrent.ExecutorService>);
				public get(): zendesk.support.request.ComponentPersistence;
				public static providesPersistenceComponent(param0: zendesk.support.SupportUiStorage, param1: any, param2: java.util.concurrent.ExecutorService): zendesk.support.request.ComponentPersistence;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestModule_ProvidesReducerFactory extends dagger.internal.Factory<java.util.List<zendesk.suas.Reducer<any>>> {
				public static class: java.lang.Class<zendesk.support.request.RequestModule_ProvidesReducerFactory>;
				public static providesReducer(): java.util.List<zendesk.suas.Reducer<any>>;
				public get(): java.util.List<zendesk.suas.Reducer<any>>;
				public static create(): zendesk.support.request.RequestModule_ProvidesReducerFactory;
				public constructor();
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestModule_ProvidesStoreFactory extends dagger.internal.Factory<zendesk.suas.Store> {
				public static class: java.lang.Class<zendesk.support.request.RequestModule_ProvidesStoreFactory>;
				public static providesStore(param0: java.util.List<zendesk.suas.Reducer<any>>, param1: any): zendesk.suas.Store;
				public static create(param0: javax.inject.Provider<java.util.List<zendesk.suas.Reducer<any>>>, param1: javax.inject.Provider<zendesk.support.request.AsyncMiddleware>): zendesk.support.request.RequestModule_ProvidesStoreFactory;
				public constructor(param0: javax.inject.Provider<java.util.List<zendesk.suas.Reducer<any>>>, param1: javax.inject.Provider<zendesk.support.request.AsyncMiddleware>);
				public get(): zendesk.suas.Store;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestUiConfig extends zendesk.commonui.UiConfig {
				public static class: java.lang.Class<zendesk.support.request.RequestUiConfig>;
				public getTags(): java.util.List<string>;
				public getRequestSubject(): string;
				public getTicketForm(): zendesk.support.request.StateRequestTicketForm;
				public getUiConfigs(): java.util.List<zendesk.commonui.UiConfig>;
				public getFiles(): java.util.List<zendesk.support.request.StateRequestAttachment>;
				public getRequestStatus(): zendesk.support.RequestStatus;
				public getRequestId(): string;
				public getLocalRequestId(): string;
			}
			export module RequestUiConfig {
				export class Builder {
					public static class: java.lang.Class<zendesk.support.request.RequestUiConfig.Builder>;
					public deepLinkIntent(param0: globalAndroid.content.Context, param1: native.Array<globalAndroid.content.Intent>): globalAndroid.content.Intent;
					public show(param0: globalAndroid.content.Context, param1: java.util.List<zendesk.commonui.UiConfig>): void;
					public deepLinkIntent(param0: globalAndroid.content.Context, param1: java.util.List<zendesk.commonui.UiConfig>, param2: native.Array<globalAndroid.content.Intent>): globalAndroid.content.Intent;
					public intent(param0: globalAndroid.content.Context, param1: native.Array<zendesk.commonui.UiConfig>): globalAndroid.content.Intent;
					public withFiles(param0: java.util.List<java.io.File>): zendesk.support.request.RequestUiConfig.Builder;
					public withFiles(param0: native.Array<java.io.File>): zendesk.support.request.RequestUiConfig.Builder;
					public withRequestSubject(param0: string): zendesk.support.request.RequestUiConfig.Builder;
					public withRequestId(param0: string): zendesk.support.request.RequestUiConfig.Builder;
					public withTicketForm(param0: number, param1: java.util.List<zendesk.support.CustomField>): zendesk.support.request.RequestUiConfig.Builder;
					public withTags(param0: java.util.List<string>): zendesk.support.request.RequestUiConfig.Builder;
					public withCustomFields(param0: java.util.List<zendesk.support.CustomField>): zendesk.support.request.RequestUiConfig.Builder;
					public withRequestInfo(param0: zendesk.support.requestlist.RequestInfo): zendesk.support.request.RequestUiConfig.Builder;
					public constructor();
					public withRequest(param0: zendesk.support.Request): zendesk.support.request.RequestUiConfig.Builder;
					public withTags(param0: native.Array<string>): zendesk.support.request.RequestUiConfig.Builder;
					public show(param0: globalAndroid.content.Context, param1: native.Array<zendesk.commonui.UiConfig>): void;
					public intent(param0: globalAndroid.content.Context, param1: java.util.List<zendesk.commonui.UiConfig>): globalAndroid.content.Intent;
					public config(): zendesk.commonui.UiConfig;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestView {
				public static class: java.lang.Class<zendesk.support.request.RequestView>;
				/**
				 * Constructs a new instance of the zendesk.support.request.RequestView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					inflateMenu(param0: globalAndroid.view.MenuInflater, param1: globalAndroid.view.Menu): boolean;
					onOptionsItemClicked(param0: globalAndroid.view.MenuItem): boolean;
					hasUnsavedInput(): boolean;
				});
				public constructor();
				public inflateMenu(param0: globalAndroid.view.MenuInflater, param1: globalAndroid.view.Menu): boolean;
				public onOptionsItemClicked(param0: globalAndroid.view.MenuItem): boolean;
				public hasUnsavedInput(): boolean;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestViewConversationsDisabled implements zendesk.support.request.RequestView {
				public static class: java.lang.Class<zendesk.support.request.RequestViewConversationsDisabled>;
				public init(param0: zendesk.support.request.RequestComponent): void;
				public inflateMenu(param0: globalAndroid.view.MenuInflater, param1: globalAndroid.view.Menu): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public hasUnsavedInput(): boolean;
				public onOptionsItemClicked(param0: globalAndroid.view.MenuItem): boolean;
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public onDetachedFromWindow(): void;
			}
			export module RequestViewConversationsDisabled {
				export class MenuItemsDelegate {
					public static class: java.lang.Class<zendesk.support.request.RequestViewConversationsDisabled.MenuItemsDelegate>;
					/**
					 * Constructs a new instance of the zendesk.support.request.RequestViewConversationsDisabled$MenuItemsDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onMenuItemsInflated(param0: globalAndroid.view.MenuItem, param1: globalAndroid.view.MenuItem): void;
						onMenuItemsClicked(param0: globalAndroid.view.MenuItem): void;
					});
					public constructor();
					public onMenuItemsClicked(param0: globalAndroid.view.MenuItem): void;
					public onMenuItemsInflated(param0: globalAndroid.view.MenuItem, param1: globalAndroid.view.MenuItem): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestViewConversationsDisabled_MembersInjector extends dagger.MembersInjector<zendesk.support.request.RequestViewConversationsDisabled> {
				public static class: java.lang.Class<zendesk.support.request.RequestViewConversationsDisabled_MembersInjector>;
				public static injectPicasso(param0: zendesk.support.request.RequestViewConversationsDisabled, param1: com.sebchlan.picassocompat.PicassoCompat): void;
				public static injectStore(param0: zendesk.support.request.RequestViewConversationsDisabled, param1: zendesk.suas.Store): void;
				public static create(param0: javax.inject.Provider<zendesk.suas.Store>, param1: javax.inject.Provider<zendesk.support.request.ActionFactory>, param2: javax.inject.Provider<com.sebchlan.picassocompat.PicassoCompat>): dagger.MembersInjector<zendesk.support.request.RequestViewConversationsDisabled>;
				public injectMembers(param0: zendesk.support.request.RequestViewConversationsDisabled): void;
				public static injectAf(param0: zendesk.support.request.RequestViewConversationsDisabled, param1: any): void;
				public constructor(param0: javax.inject.Provider<zendesk.suas.Store>, param1: javax.inject.Provider<zendesk.support.request.ActionFactory>, param2: javax.inject.Provider<com.sebchlan.picassocompat.PicassoCompat>);
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestViewConversationsEnabled implements zendesk.support.request.RequestView {
				public static class: java.lang.Class<zendesk.support.request.RequestViewConversationsEnabled>;
				public inflateMenu(param0: globalAndroid.view.MenuInflater, param1: globalAndroid.view.Menu): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public onOptionsItemClicked(param0: globalAndroid.view.MenuItem): boolean;
				public hasUnsavedInput(): boolean;
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public onDetachedFromWindow(): void;
			}
			export module RequestViewConversationsEnabled {
				export class ImagePickerDragAnimation extends zendesk.belvedere.ImageStream.ScrollListener {
					public static class: java.lang.Class<zendesk.support.request.RequestViewConversationsEnabled.ImagePickerDragAnimation>;
					public onScroll(param0: number, param1: number, param2: number): void;
				}
				export class RecyclerListener extends zendesk.support.request.ViewMessageComposer.OnHeightChangeListener {
					public static class: java.lang.Class<zendesk.support.request.RequestViewConversationsEnabled.RecyclerListener>;
					public onFocusChange(param0: globalAndroid.view.View, param1: boolean): void;
					public onRemoved(param0: number, param1: number): void;
					public onLayoutChange(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): void;
					public onHeightChange(param0: number): void;
					public onInserted(param0: number, param1: number): void;
					public onChanged(param0: number, param1: number, param2: any): void;
					public onMoved(param0: number, param1: number): void;
				}
				export class RequestItemAnimator {
					public static class: java.lang.Class<zendesk.support.request.RequestViewConversationsEnabled.RequestItemAnimator>;
					public canReuseUpdatedViewHolder(param0: globalAndroid.support.v7.widget.RecyclerView.ViewHolder): boolean;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestViewConversationsEnabled_MembersInjector extends dagger.MembersInjector<zendesk.support.request.RequestViewConversationsEnabled> {
				public static class: java.lang.Class<zendesk.support.request.RequestViewConversationsEnabled_MembersInjector>;
				public static injectPicasso(param0: zendesk.support.request.RequestViewConversationsEnabled, param1: com.sebchlan.picassocompat.PicassoCompat): void;
				public static create(param0: javax.inject.Provider<zendesk.suas.Store>, param1: javax.inject.Provider<zendesk.support.request.ActionFactory>, param2: javax.inject.Provider<zendesk.support.request.CellFactory>, param3: javax.inject.Provider<com.sebchlan.picassocompat.PicassoCompat>): dagger.MembersInjector<zendesk.support.request.RequestViewConversationsEnabled>;
				public static injectStore(param0: zendesk.support.request.RequestViewConversationsEnabled, param1: zendesk.suas.Store): void;
				public injectMembers(param0: zendesk.support.request.RequestViewConversationsEnabled): void;
				public static injectAf(param0: zendesk.support.request.RequestViewConversationsEnabled, param1: any): void;
				public static injectCellFactory(param0: zendesk.support.request.RequestViewConversationsEnabled, param1: any): void;
				public constructor(param0: javax.inject.Provider<zendesk.suas.Store>, param1: javax.inject.Provider<zendesk.support.request.ActionFactory>, param2: javax.inject.Provider<zendesk.support.request.CellFactory>, param3: javax.inject.Provider<com.sebchlan.picassocompat.PicassoCompat>);
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestViewLoading implements zendesk.support.request.RequestView {
				public static class: java.lang.Class<zendesk.support.request.RequestViewLoading>;
				public inflateMenu(param0: globalAndroid.view.MenuInflater, param1: globalAndroid.view.Menu): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public onOptionsItemClicked(param0: globalAndroid.view.MenuItem): boolean;
				public hasUnsavedInput(): boolean;
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RetryDialog {
				public static class: java.lang.Class<zendesk.support.request.RetryDialog>;
				public setListener(param0: zendesk.support.request.RetryDialog.Listener): void;
				public onStart(): void;
			}
			export module RetryDialog {
				export class Listener {
					public static class: java.lang.Class<zendesk.support.request.RetryDialog.Listener>;
					/**
					 * Constructs a new instance of the zendesk.support.request.RetryDialog$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onDeleteMessage(param0: java.util.List<zendesk.support.request.StateMessage>): void;
						onRetryMessage(param0: java.util.List<zendesk.support.request.StateMessage>): void;
					});
					public constructor();
					public onRetryMessage(param0: java.util.List<zendesk.support.request.StateMessage>): void;
					public onDeleteMessage(param0: java.util.List<zendesk.support.request.StateMessage>): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class StateAndroidLifecycle {
				public static class: java.lang.Class<zendesk.support.request.StateAndroidLifecycle>;
				public static STARTED: number;
				public static STOPPED: number;
				public getState(): number;
				public constructor(param0: number);
				public toString(): string;
				public constructor();
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class StateAttachments {
				public static class: java.lang.Class<zendesk.support.request.StateAttachments>;
				public toString(): string;
			}
			export module StateAttachments {
				export class Builder {
					public static class: java.lang.Class<zendesk.support.request.StateAttachments.Builder>;
				}
				export class UriComparator extends java.lang.Object {
					public static class: java.lang.Class<zendesk.support.request.StateAttachments.UriComparator>;
					public compare(param0: zendesk.support.request.StateRequestAttachment, param1: zendesk.support.request.StateRequestAttachment): number;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class StateConfig {
				public static class: java.lang.Class<zendesk.support.request.StateConfig>;
				public toString(): string;
			}
			export module StateConfig {
				export class Builder {
					public static class: java.lang.Class<zendesk.support.request.StateConfig.Builder>;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class StateConversation {
				public static class: java.lang.Class<zendesk.support.request.StateConversation>;
				public toString(): string;
			}
			export module StateConversation {
				export class Builder {
					public static class: java.lang.Class<zendesk.support.request.StateConversation.Builder>;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class StateError {
				public static class: java.lang.Class<zendesk.support.request.StateError>;
			}
			export module StateError {
				export class ErrorType {
					public static class: java.lang.Class<zendesk.support.request.StateError.ErrorType>;
					public static InitialGetComments: zendesk.support.request.StateError.ErrorType;
					public static InputFormSubmission: zendesk.support.request.StateError.ErrorType;
					public static NoAccess: zendesk.support.request.StateError.ErrorType;
					public static NoError: zendesk.support.request.StateError.ErrorType;
					public static values(): native.Array<zendesk.support.request.StateError.ErrorType>;
					public static valueOf(param0: string): zendesk.support.request.StateError.ErrorType;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class StateIdMapper {
				public static class: java.lang.Class<zendesk.support.request.StateIdMapper>;
				public toString(): string;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class StateMessage {
				public static class: java.lang.Class<zendesk.support.request.StateMessage>;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public toString(): string;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class StateMessageMergeUtil {
				public static class: java.lang.Class<zendesk.support.request.StateMessageMergeUtil>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class StateMessageStatus {
				public static class: java.lang.Class<zendesk.support.request.StateMessageStatus>;
				public toString(): string;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class StateProgress {
				public static class: java.lang.Class<zendesk.support.request.StateProgress>;
				public toString(): string;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class StateRequestAttachment extends java.lang.Object {
				public static class: java.lang.Class<zendesk.support.request.StateRequestAttachment>;
				public toString(): string;
				public compareTo(param0: zendesk.support.request.StateRequestAttachment): number;
			}
			export module StateRequestAttachment {
				export class Builder {
					public static class: java.lang.Class<zendesk.support.request.StateRequestAttachment.Builder>;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class StateRequestTicketForm {
				public static class: java.lang.Class<zendesk.support.request.StateRequestTicketForm>;
				public constructor(param0: number, param1: java.util.List<zendesk.support.CustomField>);
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class StateRequestUser {
				public static class: java.lang.Class<zendesk.support.request.StateRequestUser>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class StateRetryDialog extends zendesk.support.request.StateUi.DialogState {
				public static class: java.lang.Class<zendesk.support.request.StateRetryDialog>;
				public isVisible(): boolean;
				public setVisible(param0: boolean): zendesk.support.request.StateUi.DialogState;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class StateSettings {
				public static class: java.lang.Class<zendesk.support.request.StateSettings>;
				public toString(): string;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class StateUi {
				public static class: java.lang.Class<zendesk.support.request.StateUi>;
				public toString(): string;
			}
			export module StateUi {
				export class DialogState {
					public static class: java.lang.Class<zendesk.support.request.StateUi.DialogState>;
					/**
					 * Constructs a new instance of the zendesk.support.request.StateUi$DialogState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setVisible(param0: boolean): zendesk.support.request.StateUi.DialogState;
						isVisible(): boolean;
					});
					public constructor();
					public setVisible(param0: boolean): zendesk.support.request.StateUi.DialogState;
					public isVisible(): boolean;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class UtilsAnimation {
				public static class: java.lang.Class<zendesk.support.request.UtilsAnimation>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class UtilsAttachment {
				public static class: java.lang.Class<zendesk.support.request.UtilsAttachment>;
			}
			export module UtilsAttachment {
				export class AttachmentNameComparator extends java.util.Comparator<zendesk.support.request.StateRequestAttachment> {
					public static class: java.lang.Class<zendesk.support.request.UtilsAttachment.AttachmentNameComparator>;
					public compare(param0: zendesk.support.request.StateRequestAttachment, param1: zendesk.support.request.StateRequestAttachment): number;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class UtilsDate {
				public static class: java.lang.Class<zendesk.support.request.UtilsDate>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ViewAlmostRealProgressBar {
				public static class: java.lang.Class<zendesk.support.request.ViewAlmostRealProgressBar>;
				public static STOP_ANIMATION_DURATION: number;
				public static ALPHA_FADE_DURATION: number;
				public static STOP_DEBOUNCE_TIME: number;
				public static START_DEBOUNCE_TIME: number;
				public static SIMPLE_PROGRESSBAR: java.util.List<zendesk.support.request.ViewAlmostRealProgressBar.Step>;
				public static DONT_STOP_MOVING: java.util.List<zendesk.support.request.ViewAlmostRealProgressBar.Step>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public onSaveInstanceState(): globalAndroid.os.Parcelable;
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public stop(param0: number): void;
				public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
				public start(param0: java.util.List<zendesk.support.request.ViewAlmostRealProgressBar.Step>): void;
			}
			export module ViewAlmostRealProgressBar {
				export class State {
					public static class: java.lang.Class<zendesk.support.request.ViewAlmostRealProgressBar.State>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<zendesk.support.request.ViewAlmostRealProgressBar.State>;
					public constructor(param0: globalAndroid.os.Parcelable, param1: number, param2: java.util.List<zendesk.support.request.ViewAlmostRealProgressBar.Step>);
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				}
				export class StateAwareAnimator {
					public static class: java.lang.Class<zendesk.support.request.ViewAlmostRealProgressBar.StateAwareAnimator>;
					public onAnimationCancel(param0: globalAndroid.animation.Animator): void;
					public onAnimationEnd(param0: globalAndroid.animation.Animator): void;
					public onAnimationStart(param0: globalAndroid.animation.Animator): void;
					public onAnimationRepeat(param0: globalAndroid.animation.Animator): void;
				}
				export class Step extends java.lang.Object {
					public static class: java.lang.Class<zendesk.support.request.ViewAlmostRealProgressBar.Step>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<zendesk.support.request.ViewAlmostRealProgressBar.Step>;
					public compareTo(param0: zendesk.support.request.ViewAlmostRealProgressBar.Step): number;
					public describeContents(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ViewAttachmentsIndicator {
				public static class: java.lang.Class<zendesk.support.request.ViewAttachmentsIndicator>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ViewCellAttachmentMenuItem {
				public static class: java.lang.Class<zendesk.support.request.ViewCellAttachmentMenuItem>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ViewMessageComposer {
				public static class: java.lang.Class<zendesk.support.request.ViewMessageComposer>;
				public addListener(param0: zendesk.support.request.ViewMessageComposer.InputListener): void;
				public onLayoutChange(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public setOnHeightChangeListener(param0: zendesk.support.request.ViewMessageComposer.OnHeightChangeListener): void;
				public init(param0: zendesk.belvedere.ImageStream): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public addOnFocusChangeListener(param0: globalAndroid.view.View.OnFocusChangeListener): void;
				public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
				public setAttachmentsCount(param0: number): void;
				public hide(param0: boolean): void;
				public onFocusChange(param0: globalAndroid.view.View, param1: boolean): void;
				public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
				public onClick(param0: globalAndroid.view.View): void;
				public constructor(param0: globalAndroid.content.Context);
				public removeAllListener(): void;
				public dispatchKeyEventPreIme(param0: globalAndroid.view.KeyEvent): boolean;
				public onEditorAction(param0: globalAndroid.widget.TextView, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
				public getMessage(): string;
				public afterTextChanged(param0: globalAndroid.text.Editable): void;
				public requestFocusForInput(): void;
			}
			export module ViewMessageComposer {
				export class InputListener {
					public static class: java.lang.Class<zendesk.support.request.ViewMessageComposer.InputListener>;
					/**
					 * Constructs a new instance of the zendesk.support.request.ViewMessageComposer$InputListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onAddAttachmentsRequested(): void;
						onSendMessageRequested(param0: string): void;
					});
					public constructor();
					public onSendMessageRequested(param0: string): void;
					public onAddAttachmentsRequested(): void;
				}
				export class MessageComposerState {
					public static class: java.lang.Class<zendesk.support.request.ViewMessageComposer.MessageComposerState>;
					public toString(): string;
				}
				export class MessageComposerStateHelper {
					public static class: java.lang.Class<zendesk.support.request.ViewMessageComposer.MessageComposerStateHelper>;
				}
				export class OnHeightChangeListener {
					public static class: java.lang.Class<zendesk.support.request.ViewMessageComposer.OnHeightChangeListener>;
					/**
					 * Constructs a new instance of the zendesk.support.request.ViewMessageComposer$OnHeightChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onHeightChange(param0: number): void;
					});
					public constructor();
					public onHeightChange(param0: number): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ViewRequestText {
				public static class: java.lang.Class<zendesk.support.request.ViewRequestText>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public dispatchTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ViewToolbarAvatar {
				public static class: java.lang.Class<zendesk.support.request.ViewToolbarAvatar>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class CancelableCompositeCallback {
				public static class: java.lang.Class<zendesk.support.requestlist.CancelableCompositeCallback>;
				public add(param0: com.zendesk.service.SafeZendeskCallback<any>): void;
				public cancel(): void;
				public add(param0: native.Array<com.zendesk.service.SafeZendeskCallback<any>>): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestInfo {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestInfo>;
				public constructor(param0: string, param1: string, param2: zendesk.support.RequestStatus, param3: boolean, param4: java.util.Date, param5: java.util.List<zendesk.support.requestlist.RequestInfo.AgentInfo>, param6: zendesk.support.requestlist.RequestInfo.MessageInfo, param7: zendesk.support.requestlist.RequestInfo.MessageInfo, param8: java.util.Set<string>);
				public getAgentInfos(): java.util.List<zendesk.support.requestlist.RequestInfo.AgentInfo>;
				public hashCode(): number;
				public getRemoteId(): string;
				public equals(param0: any): boolean;
				public getLocalId(): string;
				public getRequestStatus(): zendesk.support.RequestStatus;
			}
			export module RequestInfo {
				export class AgentInfo {
					public static class: java.lang.Class<zendesk.support.requestlist.RequestInfo.AgentInfo>;
					public equals(param0: any): boolean;
					public hashCode(): number;
					public constructor(param0: string, param1: string, param2: string);
				}
				export class LastUpdatedComparator extends java.util.Comparator<zendesk.support.requestlist.RequestInfo> {
					public static class: java.lang.Class<zendesk.support.requestlist.RequestInfo.LastUpdatedComparator>;
					public compare(param0: zendesk.support.requestlist.RequestInfo, param1: zendesk.support.requestlist.RequestInfo): number;
				}
				export class MessageInfo {
					public static class: java.lang.Class<zendesk.support.requestlist.RequestInfo.MessageInfo>;
					public equals(param0: any): boolean;
					public constructor(param0: string, param1: java.util.Date, param2: string);
					public hashCode(): number;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestInfoDataSource {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestInfoDataSource>;
				/**
				 * Constructs a new instance of the zendesk.support.requestlist.RequestInfoDataSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					load(param0: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.requestlist.RequestInfo>>): void;
				});
				public constructor();
				public static LOCAL: string;
				public static REMOTE: string;
				public load(param0: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.requestlist.RequestInfo>>): void;
			}
			export module RequestInfoDataSource {
				export class Disk extends zendesk.support.requestlist.RequestInfoDataSource {
					public static class: java.lang.Class<zendesk.support.requestlist.RequestInfoDataSource.Disk>;
					public load(param0: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.requestlist.RequestInfo>>): void;
					public constructor(param0: java.util.concurrent.Executor, param1: java.util.concurrent.Executor, param2: zendesk.support.SupportUiStorage, param3: string);
				}
				export class LocalDataSource extends zendesk.support.requestlist.RequestInfoDataSource {
					public static class: java.lang.Class<zendesk.support.requestlist.RequestInfoDataSource.LocalDataSource>;
					public insert(param0: zendesk.support.requestlist.RequestInfo, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.requestlist.RequestInfo>>): void;
					public load(param0: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.requestlist.RequestInfo>>): void;
					public constructor(param0: zendesk.support.requestlist.RequestInfoDataSource.Disk);
					public remove(param0: string, param1: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.requestlist.RequestInfo>>): void;
				}
				export class Network extends zendesk.support.requestlist.RequestInfoDataSource {
					public static class: java.lang.Class<zendesk.support.requestlist.RequestInfoDataSource.Network>;
					public load(param0: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.requestlist.RequestInfo>>): void;
				}
				export class RemoteDataSource extends zendesk.support.requestlist.RequestInfoDataSource {
					public static class: java.lang.Class<zendesk.support.requestlist.RequestInfoDataSource.RemoteDataSource>;
					public load(param0: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.requestlist.RequestInfo>>): void;
				}
				export class Repository extends zendesk.support.requestlist.RequestInfoDataSource {
					public static class: java.lang.Class<zendesk.support.requestlist.RequestInfoDataSource.Repository>;
					public load(param0: com.zendesk.service.ZendeskCallback<java.util.List<zendesk.support.requestlist.RequestInfo>>): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestInfoMerger {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestInfoMerger>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestListActivity {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestListActivity>;
				public static refresh(param0: globalAndroid.content.Context, param1: zendesk.core.ActionHandlerRegistry): void;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onResume(): void;
				public onStart(): void;
				public onPause(): void;
				public onStop(): void;
				public onDestroy(): void;
				public static builder(): zendesk.support.requestlist.RequestListUiConfig.Builder;
				public constructor();
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestListActivity_MembersInjector extends dagger.MembersInjector<zendesk.support.requestlist.RequestListActivity> {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestListActivity_MembersInjector>;
				public static injectSyncHandler(param0: zendesk.support.requestlist.RequestListActivity, param1: any): void;
				public static injectModel(param0: zendesk.support.requestlist.RequestListActivity, param1: any): void;
				public constructor(param0: javax.inject.Provider<zendesk.support.requestlist.RequestListPresenter>, param1: javax.inject.Provider<zendesk.support.requestlist.RequestListView>, param2: javax.inject.Provider<zendesk.support.requestlist.RequestListModel>, param3: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>, param4: javax.inject.Provider<zendesk.support.requestlist.RequestListSyncHandler>);
				public static injectActionHandlerRegistry(param0: zendesk.support.requestlist.RequestListActivity, param1: zendesk.core.ActionHandlerRegistry): void;
				public static create(param0: javax.inject.Provider<zendesk.support.requestlist.RequestListPresenter>, param1: javax.inject.Provider<zendesk.support.requestlist.RequestListView>, param2: javax.inject.Provider<zendesk.support.requestlist.RequestListModel>, param3: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>, param4: javax.inject.Provider<zendesk.support.requestlist.RequestListSyncHandler>): dagger.MembersInjector<zendesk.support.requestlist.RequestListActivity>;
				public injectMembers(param0: zendesk.support.requestlist.RequestListActivity): void;
				public static injectPresenter(param0: zendesk.support.requestlist.RequestListActivity, param1: any): void;
				public static injectView(param0: zendesk.support.requestlist.RequestListActivity, param1: any): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestListAdapter extends globalAndroid.support.v7.widget.RecyclerView.Adapter<zendesk.support.requestlist.RequestListViewHolder> {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestListAdapter>;
				public onBindViewHolder(param0: zendesk.support.requestlist.RequestListViewHolder, param1: number): void;
				public getItemId(param0: number): number;
				public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): zendesk.support.requestlist.RequestListViewHolder;
				public getItemCount(): number;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestListComponent {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestListComponent>;
				/**
				 * Constructs a new instance of the zendesk.support.requestlist.RequestListComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					inject(param0: zendesk.support.requestlist.RequestListActivity): void;
				});
				public constructor();
				public inject(param0: zendesk.support.requestlist.RequestListActivity): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestListItem {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestListItem>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestListModel {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestListModel>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestListModule {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestListModule>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestListModule_ModelFactory extends dagger.internal.Factory<zendesk.support.requestlist.RequestListModel> {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestListModule_ModelFactory>;
				public get(): zendesk.support.requestlist.RequestListModel;
				public static create(param0: javax.inject.Provider<zendesk.support.requestlist.RequestInfoDataSource.Repository>, param1: javax.inject.Provider<zendesk.core.MemoryCache>, param2: javax.inject.Provider<zendesk.support.SupportBlipsProvider>, param3: javax.inject.Provider<zendesk.support.SupportSettingsProvider>): zendesk.support.requestlist.RequestListModule_ModelFactory;
				public static model(param0: zendesk.support.requestlist.RequestInfoDataSource.Repository, param1: zendesk.core.MemoryCache, param2: zendesk.support.SupportBlipsProvider, param3: zendesk.support.SupportSettingsProvider): zendesk.support.requestlist.RequestListModel;
				public constructor(param0: javax.inject.Provider<zendesk.support.requestlist.RequestInfoDataSource.Repository>, param1: javax.inject.Provider<zendesk.core.MemoryCache>, param2: javax.inject.Provider<zendesk.support.SupportBlipsProvider>, param3: javax.inject.Provider<zendesk.support.SupportSettingsProvider>);
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestListModule_PresenterFactory extends dagger.internal.Factory<zendesk.support.requestlist.RequestListPresenter> {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestListModule_PresenterFactory>;
				public constructor(param0: javax.inject.Provider<zendesk.support.requestlist.RequestListView>, param1: javax.inject.Provider<zendesk.support.requestlist.RequestListModel>);
				public get(): zendesk.support.requestlist.RequestListPresenter;
				public static create(param0: javax.inject.Provider<zendesk.support.requestlist.RequestListView>, param1: javax.inject.Provider<zendesk.support.requestlist.RequestListModel>): zendesk.support.requestlist.RequestListModule_PresenterFactory;
				public static presenter(param0: any, param1: any): zendesk.support.requestlist.RequestListPresenter;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestListModule_RefreshHandlerFactory extends dagger.internal.Factory<zendesk.support.requestlist.RequestListSyncHandler> {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestListModule_RefreshHandlerFactory>;
				public static create(param0: javax.inject.Provider<zendesk.support.requestlist.RequestListPresenter>): zendesk.support.requestlist.RequestListModule_RefreshHandlerFactory;
				public static refreshHandler(param0: any): zendesk.support.requestlist.RequestListSyncHandler;
				public get(): zendesk.support.requestlist.RequestListSyncHandler;
				public constructor(param0: javax.inject.Provider<zendesk.support.requestlist.RequestListPresenter>);
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestListModule_RepositoryFactory extends dagger.internal.Factory<zendesk.support.requestlist.RequestInfoDataSource.Repository> {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestListModule_RepositoryFactory>;
				public get(): zendesk.support.requestlist.RequestInfoDataSource.Repository;
				public static create(param0: javax.inject.Provider<zendesk.support.requestlist.RequestInfoDataSource.LocalDataSource>, param1: javax.inject.Provider<zendesk.support.SupportUiStorage>, param2: javax.inject.Provider<zendesk.support.RequestProvider>, param3: javax.inject.Provider<java.util.concurrent.Executor>, param4: javax.inject.Provider<java.util.concurrent.ExecutorService>): zendesk.support.requestlist.RequestListModule_RepositoryFactory;
				public constructor(param0: javax.inject.Provider<zendesk.support.requestlist.RequestInfoDataSource.LocalDataSource>, param1: javax.inject.Provider<zendesk.support.SupportUiStorage>, param2: javax.inject.Provider<zendesk.support.RequestProvider>, param3: javax.inject.Provider<java.util.concurrent.Executor>, param4: javax.inject.Provider<java.util.concurrent.ExecutorService>);
				public static repository(param0: zendesk.support.requestlist.RequestInfoDataSource.LocalDataSource, param1: zendesk.support.SupportUiStorage, param2: zendesk.support.RequestProvider, param3: java.util.concurrent.Executor, param4: java.util.concurrent.ExecutorService): zendesk.support.requestlist.RequestInfoDataSource.Repository;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestListModule_ViewFactory extends dagger.internal.Factory<zendesk.support.requestlist.RequestListView> {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestListModule_ViewFactory>;
				public static create(param0: zendesk.support.requestlist.RequestListModule, param1: javax.inject.Provider<com.sebchlan.picassocompat.PicassoCompat>): zendesk.support.requestlist.RequestListModule_ViewFactory;
				public static view(param0: zendesk.support.requestlist.RequestListModule, param1: com.sebchlan.picassocompat.PicassoCompat): zendesk.support.requestlist.RequestListView;
				public constructor(param0: zendesk.support.requestlist.RequestListModule, param1: javax.inject.Provider<com.sebchlan.picassocompat.PicassoCompat>);
				public get(): zendesk.support.requestlist.RequestListView;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestListPresenter {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestListPresenter>;
				public constructor(param0: zendesk.support.requestlist.RequestListView, param1: zendesk.support.requestlist.RequestListModel);
			}
			export module RequestListPresenter {
				export class SettingsCallback {
					public static class: java.lang.Class<zendesk.support.requestlist.RequestListPresenter.SettingsCallback>;
					/**
					 * Constructs a new instance of the zendesk.support.requestlist.RequestListPresenter$SettingsCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSettings(param0: zendesk.support.SupportSdkSettings): void;
					});
					public constructor();
					public onSettings(param0: zendesk.support.SupportSdkSettings): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestListSyncHandler extends zendesk.core.ActionHandler {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestListSyncHandler>;
				public updateSettings(param0: java.util.Map<string,com.google.gson.JsonElement>): void;
				public getActionDescription(): zendesk.core.ActionDescription;
				public canHandle(param0: string): boolean;
				public getPriority(): number;
				public handle(param0: java.util.Map<string,any>, param1: globalAndroid.content.Context): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestListUiConfig extends zendesk.commonui.UiConfig {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestListUiConfig>;
				public getUiConfigs(): java.util.List<zendesk.commonui.UiConfig>;
			}
			export module RequestListUiConfig {
				export class Builder {
					public static class: java.lang.Class<zendesk.support.requestlist.RequestListUiConfig.Builder>;
					public show(param0: globalAndroid.content.Context, param1: java.util.List<zendesk.commonui.UiConfig>): void;
					public constructor();
					public intent(param0: globalAndroid.content.Context, param1: native.Array<zendesk.commonui.UiConfig>): globalAndroid.content.Intent;
					public show(param0: globalAndroid.content.Context, param1: native.Array<zendesk.commonui.UiConfig>): void;
					public intent(param0: globalAndroid.content.Context, param1: java.util.List<zendesk.commonui.UiConfig>): globalAndroid.content.Intent;
					public config(): zendesk.commonui.UiConfig;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestListView {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestListView>;
				public setBackClickListener(param0: globalAndroid.view.View.OnClickListener): void;
				public startReferrerPage(param0: string): void;
				public onSaveInstanceState(): globalAndroid.os.Parcelable;
				public startRequestActivity(param0: zendesk.support.request.RequestUiConfig.Builder): void;
				public finish(param0: string): void;
				public finish(): void;
				public setCreateRequestListener(param0: globalAndroid.view.View.OnClickListener): void;
				public setLogoClickListener(param0: boolean, param1: globalAndroid.view.View.OnClickListener): void;
				public showErrorMessage(): void;
				public constructor(param0: globalAndroid.support.v7.app.AppCompatActivity, param1: zendesk.support.requestlist.RequestListUiConfig, param2: com.sebchlan.picassocompat.PicassoCompat);
				public setItemClickListener(param0: zendesk.support.requestlist.RequestListView.OnItemClick): void;
				public onStart(): void;
				public showRequestList(param0: java.util.List<zendesk.support.requestlist.RequestListItem>): void;
				public setLoading(param0: boolean): void;
				public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
				public setSwipeRefreshListener(param0: globalAndroid.support.v4.widget.SwipeRefreshLayout.OnRefreshListener): void;
				public setRetryClickListener(param0: globalAndroid.view.View.OnClickListener): void;
				public onStop(): void;
				public announceAccessibility(param0: number): void;
			}
			export module RequestListView {
				export class OnItemClick {
					public static class: java.lang.Class<zendesk.support.requestlist.RequestListView.OnItemClick>;
					/**
					 * Constructs a new instance of the zendesk.support.requestlist.RequestListView$OnItemClick interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onClick(param0: zendesk.support.requestlist.RequestListItem): void;
					});
					public constructor();
					public onClick(param0: zendesk.support.requestlist.RequestListItem): void;
				}
				export class SceneState {
					public static class: java.lang.Class<zendesk.support.requestlist.RequestListView.SceneState>;
					public static LIST: zendesk.support.requestlist.RequestListView.SceneState;
					public static EMPTY: zendesk.support.requestlist.RequestListView.SceneState;
					public static NONE: zendesk.support.requestlist.RequestListView.SceneState;
					public static values(): native.Array<zendesk.support.requestlist.RequestListView.SceneState>;
					public static valueOf(param0: string): zendesk.support.requestlist.RequestListView.SceneState;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestListViewHolder {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestListViewHolder>;
			}
		}
	}
}

//Generics information:
//com.zendesk.collection.CountedSet:1
//com.zendesk.func.ZFunc1:2
//com.zendesk.func.ZFunc2:3
//com.zendesk.service.CancellableCompositeZendeskCallback:1
//com.zendesk.service.RetrofitZendeskCallbackAdapter:2
//com.zendesk.service.RetrofitZendeskCallbackAdapter.DefaultExtractor:1
//com.zendesk.service.RetrofitZendeskCallbackAdapter.RequestExtractor:2
//com.zendesk.service.SafeZendeskCallback:1
//com.zendesk.service.ZendeskCallback:1
//zendesk.belvedere.Callback:1
//zendesk.commonui.CacheFragment.Supplier:1
//zendesk.commonui.Cell:1
//zendesk.commonui.DefaultViewObserver:1
//zendesk.commonui.ViewListener:1
//zendesk.commonui.ViewObserver:1
//zendesk.core.PassThroughErrorZendeskCallback:1
//zendesk.core.SettingsPack:1
//zendesk.suas.Action:1
//zendesk.suas.Filter:1
//zendesk.suas.Listener:1
//zendesk.suas.Listeners.ClassKeyedListener:1
//zendesk.suas.Listeners.ClassStringKeyedListener:1
//zendesk.suas.Listeners.StateSelectorListener:1
//zendesk.suas.Listeners.StringKeyedListener:1
//zendesk.suas.Reducer:1
//zendesk.suas.StateSelector:1
//zendesk.support.AggregatedCallback:1
//zendesk.support.Streams.Use:2
//zendesk.support.ZendeskCallbackSuccess:1
//zendesk.support.request.ActionFactory.ErrorAction:1
//zendesk.support.request.ActionLoadComments.MinimumTimeCallback:1
//zendesk.support.request.ComponentInputForm.Validator:1
//zendesk.support.request.HeadlessFragment:1

