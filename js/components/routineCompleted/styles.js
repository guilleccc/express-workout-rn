
const React = require('react-native');

const { StyleSheet } = React;

module.exports = StyleSheet.create({
  container: {
    backgroundColor: '#FBFAFA',
  },
  backgroundVideo: {
    height: 300
  },
  progressContainer: {
    height: 220,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  textCalories: {
    position: 'absolute', 
    top: 0, 
    left: 0, 
    right: 0, 
    bottom: 0, 
    justifyContent: 'center', 
    alignItems: 'center', 
  }
});
