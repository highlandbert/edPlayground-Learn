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