const TestimonialLeftCol = () => {
  return (
    <>
      <h2 className="text-30">
        What our customers are
        <br /> saying us?
      </h2>
      <p className="mt-20">
      At Devsthan Expert, we take pride in providing unforgettable travel experiences.
      But don't just take our word for it—here's what our valued customers have to say
      </p>
      <div className="row y-gap-30 pt-60 lg:pt-40">
        <div className="col-sm-5 col-6">
          <div className="text-30 lh-15 fw-600">10K+</div>
          <div className="text-light-1 lh-15">Happy People</div>
        </div>
        <div className="col-sm-5 col-6">
          <div className="text-30 lh-15 fw-600">4.88</div>
          <div className="text-light-1 lh-15">Overall rating</div>
          <div className="d-flex x-gap-5 items-center pt-10">
            <div className="icon-star text-blue-1 text-10" />
            <div className="icon-star text-blue-1 text-10" />
            <div className="icon-star text-blue-1 text-10" />
            <div className="icon-star text-blue-1 text-10" />
            <div className="icon-star text-blue-1 text-10" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialLeftCol;
