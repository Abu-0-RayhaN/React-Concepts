import React from 'react';
import MyComponent from './Navbar/Navbar';
import Carousel from './Carousel/Carousel';
import Introduction from './Introduction/Introduction';
function Layout() {
  return (
    <div className=' '>
        <MyComponent/>
        <Carousel/>
        <Introduction/>
    </div>
  );
}

export default Layout;