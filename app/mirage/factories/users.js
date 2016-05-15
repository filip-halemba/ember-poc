/*
  This is an example factory definition.

  Create more files in this directory to define additional factories.
*/
import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  'first-name'() { return faker.name.firstName(); },
  'last-name'() { return faker.name.lastName(); }
});
