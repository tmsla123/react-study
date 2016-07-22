import React from 'react';
import ColorPickerRow from './ColorPickerRow';
import ColorPickerOption from './ColorPickerOption';

class ColorPickerPopup extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isCustomOpen: false
    };
  }

  handleColorItemClick(color) {
    this.props.onUpdate({
      color: color,
      isOpen: false
    });
  }

  handleCustomItemClick(color, event) {
    event.stopPropagation()
  }

  render() {
    let key = 0;
    let simpleColors = <ColorPickerRow key={key++}
                                       colors={this.props.simple}
                                       onItemClick={this.handleColorItemClick.bind(this)} />;
    let complexColors = (() => {
      let rows = [];

      this.props.complex.map(colors => {
        rows.push(<ColorPickerRow key={key++}
                                  colors={colors}
                                  onItemClick={this.handleColorItemClick.bind(this)}></ColorPickerRow>);
      });

      return rows;
    })();
    let customColors = <ColorPickerRow key={key++}
                                       colors={this.props.custom}
                                       onItemClick={this.handleCustomItemClick.bind(this)}></ColorPickerRow>;

    return (
      <div className="color-picker-popup dropdown-menu">
        <div className="simple-colors">{simpleColors}</div>
        <div className="complex-colors">{complexColors}</div>
        <div className="custom-colors">{customColors}</div>
        <ColorPickerOption></ColorPickerOption>
      </div>
    );
  }
}

export default ColorPickerPopup;
