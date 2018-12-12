import $ from 'jquery';

class DisplayTestResults {
	constructor() {
		this.testHidden = $('.test__results--hidden');
		this.triggerButton = $('#btn--trigger');
		this.countItems = $('.option-input')
		this.events();
	}

	events() {
		this.triggerButton.click(this.showResults.bind(this));
	}


	showResults() {
		var numberOfCheckedRadio = $('input:radio:checked').length;
		if(numberOfCheckedRadio = 25) {
				this.testHidden.addClass('test__results--show');
				this.triggerButton.addClass('test__results--hidden');
			} else (alert('Niste odgovorili na sva pitanja'));
	}
}

export default DisplayTestResults;