import React, { Component } from 'react';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';

const asyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth : true
    };

    render () {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to='/posts/'
                                         exact
                                         activeClassName="my-active"
                                         activeStyle={{
                                             color: '#fa923f',
                                             textDecoration: 'underline'
                                         }}>Posts</NavLink>
                            </li>
                            <li><NavLink to={{
                                pathname: '/new-post',  //Absolute path
                                // pathname: this.props.match.url + '/new-post',  //Relative path
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" exact render={() => <h1>Home</h1>}/>*/}
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={asyncNewPost} /> : null}
                    <Route path="/posts" component={Posts} />
                    <Route render={() => <h1>NOT FOUND</h1>} />
                    {/*<Redirect from="/" to="/posts" />*/}
                </Switch>
                {/*<Posts />*/}
                {/*<section>*/}
                    {/*<FullPost id={this.state.selectedPostId} />*/}
                {/*</section>*/}
                {/*<section>*/}
                    {/*<NewPost />*/}
                {/*</section>*/}
            </div>
        );
    }
}

export default Blog;