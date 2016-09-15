cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "file": "plugins/cordova-save-image-gallery/www/saveImageGallery.js",
        "id": "cordova-save-image-gallery.saveImageGallery",
        "pluginId": "cordova-save-image-gallery",
        "clobbers": [
            "cordova.saveImageGallery"
        ]
    },
    {
        "file": "plugins/cordova-plugin-x-toast/www/Toast.js",
        "id": "cordova-plugin-x-toast.Toast",
        "pluginId": "cordova-plugin-x-toast",
        "clobbers": [
            "window.plugins.toast"
        ]
    },
    {
        "file": "plugins/cordova-plugin-x-toast/test/tests.js",
        "id": "cordova-plugin-x-toast.tests",
        "pluginId": "cordova-plugin-x-toast"
    },
    {
        "file": "plugins/molpay-mobile-xdk-cordova/molpay.js",
        "id": "molpay-mobile-xdk-cordova.MOLPay",
        "pluginId": "molpay-mobile-xdk-cordova",
        "clobbers": [
            "molpay"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{}
// BOTTOM OF METADATA
});