import React from "react";
import PostItemes from "./PostItems";
import {TransitionGroup} from "react-transition-group"
import {CSSTransition} from "react-transition-group";

const PostLists = ({posts, title, remove}) => {
    
    if (!posts.length) {    
       return <h1 style={{textAlign:'center'}}>Posts not found</h1>
    }
    return (
    <div>
        <h1 style={{textAlign: 'center'}}>{title}</h1>
        <TransitionGroup>
                {posts.map((post, index) =>
                <CSSTransition
                key={post.id}
                timeout={700}
                classNames="post">
                <PostItemes remove={remove} number={index + 1} post={post}/>
                </CSSTransition>
                )}
                </TransitionGroup>
                </div>
                )
            }

export default PostLists;