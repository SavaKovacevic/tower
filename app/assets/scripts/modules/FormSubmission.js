import $ from 'jquery';

class FormSubmission {
    constructor() {
       $(document).on('submit', '#enroll-form', function(e) {
           e.preventDefault();

           $.ajax({
               type: 'post',
               url: 'enrollForm.php',
               data: $('#enroll-form').serialize(),
               success: function () {
                   $('#enroll-form').hide();
                   $('.success').show();
               },
               error: function () {
                   alert('Došlo je do greške, molimo pokušajte ponovo.');
               }
           });
       });
    }

}

export default FormSubmission;

