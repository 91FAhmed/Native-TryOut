import React from "react";
import { ScrollView, View, Text } from "react-native";
import Styles from "@/app/styles";

export default function ScrollableCards() {
  return (
    <View>
      <Text style={Styles.heading}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={Styles.container}>
        <View
          style={[
            Styles.card,
            {
              elevation: 8,
              shadowColor: "#52006A",
              backgroundColor: "#171717",
              shadowOffset: {
                width: 1,
                height: 1,
              },
              shadowOpacity: 0.4,
            },
          ]}
        >
          <Text>🍵</Text>
        </View>
        <View
          style={[
            Styles.card,
            {
              elevation: 3.6,
              shadowColor: "#52006A",
              backgroundColor: "#171717",
            },
          ]}
        >
          <Text>✈️</Text>
        </View>
        <View
          style={[
            Styles.card,
            {
              elevation: 3.6,
              shadowColor: "#52006A",
              backgroundColor: "#171717",
            },
          ]}
        >
          <Text>🌿</Text>
        </View>
        <View
          style={[
            Styles.card,
            {
              elevation: 3.6,
              shadowColor: "#52006A",
              backgroundColor: "#171717",
            },
          ]}
        >
          <Text>🫂</Text>
        </View>
      </ScrollView>
    </View>
  );
}
