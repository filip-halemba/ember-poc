import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    //Tutaj na przykład pobieramy dane z REST serwisu
    return this.store.findAll('user');
  }
});
