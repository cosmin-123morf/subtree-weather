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



/**
 * 
 * @export
 * @interface Sys
 */
export interface Sys {
    /**
     * Internal parameter
     * @type {number}
     * @memberof Sys
     */
    type?: number;
    /**
     * Internal parameter
     * @type {number}
     * @memberof Sys
     */
    id?: number;
    /**
     * Internal parameter
     * @type {number}
     * @memberof Sys
     */
    message?: number;
    /**
     * Country code (GB, JP etc.)
     * @type {string}
     * @memberof Sys
     */
    country?: string;
    /**
     * Sunrise time, unix, UTC
     * @type {number}
     * @memberof Sys
     */
    sunrise?: number;
    /**
     * Sunset time, unix, UTC
     * @type {number}
     * @memberof Sys
     */
    sunset?: number;
}

