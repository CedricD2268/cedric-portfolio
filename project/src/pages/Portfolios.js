import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination";
import PortfoliosView from "../components/PortfoliosView";
import Sectiontitle from "../components/Sectiontitle";
import Spinner from "../components/Spinner";
import styled from "styled-components";
import {BsGithub} from "react-icons/bs";
import {HiExternalLink} from "react-icons/hi";

const AppInfoDiv = styled.div`
  font-family: "Nunito", sans-serif !important;
  display: flex;
  flex-direction: column;
  gap: 5px;
  hr{
    height: 5px;
    border-radius: 10px;
    background: #00bfa5;
    border: none;
    
  }
`;

function Portfolios() {
  const [portfolios, setPortfoios] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [portfoliosPerPage] = useState(9);

  useEffect(() => {
    let mounted = true;
    axios.get("/api/portfolios").then((response) => {
      if (mounted) {
        setPortfoios(response.data);
      }
    });
    return () => (mounted = false);
  }, []);

  const indexOfLastPortfolios = currentPage * portfoliosPerPage;
  const indexOfFirstPortfolios = indexOfLastPortfolios - portfoliosPerPage;
  const currentPortfolios = portfolios.slice(
    indexOfFirstPortfolios,
    indexOfLastPortfolios
  );

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <Layout>
      <Helmet>
        <title>Portfolios - Chester React Personal Portfolio Template</title>
        <meta
          name="description"
          content="Personal Portfolio Template Portfolios Page"
        />
      </Helmet>
      <Suspense fallback={<Spinner />}>

        <div className="mi-about mi-section mi-padding-top mi-padding-bottom">
          <div className="container">
            <Sectiontitle title="Portfolio" />
            <AppInfoDiv>
              <div style={{display: 'flex', flexDirection:'row', alignItems:'center', gap: '10px'}}>
                <h3>New Jersey Anchor</h3>
                <button style={{borderRadius: '10px'}}
                        onClick={(e)=>{e.preventDefault();
                window.location.href='https://github.com/CedricD2268/Anchor_News_Project'}}>
                  <BsGithub size={25}/>
                </button>
                <button style={{borderRadius: '10px'}} onClick={(e)=>{e.preventDefault();
                window.location.href='https://njanchor.com/accounts/login'}}>
                  <HiExternalLink size={25}/>
                </button>
              </div>

              <span>
                Application is entirely built by me, and it is meant to replicate and enhanced how an organization might handle news or stories told by professional journalists and also stories or blog told by non-journalist.
              </span>

              <span>Tools used for application:</span>
              <ul>
                <li>ReactJs</li>
                <li>NodeJs</li>
                <li>Sass</li>
                <li>
                  DigitalOcean
                  <ul>
                    <li>Spaces</li>
                    <li>Databases</li>
                    <li>Droplets</li>
                  </ul>
                </li>
                <hr noshade/>
              </ul>
            </AppInfoDiv>
            {<PortfoliosView portfolios={currentPortfolios} />}
            {!(portfolios.length > portfoliosPerPage) ? null : (
              <Pagination
                className="mt-50"
                itemsPerPage={portfoliosPerPage}
                totalItems={portfolios.length}
                paginate={paginate}
                currentPage={currentPage}
              />
            )}
          </div>
        </div>

      </Suspense>
    </Layout>
  );
}

export default Portfolios;
