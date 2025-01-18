import React from "react";
import { View, Text, ScrollView } from "react-native";
import Styles from "@/app/styles";

export default function FlatCards() {
  return (
    <View>
      <ScrollView>
        <Text style={Styles.heading}>Flat Cardss</Text>
        <View style={Styles.container}>
          <View style={[Styles.card, Styles.cardOne]}>
            <Text style={{ fontSize: 20, color: "#212121" }}>Red</Text>
          </View>
          <View style={[Styles.card, { backgroundColor: "#19e6a6" }]}>
            <Text style={{ fontSize: 20, color: "#212121" }}>Green</Text>
          </View>
          <View style={[Styles.card, { backgroundColor: "#1257ed" }]}>
            <Text style={{ fontSize: 20, color: "#212121" }}>Blue</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
