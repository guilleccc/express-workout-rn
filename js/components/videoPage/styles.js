
const React = require('react-native');

const { StyleSheet } = React;

module.exports = StyleSheet.create({
  container: {
    
  },
  backgroundVideo: {
    height: 250,
    alignItems: "stretch",
    backgroundColor: '#00000033'
  },
  progressContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  progressContent: {
    flexDirection: "row",
  },
  controlButton: {
    height: 24,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 0,
  },
  barContainer: {
    width: 250,
    alignItems: "center",
  },
  progressBar: {
    position: "absolute",
  },
  viewProgress: {
    marginTop: 2,
    color: "#fff"
  },
});
