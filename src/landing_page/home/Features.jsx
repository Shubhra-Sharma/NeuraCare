import React from "react";
import"./Features.css";
import testimonials from "./Data";
import Testimonials from "./Testimonials";
import ContactUs from "./ContactUs";
import Hero from "./Hero";
const Features=()=>{
return(
    <div>
        <Hero/>
        <p className="desc">NeuraCare supports neurodivergent individuals navigating ADHD, Autism, Anxiety, and more—<br></br>
        by providing personalized tools that adapt to them, helping them thrive in daily life with clarity, confidence, and calm.</p>
        <Testimonials testimonials={testimonials} />
        <ContactUs/>

    </div>
);
}

export default Features;