import React, { useEffect, useState } from "react";
import { Tabs, Button, Divider, Checkbox } from "antd";
import logo from "../../common/images/logo_cropped.png";
import logout from "../../common/images/logout.svg";
import { LogoutOutlined } from "@ant-design/icons";
import AddProduct from "../AddProduct/AddProduct";
import Wishlist from "../Whislist/wishlist";
import { Redirect } from "react-router";
import Loader from "../Loader/loader";

const { TabPane } = Tabs;

// const OperationsSlot = {
//   left: (
//     <div>
//       <img src={logo} />
//     </div>
//   ),
//   right: (
//     <div>
//       <Button
//         icon={<LogoutOutlined />}
//         size="medium"
//         type="primary"
//         shape="round"
//         className="button-LOGOUT"
//         onClick={() => {
//           localStorage.removeItem("jwt");

//         }}
//       >
//         LOGOUT
//       </Button>
//     </div>
//   ),
// };

const index = () => {
  // /*this.state = {
  //       activeTab: "1"
  //   };
  //   changeTab = activeKey => {
  //       console.log(activeKey);
  //       this.setState({
  //       activeTab: "1"
  //       });
  //   };
  const [tab, setTab] = useState("1")
  const goToWishlist = () => {

  }
  const OperationsSlot = {
    left: (
      <div>
        <img src={logo} />
      </div>
    ),
    right: (
      <div>
        <Button
          icon={<LogoutOutlined />}
          size="medium"
          type="primary"
          shape="round"
          className="button-LOGOUT"
          onClick={() => {
            localStorage.removeItem("jwt");
            setjwt(false)
          }}
        >
          LOGOUT
        </Button>
      </div>
    ),
  };
  const [jwt, setjwt] = useState(false);
  const [load, setload] = useState(true);
  const gettoken = () => {
    let temp = localStorage.getItem("jwt");
    if (temp !== null) {
      setjwt(true);
    }
  };
  useEffect(() => {
    gettoken();
    setload(false);
  }, []);

  if (load) {
    return (
      <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', height: '100vh' }}>
        <Loader />
      </div>
    );
  } else {
    if (!jwt) {
      return <Redirect to="/login" />;
    } else {
      return (
        <div className="tab-container">
          <Tabs
            size="large"
            tabBarExtraContent={OperationsSlot}
            tabBarStyle={{ color: "#379683", fontWeight: "700" }}
          >
            <TabPane tab="MY WISHLIST" key="1" style={{ marginLeft: "20px" }}>
              <Wishlist />
            </TabPane>
            <TabPane tab="ADD PRODUCT" key="2">
              <AddProduct />
            </TabPane>
          </Tabs>
        </div>
      );
    }
  }
};

export default index;
