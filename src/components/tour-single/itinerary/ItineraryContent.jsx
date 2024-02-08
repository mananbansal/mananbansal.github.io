const ItineraryContent = () => {
  const itineraryContent = [
    {
      id: 1,
      targetCollapse: "item_1",
      itemNo: "1",
      title: "Delhi to Haridwar/Rishikesh",
      img: "/img/tours/list.png",
      content: `Depart from Delhi early in the morning.
      Arrive in Haridwar/Rishikesh by afternoon.
      Visit Har Ki Pauri or other attractions in Haridwar/Rishikesh.
      Overnight stay in Haridwar/Rishikesh`,
      classShowHide: "",
      duration: "225 Km | 5/6 Hr"
    },
    {
      id: 2,
      targetCollapse: "item_2",
      itemNo: "2",
      title: "Haridwar/Rishikesh to Barkot (Yamunotri)",
      img: "/img/tours/list.png",
      content: `Depart from Haridwar/Rishikesh to Barkot after breakfast.
      Arrive in Barkot by afternoon..
      Overnight stay in Uttarkashi.`,
      classShowHide: "show",
      duration: "195 Km | 6/7 Hr"
    },
    {
      id: 3,
      targetCollapse: "item_3",
      itemNo: "3",
      title: "Barkot to Yamunotri and back",
      img: "/img/tours/list.png",
      content: `Early morning departure to Janki Chatti.
      Trek or take a pony ride to Yamunotri Temple.
      After Darshan, return to Barkot.
      Overnight stay in Barkot`,
      classShowHide: "",
      duration: "60 Km + 12 Km Trek | 6/7 Hr"
    },
    {
      id: 4,
      targetCollapse: "item_4",
      itemNo: "4",
      title: "Barkot to Harshil Velly",
      img: "/img/tours/list.png",
      content: `Early morning departure to Harshil.
      Check into your hotel in Harshil.
      Overnight stay in Harshil.`,
      classShowHide: "",
      duration: "160 Km | 5/6 Hr"
    },
    {
      id: 4,
      targetCollapse: "item_4",
      itemNo: "4",
      title: "Barkot to Harshil Velly",
      img: "/img/tours/list.png",
      content: `Early morning departure to Harshil.
      Check into your hotel in Harshil.
      Overnight stay in Harshil.`,
      classShowHide: "",
      duration: "160 Km | 5/6 Hr"
    },
    {
      id: 4,
      targetCollapse: "item_4",
      itemNo: "4",
      title: "Barkot to Harshil Velly",
      img: "/img/tours/list.png",
      content: `Early morning departure to Harshil.
      Check into your hotel in Harshil.
      Overnight stay in Harshil.`,
      classShowHide: "",
      duration: "160 Km | 5/6 Hr"
    },
    {
      id: 4,
      targetCollapse: "item_4",
      itemNo: "4",
      title: "Barkot to Harshil Velly",
      img: "/img/tours/list.png",
      content: `Early morning departure to Harshil.
      Check into your hotel in Harshil.
      Overnight stay in Harshil.`,
      classShowHide: "",
      duration: "160 Km | 5/6 Hr"
    },
    {
      id: 4,
      targetCollapse: "item_4",
      itemNo: "4",
      title: "Barkot to Harshil Velly",
      img: "/img/tours/list.png",
      content: `Early morning departure to Harshil.
      Check into your hotel in Harshil.
      Overnight stay in Harshil.`,
      classShowHide: "",
      duration: "160 Km | 5/6 Hr"
    },
    {
      id: 4,
      targetCollapse: "item_4",
      itemNo: "4",
      title: "Barkot to Harshil Velly",
      img: "/img/tours/list.png",
      content: `Early morning departure to Harshil.
      Check into your hotel in Harshil.
      Overnight stay in Harshil.`,
      classShowHide: "",
      duration: "160 Km | 5/6 Hr"
    },
    {
      id: 4,
      targetCollapse: "item_4",
      itemNo: "4",
      title: "Barkot to Harshil Velly",
      img: "/img/tours/list.png",
      content: `Early morning departure to Harshil.
      Check into your hotel in Harshil.
      Overnight stay in Harshil.`,
      classShowHide: "",
      duration: "160 Km | 5/6 Hr"
    },
    {
      id: 11,
      targetCollapse: "item_11",
      itemNo: "11",
      title: "Barkot to Harshil Velly",
      img: "/img/tours/list.png",
      content: `Early morning departure to Harshil.
      Check into your hotel in Harshil.
      Overnight stay in Harshil.`,
      classShowHide: "",
      duration: "160 Km | 5/6 Hr"
    },
    {
      id: 12,
      targetCollapse: "item_12",
      itemNo: "12",
      title: "Rudraprayag to Haridwar",
      img: "/img/tours/list.png",
      content: `Depart from Rudraprayag/Srinagar to Rishikesh/Haridwar.
      Reach Rishikesh/Haridwar by afternoon.
      Visit other temples in Rishikesh/Haridwar if time permits.
      Overnight stay in Rishikesh/Haridwar.`,
      classShowHide: "",
      duration: "160 Km | 5/6 Hr"
    },
    {
      id: 13,
      targetCollapse: "item_13",
      itemNo: "13",
      title: "Rishikesh/Haridwar to Delhi",
      img: "/img/tours/list.png",
      content: `Drive back to Delhi.
      Reach Delhi by evening,
      concluding the Happy Relgious journey with
      Devsthan Expert.`,
      classShowHide: "",
      duration: "240 Km | 5/6 Hr"
    },
  ];

  return (
    <>
      {itineraryContent.map((item) => (
        <div className="col-12" key={item.id}>
          <div className="accordion__item ">
            <div className="d-flex">
              <div className="accordion__icon size-40 flex-center bg-blue-2 text-blue-1 rounded-full">
                <div className="text-14 fw-500">{item.itemNo}</div>
              </div>
              {/* End item number */}

              <div className="ml-20">
                <div className="text-16 lh-15 fw-500">{item.title}</div>
                <div className="text-14 lh-15 text-light-1 mt-5">
                  Duration: {item.duration}
                </div>
                <div
                  className={`accordion-collapse collapse ${item.classShowHide}`}
                  id={item.targetCollapse}
                  data-bs-parent="#itineraryContent"
                >
                  <div className="pt-15 pb-15">
                    <img
                      src={item.img}
                      alt="image"
                      className="rounded-4 mt-15"
                    />
                    <div className="text-14 lh-17 mt-15">{item.content}</div>
                  </div>
                </div>
                {/* End accordion conent */}

                <div
                  className="accordion__button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${item.targetCollapse}`}
                >
                  <button className="d-block lh-15 text-14 text-blue-1 underline fw-500 mt-5">
                    See details &amp; photo
                  </button>
                </div>
                {/* End accordion button */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ItineraryContent;
