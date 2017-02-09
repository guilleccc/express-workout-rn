
import React, { Component } from 'react';
import { TouchableOpacity, AsyncStorage, Image, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Footer, Text, Button, Icon, H1, List, ListItem, Thumbnail } from 'native-base';
import { Grid, Row, Col } from 'react-native-easy-grid';

import { openDrawer } from '../../actions/drawer';
import { setIndex } from '../../actions/list';
import { setLanguage } from '../../actions/user';
import myTheme from '../../themes/base-theme';
import styles from './styles';
import {STORAGE_KEY_LANGUAGE} from '../../components/settings';
import I18n from 'react-native-i18n'
import {basicTranslations} from '../../translations/beginner';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import BackgroundImage from '../backgroundImage'

const {
  reset,
  pushRoute,
} = actions;
const imageBG = require("../../../images/bg.png");
const mainImage = require('../../../images/main/bg.jpg');
const thumb1 = require('../../../images/main/thumb0.png');
const thumb2 = require('../../../images/main/thumb2.png');

// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true
I18n.translations = basicTranslations;

class Home extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    language: React.PropTypes.string,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    setIndex: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
    pushRoute: React.PropTypes.func,
    reset: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }
  
  pushRoute(route, index) {
    this.props.setIndex(index);
    this.props.pushRoute({ key: route, index: 0 }, this.props.navigation.key);
  }
  
  selectRoutine(index) {
    this.props.setIndex(index);
    this.props.pushRoute({ key: 'selectRoutine', level: index }, this.props.navigation.key);
  }
  
  componentWillMount() {
    //I18n.locale = this.props.language;
    AsyncStorage.getItem(STORAGE_KEY_LANGUAGE, (err, result) => {
      if (result) {
        this.props.setLanguage(result);
        //I18n.locale = this.props.language;
      }
    });
  }
  
  componentWillReceiveProps() {
    //I18n.locale = this.props.language;
  }


  render() {
    return (
      <Container theme={myTheme} style={styles.container}>
        <Header>
          
          <Button transparent onPress={() => this.pushRoute('settings')}>
            <Icon name="ios-settings" />
          </Button>
          <Title style={{}}>Express Workout</Title>
          
        </Header>

        <Image source={imageBG} style={{flex: 1, width: null, height: null}}>
        <Content >
          <List>
            <ListItem style={{}}
              onPress={() => this.selectRoutine(0)}>
              <Thumbnail source={thumb1} size={40} />
              <Text style={{color: 'white'}}>{I18n.t('home.beginnerButton')}</Text>
              <Text note style={{color: 'white'}}>Basic exercises for people don't move oftenly.</Text>  
            </ListItem>
            
            <ListItem style={{}}
              onPress={() => this.selectRoutine(1)}>
              <Thumbnail source={thumb2} size={40} />
              <Text style={{color: 'white'}}>{I18n.t('home.intermediateButton')}</Text>
              <Text note style={{color: 'white'}}>Exercises for people whoes do workout from time to time.</Text>
              
            </ListItem>
          </List>
          
        </Content>
        
        
        <Text style={styles.footerText}>"I can {"\n"}... and I will."</Text>
          
        <Footer style={styles.footer}>
          <Image source={mainImage} style={{ flex: 1, resizeMode: 'contain', height: 250 }} >
          </Image>
          
        </Footer>
          </Image>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    setIndex: index => dispatch(setIndex(index)),
    setLanguage: language => dispatch(setLanguage(language)),
    openDrawer: () => dispatch(openDrawer()),
    pushRoute: (route, key) => dispatch(pushRoute(route, key)),
    reset: key => dispatch(reset([{ key: 'login' }], key, 0)),
  };
}

const mapStateToProps = state => ({
  name: state.user.name,
  language: state.user.language,
  list: state.list.list,
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(Home);
