import React from "react";
import { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  Button,
  Linking,
  Touchable,
  TouchableOpacity,
} from "react-native";
import Styles from "@/app/styles";
interface apiProps {
  first: string;
}

export default function ContactCard() {
  return (
    <View>
      <View
        style={[
          Styles.container,
          Styles.Contact,
          { backgroundColor: "#487EB0" },
        ]}
      >
        <View style={[Styles.container, Styles.spacer]}>
          <Image
            style={Styles.profile}
            source={{ uri: "https://avatar.iran.liara.run/public" }}
          />
          <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 8 }}>
            Faraz
          </Text>
        </View>
        <Button
          title="contact me!"
          onPress={() => Linking.openURL("https://github.com/91FAhmed/")}
        />
      </View>
      <View style={[Styles.container, Styles.Contact]}>
        <View style={[Styles.container, Styles.spacer]}>
          <Image
            style={Styles.profile}
            source={{ uri: "https://avatar.iran.liara.run/public" }}
          />
          <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 8 }}>
            Josh
          </Text>
        </View>
        <Button
          title="contact me!"
          onPress={() => Linking.openURL("https://github.com/91FAhmed/")}
        />
      </View>
      <View
        style={[
          Styles.container,
          Styles.Contact,
          { backgroundColor: "#45CE30" },
        ]}
      >
        <View style={[Styles.container, Styles.spacer]}>
          <Image
            style={Styles.profile}
            source={{ uri: "https://avatar.iran.liara.run/public" }}
          />
          <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 8 }}>
            Maddison
          </Text>
        </View>
        <Button
          title="contact me!"
          onPress={() => Linking.openURL("https://github.com/91FAhmed/")}
        />
      </View>
    </View>
  );
}
