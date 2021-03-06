/// <reference path="../typings/wearable-support-2.4.0.d.ts" />
/// <reference path="../node_modules/tns-platform-declarations/android-25.d.ts" />
export declare function showConfirmationActivity(message: string, type: ConfirmationActivityType): Promise<{}>;
export declare enum ConfirmationActivityType {
    'SUCCESS' = "SUCCESS",
    'FAILURE' = "FAILURE",
    'OPEN_ON_PHONE' = "OPEN_ON_PHONE"
}
