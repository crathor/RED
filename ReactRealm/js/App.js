/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import { createAnItem, getItems, removeItem } from './config/model'

export default class App extends Component {
  state = {
    items: [],
    nextId: 0
  }
  componentDidMount() {
    this.setState({ items: getItems() })
  }
  createItem() {
    createAnItem(this.state.nextId, 'skyblue')
    this.setState(prevState => ({ nextId: prevState.nextId + 1 }))
  }
  removeItem(id) {
    removeItem(id)
    this.setState({ items: getItems().sorted('id') })
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.createItem()
          }}
          activeOpacity={0.8}
        >
          <Text style={styles.button}>Create an item</Text>
        </TouchableOpacity>
        <ScrollView>
          {this.state.items.length > 0 &&
            this.state.items.map(item => (
              <TouchableOpacity
                key={item.id}
                onPress={() => this.removeItem(item.id)}
              >
                <Text style={[styles.item, { backgroundColor: item.color }]}>
                  {item.name} {item.color || ''}
                </Text>
              </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 40,
    padding: 10
  },
  button: {
    width: '70%',
    marginLeft: '15%',
    padding: 8,
    backgroundColor: '#999999',
    color: '#ffffff'
  },
  item: {
    width: '100%',
    padding: 8,
    margin: 2
  }
})
