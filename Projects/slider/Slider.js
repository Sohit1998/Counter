import { Text, View, StyleSheet, Switch } from 'react-native'
import React, { Component, useState } from 'react'
import Slider from '@react-native-community/slider';
import { SafeAreaView } from 'react-native-safe-area-context';

const WebViewSlider = () => {

    const [showSlider, setShowSlider] = useState(false);
    const [value, setValue] = useState(0);
    return (
        <View >
            <View style={styles.mainContainer}>

            <Switch
                value={showSlider}
                style={styles.switchBtn}
                onValueChange={(switchValue) => setShowSlider(switchValue)} />
            </View>
            {showSlider && <View>
                <Text style= {{textAlign: 'center'}}>
                    {value}
                </Text>
                <Slider
                style= {styles.sliderBar}
                    maximumValue={100}
                    minimumValue={0}
                    step={1}
                    minimumTrackTintColor="purple"
                    maximumTrackTintColor="black"
                    value={value}
                    onValueChange={sliderValue => setValue(sliderValue)}
                /></View>}
        </View>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
    },
    switchBtn: {
        alignItems: 'center',
    },
    sliderBar: {
        width: '100%'
    }
})

export default WebViewSlider;