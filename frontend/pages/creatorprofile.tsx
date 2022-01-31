
import { useRouter } from "next/router";
import { CircularProgress} from "@material-ui/core";
import Settings from '@mui/icons-material/Settings';
import { useWeb3React } from "@web3-react/core";
import Jdenticon from "react-jdenticon";
import BasicModal from "../components/BasicModal";
import ConnectToWallet from "../components/ConnectToWallet";
import CreateProposalModal from "../components/CreateProposalModal";
import ProfileTabs from "../components/ProfileTabs";
import { DAI_SUPPORTED_ADDRESS, LOYALTY_TOKEN_CREATOR_FACTORY_ADDRESS_LIST, NATIVE_TOKEN_SUPPORTED_ADDRESS, USDC_SUPPORTED_ADDRESS } from "../constants/chains";
import { ZERO_ADDRESS } from "../constants/misc";
import {
  useTokenName,
  useTokenSymbol,
  useTokenTotalSupply,
} from "../hooks/ERC20/useTokenContract";
import { useCreatorFactoryCreatorDAO, useCreatorFactoryCreatorSaleFee, useCreatorFactoryCreatorToken } from "../hooks/LoyaltyTokenContract/useCreatorFactoryContract";
import { creatorFactoryLT, parseBalance } from "../util";
import { fontWeight, textAlign, width } from "@mui/system";

export default function CreatorProfile() {
  const router = useRouter();

  let { address } = router.query;

  if(address){
    console.log(address)
  }
  else{
    console.log(router.pathname);
    const url = router.pathname;
    address = url.split("=")[1]
    console.log(address)
  }

  const {
    chainId,
    account,
  } = useWeb3React();

  const creatorToken = useCreatorFactoryCreatorToken(
    LOYALTY_TOKEN_CREATOR_FACTORY_ADDRESS_LIST[chainId],
    address.toString()
  ).data??"";
  
  const nativeToken = NATIVE_TOKEN_SUPPORTED_ADDRESS[chainId] ?? "";
  const usdc = USDC_SUPPORTED_ADDRESS[chainId];
  const dai = DAI_SUPPORTED_ADDRESS[chainId];

  const creatorTokenName = useTokenName(creatorToken).data;
  const creatorTokenSymbol = useTokenSymbol(creatorToken).data;
  const creatorTokenTotalSupply = parseBalance(useTokenTotalSupply(creatorToken).data ?? 0);
  
  const nativeTokenSymbol = useTokenSymbol(nativeToken.toString()).data;

  const {nativefee, usdfee} = useCreatorFactoryCreatorSaleFee(
    LOYALTY_TOKEN_CREATOR_FACTORY_ADDRESS_LIST[chainId],
    address.toString()
  ).data?? {nativefee: 0, usdfee: 0};

  const nativeCreatorPrice = parseBalance(nativefee ?? 0);
  const usdCreatorPrice = parseBalance(usdfee ?? 0);

  return (
    <div>
      {creatorToken ? (
        <div className="greenTextBlackBackground" style={{ fontSize: 25 }}>
          <div style={{ display: "flex" }}>
            <div className="creatorImageDiv">
              <Jdenticon size={250} value={address.toString()} />
            </div>
            {creatorToken === ZERO_ADDRESS ? (
              <div className="becomeCreatorButton">
                <BasicModal
                  modalButtonText="Become a Creator"
                  modalBody={<CreateProposalModal />}
                />
              </div>
            ) : (
              <div className="creatorProfileDescription">
                <div style={{minWidth:"25vw", width: "30vw", justifyContent: "center"}}>
                  <div style={{fontSize:"25px", fontWeight:"bold"}}>{creatorTokenName} ({creatorTokenSymbol})</div>
                  <div style={{color: "grey", fontWeight:"bold", fontSize: "18px", marginTop: "20px", marginBottom: "12px"}}>Price</div>
                  <div style={{display: "flex", flexDirection: "row", marginLeft:"20px", marginBottom:"10px"}}>
                    <div style={{color: "grey", fontSize: "18px",paddingTop: "2px", marginRight: "2px"}}>Native:</div>
                    <div style={{color: "white"}}>{nativeCreatorPrice} {nativeTokenSymbol}</div>
                  </div>
                  <div style={{display: "flex", flexDirection: "row", marginLeft:"20px", marginBottom:"10px"}}>
                    <div style={{color: "grey", fontSize: "18px",paddingTop: "2px", marginRight: "2px"}}>USD:</div>
                    <div style={{color: "white"}}>{usdCreatorPrice} USD</div>
                  </div>
                  <div style={{display: "flex", flexDirection: "row"}}>
                    <div className="w-full bg-green-500 text-white px-2 py-2 rounded" style={{ width:"150px", height:"50px", marginTop: "15px", textAlign: "center"}}>
                      <h2 style={{color: "white", fontWeight:"bold", fontSize: "18px"}}>Join My Fam</h2>
                    </div>
                  </div>
                  {/* <div>Social Handles</div> */}
                </div>
              </div>
            )}
          </div>
          <div style={{ marginTop: "30px" }}></div>
          <ProfileTabs onCreatorProfile={true} creator={address.toString()}/>
        </div>
      ) : (
        <>
          {(typeof address.toString() !== "string")? (
            <ConnectToWallet/>
          ) : (
            <>
              <CircularProgress
                style={{ display: "flex", margin: "auto", height: "80vh" }}
              />
            </>
          )}
        </>
      )}
    </div>
  );
}
