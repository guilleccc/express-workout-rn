
import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Text, Button, Icon, H1 } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import * as Progress from 'react-native-progress';
import { openDrawer } from '../../actions/drawer';
import myTheme from '../../themes/base-theme';
import styles from './styles';
import { STORAGE_KEY_INFO } from '../../components/settings';
import { AsyncStorage, View } from 'react-native';

const imageBG = require("../../../images/bg.png");
const {
  popRoute,
} = actions;

class RoutineCompleted extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    index: React.PropTypes.number,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    popRoute: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }
  
  constructor(props) {
    super(props);
    this.state = {
    };
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

  popRoute() {
    this.props.popRoute(this.props.navigation.key);
  }
  
  getElapsedTime() {
    var m = parseInt(this.props.elapsedTime / 60);
    var s = parseInt(this.props.elapsedTime - (m * 60));
    s = (s >= 10) ? s : "0" + s;
    return m + ":" + s;
  }
  
  calculatePercentage() {
    return this.props.elapsedTime / this.props.totalTime;
  }
  
  /*
  http://fitnowtraining.com/2012/01/formula-for-calories-burned/
  Men: 
  Calories Burned = [(Age x 0.2017) — (Weight x 0.09036) + (Heart Rate x 0.6309) — 55.0969] x Time / 4.184.
  Women:
  Calories Burned = [(Age x 0.074) — (Weight x 0.05741) + (Heart Rate x 0.4472) — 20.4022] x Time / 4.184.
  */
  calculateCalories() {
    var age = this.state.age ? this.state.age : 20;
    var weight = this.state.weight ? this.state.weight : 155; // [lb]
    var hearthRate = 148; // [bpm]
    var time = (this.props.elapsedTime / 60); // [m]
    var calories = [(age * 0.2017) - (weight * 0.09036) + (hearthRate * 0.6309) - 55.0969] * (time / 4.184);
    var calories = [(age * 0.074) - (weight * 0.05741) + (hearthRate * 0.4472) - 20.4022] * (time / 4.184);
    return parseInt( calories);
  }

  render() {
    const { props: { name, index, list } } = this;

    return (
      <Container theme={myTheme} style={styles.container}>
        <Header>
          <Button transparent onPress={() => this.popRoute()}>
            <Icon name="ios-arrow-back" />
          </Button>

          <Title>Workout Completed</Title>

        </Header>

        <Image source={imageBG} style={{flex: 1, width: null, height: null}}>
        <Content padder>
          <Grid>
            <Row style={styles.progressContainer}>
              <Progress.Circle progress={this.calculatePercentage()} color={"#ff0040"} size={170} thickness={20} />
              <View style={styles.textCalories}>
                <H1 style={{ fontSize: 35, color: 'white' }}>{this.calculateCalories()} </H1>
                <Text style={{ bottom: 0, color: 'white' }}>calories</Text>
              </View>
              
            </Row>
            <Row style={{ height: 80, justifyContent: 'center' }}>
              <Text style={{ color: '#ff0040' }}>
                Time elapsed: {this.getElapsedTime()}
              </Text>
            </Row>
            
            <Row style={{ justifyContent: 'center', }}>
              <Button rounded style={{ backgroundColor: '#3B5998' }}>
                  <Icon name="logo-facebook" />
              </Button>
            </Row>
            
            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
              <Button padder block style={{ width: 200, marginTop: 50, alignItems: 'center' }} onPress={() => this.popRoute()}>
                <Icon name='ios-home' />
                Home
              </Button>
            </View>
            
          </Grid>
          
        </Content>
        </Image>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    popRoute: key => dispatch(popRoute(key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  name: state.user.name,
  index: state.list.selectedIndex,
  list: state.list.list,
});


export default connect(mapStateToProps, bindAction)(RoutineCompleted);
