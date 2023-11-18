import '@/styles/globals.css'
import 'react-phone-number-input/style.css';
import 'swiper/css';
import 'swiper/css/pagination';
import "../dist/output.css"
import { Toaster } from 'react-hot-toast'
import Layout from '@/components/Layout/Layout';
import { useRouter } from 'next/router';
// import 'react-quill/dist/quill.snow.css';
// import 'react-quill/dist/quill.bubble.css';
export default function App({ Component, pageProps }) {
  const router = useRouter()
  return <>
    <Toaster />

    {
      router.pathname=='/' ?
      <Component {...pageProps} />
      :
      <Layout children={<Component {...pageProps} />} />
    }
  
  </>
}
