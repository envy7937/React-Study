import React from 'react'
import Header from './Header'
import Footer from './Footer'

class BaseLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                {/*
                    합성(Composition) : 컴포넌트에서 다른 컴포넌트를 담기
                    - vuejs의 slot 과 비슷한 것 같음
                 */}
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}

export default BaseLayout;