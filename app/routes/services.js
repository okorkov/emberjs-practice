import Route from '@ember/routing/route';

export default class ServicesRoute extends Route {
  model() {
    return ['Repair', 'Cleaning'];
  }
}
