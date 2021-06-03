import React from 'react'
import qs from 'qs'

function About({location}) {
    /*Query String 사용하기*/
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true // parsing한 Query String에서 ? 제거
    })
    const detail = query.detail === 'true'

    return (
        <div>
            <h1>About</h1>
            <p>
                This is About.
                React 라우터 학습을 위한 프로젝트.
            </p>
            {detail && <p>detail값이 true입니다!</p> /* detail이 true인 경우에만 노출 */}
        </div>
    );
}

export default About