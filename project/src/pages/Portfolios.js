import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination";
import PortfoliosView from "../components/PortfoliosView";
import Sectiontitle from "../components/Sectiontitle";
import Spinner from "../components/Spinner";
import styled from "styled-components";

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
          content="Chester React Personal Portfolio Template Portfolios Page"
        />
      </Helmet>
      <Suspense fallback={<Spinner />}>

        <div className="mi-about mi-section mi-padding-top mi-padding-bottom">
          <div className="container">
            <Sectiontitle title="Portfolio" />
            <AppInfoDiv>
              <h3>New Jersey Anchor</h3>
              <span>
                CRUD Application which handles news or stories consumption in a modern way.
                Application is meant to replicate how an organization might handle news or stories told by professional journalists.
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
