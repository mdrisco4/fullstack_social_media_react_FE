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
// console.log(post.post.userId.firstName)

  return (
    <div className='mb-2 bg-primary p-4 rounded-xl' key={post?._id}>
        <div className='flex gap-3 items-center mb-2'>
            <Link to={"/profile/" + post?.userId?._id}>
                <img 
                    src={post.post?.userId?.profileUrl ?? NoProfile}
                    alt={post.post?.userId?.firstName}
                    className='w-14 h-14 object-cover rounded-full'
                />
            </Link>
            <div className='w-full flex justify-between'>
                <div className='font-medium text-base text-ascent-1'>
                    <Link to={"/profile/" + post?.userId?._id}>
                        <p className='font-medium text-lg text-ascent-1'>
                            {post.post?.userId?.firstName} {post.post?.userId?.lastName}
                            {/* {post[0].userId[0].firstName} */}
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostCard