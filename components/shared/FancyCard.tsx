import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import Styles from "@/app/styles";
import ActionCard from "./ActionCard";

type fancyProps = {
  ImageUri: string;
  ImageTitle: string;
  ImageLabel: string;
  ImageContent: string;
  learn: string;
};

export default function FancyCard(props: fancyProps) {
  return (
    <View>
      <View style={Styles.fancyCard}>
        <View style={[Styles.container]}>
          <Image style={Styles.cardImage} source={{ uri: props.ImageUri }} />
        </View>
        <Text style={Styles.title}>{props.ImageTitle}</Text>
        <Text style={Styles.label}>{props.ImageLabel}</Text>
        <Text style={Styles.content}>{props.ImageContent}</Text>
        <ActionCard link={props.learn} />
      </View>
    </View>
  );
}
