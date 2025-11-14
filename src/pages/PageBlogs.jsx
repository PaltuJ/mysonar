import BreadCrumbs from "../components/BreadCrumbs";
import Blogs from "./../components/Blogs";
import blogsCrumbBg from "./../assets/images/breadcrumb/blogscrumb.jpg";

const PageBlogs = () => {
  return (
    <>
      <section
        className="page_breadcrumb"
        style={{
          background: `rgba(0, 0, 0, 0.6) url(${blogsCrumbBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="container">
          <h2 className="fw-bold text-center main_heading mb-4">Blogs Page</h2>
          <BreadCrumbs crumbParentTitle="Blogs Page" />
        </div>
      </section>
      <section className="page_blogs py-5">
        <div className="container">
          <Blogs />
        </div>
      </section>
    </>
  );
};

export default PageBlogs;
