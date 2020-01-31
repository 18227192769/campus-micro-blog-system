import React, { Component } from 'react';
import BigImg from '../bigImg/bigImg';
import BlankContent from '../blankContent/blankContent';
import './nineImg.less';

export default class nineImg extends Component {
    static defaultProps = {
        imgSrcArr: []
    }
    render() {
        const { imgSrcArr } = this.props;
        return (
            <div className="nineImg">
                <div className="imgBox">
                    {
                        imgSrcArr.length !== 0 ? imgSrcArr.slice(0, 9).map((item, index) => (
                            item ? 
                                <BigImg imgSrc={ item } width="33%" height="33%" key={ index } />
                                :
                                <div style={{ width: "33%", height: "33%" }}>
                                    <BlankContent width="80px" height="80px" fontSize="30px" />
                                </div>
                        )) : <BlankContent width="100px" height="100px" fontSize="50px" />
                    }
                </div>
            </div>
        )
    }
}
