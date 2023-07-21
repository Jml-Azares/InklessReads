import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import axios from "axios";

const BlogDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [blogsNav, setBlogsNav] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `http://localhost:8000/api/blogs/${id}`; // Replace with your API URL
        const response = await axios.get(apiUrl);
        setData(response.data.blog);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("An error occurred while fetching data.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (blogsNav) {
    return <Navigate to="/blogs" />;
  }

  const handleDelete = async () => {
    try {
      const apiUrl = `http://localhost:8000/api/blogs/${id}`;
      await axios.delete(apiUrl);
      setBlogsNav(true);
    } catch (error) {
      console.error("Error deleting the blog:", error);
    }
  };

  return (
    <div className="blog-details">
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && (
        <article>
          <h2>{data.title}</h2>
          <div>{data.body}</div>
          <button onClick={handleDelete}>delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
