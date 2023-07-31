import { PaperProvider } from "react-native-paper";
import StackNavigator from "./routes/StackNavigator";

export default function App() {
  return (
    <PaperProvider>
      <StackNavigator />
    </PaperProvider>
  );
}
