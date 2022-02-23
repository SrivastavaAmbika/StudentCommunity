import React from 'react';

import { Counter } from './features/counter/Counter';
import Header from './Header';
import Sidebar from './Sidebar';
import RightSidebar from './RightSidebar';
import Center from './Center';

function App() {
  return (
    <>

<Header />
      
      
     
  
    
    <div className="app_body">
      <Sidebar />
      <Center />
<RightSidebar />
    </div>
    </>
      );
}

export default App;
