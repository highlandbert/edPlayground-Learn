//   router.route('/levelsResults/user/:userId/level/:levelId')
import AuthService from '../auth.service'
import ApiService from '../api.service'
import Courses from './courses'
import { LevelResults } from './model'

export default class Results {

  /*
    Level
  */

  static _cache_level = {};

  static getLevelResults(levelId) {

    if (this._cache_level.hasOwnProperty(levelId)) {
      return Promise.resolve(this._cache_level[levelId]);
    }

    const auth = AuthService.getCredentials();
    const userId = auth._id;

    return ApiService.get(`levelsResults/user/${userId}/level/${levelId}`)
      .then(result => {
        const levelResults = result === null ? undefined : new LevelResults(result);
        this._cache_level[levelId] = levelResults;
        return levelResults;
      });
  }

  static getRanking(seconds) {
    return ApiService.get(`levelsResults/ranking/${seconds}`)
      .then(result => result);
  }

  /*
    Lesson
  */

  static getLessonResults(lessonId) {
    return Courses.getLevels(lessonId)
      .then(levels => Promise.all([levels, Promise.all(levels.map(level => this.getLevelResults(level._id)))]))
      .then(([levels, results]) => [levels, results.filter(result => result !== undefined)]);
  }

  static calcLessonProgress(levels, results) {
    return Math.floor((results.length / levels.length) * 100);
  }

  /*
    Course
  */

  static getCourseResults(courseId) {
    return Courses.getLessons(courseId)
      .then(lessons => Promise.all(lessons.map(lesson => this.getLessonResults(lesson._id))));
  }

  static calcCourseProgress(lessonsResults) {
    let sum = 0;
    for ([levels, results] of lessonsResults) {
      sum += this.calcLessonProgress(levels, results);
    }
    return sum / lessonsResults.length;
  }

}