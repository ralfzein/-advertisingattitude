import { ChevronRight } from 'lucide-react';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Tabs = ({tabs,color}) => {
    const navigate =  useNavigate();
    
  return (
 <div className={`my-5 ${color}  font-R_regular capitalize flex items-center gap-0 tracking-[0.2rem]`}>
            {tabs && tabs.map((tab, index) => (
                
                <>
                <p key={index} className={` ${tab.href =="" ? 'opacity-80 cursor-context-menu ': 'cursor-pointer hover:opacity-80'}   `}
                onClick={() => navigate(tab.href)}>{tab.name}</p>
                                {index < tabs.length - 1 && (
                                    
                                 <ChevronRight className='opacity-70' />
                                )}
                
                </>
                
                ))}
                </div>
  )
}

export default Tabs
