import "../../icofont.css";

const HomeStaticMedia = () => {
  return (
    <section className="static-media">
      <div className="container">
        <div className="row mb-n4">
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="media">
              <div className="media-body">
                <h4 className="title">Diagnose</h4>
                <p>Examination & Diagnosis</p>
              </div>
              <span className="icon icofont-stethoscope-alt"></span>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="media">
              <div className="media-body">
                <h4 className="title">Treatment</h4>
                <p>Treatment of the disease</p>
              </div>
              <span className="icon icofont-brain-alt"></span>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="media">
              <div className="media-body">
                <h4 className="title">Care Healthy</h4>
                <p>Care and recuperation</p>
              </div>
              <span className="icon icofont-paralysis-disability"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeStaticMedia;
