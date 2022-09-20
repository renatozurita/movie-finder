import { StyleSheet, StatusBar, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "./components/Header";
import Nav from "./components/Nav";
import MovieSearch from "./views/MovieSearch";
import { NativeRouter, Routes, Route } from "react-router-native";
import Home from "./views/Home";
import MovieDetails from "./views/MovieDetails";

export default function App() {
  return (
    <SafeAreaProvider>
      <NativeRouter>
        <SafeAreaView style={styles.container}>
          <Header />
          <Nav />

          <View style={styles.content}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<MovieSearch />} />
              <Route path="/movies/:movieId" element={<MovieDetails />} />
            </Routes>
          </View>
        </SafeAreaView>
      </NativeRouter>

      <StatusBar barStyle="light-content" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkblue",
  },
  content: {
    flex: 1,
    backgroundColor: "black",
  },
});
