import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({

  model() {
    return hash({
      headerSlides: [
        {
          img: '/img/main-1.jpg',
          headline: 'Sei dabei!',
          text: 'Mach mit im Förderverein der freiwilligen Feuerwehr Erfurt-Molsdorf.'
        },
        {
          img: '/img/main-2.jpg',
          headline: 'Unsere Jugend',
          text: 'Lerne alles rund um die Feuerwehr.'
        },
        {
          img: '/img/main-3.jpg',
          headline: 'Ehrenabteilung',
          text: 'Einen wehrtvoller Beitrag leisten.'
        },
        {
          img: '/img/main-4.jpg',
          headline: 'Einsatzabteilung',
          text: 'Gemeinsam für euch.'
        }
      ]
    });
  }
  
});
