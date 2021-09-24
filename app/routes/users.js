import Route from '@ember/routing/route';

export default class UsersRoute extends Route {
  async model() {
    const users = await fetch('https://api.github.com/users');
    return users;
  }
}
