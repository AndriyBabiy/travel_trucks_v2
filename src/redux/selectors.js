import { createSelector } from "@reduxjs/toolkit";

export const selectProducts = (state) => state.products.products.items;
export const selectIsLoading = (state) => state.products.isLoading;
export const selectError = (state) => state.products.error;
export const selectFavorites = (state) => state.favourites.items;
export const selectLocationFilter = (state) => state.filter.filterLocation;
export const selectEquipmentFilter = (state) => state.filter.filterEquipment;
export const selectTypeFilter = (state) => state.filter.filterType;

export const selectLocationFilteredProducts = createSelector(
  [selectProducts, selectLocationFilter],
  (products, filter) => {
    const productList = [...products];
    if (filter) {
      return productList.filter(({ location }) =>
        location.toLowerCase().includes(filter.toLowerCase())
      );
    }
    return productList;
  }
);

export const selectEquipmentFilteredProducts = createSelector(
  [selectProducts, selectEquipmentFilter],
  (products, filter) => {
    const productList = [...products];
    // const filteredEquipment = Object.keys(filter).filter(elem => {
    //   const value = filter[elem];
    //   return value === true;
    // });
    const filteredEquipment = Object.keys(filter).filter((key) => filter[key]);
    if (filteredEquipment.length > 0) {
      return productList.filter((elem) =>
        // Object.keys(productList.product.details)
        //   .map(elem => {
        //     if (productList.product.details[elem] > 0) {
        //       return elem;
        //     }
        //     return '';
        //   })
        //   .every(elem => filteredEquipment.includes(elem))

        filteredEquipment.every((equipment) => elem.details[equipment] > 0)
      );
    }
    return productList;
  }
);

export const selectTypeFilteredProducts = createSelector(
  [selectProducts, selectTypeFilter],
  (products, filter) => {
    const productList = [...products];
    if (filter) {
      return productList.filter(
        ({ form }) =>
          // form.toLowerCase().includes(filter.toLowerCase())
          form === filter
      );
    }
    return productList;
  }
);

export const selectFilteredProducts = createSelector(
  [
    selectProducts,
    selectLocationFilter,
    selectEquipmentFilter,
    selectTypeFilter,
  ],
  (products, locationFilter, equipmentFilter, typeFilter) => {
    let filteredProducts = [...products];

    if (locationFilter) {
      filteredProducts = selectLocationFilteredProducts(
        filteredProducts,
        locationFilter
      );
    }

    if (Object.values(equipmentFilter).some((value) => value)) {
      filteredProducts = selectEquipmentFilteredProducts(
        filteredProducts,
        equipmentFilter
      );
    }

    if (typeFilter) {
      filteredProducts = selectTypeFilteredProducts(
        filteredProducts,
        typeFilter
      );
    }

    return filteredProducts;
  }
);
