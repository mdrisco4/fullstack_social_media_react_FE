import React from 'react'

const FriendsCard = ({ friends }) => {
  return (
    <div>
        <div className='w-full bg-primary shadow-sm rounded-lg px-6 py-5'>
            <div className='flex items-center justify-between text-ascent-1 pb-2 border-b border-[#66666645]'>
            <span> Friends</span>
            <span>{friends?.length}</span>
            </div>
        </div>
    </div>
  )
}

export default FriendsCard