import { useEffect, useState } from "react";
// import { Outlet} from "react-router-dom";
import Header1 from "@/components/Sidebar/Sidebar";
import Cookies from "js-cookie";
// import CreatePost from '../CreatePost/CreatePost';
// import Message from '../Message/Message';
import Header from "@/components/Header/Header";
import axios from "axios";
// import {Route,Routes} from 'react-router-dom';
function Layout({children}) {

  const [hideSidebar, setSidebar] = useState(false);
  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("user");
    window.location.href = "/";
  }
  // is_authenticated
  

  return (
    <div className="flex">
      <Header1 hideSidebar={hideSidebar}/>
      
        <div class="w-[85%] duration-300 ease-in-out">
        <Header handleLogout={handleLogout} setSidebar={setSidebar}/>
        {/* <hr /> */}
            <div class="sticky top-0 z-50 border-b border-gray px-10 py-4 flex items-center justify-between">
            <div className="px-16 py-10">
            {children}
            </div>
          
          </div>


          
      </div>
      </div>
  
  );
}

export default Layout;
