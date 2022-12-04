import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });
  const router = useRouter()

  function clickHandler(e: any) {
    e.preventDefault()
    router.push("./test")

  }

  return (
    <>
      <header className="masthead">
        <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
          <div className="d-flex justify-content-center">
            <div className="text-center">
              <h1 className="mx-auto my-0 text-uppercase">Office Spaces</h1>
              <h2 className="text-white-50 mx-auto mt-2 mb-5">
                Great experience Are just around the corner ? You are exactly where you ought to be !
              </h2>
              <a className="btn btn-primary" href="#about">Explore RoomTree</a>
            </div>
          </div>
        </div>
      </header>
      <section className="about-section text-center" id="about">
        <div className="container-fluid p-0">
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="assets/img/carousel-1.png" className="d-block w-100" alt="..." />
                <div className="shadow p-3 mb-5 bg-body rounded position-absolute bottom-0 opacity-75">
                  <h2 className="text-start">Meeting Rooms <span className="badge bg-secondary">New</span></h2>
                  <p className="text-start">
                    If you hire people just because they can do a job, they’ll work for your money. But if you hire people
                    who believe what you believe, they’ll work for you with blood and sweat and tears.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="assets/img/carousel-2.png" className="d-block w-100" alt="..." />
                <div className="shadow p-3 mb-5 bg-body rounded position-absolute bottom-0 opacity-75">
                  <h2 className="text-start">Conference Rooms</h2>
                  <p className="text-start">
                    Coming together is a beginning; keeping together is progress; working together is success. Welcome to
                    the room where magic never stops and adventure Never ends! To win in the marketplace, you must first
                    win in the workplace.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="assets/img/carousel-3.png" className="d-block w-100" alt="..." />
                <div className="shadow p-3 mb-5 bg-body rounded position-absolute bottom-0 opacity-75">
                  <h2 className="text-start">Office Spaces</h2>
                  <p className="text-start">
                    Your work is going to fill a large part of your life, and the only way to be truly
                    satisfied is to do what you believe is great work. And the only way to do great work is to love what
                    you do. If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart,
                    you’ll know when you find it.
                  </p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
      <section className="projects-section bg-light" id="projects">
        <div className="container px-4 px-lg-5">

          <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
            <div className="col-xl-8 col-lg-7">
              <img className="img-fluid mb-3 mb-lg-0" src="assets/img/bg-masthead.jpg" alt="..." />
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="featured-text text-center text-lg-left">
                <h4>Warm</h4>
                <p className="text-black-50 mb-0">
                  Natural-toned colors such as green and blue hues can improve efficiency and focus, while warm yellows can
                  trigger optimism, creativity and fresh energy.
                </p>
              </div>
            </div>
          </div>
          <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
            <div className="col-lg-6">
              <img className="img-fluid" src="assets/img/demo-image-01.jpg" alt="..." />
            </div>
            <div className="col-lg-6">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-center text-lg-left">
                    <h4 className="text-white">Bright</h4>
                    <p className="mb-0 text-white-50">
                      Bright is energizing and radiates positivity. It plays to our emotions and lifts confidence levels so
                      is excellent for getting you into the right mood for producing great work.
                    </p>
                    <hr className="d-none d-lg-block mb-0 ms-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row gx-0 justify-content-center">
            <div className="col-lg-6">
              <img className="img-fluid" src="assets/img/demo-image-02.jpg" alt="..." />
            </div>
            <div className="col-lg-6 order-lg-first">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-center text-lg-right">
                    <h4 className="text-white">Dark yet light</h4>
                    <p className="mb-0 text-white-50">
                      And yet, it turns out that gray was the most popular colour for home offices in 2020, and is highly
                      recommended by interior design specialists.
                    </p>
                    <hr className="d-none d-lg-block mb-0 me-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="signup-section" id="signup">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5">
            <div className="col-md-10 col-lg-8 mx-auto text-center">
              <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
              <h2 className="text-white mb-5">Subscribe to receive updates!</h2>

              <form className="form-signup" id="contactForm" data-sb-form-api-token="API_TOKEN">

                <div className="row input-group-newsletter">
                  <div className="col">
                    <input className="form-control" id="emailAddress" type="email" placeholder="Enter email address..."
                      aria-label="Enter email address..." data-sb-validations="required,email" />
                  </div>
                  <div className="col-auto">
                    {/* <button className="btn btn-primary disabled" id="submitButton" type="submit" onclick="showToast()">
                      Notify Me!
                    </button> */}
                  </div>
                </div>
                <div className="invalid-feedback mt-2" data-sb-feedback="emailAddress:required">
                  An email is required.
                </div>
                <div className="invalid-feedback mt-2" data-sb-feedback="emailAddress:email">
                  Email is not valid.
                </div>

                <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 11 }}>
                  <div id="liveToast" className="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header">

                      <strong className="me-auto">RoomTree</strong>
                      <small>Just Now</small>
                      <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div className="toast-body">
                      Subscription successful!
                    </div>
                  </div>
                </div>
                <div className="d-none" id="submitSuccessMessage">
                  <div className="text-center mb-3 mt-2 text-white">

                    <br />
                    {/* <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a> --> */}
                  </div>
                </div>

                <div className="d-none" id="submitErrorMessage">
                  <div className="text-center text-danger mb-3 mt-2">
                    Error sending message!
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section >

      <section className="contact-section bg-black">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5">
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Address</h4>
                  <hr className="my-4 mx-auto" />
                  <div className="small text-black-50">
                    360 Huntington Ave, Boston, MA 02115
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-envelope text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Email</h4>
                  <hr className="my-4 mx-auto" />
                  <div className="small text-black-50">
                    <a href="mailto:roomtree@roomtree.com">roomtree@roomtree.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-mobile-alt text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Phone</h4>
                  <hr className="my-4 mx-auto" />
                  <div className="small text-black-50"><a href="tel:+1 (617) 373-2000">+1 (617) 373-2000</a></div>
                </div>
              </div>
            </div>
          </div>
          <div className="social d-flex justify-content-center">
            <a className="mx-2" href="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a>
            <a className="mx-2" href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></a>
            <a className="mx-2" href="https://github.com/sharunkumar-ks/WebDesign-Group" target="_blank"><i
              className="fab fa-github"></i></a>
          </div>
        </div>
      </section>

      <footer className="footer bg-black small text-center text-white-50">
        <div className="container px-4 px-lg-5">
          Copyright &copy; RoomTree 2022
        </div>
      </footer>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined },
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => signOut() : () => signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
