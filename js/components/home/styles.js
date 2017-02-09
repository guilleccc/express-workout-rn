
const React = require('react-native');

const { StyleSheet } = React;

module.exports = StyleSheet.create({
  container: {
    
  },
  content: {
    
    
  },
  row: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 15,
    alignItems: 'center',
  },
  mt: {
    marginTop: 18,
  },
  
  footer: {
    flex: 1,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor:'#1e2b49',
    alignSelf: 'flex-end',
    borderColor: '#1e2b49',
  },

  footerText: {
    color:'white',
    backgroundColor:'#1e2b49',
    alignItems:'center',
    fontSize: 20,
    zIndex: 10,
    bottom: 100,
    right: 0,
    position: 'absolute',
    padding: 5,
    fontFamily: 'Cochin'
  },
});
