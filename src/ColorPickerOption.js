import React from 'react';

class ColorPickerOption extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      dragging: false
    };
  }

  handleDragStart() {
    this.setState({
      dragging: true
    });
  }

  handleDragEnd() {
    console.log('mouse up ::: ');
    this.setState({
      dragging: false
    });
  }

  handleDrag(event) {
    console.log('drag ::: ', event.offsetX, event.offsetY);
  }


  render() {
    if (this.state.dragging) {
      window.addEventListener('mouseup', this.handleDragEnd.bind(this));
      window.addEventListener('mousemove', this.handleDrag);
    } else {
      window.removeEventListener('mouseup', this.handleDragEnd.bind(this));
      window.removeEventListener('mousemove', this.handleDrag);
    }

    console.log('color picker option ::: ', this.state.dragging);

    return (
      <div className="custom-options">
        <div className="custom-toggle-btn"></div>
        <div className="custom-content">
          <div className="sv-content"
               onMouseDown={this.handleDragStart.bind(this)}>
            <div className="picker-icons sv-pointer"></div>
          </div>
          <div className="h-content">
            <div className="h-pointer"></div>
          </div>
        </div>
        <div className="custom-footer">
          <div className="color-bg"></div>
          <input className="color-text" />
          <button className="btn color-confirm">적용</button>
        </div>
      </div>
    );
  }
}

export default ColorPickerOption;
