import React, { useState } from "react";
import { Link } from "react-router-dom";
import SidebarCall from "./SidebarCall";

const DetailsPage = ({ sidebarTitle, detailsData = [], defaultId }) => {
  console.log(detailsData);
  const [currentId, setCurrentId] = useState(
    defaultId || (detailsData[0] && detailsData[0].id)
  );
  const currentItem = detailsData.find(
    (item) => item.id === parseInt(currentId)
  );

  if (!currentItem) {
    return <div>Item not found</div>;
  }

  const latestItems = detailsData
    .filter((item) => item.id !== parseInt(currentId))
    .slice(0, 10);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <article className="maincontent">
            {currentItem.featured_image && (
              <figure className="m-0 featured_image mb-4">
                <img
                  src={currentItem.featured_image}
                  alt=""
                  className="image-fluid w-100"
                />
              </figure>
            )}
            <h2 className="mb-4">{currentItem.title}</h2>
            <div
              className="content prose max-w-none"
              dangerouslySetInnerHTML={{ __html: currentItem.content }}
            />
          </article>
        </div>
        <div className="col-lg-4 sidebar_area">
          <aside className="sidebar p-4">
            <h3 className="sidebar_title fw-bold">{sidebarTitle}</h3>
            <ul className="sidebar_list g-2 row m-0 p-0">
              {latestItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to="#."
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentId(item.id);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="moreItem d-inline-flex align-items-center gap-2"
                  >
                    <div className="moreItem_img">
                      <img src={item.featured_image} alt="" />
                    </div>
                    <h6 className="moreItem_title">{item.title}</h6>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
          <SidebarCall />
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
