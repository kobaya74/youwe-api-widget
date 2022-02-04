define([
    'jquery',
    'jquery/ui',
    'mage/translate'
], function ($) {
    'use strict';

    return function (config, element) {
        const apiUrl = config.ApiUrl;
        const emailText = $.mage.__('Send me an email');

        $(document).ready(function () {
            $('#fetch-users').on('click', function () {
                $.ajax({
                    url: apiUrl,
                    method: 'GET',
                    dataType: 'json'
                }).done(
                    function (result) {
                        result['data'].forEach(function (element, index) {
                            let userImg = `<img class="avatar" src="${element.avatar}"/>`;
                            let userName = `<div class="name"> ${element.first_name} ${element.last_name}</div>`;
                            let userMail = `<a href="mailto:${element.email}" class="mail">${emailText}</div>`;
                            $('.users').append('<li class="user">' + userImg + userName + userMail + '</li>');
                        });
                    }
                );
            })
        });
    };

});