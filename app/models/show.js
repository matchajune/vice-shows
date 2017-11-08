import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  episodes: DS.attr('number'),
  product_image_url: DS.attr('string')
});
