import React, { useState } from 'react'

export default function Post() {

    const [post,setPost]=useState();
    const onClickHander = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1').then(response => response.json()).then(json => {
            setPost(json);
            console.log(json);
        })
    };
    return (
        <div>

            <p>ID : {post? post.id:null}</p>
            <button onClick={onClickHander}>Get Post </button>
        </div>
    )
}
