import './styles.css'


export const PostCard = ({ title, cover, body, id }) => (
  <div className="post">
    <img src={cover} alt={title} />
    <div key={id} className="post-content">
      <h6>Post ID:{id}</h6>
      <h2>{title} </h2>
      <p>{body}</p>
    </div>
  </div>
);