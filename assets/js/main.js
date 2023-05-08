var sendbutton = $('#footer-content-info-contactus-sendbutton');
sendbutton.click(function() {
    var inputField = $('#footer-content-info-contactus-inputfield');
    $(inputField).val('');
})

var contact_send = $('#contact-sendbutton');
contact_send.click(function () {
    var contact_fullname = $('#content-input-fullname-inputfield');
    var contact_phone = $('#content-input-phone-inputfield');
    var contact_details = $('#content-input-details-inputfield');

    $(contact_fullname).val('');
    $(contact_phone).val('');
    $(contact_details).val('');
})