import { createContext, useState, useEffect } from 'react';
import { getProductsAndDocuments } from '../utils/firebase/firebase.utils';



export const CollectionsContext = createContext({
  collectionsMap: {},
});

export const CollectionsProvider = ({ children }) => {
  const [collectionsMap, setCollectionsMap] = useState({});

  useEffect(() => {
    const getCollectionsMap =async ()=>{
    const collectionMap = await getProductsAndDocuments();
    console.log(collectionMap);
    setCollectionsMap(collectionMap)
  };

  getCollectionsMap();
}, []);


  /* useEffect(() => {
      addCollectionAndDocuments('collections', SHOP_DATA);
     }, []); */
  const value = { collectionsMap };
  return (
    <CollectionsContext.Provider value={value}>
      {children}
    </CollectionsContext.Provider>
  );
};