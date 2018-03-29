import React, { Component } from 'react'
import LevelBox from './Level/LevelBox'
import SupplementBox from './Supplement/SupplementBox'
import { Courses } from '../../data/courses'
import { Level } from '../../data/model'

export default class LessonBox extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      levels: [],
      supplements: []
    };

    Courses.getLevels(props.lesson._id).then(levels => this.setState({ levels: levels }));
    Courses.getSupplements(props.lesson._id).then(supplements => this.setState({ supplements: supplements }));
  }

  render() {

    const isCompleted = false;

    let mix = this.state.levels.concat(this.state.supplements).sort((a, b) => a.order - b.order);
    let components = mix.map(element =>
      (element instanceof Level)
        ? <LevelBox key={element._id} level={element} />
        : <SupplementBox key={element._id} supplement={element} />
    );

    const iconClassName = isCompleted
      ? 'done fas fa-check-circle'
      : 'fas fa-circle';

    return (
      <div className="lesson">
        <i className={iconClassName}></i>
        <h2>{this.props.lesson.name}</h2>
        <div className="levels">
          {components}
        </div>
      </div>
    )
  }
}