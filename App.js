
import { StyleSheet} from 'react-native';
import { Quadrado } from './src/components';

export default function App() {
  return (
    <Quadrado />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
