import React, { useState } from 'react'
import { User } from '../user/User';
import { GistsList } from '../gist/GistsList'
import { getUserData, fetchUserByUsername } from '../../reducer/userStore';
import { getAllGistByUser, getGists } from '../../reducer/gistStore';
import { useSelector, useDispatch } from 'react-redux'

export const Home = () => {
    const [user, setUser] = useState('');
    const dispatch = useDispatch();
    const userSelected = useSelector(getUserData);
    const gists = useSelector(getGists);

    const onUsernameChange = (e) => setUser(e.target.value)

    const onSearchClicked = () => {
        if (user) {
            dispatch(fetchUserByUsername(user));
            dispatch(getAllGistByUser(user))
        }
    }

    const keyPress = (e) => {
        if (e.keyCode === 13) {
            setUser(e.target.value);
            if (user) {
                dispatch(fetchUserByUsername(user));
                dispatch(getAllGistByUser(user))
            }
        }
    }

    return (
        <section className="home">
            <div className="home__content">
                <h1>Blog msco.</h1>
                <p>Explore the unknown. Uncover what matters. Prototype, test, repeat. Combine intuition with <br /> evidence. Design with intent and build it right.</p>
                <div className="home__search">
                    <label>
                        <input type="text" placeholder="Keyword..." onKeyDown={keyPress} onChange={onUsernameChange} />
                    </label>
                </div>
                <button onClick={onSearchClicked}>Search</button>
                {userSelected.login && <User avatar={userSelected.avatar_url} name={userSelected.name}></User>}
                {gists.length > 0 && <GistsList gists={gists}></GistsList>}

            </div>
        </section>
    )
}