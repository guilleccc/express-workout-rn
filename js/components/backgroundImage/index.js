import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native'

const imageBG = require("../../../images/bg.png");
const window = Dimensions.get('window');

class BackgroundImage extends Component {
  constructor(props) {
    super(props);
    
  }
  componentWillMount() {
    
  }
  render() {
    const {children, style, ...props} = this.props
    return (
      <Image source={imageBG}
             style={{flex: 1,
                     width: null,
                     height: null
        }}
             >
        {super.render()}
      </Image>
    )
  }
}
BackgroundImage.propTypes = {
  children: React.PropTypes.object,
  style: React.PropTypes.object
}
export default BackgroundImage