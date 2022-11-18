import { useContext } from "react";
import DStorage from "../abis/DStorage.json";
import AuthContext from "../store/auth-context";

const loadBlockChainData = async () => {
  const web3 = window.web3; //Declare Web3
  const accounts = await web3.eth.getAccounts(); //Load account
  const account = accounts[0];
  // setAccount(account) sett account

  const networkId = await web3.eth.net.getId(); //Network ID
  const networkData = DStorage.networks[networkId];
  //   const ctx = useContext(AuthContext);

  if (networkData) {
    console.log("Network Id", networkId);

    const dstorage = new web3.eth.Contract(DStorage.abi, networkData.address); //Assign contract
    console.log(dstorage.methods);

    return { dstorage, account };
  } else {
    //Else
    window.alert("DStorage contract not deployed to detected network"); //alert Error
  }
};
export default loadBlockChainData;
