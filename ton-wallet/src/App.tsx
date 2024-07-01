import Slider from "./components/Slider";
// import BallAnimation from "./components/BallAnimation";
import WalletDetails from "./components/WalletDetails";
// import TelegramWrapper from "./components/TelegramWrapper";
import Provider from "./components/Provider";
import "./App.css";
import WalletConnect from "./components/WalletConnect";
import { useState } from "react";
import SetAddress from "./components/SetAddress";
import AddressInputModal from "./components/modal/AddressInputModal";

function App() {
  const [isModal, setIsModal] = useState<boolean>(false);
  return (
    <div className="flex flex-col items-center w-full">
      <Provider>
        {/* <TelegramWrapper> */}
        <AddressInputModal isModal={isModal} setIsModal={setIsModal} />
        <div>
          <p>A quick demo with animations and ton sdk in telegram</p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and Preact logos to learn more
        </p>
        <Slider />
        <div className="flex flex-col items-center w-full">
          <WalletDetails />
          <WalletConnect />
          <SetAddress setIsModal={setIsModal} />
        </div>
        {/* </TelegramWrapper> */}
      </Provider>
    </div>
  );
}

export default App;
