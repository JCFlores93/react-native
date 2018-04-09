import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
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
            </View>
        );
    }
}
showAlert = () => {
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
    )*/
    showAlert()
}
const styles = StyleSheet.create({
    container: {
        //1 : para que ocupe toda la pantalla, 0 se ajusta al tamaño de los hijos
        flex: 0,
        //se agrupan en una fila
        flexDirection: 'column',
        //como se alinean los elementos en el eje que yo indiqué
        justifyContent: 'center',
        //alinear los elementos
        alignItems: 'center',
        backgroundColor: '#fff',
        flexWrap: 'wrap'
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'black'
    },
    red: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
   },
    green: {
        width: 100,
        height: 100,
        backgroundColor: 'green'
    },
    yellow: {
        width: 100,
        height: 100,
        backgroundColor: 'yellow'
    }

});