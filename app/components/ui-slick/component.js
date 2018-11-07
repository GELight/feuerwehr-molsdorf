import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

  tagName: 'section',

  /**
   * Defines a list of slick slide contents
   *  
   * @property {Array} slides
   * @example 
   *  [
        {
          img: '/img/main-1.jpg',
          headline: 'Sei dabei!',
          text: 'Mach mit im Förderverein der freiwilligen Feuerwehr Erfurt-Molsdorf.'
        }
      ]
   */
  slides: null,

  slidesList: computed('slides', function() {
    let slides = this.get('slides');
    return slides.map(slide => {
      slide.background = 'background-image: url(' + slide.img + ');';
      return slide;
    })
  })

});
