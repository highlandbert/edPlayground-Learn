import AuthService from '../auth.service'
import ApiService from '../api.service'
import { Question, Answer } from './model'

export default class Discussions {

  static getQuestions(courseId) {
    return ApiService.get(`questions/course/${courseId}`)
      .then(results => results.map(result => new Question(result)));
  }

  static getQuestion(id) {
    return ApiService.get(`questions/${id}`)
      .then(result => new Question(result));
  }

  static getAnswers(questionId) {
    return ApiService.get(`answers/question/${questionId}`)
      .then(results => results.map(result => new Answer(result)));
  }

  static createQuestion(title, content, courseId) {
    const params = new URLSearchParams();
    params.set('title', title);
    params.set('content', content);
    params.set('courseId', courseId);
    params.set('userId', AuthService.getCredentials()._id);

    return ApiService.post('questions', params); 
  }

  static createAnswer(content, questionId) {
    const params = new URLSearchParams();
    params.set('content', content);
    params.set('questionId', questionId);
    params.set('userId', AuthService.getCredentials()._id);

    return ApiService.post('answers', params);
  }
}