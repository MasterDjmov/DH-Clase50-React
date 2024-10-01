import React from 'react';
import Encabezado from './Encabezado';
import Banner from './Banner';
import Productos from './Productos';
import Footer from './Footer';
function Web(){
  return (
    <div className="container">
     <Encabezado/>
     <Banner />
     <Productos />
     <Footer />
    </div>
  )

}
export default Web;