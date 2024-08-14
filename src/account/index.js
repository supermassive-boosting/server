export default class Account {
  constructor(options) {
    this.id = options.id;
    this.username = options.username;
    this.email = options.email;
    this.lastLogin = options.lastLogin;
    this.createdAt = options.createdAt;
    this.updatedAt = options.updatedAt;
    /*
    ! varsa cezası kendi classından gelecek.
    */
    this.punishment = [];
    /*
    ! trust puanı kendi classından gelecek.
    */
    this.trust = options.trust || 50;
  }
}
