import React, { useEffect, useState } from "react";
import Typed from "typed.js";
import $ from "jquery";
import axios from "axios";

const NavBar = () => {
  const[profileImg,setProfileImg]=useState("")
  useEffect(() => {
    if ($(".typed-text-output").length === 1) {
      var typed_strings = $(".typed-text").text();
      var typed = new Typed(".typed-text-output", {
        strings: typed_strings.split(","),
        typeSpeed: 100,
        backSpeed: 20,
        smartBackspace: false,
        loop: true,
      });
    }
    fetchProfilImg()
  }, []);


// const fetchProfileImage=async()=>{
//   let result =await axios.get("http://127.0.0.1:8080/all_profile")
//   console.log(result);
// }

const fetchProfilImg=async()=>{

  axios.get("http://13.48.44.62:8080/all_profile")
  .then((res)=>{
    setProfileImg(res?.data?.data?.profile_image?.imgLink)
    console.log(res);
  })
  .catch((err)=>{
    console.log(err);
  })

}


  return (
    <>
      <div className="container-fluid bg-light my-6 mt-0" id="home">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 py-6 pb-0 pt-lg-0">
              <h3 className="text-primary mb-3">I'm</h3>
              <h1 className="display-3 mb-3">Ramkrishna Mahato</h1>
              <h2 className="typed-text-output d-inline" />
              <div className="typed-text d-none">
                Web Designer, Web Developer, Front End Developer, Apps Designer,
                Apps Developer
              </div>
              <div className="d-flex align-items-center pt-5">
                <a href="https://firebasestorage.googleapis.com/v0/b/portfolio-69590.appspot.com/o/cv%2FRam%20Resume.pdf?alt=media&token=f9217b82-4ed9-4741-94b8-c5c3126006dd" className="btn btn-primary py-3 px-4 me-5">
                  Download CV
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <img className="img-fluid" src={profileImg} alt="/" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
