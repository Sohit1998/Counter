import {Text, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import style from './ReactNavigationStyle';
export class ReactNavigation extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={style.primaryCont}>
        {/* <View style={style.headCont}>
          <Text style={style.heading}>DASHBOARD</Text>
        </View> */}
        <View style={style.buttonCont}>
          <TouchableOpacity
            style={style.link}
            onPress={() =>
              navigation.navigate('MovieDetailsScreen')
            }>
            <Text style={style.btnText}>MovieDetailsScreen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.link}
            onPress={() => navigation.navigate('COLOR VIEWER')}>
            <Text style={style.btnText}>ColorApp</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.link}
            onPress={() => navigation.navigate('COUNTER')}>
            <Text style={style.btnText}>Counter</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.link}
            onPress={() => navigation.navigate('WEBVIEW')}>
            <Text style={style.btnText}>WebView</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.link}
            onPress={() => navigation.navigate('SLIDER')}>
            <Text style={style.btnText}>Slider</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.link}
            onPress={() => navigation.navigate('SECTIONLIST')}>
            <Text style={style.btnText}>SectionList</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.link}
            onPress={() => navigation.navigate('CLIPBOARD')}>
            <Text style={style.btnText}>Clipboard</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.link}
            onPress={() => navigation.navigate('ANIMATIONS')}>
            <Text style={style.btnText}>Animations</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


export default ReactNavigation;
