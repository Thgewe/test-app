import Post from '../Post/Post';

import { useEffect, useState } from 'react';
import { PersonService } from '../services/PersonService';
import './PostList.css';

const PostList = (props) => {
  const { name, personId } = props;
  const { getPersonPostsById } = PersonService();
  const [ posts, setPosts ] = useState();
  const [ formattedPosts, setFormattedPosts ] = useState(null);

  useEffect(() => {
    updatePosts();
  }, [])

  useEffect(() => {
    setFormattedPosts(formatPosts(posts));;
  }, [posts])
  useEffect(() => {
    updatePosts();
  }, [personId])

  const formatPosts = (arr) => {
    if (arr === undefined || arr.length === 0) return null
    const newArr = [arr[0], arr[1], arr[2]];
    return newArr.map((post) => {
      return <Post key={post.id} title={post.title} text={post.body} />
    })
  }

  const updatePosts = () => {
    getPersonPostsById(personId)
      .then(data => {setPosts(data)})
  }
  const content = name === undefined ?
      <div className='postList__plug'>Выберите человека, чтобы посмотреть его посты</div> :
      <View formattedPosts={formattedPosts} name={name} />;
  return (
    <div className='postList'>
      {content}
    </div>
  )
}

const View = (props) => {
  const { formattedPosts, name } = props;
  return (
    <>
      <h2 className='postList__header'>{`3 актуальных поста ${name}`}</h2>
      <div className='postList__posts'>
        {formattedPosts}
      </div>
    </>
  )
}

export default PostList;