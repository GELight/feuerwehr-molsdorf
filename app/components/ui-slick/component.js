import Component from '@ember/component';

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
  slides: null

});
