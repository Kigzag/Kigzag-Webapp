import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import crezaloOnlyBirdlogo from "../public/Crezalo-onlybird-transparent.png";
import crezaloTextlogo from "../public/crezalo-logo-name.png";
import AuthService from "../services/auth-services";
import ConnectToAccount from "./ConnectToAccount";
import SettingMenu from "./SettingMenu";
import queryString from "query-string";
import BasicModal from "./BasicModal";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SearchIcon from "@mui/icons-material/Search";
import AddToCart from "./AddToCart";
import { getCartItems } from "../services/api-services/user/cart_api";
import { useRouter } from "next/router";
import { Button } from "@mui/material";
import { getUserData } from "../services/api-services/user_api";
import guestCred from "../consts/guestcred";
import { reloadWithQueryParams } from "../services/utility";
import { clickEvent } from "../services/analytics";
import { isMobile } from "react-device-detect";

interface cartItem {
  cartid: string;
  user: string;
  creator: string;
  feature: number;
  productid: string;
  seriesid: string;
  quantity: number;
}

const Header = () => {
  const router = useRouter();
  const url = router.asPath;

  let { uname, noguestlogin, message } = router.query;

  if (!uname) {
    uname = queryString.parseUrl(url).query.uname;
  }
  if (!noguestlogin) {
    noguestlogin = queryString.parseUrl(url).query.noguestlogin;
  }
  if (!message) {
    message = queryString.parseUrl(url).query.message;
  }

  const [isConnected, setIsConnected] = useState(false);
  const [username, setUsername] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [isCreator, setIsCreator] = useState(false);
  const checkConnected = () => {
    useEffect(() => {
      async function getData() {
        if (typeof window !== "undefined") {
          console.log("AuthService.refresh()");
          console.log(await AuthService.refresh());
          setIsConnected(
            AuthService.validateCurrentUserRefreshToken() &&
              AuthService.validateCurrentUserAccessToken()
          );
        }
      }
      getData();
    }, []);
  };

  checkConnected();

  const updateUsername = () => {
    useEffect(() => {
      setUsername(AuthService.getUsername());
    }, [isConnected]);
  };

  updateUsername();

  const GetUser = () => {
    useEffect(() => {
      async function getData() {
        if (username != "") {
          const result = await getUserData(username);
          if (typeof result !== "string") {
            setIsCreator(result[0].iscreator);
          }
        }
      }
      getData();
    }, [username]);
  };

  GetUser();

  const GetAllItems = () => {
    useEffect(() => {
      async function getData() {
        const result = await getCartItems();

        if (result[0]) setCartItems(result);
        else setCartItems([]);
      }
      getData();
    }, [username]);
    return true;
  };

  GetAllItems();

  const showCart = () => {
    return !url.includes("/checkout/");
  };
  const atDashboard = () => {
    return url === "/dashboard/";
  };
  const atCreatorProfile = () => {
    return url.includes("/creatorprofile/");
  };

  const checkGuestUser = async () => {
    if (username == guestCred[0]) {
      AuthService.logout();
      reloadWithQueryParams(router);
    }
  };

  const ifRegisterThenGuestSignOut = () => {
    useEffect(() => {
      if (isRegister()) {
        checkGuestUser();
      }
    }, [username]);
  };

  ifRegisterThenGuestSignOut();

  const isRegister = () => {
    return url.includes("register");
  };

  const getusername = () => {
    if (uname) return uname.toString();
    else return "";
  };
  const getnoguestlogin = () => {
    if (noguestlogin?.toString() === "true") return true;
    else return false;
  };
  const getmessage = () => {
    if (message) return message.toString();
    else return "";
  };

  return (
    <>
      {isConnected ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#36393e",
            paddingLeft: isMobile ? 0 : "15vh",
          }}
        >
          {!atCreatorProfile() ? (
            <Link legacyBehavior href="/">
              <a onClick={() => clickEvent("Header_RedirectToHome")}>
                <div className="modelButton" style={{ paddingLeft: "2px" }}>
                  {isMobile ? (
                    <Button
                      style={{
                        backgroundColor: "black",
                        color: "white",
                        marginTop: "4px",
                        borderRadius: "50%",
                        border: "2 solid #424549",
                        boxShadow: "0px 0px 2px",
                      }}
                      variant="contained"
                    >
                      <Image
                        src={crezaloOnlyBirdlogo}
                        alt="Crezalo Bird Logo"
                        width={40}
                        height={40}
                      />
                    </Button>
                  ) : (
                    <Button
                      style={{
                        backgroundColor: "black",
                        marginTop: "2px",
                        boxShadow: "1px 2px 3px #a0a2a4",
                      }}
                      variant="contained"
                    >
                      <Image
                        src={crezaloOnlyBirdlogo}
                        alt="Crezalo Bird Logo"
                        width={40}
                        height={40}
                      />
                      <Image
                        src={crezaloTextlogo}
                        alt="Crezalo Text Logo"
                        width={150}
                        height={35}
                      />
                    </Button>
                  )}
                </div>
              </a>
            </Link>
          ) : (
            <Link legacyBehavior href="/">
              <a onClick={() => clickEvent("Header_RedirectToHome")}>
                <div className="modelButton" style={{ paddingLeft: "2px" }}>
                  <Button
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      marginTop: "4px",
                      borderRadius: "50%",
                      border: "2 solid #424549",
                      boxShadow: "0px 0px 2px",
                    }}
                    variant="contained"
                  >
                    <Image
                      src={crezaloOnlyBirdlogo}
                      alt="Crezalo Bird Logo"
                      width={40}
                      height={40}
                    />
                  </Button>
                </div>
              </a>
            </Link>
          )}
          <nav
            style={{
              padding: "2px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {!atDashboard() && username != guestCred[0] && !isMobile ? (
              <Link legacyBehavior href="/dashboard">
                <a
                  className="mr-6 py-1"
                  onClick={() => clickEvent("Header_RedirectToDashboard")}
                >
                  <div className="modelButton">
                    <Button
                      style={{
                        background: "#3B82F6",
                        color: "white",
                        borderRadius: "50%",
                      }}
                      variant="contained"
                    >
                      <DashboardIcon />
                      {/*<span style={{ marginRight: "10px", marginLeft: "2px" }}>
                      Home
                    </span> */}
                    </Button>
                  </div>
                </a>
              </Link>
            ) : (
              <></>
            )}
            {/* {atDashboard() ? (
            <Link legacyBehavior href="/creators">
              <a className="mr-6 py-1">
                <div className="modelButton">
                  <Button
                    style={{
                      background: "#3B82F6",
                      color: "white",
                    }}
                    variant="contained"
                  >
                    <SearchIcon />
                  </Button>
                </div>
              </a>
            </Link>
          ) : (
            <></>
          )} */}
            {showCart() ? (
              <div className="mr-6 py-1">
                <BasicModal
                  modalButtonText={
                    <Button
                      style={{
                        background: "#3B82F6",
                        color: "white",
                        marginBottom: "2px",
                        borderRadius: "50%",
                      }}
                      variant="contained"
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          fontSize: "15px",
                          borderRadius: "50%",
                        }}
                      >
                        <ShoppingCartOutlinedIcon />
                        {/* <span style={{ marginRight: "10px", marginLeft: "2px" }}>
                      Cart
                      ({cartItems?.length})
                    </span> */}
                      </span>
                    </Button>
                  }
                  modalBody={<AddToCart showContinueToCheckoutButton={true} />}
                  formatting={true}
                />
              </div>
            ) : (
              <></>
            )}
            <SettingMenu isCreator={isCreator} atDashboard={atDashboard()} />
          </nav>
        </div>
      ) : (
        <ConnectToAccount
          haveAccountBool={!isRegister()}
          uname={getusername()}
          noguestlogin={getnoguestlogin()}
          message={getmessage()}
        />
      )}
    </>
  );
};
export default Header;
