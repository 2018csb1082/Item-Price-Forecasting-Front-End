import React, { useState } from 'react';
import LineChart from '../LineChart/LineChart';
import Handlestring from './handlestring';
import { Button, Card } from "antd";
import { Link } from "react-router-dom";

const link="https://www.flipkart.com/";
const timeLine = ['11 April', '12 April', '13 April', '14 April', '15 April', '16 April', '17 April'];
const dataset = [80, 110, 120, 100, 90, 100, 105];
const typeodData ="Price Prediction";
const min = 0;



const PrePage = () => {
    return (
        <div className="predict-base">
        <div className="main-predict">
            <div className="upper-main-predict">
                <Handlestring min={min} />
            </div>
            <div className="chart-box">
                    <div  style={{width: "70%"}}>
                        <LineChart
                            dataSet={dataset}
                            legend={typeodData}
                            timeLine={timeLine}
                            width="400"
                            height="400"
                        />
                    </div>
            </div>
            <div className="lower-main-predict">
                <Button type="primary">
                    <Link to="/">
                        Back to Wishlist
                    </Link>
                </Button>
                <Button type="primary">
                    <a href={link} target="_blank">
                        Product Website
                    </a>
                </Button>
            </div>
        </div>
        </div>
    )
}

export default PrePage;