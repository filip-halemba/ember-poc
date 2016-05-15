import Ember from 'ember';

export default Ember.Controller.extend({
  fullName: Ember.computed('model.name', 'model.lastName', function () {
    return this.get('model.name') + " " + this.get('model.lastName');
  }),
});
