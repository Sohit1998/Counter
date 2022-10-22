import { View, Text, SafeAreaView, ActivityIndicator } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { WebView } from 'react-native-webview';
// import { SafeAreaView } from 'react-native-safe-area-context';

const WebViewNative = () => {

    const [loading, setLoading] = useState(true);


  return (
    <SafeAreaView style= {{flex:1}}>
      {loading && <ActivityIndicator size= 'large' style= {{  height: '100%', color:'blue', backgroundColor: 'orange'}}></ActivityIndicator>}
      <WebView
        source={{
          uri: 'https://github.com/facebook/react-native'
        }}
        onLoadEnd= {() => setLoading(false)}
        style={{ marginTop: 20 }}
      />
    </SafeAreaView>
  )
}

export default WebViewNative;