/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import LottieView from 'lottie-react-native';

const App = () => {
  return (
    <Fragment>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <ScrollView>
        <View style={styles.body}>
          <Text>This is a Car Animation</Text>
          <LottieView source={require('./assets/car.json')} autoPlay loop style={{height: 200}}/>
          <Text>This is a Person moving</Text>
          <LottieView source={require('./assets/person.json')} autoPlay loop style={{height: 200}}/>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry. Lorem Ipsum has been the industry's standard dummy text 
            ever since the 1500s, when an unknown printer took a galley of 
            type and scrambled it to make a type specimen book. It has survived 
            not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the
             release of Letraset sheets containing Lorem Ipsum passages, and more 
             recently with desktop publishing software like Aldus PageMaker 
             including versions of Lorem Ipsum.
          </Text>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry. Lorem Ipsum has been the industry's standard dummy text 
            ever since the 1500s, when an unknown printer took a galley of 
            type and scrambled it to make a type specimen book. It has survived 
            not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the
             release of Letraset sheets containing Lorem Ipsum passages, and more 
             recently with desktop publishing software like Aldus PageMaker 
             including versions of Lorem Ipsum.
          </Text>
        </View>
        </ScrollView>
       </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    //backgroundColor: 'yellow',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  },
  
});

export default App;
