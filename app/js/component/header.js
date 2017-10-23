import React from 'react';
import '../../css/css.css';
import Icon from '../../images/1.jpg';
import '../../css/iconfont.css';
export default class Header extends React.Component{
    render(){
        return(
            <div>
                <img className="pic" src={Icon} alt=""/>
                <div className='logo'><h1> <i className="iconfont icon-tongzhicundan font-size"></i>还不错！</h1></div>
            </div>
        )
    }
}