import Config from './config'
import AuthService from './auth.service'

export default class ApiService {

  static get(route) {
    const auth = AuthService.getCredentials();
    const token = auth.token;
    
    return fetch(`${Config.api}/${route}`, {
      headers: {
        'x-access-token': token, 
      },
      method: 'GET'
    })
    .then(response => {
      if (response.status === 403) {
        AuthService.doLogin();
      } else {
        return response;
      }
    });
  }
}