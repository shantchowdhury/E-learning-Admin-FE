import React from 'react';
// import Instructor from '../../images/student.jpg';
import {MdFavoriteBorder, MdOutlineWatchLater} from 'react-icons/md';
import {FaShare, FaGraduationCap} from 'react-icons/fa';
import {FiArrowUpCircle} from 'react-icons/fi';
import {BsFillBarChartFill} from 'react-icons/bs';
import {TbCertificate} from 'react-icons/tb';
// import { useSelector } from 'react-redux';

function CourseHeader() {
// const {course}=useSelector(state=>state.app)

  return (
      <div className='site-container px-[120px] py-14'>
        <h1 className='text-3xl font-semibold mb-5 text-orange'>Web Developmetn</h1>
        <div className='flex justify-between'>
          {/* LEFT SIDE  */}
          <div className='w-[60%]'>
              <div className='flex items-center justify-between mb-4'>
                <div className='flex items-center gap-5'>
                  <img src="/assets/images/student.jpg" alt="Instructor image" className='w-12 h-12 rounded-full object-cover' />
                  <div>
                    <h2 className='text-xl font-semibold'>
                      Shahnewaz Rakib
                    </h2>
                    <p>Instructor</p>
                  </div>
                </div>
                <h3 className='text-white/80 text-lg'>
                  Category: Web Development
                </h3>
            </div>
            <div>
              <iframe className='w-full rounded-xl' height='400' src="https://www.youtube.com/embed/BhdP2nPeSAM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>

          {/* RIGHT SIDE  */}
          <div className='w-[35%]'>
              <div className='flex items-center justify-end space-x-5 mb-4 h-[52px]'>
                <h2 className='flex items-center gap-2 cursor-pointer'><MdFavoriteBorder /> WishList</h2>
                <h2 className='flex items-center gap-2 cursor-pointer'><FaShare /> Share</h2>
              </div>

              <div className='bg-dark p-8 rounded-xl h-[400px]'>
                  <p className='font-Poppins text-xl mb-4'>5,500</p>
                  <button className='bg-blue w-full py-4 rounded-xl font-Poppins mb-2 cursor-pointer'>Enroll Now</button>
                  <p className='text-white/50 tracking-wide text-[15px]'>Full lifetime access</p>

                  <div className='mt-8 space-y-[10px]'>
                    <div className={styles.infoContainer}>
                      <div className={styles.infoTitle}><BsFillBarChartFill/> Levels: </div>
                      <div className={styles.info}>All Levels</div>
                    </div>

                    <div className={styles.infoContainer}>
                      <div className={styles.infoTitle}><FaGraduationCap/> Total Enrolled: </div>
                      <div className={styles.info}>No. of students enrolled</div>
                    </div>

                    <div className={styles.infoContainer}>
                      <div className={styles.infoTitle}><MdOutlineWatchLater/> Duration: </div>
                      <div className={styles.info}>Duration of course</div>
                    </div>

                    <div className={styles.infoContainer}>
                      <div className={styles.infoTitle}><FiArrowUpCircle/> Last update: </div>
                      <div className={styles.info}>Last update of course</div>
                    </div>

                    <div className={styles.infoContainer}>
                      <div className={styles.infoTitle}><TbCertificate/> Certificate: </div>
                      <div className={styles.info}>Certificate of completion</div>
                    </div>

                  </div>
              </div>
            </div>
        </div>
      </div>
  )
}

const styles = {
  infoContainer: 'flex items-center text-[16px] text-white/80',
  infoTitle : 'flex items-center w-[40%] gap-2 font-Poppins text-[15px]',
  info : 'text-white/70',
}



export default CourseHeader