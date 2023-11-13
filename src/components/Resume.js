import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <>
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                           <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                    </>
                  )
                })
                
              }
            </div>
            <div className="nine columns main-col">
            <span>Nov 2022 - Feb 2023</span>
              <p className="info">
              
              <p className='normal-text'><span>&bull;</span>Full stack web development course using modern technologies such as Node.Js, React, Ruby, CSS, HTML, Express and SQL Databases</p>
              <p className='normal-text'><span>&bull;</span>700+ hours of coding experience, proactive problem solving, refractoring mine (and others) code</p>
              <p className='normal-text'><span>&bull;</span>Best practises such as MVC, naming conventions, reusability, testing & error driven development, Agile work flow, wireframing</p>
              <p className='normal-text'><span>&bull;</span>Completed 4 projects (seen in portfolio) using different technologies above.</p>
              <p className='normal-text'><span>&bull;</span>Analysing complexity using Big O Notation</p>
              <p className='normal-text'><span>&bull;</span>Built web forms that collect user data for storage in a database (SQL) with form validation</p>
              <p className='normal-text'><span>&bull;</span>Familiar with front-end libraries such as MUI, bootstrap & lodash</p>
              <p className='normal-text'><span>&bull;</span>Deployed multiple projects using Firebase, Heroku, Surge platforms</p>
              <p className='normal-text'><span>&bull;</span>Integration with third party APIs</p>
              <p className='normal-text'><span>&bull;</span>Token based authentication (oAuth)</p>
              <p className='normal-text'><span>&bull;</span>Organised & planned team work flows with GitHub</p>
            </p>
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>


         {/* <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">

               <p>
               {resumeData.skillsDescription}
               </p>

   				<div className="bars">

   				   <ul className="skills">
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return(
                      <li>
                      <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                      </span><em>{item.skillname}</em>
                      </li>
                    )
                  })
                }

   					</ul>

   				</div>

   			</div>

         </div> */}

      </section>
    );
  }
}