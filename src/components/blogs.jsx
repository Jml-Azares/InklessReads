import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = "http://localhost:8000/api/blogs"; // Replace with your API URL
        const response = await axios.get(apiUrl);
        setData(response.data.blogs.reverse()); // Reverse the order of data
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("An error occurred while fetching data.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      {data && (
        <div className="blog-list">
          <h1>All blogs</h1>
          {data.map((blog) => (
            <div className="blog-preview" key={blog.id}>
              <Link to={`/blog/${blog.id}`}>
                <h2>{blog.title}</h2>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;
