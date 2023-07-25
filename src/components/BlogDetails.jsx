import { useContext, useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import axios from "axios";
import { StateContext } from "../contexts/ContextProvider";

const BlogDetails = () => {
  const { token } = useContext(StateContext);
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [blogsNav, setBlogsNav] = useState(false);
  const [titleInputShow, setTitleInputShow] = useState(false);
  const [bodyInputShow, setBodyInputShow] = useState(false);
  const [formData, setFormData] = useState({ title: "", body: "" });
  const [submitShow, setSubmitShow] = useState(false);

  /* Get request*/
  const fetchData = async () => {
    setData(null);
    setLoading(true);
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

  /*useEffect for Get request */
  useEffect(() => {
    fetchData();
  }, []);

  /*Put requeset */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.title || formData.body) {
      try {
        const response = await axios.put(
          `http://localhost:8000/api/blogs/${id}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Assuming your token is of the Bearer type.
              Accept: "application/json",
            },
          }
        );
        if (response) {
          console.log(response.data);
          setFormData({
            title: "",
            body: "",
          });
          fetchData();
          setTitleInputShow(false);
          setBodyInputShow(false);
        }
      } catch (error) {
        console.error(error); // Log any errors that occur during the request (optional)
      }
    } else {
      setBodyInputShow(false);
      setTitleInputShow(false);
    }
  };

  /* Delete request */
  const handleDelete = async () => {
    try {
      const apiUrl = `http://localhost:8000/api/blogs/${id}`;
      await axios.delete(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`, // Assuming your token is of the Bearer type.
          Accept: "application/json",
        },
      });
      setBlogsNav(true);
    } catch (error) {
      console.error("Error deleting the blog:", error);
    }
  };

  /* handleChange inputs */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  /* Show submit when inputs are true */
  useEffect(() => {
    if (titleInputShow || bodyInputShow) {
      setSubmitShow(true);
    } else {
      setSubmitShow(false);
    }
  }, [titleInputShow, bodyInputShow]);

  /* Navigate back to timeline after delete */
  if (blogsNav) {
    return <Navigate to="/blogs" />;
  }

  /* Component */
  return (
    <div className="blog-details">
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && (
        <article>
          {titleInputShow ? (
            <div>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
              <button
                onClick={() => {
                  setTitleInputShow(!titleInputShow);
                }}
              >
                Cancel
              </button>
            </div>
          ) : (
            <div>
              <h2>{data.title}</h2>
              <button
                onClick={() => {
                  setTitleInputShow(!titleInputShow);
                }}
              >
                <i className="fa-regular fa-pen-to-square"></i>
              </button>
            </div>
          )}
          {bodyInputShow ? (
            <div>
              <textarea
                name="body"
                value={formData.body}
                onChange={handleChange}
              ></textarea>
              <button
                onClick={() => {
                  setBodyInputShow(!bodyInputShow);
                }}
              >
                Cancel
              </button>
            </div>
          ) : (
            <div>
              {data.body}
              <button
                onClick={() => {
                  setBodyInputShow(!bodyInputShow);
                }}
              >
                <i className="fa-regular fa-pen-to-square"></i>
              </button>
            </div>
          )}
          {submitShow ? (
            <button onClick={handleSubmit}>Update</button>
          ) : (
            <button onClick={handleDelete}>Delete</button>
          )}
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
