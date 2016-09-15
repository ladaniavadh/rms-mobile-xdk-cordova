cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "file": "plugins/cordova-save-image-gallery/www/saveImageGallery.js",
        "id": "cordova-save-image-gallery.saveImageGallery",
        "clobbers": [
            "cordova.saveImageGallery"
        ]
    },
    {
        "file": "plugins/cordova-plugin-x-toast/www/Toast.js",
        "id": "cordova-plugin-x-toast.Toast",
        "clobbers": [
            "window.plugins.toast"
        ]
    },
    {
        "file": "plugins/cordova-plugin-x-toast/test/tests.js",
        "id": "cordova-plugin-x-toast.tests"
    },
    {
        "file": "plugins/molpay-mobile-xdk-cordova/molpay.js",
        "id": "molpay-mobile-xdk-cordova.MOLPay",
        "clobbers": [
            "molpay"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.1",
    "cordova-plugin-inappbrowser": "1.5.0",
    "cordova-plugin-privacyscreen": "0.3.1",
    "cordova-save-image-gallery": "0.0.26",
    "cordova-plugin-x-toast": "2.5.2",
    "molpay-mobile-xdk-cordova": "3.0.0"
};
// BOTTOM OF METADATA
});