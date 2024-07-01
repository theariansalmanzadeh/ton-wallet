import Slider from "./components/Slider";
// import BallAnimation from "./components/BallAnimation";
import WalletDetails from "./components/WalletDetails";
// import TelegramWrapper from "./components/TelegramWrapper";
import Provider from "./components/Provider";
import "./App.css";
import WalletConnect from "./components/WalletConnect";

function App() {
  return (
    <div className="flex flex-col items-center w-screen">
      <Provider>
        {/* <TelegramWrapper> */}
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
        </div>
        {/* </TelegramWrapper> */}
      </Provider>
    </div>
  );
}

export default App;
