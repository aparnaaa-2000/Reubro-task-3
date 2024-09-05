import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';''
import { DATA } from './data';

const Main = ()=>{
    const renderItem = ({ item }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      );
return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      initialNumToRender={10} // Render the first 10 items initially
      windowSize={5} // Number of items to render outside of the visible area
      maxToRenderPerBatch={10} // Number of items rendered per batch
      updateCellsBatchingPeriod={50} // Time in milliseconds for batch updates
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 16,
  },
});

export default Main;