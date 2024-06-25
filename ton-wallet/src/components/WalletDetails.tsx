import { useTonAddress, TonConnectButton } from "@tonconnect/ui-react";

const WalletDetails = () => {
  const userFriendlyAddress = useTonAddress();
  // const rawAddress = useTonAddress(false);
  return (
    <div>
      {userFriendlyAddress ? (
        <p>Your wallet is :{userFriendlyAddress}</p>
      ) : (
        <TonConnectButton />
      )}
    </div>
  );
};

export default WalletDetails;
