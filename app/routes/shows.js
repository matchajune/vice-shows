import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.get('store').findAll('show');
  },
  actions: {
    queryParamsDidChange(params) {
      this.get('store').findRecord('show', +params.id)
        .then((show) => {
          this.controller.set('selectedShow', show);
        });
    }
  }
});
