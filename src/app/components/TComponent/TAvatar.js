const React = require('react');
const {
  View,
  Text,
  Image,
} = require('react-native');
const sb = require('react-native-style-block');
const config = require('../../../../config/project.config');
const str2int = require('str2int');

class TAvatar extends React.Component {
  getColor(name) {
    const color = config.defaultImg.color;
    const id = str2int(name);
    return color[id % color.length];
  }

  render() {
    let {uri, name = '', style, capitalSize = 20} = this.props;

    if(!style instanceof Array) {
      style = [style];
    }

    if(uri && typeof uri !== 'number') {
      uri = {uri};
    }

    let capital = name[0];
    if(capital) {
      capital = capital.toUpperCase();
    }
    let color = this.getColor(name);

    if(uri) {
      return (
        <Image style={style} source={uri} />
      )
    }else {
      return (
        <View style={[...style, {backgroundColor: color}, sb.center()]}>
          <Text style={[...styles.capital, {fontSize: capitalSize}]}>{capital}</Text>
        </View>
      )
    }
  }
}

const styles = {
  capital: [
    {
      textAlign: 'center',
      textAlignVertical: 'center',
    },
    sb.color(),
  ]
}

module.exports = TAvatar;