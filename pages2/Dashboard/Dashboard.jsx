import {useState} from "react";
import { Outlet} from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Students from "../../components/Students/Students";
import AllUsers from "../AllUsers/AllUsers";
// import Analytics from "../Analytics/Analytics";
import ContactEntriesMain from "../ContactEntriesMain/ContactEntriesMain";
import Login from "../Login/Login";
import StudentSDetails from "../StudentSDetails/StudentSDetails";
import Blog from '../Blog/Blog';
import Courses from '../Courses/Courses';
import CreatePost from '../CreatePost/CreatePost';
import Message from '../Message/Message';
import Faq from '../Faq/Faq';
import {Route,Routes} from 'react-router-dom';
function Dashboard() {

  const [hideSidebar, setSidebar] = useState(false);

  return (
    <div className="flex-1">
      <Header />
      <div className="px-10 py-8">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/students" element={<Students />} />
          <Route path="/stDetails" element={<StudentSDetails />} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/contact-entries" element={<ContactEntriesMain />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/message" element={<Message />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
