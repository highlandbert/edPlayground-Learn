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

export class Level {
  constructor(obj) {
    this._id = obj && obj._id || 0;
    this.name = obj && obj.name || '';
    this.order = obj && obj.order || 0;
    this.hasScores = false;
    if (obj && obj.hasScores) {
      this.hasScores = true;
    }
  }
}

export class Supplement {
  constructor(obj) {
    this._id = obj && obj._id || 0;
    this.name = obj && obj.name || '';
    this.order = obj && obj.order || 0;
    this.content = obj && obj.content || '';
  }
}

export class LevelResults {
  constructor(obj) {
    this._id = obj && obj._id || 0;
    this.seconds = obj && obj.seconds || -1;
    this.order = (obj && obj.level) && obj.level.order || 0;
    this.levelId = (obj && obj.level) && obj.level._id || 0;
  }
}

export class Question {
  constructor(obj) {
    this._id = obj && obj._id || 0;
    this.title = obj && obj.title || '';
    this.content = obj && obj.content || '';
    this.created = obj && new Date(obj.created) || new Date(0);
    this.user = (obj && obj.user) && obj.user.username || '';
  }
}

export class User {
  constructor(obj) {
    this.username = obj && obj.username;
  }
}

export class Answer {
  constructor(obj) {
    this._id = obj && obj._id || 0;
    this.content = obj && obj.content || '';
    this.created = obj && new Date(obj.created);
    this.user = (obj && obj.user) && obj.user.username || '';
  }
}

export class Gold {
  constructor(obj) {
    this._id = obj && obj._id || 0;
    this.answerId = obj && obj.answer;
    this.user = obj && obj.user;
    this.creator = obj && obj.creator;
    this.created = obj && new Date(obj.created);
  }
}

export class Platinum {
  constructor(obj) {
    this._id = obj && obj._id || 0;
    this.questionId = obj && obj.question;
    this.user = obj && obj.user;
    this.creator = obj && obj.creator;
    this.created = obj && new Date(obj.created);
  }
}