const Social = () => {
  const socialContent = [
    { id: 1, icon: "icon-facebook", link: "https://www.facebook.com/DevsthanExpert/" },
    { id: 2, icon: "fa fa-whatsapp whatsapp-icon", link: "https://wa.me/918683818381?text=Hi"},
    { id: 3, icon: "icon-instagram", link: "https://www.instagram.com/devsthanexpert" },
  ];
  return (
    <>
      {socialContent.map((item) => (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          key={item.id}
        >
          <i className={`${item.icon} text-14`} />
        </a>
      ))}
    </>
  );
};

export default Social;
