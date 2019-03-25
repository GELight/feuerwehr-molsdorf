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
