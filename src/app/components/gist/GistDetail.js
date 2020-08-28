import React, { useState, useEffect } from 'react';
import { TimeAgo } from '../TimeAgo';
import { User } from '../user/User'
import { useDispatch } from 'react-redux'
import { getGist } from '../../../services/gist'
import ReactMarkdown from 'react-markdown';
import 'github-markdown-css';
import { unwrapResult } from '@reduxjs/toolkit'

export default class GistDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gist: null,
            isLoading: true
        };
    }

    getContent = (gist) => {
        if (gist && gist.files) {
            const key = Object.keys(gist.files).shift();
            return gist.files[key].content;
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params
        getGist(id).then(data => this.setState({ gist: data.data, isLoading: false }));
    }


    render() {
        return (
            <section className="gistDetail">
                {(!this.state.isLoading) && <section className="post">
                    <TimeAgo className="gists__element--ago" timestamp={this.state.gist.created_at}></TimeAgo>
                    <h1>{this.state.gist.description}</h1>
                    <div className='markdown-body'>
                        <ReactMarkdown source={this.getContent(this.state.gist)} />
                    </div>
                    <User avatar={this.state.gist.owner.avatar_url} name={this.state.gist.owner.login}></User>
                </section>}
            </section>
        )

    }
}
// export const GistDetail = ({ match }) => {

//     


//     let { content } = ''

//     const input = content;//data.files['croosy-widget.md'].content
//     return (
//         <section className="gistDetail">
//             {/* {(data && data.owner) && <section className="post">
//                 <TimeAgo className="gists__element--ago" timestamp={data.created_at}></TimeAgo>
//                 <div className='markdown-body'>
//                     <ReactMarkdown source={input} />
//                 </div>
//                 <User avatar={data.owner.avatar_url} name={data.owner.login}></User>

//             </section>} */}
//         </section>
//     )
// }