import axios from "axios";
import React, {Suspense, useEffect, useState} from "react";
import {Helmet} from "react-helmet";
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

    hr {
        height: 5px;
        border-radius: 10px;
        background: #00bfa5;
        border: none;

    }
`;

function Portfolios() {
    const [portfolios, setPortfoios] = useState([]);
    const [portfolios2, setPortfoios2] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [currentPage2, setCurrentPage2] = useState(1);

    const [portfoliosPerPage] = useState(9);
    const [portfoliosPerPage2] = useState(9);

    useEffect(() => {
        let mounted = true;
        axios.get("/api/portfolios").then((response) => {
            if (mounted) {
                setPortfoios(response.data);
            }
        });
        return () => (mounted = false);
    }, []);
    useEffect(() => {
        let mounted2 = true;
        axios.get("/api/portfolios2").then((response) => {
            if (mounted2) {
                setPortfoios2(response.data);
            }
        });
        return () => (mounted2 = false);
    }, []);

    const indexOfLastPortfolios = currentPage * portfoliosPerPage;
    const indexOfLastPortfolios2 = currentPage2 * portfoliosPerPage2;

    const indexOfFirstPortfolios = indexOfLastPortfolios - portfoliosPerPage;
    const indexOfFirstPortfolios2 = indexOfLastPortfolios2 - portfoliosPerPage2;

    const currentPortfolios = portfolios.slice(
        indexOfFirstPortfolios,
        indexOfLastPortfolios
    );
    const currentPortfolios2 = portfolios2.slice(
        indexOfFirstPortfolios2,
        indexOfLastPortfolios2
    );

    const paginate = (e, pageNumber) => {
        e.preventDefault();
        setCurrentPage(pageNumber);
    };
    const paginate2 = (e, pageNumber) => {
        e.preventDefault();
        setCurrentPage2(pageNumber);
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
            <Suspense fallback={<Spinner/>}>
                <div className="mi-about mi-section mi-padding-top mi-padding-bottom">
                    <div className="container">
                        <Sectiontitle title="Portfolio"/>
                        <div>
                            <AppInfoDiv>
                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px'}}>
                                    <h3>New Jersey Anchor</h3>
                                    <button style={{borderRadius: '10px'}}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                window.location.href = 'https://github.com/CedricD2268/Anchor_News_Project'
                                            }}>
                                        <BsGithub size={25}/>
                                    </button>
                                    <button style={{borderRadius: '10px'}} onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href = 'https://njanchor.com/accounts/login'
                                    }}>
                                        <HiExternalLink size={25}/>
                                    </button>
                                </div>

                                <span>
                                    Application is entirely built by me, and it is meant to replicate and enhanced how an
                                    organization might handle news or stories told by professional journalists and
                                    also stories or blog told by non-journalist.
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
                            {<PortfoliosView portfolios={currentPortfolios}/>}
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
                        <hr/>
                        <div>
                            <AppInfoDiv>
                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px'}}>
                                    <h3>Civilience</h3>
                                    <button style={{borderRadius: '10px'}} onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href = 'https://www.civilience.app/'
                                    }}>
                                        <HiExternalLink size={25}/>
                                    </button>
                                </div>

                                <span>
                                    Civilience is an early-stage situational awareness platform that builds community in real life,
                                    by aligning actions taken by key community stakeholders – individuals, local government and enterprises.
                                    <br/>
                                    (The images below showcase specific pages from the web application I contributed to, but they do not encompass the entire application.)
                                </span>
                                <span>Tools used for application:</span>
                                <ul>
                                    <li>ReactJs</li>
                                    <li>SurveyJS</li>
                                    <li>Sass</li>
                                    <li>AWS Services</li>
                                    <hr noshade/>
                                </ul>
                            </AppInfoDiv>
                            {<PortfoliosView portfolios={currentPortfolios2}/>}
                            {!(portfolios2.length > portfoliosPerPage2) ? null : (
                                <Pagination
                                    className="mt-50"
                                    itemsPerPage={portfoliosPerPage2}
                                    totalItems={portfolios2.length}
                                    paginate={paginate2}
                                    currentPage={currentPage2}
                                />
                            )}

                        </div>

                    </div>
                </div>


            </Suspense>
        </Layout>
    );
}

export default Portfolios;
