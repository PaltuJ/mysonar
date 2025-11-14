import Blogs from "./Blogs";
import MainButton from "./MainButton";

const BlogsHome = () => {
  return (
    <section className="homePage_blogs py-5 my-5">
      <div className="container">
        <h5 className="sub_heading fw-bold text-center">Blogs</h5>
        <h2 className="mb-3 main_heading fw-bold text-center">
          Our Latest Blogs & Articles
        </h2>
        <div className="more__btn mb-5 text-center">
          <MainButton customClass="page-btn">More Blogs</MainButton>
        </div>
        <Blogs limits={3} />
      </div>
    </section>
  );
};

export default BlogsHome;
