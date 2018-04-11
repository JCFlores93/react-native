import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image, ScrollView, ListView } from 'react-native';
import HomeView from './src/artist/homeview'
import ArtistDetail from './src/artist/artistdetail'
import { getArtists } from './src/services/api-client'
import { Scene, Router } from 'react-native-router-flux'
import { platform } from 'os';

export default class App extends React.Component {

    render() {

        const isAndroid = Platform.OS === 'android'
        console.warn("isAndroid ", isAndroid)
        return <Router>
            <Scene key="root">
                <Scene key="home" component={HomeView} hideNavBar/>
                <Scene key="artistDetail" component={ArtistDetail} hideNavBar={isAndroid}/>
            </Scene>
        </Router>
    }
}



