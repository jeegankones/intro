import React, { useEffect, useState } from 'react';
import axiosInstance from '../../axiosApi';
import Category from '../Category/Category';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axiosInstance.get('/api/explore/categories')
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const categoryList = categories
    .map((category) => (
      <Category
        className="col-12 col-md-6 mb-3 mb-md-5"
        key={category.category_id}
        id={category.category_id}
        name={category.category_name}
        imageUrl={category.image_url}
      />
    ));

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
