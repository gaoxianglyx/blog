import React from 'react';
import { Link } from 'react-router'
class Nav extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to = '/'>博文列表</Link></li>
                    <li><Link to = 'SendText'>发表博文</Link></li>
                    <li><Link to = '/'>简历</Link></li>
                    <li><Link to = '/'>摄影集</Link></li>
                    <li><Link to = '/'>关于我</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
};
module.exports = Nav;