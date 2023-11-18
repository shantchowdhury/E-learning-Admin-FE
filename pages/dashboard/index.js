import { useState } from "react";
// import { Outlet} from "react-router-dom";
import Sidebar from "@/components/Sidebar/Sidebar";
import Header1 from "@/components/Sidebar/Sidebar";
import Students from "@/components/Sidebar/Sidebar";
// import AllUsers from "../../AllUsers/AllUsers";
// import Analytics from "../../Analytics/Analytics";
// import ContactEntriesMain from "../../ContactEntriesMain/ContactEntriesMain";
// import StudentSDetails from "../../StudentSDetails/StudentSDetails";
import Blog from "../blog";
import Courses from "../courses";
// import CreatePost from '../CreatePost/CreatePost';
// import Message from '../Message/Message';
import Faq from "../faq";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import Analytics from "@/pages2/Analytics/Analytics";
// import {Route,Routes} from 'react-router-dom';
function Dashboard() {

  const [hideSidebar, setSidebar] = useState(false);

  return (
    <>
    <Analytics/>
    </>
  );
}

export default Dashboard;
