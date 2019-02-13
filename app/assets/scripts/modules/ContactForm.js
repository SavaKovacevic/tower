import $ from 'jquery';

class ContactForm {
    constructor() {
        $(document).on('submit', '#contact-form', function (e) {
            e.preventDefault();

            $.ajax({
                type: 'post',
                url: 'contact.php',
                data: $('#contact-form').serialize(),
                success: function () {
                    $('#contact-form').hide();
                    $('.success').show();
                },
                error: function () {
                    alert('Došlo je do greške, molimo pokušajte ponovo.');
                }
            });
        });
    }

}

export default ContactForm;

