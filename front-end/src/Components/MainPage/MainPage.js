import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainPage extends Component {


    render() {
        return (
            <div class="grid-container-home" style={{ gridTemplateColumns: "2fr 2fr" }}>
                <Link to={"/general-administration"} >
                    <div class="grid-item-home" style={{ backgroundColor: "#b5f5f4" }}>
                        <div>General Administration</div>
                    </div>
                </Link>
                <Link to={"/dev-administration"}>
                    <div class="grid-item-home" style={{ backgroundColor: "#d2b6fa" }}>
                        <div>Development Administration</div>
                    </div>
                </Link>
                <Link to={"/seasonal"}>
                    <div class="grid-item-home" style={{ backgroundColor: "#d2b6fa" }}>
                        <div>Seasonal Work</div>
                    </div>
                </Link>
                <Link to={"/drives-working"} >
                    <div class="grid-item-home" style={{ backgroundColor: "#b5f5f4" }}>
                        <div>Structured Drivers and Working</div>
                    </div>
                </Link>
            </div >
        );
    }
}

export default MainPage;