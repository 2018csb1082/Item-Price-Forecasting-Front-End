import React from "react";
import { Tabs, Button, Divider, Checkbox } from 'antd';
import logo from '../../common/images/logo_cropped.png';
import logout from '../../common/images/logout.svg';
import {LogoutOutlined} from '@ant-design/icons';
import AddProduct from '../AddProduct/AddProduct';

const { TabPane } = Tabs;

const OperationsSlot = {
    left: <div><img src={logo} /></div>,
    right: <div><Button icon={<LogoutOutlined />} size="medium" type="primary" shape="round" className="button-LOGOUT">LOGOUT</Button></div>,
};

const index = () => {
    
    return (
        <div className="tab-container">
            <Tabs size='large' tabBarExtraContent={OperationsSlot} tabBarStyle={{color: '#379683',fontWeight: '700',}}>
                <TabPane tab="MY WISHLIST" key="1" style={{marginLeft: '20px'}}>
                    Content of tab 1
                </TabPane>
                <TabPane tab="ADD PRODUCT" key="2">
                    <AddProduct />
                </TabPane>
                <TabPane tab="ABOUT US" key="3">
                    Content of tab 3
                </TabPane>
            </Tabs>
        </div>
    );
}

export default index;