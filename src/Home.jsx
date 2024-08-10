import React from "react";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Service from "./Components/Service";
import serviceData from "./API/ServiceAPI";
import Footer from "./Components/Footer";
import Capabilities from "./Components/Capabilities";
import HomeTrust from "./Components/HomeTrust";
import HomeSeeHow from "./Components/HomeSeeHow";

const Home = () => {
  // API
  // ---------------------------------------------- Service API ---------------------------------------------

  const [servicedata] = React.useState(serviceData);

  return (
    <>
      {/* Header Section */}

      <Navbar />

      {/* Hero Section */}

      <Hero />

      {/* Home Trust Section */}

      <HomeTrust />

      {/* Service Section */}

      <Service servicedata={servicedata} />

      {/* Capabilities Section */}

      <Capabilities />

      {/* See How Section */}

      <HomeSeeHow />

      {/* Footer Section */}

      <Footer />
    </>
  );
};

export default Home;
