import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handeClick}>delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
