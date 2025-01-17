import React from "react";
import {
  View,
  ScrollView,
  Text,
  SafeAreaView,
  useColorScheme,
} from "react-native";
import Styles from "./styles";
import FlatCards from "@/components/shared/FlatCards";
export default function index() {
  const isDark = useColorScheme() === "dark";
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
      </ScrollView>
    </SafeAreaView>
  );
}
