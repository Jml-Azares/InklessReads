import { Link, Outlet } from "react-router-dom";

const BlogsNav = () => {
  return (
    <>
      <div className="blogs-nav">
        <div className="links">
          <Link to="/blogs">Timeline</Link>
          <Link to="/create-blog">New Blog</Link>
        </div>
      </div>
      <div className="blog-container">
        <Outlet />
      </div>
    </>
  );
};

export default BlogsNav;
