import { Provider } from "react-redux";
import Jugadores from "./components/Jugadores";
import EquipoSeleccionado from "./components/EquipoSeleccionado";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <main>
      <h1>Manager App</h1>
      <Jugadores />
      <EquipoSeleccionado />
    </main>
  </Provider>
);

export default App;
