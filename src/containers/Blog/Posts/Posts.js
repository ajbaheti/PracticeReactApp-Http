import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import axios from "../../../axios";

import './Posts.css';
import Post from '../../../components/Post/Post';

class Posts extends Component {

    state = {
        posts: [],
        selectedPostId: null
    };

    componentDidMount () {
        console.log(this.props);
        axios.get('/posts')
            .then(response => {
                let posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: "Max"
                    }
                });
                this.setState({posts: updatedPosts});
            });
    }

    postSelectedHandler = (id) => {
        // this.setState({selectedPostId: id});

        this.props.history.push({pathname: '/'+ id}); //OR
        // this.props.history.push('/'+ id);
    };

    render () {
        const posts = this.state.posts.map(post => {
            return (
                //<Link key={post.id} to={'/' + post.id}>
                    <Post key={post.id} title={post.title}
                          author={post.author} clicked={() => this.postSelectedHandler(post.id)} />
                // </Link>
            );
        });

        return (
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts;