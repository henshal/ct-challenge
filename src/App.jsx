import "bootstrap/dist/css/bootstrap.min.css";
import mountainSVG from "./assets/mountain.svg";
import mountain2JPG from "./assets/mountain2.jpg";
import snowMount from "./assets/snowMount.jpg";
import snowJPG from "./assets/snow.jpg";
import slideShow1 from "./assets/slideShow1.png";
import slideShow2 from "./assets/slideShow2.png";
import control from "./assets/control.png";

function App() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${snowJPG})`,
          backgroundSize: "cover",
          height: "600px",
          bottom: 0,
        }}
      >
        <div className="container" style={{ width: "900px" }}>
          <div className="row pt-3 mx-5 align-items-center">
            <div className="col">
              <img src={mountainSVG} width={40} alt="" />
            </div>
            <div className="col d-flex flex-row-reverse fw-bolder text-white">
              <div>
                <span
                  style={{ fontSize: "10px", textUnderlineOffset: "5px" }}
                  className="px-4 fst-italic text-decoration-underline"
                >
                  01. HISTORY
                </span>
                <span
                  style={{ fontSize: "10px", textUnderlineOffset: "5px" }}
                  className="px-4 fst-italic text-decoration-underline"
                >
                  02. TEAM
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container"
          style={{ textAlign: "center", marginTop: 0, width: "900px" }}
        >
          <div
            className="ms-2"
            style={{
              lineHeight: "1",
              // opacity: 0.3,
              // letterSpacing: 3.8,
              // fontFamily: "Impact",
              // fontSize: "100px",
            }}
          >
            <span
              style={{
                letterSpacing: 3.8,
                fontFamily: "Impact",
                fontSize: "100px",
              }}
            >
              LOSANGELES
            </span>
            <br />
            <span
              style={{
                fontFamily: "Impact",
                fontSize: "111px",
                color: "#404e6c",
              }}
            >
              MOUNTAINS
            </span>
          </div>
        </div>
      </div>

      {/* </div> */}
      <div
        style={{
          backgroundImage: `url(${mountain2JPG})`,
          backgroundSize: "cover",
          height: "700px",
        }}
      >
        <div className="bg-light text-dark">
          <div className="container" style={{ width: "900px" }}>
            <div className="row py-3 mx-5 align-items-center">
              <div className="col">
                <div className="d-flex flex-row align-items-center">
                  <div>
                    <img src={mountainSVG} width={40} alt="" />
                  </div>
                  <div
                    className="ms-2"
                    style={{
                      lineHeight: "1",
                      opacity: 0.7,
                      letterSpacing: 0.8,
                      fontFamily: "Impact",
                      fontSize: "20px",
                    }}
                  >
                    <span>LOSANGELES</span>
                    <br />
                    <span>MOUNTAINS</span>
                  </div>
                </div>
              </div>
              <div className="col d-flex flex-row-reverse">
                <div>
                  <span
                    style={{ fontSize: "10px", textUnderlineOffset: "5px" }}
                    className="px-4 fst-italic text-decoration-underline"
                  >
                    01. HISTORY
                  </span>
                  <span
                    style={{ fontSize: "10px", textUnderlineOffset: "5px" }}
                    className="px-4 fst-italic text-decoration-underline"
                  >
                    02. TEAM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ width: "800px" }}>
          <div className="d-flex justify-content-center">
            <div className="d-flex py-3 align-items-center">
              <div>
                <span
                  className="h1"
                  style={{
                    letterSpacing: 0.8,
                    fontFamily: "Impact",
                    transform: "scaleY(3)",
                    fontSize: "130px",
                    opacity: "0.3",
                    fontWeight: "bolder",
                  }}
                >
                  01.
                </span>
              </div>
              <div
                style={{
                  fontFamily: "Impact",
                  fontSize: "40px",
                  opacity: 0.7,
                  marginLeft: -23,
                  marginBottom: -17,
                }}
              >
                HISTORY
              </div>
            </div>
          </div>
        </div>

        <div className="container" style={{ width: "800px", marginTop: -50 }}>
          <div className="d-flex justify-content-center">
            <div
              className="d-flex py-3 align-items-center"
              style={{ marginLeft: 15 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in
              ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus
              est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt
              quam. Cras scelerisque id quam sed dignissim Pellentesque urna
              nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus
              suscipit dignissim tortor nec congue.
            </div>
          </div>
        </div>
      </div>

      <div>
        <div
          className="d-flex align-items-center"
          style={{ height: "190px", backgroundColor: "#404e6c" }}
        >
          <div className="container" style={{ width: "800px" }}>
            <div className="d-flex">
              <div className="mx-2">
                <img src={slideShow1} width={"180"} alt="" />
              </div>
              <div className="mx-2">
                <img src={slideShow2} width={"180"} alt="" />
              </div>
              <div className="mx-2">
                <img src={slideShow1} width={"180"} alt="" />
              </div>
              <div className="mx-2">
                <img src={slideShow2} width={"180"} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light text-dark">
        <div className="container" style={{ width: "800px" }}>
          <div className="d-flex py-3 align-items-center">
            <div>
              <span
                className="h1"
                style={{
                  letterSpacing: 0.8,
                  fontFamily: "Impact",
                  transform: "scaleY(3)",
                  fontSize: "130px",
                  opacity: "0.4",
                  fontWeight: "bolder",
                }}
              >
                02.
              </span>
            </div>
            <div
              style={{
                fontFamily: "Impact",
                fontSize: "20px",
                marginLeft: -22,
                marginBottom: -23,
              }}
            >
              CLIMB
            </div>
            <div className="ms-4">
              Cras scelerisque id quam sed dignissim Pellentesque urna nunc,
              gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit
              dignissim tortor nec congue.
            </div>
          </div>
        </div>
      </div>

      <div className="text-dark" style={{ height:"36px",backgroundColor: "#404e6c" }}>
        <div className="container" style={{ height:"100%",width: "900px" }}>
          <div className="row mx-5 align-items-center" style={{ height:"100%" }}>
            <div style={{ height:"100%" }}>
              <div className="d-flex" style={{ height:"100%" }}>
                <div
                  className="me-3 d-flex align-items-center"
                  style={{ height:"100%",backgroundColor: "white", opacity: 0.4 }}
                >
                  <div
                    className="mx-4 text-decoration-underline"
                    style={{
                      fontFamily: "Impact",
                      fontSize: "20px",
                      textUnderlineOffset: "2px",
                    }}
                  >
                    MOUNTAIN 1
                  </div>
                </div>
                <div className="me-3 d-flex align-items-center">
                  <div
                    style={{
                      fontFamily: "Impact",
                      fontSize: "20px",
                      color: "white",
                      opacity: 0.4
                    }}
                  >
                    MOUNTAIN 2
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(${snowMount})`,
          backgroundSize: "cover",
          height: "700px",
        }}
      >
        <div className="container" style={{ width: "800px", paddingTop: 100 }}>
          <div
            className="border border-light bg-light p-5 pt-2"
            style={{ opacity: 0.7, width: 450, height: 250 }}
          >
            <div
              style={{
                fontFamily: "Impact",
                fontSize: "40px",
              }}
            >
              SCHEDULE
            </div>
            <div>
              <div className="mt-2 d-flex justify-content-between">
                <div>25 Nov 2016</div>
                <div>Vestibulum viverra</div>
              </div>
              <div className="mt-2 d-flex justify-content-between">
                <div>28 Nov 2016</div>
                <div>Vestibulum viverra</div>
              </div>
              <div className="mt-4 d-flex justify-content-between">
                <div>18 Nov 2016</div>
                <div>Vestibulum viverra</div>
              </div>
              <div className="mt-4 d-flex justify-content-between">
                <div>7 Nov 2016</div>
                <div>Vestibulum viverra</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-light" style={{ backgroundColor: "#404e6c" }}>
        <div className="container" style={{ width: "900px" }}>
          <div className="row py-3 mx-5 align-items-center">
            <div className="col">
              <div className="d-flex flex-row align-items-center">
                <div>
                  <img src={mountainSVG} width={40} alt="" />
                </div>
                <div
                  className="ms-2"
                  style={{
                    lineHeight: "1",
                    opacity: 0.3,
                    letterSpacing: 0.8,
                    fontFamily: "Impact",
                    fontSize: "20px",
                  }}
                >
                  <span>LOSANGELES</span>
                  <br />
                  <span>MOUNTAINS</span>
                </div>
              </div>
            </div>
            <div className="col d-flex flex-row-reverse">
              <div>
                <span
                  style={{
                    opacity: 0.3,
                    fontSize: "13px",
                    textUnderlineOffset: "5px",
                  }}
                  className="px-4 fst-italic fw-bolder"
                >
                  COPYRIGHT 2016. ALL RIGHTS RESERVED
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
