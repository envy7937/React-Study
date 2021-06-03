import React from 'react';
import {Link} from 'react-router-dom';

function Navigation() {
    return (
        <div>
            <ul>
                <li>
                    <Link to={"/"}>홈</Link>
                </li>
                <li>
                    <Link to={"/about"}>어바웃</Link>
                </li>
                <li>
                    <Link to={"/profiles"}>프로필 목록</Link>
                </li>
            </ul>
            <hr />
        </div>
    );
}

export default Navigation;