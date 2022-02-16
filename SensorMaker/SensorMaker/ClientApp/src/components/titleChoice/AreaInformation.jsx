import React, { Component, useRef } from 'react';

import { BsFillPlusCircleFill } from "react-icons/bs";
import { BsCloudUpload } from "react-icons/bs";
import { BsGear } from "react-icons/bs";
import { ImPencil } from "react-icons/im";
import { AiFillMinusCircle } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import "./AreaInformation.css";
//import TreeMenu from 'react-simple-tree-menu';


class FirstNode extends Component {
    render() {
        return (
            <li>
                <input type="checkbox" id="firstNode" />
                <label for="firstNode">FirstNode1</label>
                <button className="button1" onClick="onIncrement"><ImPencil /></button>
                <button className="button1" onClick=""><BsFillPlusCircleFill /></button>
                <button className="minusButton" onClick=""><AiFillMinusCircle /></button>
            </li>
            /*
            <li>
                <input type="checkbox" id={1} />
                <label for={1}>FirstNode1</label>
                <button className="button1" onClick="onIncrement"><ImPencil /></button>
                <button className="button1" onClick=""><BsFillPlusCircleFill /></button>
                <button className="minusButton" onClick=""><AiFillMinusCircle /></button>
                <ul>
                    <li>
                        <input type="checkbox" id={1-1} />
                        <label for={1 - 1} className="lastTree">node1</label>
                    </li>
                    <li>
                        <input type="checkbox" id={1 - 2} />
                        <label for={1 - 2}>node2</label>
                        <ul>
                            <li>
                                <input type="checkbox" id={1 - 2 - 1 } />
                                <label for={1 - 2 - 1} className="lastTree">node21</label>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <input type="checkbox" id={1 - 3} />
                        <label for={1 - 3}>node3</label>
                        <ul>
                            <li>
                                <input type="checkbox" id={1 - 3 - 1} />
                                <label for={1 - 3 - 1} className="lastTree">node31</label>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            */
        );
    }
}
class children extends Component {
    onAdd = event => {
        event.preventDefault();
        const name = this.FirstNode.state.value;
        this.props.onAdd(name);
    }
    render() {
        //const data = FirstNode.state.id;
        return (
            
        );
    }
}


class SecondNode extends Component {
    render() {
        return (
            <>
                
            </>
        );
    }
}

class ThirdNode extends Component {
    render() {
        return (
            <>
                    
            </>
        );
    }
}

class AreaInformation extends Component {
    /*
    constructor(props) {
        super(props);
        this.state = {
            properties: [
                {
                    key: 1,
                    label: 1+ ".건물그룹",
                    nodes: [
                        {
                            key: "3",
                            label: "건물그룹-1",
                            nodes: []
                        }
                    ],
                    key: 2,
                    label: 2 + ".건물그룹",
                    nodes: [],
                },
                {
                    key: "1",
                    label: "건물그룹1",
                    nodes: []
                },
                {
                    key: "2",
                    label: "건물그룹2",
                    nodes: []
                },
            ],
        };
    }
    */

    render() {

        //const data = this.state.properties;

        return (
            <div className="AreaInfoBox">
                <div className="header">
                    <h2 className="title">공간정보<BsGear /></h2>

                    <div className="search">
                        <FaSearch  />
                        <input type="text" className="textBox" />
                    </div>

                    <button className="button1" onClick={this.onAdd}>
                        <BsFillPlusCircleFill />
                    </button>
                    <button className="button2">
                        <BsCloudUpload className="imoge" />
                    </button>
                </div>

                <div className="body">
                    {/*
                    <tr>
                        <td>
                            <TreeMenu 
                                data={this.state.properties}
                                hasSearch={false}
                                onClickItem={this.handleClick}
                            >
                            </TreeMenu>
                            <button className="button1" onClick={this.handleAdd}><ImPencil /></button>
                            <button className="button1" onClick=""><BsFillPlusCircleFill /></button>
                            <button className="minusButton" onClick=""><AiFillMinusCircle /></button>
                        </td>
                    </tr>
                    */}

                    {/*
                    
                    
                    
                    <ul className="tree">
                        <li>
                            <input type="checkbox" id="firstNode" />
                            <label for="firstNode">FirstNode1</label>
                        </li>
                        
                        if (자식이 있을 경우) {
                            <자신 호출>
                        }
                            
                    </ul>


                    <ul className="tree">
                        <li>
                            <input type="checkbox" id="firstNode" />
                            <label for="firstNode">FirstNode1</label>
                            <ul className="tree">
                                <li>
                                    <input type="checkbox" id="firstNode" />
                                    <label for="firstNode">FirstNode1</label>
                                    <ul className="tree">
                                        <li>
                                            <input type="checkbox" id="firstNode" />
                                            <label for="firstNode">FirstNode1</label>
                                            <ul className="tree">
                                                <li>
                                                    <input type="checkbox" id="firstNode" />
                                                    <label for="firstNode">FirstNode1</label>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>



                            <ul>
                        
                                <li>
                                    <input type="checkbox" id="node2"  />
                                    <label for="node2">node2</label>
                                    <ul>
                                        <li>
                                            <input type="checkbox" id="node21" />
                                            <label for="node21" className="lastTree">node21</label>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <input type="checkbox" id="node3" />
                                    <label for="node3">node3</label>
                                    <ul>
                                        <li>
                                            <input type="checkbox" id="node31" />
                                            <label for="node31" className="lastTree">node31</label>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    */}
                    {/*
                    <ul className="tree">
                        <li>
                            <FirstNode />
                            <ul>
                                <li>
                                    <SecondNode />
                                    <ul>
                                        <li>
                                            <ThirdNode />
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    */}
                    <ul className="tree">
                        <FirstNode />
                        <SecondNode />
                        <ThirdNode />
                    </ul>
                </div>
            </div>
        );
    };
}

export default AreaInformation;