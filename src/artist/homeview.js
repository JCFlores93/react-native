import React from 'react';
import { StyleSheet, View } from 'react-native';

import ArtistList from './artistlist'
import { getArtists } from '../services/api-client'

export default class HomeView extends React.Component {
    
    state = {
        artists: []
    }

    componentDidMount() {
        getArtists()
            .then(data => {
                console.warn('en app', data)
                this.setState({
                    artists: data
                })
            })
    }

    
    render() {
        const artists = this.state.artists          
        return (
            <View style={styles.container}>
                <ArtistList
                    artists={artists} />
                {/*            
            <View style={[styles.box, styles.red]}/>
                <View style={styles.yellow}/>
                <View style={styles.green}/>
                <Button
                    onPress={onPressLearnMore}
                    title="Learn More"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
                <Text>Jean Carlo!</Text>
                <Text>Open up App.js to start working on your app!</Text>
                <Text>Changes you make will automatically reload.</Text>
                <Text>Shake your phone to open the developer menu.</Text>
                */}
            </View>


        );
    }
}
/*showAlert = () => {
    // Works on both iOS and Android
    Alert.alert(
        'Alert Title',
        'My Alert Msg',
        [
            { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
            { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false }
    )
}
onPressLearnMore = event => {
    console.log("React Native " + event)
    /*Alert.alert(
        'Alert Title',
        'My Alert Msg',
        [
            { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
            { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false }
    )
    showAlert()
}*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
        paddingTop: 50,
    },
   
});