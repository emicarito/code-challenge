import React from 'react';
import { TimeAgo } from '../TimeAgo';
import { Link } from 'react-router-dom';

export const GistsList = ({ gists }) => {
    return (
        <section className="gists">
            <ul className="gists__list">
                {gists.map((gist) => (
                    <li>
                        <div className="gists__element">
                            <div>

                                <TimeAgo className="gists__element--ago" timestamp={gist.created_at}></TimeAgo>
                                <h3 className="gists__element--title">{gist.description}</h3>
                            </div>

                            <Link to={`/${gist.id}`} className="gists__element--link">
                                Read
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}