import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['id'],
  id: null,

  actions: {
    selectShow(show) {
      this.set('selectedShow', show);
    }
  }
});
