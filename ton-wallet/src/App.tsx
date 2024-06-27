import Slider from "./components/Slider";
// import BallAnimation from "./components/BallAnimation";
import WalletDetails from "./components/WalletDetails";
import TelegramWrapper from "./components/TelegramWrapper";
import "./App.css";

function App() {
  return (
    <>
      <TelegramWrapper>
        <div>
          <p>A quick demo with animations and ton sdk in telegram</p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and Preact logos to learn more
        </p>
        <Slider />
        <WalletDetails />
      </TelegramWrapper>
    </>
  );
}

export default App;
