import React from "react";
import "./Card.css";

interface CardProps {
  title: string;
  date: string;
  category: string;
  imageUrl: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, date, category, imageUrl, description }) => {
  return (
    
    <div className="card">
        <h3 className="card-title">{title}</h3>
        <p className="card-meta">
          {date} / <span>{category}</span>
        </p>
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        
        <p className="card-description">{description}</p>
        <a href="#" className="card-link">Read More &raquo;</a>
      </div>
    </div>

    
  );
};

export default Card;
