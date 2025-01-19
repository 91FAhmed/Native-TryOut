import React from "react";
import { View, ScrollView, Text, SafeAreaView } from "react-native";
import ScrollableCards from "@/components/shared/ScrollableCards";
import FlatCards from "@/components/shared/FlatCards";
import FancyCard from "@/components/shared/FancyCard";
import ActionCard from "@/components/shared/ActionCard";
import ContactCard from "@/components/shared/ContactCard";
import Styles from "./styles";
import data from "./cardData.json";
export default function index() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ScrollableCards />
        <Text style={Styles.heading}>Trending places</Text>
        {data.map((card, i) => (
          <FancyCard
            key={i}
            ImageUri={card.imageUri}
            ImageLabel={card.imageLabel}
            ImageTitle={card.title}
            ImageContent={card.imageContent}
            learn={card.learn}
          />
        ))}
        <Text style={Styles.heading}>Contact Cards</Text>
        <ContactCard />
      </ScrollView>
    </SafeAreaView>
  );
}
