const Services = () => {
    const services = [
      {
        id: 1,
        url: "/image8.jpg",
        title: "PCMC",
      },
      {
        id: 2,
        url: "/image2.jpeg",
        title: "Goa",
      },
      {
        id: 3,
        url: "/image3.jpg",
        title: "Mumbai",
      },
      {
        id: 4,
        url: "/image5.jpg",
        title: "Bengaluru",
      },
      {
        id: 5,
        url: "/image6.jpg",
        title: "Delhi",
      },
      {
        id: 6,
        url: "/image9.jpg",
        title: "Gujrat",
      },
    ];
    return (
      <>
        <div className="services container">
          <h2>OUR WORK</h2>
          <div className="banner">
            {services.map((element) => {
              return (
                <div className="item" key={element.id}>
                  <h3>{element.title}</h3>
                  <img src={element.url} alt={element.title} />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };
  
  export default Services;