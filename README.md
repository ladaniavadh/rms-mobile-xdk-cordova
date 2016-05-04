<!--
# license: Copyright © 2011-2016 MOLPay Sdn Bhd. All Rights Reserved. 
-->

# molpay-mobile-xdk-cordova

This is the complete and functional MOLPay Cordova payment module that is ready to be implemented into Cordova project through Cordova plugin installation procedures. An example application project (MOLPayXDKExample) is provided for MOLPayXDK Cordova integration reference.

This plugin provides an integrated MOLPay payment module that contains a wrapper 'molpay.js' and an upgradable core as the 'molpay-mobile-xdk-www' folder, which the latter can be separately downloaded at https://github.com/MOLPay/molpay-mobile-xdk-www and update the local version.

## Recommended configurations

    - Cordova SDK Version: 6.1.0 ++

    - Node.js Version: 5.3.0 ++

    - Minimum Android target version: Android 4.1

    - Minimum iOS target version: 7.0

## Installation

    Step 1 - cordova plugin add molpay-mobile-xdk-cordova

    Step 2 - Add the following meta tags to the app index.html
    <meta http-equiv="Content-Security-Policy" content="default-src * data: gap: 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; media-src *"> *This allow cross-domain communication between MOLPay payment module and payment servers.*
    <meta name="format-detection" content="telephone=no">

    Step 3 - Add the MOLPay div to your payment UI
    <div id="molpay" class="molpay"/>

    Step 4 - Add the result callback function
    var molpayCallback = function (transactionResult) {
            // transactionResult return in json;
    };

## Prepare the Payment detail object

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        var paymentDetails = {
            'mp_amount' : '',
            'mp_username' : '',
            'mp_password' : '',
            'mp_merchant_ID' : '',
            'mp_app_name' : '',   
            'mp_order_ID' : '', 
            'mp_currency' : 'MYR',
            'mp_country' : 'MY',  
            'mp_verification_key' : '',  
            'mp_channel' : '', 
            'mp_bill_description' : '',
            'mp_bill_name' : '',
            'mp_bill_email' : '',
            'mp_bill_mobile' : '',
            'mp_channel_editing' : false,
            'mp_editing_enabled' : false,
            'mp_transaction_id' : '',
            'mp_request_type' : ''
        };
    }

## Start the payment module UI

    window.molpay.startMolpay(paymentDetails, molpayCallback);

## Close the payment module UI

    window.molpay.closeMolpay();

    * Notes: closeMolpay does not close remove the UI, the host application must implement it's own mechanism to close the payment module UI, i.e. <button onclick="window.molpay.closeMolpay()">Close</button>. The close event will also return a final result.

## Transaction status request service (No UI & auto close) (optional)

    window.molpay.transactionRequest(paymentDetails, molpayCallback);

## Support

Submit issue to this repository or email to our support@molpay.com

Merchant Technical Support / Customer Care : support@molpay.com<br>
Sales/Reseller Enquiry : sales@molpay.com<br>
Marketing Campaign : marketing@molpay.com<br>
Channel/Partner Enquiry : channel@molpay.com<br>
Media Contact : media@molpay.com<br>
R&D and Tech-related Suggestion : technical@molpay.com<br>
Abuse Reporting : abuse@molpay.com
