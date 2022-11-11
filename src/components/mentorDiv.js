import React from 'react'

const MentorDiv = (props) => {
    const { item } = props;

    return (
        <div className='mentorDiv'>
            <div className='imageDiv'><img src={item.img} alt='MentorImg' /></div>
            <p>{item.name}</p>
            <p>{item.desc}</p>
        </div>
    )
}
export default MentorDiv
