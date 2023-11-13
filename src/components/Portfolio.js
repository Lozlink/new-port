import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Some of my projects so far, you can check them out in more depth on my <a href="https://github.com/Lozlink">GitHub</a></h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <a href={item.link} target="_blank" rel="noreferrer">
                  <div className="item-wrap">                     
                        <img src={`${item.imgurl}`} className="item-img" alt='portfolio item'/>               
                  </div>
                  </a>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}