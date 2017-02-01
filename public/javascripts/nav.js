import React from 'react';
import { Link } from 'react-router';
class Nav extends React.Component {
    render() {
        return (
            <div>
            <nav>
                <ul>
                    <li><Link to = '/'>博文列表</Link></li>
                    <li><Link to = 'SendText'>发表博文</Link></li>
                    <li><Link to = '/'>简历</Link></li>
                    <li><Link to = 'Gallery'>摄影集</Link></li>
                    <li><a href="http://gaoxianglyx.top" >关于我</a></li>
                </ul>
             </nav>   
            {this.props.children}
            </div>
        )
    }
};
module.exports = Nav;