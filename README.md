# FroalaWebView

React Native component to display your markup/html in a web view for [Froala WYSIWYG Editor.](https://www.froala.com/wysiwyg-editor)

## Requirements

1. [React Native](https://facebook.github.io/react-native/)

## Install

`npm install --save react-native-froala-webview`

## Example

```javascript
import React, { Component } from 'react';
import FroalaWebView from 'react-native-froala-webview';

class Home extends Component {
  render(){
    const {html} =  this.props; /*get your html code any way you want*/
    return (
      <FroalaWebView html={html} />
    );
  }
}
export default Home;
```
## Contribute

Please contribute

### Pipeline:

1. Add a style property
2. Add testing
3. Add FroalaWebEditor
