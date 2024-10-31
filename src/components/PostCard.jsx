import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { NoProfile } from '../assets';

const PostCard = (post, user, deletePost, likePost) => {
const [showAll, setShowAll] = useState(0);
const [showReply, setShowReply] = useState(0);
const [comments, setComments] = useState([]);
const [loading, setLoading] = useState(false);
const [replyComments, setReplyComments] = useState(0);
const [showComments, setShowComments] = useState(0);

// console.log(post)
  return (
    <div className='mb-2 bg-primary p-4 rounded-xl'>
        <div className='flex gap-3 items-center mb-2'>
            <Link to={"/profile/" + post?.userId?._id}>
                <img 
                    src={post?.userId?.profileUrl ?? NoProfile}
                    alt={post?.userId?.firstName}
                    className='w-14 h-14 object-cover rounded-full'
                />
            </Link>
            <div className='w-full flex justify-between'>
                <div className=''>
                    <Link to={"/profile/" + post?.userId?._id}>
                        <p className='font-medium text-lg text-ascent-1'>
                            {post?.userId.firstName} {post?.userId.lastName}
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostCard