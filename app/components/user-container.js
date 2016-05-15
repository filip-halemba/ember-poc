import Ember from 'ember';

export default Ember.Component.extend({
  user: undefined,
  userComputed: Ember.computed('user.id', 'user.name', function () {
    return this.get('user.id') + "-" + this.get('user.name');
  }),
});
