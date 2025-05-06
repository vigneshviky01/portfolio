import React from 'react'
const SkillElement = ({skill,subSkills}) => {
    console.log(skill);
    console.log(subSkills);
  return (
    <section className='skillElement'>
        <h2 className='skill'>{skill}</h2>
        <ul>
            {subSkills.map((item,index)=>{
                return(<li className='subskill' key={index}>{item}</li>);
            })}
        </ul>
    </section>
  )
}

export default SkillElement