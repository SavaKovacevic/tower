import $ from 'jquery';

class TestResults {
    constructor() {
        $(document).on('submit', '#test-results', function (e) {
            e.preventDefault();

            $.ajax({
                type: 'post',
                url: 'test.php',
                data: $('#test-results').serialize(),
                success: function (data, response) {
                    
                },
                error: function () {
                    alert('Došlo je do greške, molimo pokušajte ponovo.');
                }
            });
        });
    }

}

export default TestResults;

