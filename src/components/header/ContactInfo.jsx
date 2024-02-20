const ContactInfo = () => {
  const contactContent = [
    {
      id: 1,
      title: "Toll Free Customer Care",
      action: "tel:++(91) 8683818381",
      text: "+(91) 86 8381 8381",
    },
    {
      id: 2,
      title: "Need live support?",
      action: "mailto:info@devsthanexpert.com",
      text: "info@devsthanexpert.com",
    },
  ];
  return (
    <>
      {contactContent.map((item) => (
        <div className="mb-20" key={item.id}>
          <div className={"text-14"}>{item.title}</div>
          <a href={item.action} className="text-18 fw-500 text-dark-1 mt-5">
            {item.text}
          </a>
        </div>
      ))}
    </>
  );
};

export default ContactInfo;
