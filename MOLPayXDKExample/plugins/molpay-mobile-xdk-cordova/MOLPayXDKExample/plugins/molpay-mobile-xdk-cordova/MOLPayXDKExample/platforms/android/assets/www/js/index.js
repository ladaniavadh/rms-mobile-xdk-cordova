var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {

        // // MOLPay payment details
        // var paymentDetails = {
        //     // ------- SDK required data ----------
        //     'mp_amount' : '',
        //     'mp_username' : '',
        //     'mp_password' : '',
        //     'mp_merchant_ID' : '',
        //     'mp_app_name' : '',   
        //     'mp_order_ID' : '', 
        //     'mp_currency' : 'MYR',
        //     'mp_country' : 'MY',  
        //     'mp_verification_key' : '',  
        //     'mp_channel' : '', 
        //     'mp_bill_description' : 'Bill description',
        //     'mp_bill_name' : 'Bill name',
        //     'mp_bill_email' : 'email@email.com',
        //     'mp_bill_mobile' : '123456',
        //     'mp_channel_editing' : false,
        //     'mp_editing_enabled' : false,
        //     'mp_transaction_id' : '',
        //     'mp_request_type' : '' // Use this as the result id, do not use 'Receipt'.
        // };

        // MOLPay payment details
        var paymentDetails = {
            // ------- SDK required data ----------
            'mp_amount' : '1.10',
            'mp_username' : 'molpayapi',
            'mp_password' : '*M0Lp4y4p1!*',
            'mp_merchant_ID' : 'molpaymerchant',
            'mp_app_name' : 'wilwe_makan2',   
            'mp_order_ID' : 'XP014', 
            'mp_currency' : 'MYR',
            'mp_country' : 'MY',  
            'mp_verification_key' : '501c4f508cf1c3f486f4f5c820591f41',  
            'mp_channel' : 'multi', 
            'mp_bill_description' : 'Cordova payment test',
            'mp_bill_name' : 'MOLPay Developer',
            'mp_bill_email' : 'clement@molpay.com',
            'mp_bill_mobile' : '123456',
            'mp_channel_editing' : false,
            'mp_editing_enabled' : false,
            'mp_transaction_id' : '', // Required if mp_request_type is 'Receipt'
            'mp_request_type' : '' // 'Receipt' for Cash channels
        };

        var molpayCallback = function (transactionResult) {
            console.log('molpayCallback transactionResult = '+transactionResult);
            alert('molpayCallback transactionResult = '+transactionResult);
            // alert(transactionResult);
            // if (transactionResult) {
            //      console.log(transactionResult);
            //  } 
        };

        window.molpay.startMolpay(paymentDetails, molpayCallback);
        // window.molpay.transactionRequest(paymentDetails, molpayCallback);
        // window.molpay.closeMolpay();


    }

};

app.initialize();