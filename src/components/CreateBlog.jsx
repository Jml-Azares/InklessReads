import { useEffect, useState } from "react";
import axios from "axios";
import "./blogs.css";
import { Navigate } from "react-router-dom";

function CreateBlogs() {
  const [formData, setFormData] = useState({ title: "", body: "" });
  const [blogsNav, setBlogsNav] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  if (blogsNav) {
    return <Navigate to="/blogs" />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/blogs",
        formData
      );
      if (response) {
        console.log(response.data);
        setFormData({
          title: "",
          body: "",
        });
        setBlogsNav(true);
      }
    } catch (error) {
      console.error(error); // Log any errors that occur during the request (optional)
    }
  };

  return (
    <>
      <div className="create-blog" onSubmit={handleSubmit}>
        <h2>Create Blog</h2>
        <form>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          <label>Body:</label>
          <textarea
            name="body"
            value={formData.body}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default CreateBlogs;
