
import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Text, Button, Icon, List, ListItem, Radio } from 'native-base';

import navigateTo from '../../actions/sideBarNav';
import { openDrawer } from '../../actions/drawer';
import myTheme from '../../themes/base-theme';
import styles from './styles';
import I18n from 'react-native-i18n'

const imageBG = require("../../../images/bg.png");
const {
  popRoute,
  pushRoute,
} = actions;

class SelectRoutine extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    language: React.PropTypes.string,
    index: React.PropTypes.number,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    openDrawer: React.PropTypes.func,
    popRoute: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }
  constructor(props) {
    super(props);
    this.state = {
        option: 1
    };

  }
  popRoute() {
    this.props.popRoute(this.props.navigation.key);
  }
  onSelectPressed () {
    this.props.pushRoute({ key: 'videoPage', routineOption: this.state.option, level: this.props.level }, this.props.navigation.key);

  }
  toggleSwitch(opt) {
    this.setState({ option: opt });
  }

  render() {
    const { props: { name, index, list, language } } = this;

    return (
      <Container theme={myTheme} style={styles.container}>
        <Header>
          <Button transparent onPress={() => this.popRoute()}>
            <Icon name="ios-arrow-back" />
          </Button>

          <Title>{I18n.t('selectRoutine.title')}</Title>

        </Header>

        <Image source={imageBG} style={{flex: 1, width: null, height: null}}>
        <Content>
          <List>

            <ListItem onPress={() => this.toggleSwitch(0)}>
              <Radio selected={this.state.option==0} onPress={() => this.toggleSwitch(0)} />
              <Text style={{color: 'white'}}>5 min</Text>
              <Text style={{color: 'white', fontSize: 12}}>{I18n.t('selectRoutine.explanation')} 30 {I18n.t('selectRoutine.seconds')}.</Text>
            </ListItem>
            <ListItem onPress={() => this.toggleSwitch(1)}>
              <Radio selected={this.state.option==1} onPress={() => this.toggleSwitch(1)} />
              <Text style={{color: 'white'}}>8 min </Text>
              <Text style={{color: 'white', fontSize: 12}}>{I18n.t('selectRoutine.explanation')} 45 {I18n.t('selectRoutine.seconds')}.</Text>
            </ListItem>
            <ListItem onPress={() => this.toggleSwitch(2)}>
              <Radio selected={this.state.option==2} onPress={() => this.toggleSwitch(2)} />
              <Text style={{color: 'white'}}>10 min</Text>
              <Text style={{color: 'white', fontSize: 12}}>{I18n.t('selectRoutine.explanation')} 1 {I18n.t('selectRoutine.minute')}.</Text>
            </ListItem>

          </List>

          <Button padder block iconRight
                  onPress={() => {this.onSelectPressed()}}
                  style={styles.button}>
                    <Icon name='ios-arrow-forward' />
                    {I18n.t('selectRoutine.select')}
                  </Button>
        </Content>
        </Image>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    navigateTo: (route, homeRoute) => dispatch(navigateTo(route, homeRoute)),
    pushRoute: (route, key) => dispatch(pushRoute(route, key)),
    popRoute: key => dispatch(popRoute(key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  name: state.user.name,
  language: state.language.language,
  index: state.list.selectedIndex,
  list: state.list.list,
});


export default connect(mapStateToProps, bindAction)(SelectRoutine);
