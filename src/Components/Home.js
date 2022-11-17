import {useState, useEffect} from 'react';
import {firestore} from '../firebase';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const BlogHeading=styled.h1`
text-align: center;
color: #2196f3;
margin-bottom: 2px;
`

function Home() {
    const[posts, setPosts]=useState([]);

    useEffect(()=>{
        firestore
        .collection('posts')
        .get()
        .then((snapshot)=>{
            const posts=snapshot.docs.map((doc)=>{
                return{
                    id:doc.id,
                    ...doc.data(),
                };
            });

            console.log('posts',posts);
            setPosts(posts);
        });
    },[]);

    return (
      <div className="Home">
        <BlogHeading>Sports Blog</BlogHeading>
        <div id="blog-by">Kushagra</div>

        {posts.map((post,index)=>(
            <div className='post' key={`post-${index}`}>
                <Link to={`/posts/${post.id}`}>
                    <h3>{post.title}</h3>
                </Link>

                <p>{post.subtitle}</p>
            </div>    
        ))}
      </div>
    );
  }

  export default Home;
  const styles={
    heading:{
        fontSize:56,
        marginTop:30
    }
  }