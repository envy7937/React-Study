import React from 'react'
import Profile from './Profile'
import {Link, Route} from "react-router-dom";
import WithRouterSample from "./WithRouterSample";

function Profiles() {
    return (
        <div>
            <h3>사용자 목록</h3>
            <ul>
                <li><Link to={"/profiles/developer"}>developer</Link></li>
                <li><Link to={"/profiles/ironman"}>Iron Man</Link></li>
                <li><Link to={"/profiles/captain"}>Captain America</Link></li>
            </ul>

            <Route path={"/profiles"} exat render={() => <div>사용자를 선택해주세요</div>}/>
            <Route path={"/profiles/:username"} component={Profile}/>
            <WithRouterSample/>
        </div>
    )
}

export default Profiles;