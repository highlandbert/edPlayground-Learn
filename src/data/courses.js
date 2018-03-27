import AuthService from '../auth.service'
import ApiService from '../api.service'

export class Course {
  constructor(obj) {
    this._id = obj && obj._id || 0;
    this.name = obj && obj.name || '';
    this.description = obj && obj.description || '';
  }
}

export class Lesson {
  constructor(obj) {
    this._id = obj && obj._id || 0;
    this.name = obj && obj.name || '';
    this.order = obj && obj.order || 0;
  }
}

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
      .then(results => results.map(result => new Lesson(result)));
  }
}