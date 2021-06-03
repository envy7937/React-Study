import React from 'react'

const profileData = {
    developer: {
        name: '김경식',
        description: "I'm study React now",
    },
    ironman: {
        name: 'Tony Stark',
        description: "I'm Iron man",
    },
    captain: {
        name: 'Steve Rogers ',
        description: "That's America's Ass"
    }
}

function Profile({match}) {
    const {username} = match.params
    const profile = profileData[username]

    if (!profile) {
        return <div>존재하지 않는 사용자 입니다.</div>
    }

    return (
        <div>
            <h3>
                {username} ({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    );
}

export default Profile