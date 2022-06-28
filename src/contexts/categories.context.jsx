import { createContext, useState, useEffect } from "react";

import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

import SHOP_DATA from "../shop-data.js";

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
    const [ categoriesMap, setCategoriesMap ] = useState({});
    // this was one off thing to write all categories to firestore database
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // }, [])

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            //console.log(categoryMap);
            setCategoriesMap(categoryMap);
        };
        getCategoriesMap();
        
    }, [])

    // useEffect(async () => {
    //     const categoryMap = await getCategoriesAndDocuments('categories');
    //     console.log(categoryMap);
    // }, []);

    const value = {categoriesMap};
    //console.log(value);
    return (
        <CategoriesContext.Provider value={value}> {children} </CategoriesContext.Provider>
    )
}