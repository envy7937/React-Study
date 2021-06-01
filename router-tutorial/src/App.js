import {Link, Route} from 'react-router-dom';
import Home from "./Home";
import About from "./About";

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
            <Link to={"/"}>홈</Link>
            <Link to={"/about"}>어바웃</Link>

            <Route exact={true} path={"/"} component={Home}/>
            <Route exact={false} path={"/about"} component={About}/>
        </div>
    );
}

export default App;
