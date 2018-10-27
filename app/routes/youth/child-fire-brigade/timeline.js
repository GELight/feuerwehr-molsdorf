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
      ],
      challenges: [
        { date: '2008', subject: '15. Stadtausscheid der Stadt Erfurt', city: 'EF-Dittelstedt / EF-Büßleben', team: '2.', place: 1 },
        { date: '2008', subject: '15. Stadtausscheid der Stadt Erfurt', city: 'EF-Dittelstedt / EF-Büßleben', team: '1.', place: 6 },
        { date: '2009', subject: '16. Stadtausscheid der Stadt Erfurt', city: 'EF-Gispersleben', team: '2.', place: 2 },
        { date: '2009', subject: '16. Stadtausscheid der Stadt Erfurt', city: 'EF-Gispersleben', team: '1.', place: 4 },
        { date: '2010', subject: '17. Stadtausscheid der Stadt Erfurt', city: 'EF-Töttelstädt', team: null, place: 2 },
        { date: '2011', subject: '18. Stadtausscheid der Stadt Erfurt', city: 'EF-Töttelstädt', team: null, place: 2 },
        { date: '2012', subject: '19. Stadtausscheid der Stadt Erfurt', city: 'EF-Hochheim', team: '	Molsdorf/Möbisburg', place: 3 },
        { date: '2012', subject: '19. Stadtausscheid der Stadt Erfurt', city: 'EF-Hochheim', team: '	Molsdorf', place: 5 },
        { date: '2013', subject: '20. Stadtausscheid der Stadt Erfurt', city: 'EF-Schwerborn', team: null, place: null },
        { date: '2014', subject: '2. Pokalwettbewerb', city: 'Sonneberg (Thür.)', team: null, place: 1 },
        { date: '2014', subject: '21. Stadtausscheid der Stadt Erfurt', city: 'EF-Waltersleben', team: 'Molsdorf', place: 2 },
        { date: '2014', subject: '21. Stadtausscheid der Stadt Erfurt', city: 'EF-Waltersleben', team: 'Molsdorf/Marbach', place: null },
        { date: '2015', subject: '22. Stadtausscheid der Stadt Erfurt', city: 'EF-Johannesplatz', team: '1.', place: 2 },
        { date: '2015', subject: '22. Stadtausscheid der Stadt Erfurt', city: 'EF-Johannesplatz', team: '2.', place: 6 },
        { date: '2016', subject: '3. Pokalwettbewerb', city: 'Nägelstedt (Thür.)', team: null, place: null },
        { date: '2016', subject: '23. Stadtausscheid der Stadt Erfurt', city: 'EF-Bischleben', team: null, place: null },
        { date: '2016', subject: '23. Stadtausscheid der Stadt Erfurt', city: 'EF-Bischleben', team: null, place: null }
      ],
      football: [
        { date: '2007', ageclass: '0', place: 2 },
        { date: '2008', ageclass: '0', place: 2 },
        { date: '2009', ageclass: '0', place: 2 }
      ]
    });
  }

});
