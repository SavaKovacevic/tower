import $ from 'jquery';

class MobileMenu {
	constructor() {
		this.hamburgerMenu = $('#hamburger-menu-toggle');
		this.menuContent = $('#overlay');
		this.events();
	}

	events() {
		this.hamburgerMenu.click(this.toggleTheMenu.bind(this));
	}

	toggleTheMenu() {
		this.hamburgerMenu.toggleClass('active');
		this.menuContent.toggleClass('open');
	}
}

export default MobileMenu;