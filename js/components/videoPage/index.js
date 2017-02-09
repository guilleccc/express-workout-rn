
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-native';
import { actions } from 'react-native-navigation-redux-helpers';
import { Alert, View } from 'react-native';
import { Container, Header, Title, Content, Text, Button, Icon, Card, CardItem, H1, Badge } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';
import myTheme from '../../themes/base-theme';
import Video from 'react-native-video';
import * as Progress from 'react-native-progress';
import I18n from 'react-native-i18n'
import {basicTranslations} from '../../translations/beginner';
import TimerMixin from 'react-timer-mixin';

const imageBG = require("../../../images/bg.png");
const {
  popRoute,
  pushRoute,
} = actions;

// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true
I18n.translations = basicTranslations;

class VideoPage extends Component {

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
    this.time = ['5m', '8m', '10m'];
    this.timeInSeconds = [30, 45, 60];
    this.totalTime = this.timeInSeconds[this.props.option] * 10;
    this.videos = [
      require('../../../video/video00.mp4'), // TODO clean
      require('../../../video/jumpingjack.mp4'),
      require('../../../video/wallsit.mp4'),
      require('../../../video/pushupeasy.mp4'),
      require('../../../video/crunch.mp4'),
      require('../../../video/stepup.mp4'),
      require('../../../video/squat.mp4'),
      require('../../../video/tricepsdips.mp4'),
      require('../../../video/plank.mp4'),
      require('../../../video/highkneesslow.mp4'),
      require('../../../video/lunge.mp4'),
    ];
    this.videosWithEnding = [2, 8];
    this.rutines = [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      [10, 9, 5, 4, 5, 6, 7, 8, 9, 10],
    ]
    
    
    this.state = {
        previousTime: 3,
        currentTime: 0, // the time for the current video/exercise
        timeToDisplay: 0, // should be the integer amount of currentTime
        elapsedTime: 0, // sume of all the times (in each video)
        progress: 0,
        currentVideo: 1,
        paused: false,
    };
    this.interval = null;
  }
  
  getVideoURL() {
    if (this.state.currentVideo >= this.videos.length) {
      return this.videos[0];
    } else {
      var rutine = this.rutines[this.props.level];
      return this.videos[ rutine[this.state.currentVideo-1] ];
    }
  }
  
  getRepeatVideoValue() {
    return (this.videosWithEnding.indexOf( this.state.currentVideo) == -1);
  }
  
  changeVideo() {
    this.setState({elapsedTime: this.state.elapsedTime + this.state.currentTime });
    if (this.state.currentVideo >= 10) {
      clearInterval(this.timeInterval);
      this.props.popRoute(this.props.navigation.key);
      this.props.popRoute(this.props.navigation.key);
      this.props.pushRoute({ key: 'RoutineCompleted', index: 0, elapsedTime: this.state.elapsedTime, totalTime: this.totalTime }, this.props.navigation.key);
    } else {
      this.setState({currentVideo: this.state.currentVideo + 1 });
      // Reset time 
      this.setState({currentTime: 0 });
      this.setState({previousTime: 3 });
    }
    
  }
  
  updateTime() {
    if (this.state.previousTime > 0) {
      this.setState({previousTime: this.state.previousTime - 0.2 });
    } else {
      this.setState({currentTime: this.state.currentTime + 0.2 });
      this.setState({timeToDisplay: parseInt( this.state.currentTime )});
      if (this.state.currentTime >= this.timeInSeconds[this.props.option]) {
        this.changeVideo();
      }
    }
  }
  
  updateProgressBar() {
    var _progress = this.state.currentTime / this.timeInSeconds[this.props.option];
    this.setState({progress: _progress});
  }

  componentDidMount() {
    this.createInterval();
    
  }
  
  createInterval() {
    this.timeInterval = TimerMixin.setInterval( () => {
      this.updateTime();
      this.updateProgressBar();
    }, 200);
  }
  
  componentWillUnmount() {
    clearInterval(this.timeInterval);
    
  }
  
  pauseOrPlay() {
    if (this.state.paused) {
      this.createInterval();
    } else {
      clearInterval(this.timeInterval);
    }
    this.setState({paused: !this.state.paused})
  }
  
  getProgressText() {
    if (this.state.previousTime > 0) {
      var dots = 3 - parseInt (this.state.previousTime);
      var _s = "Be ready ";
      for(var i = 0; i<dots; i++) {
        _s += ".";
      }
      return _s;
    } else {
      return this.state.timeToDisplay + " / " + this.timeInSeconds[this.props.option];
    }
  }
  
  controlButtonName() {
    if (this.state.paused) {
      return "ios-play"
    } else {
      return "ios-pause"
    }
  }
  
  popRoute() {
    Alert.alert(
      I18n.t('videoPage.exitTitle'),
      I18n.t('videoPage.exitMessage'),
      [
        {text: I18n.t('videoPage.exitCancel'), onPress: () => console.log('Cancel Pressed!')},
        {text: I18n.t('videoPage.exitOK'), onPress: () => this.props.popRoute(this.props.navigation.key)},
      ]
    );
    
  }

  render() {
    const { props: { name, index, list, language } } = this;

    return (
      <Container theme={myTheme} style={styles.container}>
        <Header>
          <Button transparent onPress={() => this.popRoute()}>
            <Icon name="ios-arrow-back" />
          </Button>

          <Title>{I18n.t('videoPage.title')}</Title>

        </Header>
        
        <Image source={imageBG} style={{flex: 1, width: null, height: null}}>
        <Content>
          
          <Video 
            source={this.getVideoURL()}
             rate={1.0}                     // 0 is paused, 1 is normal.
             volume={1.0}                   // 0 is muted, 1 is normal.
             muted={true}                  // Mutes the audio entirely.
             paused={this.state.paused}     // Pauses playback entirely.
             resizeMode="contain"           // Fill the whole screen at aspect ratio.
             repeat={this.getRepeatVideoValue()}                  // Repeat forever.
             playInBackground={false}       // Audio continues to play when app entering background.
             playWhenInactive={false}       // [iOS] Video continues to play when control or notification center are shown.
             progressUpdateInterval={250.0} // [iOS] Interval to fire onProgress (default to ~250ms)
             onLoadStart={this.loadStart}   // Callback when video starts to load
             onLoad={this.setDuration}      // Callback when video loads
             onProgress={this.setTime}      // Callback every ~250ms with currentTime
             onEnd={this.onEnd}             // Callback when playback finishes
             onError={this.videoError}      // Callback when video cannot be loaded
             style={styles.backgroundVideo} />
          
          <View style={styles.progressContainer}>
            <View style={styles.progressContent}>
              <Button bordered rounded small style={styles.controlButton} onPress={() => this.pauseOrPlay()}>
                <Icon name={this.controlButtonName()} style={{fontSize: 12}} />
              </Button>
              <View style={styles.barContainer}>
                <Progress.Bar progress={this.state.progress} color={"#ff0040"} width={250} height={22} style={styles.progressBar} />
                <Text style={styles.viewProgress}>
                  {this.getProgressText()}
                </Text>
              </View>
              <Button bordered rounded small style={styles.controlButton} onPress={() => this.changeVideo()}>
                <Icon name='ios-arrow-forward' style={{fontSize: 12}} />
              </Button>
            </View>
          </View>
          
          <Card style={{ margin: 10, backgroundColor: '#00000000', borderColor: '#90818c', borderWidth: 2, }}>
            
            <CardItem header style={{backgroundColor: '#00000033'}}>
              <Text style={{color: '#ff0040'}}>
                  {I18n.t('exercises')[this.state.currentVideo-1].title} ({this.state.currentVideo}/10)
              </Text>
            </CardItem>
            
            {I18n.t('exercises')[this.state.currentVideo-1].instructions.map((item, i) =>
            <CardItem key={i}>
              <Text style={{color: 'white'}}>{item}</Text>
            </CardItem>
            )}
            
          </Card>

        </Content>
        </Image>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    popRoute: key => dispatch(popRoute(key)),
    pushRoute: (route, key) => dispatch(pushRoute(route, key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  language: state.user.language,
  name: state.user.name,
  index: state.list.selectedIndex,
  list: state.list.list,
});


export default connect(mapStateToProps, bindAction)(VideoPage);
