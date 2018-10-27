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
      youth_timetable: this.store.findAll('youth-timetable'),
      youth_members: this.store.findAll('member').then((members) => {
        return members.filter(function(member) {
          if (member.get('youthDepartment.member')) {
            return true;
          }
          return false;
        }).sortBy('firstName');
      }),
      
      /*[
        { name: 'Schwabe Kristina', role: 'Jugendwart' },
        { name: 'Berlth Hannah', role: 'Mitglied' },
        { name: 'Berlth Finn', role: 'Mitglied' },
        { name: 'Farwick	Selina', role: 'Mitglied' },
        { name: 'Giegler	Ronja', role: 'Mitglied' },
        { name: 'Günther	Jonas', role: 'Mitglied' },
        { name: 'Heinemann	Julia', role: 'Mitglied' },
        { name: 'Heinemann	Sophia', role: 'Mitglied' },
        { name: 'Heinemann	Till', role: 'Mitglied' },
        { name: 'Heinz	Henry', role: 'Mitglied' },
        { name: 'Holbein	Lucas', role: 'Mitglied' },
        { name: 'Kieper Marco', role: 'Mitglied' },
        { name: 'Liebing	Clemens', role: 'Mitglied' },
        { name: 'Liebing	Michelle', role: 'Mitglied' },
        { name: 'Liebing	Max', role: 'Mitglied' },
        { name: 'Loos Julika Blomma', role: 'Mitglied' },
        { name: 'Mörtz	Sandra', role: 'Mitglied' },
        { name: 'Pöppich	Vivien', role: 'Mitglied' },
        { name: 'Thümmel	Maximilian', role: 'Mitglied' }
      ],
      */
      child_timetable: this.store.findAll('children-timetable'),
      child_members: this.store.findAll('member').then((members) => {
        return members.filter(function(member) {
          if (member.get('childrenDepartment.member')) {
            return true;
          }
          return false;
        }).sortBy('firstName');
      })
      
    });
  }

});
