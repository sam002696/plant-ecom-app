import AppNavigation from "./src/navigation";
import { ModalPortal } from "react-native-modals";
import store from "./src/reducers/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <AppNavigation />
        <ModalPortal />
      </Provider>
    </>
  );
}
