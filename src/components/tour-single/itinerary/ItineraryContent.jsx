const ItineraryContent = ({tour}) => {
  // const itineraryContent = [
  //   {
  //     id: 1,
  //     targetCollapse: "item_1",
  //     itemNo: "1",
  //     title: "Delhi to Haridwar/Rishikesh",
  //     img: "/img/tours/list.png",
  //     content: `Depart from Delhi early in the morning.
  //     Arrive in Haridwar/Rishikesh by afternoon.
  //     Visit Har Ki Pauri or other attractions in Haridwar/Rishikesh.
  //     Overnight stay in Haridwar/Rishikesh`,
  //     classShowHide: "",
  //     duration: "225 Km | 5/6 Hr",
  //     meal:"breakfast"
  //   },
  //   {
  //     id: 2,
  //     targetCollapse: "item_2",
  //     itemNo: "2",
  //     title: "Haridwar/Rishikesh to Barkot (Yamunotri)",
  //     img: "/img/tours/list.png",
  //     content: `Depart from Haridwar/Rishikesh to Barkot after breakfast.
  //     Arrive in Barkot by afternoon..
  //     Overnight stay in Uttarkashi.`,
  //     classShowHide: "show",
  //     duration: "195 Km | 6/7 Hr",
  //     meal:"breakfast"
  //   },
  //   {
  //     id: 3,
  //     targetCollapse: "item_3",
  //     itemNo: "3",
  //     title: "Barkot to Yamunotri and back",
  //     img: "/img/tours/list.png",
  //     content: `Early morning departure to Janki Chatti.
  //     Trek or take a pony ride to Yamunotri Temple.
  //     After Darshan, return to Barkot.
  //     Overnight stay in Barkot`,
  //     classShowHide: "",
  //     duration: "60 Km + 12 Km Trek | 6/7 Hr",
  //     meal:"breakfast"
  //   },
  //   {
  //     id: 4,
  //     targetCollapse: "item_4",
  //     itemNo: "4",
  //     title: "Barkot to Harshil Velly",
  //     img: "/img/tours/list.png",
  //     content: `Early morning departure to Harshil.
  //     Check into your hotel in Harshil.
  //     Overnight stay in Harshil.`,
  //     classShowHide: "",
  //     duration: "160 Km | 5/6 Hr",
  //     meal:"breakfast"
  //   },
  //   {
  //     id: 5,
  //     targetCollapse: "item_5",
  //     itemNo: "5",
  //     title: "Harshil to Gangotri and back Uttarkashi",
  //     img: "/img/tours/list.png",
  //     content: `Early morning departure to Gangotri.
  //     Visit Gangotri Temple and offer prayers.
  //     Return to Uttarkashi.
  //     Overnight stay in Uttarkashi.`,
  //     classShowHide: "",
  //     duration: "130 Km | 7/8 Hr",
  //     meal:"breakfast"
  //   },
  //   {
  //     id: 6,
  //     targetCollapse: "item_6",
  //     itemNo: "6",
  //     title: "Uttarkashi to Guptkashi/Phata",
  //     img: "/img/tours/list.png",
  //     content: `Visit Vishwanath Temple and other local attractions. 
  //     Depart from Uttarkashi to Guptkashi (Approx. 8-9 hours
  //     journey).
  //     En route, visit Tehri Dam.
  //     Check into your hotel upon arrival.
  //     Overnight stay in Guptkashi.`,
  //     classShowHide: "",
  //     duration: "220 Km | 9/10 Hr",
  //     meal:"breakfast"
  //   },
  //   {
  //     id: 7,
  //     targetCollapse: "item_7",
  //     itemNo: "7",
  //     title: "Guptkashi/Phata to Kedarnath",
  //     img: "/img/tours/list.png",
  //     content: `Depart from Guptkashi to Gori Kund by road.
  //     From Gori Kund, proceed to Kedarnath by
  //     foot or helicopter.
  //     Visit Kedarnath Temple and seek blessings.
  //     Overnight stay in Kedarnath.`,
  //     classShowHide: "",
  //     duration: "50 Km +32 km trek | 8/9 Hr",
  //     meal:"breakfast"
  //   },
  //   {
  //     id: 8,
  //     targetCollapse: "item_8",
  //     itemNo: "8",
  //     title: "Kedarnath to Guptkashi/Phata",
  //     img: "/img/tours/list.png",
  //     content: `In the morning, visit the temple again for a serene
  //     experience.
  //     Trek back to Gaurikund.
  //     Drive back to Guptkashi.
  //     Overnight stay in Guptkashi.`,
  //     classShowHide: "",
  //     duration: "50 Km +32 km trek | 8/9 Hr",
  //     meal:"breakfast"
  //   },
  //   {
  //     id: 9,
  //     targetCollapse: "item_9",
  //     itemNo: "9",
  //     title: "Guptkashi/Phata to Pipel Koti",
  //     img: "/img/tours/list.png",
  //     content: `Depart from Guptkashi/Phata to Pipel Koti.
  //     En route, visit Chopta, Tungnath Temple,
  //     and other places.
  //     Reach Pipal Koti by evening.
  //     Overnight stay in Pipal Koti.`,
  //     classShowHide: "",
  //     duration: "120 Km + 8Km Trek | 9/10 Hr",
  //     meal:"breakfast"
  //   },
  //   {
  //     id: 10,
  //     targetCollapse: "item_10",
  //     itemNo: "10",
  //     title: "Pipel Koti to Badrinath Dham",
  //     img: "/img/tours/list.png",
  //     content: `Depart from Pipal Koti to Badrinath.
  //     En route, visit Joshimath, Narsimha Temple, and other
  //     places.
  //     Reach Badrinath by after noon.
  //     Visit Badrinath Temple for evening Aarti.
  //     Overnight stay in Badrinath.`,
  //     classShowHide: "",
  //     duration: "75 Km | 5/6 Hr",
  //     meal:"breakfast"
  //   },
  //   {
  //     id: 11,
  //     targetCollapse: "item_11",
  //     itemNo: "11",
  //     title: "Badrinath to Rudraprayag",
  //     img: "/img/tours/list.png",
  //     content: `Early morning, attend the Puja at
  //     Badrinath Temple.
  //     Visit Mana Village, the last village
  //     before the Tibetan border.
  //     Drive back to Rudraprayag/Srinagar.
  //     Overnight stay in
  //     Rudraprayag/Srinagar.`,
  //     classShowHide: "",
  //     duration: "190 Km | 7/8 Hr",
  //     meal:"breakfast"
  //   },
  //   {
  //     id: 12,
  //     targetCollapse: "item_12",
  //     itemNo: "12",
  //     title: "Rudraprayag to Haridwar",
  //     img: "/img/tours/list.png",
  //     content: `Depart from Rudraprayag/Srinagar to Rishikesh/Haridwar.
  //     Reach Rishikesh/Haridwar by afternoon.
  //     Visit other temples in Rishikesh/Haridwar if time permits.
  //     Overnight stay in Rishikesh/Haridwar.`,
  //     classShowHide: "",
  //     duration: "160 Km | 5/6 Hr",
  //     meal:"breakfast"
  //   },
  //   {
  //     id: 13,
  //     targetCollapse: "item_13",
  //     itemNo: "13",
  //     title: "Rishikesh/Haridwar to Delhi",
  //     img: "/img/tours/list.png",
  //     content: `Drive back to Delhi.
  //     Reach Delhi by evening,
  //     concluding the Happy Relgious journey with
  //     Devsthan Expert.`,
  //     classShowHide: "",
  //     duration: "240 Km | 5/6 Hr",
  //     meal:"breakfast"
  //   },
  // ];

  return (
    <>
      {/* {itineraryContent.map((item) => ( */}
      {tour.itineraryContent.map((item) => (
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
                <div className="text-14 lh-15 text-light-1 mt-5">
                  Meal: {item.meal}
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
