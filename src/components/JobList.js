import React from 'react';
export default function JobList({ jobs, filter }) {
  const createDataRole = function(val){
    return val.join(' ');
  }
  return (
    <div className="container jobContainer my-5 pt-4 pb-2">
      {jobs.map(item => {
        return (
          <div 
            className={`shadow row align-items-center bg-white px-sm-4 px-2 py-4 mb-sm-4 mb-5 rounded-lg jobList ${item.featured ? 'featured' : ''}`} 
            key={item.id}
            data-role={item.role} data-level={item.level} data-languages={createDataRole(item.languages)} data-tools={createDataRole(item.tools)}
            >
            <div className="pr-2 col-sm-5 d-flex flex-wrap">
              <div className="mr-3 logoImage">
                <img src={item.logo} />
              </div>
              <div className="jobDetails">
                <div className="mb-2 font-13">
                  <span className="text-primary companyName pr-1">{item.company}</span> 
                  {item.new && <span className="badge badge-pill badge-primary text-uppercase p-2 font-10 mr-1">New!</span>} 
                  {item.featured && <span className="font-10 p-2 badge badge-pill badge-veryDarkGrayishCyan text-uppercase mr-1">Featured</span>}
                </div>
                <h3 className="positionName">{item.position}</h3>
                <div className="infoContent text-darkGrayishCyan">
                  <span>{item.postedAt}</span>
                  <span>{item.contract}</span>
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
            <div className="pr-2 col ml-auto languageBadges d-flex flex-wrap ">
              {item.role && <span 
                  className="badge mx-2 p-2" 
                  onClick={()=>filter('role',item.role)}
                >
                  {item.role}
                </span>}
              {item.level && <span 
                  className="badge mx-2 p-2" 
                  onClick={()=>filter('level',item.level)}
                >
                  {item.level}
                </span>}
              {item.languages && item.languages.map((languageItem,index)=>(
                <span 
                  className="badge mx-2 p-2" 
                  key={`${languageItem}-${index}`}
                  onClick={()=>filter('languages',languageItem)}
                >
                  {languageItem}
                </span>))}
              {item.tools && item.tools.map((toolsItem,index)=>(
                <span 
                  className="badge mx-2 p-2" 
                  key={`${toolsItem}-${index}`}
                  onClick={()=>filter('tools',toolsItem)}
                >
                  {toolsItem}
                </span>))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
