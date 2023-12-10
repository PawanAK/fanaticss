import { useEffect, useState } from "react";

const ConnectWallet = () => {
  const [account, setAccount] = useState("");
  const [copied, setCopied] = useState(false);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
      } catch (error) {
        console.error("Failed to connect to Metamask");
      }
    } else {
      console.log("Please install Metamask");
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        setAccount(accounts[0]);
      });
    }
  }, []);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(account);
    setCopied(true);
    setTimeout(() => setCopied(false), 200); // Reset after 2 seconds
  };

  const truncatedAddress = account.substring(0, 9) + "...";

  return (
    <div>
      {!account ? (

        <button
          className=" flex gap-2 bg-none border border-white hover:bg-primary text-white hover:border-none duration-100 font-normal py-2 px-4 rounded-full font-primary"
          onClick={connectWallet}>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M2.5 14.5V11C2.5 8.19974 2.5 6.79961 3.04497 5.73005C3.52433 4.78924 4.28924 4.02433 5.23005 3.54497C6.29961 3 7.69974 3 10.5 3H14C15.3978 3 16.0967 3 16.6481 3.22836C17.3831 3.53284 17.9672 4.11687 18.2716 4.85195C18.479 5.35251 18.4981 5.97475 18.4998 7.1313M2.5 14.5C2.5 15.8297 2.5 16.9946 2.8806 17.9134C3.38807 19.1386 4.36144 20.1119 5.58658 20.6194C6.50544 21 7.67029 21 10 21H15C17.3297 21 18.4946 21 19.4134 20.6194C20.6386 20.1119 21.6119 19.1386 22.1194 17.9134C22.5 16.9946 22.5 15.8297 22.5 14.5C22.5 12.1703 22.5 11.0054 22.1194 10.0866C21.6119 8.86144 20.6386 7.88807 19.4134 7.3806C19.139 7.26693 18.8426 7.18721 18.4998 7.1313M2.5 14.5C2.5 12.1703 2.5 11.0054 2.8806 10.0866C3.38807 8.86144 4.36144 7.88807 5.58658 7.3806C6.50544 7 7.67029 7 10 7H15C16.6339 7 17.6949 7 18.4998 7.1313M14.5 12H17.5" stroke="white" strokeWidth="2" strokeLinejoin="round" />
          </svg>
          Connect Wallet
        </button>
      ) : (
        <div className="relative inline-block">
          <button
            className="btnbg-none border border-white hover:bg-primary text-white hover:border-none duration-100 font-normal font-primary py-2 px-4 rounded-full relative"
            onClick={copyToClipboard}>
            <p>{truncatedAddress}</p>
            
          </button>
        </div>
      )}
    </div>
  );
};

export default ConnectWallet;
