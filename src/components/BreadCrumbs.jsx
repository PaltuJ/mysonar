import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

const BreadCrumbs = ({ custumBreadcrumb, crumbParentTitle = "" }) => {
  return (
    <>
      <Breadcrumb
        className={`breadcrumb ${
          custumBreadcrumb?.trim() || ""
        } position-relative d-flex align-items-center justify-content-center`}
      >
        {/* First item: clickable link */}
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
          Home
        </Breadcrumb.Item>
        {crumbParentTitle && (
          <Breadcrumb.Item active>{crumbParentTitle}</Breadcrumb.Item>
        )}

        {/* Show Next Breadcrumb only if available */}
        {custumBreadcrumb && (
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
            {custumBreadcrumb}
          </Breadcrumb.Item>
        )}
      </Breadcrumb>
    </>
  );
};

export default BreadCrumbs;
