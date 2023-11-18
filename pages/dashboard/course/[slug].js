import React from 'react'
import axios from 'axios'
import LeftSide from '@/components/SingleCourse/LeftSide';
import RightSide from '@/components/SingleCourse/RightSide';
import Cookies from 'js-cookie';
export async function getServerSideProps(context) {
    try {
      // const token = Cookies.get('token')
      // if (!token) {
      //   return {
      //     redirect: {
      //       destination: '/',
      //       permanent: false,
      //     },
      //   }
      // }
    let { slug } = context.params;
    const token=context.req.cookies.token
      
      const res = await axios.get(`${process.env.API}/api/course/data/${slug}`,{
        headers: {
          'Authorization': `Bearer ${token}`
        },
        withCredentials: true,
      });
      const course = res.data
      
      if(res.status===404){
        return { notFound: true };
      }
      return { props: { course } };
      
      } catch (error) {
      return { notFound: true };
      }
    }

const index = ({course}) => {
    
  return (
    <>
    <div className='flex mt-11 mb-5 px-10 w-full w-[60%]'>
            <LeftSide course={course}/>
            
        </div>
    </>
  )
}

export default index