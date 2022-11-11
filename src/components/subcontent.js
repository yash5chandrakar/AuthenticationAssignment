import React from 'react'
import MentorDiv from './mentorDiv'
import "./subcontent.css"

const Subcontent = (props) => {
  const mentors = props.mentors
  let id = 1;
  return (
    <div className='subDiv'>
      <div className='topCat'>
        <h1>Top Categories</h1>
        <div className='contents'>
          <div>
            <h1>🖥</h1>
            <p>Development</p>
          </div>
          <div>
            <h1>💊</h1>
            <p>Research</p>
          </div>
          <div>
            <h1>🛠</h1>
            <p>Engineering</p>
          </div>
          <div>
            <h1>📆</h1>
            <p>Marketing</p>
          </div>
          <div>
            <h1>📊</h1>
            <p>Business</p>
          </div>
          <div>
            <h1>📡</h1>
            <p>Communications</p>
          </div>
        </div>
      </div>
      <div className='mentors'>
        <h1>Our Professional Mentors</h1>
        <div className='mentorSub'>
          {mentors && mentors.map((item) => {
            return <MentorDiv key={id++} item={item} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Subcontent

