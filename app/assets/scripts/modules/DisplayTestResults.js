import $ from 'jquery';

class DisplayTestResults {
	constructor() {
		this.testHidden = $('.test__results--hidden');
		this.triggerButton = $('#btn--trigger');
		this.countItems = $('.option-input');
		this.alertBox = $('.alert-overlay');
		this.closeAlert = $('.close-alert');
		this.events();
	}

	events() {
		this.triggerButton.click(this.showResults.bind(this));
		this.closeAlert.click(this.closeAlertBox.bind(this));
	}

	showResults() {
		var numberOfCheckedRadio = $('input:radio:checked').length;
		if(numberOfCheckedRadio == 25) {
				this.testHidden.addClass('test__results--show');
				this.triggerButton.addClass('test__results--hidden');
			} else (this.alertBox.addClass('open-box'));
	}

	closeAlertBox() {
		this.alertBox.removeClass('open-box');
	}
}

export default DisplayTestResults;