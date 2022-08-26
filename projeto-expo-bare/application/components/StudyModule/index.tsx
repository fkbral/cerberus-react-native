import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import uuid from 'react-native-uuid'

export const StudyModule = () => {
  const [topics, setTopics] = useState([
    {
      id: "d5a0d952-126e-4cf0-add6-cb62b1e6468e",
      name: "Loops",
    },
    {
      id: "611a4851-7f89-45a8-be25-7b6bc7a66cc6",
      name: "Arrays",
    },
    {
      id: "d14b1466-fdd2-4acd-8ae0-6e1cb1ee059a",
      name: "Objetos",
    },
  ])

  return (
    <View style={styles.container}>
      <Text style={styles.module}>Lógica de Programação</Text>

      {/* <View>
        {topics.map(topic => <Text key={topic.id}>{topic.name}</Text>)}
      </View> */}

      <FlatList
        data={topics}
        keyExtractor={(item) => item.id}
        style={styles.topics}
        renderItem={(topic) => (
          <Text style={styles.topicsText}>{topic.item.name}</Text>
        )}
      />

      {/* <View style={styles.test}>
        <Text>Teste</Text>
      </View> */}
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: "auto",
    // flexDirection: 'row',
    // alignItems: 'center',
    marginTop: 70,
    marginLeft: 15,
    // justifyContent: 'center',
  },
  test: {
    backgroundColor: "red",
    marginHorizontal: "auto",
    width: 100,
  },
  module: {
    fontSize: 22,
  },
  topics: {
    marginLeft: 6,
  },
  topicsText: {
    color: 'teal',
    fontSize: 18,
  },
});
