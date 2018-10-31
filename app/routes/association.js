import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import { A } from '@ember/array';

export default Route.extend({

  model() {
    return hash({
      members: this.store.findAll('member').then((members) => {
        let list = A();
        
        members.forEach((member) => {
          if (member.get('board') && member.get('boardChairman')) {
            member.set('type', 'boardChairman');
            list.push(member);
          }
        });
        members.forEach((member) => {
          if (member.get('board') && member.get('deputyBoardChairman')) {
            member.set('type', 'deputyBoardChairman');
            list.push(member);
          }
        });
        members.forEach((member) => {
          if (member.get('board') && member.get('treasurer')) {
            member.set('type', 'treasurer');
            list.push(member);
          }
        });
        members.forEach((member) => {
          if (member.get('board') && member.get('secretary')) {
            member.set('type', 'secretary');
            list.push(member);
          }
        });
        members.forEach((member) => {
          if (member.get('board') && member.get('assessor')) {
            member.set('type', 'assessor');
            list.push(member);
          }
        });

        return list;
      }),
      membership: this.store.findAll('member').then((members) => {
        let count = members.get("length");
        
        if (count > 46) {
          return 46;
        }
        
        return count;
      }),
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
