import { ChevronRight } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Tabs = ({ tabs, color }) => {
  const navigate = useNavigate()

  return (
    <div
      className={`my-5 md:my-5 ${color} font-R_regular capitalize flex items-center gap-0 tracking-[0.1rem] md:tracking-[0.2rem]`}
    >
      {tabs?.map((tab, index) => {
        const isLast = index === tabs.length - 1
        return (
          <React.Fragment key={index}>
            <p
              className={`
                ${tab.href === '' ? 'opacity-80 cursor-context-menu' : 'cursor-pointer hover:opacity-80'}
                ${isLast ? 'line-clamp-1 max-w-[180px] md:max-w-[500px]' : 'whitespace-nowrap'}
              `}
              onClick={() => tab.href && navigate(tab.href)}
            >
              {tab.name}
            </p>
            {index < tabs.length - 1 && <ChevronRight className="opacity-70 mx-0 md:mx-1 flex-shrink-0 w-5 md:w-auto" />}
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default Tabs
