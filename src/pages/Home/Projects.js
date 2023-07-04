import axios from "axios";
import React, { useEffect, useState } from "react";

const Projects = () => {
const[projects,setProjects]=useState([])

useEffect(()=>{
  fetchProject()
},[])

  const fetchProject = async () => {
    // const result= await AxiosClients.RequestData("all_project","GET")
    // console.log(result);
    // if(result){
    //   setProjectData(result.data)
    // }
    axios
      .get("http://13.48.44.62:8080/all_project")
      .then((res) => {
        setProjects(res?.data?.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(projects,"projects");

  return (
    <>
      <div className="container-xxl py-6 pt-5" id="project">
        <div className="container">
          <div
            className="row g-5 mb-5 align-items-center wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="col-lg-6">
              <h1 className="display-5 mb-0">My Projects</h1>
            </div>
            <div className="col-lg-6 text-lg-end">
              <ul className="list-inline mx-n3 mb-0" id="portfolio-flters">
                <li className="mx-3 active" data-filter="*">
                  All Projects
                </li>
              </ul>
            </div>
          </div>
          <div
            className="row g-4 portfolio-container wow fadeInUp"
            data-wow-delay="0.1s"
          >
            {
              projects.map((item,index)=>{
                return(
                 
                  <div className="col-lg-6 col-md-6 portfolio-item first" key={index}>
              <div className="portfolio-img rounded overflow-hidden">
                <img className="img-fluid" src={item?.projects_image?.imgLink}alt="/" />
                <div className="portfolio-btn">
                  <a
                    className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                    href={item?.projects_image?.imgLink}
                    data-lightbox="portfolio"
                  >
                    <i className="fa fa-eye" />
                  </a>
                  <a
                    className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                    href={item?.projects_link}
                  >
                    <i className="fa fa-link" />
                  </a>
                </div>
              </div>
            </div>
                )
              })
            }
            
            {/* <div className="col-lg-4 col-md-6 portfolio-item second">
              <div className="portfolio-img rounded overflow-hidden">
                <img className="img-fluid" src="img/project-2.jpg" alt="/" />
                <div className="portfolio-btn">
                  <a
                    className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                    href="img/project-2.jpg"
                    data-lightbox="portfolio"
                  >
                    <i className="fa fa-eye" />
                  </a>
                  <a
                    className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                    href
                  >
                    <i className="fa fa-link" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item first">
              <div className="portfolio-img rounded overflow-hidden">
                <img className="img-fluid" src="img/project-3.jpg" alt="/" />
                <div className="portfolio-btn">
                  <a
                    className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                    href="img/project-3.jpg"
                    data-lightbox="portfolio"
                  >
                    <i className="fa fa-eye" />
                  </a>
                  <a
                    className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                    href
                  >
                    <i className="fa fa-link" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item second">
              <div className="portfolio-img rounded overflow-hidden">
                <img className="img-fluid" src="img/project-4.jpg" alt="/" />
                <div className="portfolio-btn">
                  <a
                    className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                    href="img/project-4.jpg"
                    data-lightbox="portfolio"
                  >
                    <i className="fa fa-eye" />
                  </a>
                  <a
                    className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                    href
                  >
                    <i className="fa fa-link" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item first">
              <div className="portfolio-img rounded overflow-hidden">
                <img className="img-fluid" src="img/project-5.jpg" alt="/" />
                <div className="portfolio-btn">
                  <a
                    className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                    href="img/project-5.jpg"
                    data-lightbox="portfolio"
                  >
                    <i className="fa fa-eye" />
                  </a>
                  <a
                    className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                    href
                  >
                    <i className="fa fa-link" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item second">
              <div className="portfolio-img rounded overflow-hidden">
                <img className="img-fluid" src="img/project-6.jpg" alt="/" />
                <div className="portfolio-btn">
                  <a
                    className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                    href="img/project-6.jpg"
                    data-lightbox="portfolio"
                  >
                    <i className="fa fa-eye" />
                  </a>
                  <a
                    className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                    href
                  >
                    <i className="fa fa-link" />
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
