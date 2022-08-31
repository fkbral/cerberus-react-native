import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useCallback, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableNativeFeedback,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import uuid from "react-native-uuid";

type Topic = {
  id: string;
  name: string;
};

export const StudyModule = () => {
  const [topics, setTopics] = useState<Topic[]>([]);

  const [topicInput, setTopicInput] = useState("");

  useEffect(() => {
    async function getStoredTopics() {
      const storedTopicsJSONString = await AsyncStorage.getItem(
        "@AdaApp/studyTopics"
      );
      setTopics(JSON.parse(storedTopicsJSONString));
    }

    getStoredTopics();
  }, []);

  async function handleAddTopic() {
    if (!topicInput) {
      return;
    }

    setTopics((previousTopics) => {
      const topicsToSave = [
        ...previousTopics,
        { id: uuid.v4() as string, name: topicInput },
      ];

      return topicsToSave;
    });

    await AsyncStorage.setItem(
      "@AdaApp/studyTopics",
      JSON.stringify([...topics, { id: uuid.v4() as string, name: topicInput }])
    );

    // setTopics([...topics, { id: uuid.v4() as string, name: topicInput }]);
    setTopicInput("");
  }

  // const handleAddTopic = useCallback(() => {
  //   if (!topicInput) {
  //     return;
  //   }

  //   setTopics((previousTopics) => [
  //     ...previousTopics,
  //     { id: uuid.v4() as string, name: topicInput },
  //   ]);

  //   // setTopics([...topics, { id: uuid.v4() as string, name: topicInput }]);
  //   setTopicInput("");
  // }, [setTopics, setTopicInput, topicInput, topics]);

  return (
    <View style={styles.container}>
      <Text>Entre com um novo Tópico</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do novo Tópico"
        onChangeText={(text) => setTopicInput(text)}
        onSubmitEditing={handleAddTopic}
        value={topicInput}
      />

      {Platform.OS === "ios" ? (
        <TouchableOpacity
          onPress={handleAddTopic}
          style={{ backgroundColor: "teal" }}
        >
          <View style={{ backgroundColor: "teal" }}>
            <Text style={styles.buttonText}>Adicionar</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableNativeFeedback
          onPress={handleAddTopic}
          style={{ backgroundColor: "teal" }}
        >
          <View style={{ backgroundColor: "teal" }}>
            <Text style={styles.buttonText}>Adicionar</Text>
          </View>
        </TouchableNativeFeedback>
      )}

      <Text style={styles.module}>Lógica de Programação</Text>

      <ScrollView horizontal style={{ height: 32, flexDirection: "row" }}>
        {topics.map((topic) => (
          <Text style={{ marginRight: 6 }} key={topic.id}>
            {topic.name}
          </Text>
        ))}
      </ScrollView>

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
  );
};

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
  input: {
    backgroundColor: "#dedede",
    height: 36,
    width: 240,
  },
  module: {
    fontSize: 22,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  topics: {
    marginLeft: 6,
  },
  topicsText: {
    color: "teal",
    fontSize: 18,
  },
});
