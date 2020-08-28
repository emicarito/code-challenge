import React from 'react'

export const User = ({ avatar, name }) => {
    return (
        <section className="user">
            <img src={avatar} alt="user-avatar" className="user__avatar" />
            <h4 className="user__name">{name}</h4>
            <span className="user__posts">Posts</span>
        </section>
    )
}