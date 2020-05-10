import React from 'react';
import Category from '../Category/Category';

const Categories = () => {
  const categories = [
    {
      category_id: 1,
      category_name: 'Home Repair',
      image_url: 'https://i.ibb.co/Q62NLt9/home-repair.jpg'
    },
    {
      category_id: 2,
      category_name: 'Home Remodeling',
      image_url: 'https://i.ibb.co/d4xDFf9/home-remodel.jpg'
    },
    {
      category_id: 3,
      category_name: 'Fitness',
      image_url: 'https://i.ibb.co/k1JsVQK/fitness.jpg'
    },
    {
      category_id: 4,
      category_name: 'Beauty',
      image_url: 'https://i.ibb.co/HqM4H7p/beauty.jpg'
    },
    {
      category_id: 5,
      category_name: 'Automotive',
      image_url: 'https://i.ibb.co/h71r4pD/auto.jpg'
    },
    {
      category_id: 6,
      category_name: 'Pets',
      image_url: 'https://i.ibb.co/W5hMgmj/pet.jpg'
    }
  ];

  const categoryList = categories.map(
    (category) => (
      <Category
        className="col-12 col-md-6 mb-3 mb-md-5"
        key={category.category_id}
        id={category.category_id}
        name={category.category_name}
        imageUrl={category.image_url}
      />
    )
  );

  return (
    <section>
      <h2 className="mb-4 font-weight-bold">Categories</h2>
      <div className="row">
        {categoryList}
      </div>
    </section>
  );
};

export default Categories;
