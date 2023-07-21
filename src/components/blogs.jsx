import { useState } from "react";
import axios from "axios";

import Header from "./Header";
import Footer from "./Footer";
import "./blogs.css";

function Blogs() {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/blogs",
        formData
      );
      console.log(response.data); // Log the response from the server (optional)
      // Clear the form after successful submission
      setFormData({
        title: "",
        body: "",
      });
    } catch (error) {
      console.error(error); // Log any errors that occur during the request (optional)
    }
  };

  return (
    <>
      <Header />
      <div className="blog-form-container">
        <div className="blog-form">
          <h2 className="title">Create Blog</h2>
          <form onSubmit={handleSubmit}>
            <div className="blog-title-input">
              <label>Title:</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div className="blog-body-input">
              <label>Body:</label>
              <textarea
                name="body"
                value={formData.body}
                onChange={handleChange}
              ></textarea>
            </div>
            <button className="btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blogs;
