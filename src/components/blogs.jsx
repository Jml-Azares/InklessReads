import Header from "./Header";
import Footer from "./Footer";

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
      <div>
        <h2>Create Blog</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Body:</label>
            <textarea
              name="body"
              value={formData.body}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Blogs;
