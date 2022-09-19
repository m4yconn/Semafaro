import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground} from 'react-native';
import Painel from './src/components/Painel';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground 
        style = {{
          width: '100%',
          height: '100%',
          alignItems: 'center',
        }}
        source = {require('./assets/rua.jpg')}
      >
        <Painel/>
      </ImageBackground>
      <StatusBar style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
