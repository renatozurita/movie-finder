import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { useParams } from "react-router-native";
import axios from "axios";
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

const API = "https://private.omdbapi.com/?apikey=bef9c583&i=";

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    effect();
  }, []);

  const effect = async () => {
    try {
      const res = await axios.get(API + movieId);

      if (res.data.Response === "True") {
        setMovie(res.data);
      } else {
        setMovie("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // traer peli del servidor usando movieId
  // guardar peli en estado
  // mostrar detalles de la peli

  // useEffect

  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>{movie.Title}</Text>
      <Image
        source={{ uri: movie.Poster }}
        style={{ width: 200, height: 200, borderRadius: 15 }}
      />
      <Text style={styles.text}>{movie.Year}</Text>
      <Text style={styles.text}>{movie.Released}</Text>
      <Text style={styles.text}>{movie.Genre}</Text>
      <Text style={styles.text}>{movie.Language}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  text: {
    color: "white",
    justifyContent: "center",
  },
  searchBar: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
  },
  inputSearch: {
    borderWidth: 1,
    width: 200,
    padding: 10,
    borderRadius: 15,
    marginRight: 10,
    borderColor: "white",
    color: "white",
  },
});
