import React from 'react';
import './SelfCare.css';
import AdhdImg from './Adhd.jpg';
import Autism from './Autism.jpg';
import tourrette from './tourette.jpg';
import self from './Self.jpg';
import img from './Dyscalculia.jpg';
// Sample data for the resources with added link property
const selfCareResources = [
  {
    id: 1,
    title: 'How to Deal with Adult ADHD',
    author: 'Melinda Smith',
    date: 'March 13, 2025',
    description: 'If you have attention deficit hyperactivity disorder (ADHD), previously known as ADD, everything from paying the bills on time to keeping up with work, family, and social demands can seem overwhelming. ADHD can present challenges for adults across all areas of life and can be tough on your health and both your personal and on-the-job relationships. Your symptoms may lead to extreme procrastination, trouble meeting deadlines, and impulsive behavior. In addition, you may feel that friends and family do not understand what you are up against.',
    image: AdhdImg,
    link: 'https://www.helpguide.org/mental-health/adhd/managing-adult-adhd'
  },
  {
    id: 2,
    title: 'Autism spectrum disorder and self-care',
    author: 'Grayson Schultz',
    date: 'February 5, 2025',
    description: 'Living with Autism Spectrum Disorder (ASD) can affect many aspects of daily life, from social interactions to sensory experiences. While routines and predictability bring comfort, unexpected changes or overstimulation can cause stress or anxiety. That’s why self-care for autistic individuals is essential — not just a luxury, but a tool for emotional and mental well-being. Self-care can look different for everyone on the spectrum: it might mean creating a structured routine, limiting sensory input, engaging in special interests, or using calming techniques like stimming.',
    image: Autism,
    link: 'https://www.prosperhealth.io/blog/autism-and-self-care'
  },
  {
    id: 3,
    title: 'Self Care When You Feel Dysphoria',
    author: 'Point of Pride',
    date: 'December 30, 2021',
    description: 'Dysphoria—whether gender-related, sensory, or cognitive—can disrupt emotional regulation and self-perception. This guide from Point of Pride offers evidence-informed, neurodivergent-friendly self-care strategies designed to support grounding and self-affirmation. From sensory adjustments to emotional validation techniques, the article equips readers with tools to manage dysphoric episodes while acknowledging the unique needs of autistic and neurodiverse individuals. Ideal for those seeking structured, compassionate, and inclusive approaches to self-regulation.',
    image: self,
    link: 'https://www.pointofpride.org/blog/self-care-when-you-feel-dysphoria'
  },
  {
    id: 4,
    title: 'Living with Tourette Syndrome',
    author: 'Yolanda Smith',
    date: 'November 26, 2022',
    description: 'Discover practical tips and lifestyle changes that can help reduce the frequency and severity of tics. This article empowers individuals with Tourette Syndrome to better understand their condition and develop personalized self-care strategies for daily life.',
    image: tourrette,
    link: 'https://www.news-medical.net/health/Living-with-Tourette-syndrome.aspx'
  },
  
  {
    id: 5,
    title: 'Managing Dyscalculia',
    author: 'Brain Balance',
    date: 'August 23, 2022',
    description: 'This article from Brain Balance introduces simple, research-informed techniques to help individuals with dyscalculia better navigate everyday math challenges. From using multisensory learning tools to applying real-world problem-solving methods, the strategies are designed to build confidence, reduce stress, and foster independence. A supportive read for students, parents, and anyone seeking to turn frustration into progress.',
    image: img,
    link: 'https://www.brainbalancecenters.com/blog/strategies-for-managing-dyscalculia'
  }
];

const SelfCare = () => {
  return (
    <div className="selfcare-container">
      <h1 className="selfcare-title">Self Care Articles for Neurodiverse Individuals</h1>
      
      <div className="resource-list">
        {selfCareResources.map((resource) => (
          <div key={resource.id} className="resource-card">
            <div className="resource-image-container">
              <img 
                src={resource.image} 
                alt={resource.title} 
                className="resource-image"
              />
            </div>
            <div className="resource-content">
              <h2 className="resource-title">{resource.title}</h2>
              <div className="resource-meta">
                <span className="resource-author">{resource.author}</span>
                <span className="resource-date">{resource.date}</span>
              </div>
              <p className="resource-description">{resource.description}</p>
              <a href={resource.link} target="_blank" rel="noopener noreferrer">
                <button className="resource-button">Learn More</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelfCare;