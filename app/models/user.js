import Model from '@ember-data/model';

export default class UsersModel extends Model {
  async model(){
    this.store.findAll('users');
  }
}


