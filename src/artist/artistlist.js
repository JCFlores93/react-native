import React, { Component } from 'react';
import { StyleSheet, ListView } from 'react-native'
import ArtistBox from './artistbox'

export default class ArtistList extends Component {

    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        this.state = {
            dataSource: ds
        }

    }

    componentDidMount() {
        this.updateDataSource(props.artists)
    }

    componentWillReceiveProps(newProps) {
        if (newProps.artists !== this.props.artists) {
            this.updateDataSource(newProps.artists)
        }
    }

    updateDataSource = (data) => {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(data)
        })
    }
    render() {


        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(artist) => <ArtistBox
                    artist={artist}
                />}

            >
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
            </ListView>
        );
    }
}
