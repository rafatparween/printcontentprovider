"use client"

import Footer from "./components/Footer";
import Customer from "./components/Customer";
import Technicians from "./components/Technicians";
import Assistance from "./components/Assistance";
import Avoid from "./components/Avoid";
import Helppage from "./components/Helppage";

import { Help } from "@mui/icons-material";
import FooterSection from "./components/FooterSection";
import PrinterSetup from "./services/content/PrinterSetup";
import PrinterS from "./components/PrinterS";
import SupportPage from "./components/SupportPage";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import JivoChat from "./Jivochat";



function Home() {
  return (
    <>
      <Navbar/>
      <Header/>
      <PrinterSetup/>
      {/* <PrinterS/> */}
      <SupportPage/>
      
      {/* <Technicians/>
      <Assistance/>
      <Avoid/>
      <Helppage/> */}
      <FooterSection/>
      <JivoChat/>


    </>

  )
}
export default Home;