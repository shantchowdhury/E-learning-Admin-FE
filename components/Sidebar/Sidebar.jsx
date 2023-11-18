import React from "react";
// import Logo from "../../images/logo.png";
// import shortLogo from '../../images/shortLogo.png';
import Link from "next/link";
import { FaUserGraduate, FaQuestionCircle } from "react-icons/fa";
import { FiBarChart, FiMail } from "react-icons/fi";
import {CgDesktop} from 'react-icons/cg';
import {MdOndemandVideo, MdAdminPanelSettings, MdOutlineReviews } from 'react-icons/md';
import {BsFillPinAngleFill} from 'react-icons/bs';
import {AiOutlineSetting} from 'react-icons/ai';
import {IoNotifications} from 'react-icons/io5';
import { useRouter } from "next/router";

function Sidebar({hideSidebar}) {
  const location = useRouter().pathname;
  const routes = [
    {
      name: "Analytics",
      link: "/dashboard",
      icon: <FiBarChart />,
    },
    {
      name: "Students",
      link: "/dashboard/students",
      icon: <FaUserGraduate />,
    },
    {
      name: "Users",
      link: "/dashboard/users",
      icon: <MdAdminPanelSettings size={22} />,
    },
    {
      name: "Courses",
      link: "/dashboard/courses",
      icon: <MdOndemandVideo size={18} />,
    },
    {
      name: "Events",
      link: "/dashboard/events",
      icon: <CgDesktop size={18} />,
    },
    {
      name: "Category",
      link: "/dashboard/category",
      icon: <CgDesktop size={18} />,
    },
    {
      name: "Blogs",
      link: "/dashboard/blogs",
      icon: <BsFillPinAngleFill size={18} />,
    },
    {
      name: "Inbox",
      link: "/dashboard/inbox",
      icon: <FiMail size={18} />,
    },
    {
      name: "Testimonial",
      link: "/dashboard/testimonials",
      icon: <MdOutlineReviews size={20} />,
    },
    {
      name: "FAQ",
      link: "/dashboard/faq",
      icon: <FaQuestionCircle size={17} />,
    },
    {
      name: "Notification",
      link: "/dashboard/notification",
      icon: <IoNotifications size={17} />,
    },
    {
      name: "Essential",
      link: "/dashboard/essential",
      icon: <AiOutlineSetting size={19} />,
    }
  ];

  return (
    <div className={`${!hideSidebar ? 'w-[15%]':'w-[5%]'} duration-300 ease-in-out`}>
    <aside id="sidebar" className="bg-dark h-screen sticky top-0 overflow-auto">
      <div className="py-3">
        {
          hideSidebar ?
          <img src="/assets/images/shortLogo.png" alt="Logo" />
          :
          <img src="/assets/images/logo.png" alt="Logo" />
          
        }
      </div>
      
      <ul className={`${hideSidebar ? 'pl-3' : 'pl-10'} py-10 space-y-5`}>
        {routes.map((value, index) => {
          return (
            <Link href={value.link} key={index}>
              <li className={`${location === value.link ? 'text-dark bg-background' : 'text-gray'} flex items-center py-3 px-4 rounded-l-full mt-5`}>
                {value.icon}
                {
                  !hideSidebar && <p className="font-poppins text-sm font-medium ml-8">{value.name}</p>
                }
              </li>
            </Link>
          );
        })}
      </ul>
    </aside>
    </div>
  );
}

export default Sidebar;
