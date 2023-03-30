import { useEffect, useState, useContext } from 'react';

import axios from 'axios';

import PropTypes from 'prop-types';
// @mui
import { Grid } from '@mui/material';
import ShopProductCard from './ProductCard';

// ----------------------------------------------------------------------
import { CategoryContext } from '../../../context/catContext';

ProductList.propTypes = {
  producsetFilteredTravel: PropTypes.array.isRequired,
};

export default function ProductList({ modalOpen, setModalOpen, isNew, setIsNew, handleClose }) {
  const { setFilteredTravel, filteredTravel, render } = useContext(CategoryContext);

  const getTravel = async () => {
    try {
      const result = await axios.get('http://localhost:8000/travels');
      console.log('jj', result.data.travel);
      setFilteredTravel(result.data.travel);
    } catch (err) {
      console.log('ERR', err);
    }
  };

  useEffect(() => {
    console.log('-----');
    getTravel();
  }, [!render]);

  return (
    <Grid container spacing={3}>
      {filteredTravel?.map((product, index) => (
        <Grid key={index} item xs={12} sm={6} md={3}>
          <ShopProductCard
            product={product}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            isNew={isNew}
            setIsNew={setIsNew}
            handleClose={handleClose}
          />
        </Grid>
      ))}
    </Grid>
  );
}
