const Overview = ({tour}) => {
  return (
    <>
      <div className="row x-gap-40 y-gap-40">
        <div className="col-12">
          <h3 className="text-22 fw-500">Overview</h3>

          <p className="text-dark-1 text-15 mt-20">
          {tour?.desc}
          </p>

          {/* <a
            href="#"
            className="d-block text-14 text-blue-1 fw-500 underline mt-10"
          >
            Show More
          </a> */}
        </div>

        <div className="col-md-6">
          <h5 className="text-16 fw-500">Available languages</h5>
          <div className="text-15 mt-10">
          {tour?.languages}
          {/* Available languages */}
          </div>
        </div>

        <div className="col-md-6">
          <h5 className="text-16 fw-500">Cancellation policy</h5>
          <div className="text-15 mt-10">
          {tour?.cancelPolicy}
          {/* Cancellation policy */}
          </div>
        </div>

        <div className="col-12">
          <h5 className="text-16 fw-500">Highlights</h5>
          <ul className="list-disc text-15 mt-10">
          {
          tour.highlights.map((highlight) => (
          <li key={highlight.id}>{highlight.value}</li>
        ))}
          {/* <li> Highlights </li> */}
          </ul>
        </div>
      </div>

      <div className="mt-40 border-top-light">
        <div className="row x-gap-40 y-gap-40 pt-40">
          <div className="col-12">
            <h3 className="text-22 fw-500">What&lsquo;s Included</h3>

            <div className="row x-gap-40 y-gap-40 pt-20">
              <div className="col-md-6">
                {
                 tour.included.map((include) => (
                  <div className="text-dark-1 text-15"  key={include.id}>  
                  <i className="icon-check text-10 mr-10" key={include.id}></i> {include.value}
                  </div>
                      ))}
                  {/* <div className="text-dark-1 text-15">
                  <i className="icon-check text-10 mr-10"></i> included
                    </div> */}
              </div>

              <div className="col-md-6">
              {
               tour.excluded.map((exclude) => (
                <div className="text-dark-1 text-15" key={exclude.id}>
                  <i className="icon-close text-green-2 text-10 mr-10" key={exclude.id}></i> {exclude.value}
                </div>
                      ))}
                {/* <div className="text-dark-1 text-15">
                  <i className="icon-close text-green-2 text-10 mr-10"></i> Excluded
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
