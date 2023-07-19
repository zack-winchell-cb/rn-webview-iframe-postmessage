import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  return (
    <View style={styles.container}>
      <WebView
        onMessage={function(event) {
          try {
            const parsed = JSON.parse(
              event.nativeEvent.data
            );
            console.table({ parsed });
          } catch (error) {
            console.error('Error parsing message as JSON in RNVW', error)
          }
        }}
        source={{
          uri: "http://localhost:8080/parent-iframe.html",
        }}
        style={{
          flex: 1,
          borderColor: '#000',
          borderWidth: '4px',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'row'
  },
});
