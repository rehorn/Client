import React, { useState, useMemo } from 'react';
import { connect } from 'react-redux';
import { List, WingBlank, WhiteSpace } from '@ant-design/react-native';
import { View, ScrollView } from 'react-native';
import { TButton } from '../components/TComponent';
import { TRPGState, TRPGDispatchProp } from '@src/shared/redux/types/__all__';
import {
  showAlert,
  hideAlert,
  showModal,
  hideModal,
} from '@src/shared/redux/actions/ui';
import {
  switchSelectGroup,
  quitGroup,
  changeSelectGroupActor,
  dismissGroup,
  sendGroupInviteBatch,
} from '@src/shared/redux/actions/group';
import { getCachedUserName } from '@src/shared/utils/cache-helper';
import _get from 'lodash/get';
import _without from 'lodash/without';
import _isEmpty from 'lodash/isEmpty';
import _isNil from 'lodash/isNil';
import TModalPanel from '../components/TComponent/TModalPanel';
import TPicker from '../components/TComponent/TPicker';
import { GroupInfo } from '@src/shared/redux/types/group';
import { TMemo } from '@shared/components/TMemo';
import { useTRPGDispatch } from '@shared/hooks/useTRPGSelector';
import { getGroupActorName } from '@shared/utils/data-helper';
import {
  useSelfGroupActors,
  useSelectedGroupActorUUID,
} from '@redux/hooks/group';
import { TRPGStackScreenProps } from '@app/router';
import { navPortal, backToTop, selectUser } from '@app/navigate';

const ListItem = List.Item;

const GroupActorSelector: React.FC<{
  selectedGroupUUID: string;
}> = TMemo((props) => {
  const { selectedGroupUUID } = props;
  const dispatch = useTRPGDispatch();
  const selfGroupActors = useSelfGroupActors(selectedGroupUUID);
  const actorUUID = useSelectedGroupActorUUID(selectedGroupUUID);
  const [curActorUUID, setCurActorUUID] = useState(actorUUID);

  const options = useMemo(() => {
    const opts = [
      {
        value: null,
        label: '不选择',
      },
    ];
    if (selfGroupActors && selfGroupActors.length > 0) {
      opts.push(
        ...selfGroupActors.map((item, index) => ({
          value: item.uuid,
          label: getGroupActorName(item),
        }))
      );
    }

    return opts;
  }, [selfGroupActors]);

  return (
    <TModalPanel
      onOk={() => {
        dispatch(changeSelectGroupActor(selectedGroupUUID, curActorUUID));
        dispatch(hideModal());
      }}
    >
      <TPicker
        items={options}
        defaultValue={actorUUID}
        onValueChange={(val) => {
          setCurActorUUID(val);
        }}
      />
    </TModalPanel>
  );
});
GroupActorSelector.displayName = 'GroupActorSelector';

interface Props extends TRPGDispatchProp, TRPGStackScreenProps<'GroupData'> {
  userUUID: string;
  groupInfo: GroupInfo;
  selectedGroupUUID: string;
  friendList: string[];
}
class GroupDataScreen extends React.Component<Props> {
  state = {
    isMsgTop: false,
  };

  get isGroupOwner(): boolean {
    const { userUUID, groupInfo } = this.props;
    return userUUID === groupInfo.owner_uuid;
  }

  /**
   * 查看历史消息
   */
  handleViewHistory = () => {
    // TODO: 待实现
    alert('未实现');
  };

  /**
   * 显示团角色列表
   */
  handleShowGroupActor = () => {
    const { dispatch, selectedGroupUUID } = this.props;

    navPortal(this.props.navigation, `/group/${selectedGroupUUID}/actor/list`);
  };

  /**
   * 切换选中角色
   */
  handleSelectGroupActor = () => {
    const { dispatch, selectedGroupUUID } = this.props;

    dispatch(
      showModal(<GroupActorSelector selectedGroupUUID={selectedGroupUUID} />)
    );
  };

  /**
   * 切换是否消息置顶
   */
  handleSwitchMsgTop = (val: boolean) => {
    // TODO: 待实现
    this.setState({
      isMsgTop: val,
    });
  };

  handleShowGroupRule = () => {
    this.props.navigation.navigate('GroupRule');
  };

  /**
   * 显示团成员
   */
  handleShowMember = () => {
    this.props.navigation.navigate('GroupMember', {
      uuid: this.props.route.params?.uuid,
    });
  };

  /**
   * 发送团邀请
   */
  handleGroupInvite = () => {
    // 选择好友
    const { friendList, groupInfo, dispatch, navigation } = this.props;
    const groupMembersList: string[] = groupInfo.group_members;
    const groupManagerList: string[] = groupInfo.managers_uuid;

    const target = _without(
      friendList,
      ...groupMembersList,
      ...groupManagerList
    );

    selectUser(navigation, target, (uuids) => {
      dispatch(sendGroupInviteBatch(groupInfo.uuid, uuids));
    });
  };

  /**
   * 退出团
   */
  handleQuitGroup = () => {
    const { dispatch, groupInfo } = this.props;

    if (this.isGroupOwner) {
      // 解散团
      dispatch(
        showAlert({
          title: '是否要解散群',
          content: '一旦确定无法撤销',
          onConfirm: () => {
            dispatch(hideAlert());
            const groupUUID = groupInfo.uuid;
            dispatch(switchSelectGroup(''));
            dispatch(dismissGroup(groupUUID));
            backToTop(this.props.navigation);
          },
        })
      );
    } else {
      dispatch(
        showAlert({
          title: '是否要退出群',
          content: '一旦确定无法撤销',
          onConfirm: () => {
            dispatch(hideAlert());
            const groupUUID = groupInfo.uuid;
            dispatch(switchSelectGroup(''));
            dispatch(quitGroup(groupUUID));
            backToTop(this.props.navigation);
          },
        })
      );
    }
  };

  render() {
    const { isMsgTop } = this.state;
    const { groupInfo } = this.props;

    if (_isEmpty(groupInfo)) {
      return null;
    }

    const groupOwnerName = getCachedUserName(groupInfo.owner_uuid);

    return (
      <ScrollView>
        <List renderHeader={'基本'}>
          <ListItem extra={groupOwnerName}>团主持人</ListItem>
          <ListItem extra={groupInfo.managers_uuid.length + '人'}>
            团管理
          </ListItem>
          <ListItem
            arrow="horizontal"
            extra={groupInfo.group_members.length + '人'}
            onPress={this.handleShowMember}
          >
            团成员
          </ListItem>
          <ListItem extra={groupInfo.group_actors.length + '张'}>
            团人物卡
          </ListItem>
          <ListItem extra={groupInfo.maps_uuid.length + '张'}>团地图</ListItem>
          <ListItem multipleLine={true} extra={groupInfo.desc}>
            简介
          </ListItem>
          <ListItem onPress={this.handleShowGroupRule} arrow="horizontal">
            团规则
          </ListItem>

          {/* <ListItem onPress={this.handleViewHistory} arrow="horizontal">
            历史消息
          </ListItem> */}
        </List>
        <List renderHeader={'成员'}>
          <ListItem onPress={this.handleGroupInvite} arrow="horizontal">
            邀请好友
          </ListItem>
        </List>
        <List renderHeader={'角色'}>
          <ListItem onPress={this.handleShowGroupActor} arrow="horizontal">
            角色列表
          </ListItem>
          <ListItem onPress={this.handleSelectGroupActor} arrow="horizontal">
            选择角色
          </ListItem>
        </List>
        {/* <List renderHeader={'设置'}>
          <ListItem
            extra={
              <Switch
                value={isMsgTop}
                onValueChange={this.handleSwitchMsgTop}
              />
            }
          >
            消息置顶
          </ListItem>
          <ListItem
            extra={
              <Switch
                value={isMsgTop}
                onValueChange={this.handleSwitchMsgTop}
              />
            }
          >
            免打扰
          </ListItem>
        </List> */}
        <WhiteSpace size="lg" />
        <WingBlank>
          <TButton type="error" onPress={this.handleQuitGroup}>
            {this.isGroupOwner ? '解散本团' : '退出本团'}
          </TButton>
        </WingBlank>
      </ScrollView>
    );
  }
}

export default connect((state: TRPGState, ownProps: Props) => {
  const selectedGroupUUID = ownProps.route.params?.uuid ?? '';

  const groupInfo = state.group.groups.find(
    (group) => group.uuid === selectedGroupUUID
  );

  return {
    userUUID: state.user.info.uuid,
    usercache: state.cache.user,
    selectedGroupUUID,
    groupInfo,
    friendList: state.user.friendList,
  };
})(GroupDataScreen);
