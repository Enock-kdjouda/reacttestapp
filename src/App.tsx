import React from "react";
import Card from "./Components/Card/Card";


const data = [
  {
    id: 1,
    title: "Consequeter vehicula ab",
    date: "November 24, 2024",
    category: "Kitchen & Style",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere vehicula purus, vitae sollicitudin mi.",
    image: "https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/hero01-free-img.jpg",
  },
  {
    id: 2,
    title: "Taciti hendrerit dis odit incident",
    date: "November 23, 2024",
    category: "Living Room",
    description: "Cras ornare quam nec est facilisis scelerisque. Proin non arcu nec felis vehicula commodo.",
    image: "https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic20-free-img.jpg",
  },
  
  {
    id: 3,
    title: "Taciti hendrerit dis odit incident",
    date: "November 23, 2024",
    category: "Living Room",
    description: "Cras ornare quam nec est facilisis scelerisque. Proin non arcu nec felis vehicula commodo.",
    image: "https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/hero01-free-img.jpg",
  },
  {
    id: 4,
    title: "Taciti hendrerit dis odit incident",
    date: "November 23, 2024",
    category: "Living Room",
    description: "Cras ornare quam nec est facilisis scelerisque. Proin non arcu nec felis vehicula commodo.",
    image: "https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/sofa-with-pot.jpg",
  },
];

const App: React.FC = () => {
  return (
    <div >
      <div style={{width:"1000px",justifyContent:"center"}}>
      <div className="cards-container">
        {data.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            date={item.date}
            category={item.category}
            description={item.description}
            imageUrl={item.image}
          />
        ))}
      </div>
      {/* Pagination globale */}
      <div className="pagination">
        <span className="pagination-item active">1</span>
        <span className="pagination-item">2</span>
        <span className="pagination-item">3</span>
        <span className="pagination-item">Next »</span>
      </div>
    </div>
    </div>
  );
};

export default App;
