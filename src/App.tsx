import "./App.css";
import Routing from "./pages/Routes";
import AppProviders from "./common/providers/AppProviders";

function App() {
  return (
    <AppProviders>
      <Routing />
    </AppProviders>
  );
}

export default App;
