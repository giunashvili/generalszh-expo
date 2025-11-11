import { Image } from "expo-image";
import { StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2732960/header.jpg"
          }
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Generals: Zero Hour</ThemedText>
        <ThemedText type="title">---</ThemedText>
        <ThemedText type="title">{process.env.EXPO_PUBLIC_APP_NAME}</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: "center",
    alignContent: "center",
  },
  reactLogo: {
    height: "100%",
    width: "100%",
    objectFit: "contain",
  },
});
