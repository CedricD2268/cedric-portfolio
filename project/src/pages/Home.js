import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Particle from "../components/Particle";
import Socialicons from "../components/Socialicons";
import Spinner from "../components/Spinner";
import background from '../images/bkhome.jpg'

function Home({ lightMode }) {
  const [information, setInformation] = useState("");

  useEffect(() => {
    axios.get("/api/information").then((response) => {
      setInformation(response.data);
    });
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Personal Portfolio</title>
        <meta
          name="description"
          content="Chester React Personal Portfolio Template Homepage"
        />
      </Helmet>
      <Suspense fallback={<Spinner />}>
        <div className="mi-home-area mi-padding-section"
        //      style={{
        //        backgroundImage: `url(${background})`,
        //        height: '100vh',
        //        marginTop: '-70px',
        //        fontSize: '50px',
        //        backgroundSize: 'cover',
        //        backgroundRepeat: 'no-repeat',
        // }}
        >
          <Particle lightMode={lightMode} />
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-12">
                <div className="mi-home-content">
                  <h1>
                    Hi, I am
                    <span className="color-theme"> Cedric Douillard</span>
                  </h1>
                  <p>{information.aboutContent}</p>
                  {/*<Socialicons bordered />*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </Layout>
  );
}

export default Home;
