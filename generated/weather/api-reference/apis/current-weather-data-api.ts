/* tslint:disable */
/* eslint-disable */
/**
 * OpenWeatherMap API
 * Get the current weather, daily forecast for 16 days, and a three-hour-interval forecast for 5 days for your city. Helpful stats, graphics, and this day in history charts are available for your reference. Interactive maps show precipitation, clouds, pressure, wind around your location stations. Data is available in JSON, XML, or HTML format. **Note**: This sample Swagger file covers the `current` endpoint only from the OpenWeatherMap API. <br/><br/> **Note**: All parameters are optional, but you must select at least one parameter. Calling the API by city ID (using the `id` parameter) will provide the most precise location results.
 *
 * The version of the OpenAPI document: 2.5
 * Contact: some_email@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { Model200 } from '../models';
/**
 * CurrentWeatherDataApi - axios parameter creator
 * @export
 */
export const CurrentWeatherDataApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Access current weather data for any location on Earth including over 200,000 cities! Current weather is frequently updated based on global models and data from more than 40,000 weather stations.
         * @summary Call current weather data for one location
         * @param {string} [q] **City name**. *Example: London*. You can call by city name, or by city name and country code. The API responds with a list of results that match a searching word. For the query value, type the city name and optionally the country code divided by a comma; use ISO 3166 country codes.
         * @param {string} [id] **City ID**. *Example: &#x60;2172797&#x60;*. You can call by city ID. The API responds with the exact result. The List of city IDs can be downloaded [here](http://bulk.openweathermap.org/sample/). You can include multiple cities in this parameter &amp;mdash; just separate them by commas. The limit of locations is 20. *Note: A single ID counts as a one API call. So, if you have city IDs, it\&#39;s treated as 3 API calls.*
         * @param {string} [lat] **Latitude**. *Example: 35*. The latitude coordinate of the location of your interest. Must use with &#x60;lon&#x60;.
         * @param {string} [lon] **Longitude**. *Example: 139*. Longitude coordinate of the location of your interest. Must use with &#x60;lat&#x60;.
         * @param {string} [zip] **Zip code**. Search by zip code. *Example: 95050,us*. Please note that if the country is not specified, the search uses USA as a default.
         * @param {'standard' | 'metric' | 'imperial'} [units] **Units**. *Example: imperial*. Possible values: &#x60;standard&#x60;, &#x60;metric&#x60;, and &#x60;imperial&#x60;. When you do not use the &#x60;units&#x60; parameter, the format is &#x60;standard&#x60; by default.
         * @param {'ar' | 'bg' | 'ca' | 'cz' | 'de' | 'el' | 'en' | 'fa' | 'fi' | 'fr' | 'gl' | 'hr' | 'hu' | 'it' | 'ja' | 'kr' | 'la' | 'lt' | 'mk' | 'nl' | 'pl' | 'pt' | 'ro' | 'ru' | 'se' | 'sk' | 'sl' | 'es' | 'tr' | 'ua' | 'vi' | 'zh_cn' | 'zh_tw'} [lang] **Language**. *Example: en*. You can use lang parameter to get the output in your language. We support the following languages that you can use with the corresponded lang values: Arabic - &#x60;ar&#x60;, Bulgarian - &#x60;bg&#x60;, Catalan - &#x60;ca&#x60;, Czech - &#x60;cz&#x60;, German - &#x60;de&#x60;, Greek - &#x60;el&#x60;, English - &#x60;en&#x60;, Persian (Farsi) - &#x60;fa&#x60;, Finnish - &#x60;fi&#x60;, French - &#x60;fr&#x60;, Galician - &#x60;gl&#x60;, Croatian - &#x60;hr&#x60;, Hungarian - &#x60;hu&#x60;, Italian - &#x60;it&#x60;, Japanese - &#x60;ja&#x60;, Korean - &#x60;kr&#x60;, Latvian - &#x60;la&#x60;, Lithuanian - &#x60;lt&#x60;, Macedonian - &#x60;mk&#x60;, Dutch - &#x60;nl&#x60;, Polish - &#x60;pl&#x60;, Portuguese - &#x60;pt&#x60;, Romanian - &#x60;ro&#x60;, Russian - &#x60;ru&#x60;, Swedish - &#x60;se&#x60;, Slovak - &#x60;sk&#x60;, Slovenian - &#x60;sl&#x60;, Spanish - &#x60;es&#x60;, Turkish - &#x60;tr&#x60;, Ukrainian - &#x60;ua&#x60;, Vietnamese - &#x60;vi&#x60;, Chinese Simplified - &#x60;zh_cn&#x60;, Chinese Traditional - &#x60;zh_tw&#x60;.
         * @param {'json' | 'xml' | 'html'} [mode] **Mode**. *Example: html*. Determines the format of the response. Possible values are &#x60;json&#x60;, &#x60;xml&#x60;, and &#x60;html&#x60;. If the mode parameter is empty, the format is &#x60;json&#x60; by default.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        currentWeatherData: async (q?: string, id?: string, lat?: string, lon?: string, zip?: string, units?: 'standard' | 'metric' | 'imperial', lang?: 'ar' | 'bg' | 'ca' | 'cz' | 'de' | 'el' | 'en' | 'fa' | 'fi' | 'fr' | 'gl' | 'hr' | 'hu' | 'it' | 'ja' | 'kr' | 'la' | 'lt' | 'mk' | 'nl' | 'pl' | 'pt' | 'ro' | 'ru' | 'se' | 'sk' | 'sl' | 'es' | 'tr' | 'ua' | 'vi' | 'zh_cn' | 'zh_tw', mode?: 'json' | 'xml' | 'html', options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/weather`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication app_id required
            await setApiKeyToObject(localVarQueryParameter, "appid", configuration)

            if (q !== undefined) {
                localVarQueryParameter['q'] = q;
            }

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
            }

            if (lat !== undefined) {
                localVarQueryParameter['lat'] = lat;
            }

            if (lon !== undefined) {
                localVarQueryParameter['lon'] = lon;
            }

            if (zip !== undefined) {
                localVarQueryParameter['zip'] = zip;
            }

            if (units !== undefined) {
                localVarQueryParameter['units'] = units;
            }

            if (lang !== undefined) {
                localVarQueryParameter['lang'] = lang;
            }

            if (mode !== undefined) {
                localVarQueryParameter['mode'] = mode;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CurrentWeatherDataApi - functional programming interface
 * @export
 */
export const CurrentWeatherDataApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CurrentWeatherDataApiAxiosParamCreator(configuration)
    return {
        /**
         * Access current weather data for any location on Earth including over 200,000 cities! Current weather is frequently updated based on global models and data from more than 40,000 weather stations.
         * @summary Call current weather data for one location
         * @param {string} [q] **City name**. *Example: London*. You can call by city name, or by city name and country code. The API responds with a list of results that match a searching word. For the query value, type the city name and optionally the country code divided by a comma; use ISO 3166 country codes.
         * @param {string} [id] **City ID**. *Example: &#x60;2172797&#x60;*. You can call by city ID. The API responds with the exact result. The List of city IDs can be downloaded [here](http://bulk.openweathermap.org/sample/). You can include multiple cities in this parameter &amp;mdash; just separate them by commas. The limit of locations is 20. *Note: A single ID counts as a one API call. So, if you have city IDs, it\&#39;s treated as 3 API calls.*
         * @param {string} [lat] **Latitude**. *Example: 35*. The latitude coordinate of the location of your interest. Must use with &#x60;lon&#x60;.
         * @param {string} [lon] **Longitude**. *Example: 139*. Longitude coordinate of the location of your interest. Must use with &#x60;lat&#x60;.
         * @param {string} [zip] **Zip code**. Search by zip code. *Example: 95050,us*. Please note that if the country is not specified, the search uses USA as a default.
         * @param {'standard' | 'metric' | 'imperial'} [units] **Units**. *Example: imperial*. Possible values: &#x60;standard&#x60;, &#x60;metric&#x60;, and &#x60;imperial&#x60;. When you do not use the &#x60;units&#x60; parameter, the format is &#x60;standard&#x60; by default.
         * @param {'ar' | 'bg' | 'ca' | 'cz' | 'de' | 'el' | 'en' | 'fa' | 'fi' | 'fr' | 'gl' | 'hr' | 'hu' | 'it' | 'ja' | 'kr' | 'la' | 'lt' | 'mk' | 'nl' | 'pl' | 'pt' | 'ro' | 'ru' | 'se' | 'sk' | 'sl' | 'es' | 'tr' | 'ua' | 'vi' | 'zh_cn' | 'zh_tw'} [lang] **Language**. *Example: en*. You can use lang parameter to get the output in your language. We support the following languages that you can use with the corresponded lang values: Arabic - &#x60;ar&#x60;, Bulgarian - &#x60;bg&#x60;, Catalan - &#x60;ca&#x60;, Czech - &#x60;cz&#x60;, German - &#x60;de&#x60;, Greek - &#x60;el&#x60;, English - &#x60;en&#x60;, Persian (Farsi) - &#x60;fa&#x60;, Finnish - &#x60;fi&#x60;, French - &#x60;fr&#x60;, Galician - &#x60;gl&#x60;, Croatian - &#x60;hr&#x60;, Hungarian - &#x60;hu&#x60;, Italian - &#x60;it&#x60;, Japanese - &#x60;ja&#x60;, Korean - &#x60;kr&#x60;, Latvian - &#x60;la&#x60;, Lithuanian - &#x60;lt&#x60;, Macedonian - &#x60;mk&#x60;, Dutch - &#x60;nl&#x60;, Polish - &#x60;pl&#x60;, Portuguese - &#x60;pt&#x60;, Romanian - &#x60;ro&#x60;, Russian - &#x60;ru&#x60;, Swedish - &#x60;se&#x60;, Slovak - &#x60;sk&#x60;, Slovenian - &#x60;sl&#x60;, Spanish - &#x60;es&#x60;, Turkish - &#x60;tr&#x60;, Ukrainian - &#x60;ua&#x60;, Vietnamese - &#x60;vi&#x60;, Chinese Simplified - &#x60;zh_cn&#x60;, Chinese Traditional - &#x60;zh_tw&#x60;.
         * @param {'json' | 'xml' | 'html'} [mode] **Mode**. *Example: html*. Determines the format of the response. Possible values are &#x60;json&#x60;, &#x60;xml&#x60;, and &#x60;html&#x60;. If the mode parameter is empty, the format is &#x60;json&#x60; by default.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async currentWeatherData(q?: string, id?: string, lat?: string, lon?: string, zip?: string, units?: 'standard' | 'metric' | 'imperial', lang?: 'ar' | 'bg' | 'ca' | 'cz' | 'de' | 'el' | 'en' | 'fa' | 'fi' | 'fr' | 'gl' | 'hr' | 'hu' | 'it' | 'ja' | 'kr' | 'la' | 'lt' | 'mk' | 'nl' | 'pl' | 'pt' | 'ro' | 'ru' | 'se' | 'sk' | 'sl' | 'es' | 'tr' | 'ua' | 'vi' | 'zh_cn' | 'zh_tw', mode?: 'json' | 'xml' | 'html', options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Model200>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.currentWeatherData(q, id, lat, lon, zip, units, lang, mode, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CurrentWeatherDataApi - factory interface
 * @export
 */
export const CurrentWeatherDataApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CurrentWeatherDataApiFp(configuration)
    return {
        /**
         * Access current weather data for any location on Earth including over 200,000 cities! Current weather is frequently updated based on global models and data from more than 40,000 weather stations.
         * @summary Call current weather data for one location
         * @param {string} [q] **City name**. *Example: London*. You can call by city name, or by city name and country code. The API responds with a list of results that match a searching word. For the query value, type the city name and optionally the country code divided by a comma; use ISO 3166 country codes.
         * @param {string} [id] **City ID**. *Example: &#x60;2172797&#x60;*. You can call by city ID. The API responds with the exact result. The List of city IDs can be downloaded [here](http://bulk.openweathermap.org/sample/). You can include multiple cities in this parameter &amp;mdash; just separate them by commas. The limit of locations is 20. *Note: A single ID counts as a one API call. So, if you have city IDs, it\&#39;s treated as 3 API calls.*
         * @param {string} [lat] **Latitude**. *Example: 35*. The latitude coordinate of the location of your interest. Must use with &#x60;lon&#x60;.
         * @param {string} [lon] **Longitude**. *Example: 139*. Longitude coordinate of the location of your interest. Must use with &#x60;lat&#x60;.
         * @param {string} [zip] **Zip code**. Search by zip code. *Example: 95050,us*. Please note that if the country is not specified, the search uses USA as a default.
         * @param {'standard' | 'metric' | 'imperial'} [units] **Units**. *Example: imperial*. Possible values: &#x60;standard&#x60;, &#x60;metric&#x60;, and &#x60;imperial&#x60;. When you do not use the &#x60;units&#x60; parameter, the format is &#x60;standard&#x60; by default.
         * @param {'ar' | 'bg' | 'ca' | 'cz' | 'de' | 'el' | 'en' | 'fa' | 'fi' | 'fr' | 'gl' | 'hr' | 'hu' | 'it' | 'ja' | 'kr' | 'la' | 'lt' | 'mk' | 'nl' | 'pl' | 'pt' | 'ro' | 'ru' | 'se' | 'sk' | 'sl' | 'es' | 'tr' | 'ua' | 'vi' | 'zh_cn' | 'zh_tw'} [lang] **Language**. *Example: en*. You can use lang parameter to get the output in your language. We support the following languages that you can use with the corresponded lang values: Arabic - &#x60;ar&#x60;, Bulgarian - &#x60;bg&#x60;, Catalan - &#x60;ca&#x60;, Czech - &#x60;cz&#x60;, German - &#x60;de&#x60;, Greek - &#x60;el&#x60;, English - &#x60;en&#x60;, Persian (Farsi) - &#x60;fa&#x60;, Finnish - &#x60;fi&#x60;, French - &#x60;fr&#x60;, Galician - &#x60;gl&#x60;, Croatian - &#x60;hr&#x60;, Hungarian - &#x60;hu&#x60;, Italian - &#x60;it&#x60;, Japanese - &#x60;ja&#x60;, Korean - &#x60;kr&#x60;, Latvian - &#x60;la&#x60;, Lithuanian - &#x60;lt&#x60;, Macedonian - &#x60;mk&#x60;, Dutch - &#x60;nl&#x60;, Polish - &#x60;pl&#x60;, Portuguese - &#x60;pt&#x60;, Romanian - &#x60;ro&#x60;, Russian - &#x60;ru&#x60;, Swedish - &#x60;se&#x60;, Slovak - &#x60;sk&#x60;, Slovenian - &#x60;sl&#x60;, Spanish - &#x60;es&#x60;, Turkish - &#x60;tr&#x60;, Ukrainian - &#x60;ua&#x60;, Vietnamese - &#x60;vi&#x60;, Chinese Simplified - &#x60;zh_cn&#x60;, Chinese Traditional - &#x60;zh_tw&#x60;.
         * @param {'json' | 'xml' | 'html'} [mode] **Mode**. *Example: html*. Determines the format of the response. Possible values are &#x60;json&#x60;, &#x60;xml&#x60;, and &#x60;html&#x60;. If the mode parameter is empty, the format is &#x60;json&#x60; by default.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        currentWeatherData(q?: string, id?: string, lat?: string, lon?: string, zip?: string, units?: 'standard' | 'metric' | 'imperial', lang?: 'ar' | 'bg' | 'ca' | 'cz' | 'de' | 'el' | 'en' | 'fa' | 'fi' | 'fr' | 'gl' | 'hr' | 'hu' | 'it' | 'ja' | 'kr' | 'la' | 'lt' | 'mk' | 'nl' | 'pl' | 'pt' | 'ro' | 'ru' | 'se' | 'sk' | 'sl' | 'es' | 'tr' | 'ua' | 'vi' | 'zh_cn' | 'zh_tw', mode?: 'json' | 'xml' | 'html', options?: any): AxiosPromise<Model200> {
            return localVarFp.currentWeatherData(q, id, lat, lon, zip, units, lang, mode, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CurrentWeatherDataApi - object-oriented interface
 * @export
 * @class CurrentWeatherDataApi
 * @extends {BaseAPI}
 */
export class CurrentWeatherDataApi extends BaseAPI {
    /**
     * Access current weather data for any location on Earth including over 200,000 cities! Current weather is frequently updated based on global models and data from more than 40,000 weather stations.
     * @summary Call current weather data for one location
     * @param {string} [q] **City name**. *Example: London*. You can call by city name, or by city name and country code. The API responds with a list of results that match a searching word. For the query value, type the city name and optionally the country code divided by a comma; use ISO 3166 country codes.
     * @param {string} [id] **City ID**. *Example: &#x60;2172797&#x60;*. You can call by city ID. The API responds with the exact result. The List of city IDs can be downloaded [here](http://bulk.openweathermap.org/sample/). You can include multiple cities in this parameter &amp;mdash; just separate them by commas. The limit of locations is 20. *Note: A single ID counts as a one API call. So, if you have city IDs, it\&#39;s treated as 3 API calls.*
     * @param {string} [lat] **Latitude**. *Example: 35*. The latitude coordinate of the location of your interest. Must use with &#x60;lon&#x60;.
     * @param {string} [lon] **Longitude**. *Example: 139*. Longitude coordinate of the location of your interest. Must use with &#x60;lat&#x60;.
     * @param {string} [zip] **Zip code**. Search by zip code. *Example: 95050,us*. Please note that if the country is not specified, the search uses USA as a default.
     * @param {'standard' | 'metric' | 'imperial'} [units] **Units**. *Example: imperial*. Possible values: &#x60;standard&#x60;, &#x60;metric&#x60;, and &#x60;imperial&#x60;. When you do not use the &#x60;units&#x60; parameter, the format is &#x60;standard&#x60; by default.
     * @param {'ar' | 'bg' | 'ca' | 'cz' | 'de' | 'el' | 'en' | 'fa' | 'fi' | 'fr' | 'gl' | 'hr' | 'hu' | 'it' | 'ja' | 'kr' | 'la' | 'lt' | 'mk' | 'nl' | 'pl' | 'pt' | 'ro' | 'ru' | 'se' | 'sk' | 'sl' | 'es' | 'tr' | 'ua' | 'vi' | 'zh_cn' | 'zh_tw'} [lang] **Language**. *Example: en*. You can use lang parameter to get the output in your language. We support the following languages that you can use with the corresponded lang values: Arabic - &#x60;ar&#x60;, Bulgarian - &#x60;bg&#x60;, Catalan - &#x60;ca&#x60;, Czech - &#x60;cz&#x60;, German - &#x60;de&#x60;, Greek - &#x60;el&#x60;, English - &#x60;en&#x60;, Persian (Farsi) - &#x60;fa&#x60;, Finnish - &#x60;fi&#x60;, French - &#x60;fr&#x60;, Galician - &#x60;gl&#x60;, Croatian - &#x60;hr&#x60;, Hungarian - &#x60;hu&#x60;, Italian - &#x60;it&#x60;, Japanese - &#x60;ja&#x60;, Korean - &#x60;kr&#x60;, Latvian - &#x60;la&#x60;, Lithuanian - &#x60;lt&#x60;, Macedonian - &#x60;mk&#x60;, Dutch - &#x60;nl&#x60;, Polish - &#x60;pl&#x60;, Portuguese - &#x60;pt&#x60;, Romanian - &#x60;ro&#x60;, Russian - &#x60;ru&#x60;, Swedish - &#x60;se&#x60;, Slovak - &#x60;sk&#x60;, Slovenian - &#x60;sl&#x60;, Spanish - &#x60;es&#x60;, Turkish - &#x60;tr&#x60;, Ukrainian - &#x60;ua&#x60;, Vietnamese - &#x60;vi&#x60;, Chinese Simplified - &#x60;zh_cn&#x60;, Chinese Traditional - &#x60;zh_tw&#x60;.
     * @param {'json' | 'xml' | 'html'} [mode] **Mode**. *Example: html*. Determines the format of the response. Possible values are &#x60;json&#x60;, &#x60;xml&#x60;, and &#x60;html&#x60;. If the mode parameter is empty, the format is &#x60;json&#x60; by default.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CurrentWeatherDataApi
     */
    public currentWeatherData(q?: string, id?: string, lat?: string, lon?: string, zip?: string, units?: 'standard' | 'metric' | 'imperial', lang?: 'ar' | 'bg' | 'ca' | 'cz' | 'de' | 'el' | 'en' | 'fa' | 'fi' | 'fr' | 'gl' | 'hr' | 'hu' | 'it' | 'ja' | 'kr' | 'la' | 'lt' | 'mk' | 'nl' | 'pl' | 'pt' | 'ro' | 'ru' | 'se' | 'sk' | 'sl' | 'es' | 'tr' | 'ua' | 'vi' | 'zh_cn' | 'zh_tw', mode?: 'json' | 'xml' | 'html', options?: any) {
        return CurrentWeatherDataApiFp(this.configuration).currentWeatherData(q, id, lat, lon, zip, units, lang, mode, options).then((request) => request(this.axios, this.basePath));
    }
}