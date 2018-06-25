import { View, AppRegistry } from 'react-native';
import React from 'react';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => (
    <View>
     <Header headerText={'Albums'}/>
     <AlbumList/>
    </View>
);

AppRegistry.registerComponent('albums', () => App);
