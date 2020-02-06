import React, { Component } from 'react';
import BlankContent from '../blankContent/blankContent';
import api from '@/api/index';
import './bigImg.less';

export default class bigImg extends Component {
    static defaultProps = {
        width: '100%',
        height: '250px'
    }
    state = {
        isHover: false
    }
    mouseEnter = () => {
        this.setState({
            isHover: true
        })
    }
    mouseLeave = () => {
        this.setState({
            isHover: false
        })
    }
    render() {
        const { isHover } = this.state;
        const { imgSrc, width, height } = this.props;
        return (
            <div className={`bigImg ${ isHover ? "hoverScale" : "" }`} 
                 style={{ width, height }}
                 onMouseEnter={ this.mouseEnter }
                 onMouseLeave={ this.mouseLeave }>
                {
                    imgSrc ? 
                    ( 
                        imgSrc.indexOf('resource\\img') === -1 ?
                        <img src={ imgSrc } alt="" className="img" /> 
                        : 
                        <img src={ `${api.apiPath}/getPic?path=${ imgSrc }` } alt="" className="img" />
                    )
                    :
                    <BlankContent width="60px" height="60px" fontSize="40px" />
                }
                
            </div>
        )
    }
}
