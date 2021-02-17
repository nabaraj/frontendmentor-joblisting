import React from 'react'

export default function Header({ filterItems, clearFilter }) {
  const createTags = function(filters, keyName){
   return filters.map((item, index)=>(
      <span 
        key={item} 
        className={`filterBadge bg-lightGrayishCyan mr-2 rouded text-primary pl-2 d-flex align-items-center ${item}`}>
        {item}
        <span className="px-2 py-1 font-12 ml-2" onClick={()=>clearFilter(item,index, keyName)}>X</span>
      </span>
    ))
  }
  return (
    <div id="header" className="d-flex align-items-end">
      <div className="container jobContainer" style={{ marginTop: '1rem' }}>
        {Object.keys(filterItems).length > 0 && (
          <div className="filterContainer bg-white row rounded-lg mb-n4 shadow p-3 align-items-center">
            <div className="col-9 d-flex flex-wrap">{Object.keys(filterItems).map(keyName => createTags(filterItems[keyName], keyName))}</div>
            <div className="col-3 ml-auto text-right clearFilter" onClick={clearFilter}>
              clear
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
