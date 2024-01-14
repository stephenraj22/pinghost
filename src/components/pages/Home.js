import React, { useState, useEffect } from "react";
import axios from "axios";
import { configs } from "../../config/Config";

function Home() {
  const [topics, setTopics] = useState();
  const [threads, setThreads] = useState();
  useEffect(() => {
    axios
      .get(configs.BACKEND_URL + "/thread/getThreadsForHome")
      .then((response) => {
        console.log(response);
        localStorage.setItem("home", JSON.stringify(response.data));
        setThreads(response.data.home);
        setTopics(response.data.topics);
      });
  }, []);
  return (
    <div>
      <meta charSet="utf-8" />
      <title>BizNews - Free News Website Template</title>
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <meta content="Free HTML Templates" name="keywords" />
      <meta content="Free HTML Templates" name="description" />

      <link href="img/favicon.ico" rel="icon" />

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css"
        rel="stylesheet"
      />

      <link
        href="lib/owlcarousel/assets/owl.carousel.min.css"
        rel="stylesheet"
      />

      <link href="css/style.css" rel="stylesheet" />

      <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-2 py-lg-0 px-lg-5">
          <a href="index.html" className="navbar-brand d-block d-lg-none">
            <h1 className="m-0 display-4 text-uppercase text-primary">
              Progo<span className="text-white font-weight-normal">Bot</span>
            </h1>
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between px-0 px-lg-3"
            id="navbarCollapse"
          >
            <div className="navbar-nav mr-auto py-0">
              <a href="" className="nav-item nav-link active">
                Home
              </a>
              <a href="categories" className="nav-item nav-link">
                Category
              </a>

              <a href="contact" className="nav-item nav-link">
                Contact
              </a>
            </div>
            <div
              className="input-group ml-auto d-none d-lg-flex"
              style={{ width: "100%", maxWidth: "300px" }}
            >
              <input
                type="text"
                className="form-control border-0"
                placeholder="Keyword"
              />
              <div className="input-group-append">
                <button className="input-group-text bg-primary text-dark border-0 px-3">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="container-fluid" style={{ marginTop: "15px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-12">
                  <div className="section-title">
                    <h4 className="m-0 text-uppercase font-weight-bold">
                      Latest Threads
                    </h4>
                  </div>
                </div>
                {threads &&
                  threads.map((thread) => (
                    <div className="col-lg-6">
                      <div className="position-relative mb-3">
                        <div className="bg-white border border-top-0 p-4">
                          <div className="mb-2">
                            <a
                              className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                              href={"category?val=" + thread.topicId._id}
                            >
                              {thread.topicId.topicName}
                            </a>
                            <a
                              className="text-body"
                              href={"thread?val=" + thread._id}
                            >
                              <small>
                                {new Date(thread.createdAt).toDateString()}
                              </small>
                            </a>
                          </div>
                          <a
                            className="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold"
                            href={"thread?val=" + thread._id}
                          >
                            {thread.topicName}
                          </a>
                          <p
                            className="m-0"
                            dangerouslySetInnerHTML={{
                              __html:
                                String(thread.content[0]).substring(0, 70) +
                                ".............",
                            }}
                          ></p>
                        </div>
                        <div className="d-flex justify-content-between bg-white border border-top-0 p-4">
                          <div className="d-flex align-items-center">
                            {/* <img
                              className="rounded-circle mr-2"
                              src="img/user1.jpg"
                              width="25"
                              height="25"
                              alt=""
                            /> */}
                            <small>Stephen Raj D</small>
                          </div>
                          <div className="d-flex align-items-center">
                            <small className="ml-3">
                              <i className="far fa-eye mr-2"></i>
                              {thread.count}
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                <div className="col-lg-12 mb-3">
                  <a href="">
                    {/* <img
                      className="img-fluid w-100"
                      src="img/ads-728x90.png"
                      alt=""
                    /> */}
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="mb-3">
                <div className="section-title mb-0">
                  <h4 className="m-0 text-uppercase font-weight-bold">
                    Advertisement
                  </h4>
                </div>
                <div className="bg-white text-center border border-top-0 p-3">
                  <a href="">
                    <img
                      className="img-fluid"
                      src="img/news-800x500-2.jpg"
                      alt=""
                    />
                  </a>
                </div>
              </div>

              <div className="mb-3">
                <div className="section-title mb-0">
                  <h4 className="m-0 text-uppercase font-weight-bold">Tags</h4>
                </div>
                <div className="bg-white border border-top-0 p-3">
                  <div className="d-flex flex-wrap m-n1">
                    {topics &&
                      topics.map((topic) => {
                        return (
                          <a
                            href={"category?val=" + topic._id}
                            className="btn btn-sm btn-outline-secondary m-1"
                            key={topics._id}
                          >
                            {topic.topicName}
                          </a>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-dark pt-5 px-sm-3 px-md-5 mt-5">
        <div className="row py-4">
          <div className="col-lg-3 col-md-6 mb-5">
            <h5 className="mb-4 text-white text-uppercase font-weight-bold">
              Get In Touch
            </h5>
            <p className="font-weight-medium">
              <i className="fa fa-map-marker-alt mr-2"></i>Sivakasi, Tamil Nadu
            </p>
            <p className="font-weight-medium">
              <i className="fa fa-envelope mr-2"></i>progobot@gmail.com
            </p>
            <h6 className="mt-4 mb-3 text-white text-uppercase font-weight-bold">
              Follow Us
            </h6>
            <div className="d-flex justify-content-start">
              <a
                className="btn btn-lg btn-secondary btn-lg-square mr-2"
                href="#"
              >
                <i className="fab fa-twitter"></i>
              </a>

              <a
                className="btn btn-lg btn-secondary btn-lg-square mr-2"
                href="#"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h5 className="mb-4 text-white text-uppercase font-weight-bold">
              Popular News
            </h5>
            {threads &&
              threads.map((thread) => (
                <div className="mb-3">
                  <div className="mb-2">
                    <a
                      className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2"
                      href={"category?val=" + thread.topicId._id}
                    >
                      {thread.topicId.topicName}
                    </a>
                    <a className="text-body" href={"thread?val=" + thread._id}>
                      <small>{new Date(thread.createdAt).toDateString()}</small>
                    </a>
                  </div>
                  <a
                    className="small text-body text-uppercase font-weight-medium"
                    href={"thread?val=" + thread._id}
                  >
                    {thread.topicName}
                  </a>
                </div>
              ))}
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h5 className="mb-4 text-white text-uppercase font-weight-bold">
              Categories
            </h5>

            <div className="m-n1">
              {topics &&
                topics.map((topic) => {
                  return (
                    <a
                      href={"category?val=" + topic._id}
                      className="btn btn-sm btn-secondary m-1"
                      key={topics._id}
                    >
                      {topic.topicName}
                    </a>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid py-4 px-sm-3 px-md-5"
        style={{ background: "#111111" }}
      >
        <p className="m-0 text-center">
          &copy; <a href="#">progobot</a>. All Rights Reserved. Design by{" "}
          <a href="https://htmlcodex.com">Stephen Raj</a>
        </p>
      </div>

      <a href="#" className="btn btn-primary btn-square back-to-top">
        <i className="fa fa-arrow-up"></i>
      </a>

      <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
      <script src="lib/easing/easing.min.js"></script>
      <script src="lib/owlcarousel/owl.carousel.min.js"></script>

      <script src="js/main.js"></script>
    </div>
  );
}

export default Home;
