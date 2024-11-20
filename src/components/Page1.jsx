import { react, useEffect } from "react";
import city from "../assets/city.mp4";
import { gsap } from "gsap";
import LocomotiveScroll from "locomotive-scroll";

const Page1 = () => {
  const loading = () => {
    var tl = gsap.timeline();
    tl.to(".yellow1", {
      top: "-100%",
      duration: 0.5,
      delay: 0.5,
      ease: "expo.out",
    });
    tl.fromTo(
      "#yellow2",
      {
        y: 1200,
      },
      { y: 0, ease: "expo.out", duration: 0.7, delay: 0.6 },
      "load"
    );

    tl.to(
      ".loader h1",
      {
        delay: 0.6,
        duration: 0.5,
        color: "black",
      },
      "load"
    );
    tl.to(".loader", {
      opacity: 0,
    });

    tl.to(".loader", {
      display: "none",
    });
    tl.to(
      ".nav",
      {
        opacity: 1,
        duration: 0.2,
        delay: 1,
      },
      "load"
    );
  };
 

  const hoverEffect = () => {
    const page2 = document.querySelector(".page2");
    const elem = document.querySelectorAll(".elem");
    elem.forEach((e) => {
      e.addEventListener("mouseenter", () => {
        var bgimg = e.getAttribute("data-img");
        page2.style.backgroundImage = `url(${bgimg})`;
      });
    });
  };

  const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  
  const scrollon=()=>{
      document.querySelector(".footer h2").addEventListener("click",()=>{
    scroll.scrollTo(0)
  })
  };

  
  useEffect(() => {
    scrollon()
    loading();
  });
  return (
    <>
      <div className="loader">
        <div className="yellow1"></div>
        <div id="yellow2"></div>
        <video muted autoPlay loop src={city}></video>
        <h1>
          {" "}
          CREATIVE PROFESSIONALS <br /> <em>DEDICATED</em> TO CULTULRAL
          <br /> ADVANCEMENT THROUGH <br /> <em>STRATEGY</em> AND DESIGN
        </h1>
      </div>
      <div className="nav">
        <svg fill="none" viewBox="0 0 71 16">
          <path
            fill="#000"
            d="M0 .854h4.124L5.15 5.718c.336 1.548.691 3.95.691 3.95h.04s.375-2.124.73-3.752L7.696.854h3.73l1.085 5.022c.355 1.648.71 3.792.71 3.792h.04s.374-2.402.71-3.99L14.997.854h4.223L15.51 15.05h-4.164l-1.262-6.015a62 62 0 0 1-.494-2.76h-.04s-.237 1.53-.494 2.76L7.833 15.05H3.611zm18.081 14.035 1.697-1.906c-1.065-1.29-1.657-3.017-1.657-4.982 0-4.25 2.762-7.406 7.143-7.406 1.697 0 3.157.477 4.302 1.31L31.263 0l1.223 1.111-1.696 1.926c1.065 1.291 1.657 3.017 1.657 4.964 0 4.249-2.802 7.384-7.183 7.384-1.697 0-3.137-.476-4.282-1.29L19.305 16zm4.46-5.043 4.598-5.202c-.473-.457-1.086-.735-1.854-.735-1.973 0-2.98 1.767-2.98 4.09q0 1.013.236 1.847m5.723-1.847c0-.655-.079-1.29-.257-1.826l-4.578 5.181c.473.457 1.085.715 1.854.715 1.973 0 2.981-1.747 2.981-4.07M32.858.854h7.006c2.88 0 5.328 1.33 5.328 4.228 0 1.628-.829 2.78-2.31 3.455v.06c1.145.437 1.737 1.231 1.974 2.343.374 1.706.058 3.751.573 3.891v.219h-4.066c-.395-.278-.237-2.024-.533-3.295-.258-1.092-.731-1.648-1.934-1.648h-1.914v4.943h-4.124zm4.124 6.294h2.21c1.183 0 1.835-.516 1.835-1.509 0-.933-.592-1.528-1.776-1.528h-2.27zM45.771.854h4.124V5.5L54.159.853h4.737l-5.27 5.717 5.565 8.477h-4.795L50.804 9.43l-.907 1.032v4.585h-4.124z"
          ></path>
          <path
            fill="#000"
            d="M57.563 10.522h4.223c.139 1.132 1.007 1.667 2.367 1.667.81 0 1.796-.317 1.796-1.171s-.947-1.072-2.683-1.509c-2.367-.595-5.228-1.41-5.228-4.427 0-3.256 2.643-4.487 5.82-4.487 2.92 0 5.605 1.231 5.663 4.329h-4.084c-.119-.775-.671-1.27-1.796-1.27-.908 0-1.54.417-1.54.992 0 .833 1.205.952 3.317 1.468 2.367.577 4.736 1.509 4.736 4.527s-2.743 4.744-6.078 4.744c-3.671 0-6.453-1.587-6.513-4.863"
          ></path>
        </svg>
      </div>
      <div className="main ">
        <div className="page1" data-scroll>
          <h1>
            {" "}
            CREATIVE PROFESSIONALS <br /> <em>DEDICATED</em> TO CULTULRAL
            <br /> ADVANCEMENT THROUGH <br /> <em>STRATEGY</em> AND DESIGN
          </h1>
        </div>
        <div className="page2 " data-scroll>
          <div
            className="elem"
            data-img="https://works.studio/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F136349%2F1727445397-works_converse_fa23_design_02.jpg&w=1920&q=96"
            onMouseEnter={hoverEffect}
          >
            <h2>Converse</h2>

            <div className="marku">
              <div className="blur"></div>
              <div className="moving-in">
                <h5>Creative direction</h5>
                <h5>Digital Design</h5>
                <h5>Art Direction</h5>
                <h5>Branding and Identity</h5>
                <h5>Type Design</h5>
              </div>
              <div className="moving-in">
                <h5>Creative direction</h5>
                <h5>Digital Design</h5>
                <h5>Art Direction</h5>
                <h5>Branding and Identity</h5>
                <h5>Type Design</h5>
              </div>
              <div className="moving-in">
                <h5>Creative direction</h5>
                <h5>Digital Design</h5>
                <h5>Art Direction</h5>
                <h5>Branding and Identity</h5>
                <h5>Type Design</h5>
              </div>
              <div className="moving-in">
                <h5>Creative direction</h5>
                <h5>Digital Design</h5>
                <h5>Art Direction</h5>
                <h5>Branding and Identity</h5>
                <h5>Type Design</h5>
              </div>
              <div className="moving-in">
                <h5>Creative direction</h5>
                <h5>Digital Design</h5>
                <h5>Art Direction</h5>
                <h5>Branding and Identity</h5>
                <h5>Type Design</h5>
              </div>
            </div>
          </div>
          <div
            className="elem"
            onMouseEnter={hoverEffect}
            data-img="https://images.unsplash.com/photo-1613363525737-f5ef745418e2?w=2000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHBpY3N8ZW58MHx8MHx8fDA%3D"
          >
            <h2>Nike NFL</h2>

            <div className="marku">
              <div className="blur"></div>
              <div className="moving-in">
                <h5>Creative direction</h5>
                <h5>Digital Design</h5>
                <h5>Art Direction</h5>
                <h5>Branding and Identity</h5>
                <h5>Type Design</h5>
              </div>
              <div className="moving-in">
                <h5>Creative direction</h5>
                <h5>Digital Design</h5>
                <h5>Art Direction</h5>
                <h5>Branding and Identity</h5>
                <h5>Type Design</h5>
              </div>
              <div className="moving-in">
                <h5>Creative direction</h5>
                <h5>Digital Design</h5>
                <h5>Art Direction</h5>
                <h5>Branding and Identity</h5>
                <h5>Type Design</h5>
              </div>
              <div className="moving-in">
                <h5>Creative direction</h5>
                <h5>Digital Design</h5>
                <h5>Art Direction</h5>
                <h5>Branding and Identity</h5>
                <h5>Type Design</h5>
              </div>
              <div className="moving-in">
                <h5>Creative direction</h5>
                <h5>Digital Design</h5>
                <h5>Art Direction</h5>
                <h5>Branding and Identity</h5>
                <h5>Type Design</h5>
              </div>
            </div>
          </div>
          <div
            className="elem"
            onMouseEnter={hoverEffect}
            data-img="https://images.unsplash.com/photo-1571729479716-f04738b708e3?w=2000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBpY3N8ZW58MHx8MHx8fDA%3D"
          >
            <h2>Mineral</h2>

            <div className="marku">
              <div className="blur"></div>
              <div className="moving-in">
                <h5>Creative direction</h5>
                <h5>Digital Design</h5>
                <h5>Art Direction</h5>
                <h5>Branding and Identity</h5>
                <h5>Type Design</h5>
              </div>
              <div className="moving-in">
                <h5>Creative direction</h5>
                <h5>Digital Design</h5>
                <h5>Art Direction</h5>
                <h5>Branding and Identity</h5>
                <h5>Type Design</h5>
              </div>
              <div className="moving-in">
                <h5>Creative direction</h5>
                <h5>Digital Design</h5>
                <h5>Art Direction</h5>
                <h5>Branding and Identity</h5>
                <h5>Type Design</h5>
              </div>
              <div className="moving-in">
                <h5>Creative direction</h5>
                <h5>Digital Design</h5>
                <h5>Art Direction</h5>
                <h5>Branding and Identity</h5>
                <h5>Type Design</h5>
              </div>
              <div className="moving-in">
                <h5>Creative direction</h5>
                <h5>Digital Design</h5>
                <h5>Art Direction</h5>
                <h5>Branding and Identity</h5>
                <h5>Type Design</h5>
              </div>
            </div>
          </div>
          <div
            className="elem"
            onMouseEnter={hoverEffect}
            data-img="https://images.unsplash.com/photo-1589287707312-213624549c88?w=2000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBpY3N8ZW58MHx8MHx8fDA%3D"
          >
            <h2>FutureWorld</h2>

            <div className="marku">
              <div className="blur"></div>
              <div className="moving-in">
                <h5>Creative direction</h5>
                <h5>Digital Design</h5>
                <h5>Art Direction</h5>
                <h5>Branding and Identity</h5>
                <h5>Type Design</h5>
              </div>
              <div className="moving-in">
                <h5>Creative direction</h5>
                <h5>Digital Design</h5>
                <h5>Art Direction</h5>
                <h5>Branding and Identity</h5>
                <h5>Type Design</h5>
              </div>
              <div className="moving-in">
                <h5>Creative direction</h5>
                <h5>Digital Design</h5>
                <h5>Art Direction</h5>
                <h5>Branding and Identity</h5>
                <h5>Type Design</h5>
              </div>
              <div className="moving-in">
                <h5>Creative direction</h5>
                <h5>Digital Design</h5>
                <h5>Art Direction</h5>
                <h5>Branding and Identity</h5>
                <h5>Type Design</h5>
              </div>
              <div className="moving-in">
                <h5>Creative direction</h5>
                <h5>Digital Design</h5>
                <h5>Art Direction</h5>
                <h5>Branding and Identity</h5>
                <h5>Type Design</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="page3" data-scroll>
          <div className="image-container">
         <div className="line">
         <div className="image-div" style={{ height:"40vw"}}>
            <div className="overlay">
              <p>chikago blackhawks <em>Best Day Ever</em>
              </p>
            </div>
            <img src="https://works.studio/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F136349%2F1727810033-works_cdl21_design_01.jpg&w=768&q=96" alt="img" />
          </div>
          <div className="image-div" style={{ height:"25vw"}}>
            <div className="overlay">
              <p>chikago blackhawks <em>Best Day Ever</em>
              </p>
            </div>
            <img src="https://images.unsplash.com/photo-1532995042981-7ce860cb62b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTh8MTA1MDk1NHx8ZW58MHx8fHx8" alt="img" />
          </div>

          <div className="image-div">
            <div className="overlay">
              <p>chikago blackhawks <em>Best Day Ever</em>
              </p>
            </div>
            <img src="https://plus.unsplash.com/premium_photo-1731499365452-6b8dc111229a?w=2000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBpY3N8ZW58MHx8MHx8fDA%3D" alt="img" />
          </div>

          <div className="image-div" style={{height:"30vw"}}>
            <div className="overlay">
              <p>chikago blackhawks <em>Best Day Ever</em>
              </p>
            </div>
            <img src="https://images.unsplash.com/photo-1731589815860-2a5665633d93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8UzRNS0xBc0JCNzR8fGVufDB8fHx8fA%3D%3D" alt="img" />
          </div>
         </div>


         {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
         <div className="line">
         <div className="image-div">
            <div className="overlay">
              <p>chikago blackhawks <em>Best Day Ever</em>
              </p>
            </div>
            <img src="https://images.unsplash.com/photo-1434332253042-50df2f9f7b39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMDUwOTU0fHxlbnwwfHx8fHw%3D" alt="img" />
          </div>
          <div className="image-div">
            <div className="overlay">
              <p>chikago blackhawks <em>Best Day Ever</em>
              </p>
            </div>
            <img src="https://images.unsplash.com/photo-1616953882439-4765aafc8ef1?w=2000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHBpY3N8ZW58MHx8MHx8fDA%3D" alt="img" />
          </div>

          <div className="image-div">
            <div className="overlay">
              <p>chikago blackhawks <em>Best Day Ever</em>
              </p>
            </div>
            <img src="https://images.unsplash.com/photo-1528301725143-1ba694832e77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTV8MTA1MDk1NHx8ZW58MHx8fHx8" alt="img" />
          </div>

          <div className="image-div" style={{ height:"40vw"}} >
            <div className="overlay">
              <p>chikago blackhawks <em>Best Day Ever</em>
              </p>
            </div>
            <img src="https://images.unsplash.com/photo-1628246493110-c34888a9117b?w=2000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHBpY3N8ZW58MHx8MHx8fDA%3D" alt="img" />
          </div>
         </div>
  {/* --------------------------------------------------------------------------------------------- */}
         <div className="line">
         <div className="image-div" style={{ height:"45vw"}}>
            <div className="overlay">
              <p>chikago blackhawks <em>Best Day Ever</em>
              </p>
            </div>
            <img src="https://images.unsplash.com/photo-1517984617863-c6bd4eead73d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXwxMDUwOTU0fHxlbnwwfHx8fHw%3D" alt="img" />
          </div>
          <div className="image-div" style={{ height:"20vw"}}>
            <div className="overlay">
              <p>chikago blackhawks <em>Best Day Ever</em>
              </p>
            </div>
            <img src="https://plus.unsplash.com/premium_photo-1731114103697-c3a21192181c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDN8fHxlbnwwfHx8fHw%3D" alt="img" />
          </div>

          <div className="image-div" style={{ height:"22vw"}}>
            <div className="overlay">
              <p>chikago blackhawks <em>Best Day Ever</em>
              </p>
            </div>
            <img src="https://plus.unsplash.com/premium_photo-1670590785994-ab5e8a2ccd61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwbHVzLWZlZWR8MTV8fHxlbnwwfHx8fHw%3D" alt="img" />
          </div>

          <div className="image-div">
            <div className="overlay">
              <p>chikago blackhawks <em>Best Day Ever</em>
              </p>
            </div>
            <img src="https://images.unsplash.com/photo-1628246493110-c34888a9117b?w=2000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHBpY3N8ZW58MHx8MHx8fDA%3D" alt="img" />
          </div>
         </div>

          </div>
        </div>
        <div className="footer">
          <h2>Back To Top</h2>
          <div className="foot"></div>
        </div>
      </div>
    </>
  );
};

export default Page1;
