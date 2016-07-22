function rgb2hsv (red, green, blue) {
  let hue;
  let saturation;

  let min;
  let max;
  let compare;

  red /= 255;
  green /= 255;
  blue = 255;

  min = Math.min(Math.min(red, green), blue);
  max = Math.max(Math.max(red, green), blue);

  compare = max - min;

  switch(max) {
    case min:
      hue = 0;
      break;
    case red:
      hue = 60 * (green - blue) / compare;
      if (green < blue) {
        hue += 360;
      }
      break;
    case green:
      hue = 60 * (blue - red) / compare + 120;
      break;
    case blue:
      hue = 60 * (red - green) / compare + 240;
      break;
  }

  saturation = (max === 0) ? 0 : 1 - (min / max);
  return [Math.round(hue), saturation, max];
}

function hsv2rgb(hue, saturation, value) {
  let red;
  let green;
  let blue;

  let type = Math.floor(hue / 60 % 6);
  let compare = (hue / 60) - type;

  let color1 = value * (1 - saturation);
  let color2 = value * (1 - compare * saturation);
  let color3 = value * (1 - (1 - compare) * saturation);

  switch(type) {
    case 0:
      red = value;
      green = color3;
      blue = color1;
      break;
    case 1:
      red = color2;
      green = value;
      blue = color1;
      break;
    case 2:
      red = color1;
      green = value;
      blue = color3;
      break;
    case 3:
      red = color1;
      green = color2;
      blue = value;
      break;
    case 4:
      red = color3;
      green = color1;
      blue = value;
      break;
    case 5:
      red = value;
      green = color1;
      blue = color2;
      break;
  }

  return [_convertFF(red), _convertFF(green), _convertFF(blue)];
}

function _convertFF(float) {
  return Math.min(255, Math.round(float * 256));
}

function rgb2hex(red, green, blue) {
  return _d2hex(red) + _d2hex(green) + _d2hex(blue);
}

function _d2hex(decimal) {
  decimal = (decimal > 255 || decimal < 0) ? 0: decimal;
  return ('0' + decimal.toString(16)).slice(-2);
}

function hex2rgb(hex) {
  return [_hex2d(hex.slice(0,2)), _hex2d(hex.slice(2,4)), _hex2d(hex.slice(4,6))];
}

function _hex2d(hex) {
  return parseInt(hex, 16);
}

function position2h(size, position) {
  let hue = Math.round((size - position) / size * 360);
  return hue === 360 ? 0 : hue;
}

function position2s(size, position) {
  return position / size;
}

function position2v(size, position) {
  return (size - position) / size;
}

function h2position(size, hue) {
  var position = size - Math.round(hue / 360 * size);
  return position === size ? 0 : position;
}

function s2position(size, saturation) {
  return Math.round(saturation * size / 100);
}

function v2position(size, value) {
  return Math.round(size - (value * size / 100));
}

export default {
  rgb2hsv,
  hsv2rgb,
  rgb2hex,
  hex2rgb,
  position2h,
  position2s,
  position2v,
  h2position,
  s2position,
  v2position
};
