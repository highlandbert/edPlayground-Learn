import AuthService from '../auth.service'
import ApiService from '../api.service'
import { Course, Lesson, Level, Supplement } from './model'

export class Courses {

  static get(courseId) {
    return ApiService.get(`courses/${courseId}`)
      .then(res => res.json())
      .then(result => new Course(result));
  }

  static getAll() {
    const auth = AuthService.getCredentials();
    const userid = auth._id;

    return ApiService.get(`enrollments/user/${userid}`)
      .then(res => res.json())
      .then(results => results.map(result => new Course(result.course)));
  }

  static getLessons(courseId) {
    return ApiService.get(`lessons/${courseId}`)
      .then(res => res.json())
      .then(results => results.map(result => new Lesson(result)))
      .then(results => results.sort((a, b) => a.order - b.order));
  }

  static getLevels(lessonId) {
    return ApiService.get(`levels/${lessonId}`)
      .then(res => res.json())
      .then(results => results.map(result => new Level(result)))
      .then(results => results.sort((a, b) => a.order - b.order));
  }

  static getSupplements(lessonId) {
    return ApiService.get(`supplements/${lessonId}`)
      .then(res => res.json())
      .then(results => results.map(result => new Supplement(result)))
      .then(results => results.sort((a, b) => a.order - b.order));
  }
}