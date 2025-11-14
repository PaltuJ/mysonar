import { Link } from "react-router-dom";
import { blogsData } from "./../data/UspData";
const Blogs = ({ limits }) => {
  //   console.log(blogsData);

  const blogsToshow = limits ? blogsData.slice(0, limits) : blogsData;

  return (
    <div className="row justify-content-center g-5">
      {blogsToshow && blogsToshow.length > 0 ? (
        blogsToshow.map((blog) => (
          <div className="col-md-6 col-lg-4" key={blog.id}>
            <Link to={`/blogs/${blog.id}`} className="text-decoration-none">
              <div className="blogItem" key={blog.id}>
                <figure className="m-0">
                  <img src={blog.featured_image} alt="" />
                </figure>
                <div className="blogsContent">
                  <h4>{blog.title}</h4>
                  <p className="blogsPara">{blog.excerpt}</p>
                </div>
              </div>
            </Link>
          </div>
        ))
      ) : (
        <p>No blogs available</p>
      )}
    </div>
  );
};

export default Blogs;
