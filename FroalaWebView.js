import React, {Component} from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Markdown from 'react-native-showdown';
import froalaCss from './froala_style.js';

const window = Dimensions.get('window');
const styles = StyleSheet.create({
  htmlContainer: {
    height: window.height,
    overflow: 'hidden',
  },
});

const FroalaWebView = (props) => {
  const { html } = props;
  const prediv = `<div class="fr-view">`;
  const postdiv = `</div>`;
  const content = prediv.concat(html, postdiv);
  console.log(html);
  return (
    <View style={styles.htmlContainer}>
      <Markdown
         body={ content }
         pureCSS={ froalaCss }/>
    </View>
  );
}

FroalaWebView.propTypes = {
  html: React.PropTypes.object,
}
export default FroalaWebView;
