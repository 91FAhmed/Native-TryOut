import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import Styles from "@/app/styles";

export default function FancyCard() {
  return (
    <View>
      <Text style={Styles.heading}>Trending places</Text>
      <View style={Styles.fancyCard}>
        <View style={[Styles.container]}>
          <Image
            style={Styles.cardImage}
            source={{ uri: "https://shorturl.at/6dcOr" }}
          />
        </View>
        <Text style={Styles.title}>Keukenhof Flower garden</Text>
        <Text style={Styles.label}>Netherlands.</Text>
        <Text style={Styles.content}>
          Keukenhof is located in the province of South Holland, south of
          Haarlem and southwest of Amsterdam in the area called the "Dune and
          Bulb Region" (Duin- en Bollenstreek). It is accessible by bus from
          Haarlem and Leiden train stations as well as Schiphol. Though its
          grounds are open year-round for private affairs and festivals,
          Keukenhof is only open to the general public for a world-renowned
          eight week tulip display from mid-March to mid-May.
        </Text>
      </View>
    </View>
  );
}
