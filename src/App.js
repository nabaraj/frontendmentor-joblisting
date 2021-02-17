
import {useState, useEffect} from 'react';
import data from './data/data.json';

import './app.scss';
import JobList from './components/JobList';
import Header from './components/Header';


function App() {
  const [jobList,setJobList] = useState(data);
  const [filterItems, setFilter] = useState({});
  const clearFilter = (event, index, category)=>{
    if(!category){
      setFilter({});
    }else{
      let getCurrentFilter = {...filterItems}
      getCurrentFilter[category] = [...getCurrentFilter[category].slice(0,index), ...getCurrentFilter[category].slice(index+1)];
      if(getCurrentFilter[category].length===0){
        delete getCurrentFilter[category];
      }
      setFilter(getCurrentFilter);
    }
    
  };
  const filterListing = (key, value)=>{
    let getCurrentFilter = {...filterItems}
    if(!getCurrentFilter[key]){
      getCurrentFilter[key]=[];
      getCurrentFilter[key].push(value);
    }else{
      if(getCurrentFilter[key].indexOf(value)===-1){
        getCurrentFilter[key].push(value);
      }
    }
    setFilter(getCurrentFilter);
  }
  function findCommonElements(arr1, arr2) { 
    return arr1.every(item => arr2.includes(item));
  }
  function matchRoleLevel(item){
    let found=true;
    if(Object.keys(filterItems).length===0){
      return true;
    }
    Object.keys(filterItems).map(fi=>{
      if(fi==='role'){
        if(filterItems[fi].indexOf(item.role)===-1){
          found = false;
        }
      }
      if(fi==='level'){
        if(filterItems[fi].indexOf(item.level)===-1){
          found = false;
        }
      } 
      if(fi==='languages'){
        if(!findCommonElements(filterItems[fi],item[fi])){
          found = false;
        }
      }
      if(fi==='tools'){
        if(!findCommonElements(filterItems[fi],item[fi])){
          found = false;
        }
      }
    });
    return found;
  }
  useEffect(() => {
    let filteredData = data.filter(matchRoleLevel);
    setJobList(filteredData);
  }, [filterItems, data]);
  return (
    <div className="App">
      <Header filterItems = {filterItems} clearFilter={clearFilter}/>
      <JobList 
      jobs={jobList} 
      filter={filterListing}
      />
    </div>
  );
}

export default App;
