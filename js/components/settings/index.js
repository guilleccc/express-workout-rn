
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-native';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Text, Button, Icon, List, Picker, ListItem, InputGroup, Input, Thumbnail, View } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import I18n from 'react-native-i18n'
import myTheme from '../../themes/base-theme';
import BackgroundImage from '../backgroundImage'


//import { Picker } from 'react-native';
var ReactNative = require('react-native');
var {
  AsyncStorage,
} = ReactNative;

import { setUser, setLanguage } from '../../actions/user';
import styles from './styles';

const imageBG = require("../../../images/bg.png");
const {
  popRoute,
} = actions;

export const STORAGE_KEY_LANGUAGE = '@AsyncStorage:userLanguage';
export const STORAGE_KEY_INFO = '@AsyncStorage:userInfo';

class Settings extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    index: React.PropTypes.number,
    language: React.PropTypes.string,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    setLanguage: React.PropTypes.func,
    setUser: React.PropTypes.func,
    popRoute: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }
  
  constructor(props) {
    super(props);
    this.state = {
        selectedItem: undefined,
        selectedGender: "male",
        weight: undefined,
        age: undefined,
        results: {
            items: ["key0"]
        }
    }

    AsyncStorage.getItem(STORAGE_KEY_INFO, (err, result) => {
      if (result) {
        var info = JSON.parse(result)
        
        if (info.gender) {
          this.setState({ selectedGender: info.gender, });
        }
        if (info.weight) {
          this.setState({ weight: info.weight.toString() });
        }
        if (info.age) {
          this.setState({ age: info.age.toString() });
        }
        
      }
    });
      
  }
  
  onLanguageChange (value: string) {
    
    AsyncStorage.setItem(STORAGE_KEY_LANGUAGE, value);
    this.props.setLanguage(value);
    
    //this.props.setLanguage(value);
    //console.warn(this.props.language);
  }
  onGenderChange(value: string) {
    this.setState({
        selectedGender: value,
    });
  }
  
  setUser(name) {
    this.props.setUser(name);
  }
  
  componentWillMount() {
    //I18n.locale = this.props.language;
    //console.warn(this.props.language);
    
  }
  
  componentWillUnmount() {
    //I18n.locale = this.props.language;
    //console.warn(this.props.language);
    var _info = { 
      gender: this.state.selectedGender,
      weight: this.state.weight,
      weightUnit: "lb",
      age: this.state.age
    };
    AsyncStorage.setItem(STORAGE_KEY_INFO, JSON.stringify(_info));
  }
  
  popRoute() {
    this.props.popRoute(this.props.navigation.key);
  }
  
  updateWeight(value) {
    if ((parseInt(Number(value)) == value) && value <= 300 && value >= 0) {
      this.setState({weight: value});
    } else {
      alert("Invalid weight. This value should be between 0 and 300.");
    }
  }
  
  updateAge(value) {
    if (parseInt(Number(value)) == value && value <= 100 && value >= 0) {
      this.setState({age: value});
    } else {
      alert("Invalid age. This value should be between 0 and 100.");
    }
  }

  render() {
    const { props: { name, index, list } } = this;

    return (
      <Container theme={myTheme} style={styles.container}>
        <Header>
          <Button transparent onPress={() => this.popRoute()}>
            <Icon name="ios-arrow-back" />
          </Button>

          <Title>{I18n.t('settings.settings')}</Title>

        </Header>
        
        
        <Content style={styles.content}>
          
            <List style={{backgroundColor: '#292F3F'}}>
              <ListItem itemDivider>
                  <Text></Text>
              </ListItem>
              
              <ListItem iconLeft>
                <FontAwesome name="flag-checkered" style={styles.inputIcon} />
                <Text style={styles.inputLabel}>{I18n.t('settings.language')}:</Text>
                <Picker
                      iosHeader="Select one"
                      mode="dropdown"
                      itemStyle={{color:"white"}}
                      selectedValue={this.props.language||"en"}
                      onValueChange={this.onLanguageChange.bind(this)}>
                      <Picker.Item label="English" value="en" />
                      <Picker.Item label="Français" value="fr" />
                      <Picker.Item label="Español" value="es" />
                </Picker>

              </ListItem>

              <ListItem itemDivider>
                  <Text></Text>
              </ListItem>
              
              <ListItem iconLeft="false" iconRight="false" >
                <FontAwesome name="transgender" style={styles.inputIcon} />
                <Text style={styles.inputLabel}>{I18n.t('settings.gender')}:</Text>
                <Picker
                  iosHeader="{I18n.t('settings.gender')}"
                  mode="dropdown"
                  style={styles.optionPicker}
                  itemStyle={{color:"white"}}
                  selectedValue={this.state.selectedGender}
                  onValueChange={this.onGenderChange.bind(this)} >
                    <Picker.Item label="Male" style={{color: 'red'}} color="red" value="male" />
                    <Picker.Item label="Female" value="female" />
                    <Picker.Item label="Other" value="other" />
                </Picker>
              </ListItem>

              <ListItem>
                <View style={styles.inputContainer}>
                  <FontAwesome name="balance-scale" style={styles.inputIcon} />
                  <Text style={styles.inputLabelWithPadding}>Weight: </Text>
                  <Input style={styles.input} placeholder="Kg" keyboardType="numeric" defaultValue={this.state.weight} onChangeText={(text) => this.updateWeight(text)} />
                </View>
              </ListItem>

              
              <ListItem>
                <View style={styles.inputContainer}>
                
                  <FontAwesome name="birthday-cake" style={styles.inputIcon} />
                  <Text style={styles.inputLabelWithPadding}>Age:</Text>
                  <Input style={styles.input} placeholder="Age" keyboardType="numeric" defaultValue={this.state.age} onChangeText={(text) => this.updateAge(text)} />
                </View>
              </ListItem>
              
              
            </List>
            
        </Content>
        
        
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    setLanguage: language => dispatch(setLanguage(language)),
    setUser: name => dispatch(setUser(name)),
    popRoute: key => dispatch(popRoute(key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  language: state.user.language,
  name: state.user.name,
  index: state.list.selectedIndex,
  list: state.list.list,
});


export default connect(mapStateToProps, bindAction)(Settings);
