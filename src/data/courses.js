import AuthService from '../auth.service'
import ApiService from '../api.service'
import { Course, Lesson, Level, Supplement } from './model'

export default class Courses {

  static _cache_course = {};
  static _cache_lessons = {};
  static _cache_levels = {};
  static _cache_supplements = {};

  static get(courseId) {
    if (this._cache_course.hasOwnProperty(courseId)) {
      // console.log('Courses from cache');
      return Promise.resolve(this._cache_course[courseId]);
    }

    return ApiService.get(`courses/${courseId}`)
      .then(result => {
        const course = new Course(result);
        this._cache_course[courseId] = course;
        return course;
      });
  }

  static getAll() {
    const auth = AuthService.getCredentials();
    const userid = auth._id;

    return ApiService.get(`enrollments/user/${userid}`)
      .then(results => results.map(result => new Course(result.course)));
  }

  static getLessons(courseId) {
    if (this._cache_lessons.hasOwnProperty(courseId)) {
      // console.log('Lessons from cache');
      return Promise.resolve(this._cache_lessons[courseId]);
    }

    return ApiService.get(`lessons/${courseId}`)
      .then(results => results.map(result => new Lesson(result)))
      .then(results => {
        const lessons = results.sort((a, b) => a.order - b.order);
        this._cache_lessons[courseId] = lessons;
        return lessons;
      });
  }

  static getLevels(lessonId) {
    if (this._cache_levels.hasOwnProperty(lessonId)) {
      // console.log('Levels from cache');
      return Promise.resolve(this._cache_levels[lessonId]);
    }

    return ApiService.get(`levels/lesson/${lessonId}`)
      .then(results => results.map(result => new Level(result)))
      .then(results => {
        const levels = results.sort((a, b) => a.order - b.order);
        this._cache_levels[lessonId] = levels;
        return levels;
      });
  }

  static getSupplements(lessonId) {
    if (this._cache_supplements.hasOwnProperty(lessonId)) {
      // console.log('Levels from cache');
      return Promise.resolve(this._cache_supplements[lessonId]);
    }

    return ApiService.get(`supplements/${lessonId}`)
      .then(results => results.map(result => new Supplement(result)))
      .then(results => {
        const supplements = results.sort((a, b) => a.order - b.order);
        this._cache_supplements[lessonId] = supplements;
        return supplements;
      });
  }
}