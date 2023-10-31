import AppNavigation from "./src/navigation";
import { ModalPortal } from "react-native-modals";

export default function App() {
  return (
    <>
      <AppNavigation />
      <ModalPortal />
    </>
  );
}
