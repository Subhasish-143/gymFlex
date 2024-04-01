import {useState, useEffect, useRef} from 'react'

import { fetchFromAPI } from './fetchFromAPI'

import './Exercises.css'

const Exercises = () => {
  // 
  const inputRef = useRef(null);

  const [query,setQuery] = useState('exercises');

  const handleClick = () => {
    const inputVal = inputRef.current.value;
    setQuery(`${inputVal.toLowerCase()}`);    
  }



  // useEffect(() => {
  //   fetchFromAPI(`exercises`).then((data) => {
  //     data.filter((exercise) => {
  //       exercise.name
  //     })
  //   }).catch((error) => console.log(error));
  // },[query]);

  return (
    <div>
      <section className="exercises">
        <div className="container exercises_container">
          {/* 1st section of search and links */}
          <div className="searching_part">
            <h2>Awesome Exercises You Should Know</h2>
            <div className="search_bar">
              <input type="text" placeholder='Search Exercise' ref={inputRef} className='search'/>
              <button onClick={handleClick} type='sublit' className='search-btn'>search</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Exercises