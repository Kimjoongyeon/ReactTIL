import React, { Component } from 'react';
import { BsFillPlusCircleFill } from "react-icons/bs";
import { BsCloudUpload } from "react-icons/bs";
import { BsGear } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import "./AreaInformation.css";

class AreaInformation extends Component {
    state = {
        count: 0,
    };
    /*
    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    }
    */
    render() {
        return (
            <>
                <div class="header">
                    <h2 class="title">공간정보<BsGear /></h2>
                    <div className="search">
                        <FaSearch  />
                        <input type="text" className="" />
                    </div>
                    <button className="button1">
                        <BsFillPlusCircleFill  />
                    </button>
                    <button className="button2">
                        <BsCloudUpload />
                    </button>
                </div>
                <body>

                </body>
            </>
        );
    };
}

export default AreaInformation;