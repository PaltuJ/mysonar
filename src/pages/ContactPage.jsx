import blogsCrumbBg from "../assets/images/breadcrumb/blogscrumb.jpg";
import BreadCrumbs from "../components/BreadCrumbs";
import ContactForm from "../components/ContactForm";
import SidebarCall from "../components/SidebarCall";

const ContactPage = () => {
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
            Contact Page
          </h1>
          <BreadCrumbs crumbParentTitle="Blog Details Page" />
        </div>
      </section>
      <section className="contactPage_details py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <SidebarCall />
            </div>
            <div className="col-lg-8">
              <div className="contact_form_wrapper">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
