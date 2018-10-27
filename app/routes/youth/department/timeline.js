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
        { date: '1995', subject: '2. Stadtausscheid der Stadt Erfurt', city: 'Erfurt-Schmira', place: 4 },
        { date: '1995', subject: 'Zeltlager in Oberbeisheim', city: 'Oberbeisheim', place: 2 },
        { date: '1996', subject: '3. Stadtausscheid der Stadt Erfurt', city: 'Erfurt-Melchendorf', place: 7 },
        { date: '1996', subject: '2. Mannschaft', city: 'Erfurt-Melchendorf', place: 15 },
        { date: '1997', subject: '4. Stadtausscheid der Stadt Erfurt', city: 'Erfurt-Marbach', place: 3 },
        { date: '1998', subject: '5. Stadtausscheid der Stadt Erfurt', city: 'Erfurt-Stotternheim', place: 5 },
        { date: '1999', subject: '6. Stadtausscheid der Stadt Erfurt', city: 'Erfurt-Kerspleben', place: 3 },
        { date: '2000', subject: '7. Stadtausscheid der Stadt Erfurt', city: 'Erfurt-Vieselbach', place: 1 },
        { date: '2000', subject: '2. Mannschaft', city: 'Erfurt-Frienstedt', place: 1 },
        { date: '2001', subject: '8. Stadtausscheid der Stadt Erfurt', city: 'Erfurt-Frienstedt', place: 1 },
        { date: '2001', subject: '2. Mannschaft', city: 'Erfurt-Frienstedt', place: 1 },
        { date: '2002', subject: '9. Stadtausscheid der Stadt Erfurt', city: 'Erfurt-Mittelhausen', place: 1 },
        { date: '2002', subject: 'Thüringer Landesausscheid', city: 'Eisenach', place: 1 },
        { date: '2002', subject: 'Bundeswettbewerb zum Tag der offenen Tür Erfurt-Molsdorf', city: 'Erfurt-Molsdorf', place: 11 },
        { date: '2003', subject: '10. Stadtausscheid der Stadt Erfurt', city: 'Erfurt-Möbisburg', place: 1 },
        { date: '2004', subject: '11. Stadtausscheid der Stadt Erfurt', city: 'Erfurt-Ermstedt', place: 1 },
        { date: '2004', subject: 'Thüringer Landesausscheid', city: 'Altenburg', place: 4 },
        { date: '2005', subject: '12. Stadtausscheid der Stadt Erfurt', city: 'Erfurt-Alach', place: 1 },
        { date: '2006', subject: '13. Stadtausscheid der Stadt Erfurt', city: 'Erfurt-Alach', place: 1 },
        { date: '2006', subject: 'Thüringer Landesausscheid', city: 'Erfurt-Molsdorf', place: 11 },
        { date: '2007', subject: '14. Stadtausscheid der Stadt Erfurt', city: 'EF-Kühnhausen/EF-Tiefthal', place: 1 },
        { date: '2008', subject: '15. Stadtausscheid der Stadt Erfurt', city: 'EF-Dittelstedt/EF-Büßleben', place: 1 },
        { date: '2008', subject: 'Thüringer Landesausscheid', city: 'Meiningen', place: 1 },
        { date: '2009', subject: '16. Stadtausscheid der Stadt Erfurt', city: 'EF-Gispersleben', place: 2 },
        { date: '2009', subject: 'Deutsche Meisterschaft', city: 'Amberg (Bayern)', place: 28 }
      ],
      football: [
        { date: '1995', ageclass: 'keine Altersgruppe', place: 2 },
        { date: '1998', ageclass: 'II', place: 6 },
        { date: '1999', ageclass: 'I', place: 1 },
        { date: '2000', ageclass: '-', place: null },
        { date: '2001', ageclass: 'I', place: 2 },
        { date: '2002', ageclass: 'I', place: 1 },
        { date: '2003', ageclass: 'II', place: 1 },
        { date: '2004', ageclass: 'II', place: 1 },
        { date: '2005', ageclass: 'II', place: 1 },
        { date: '2006', ageclass: 'II', place: 1 },
        { date: '2007', ageclass: 'Mannschaft mit JF EF-Alach / II', place: 1 }
      ],
      runs: [
        { date: '2001', winner: 'Oberbeisheim', place: 2 },
        { date: '2003', winner: 'Molsdorf', place: 1 },
        { date: '2005', winner: 'Molsdorf', place: 1 },
        { date: '2006', winner: 'Molsdorf', place: 1 },
        { date: '2007', winner: 'Oberbeisheim', place: 4 }
      ]
    });

  }

});
