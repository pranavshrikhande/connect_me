import React from 'react';
import Image from 'next/image';
import { FiThumbsUp } from 'react-icons/fi';
import { FaRegCommentAlt } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";


const Post = () => {
  return (
    <div className='flex flex-col'>
            <div className="bg-white mt-6 rounded-md p-4">
                <div className="flex items-center space-x-2">
                    <img  src="" className="rounded-full w-10 h-10"/>
                    
                    <div>
                            <p className='font-medium'>USername3</p>
                            <p className='text-xs text-gray-500'>{new Date().toLocaleString()}</p>

                    </div>
                </div>  
                    <p className='py-4'> </p>
            </div>
            {/**If Any image */}
            <div className='relative h-60 md:h-96 bg-white p-2'>
                <Image src="https://images.pexels.com/photos/1237124/pexels-photo-1237124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1-1237124/" layout="fill" 
                objectFill="cover"
                />
            </div>
           {/**Footer */}

           <div className='flex items-center justify-center bg-white p-2'>
                <div className='flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-cl cursor-pointer'>

                        <FiThumbsUp className='h-4' />
                        
                        <p className='text-xs sma:text-base'>Like</p>
                </div>

                <div className='flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-cl cursor-pointer'>
                <FaRegCommentAlt className='h-4' />
                <p className='text-xs sma:text-base'>Comment</p>
                </div>

                <div className='flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-cl cursor-pointer'>
                <RiShareForwardLine className='h-4' />
                <p className='text-xs sma:text-base'>Share</p>
                </div>


                




           </div>
    </div>
  )
}

export default Post