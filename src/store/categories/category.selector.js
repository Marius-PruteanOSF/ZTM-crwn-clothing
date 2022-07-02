import { createSelector } from 'reselect';

const selectCategories = (state) => state.categories;

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    console.log('1---within selector');
    console.log(categories);
    return categories.categories.reduce((acc, { title, items }) => {
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);

export const selectCatMap = ({ categories }) => {
  console.log('2---within selector');
  console.log(categories);
  return categories.categories.reduce((acc, { title, items }) => {
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
};