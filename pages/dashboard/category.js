import Layout from '@/components/Layout/Layout'
import Category from '@/pages2/Category/Category'
import React from 'react'
import axios from 'axios'
import Cookies from 'js-cookie';
export async function getServerSideProps(context) {
  try {
    const token = context.req.cookies.token
    console.log(token)
    if (!token) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }
    const res = await axios.get(`${process.env.API}/api/category`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })


    return {
      props: {
        categories: res.data
      }
    }

  } catch (error) {
    console.log(error)
    return {
      props: {
        categories: []
      }
    }
  }
}
const category = ({ categories }) => {
  return (
    <>
      <Category categories={categories} />
    </>
  )
}

export default category