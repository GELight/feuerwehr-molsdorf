import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({

  model() {
    let month = new Date().getMonth();
    let modelHash = null;
    
    switch (month) {
      case 1:
        modelHash = hash({
          january: true
        });
        break;
      case 2:
        modelHash = hash({
          february: true
        });
        break;
      case 3:
        modelHash = hash({
          march: true
        });
        break;
      case 4:
        modelHash = hash({
          april: true
        });
        break;
      case 5:
        modelHash = hash({
          may: true
        });
        break;
      case 6:
        modelHash = hash({
          june: true
        });
        break;
      case 7:
        modelHash = hash({
          juli: true
        });
        break;
      case 8:
        modelHash = hash({
          august: true
        });
        break;
      case 9:
        modelHash = hash({
          september: true
        });
        break;
      case 10:
        modelHash = hash({
          october: true
        });
        break;
      case 11:
        modelHash = hash({
          november: true
        });
        break;
      case 12:
        modelHash = hash({
          december: true
        });
        break;
    }

    return modelHash;

  }

});
