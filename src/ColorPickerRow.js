import React from 'react';
import ColorPickerItem from './ColorPickerItem';

class ColorPickerRow extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    let items = this.props.colors.map((color, index) => {
      return <ColorPickerItem key={index}
                              color={color}
                              onItemClick={this.props.onItemClick}></ColorPickerItem>
    });

    return <div className="color-row">{items}</div>
  }
}

export default ColorPickerRow;
