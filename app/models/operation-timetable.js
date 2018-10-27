import DS from 'ember-data';

export default DS.Model.extend({
  month: DS.attr('string'),
  plan: DS.attr()
});
