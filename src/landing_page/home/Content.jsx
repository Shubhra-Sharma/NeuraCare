import React from 'react';
import './Content.css';
import { 
  ClipboardList, 
  Edit, 
  HeartHandshake, 
  Dumbbell,
  Hospital, 
  FileText, 
  BarChart, 
  FileEdit 
} from 'lucide-react';

const Content = () => {
  const features = [
    {
      icon: <ClipboardList className="feature-icon" />,
      title: "AI Health Assistant",
      description: "Get quick and reliable answers to your health questions through an accessible, friendly chatbot."
    },
    {
      icon: <HeartHandshake className="feature-icon" />,
      title: "Self-Care Library",
      description: "Explore expert-backed tips, articles, and daily routines to support your mental health journey."
    },
    {
      icon: <Edit className="feature-icon" />,
      title: "AI Mood Journal",
      description: "Log your feelings and receive instant, personalized coping strategies to manage emotional wellness."
    },
    {
      icon: <Dumbbell className="feature-icon" />,
      title: "Personalized Workouts",
      description: "Generate workouts tailored to your goals, muscle group focus, and time—complete with guided videos."
    },
    {
      icon: <Hospital className="feature-icon" />,
      title: "Find Nearby Hospitals",
      description: "Locate the closest hospitals quickly during emergencies or for routine healthcare visits."
    },
    {
      icon: <FileText className="feature-icon" />,
      title: "Dyslexia-Friendly Reader",
      description: "Read with ease using our Bionic Reader and download enhanced PDFs for a more accessible experience."
    },
    {
      icon: <BarChart className="feature-icon" />,
      title: "Productivity Assistant",
      description: "Plan your day efficiently with structured routines that help improve focus and reduce distractions."
    },
    {
      icon: <FileEdit className="feature-icon" />,
      title: " Downloadable Insights",
      description: "Easily save your mood journals and insights as text files for reflection or therapy use."
    }
  ];

  return (
    <div className="content-container">
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon-container">
              {feature.icon}
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;