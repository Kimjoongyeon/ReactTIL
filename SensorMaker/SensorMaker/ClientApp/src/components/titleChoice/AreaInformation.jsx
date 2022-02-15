import React, { Component } from 'react';
import { BsFillPlusCircleFill } from "react-icons/bs";
import { BsCloudUpload } from "react-icons/bs";
import { BsGear } from "react-icons/bs";
import { ImPencil } from "react-icons/im";
import { AiFillMinusCircle } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import "./AreaInformation.css";
import TreeMenu from 'react-simple-tree-menu';

class AreaInformation extends Component {

    handleAdd = name => {
        const properties = [...this.state.areas, { key: '1', label: "건물그룹", nodes: [] }];
        this.setState({ properties });
    };
    constructor(props) {
        super(props);
        this.state = {
            properties: [
                {
                    key: "0",
                    label: "건물그룹",
                    nodes: [
                        {
                            key: "0",
                            label: 1.5,
                            nodes: []
                        }
                    ]
                },
                {
                    key: "1",
                    label: "건물그룹",
                    nodes: [
                        {
                            key: "1",
                            label: 50,
                            nodes: []
                        }
                    ]
                }
            ],
            initiallyOpenProperties: []
        };
    }
    handleExpandTree = () => {
        console.log("expanding tree");
        this.setState({
            initiallyOpenProperties: [
            ]
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

                    <button className="button1" onClick="onIncrement">
                        <BsFillPlusCircleFill />
                    </button>
                    <button className="button2">
                        <BsCloudUpload className="imoge" />
                    </button>
                </div>

                <div class="body">
                    <tr>
                        <td>
                            <TreeMenu className="firstTree"
                                data={this.state.properties}
                                initialOpenNodes={this.state.initiallyOpenProperties}
                                hasSearch={false}
                                onClickItem={this.handleClick}
                            >
                            </TreeMenu>
                            <button className="button1" onClick="onIncrement"><ImPencil /></button>
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