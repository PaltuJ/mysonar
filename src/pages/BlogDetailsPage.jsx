import BreadCrumbs from "../components/BreadCrumbs";
import DetailsPage from "../components/DetailsPage";
import { blogsData } from "./../data/UspData";
import blogsCrumbBg from "./../assets/images/breadcrumb/blogscrumb.jpg";
import { useParams } from "react-router-dom";

const BlogDetailsPage = () => {
  //   console.log(blogsData);
  const { id } = useParams();
  const urlIdblog = blogsData.find((b) => b.id === parseInt(id));
  //   console.log(urlIdblog);

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
          <h1 className="fw-bold text-center main_heading mb-4">
            {urlIdblog ? urlIdblog.title : "Blog Details"}
          </h1>
          <BreadCrumbs crumbParentTitle="Blog Details Page" />
        </div>
      </section>
      <section className="py-5 blogDetails_page">
        <DetailsPage
          sidebarTitle="Latest Blogs"
          detailsData={blogsData}
          defaultId="1"
        />
      </section>
    </>
  );
};

export default BlogDetailsPage;
