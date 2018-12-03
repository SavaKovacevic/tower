import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
	constructor() {
		this.siteHeader = $('.site-header');
		this.headerTriggerElement = $('.large-hero__slogan');
		this.createHeaderWaypoint();
	}

	createHeaderWaypoint() {
		var that = this;
		new Waypoint({
			element: this.headerTriggerElement[0],
			handler: function(direction) {
				if (direction == 'down'){
					that.siteHeader.addClass('site-header--background');
				} else {
					that.siteHeader.removeClass('site-header--background');
				}
			}
		});
	}
}

export default StickyHeader;