import React from "react";
import { View, ScrollView, Text, SafeAreaView } from "react-native";
import ScrollableCards from "@/components/shared/ScrollableCards";
import FlatCards from "@/components/shared/FlatCards";
import FancyCard from "@/components/shared/FancyCard";
export default function index() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ScrollableCards />
        <FancyCard />
      </ScrollView>
    </SafeAreaView>
  );
}
