import Config from '../config'
import AuthService from '../auth.service';

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
    const auth = AuthService.getCredentials();
    const token = auth.token;
    return fetch(`${Config.api}/courses/${courseId}?token=${token}`)
      .then(res => res.json())
      .then(result => new Course(result));
  }
    
  static getAll() {
    const auth = AuthService.getCredentials();
    const userid = auth._id;
    const token = auth.token;
    return fetch(`${Config.api}/enrollments/user/${userid}?token=${token}`)
      .then(res => res.json())
      .then(results => results.map(result => new Course(result.course)));
  }

  static getLessons(courseId) {
    const auth = AuthService.getCredentials();
    const token = auth.token;
    return fetch(`${Config.api}/lessons/${courseId}?token=${token}`)
      .then(res => res.json())
      .then(results => results.map(result => new Lesson(result)));
  }
}