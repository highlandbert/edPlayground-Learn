
export default class AuthService {

  static getCredentials() {
    return JSON.parse(window.localStorage.getItem('auth'));
  }

  static hasCredentials() {
    return window.localStorage.getItem('auth') !== null;
  }

  static deleteCredentials() {
    window.localStorage.removeItem('auth');
  }

  static getUsername() {
    return this.hasCredentials()
      ? this.getCredentials().username
      : 'Stranger';
  }

  static doLogin() {
    this.deleteCredentials();
    window.location.href = "/auth";
  }
}