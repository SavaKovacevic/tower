import $ from 'jquery';

class NumberCounter {
	constructor(element, offset) {
        this.lazyImages = $('.lazyload');
		this.itemsToReveal = element;
        this.offsetPercentage = offset;
        this.hideInitially();
        this.createWaypoints();
        this.refreshWaypoints();
	}

    refreshWaypoints() {
        this.lazyImages.on('load', function() {
            Waypoint.refreshAll();
        });
    }

     hideInitially() {
       this.itemsToReveal.addClass("reveal-item");
     }

    numberCount() {
        $('.count').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 2000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    }

    createWaypoints() {
        var that = this;
        this.itemsToReveal.each(function() {
         var currentItem = this;
         new Waypoint({
           element: currentItem,
           handler: function() {
             $(currentItem).addClass("reveal-item--is-visible");
             if($(currentItem).hasClass("reveal-item--is-visible")){
             that.numberCount();
             this.destroy()}
           },
           offset: that.offsetPercentage
         });
       });
 }
}

export default NumberCounter;
