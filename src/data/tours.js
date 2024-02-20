const tours = [
  {
    id: 1,
    tag: "LIKELY TO SELL OUT*",
    slideImg: ["/img/tours/Untitled design (1).png","/img/tours/Yamunotri (2).png","https://www.youtube.com/watch?v=zqfzDwVw-2w", "/img/tours/Untitled design (2).png",],
    title: "Char Dham Yatra with tungnath Ex Delhi 11N/12D",
    location: "Uttrakhand, India",
    duration: "12",
    numberOfReviews: "3014",
    price: "63,000",
    tourType: "Full-day Tours",
    delayAnimation: "100",
    desc: "Chardham Yatra is a revered pilgrimage circuit in India, encompassing Yamunotri, Gangotri, Kedarnath, and Badrinath. Situated in the Himalayas, pilgrims embark on this sacred journey for spiritual purification and blessings. Yamunotri is dedicated to the goddess Yamuna, Gangotri to the Ganges, Kedarnath to Lord Shiva, and Badrinath to Lord Vishnu. The yatra involves traversing challenging terrains, offering prayers, and participating in rituals at each site. Pilgrims believe that completing this circuit brings divine blessings and spiritual fulfillment. The Chardham Yatra holds deep religious significance, attracting devotees seeking a profound connection with their faith amidst the awe-inspiring landscapes of Uttarakhand.",
    languages:"English, Hindi",
    cancelPolicy: "For a refund, cancel at least 7 Days in advance of the start date of the experience." ,
    highlights: [
      {id:1, value: "Sacred Sites: Chardham Yatra includes four holy destinations – Yamunotri, Gangotri, Kedarnath, and Badrinath, each holding significant religious importance in Hinduism."},
      {id:2, value:"Spiritual Significance: Pilgrims undertake the yatra to seek spiritual blessings, cleanse their sins, and attain a deeper connection with their faith by participating in rituals and prayers at these revered locations."},
      {id:3, value:"Himalayan Scenery: The journey unfolds amidst breathtaking Himalayan landscapes, offering awe-inspiring views of snow-capped peaks, lush valleys, and serene rivers, enhancing the pilgrimage with natural beauty."}
    ],
    included:[
      {id:1, value:"Accommodation on twin sharing basis in hotels mentioned or similar"},
      {id:2, value:"Airport Pick up with Wash & Change rooms with breakfast at New Delhi"},
      {id:3, value:"Meals as per package (Breakfast including packed & Dinner)"},
      {id:4, value:"1 Lunch en-route to Haridwar (Day 1)"},
      {id:5, value:"1 Lunch en-route to Kedarnath (Day 7)"},
      {id:6, value:"Kedarnath stay (Neat and clean basic GMVN guest house stay on sharing basis/ Dormitory)"},
      {id:7, value:"Per day 1 x 500 mineral water bottle to each guests"},
      {id:8, value:"Service of professional Tour Manager will be provided 10 passengers & Above"},
      {id:9, value:"Travel Insurance for guest up to 70 years"},
      {id:10, value:"Vehicles as per group size on Sharing basis"},
      {id:11, value:"Vehicle is not at disposal – means it is for transfers and sightseeing as per the itinerary"},
      {id:12, value:"Seats Allotment in the Vehicle is on first come first serve basis at the venue, irrespective of the booking dates"}
    ],
    excluded:[
      {id:1, value:"Flight fare"},
      {id:2, value:"Helicopter Shuttle tickets to Kedarnath (Subject to availability)"},
      {id:3, value:"Train fare/ Airfare"},
      {id:4, value:"Pony & Palki Charges"},
      {id:5, value:"Lunches"},
      {id:6, value:"Travel insurance covering medical evacuation, hospitalization, air evacuation, baggage insurance and trip cancellation."},
      {id:7, value:"Use of mini-bar in the hotel rooms wherever applicable"},
      {id:8, value:"Any optional trips other than specified in the program."},
      {id:9, value:"Any en-route or personal expenses such as alcoholic and non-alcoholic beverages, telephone calls, tips & gratuities, laundry etc."},
      {id:10, value:"Personal equipment like clothes, shoes, daypacks, personal medical kit etc."},
      {id:11, value:"Any exigency expenses due to reasons beyond our normal control"},
      {id:12, value:"Any personal expenses, room service & special orders, mineral waters alcoholic & non-alcoholic beverages, porterage, tips, phone calls, laundry etc"},
      {id:13, value:"Any extra excursions or sightseeing apart from the above specified itinerary."},
      {id:14, value:"Camera fees, guide charges"},
      {id:15, value:"Any incidental and other expenses which are not specified in the inclusions"},
      {id:16, value:"Government Service Tax (GST)"}, 
    ],
    itineraryContent:[
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
        duration: "225 Km | 5/6 Hr",
        meal:"breakfast"
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
        duration: "195 Km | 6/7 Hr",
        meal:"breakfast"
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
        duration: "60 Km + 12 Km Trek | 6/7 Hr",
        meal:"breakfast"
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
        duration: "160 Km | 5/6 Hr",
        meal:"breakfast"
      },
      {
        id: 5,
        targetCollapse: "item_5",
        itemNo: "5",
        title: "Harshil to Gangotri and back Uttarkashi",
        img: "/img/tours/list.png",
        content: `Early morning departure to Gangotri.
        Visit Gangotri Temple and offer prayers.
        Return to Uttarkashi.
        Overnight stay in Uttarkashi.`,
        classShowHide: "",
        duration: "130 Km | 7/8 Hr",
        meal:"breakfast"
      },
      {
        id: 6,
        targetCollapse: "item_6",
        itemNo: "6",
        title: "Uttarkashi to Guptkashi/Phata",
        img: "/img/tours/list.png",
        content: `Visit Vishwanath Temple and other local attractions. 
        Depart from Uttarkashi to Guptkashi (Approx. 8-9 hours
        journey).
        En route, visit Tehri Dam.
        Check into your hotel upon arrival.
        Overnight stay in Guptkashi.`,
        classShowHide: "",
        duration: "220 Km | 9/10 Hr",
        meal:"breakfast"
      },
      {
        id: 7,
        targetCollapse: "item_7",
        itemNo: "7",
        title: "Guptkashi/Phata to Kedarnath",
        img: "/img/tours/list.png",
        content: `Depart from Guptkashi to Gori Kund by road.
        From Gori Kund, proceed to Kedarnath by
        foot or helicopter.
        Visit Kedarnath Temple and seek blessings.
        Overnight stay in Kedarnath.`,
        classShowHide: "",
        duration: "50 Km +32 km trek | 8/9 Hr",
        meal:"breakfast"
      },
      {
        id: 8,
        targetCollapse: "item_8",
        itemNo: "8",
        title: "Kedarnath to Guptkashi/Phata",
        img: "/img/tours/list.png",
        content: `In the morning, visit the temple again for a serene
        experience.
        Trek back to Gaurikund.
        Drive back to Guptkashi.
        Overnight stay in Guptkashi.`,
        classShowHide: "",
        duration: "50 Km +32 km trek | 8/9 Hr",
        meal:"breakfast"
      },
      {
        id: 9,
        targetCollapse: "item_9",
        itemNo: "9",
        title: "Guptkashi/Phata to Pipel Koti",
        img: "/img/tours/list.png",
        content: `Depart from Guptkashi/Phata to Pipel Koti.
        En route, visit Chopta, Tungnath Temple,
        and other places.
        Reach Pipal Koti by evening.
        Overnight stay in Pipal Koti.`,
        classShowHide: "",
        duration: "120 Km + 8Km Trek | 9/10 Hr",
        meal:"breakfast"
      },
      {
        id: 10,
        targetCollapse: "item_10",
        itemNo: "10",
        title: "Pipel Koti to Badrinath Dham",
        img: "/img/tours/list.png",
        content: `Depart from Pipal Koti to Badrinath.
        En route, visit Joshimath, Narsimha Temple, and other
        places.
        Reach Badrinath by after noon.
        Visit Badrinath Temple for evening Aarti.
        Overnight stay in Badrinath.`,
        classShowHide: "",
        duration: "75 Km | 5/6 Hr",
        meal:"breakfast"
      },
      {
        id: 11,
        targetCollapse: "item_11",
        itemNo: "11",
        title: "Badrinath to Rudraprayag",
        img: "/img/tours/list.png",
        content: `Early morning, attend the Puja at
        Badrinath Temple.
        Visit Mana Village, the last village
        before the Tibetan border.
        Drive back to Rudraprayag/Srinagar.
        Overnight stay in
        Rudraprayag/Srinagar.`,
        classShowHide: "",
        duration: "190 Km | 7/8 Hr",
        meal:"breakfast"
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
        duration: "160 Km | 5/6 Hr",
        meal:"breakfast"
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
        duration: "240 Km | 5/6 Hr",
        meal:"breakfast"
      },
    ]
  },
  {
    id: 2,
    tag: "",
    slideImg: ["/img/tours/chardham-helicopter.png"],
    title: "Char Dham Yatra By Helicopter",
    location: "Uttrakhand, India",
    duration: "6",
    numberOfReviews: "2045",
    price: "1,95,000",
    tourType: "Full-day Tours",
    delayAnimation: "200",
    desc: "The Char Dham Yatra by helicopter offers a convenient and efficient way to visit the four sacred Hindu pilgrimage sites in Uttarakhand, collectively known as the Char Dhams. These revered sites—Yamunotri, Gangotri, Kedarnath, and Badrinath—draw millions of devotees each year. The yatra takes place in the state of Uttarakhand, India. Traveling by helicopter allows you to cover these spiritual destinations in a shorter time frame, typically 5 days. The ideal months for this journey are May and June or September and November, when the skies are clear and stable. Remember to pack appropriately for the high altitudes, respect local traditions, and carry essential documents like personal IDs and COVID-19 reports.",
    cancelPolicy: "For a refund, cancel at least 7 Days in advance of the start date of the experience." ,
    highlights: [
      {id:1, value: "Chardham Yatra by Helicopter"},
      {id:2, value:"VIP Darshan at all Four temples i.e. Yamunotri, Gangotri, Kedarnath and Badrinath."},
      {id:3, value:"Palki (Sedan Chair) at Yamunotri"}
    ],
    included:[
      {id:1, value:"Helicopter trip starts from Dehradun."},
      {id:2, value:"Accommodation in the hotels listed or similar."},
      {id:3, value:"Meals as mentioned in the itinerary. Note: Veg meals on fixed menu."},
      {id:4, value:"All Meal ( Expect Lunch At Dehradun)"},
      {id:5, value:"Government Royalty Fee"},
      {id:6, value:"VIP Darshan at all four temples i.e. Yamunotri, Gangotri, Kedarnath and Badrinath. (Subject to government approval)"},
      {id:7, value:"Palki (Sedan Chair) at Yamunotri."},
      {id:8, value:"All local transport as per Toyota Innova/ Best available vehicle"}
    ],
    excluded:[
      {id:1, value:"Rates are subject to change in case of any major hike in fuel prices."},
      {id:2, value:"Train fare/ Airfare "},
      {id:3, value:"Travel insurance covering medical evacuation, hospitalization, air evacuation, baggage insurance and trip cancellation."},
      {id:4, value:"Any optional trips other than specified in the program."},
      {id:5, value:"Any en-route or personal expenses such as alcoholic and non-alcoholic beverages, telephone calls, tips & gratuities, laundry etc."},
      {id:6, value:"Personal equipment like clothes, shoes, daypacks, personal medical kit etc."},
      {id:7, value:"Any exigency expenses due to reasons beyond our normal control"},
      {id:8, value:"Any personal expenses, room service & special orders, mineral waters alcoholic & non-alcoholic, beverages, porterage, tips, phone calls, laundry etc."},
      {id:9, value:"Any extra excursions or sightseeing apart from the above specified itinerary."},
      {id:10, value:"Camera fees, guide charges"},
      {id:11, value:"Any incidental and other expenses which are not specified in the inclusions."},
      {id:12, value:"Government Service Tax (GST)"},
    ],
    itineraryContent:[
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
        duration: "225 Km | 5/6 Hr",
        meal:"breakfast"
      },

    ]
  },

  {
    id: 3,
    tag: "best seller",
    slideImg: ["/img/tours/dodham.png"],
    title: "Do Dham Yatra - By Road Badrinath And Kedarnath",
    location: "Uttarakhand, India",
    duration: "8",
    numberOfReviews: "2163",
    price: "53,000",
    tourType: "Full-day Tours",
    delayAnimation: "300",
    desc: "Do Dham Yatra involves a road trip to Badrinath and Kedarnath, two sacred Hindu shrines in Uttarakhand, India. Pilgrims embark on a spiritual journey through picturesque landscapes, seeking blessings from Lord Vishnu at Badrinath and Lord Shiva at Kedarnath. The yatra combines religious devotion with the beauty of the Himalayas.",
    cancelPolicy: "For a refund, cancel at least 7 Days in advance of the start date of the experience." ,
    highlights: [
      {id:1, value: "Sacred Sites: Chardham Yatra includes four holy destinations – Kedarnath, and Badrinath, each holding significant religious importance in Hinduism."},
      {id:2, value:"Spiritual Significance: Pilgrims undertake the yatra to seek spiritual blessings, cleanse their sins, and attain a deeper connection with their faith by participating in rituals and prayers at these revered locations."},
      {id:3, value:"Himalayan Scenery: The journey unfolds amidst breathtaking Himalayan landscapes, offering awe-inspiring views of snow-capped peaks, lush valleys, and serene rivers, enhancing the pilgrimage with natural beauty."}
    ],
    included:[
      {id:1, value:"Accommodation on twin sharing basis in hotels/Tents mentioned except Kedarnath stay on 4 to 5 sharing basis"},
      {id:2, value:"Daily Breakfast & Dinner"},
      {id:3, value:"Transfer & Sightseeing by Ac Vehicle (A/c will switch off in Hills)."},
      {id:4, value:"Per day 1 x 500 mineral water bottle to each guests"},
      {id:5, value:"Diver Allowance, Toll tax, parking Charges"},
      {id:6, value:"Travel Insurance guest below 70 years"},
    ],
    excluded:[
      {id:1, value:"Flight fare"},
      {id:2, value:"Train fare/ Airfare "},
      {id:3, value:"Helicopter shuttle to Kedarnath"},
      {id:4, value:"Lunches"},
      {id:5, value:"Travel insurance covering medical evacuation, hospitalization, air evacuation, baggage insurance and trip"},
      {id:6, value:"cancellation."},
      {id:7, value:"Use of mini-bar in the hotel rooms wherever applicable"},
      {id:8, value:"Any optional trips other than specified in the program."},
      {id:9, value:"Any en-route or personal expenses such as alcoholic and non-alcoholic beverages, telephone calls, tips &gratuities, laundry etc."},
      {id:10, value:"Personal equipment like clothes, shoes, daypacks, personal medical kit etc."},
      {id:11, value:"Any exigency expenses due to reasons beyond our normal control"},
      {id:12, value:"Government Service Tax (GST)"},
    ],
    itineraryContent:[
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
        duration: "225 Km | 5/6 Hr",
        meal:"breakfast"
      },

    ]
  },
  {
    id: 4,
    tag: "top rated",
    slideImg: ["/img/tours/Kedarnath.jpg"],
    title: "Ek Dham Yatra By Road (Kedarnath)",
    location: "Uttarakhand, India",
    duration: "6",
    numberOfReviews: "3014",
    price: "36,000",
    tourType: "Bus Tours",
    delayAnimation: "400",
    desc: "Kedarnath Yatra is a revered pilgrimage to the Kedarnath Temple in the Himalayas, dedicated to Lord Shiva. Devotees embark on this arduous journey, navigating challenging terrains and weather conditions, to seek blessings and spiritual fulfillment. The pilgrimage holds profound religious significance in Hinduism, attracting thousands annually who endure physical hardships to attain divine proximity. Kedarnath Yatra fosters a profound connection with the sacred site, encapsulating both devotion and the natural beauty of the Himalayan landscape.",
    cancelPolicy: "For a refund, cancel at least 7 Days in advance of the start date of the experience." ,
    highlights: [
      {id:1, value: "Chardham Yatra by Helicopter"},
      {id:2, value:"VIP Darshan at all Four temples i.e. Yamunotri, Gangotri, Kedarnath and Badrinath."},
      {id:3, value:"Palki (Sedan Chair) at Yamunotri"}
    ],
    included:[
      {id:1, value:"Helicopter trip starts from Dehradun."},
      {id:2, value:"Accommodation in the hotels listed or similar."},
      {id:3, value:"Meals as mentioned in the itinerary. Note: Veg meals on fixed menu."},
      {id:4, value:"All Meal ( Expect Lunch At Dehradun)"},
      {id:5, value:"Government Royalty Fee"},
      {id:6, value:"VIP Darshan at all four temples i.e. Yamunotri, Gangotri, Kedarnath and Badrinath. (Subject to government approval)"},
      {id:7, value:"Palki (Sedan Chair) at Yamunotri."},
      {id:8, value:"All local transport as per Toyota Innova/ Best available vehicle"}
    ],
    excluded:[
      {id:1, value:"Rates are subject to change in case of any major hike in fuel prices."},
      {id:2, value:"Train fare/ Airfare "},
      {id:3, value:"Travel insurance covering medical evacuation, hospitalization, air evacuation, baggage insurance and trip cancellation."},
      {id:4, value:"Any optional trips other than specified in the program."},
      {id:5, value:"Any en-route or personal expenses such as alcoholic and non-alcoholic beverages, telephone calls, tips & gratuities, laundry etc."},
      {id:6, value:"Personal equipment like clothes, shoes, daypacks, personal medical kit etc."},
      {id:7, value:"Any exigency expenses due to reasons beyond our normal control"},
      {id:8, value:"Any personal expenses, room service & special orders, mineral waters alcoholic & non-alcoholic, beverages, porterage, tips, phone calls, laundry etc."},
      {id:9, value:"Any extra excursions or sightseeing apart from the above specified itinerary."},
      {id:10, value:"Camera fees, guide charges"},
      {id:11, value:"Any incidental and other expenses which are not specified in the inclusions."},
      {id:12, value:"Government Service Tax (GST)"},
    ],
    itineraryContent:[
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
        duration: "225 Km | 5/6 Hr",
        meal:"breakfast"
      },

    ]
  },
  {
    id: 5,
    tag: "LIKELY TO SELL OUT*",
    slideImg: ["/img/tours/Kedarnath.png"],
    title: "Ek Dham Yatra By Road (Kedarnath)",
    location: "Uttarakhand, India",
    duration: "6",
    numberOfReviews: "3014",
    price: "36,000",
    tourType: "Full-day Tours",
    delayAnimation: "100",
    desc: "Kedarnath Yatra is a revered pilgrimage to the Kedarnath Temple in the Himalayas, dedicated to Lord Shiva. Devotees embark on this arduous journey, navigating challenging terrains and weather conditions, to seek blessings and spiritual fulfillment. The pilgrimage holds profound religious significance in Hinduism, attracting thousands annually who endure physical hardships to attain divine proximity. Kedarnath Yatra fosters a profound connection with the sacred site, encapsulating both devotion and the natural beauty of the Himalayan landscape.",
    cancelPolicy: "For a refund, cancel at least 7 Days in advance of the start date of the experience." ,
    highlights: [
      {id:1, value: "Chardham Yatra by Helicopter"},
      {id:2, value:"VIP Darshan at all Four temples i.e. Yamunotri, Gangotri, Kedarnath and Badrinath."},
      {id:3, value:"Palki (Sedan Chair) at Yamunotri"}
    ],
    included:[
      {id:1, value:"Helicopter trip starts from Dehradun."},
      {id:2, value:"Accommodation in the hotels listed or similar."},
      {id:3, value:"Meals as mentioned in the itinerary. Note: Veg meals on fixed menu."},
      {id:4, value:"All Meal ( Expect Lunch At Dehradun)"},
      {id:5, value:"Government Royalty Fee"},
      {id:6, value:"VIP Darshan at all four temples i.e. Yamunotri, Gangotri, Kedarnath and Badrinath. (Subject to government approval)"},
      {id:7, value:"Palki (Sedan Chair) at Yamunotri."},
      {id:8, value:"All local transport as per Toyota Innova/ Best available vehicle"}
    ],
    excluded:[
      {id:1, value:"Rates are subject to change in case of any major hike in fuel prices."},
      {id:2, value:"Train fare/ Airfare "},
      {id:3, value:"Travel insurance covering medical evacuation, hospitalization, air evacuation, baggage insurance and trip cancellation."},
      {id:4, value:"Any optional trips other than specified in the program."},
      {id:5, value:"Any en-route or personal expenses such as alcoholic and non-alcoholic beverages, telephone calls, tips & gratuities, laundry etc."},
      {id:6, value:"Personal equipment like clothes, shoes, daypacks, personal medical kit etc."},
      {id:7, value:"Any exigency expenses due to reasons beyond our normal control"},
      {id:8, value:"Any personal expenses, room service & special orders, mineral waters alcoholic & non-alcoholic, beverages, porterage, tips, phone calls, laundry etc."},
      {id:9, value:"Any extra excursions or sightseeing apart from the above specified itinerary."},
      {id:10, value:"Camera fees, guide charges"},
      {id:11, value:"Any incidental and other expenses which are not specified in the inclusions."},
      {id:12, value:"Government Service Tax (GST)"},
    ],
    itineraryContent:[
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
        duration: "225 Km | 5/6 Hr",
        meal:"breakfast"
      },

    ]
  },
  {
    id: 6,
    tag: "",
    slideImg: ["/img/tours/6.png", "/img/tours/7.png", "/img/tours/8.png"],
    title: "Westminster Walking Tour & Westminster Abbey Entry",
    location: "Ciutat Vella, Barcelona",
    duration: "14",
    numberOfReviews: "2045",
    price: "65",
    tourType: "Attractions & Museums",
    delayAnimation: "200",
    desc: "The Char Dham Yatra by helicopter offers a convenient and efficient way to visit the four sacred Hindu pilgrimage sites in Uttarakhand, collectively known as the Char Dhams. These revered sites—Yamunotri, Gangotri, Kedarnath, and Badrinath—draw millions of devotees each year. The yatra takes place in the state of Uttarakhand, India. Traveling by helicopter allows you to cover these spiritual destinations in a shorter time frame, typically 5 days. The ideal months for this journey are May and June or September and November, when the skies are clear and stable. Remember to pack appropriately for the high altitudes, respect local traditions, and carry essential documents like personal IDs and COVID-19 reports.",
    cancelPolicy: "For a refund, cancel at least 7 Days in advance of the start date of the experience." ,
    highlights: [
      {id:1, value: "Chardham Yatra by Helicopter"},
      {id:2, value:"VIP Darshan at all Four temples i.e. Yamunotri, Gangotri, Kedarnath and Badrinath."},
      {id:3, value:"Palki (Sedan Chair) at Yamunotri"}
    ],
    included:[
      {id:1, value:"Helicopter trip starts from Dehradun."},
      {id:2, value:"Accommodation in the hotels listed or similar."},
      {id:3, value:"Meals as mentioned in the itinerary. Note: Veg meals on fixed menu."},
      {id:4, value:"All Meal ( Expect Lunch At Dehradun)"},
      {id:5, value:"Government Royalty Fee"},
      {id:6, value:"VIP Darshan at all four temples i.e. Yamunotri, Gangotri, Kedarnath and Badrinath. (Subject to government approval)"},
      {id:7, value:"Palki (Sedan Chair) at Yamunotri."},
      {id:8, value:"All local transport as per Toyota Innova/ Best available vehicle"}
    ],
    excluded:[
      {id:1, value:"Rates are subject to change in case of any major hike in fuel prices."},
      {id:2, value:"Train fare/ Airfare "},
      {id:3, value:"Travel insurance covering medical evacuation, hospitalization, air evacuation, baggage insurance and trip cancellation."},
      {id:4, value:"Any optional trips other than specified in the program."},
      {id:5, value:"Any en-route or personal expenses such as alcoholic and non-alcoholic beverages, telephone calls, tips & gratuities, laundry etc."},
      {id:6, value:"Personal equipment like clothes, shoes, daypacks, personal medical kit etc."},
      {id:7, value:"Any exigency expenses due to reasons beyond our normal control"},
      {id:8, value:"Any personal expenses, room service & special orders, mineral waters alcoholic & non-alcoholic, beverages, porterage, tips, phone calls, laundry etc."},
      {id:9, value:"Any extra excursions or sightseeing apart from the above specified itinerary."},
      {id:10, value:"Camera fees, guide charges"},
      {id:11, value:"Any incidental and other expenses which are not specified in the inclusions."},
      {id:12, value:"Government Service Tax (GST)"},
    ],
    itineraryContent:[
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
        duration: "225 Km | 5/6 Hr",
        meal:"breakfast"
      },

    ]
  },
  {
    id: 7,
    tag: "best seller",
    slideImg: ["/img/tours/7.png"],
    title: "High-Speed Thames River RIB Cruise in London",
    location: "Manhattan, New York",
    duration: "18",
    numberOfReviews: "2163",
    price: "87",
    tourType: "Private and Luxury",
    delayAnimation: "300",
    desc: "The Char Dham Yatra by helicopter offers a convenient and efficient way to visit the four sacred Hindu pilgrimage sites in Uttarakhand, collectively known as the Char Dhams. These revered sites—Yamunotri, Gangotri, Kedarnath, and Badrinath—draw millions of devotees each year. The yatra takes place in the state of Uttarakhand, India. Traveling by helicopter allows you to cover these spiritual destinations in a shorter time frame, typically 5 days. The ideal months for this journey are May and June or September and November, when the skies are clear and stable. Remember to pack appropriately for the high altitudes, respect local traditions, and carry essential documents like personal IDs and COVID-19 reports.",
    cancelPolicy: "For a refund, cancel at least 7 Days in advance of the start date of the experience." ,
    highlights: [
      {id:1, value: "Chardham Yatra by Helicopter"},
      {id:2, value:"VIP Darshan at all Four temples i.e. Yamunotri, Gangotri, Kedarnath and Badrinath."},
      {id:3, value:"Palki (Sedan Chair) at Yamunotri"}
    ],
    included:[
      {id:1, value:"Helicopter trip starts from Dehradun."},
      {id:2, value:"Accommodation in the hotels listed or similar."},
      {id:3, value:"Meals as mentioned in the itinerary. Note: Veg meals on fixed menu."},
      {id:4, value:"All Meal ( Expect Lunch At Dehradun)"},
      {id:5, value:"Government Royalty Fee"},
      {id:6, value:"VIP Darshan at all four temples i.e. Yamunotri, Gangotri, Kedarnath and Badrinath. (Subject to government approval)"},
      {id:7, value:"Palki (Sedan Chair) at Yamunotri."},
      {id:8, value:"All local transport as per Toyota Innova/ Best available vehicle"}
    ],
    excluded:[
      {id:1, value:"Rates are subject to change in case of any major hike in fuel prices."},
      {id:2, value:"Train fare/ Airfare "},
      {id:3, value:"Travel insurance covering medical evacuation, hospitalization, air evacuation, baggage insurance and trip cancellation."},
      {id:4, value:"Any optional trips other than specified in the program."},
      {id:5, value:"Any en-route or personal expenses such as alcoholic and non-alcoholic beverages, telephone calls, tips & gratuities, laundry etc."},
      {id:6, value:"Personal equipment like clothes, shoes, daypacks, personal medical kit etc."},
      {id:7, value:"Any exigency expenses due to reasons beyond our normal control"},
      {id:8, value:"Any personal expenses, room service & special orders, mineral waters alcoholic & non-alcoholic, beverages, porterage, tips, phone calls, laundry etc."},
      {id:9, value:"Any extra excursions or sightseeing apart from the above specified itinerary."},
      {id:10, value:"Camera fees, guide charges"},
      {id:11, value:"Any incidental and other expenses which are not specified in the inclusions."},
      {id:12, value:"Government Service Tax (GST)"},
    ],
    itineraryContent:[
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
        duration: "225 Km | 5/6 Hr",
        meal:"breakfast"
      },

    ]
  },
  {
    id: 8,
    tag: "top rated",
    slideImg: ["/img/tours/8.png"],
    title: "Edinburgh Darkside Walking Tour: Mysteries, Murder and Legends",
    location: "Vaticano Prati, Rome",
    duration: "20",
    numberOfReviews: "1458",
    price: "99",
    tourType: "Bus Tours",
    delayAnimation: "400",
    desc: "The Char Dham Yatra by helicopter offers a convenient and efficient way to visit the four sacred Hindu pilgrimage sites in Uttarakhand, collectively known as the Char Dhams. These revered sites—Yamunotri, Gangotri, Kedarnath, and Badrinath—draw millions of devotees each year. The yatra takes place in the state of Uttarakhand, India. Traveling by helicopter allows you to cover these spiritual destinations in a shorter time frame, typically 5 days. The ideal months for this journey are May and June or September and November, when the skies are clear and stable. Remember to pack appropriately for the high altitudes, respect local traditions, and carry essential documents like personal IDs and COVID-19 reports.",
    cancelPolicy: "For a refund, cancel at least 7 Days in advance of the start date of the experience." ,
    highlights: [
      {id:1, value: "Chardham Yatra by Helicopter"},
      {id:2, value:"VIP Darshan at all Four temples i.e. Yamunotri, Gangotri, Kedarnath and Badrinath."},
      {id:3, value:"Palki (Sedan Chair) at Yamunotri"}
    ],
    included:[
      {id:1, value:"Helicopter trip starts from Dehradun."},
      {id:2, value:"Accommodation in the hotels listed or similar."},
      {id:3, value:"Meals as mentioned in the itinerary. Note: Veg meals on fixed menu."},
      {id:4, value:"All Meal ( Expect Lunch At Dehradun)"},
      {id:5, value:"Government Royalty Fee"},
      {id:6, value:"VIP Darshan at all four temples i.e. Yamunotri, Gangotri, Kedarnath and Badrinath. (Subject to government approval)"},
      {id:7, value:"Palki (Sedan Chair) at Yamunotri."},
      {id:8, value:"All local transport as per Toyota Innova/ Best available vehicle"}
    ],
    excluded:[
      {id:1, value:"Rates are subject to change in case of any major hike in fuel prices."},
      {id:2, value:"Train fare/ Airfare "},
      {id:3, value:"Travel insurance covering medical evacuation, hospitalization, air evacuation, baggage insurance and trip cancellation."},
      {id:4, value:"Any optional trips other than specified in the program."},
      {id:5, value:"Any en-route or personal expenses such as alcoholic and non-alcoholic beverages, telephone calls, tips & gratuities, laundry etc."},
      {id:6, value:"Personal equipment like clothes, shoes, daypacks, personal medical kit etc."},
      {id:7, value:"Any exigency expenses due to reasons beyond our normal control"},
      {id:8, value:"Any personal expenses, room service & special orders, mineral waters alcoholic & non-alcoholic, beverages, porterage, tips, phone calls, laundry etc."},
      {id:9, value:"Any extra excursions or sightseeing apart from the above specified itinerary."},
      {id:10, value:"Camera fees, guide charges"},
      {id:11, value:"Any incidental and other expenses which are not specified in the inclusions."},
      {id:12, value:"Government Service Tax (GST)"},
    ],
    itineraryContent:[
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
        duration: "225 Km | 5/6 Hr",
        meal:"breakfast"
      },

    ]
  },
  {
    id: 9,
    tag: "best seller",
    slideImg: ["/img/tours/9.png"],
    title: "High-Speed Thames River RIB Cruise in London",
    location: "Manhattan, New York",
    duration: "18",
    numberOfReviews: "2163",
    price: "87",
    tourType: "Private and Luxury",
    delayAnimation: "500",
    desc: "The Char Dham Yatra by helicopter offers a convenient and efficient way to visit the four sacred Hindu pilgrimage sites in Uttarakhand, collectively known as the Char Dhams. These revered sites—Yamunotri, Gangotri, Kedarnath, and Badrinath—draw millions of devotees each year. The yatra takes place in the state of Uttarakhand, India. Traveling by helicopter allows you to cover these spiritual destinations in a shorter time frame, typically 5 days. The ideal months for this journey are May and June or September and November, when the skies are clear and stable. Remember to pack appropriately for the high altitudes, respect local traditions, and carry essential documents like personal IDs and COVID-19 reports.",
    cancelPolicy: "For a refund, cancel at least 7 Days in advance of the start date of the experience." ,
    highlights: [
      {id:1, value: "Chardham Yatra by Helicopter"},
      {id:2, value:"VIP Darshan at all Four temples i.e. Yamunotri, Gangotri, Kedarnath and Badrinath."},
      {id:3, value:"Palki (Sedan Chair) at Yamunotri"}
    ],
    included:[
      {id:1, value:"Helicopter trip starts from Dehradun."},
      {id:2, value:"Accommodation in the hotels listed or similar."},
      {id:3, value:"Meals as mentioned in the itinerary. Note: Veg meals on fixed menu."},
      {id:4, value:"All Meal ( Expect Lunch At Dehradun)"},
      {id:5, value:"Government Royalty Fee"},
      {id:6, value:"VIP Darshan at all four temples i.e. Yamunotri, Gangotri, Kedarnath and Badrinath. (Subject to government approval)"},
      {id:7, value:"Palki (Sedan Chair) at Yamunotri."},
      {id:8, value:"All local transport as per Toyota Innova/ Best available vehicle"}
    ],
    excluded:[
      {id:1, value:"Rates are subject to change in case of any major hike in fuel prices."},
      {id:2, value:"Train fare/ Airfare "},
      {id:3, value:"Travel insurance covering medical evacuation, hospitalization, air evacuation, baggage insurance and trip cancellation."},
      {id:4, value:"Any optional trips other than specified in the program."},
      {id:5, value:"Any en-route or personal expenses such as alcoholic and non-alcoholic beverages, telephone calls, tips & gratuities, laundry etc."},
      {id:6, value:"Personal equipment like clothes, shoes, daypacks, personal medical kit etc."},
      {id:7, value:"Any exigency expenses due to reasons beyond our normal control"},
      {id:8, value:"Any personal expenses, room service & special orders, mineral waters alcoholic & non-alcoholic, beverages, porterage, tips, phone calls, laundry etc."},
      {id:9, value:"Any extra excursions or sightseeing apart from the above specified itinerary."},
      {id:10, value:"Camera fees, guide charges"},
      {id:11, value:"Any incidental and other expenses which are not specified in the inclusions."},
      {id:12, value:"Government Service Tax (GST)"},
    ],
    itineraryContent:[
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
        duration: "225 Km | 5/6 Hr",
        meal:"breakfast"
      },

    ]
  },
];
export default tours;
