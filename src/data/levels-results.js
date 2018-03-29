//   router.route('/levelsResults/user/:userId/level/:levelId')
import AuthService from '../auth.service'
import ApiService from '../api.service'
import { LevelResults } from './model'

export default class LevelsResults {

  static get(levelId) {
    const auth = AuthService.getCredentials();
    const userId = auth._id;

    return ApiService.get(`levelsResults/user/${userId}/level/${levelId}`)
      .then(res => res.json())
      .then(result => new LevelResults(result));
  }

  static getRanking(seconds) {
    return ApiService.get(`levelsResults/ranking/${seconds}`)
      .then(res => res.json())
      .then(result => result);
  }

}