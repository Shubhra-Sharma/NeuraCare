import React from "react";
import"./Desc.css";
import testimonials from "./Data";
import Testimonials from "./Testimonials";
import ContactUs from "./ContactUs";
import Content from "./Content";
import Hero from "./Hero";
const Desc=()=>{
return(
    <div>
        <Hero/>
        <p className="desc">NeuroCare supports neurodivergent individuals navigating ADHD, Autism, Anxiety, and more—<br></br>
        by providing personalized tools that adapt to them, helping them thrive in daily life with clarity, confidence, and calm.</p>
        <Content/>
        <Testimonials testimonials={testimonials} />
        <ContactUs/>

    </div>
);
}

export default Desc;