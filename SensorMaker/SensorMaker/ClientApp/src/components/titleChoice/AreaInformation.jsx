import React, { Component, useRef } from 'react';

import { BsFillPlusCircleFill } from "react-icons/bs";
import { BsCloudUpload } from "react-icons/bs";
import { BsGear } from "react-icons/bs";
import { ImPencil } from "react-icons/im";
import { AiFillMinusCircle } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import "./AreaInformation.css";
import TreeMenu from 'react-simple-tree-menu';

class AreaInformation extends Component {
        handleAdd = () => {
            this.state.label()
        };
        state = {
            properties: [
                {
                    key: 1,
                    label: 1+ ".건물그룹",
                    nodes: [
                        {
                            key: "1",
                            label: 1.1 + "A Building",
                            nodes: []
                        }
                    ],
                    key: 2,
                    label: 2 + ".건물그룹",
                    nodes: [],
                },
            ],
        initiallyOpenProperties: []
    };
    handleExpandTree = () => {
        this.setState({
            initiallyOpenProperties: []
        });
    };
    render() {
        return (
            <div class="AreaInfoBox">
                <div class="header">
                    <h2 class="title">공간정보<BsGear /></h2>

                    <div className="search">
                        <FaSearch  />
                        <input type="text" className="textBox" />
                    </div>

                    <button className="button1" onClick="onAddFirst">
                        <BsFillPlusCircleFill />
                    </button>
                    <button className="button2">
                        <BsCloudUpload className="imoge" />
                    </button>
                </div>

                <div class="body">
                    <tr>
                        <td>
                            <TreeMenu 
                                data={this.state.properties}
                                initialOpenNodes={this.state.initiallyOpenProperties}
                                hasSearch={false}
                                onClickItem={this.handleClick}
                            >
                            </TreeMenu>
                            <button className="button1" onClick={this.handleAdd}><ImPencil /></button>
                            <button className="button1" onClick=""><BsFillPlusCircleFill /></button>
                            <button className="minusButton" onClick=""><AiFillMinusCircle /></button>
                        </td>
                    </tr>
                </div>
            </div>
        );
    };
}

export default AreaInformation;