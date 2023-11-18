import React from 'react'

function InboxHeader() {
  return (
    <div className='pb-8'>
      <h1 className='font-poppins font-semibold text-lg text-dark_gray'>CONTACT ENTRIES</h1>
      <div className="flex gap-3 mt-5">
        <div className={`${style.badge} bg-youtube/10 text-youtube`}>Today 5</div>
        <div className={` ${style.badge} bg-light_yellow/10 text-light_yellow`}>Pending 5</div>
        <div className={`${style.badge} bg-light_green/20 text-dark_green`}>Solved 20</div>
      </div>
    </div>
  )
}

const style = {
    badge: "cursor-pointer text-sm py-2 px-4 rounded-md font-poppins"
}

export default InboxHeader