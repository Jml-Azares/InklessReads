import { Link, Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const BlogsNav = () => {
  return (
    <>
      <Header />
      <div className="blogs-nav">
        <div className="links">
          <Link to="/blogs">Timeline</Link>
          <Link to="/create-blog">New Blog</Link>
        </div>
      </div>
      <div className="blog-container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default BlogsNav;
