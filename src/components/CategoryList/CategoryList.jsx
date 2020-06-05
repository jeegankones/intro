import React from 'react';
import Category from '../Category/Category';

const CategoryList = ({ categories }) => {
  const categoryList = categories
    .map((category) => (
      <Category
        className="col-12 col-md-6 mb-3"
        key={category.category_id}
        category={category}
      />
    ));

  return (
    <section>
      <h2>Categories</h2>
      <div className="row">
        {categoryList}
      </div>
    </section>
  );
};

export default CategoryList;
