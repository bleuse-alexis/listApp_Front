import React, { useEffect, useContext } from "react";

import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
} from "react-native";

import Feather from "react-native-vector-icons/Feather";

import { ListContext } from "../../context/ListContext";

export default function List() {
  const { value, fetchAndSetList, updateCheckState, deleteArticle } =
    useContext(ListContext);

  useEffect(() => {
    if (value !== null) fetchAndSetList({ account: value.account });
  }, []);

  if (value !== null) {
    return (
      <ScrollView>
        {value.article.map((item, index) => (
          <View style={styles.listContainer} key={index}>
            {item.image.length > 0 && (
              <View style={styles.image}>
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    resizeMode: "contain",
                  }}
                  source={{ uri: item.image }}
                />
              </View>
            )}
            <View style={styles.articleContainer}>
              <View style={styles.article}>
                <Text>{item.name}</Text>
              </View>
              <View style={styles.brand}>
                <Text>{item.brand}</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => updateCheckState(item._id)}
              style={styles.icons}
            >
              {item.state ? (
                <Feather name="check-square" color="grey" size={20} />
              ) : (
                <Feather name="square" color="grey" size={20} />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.icons}
              onPress={() => deleteArticle(item._id)}
            >
              <Feather name="trash" color="grey" size={20} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "5%",
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },

  articleContainer: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingLeft: "2%",
  },

  icons: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
  },
  article: {
    flex: 1,
  },
  brand: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
});
