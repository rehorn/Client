const React = require('react');
const { connect } = require('react-redux');
const {
  View,
  Text,
  Image,
  TouchableOpacity,
} = require('react-native');
const sb = require('react-native-style-block');
const appConfig = require('../config.app');
const { getSamlpeDate } = require('../../utils/dateHelper');
const { TButton } = require('../components/TComponent');

class ProfileInfoItem extends React.Component {
  render() {
    return (
      <View style={styles.item}>
        <Text style={{width: 80}}>{this.props.name}:</Text>
        <Text>{this.props.value}</Text>
      </View>
    )
  }
}

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  _handlePressAvatar(avatar) {
    console.log(avatar);
    if(avatar.uri) {
      let media = [
        {
          photo: avatar.uri
        },
      ]
      this.props.navigation.navigate('PhotoBrowser', {media, index:0});
    }
  }

  render() {
    let userUUID = this.props.navigation.state.params.uuid;
    let userInfo = this.props.usercache.get(userUUID);

    if(!userInfo) {
      return (
        <View><Text>无内容</Text></View>
      )
    }

    let avatar = userInfo.get('avatar') ? {uri: userInfo.get('avatar')} : appConfig.defaultImg.user;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this._handlePressAvatar(avatar)}>
            <Image style={styles.avatar} source={avatar} />
          </TouchableOpacity>
          <Text style={{fontSize: 18, marginTop: 4}}>{userInfo.get('nickname') || userInfo.get('username')}</Text>
          <Text style={{fontSize: 12, color: '#999'}}>{userInfo.get('uuid')}</Text>
        </View>
        <View style={{paddingLeft: 10, backgroundColor: 'white'}}>
          <ProfileInfoItem name="用户名" value={userInfo.get('username')} />
          <ProfileInfoItem name="性别" value={userInfo.get('sex')} />
          <ProfileInfoItem name="简介" value={userInfo.get('desc') || '这个人很懒什么都没有留下'} />
          <ProfileInfoItem name="上次登录" value={userInfo.get('last_login') || '无记录'} />
          <ProfileInfoItem name="注册时间" value={getSamlpeDate(userInfo.get('createdAt'))} />
        </View>
        <View style={styles.actions}>
          <TButton>
            加为好友
          </TButton>
        </View>
      </View>
    )
  }
}

const styles = {
  container: [
    {flex: 1},
  ],
  header: [
    {marginBottom: 10},
    sb.alignCenter(),
    sb.bgColor('white'),
    sb.padding(20, 0),
  ],
  avatar: [
    sb.size(100, 100),
    sb.radius(50),
  ],
  item: [
    {flexDirection: 'row'},
    sb.padding(10, 4),
    sb.border('Bottom', 0.5, '#ccc'),
  ],
  actions: [
    sb.padding(10),
  ],
}

module.exports = connect(
  state => ({
    usercache: state.getIn(['cache', 'user']),
  })
)(ProfileScreen);