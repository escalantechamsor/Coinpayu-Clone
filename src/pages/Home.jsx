import React from "react";

import SideBar from "../component/SideBar";
import Content from "../component/Content";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
function Home() {
  return (
    <div className="w-full">
      <NavBar />
      <div className="w-full min-h-[130vh] mt-[13vh] flex ">
        <SideBar />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
