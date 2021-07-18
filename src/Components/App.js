import React, { Fragment } from 'react';
import ListProduct from "./ListProduct";
import DetailProduct from "./DetailProduct"
function App() {
  return (
   <Fragment>
     <ListProduct />
    <hr />
    <DetailProduct />
   </Fragment>
  );
}

export default App;
