import React from 'react';

class ColorPickerItem extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    let itemStyle = {
      backgroundColor: '#' + this.props.color
    };
    let className = ['color-item'];

    if (this.props.color === 'transparent') {
      className.push('color-transparent');
    }

    return <div className={className.join(' ')}
                style={itemStyle}
                onClick={this.props.onItemClick.bind(this, this.props.color)}></div>
  }
}

export default ColorPickerItem;
