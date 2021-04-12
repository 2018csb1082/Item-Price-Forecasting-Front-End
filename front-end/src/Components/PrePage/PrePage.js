import React, { useState } from 'react';
import { Statistic } from 'antd';
import AllChart from '../AllChart/AllChart';

const timeLine = ['11 April', '12 April', '13 April', '14 April', '15 April', '16 April', '17 April'];
const dataset = [100, 110, 120, 100, 90, 100, 105];
const typeodData ="a";

const PrePage = () => {
    return (
        <div>
            <div className="upper-main-predict">
                Price prediction for the next 7 days:
            </div>
            <div className="chart-box">
                    <div  style={{width: "70%"}}>
                        <AllChart timeline={timeLine} datasets={dataset} legend="price" />
                    </div>
            </div>
            <div className="lower-main-predict">
                It is best to wait for a few days to buy
            </div>
        </div>
    )
}

export default PrePage;