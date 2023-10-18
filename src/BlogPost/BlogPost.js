import './BlogPost.styles.css'


const BlogPost = ({ title, date, content }) => {
  return (
    <div className="blog-post">
      <h2>{title}</h2>
      <p>Date: {date}</p>
      <p>{content}</p>
    </div>
  );
};

export default BlogPost
