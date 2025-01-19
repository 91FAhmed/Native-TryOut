import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Button,
  Linking,
  TouchableOpacity,
} from "react-native";

export default function ActionCard(props: { link: string }) {
  return (
    <View>
      <Button title="Learn More" onPress={() => Linking.openURL(props.link)} />
    </View>
  );
}
