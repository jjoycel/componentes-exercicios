import React from "react";
import "./styles.css";
import CardVideo from "./components/CardVideo";
import MenuVertical from "./components/MenuVerycal";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  

  
  return (
    <div>
      <div className="tela-inteira">
       <Header />

        <main>
        
          <MenuVertical />
          <>
            <CardVideo />
            <CardVideo />
            <CardVideo />
            <CardVideo />
            <CardVideo />
            <CardVideo />
            <CardVideo />
          </>
           
         
        </main>

        <Footer />
      </div>
    </div>
  );
}
