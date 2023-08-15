import './Post.css';

function Post() {
  return (
    <div className="post">
        <div className="image">
          <img src="https://images.pexels.com/photos/17811/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=900" alt="an image" />
        </div>

        <div className='texts'>
          <h2>An animal</h2>
          <small>
            <span className="author">Auteur</span>
            <time>2023-15-08 17:54</time>
          </small>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et dolorum officiis numquam tempora explicabo tenetur minima laboriosam atque, hic saepe deleniti quaerat enim quasi dolore culpa fuga. At, tempora necessitatibus.</p>
        </div>
      </div>
  )
}

export default Post;