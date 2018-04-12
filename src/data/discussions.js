import AuthService from '../auth.service'
import ApiService from '../api.service'
import { Question, Answer, Gold, Platinum } from './model'

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

  static getAnswerGold(answerId) {
    return ApiService.get(`golds/answer/${answerId}`)
      .then(results => results.map(result => new Gold(result)));
  }

  static getQuestionPlat(questionId) {
    return ApiService.get(`platinums/question/${questionId}`)
      .then(results => results.map(result => new Platinum(result)));
  }

  static getUserGold(userId) {
    return ApiService.get(`golds/creator/${userId}`)
      .then(results => results.map(result => new Gold(result)));
  }

  static getUserPlat(userId) {
    return ApiService.get(`platinums/creator/${userId}`)
      .then(results => results.map(result => new Platinum(result)));
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

  static createGold(answerId) {
    const params = new URLSearchParams();
    params.set('answerId', answerId);
    params.set('userId', AuthService.getCredentials()._id);

    return ApiService.post('golds', params);
  }

  static createPlat(questionId) {
    const params = new URLSearchParams();
    params.set('questionId', questionId);
    params.set('userId', AuthService.getCredentials()._id);

    return ApiService.post('platinums', params);
  }

  static deleteGold(goldId) {
    return ApiService.delete(`golds/${goldId}`);
  }

  static deletePlat(platinumId) {
    return ApiService.delete(`platinums/${platinumId}`);
  }
}