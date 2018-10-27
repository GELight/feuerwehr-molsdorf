import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({

  model() {
    return hash({
      showPageContent: true
    });
  },

  actions: {
    
    showYouthDepartment() {
      this.set('showPageContent', false);
      this.transitionTo('youth.department');
    },
    
    showChildFireBrigade() {
      this.set('showPageContent', false);
      this.transitionTo('youth.child-fire-brigade');
    }

  }

});
