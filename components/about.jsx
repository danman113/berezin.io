import React from 'react'

const About = () => (
  <div className="flex center" id='about'>
    <div>
      <img src="me.jpg" alt="A silly picture of me drinking water." style={{ width:'25%'}} className="img-circle center-block img-responsive" />
    </div>
    <div>
      <h2 className="text-center">Objective</h2>
      <p className="text-center">
        To belong to a company where I am challenged to learn more about the world of Software Development while applying what I've learned at University. I am Passionate about Web Development, Distributed Systems, Software Testing, and the intersection of the three.
      </p>
    </div>
  </div>
)

export default About