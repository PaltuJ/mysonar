import { UspData } from "../data/UspData";
const Usp = () => {
  return (
    <section className="usp-section py-5">
      <div className="container">
        <div className="row g-4">
          {Array.isArray(UspData) &&
            UspData.map((usp) => {
              const Icon = usp.icon;
              return (
                <div className="col-lg-4" key={usp.id}>
                  <div className="usp_card d-flex flex-column justify-content-center gap-3">
                    <div className="usp_head d-flex flex-column align-items-center gap-4">
                      <div className="usp_icon">
                        <Icon className="icon" />
                      </div>
                      <h4 className="mb-0">{usp.h4Text}</h4>
                    </div>
                    <p>{usp.paraText}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Usp;
