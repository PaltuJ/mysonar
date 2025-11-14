import { SafeExperieceData } from "./../data/UspData";
const SafeExperiece = () => {
  return (
    <section className="safeExp py-5">
      <div className="container">
        <h5 className="mb-2 sub_heading fw-bold text-center">Our Approach</h5>
        <h2 className="mb-2 main_heading fw-bold text-center mb-5">
          We Offer Safe & Experienced Ear Piercings
        </h2>
        <div className="row">
          {SafeExperieceData.map((expItem) => {
            return (
              <div className="col-6 col-sm-3 col-lg-2" key={expItem.id}>
                <div className="safeExperienceWrap">
                  <div className="safeExp_img">
                    <img
                      src={expItem.image}
                      alt=""
                      className="d-block m-auto"
                    />
                  </div>
                  <div className="safeExp_content mt-4">
                    <h6 className="fw-bold text-center">{expItem.h4Text}</h6>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SafeExperiece;
