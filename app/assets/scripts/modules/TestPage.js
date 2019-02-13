import $ from 'jquery';

class TestPage {
	constructor() {
		$('input[name="1"]').on('change', function () {
    $("#result").text($(this).val());
});

$('input[name="1"]').on('change', function () {
    if ($(this).val() == "When are you free?") {
        $('input[id="res"]').val('1');
    } else {
        $('input[id="res"]').val('0');
    }
});

// Drugo pitanje
$('input[name="2"]').on('change', function () {
    $("#result2").text($(this).val());
});

$('input[name="2"]').on('change', function () {
    if ($(this).val() == "How long for?") {
        $('input[id="res2"]').val('1');
    } else {
        $('input[id="res2"]').val('0');
    }
});

// Trece pitanje
$('input[name="3"]').on('change', function () {
    $("#result3").text($(this).val());
});

$('input[name="3"]').on('change', function () {
    if ($(this).val() == "In the evenings") {
        $('input[id="res3"]').val('1');
    } else {
        $('input[id="res3"]').val('0');
    }
});

// Cetvrto pitanje
$('input[name="4"]').on('change', function () {
    $("#result4").text($(this).val());
});

$('input[name="4"]').on('change', function () {
    if ($(this).val() == "Have you got anything else?") {
        $('input[id="res4"]').val('1');
    } else {
        $('input[id="res4"]').val('0');
    }
});

// Peto pitanje
$('input[name="5"]').on('change', function () {
    $("#result5").text($(this).val());
});

$('input[name="5"]').on('change', function () {
    if ($(this).val() == "Tom isn't here yet.") {
        $('input[id="res5"]').val('1');
    } else {
        $('input[id="res5"]').val('0');
    }
});

// Šesto pitanje
$('input[name="6"]').on('change', function () {
    $("#result6").text($(this).val());
});

$('input[name="6"]').on('change', function () {
    if ($(this).val() == "falling") {
        $('input[id="res6"]').val('1');
    } else {
        $('input[id="res6"]').val('0');
    }
});

// Sedmo pitanje
$('input[name="7"]').on('change', function () {
    $("#result7").text($(this).val());
});

$('input[name="7"]').on('change', function () {
    if ($(this).val() == "must") {
        $('input[id="res7"]').val('1');
    } else {
        $('input[id="res7"]').val('0');
    }
});

// Osmo pitanje
$('input[name="8"]').on('change', function () {
    $("#result8").text($(this).val());
});

$('input[name="8"]').on('change', function () {
    if ($(this).val() == "lose") {
        $('input[id="res8"]').val('1');
    } else {
        $('input[id="res8"]').val('0');
    }
});

// Deveto pitanje
$('input[name="9"]').on('change', function () {
    $("#result9").text($(this).val());
});

$('input[name="9"]').on('change', function () {
    if ($(this).val() == "information") {
        $('input[id="res9"]').val('1');
    } else {
        $('input[id="res9"]').val('0');
    }
});

// Deseto pitanje
$('input[name="10"]').on('change', function () {
    $("#result10").text($(this).val());
});

$('input[name="10"]').on('change', function () {
    if ($(this).val() == "way") {
        $('input[id="res10"]').val('1');
    } else {
        $('input[id="res10"]').val('0');
    }
});

// Jedanaesto pitanje
$('input[name="11"]').on('change', function () {
    $("#result11").text($(this).val());
});

$('input[name="11"]').on('change', function () {
    if ($(this).val() == "making") {
        $('input[id="res11"]').val('1');
    } else {
        $('input[id="res11"]').val('0');
    }
});

// Dvanaesto pitanje
$('input[name="12"]').on('change', function () {
    $("#result12").text($(this).val());
});

$('input[name="12"]').on('change', function () {
    if ($(this).val() == "attitude") {
        $('input[id="res12"]').val('1');
    } else {
        $('input[id="res12"]').val('0');
    }
});

// Trinaesto pitanje
$('input[name="13"]').on('change', function () {
    $("#result13").text($(this).val());
});

$('input[name="13"]').on('change', function () {
    if ($(this).val() == "has had") {
        $('input[id="res13"]').val('1');
    } else {
        $('input[id="res13"]').val('0');
    }
});

// Četrnaesto pitanje
$('input[name="14"]').on('change', function () {
    $("#result14").text($(this).val());
});

$('input[name="14"]').on('change', function () {
    if ($(this).val() == "between") {
        $('input[id="res14"]').val('1');
    } else {
        $('input[id="res14"]').val('0');
    }
});

// Petnaesto pitanje
$('input[name="15"]').on('change', function () {
    $("#result15").text($(this).val());
});

$('input[name="15"]').on('change', function () {
    if ($(this).val() == "as usual.") {
        $('input[id="res15"]').val('1');
    } else {
        $('input[id="res15"]').val('0');
    }
});

// Šesnesto pitanje
$('input[name="16"]').on('change', function () {
    $("#result16").text($(this).val());
});

$('input[name="16"]').on('change', function () {
    if ($(this).val() == "Provided") {
        $('input[id="res16"]').val('1');
    } else {
        $('input[id="res16"]').val('0');
    }
});

// Sedamnaesto pitanje
$('input[name="17"]').on('change', function () {
    $("#result17").text($(this).val());
});

$('input[name="17"]').on('change', function () {
    if ($(this).val() == "supply") {
        $('input[id="res17"]').val('1');
    } else {
        $('input[id="res17"]').val('0');
    }
});

// Osamnaesto pitanje
$('input[name="18"]').on('change', function () {
    $("#result18").text($(this).val());
});

$('input[name="18"]').on('change', function () {
    if ($(this).val() == "set") {
        $('input[id="res18"]').val('1');
    } else {
        $('input[id="res18"]').val('0');
    }
});

// Devetnaesto pitanje
$('input[name="19"]').on('change', function () {
    $("#result19").text($(this).val());
});

$('input[name="19"]').on('change', function () {
    if ($(this).val() == "handy") {
        $('input[id="res19"]').val('1');
    } else {
        $('input[id="res19"]').val('0');
    }
});

// Dvadeseto pitanje
$('input[name="20"]').on('change', function () {
    $("#result20").text($(this).val());
});

$('input[name="20"]').on('change', function () {
    if ($(this).val() == "arriving") {
        $('input[id="res20"]').val('1');
    } else {
        $('input[id="res20"]').val('0');
    }
});

// Dvadesetprvo pitanje
$('input[name="21"]').on('change', function () {
    $("#result21").text($(this).val());
});

$('input[name="21"]').on('change', function () {
    if ($(this).val() == "fancy") {
        $('input[id="res21"]').val('1');
    } else {
        $('input[id="res21"]').val('0');
    }
});

// Dvadesetdrugo pitanje
$('input[name="22"]').on('change', function () {
    $("#result22").text($(this).val());
});

$('input[name="22"]').on('change', function () {
    if ($(this).val() == "engage") {
        $('input[id="res22"]').val('1');
    } else {
        $('input[id="res22"]').val('0');
    }
});

// Dvadesettrece pitanje
$('input[name="23"]').on('change', function () {
    $("#result23").text($(this).val());
});

$('input[name="23"]').on('change', function () {
    if ($(this).val() == "offence") {
        $('input[id="res23"]').val('1');
    } else {
        $('input[id="res23"]').val('0');
    }
});

// Dvadesetčetvrto pitanje
$('input[name="24"]').on('change', function () {
    $("#result24").text($(this).val());
});

$('input[name="24"]').on('change', function () {
    if ($(this).val() == "prepared") {
        $('input[id="res24"]').val('1');
    } else {
        $('input[id="res24"]').val('0');
    }
});

// Dvadesetpeto pitanje
$('input[name="25"]').on('change', function () {
    $("#result25").text($(this).val());
});

$('input[name="25"]').on('change', function () {
    if ($(this).val() == "supply.") {
        $('input[id="res25"]').val('1');
    } else {
        $('input[id="res25"]').val('0');
    }
});

// Suma bodova
$('input[type="radio"]').on('change', function () {
    var suma = 0;
    suma += Number($('input[id="res"]').val()) + Number($('input[id="res2"]').val()) + Number($('input[id="res3"]').val()) + Number($('input[id="res4"]').val()) + Number($('input[id="res5"]').val()) + Number($('input[id="res6"]').val()) + Number($('input[id="res7"]').val()) + Number($('input[id="res8"]').val()) + Number($('input[id="res9"]').val()) + Number($('input[id="res10"]').val()) + Number($('input[id="res11"]').val()) + Number($('input[id="res12"]').val()) + Number($('input[id="res13"]').val()) + Number($('input[id="res14"]').val()) + Number($('input[id="res15"]').val()) + Number($('input[id="res16"]').val()) + Number($('input[id="res17"]').val()) + Number($('input[id="res18"]').val()) + Number($('input[id="res19"]').val()) + Number($('input[id="res20"]').val()) + Number($('input[id="res21"]').val()) + Number($('input[id="res22"]').val()) + Number($('input[id="res23"]').val()) + Number($('input[id="res24"]').val()) + Number($('input[id="res25"]').val());
    $("#sum").val(suma);
    $('#test-score').val(suma);
});

$('input[type="radio"]').on('change', function () {
    if ($("#sum").val() > 6 && $("#sum").val() < 12) {
        $("#nivo").text('A2');
        $("#test-lvl").val('A2');
    } else if ($("#sum").val() > 13 && $("#sum").val() < 17){
        $("#nivo").text('B1');
        $("#test-lvl").val('B1');
    } else if ($("#sum").val() > 18 && $("#sum").val() < 21){
        $("#nivo").text('B2');
        $("#test-lvl").val('B2');
    } else if ($("#sum").val() == 22){
        $("#nivo").text('C1');
        $("#test-lvl").val('C1');
    } else if ($("#sum").val() > 23 && $("#sum").val() < 25){
        $("#nivo").text('C2');
        $("#test-lvl").val('C2');
    }
});
	}

}

export default TestPage;