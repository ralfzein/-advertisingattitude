import { Skeleton } from '../../../components/ui/skeleton'
import React from 'react'

const SkeletonCard = () => {
  return (
    <div>
       <div className={`flex flex-col gap-3 col-span-1   `}>
        <Skeleton className={`  w-full  h-[30rem] bg-gray-300`}/>
        <Skeleton className={`  w-full  h-[2rem] bg-gray-300`}/>
        <Skeleton className={`  w-full  h-[3rem] bg-gray-300`}/>
            <h3 className='font-R_regular text-secondary text-[2rem] uppercase'>{data?.title} </h3>
            <p>{data?.subTitle} </p>
            <div className='flex flex-row flex-wrap gap-2'>
                {[1,2,3,4].map((tag, index) => (
                   
        <Skeleton className={`  w-[5rem]  h-[2rem] rounded-full  bg-gray-300`}/>

                ))}
           
            </div>
        </div>
    </div>
  )
}

export default SkeletonCard
