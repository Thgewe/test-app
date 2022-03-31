import './post.css';

const Post = (props) => {

  const { title, text } = props;

  return (
    <div className='post'>
      <h3 className='post__title'>{title}</h3>
      <p className='post__text'>{text}</p>
    </div>
  )
}

export default Post;