import {Route} from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Profiles from "./components/Profiles";
import History from "./components/HistorySample";
import Navigation from "./components/Navigation"

function App() {
    return (
        <div className="App">
            {/**
             path: 경로 지정
             component: 해당 페이지에서 보여줄 컴포넌트
             exact: 입력한 경로와 정확히 일치하는 경로에만 매칭시키기 위해 사용

             ex) exact를 사용하지 않을 경우 http://localhost:3000/about 페이지를 띄우면
             '/about'에 '/'경로가 포함되기 때문에 Home과 about 컴포넌트가 모두 호출됨.
             '/about/sub' 라는 지정되지 않은 경로를 입력해도 about 컴포넌트가 호출됨.
             */}
            <Navigation/>

            <Route exact={true} path={"/"} component={Home}/>
            <Route exact={false} path={"/about"} component={About}/>
            <Route exact={false} path={"/profiles"} component={Profiles}/>
            <Route exact={false} path={"/history"} component={History}/>
        </div>
    );
}

export default App;
