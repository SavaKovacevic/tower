import $ from 'jquery';

class NumberCounter {
	constructor(element, offset) {
		this.itemsToReveal = element;
        this.offsetPercentage = offset;
        this.hideInitially();
        this.createWaypoints();
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
             that.numberCount();}
           },
           offset: that.offsetPercentage
         });
       });
 }
}

export default NumberCounter;






// class RevealOnScroll {
//  constructor(element, offset) {
//    this.itemsToReveal = element;
//    this.offsetPercentage = offset;
//    this.hideInitially();
//    this.createWaypoints();
//  }

//  hideInitially() {
//    this.itemsToReveal.addClass("reveal-item");
//  }

//  createWaypoints() {
//     var that = this;
//    this.itemsToReveal.each(function() {
//      var currentItem = this;
//      new Waypoint({
//        element: currentItem,
//        handler: function() {
//          $(currentItem).addClass("reveal-item--is-visible");
//        },
//        offset: that.offsetPercentage
//      });
//    });
//  }
// }

