import WebApp from "@twa-dev/sdk";

const TelegramWrapper = ({ children }: { children: React.ReactNode }) => {
  WebApp.showAlert("Hey there!");
  WebApp.MainButton.setText("Pay");
  WebApp.MainButton.show();
  WebApp.MainButton.onClick(() => {
    WebApp.close();
  });
  WebApp.expand();
  return <div>{children}</div>;
};

export default TelegramWrapper;
