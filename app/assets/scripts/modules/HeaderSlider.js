import $ from 'jquery';

class HeaderSlider {
  constructor() {
    this.slide1 = $('.slide1');
    this.slide2 = $('.slide2');
    this.slide3 = $('.slide3');
    this.dot1 = $('.dot1');
    this.dot2 = $('.dot2');
    this.dot3 = $('.dot3');
    this.events();
  }

  events() {
    this.dot1.click(this.dot1Slide.bind(this));
    this.dot2.click(this.dot2Slide.bind(this));
    this.dot3.click(this.dot3Slide.bind(this));
    setTimeout(this.imageSlide.bind(this), 0);
    setInterval(this.imageSlide.bind(this), 12000);
  }


  dot1Slide () {
    this.dot1.addClass('large-hero__dots--active');
    this.dot2.removeClass('large-hero__dots--active');
    this.dot3.removeClass('large-hero__dots--active');
    this.slide1.addClass('show');
    this.slide2.removeClass('show');
    this.slide3.removeClass('show');
  }
  dot2Slide () {
    this.dot1.removeClass('large-hero__dots--active');
    this.dot2.addClass('large-hero__dots--active');
    this.dot3.removeClass('large-hero__dots--active');
    this.slide1.removeClass('show');
    this.slide2.addClass('show');
    this.slide3.removeClass('show');
  }
  dot3Slide () {
    this.dot1.removeClass('large-hero__dots--active');
    this.dot2.removeClass('large-hero__dots--active');
    this.dot3.addClass('large-hero__dots--active');
    this.slide1.removeClass('show');
    this.slide2.removeClass('show');
    this.slide3.addClass('show');
  }

  imageSlide (){
      setTimeout(this.dot2Slide.bind(this), 4000);
      setTimeout(this.dot3Slide.bind(this), 8000);
      setTimeout(this.dot1Slide.bind(this), 12000);
  }


}

export default HeaderSlider;





