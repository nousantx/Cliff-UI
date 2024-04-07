import React from "react";

interface Products {
  name: string;
  desc: string;
}

const Product: React.FC<Products> = ({ name, desc }) => {
  return (
    <div className="flex gap-1rem p-2rem w-100%">
      <div className="bg-accent-600 br-8px over-hidden">
        <div className="w-100% h-200px bg-accent-400"></div>
        <div className="p-2rem pt-1rem">
          <header className="ta-justify">
            <h2 className="text-accent-100">{name}</h2>
            <p className="text-accent-300">{desc}</p>
          </header>
          <div className="flex end gap-1rem">
            <button className="btn rounded mt-8px bg-accent-400">Click</button>
            <button className="btn rounded mt-8px bg-accent-400">More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
