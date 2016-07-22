import React from 'react';
import classNames from 'classnames';
import ColorUtils from './utils/ColorUtils';
import ColorPickerPopup from './ColorPickerPopup';

const COLORS = {
  SIMPLE:
    ['ff0000', 'ff6600', 'ffff00', '66ff00', '00ff00', '00ffff', '0066ff', '0000ff', '6600ff', 'ff00ff', '000000'],
  COMPLEX: [
    ['ffcccc', 'ffe6cc', 'ffffcc', 'e5ffcc', 'ccffcc', 'ccffff', 'cce5ff', 'ccccff', 'e6ccff', 'ffccff', 'ffffff'],
    ['ff9a9a', 'ffcc9a', 'ffff66', 'c9ff9a', '9aff9a', '9affff', '9ac9ff', '9a9aff', 'cc9aff', 'ff9aff', 'f2f2f2'],
    ['f36161', 'f3aa61', 'ffe200', 'a5f361', '61f361', '61f3f3', '61a5f3', '6161f3', 'aa61f3', 'f361f3', 'dadada'],
    ['da4141', 'da8d41', 'e0b033', '88da41', '41da41', '41dada', '4188da', '4141da', '8d41da', 'da41da', 'b3b3b3'],
    ['b30000', 'b35a00', 'b09000', '54b300', '00b300', '00b3b3', '0054b3', '0000b3', '5a00b3', 'b300b3', '808080'],
    ['800000', '804000', '806000', '3c8000', '008000', '008080', '003c80', '000080', '400080', '800080', '4d4d4d']
  ]
};

const staticCustomColors = (() => {
  return ['ffffff', 'ffffff', 'ffffff', 'ffffff', 'ffffff', 'ffffff', 'ffffff', 'ffffff', 'ffffff', 'ffffff', 'transparent'];
})();

let transparent = 'transparent';

class ColorPicker extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      color: '',
      isOpen: false
    };
  }

  handleToggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  onUpdate(data) {
    this.setState(data);
  }



  render() {
    let componentStyle = {
      backgroundColor: '#' + this.state.color
    };
    let pickerClass = classNames({
      'color-picker': true,
      'dropdown': true,
      'open': this.state.isOpen
    });

    return (
      <div className={pickerClass}>
        <input
          className="color-picker-btn dropdown-toggle"
          style={componentStyle}
          onClick={this.handleToggle.bind(this)}
          value={this.state.color} />
        <ColorPickerPopup
          onUpdate={this.onUpdate.bind(this)}
          simple={COLORS.SIMPLE}
          complex={COLORS.COMPLEX}
          custom={staticCustomColors}
          isOpen={this.state.isOpen}
          selectedColor={this.state.color}>
        </ColorPickerPopup>
      </div>
    );
  }
}

export default ColorPicker;
