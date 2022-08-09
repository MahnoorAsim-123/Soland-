import React, { useState } from 'react'
import logo from "./img/solandLogo.png"
import introVideo from "./img/Soland Collection.mp4"
import nftVideo from "./img/Soland City Intro.mp4"
import pster from "./img/poster.png"
import nftpster from "./img/poster2.png"
import solfare from "./img/Solflare Wallet.png"
import phantomlogo from "./img/phantomlogo-.net.png"
import { NavLink } from 'react-router-dom';
import styles from "../../styles/style.css"
import collection1 from "./img/collection/1.png"
import collection2 from "./img/collection/2.png"
import collection3 from "./img/collection/5.png"
import collection4 from "./img/collection/9.png"
import collection5 from "./img/collection/14.png"
import collection6 from "./img/collection/15.png"
import collection7 from "./img/collection/18.png"
import collection8 from "./img/collection/30.png"
import collection9 from "./img/collection/42.png"
import collection10 from "./img/collection/83.png"
import collection12 from "./img/collection/147.png"
import collection13 from "./img/collection/339.png"
import collection14 from "./img/collection/340.png"
import collection15 from "./img/collection/345.png"
import bar from "./img/bar.png"
import dscord from "./img/discord.png"
import cat from "./img/cat.png"
import youtube from "./img/youtube.png"
import tiktok from "./img/tiktok.png"
import twitter from "./img/twitter.png"
import insta from "./img/insta.png"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Solandpdf from "../pdf/Soland Web Presentation.pdf"
// ..
AOS.init();

var random = Math.floor(Math.random() * 7)
console.log(random);

const Home = () => {
    let imgArray = [collection1, collection2, collection3, collection4, collection5, collection6, collection7]

    const [index, setIndex] = useState(0)

    const styles = {
        visibility: "hidden",

    }
    const styles2 = {
        visibility: "visible",

    }
    const [toggleStyles, settoggleStyles] = useState(styles)
    const [toggle, settoggle] = useState(true)


    const Toggel = () => {
        settoggle(!toggle)

        toggle == true ? settoggleStyles(styles2) : settoggleStyles(styles)
    }


    return (
        <>

            <div className="mainheader">

                <div className="navsection">
                    <div className="logos">
                        <ul>

                            <li> <img className="solandlogo" src={logo} width="60px" alt="" /></li>

                        </ul>
                    </div>
                    <div className="icons">

                        <ul>
                            <li><NavLink to="/preorder">Pre-order</NavLink></li>
                            <li><NavLink to="/team">Team</NavLink></li>
                            <li><NavLink to="/aboutus">About us</NavLink></li>
                            <li><NavLink to="/login">Login</NavLink></li>
                            <li><NavLink to="/signup">Register</NavLink></li>

                            <li id="dropshow" >

                                <div className="dropdown">
                                    <a className="btn   mydrwop dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-expanded="false">
                                        English
                                    </a>

                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">

                                        <a className="dropdown-item" href="/spanish">Spanish </a>

                                    </div>
                                </div>
                            </li>

                            <li id="bar" onClick={Toggel}> <img src={bar} alt="" />


                                <ul style={toggleStyles} className="mobilemenu">
                                    <li><NavLink to="/preorder">Pre-order</NavLink></li>
                                    <li><NavLink to="/team">Team</NavLink></li>
                                    <li><NavLink to="/aboutus">About us</NavLink></li>
                                    <li><NavLink to="/login">Login</NavLink></li>
                                    <li><NavLink to="/signup">Register</NavLink></li>

                                    <li id="dropshow" >

                                        <div className="dropdown">
                                            <a className="btn   mydrwop dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-expanded="false">
                                                English
                                            </a>

                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <a className="dropdown-item" href="/spanish">Spanish</a>


                                            </div>
                                        </div>
                                    </li>



                                </ul>
                            </li>



                        </ul>
                    </div>
                </div>





                <section className="content">

                    <div className="heading">
                        <h1 className="animate__animated animate__zoomIn">Welcome home to Soland City</h1>
                        <p>Stake, farm, and lend in Solana’s financial district.</p>
                        <p>Experience a new perspective on DeFi.
                        </p>
                    </div>
                </section>




            </div>


            <div className="counter">


                <div className="solandpresentation">

                    <h3> <a id="presentaion" target="_blank" href="./Soland Web Presentation.pdf">Presentation</a> </h3>
                    <span className="download" id="GetFile">
                        <a href={Solandpdf} download><i className="fa-solid fa-download"></i></a>
                    </span>
                </div>

                {/* <div className="counterheading">
                    <h1 id="solandColection">Soland Collection Launch </h1>
                </div>
                <div className="hour">

                    <h3 className="timer">00d</h3>
                    <h3 className="timer">00h</h3>
                    <h3 className="timer"> 00m</h3>
                    <h3 className="timer">00s</h3>
                </div> */}

                <div className="exteraContent">
                    <div>
                        <p>Randomly Minted</p>
                    </div>
                    <div>
                        <p>Randomly Rewarding</p>
                    </div>
                    <div>
                        <p>Jackpot Fund</p>
                    </div>
                    <div>
                        <p>40% of Collection sales is put in Soland Token Liquidity Pool</p>
                    </div>
                </div>

            </div>

            {/* <!-- //About --> */}

            <div id="carouselExampleSlidesOnly" className="carousel slide" data-interval="false" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">

                        <div id="mintsection" className="videos">
                            <video width="100%" controls>
                                <source src={introVideo} poster={pster} type="video/mp4 " />
                            </video>
                        </div>
                    </div>

                </div>
            </div>


            <section className="about">

                <br />
                <br />


                <div className="about-content container ">

                    <div className="aboutPara">
                        <h1>Introduction</h1>
                        <br />

                        <p>Soland City is the perfect destination for anyone searching for a personalized DeFi experience. You
                            can </p>
                        <p>easily manage your finances and enjoy a variety of unique features. If you're looking to explore new
                        </p>
                        <p>worlds or simply manage your money more effectively, Soland City can be your home away from home.</p>
                    </div>
                    <div className="about-img">
                        <img src={imgArray[index]} id="img" className="img-fluid" width="300px" alt="" />
                    </div>
                </div>
                <br />
                <br />

            </section>



            <div className="cardSection">

                <br />


                <div className="card-content   ">

                    <div className="card1 " data-aos="fade-up" data-aos-duration="1000">
                        <h4>Stake</h4>
                        <p>Participate in building the financial hub for
                            Solana by staking your NFTs and tokens.</p>


                    </div>

                    <div className="card1 " data-aos="fade-up" data-aos-duration="1000">
                        <h4>Exchange
                        </h4>
                        <p>Buy, sell, and swap crypto directly from your
                            wallet without giving up control of your keys using Raydium swaps.</p>




                    </div>
                    <div className="card1 " data-aos="fade-up" data-aos-duration="1000">
                        <h4>Farm
                        </h4>
                        <p>Provide fungible or non-fungible tokens to
                            liquidity pools to earn yield on your crypto.</p>


                    </div>

                </div>


                <div className="card-content   ">

                    <div className="card1 " data-aos="fade-up" data-aos-duration="1000">
                        <h4>Bake</h4>
                        <p>Farm and stake your NFT collection to maximize
                            what you get out of your investments.
                        </p>


                    </div>

                    <div className="card1 " data-aos="fade-up" data-aos-duration="1000">
                        <h4>Lend

                        </h4>
                        <p>High-yield flexibility. No minimum deposit, no
                            minimum time deposited. Withdraw your earnings anytime.</p>




                    </div>
                    <div className="card1 " data-aos="fade-up" data-aos-duration="1000">
                        <h4>Showroom
                        </h4>
                        <p>Showcase your portfolio to the marketplace.
                            Find a place to show off your collection.</p>


                    </div>

                </div>

                <br />
                <br />
                <br />
                <br />

            </div>




            <div className="animateContent">
                <br />
                <br />



                <div className="allContent container ">

                    <div className="whitepaper">
                        <div className="card question">
                            <div className="card-header" id="headingSeveteen">
                                <h2 className="mb-0">
                                    <button className="btn  btn-block text-left collapsed questionbtn" type="button"
                                        data-toggle="collapse" data-target="#collapseSeveteen" aria-expanded="false"
                                        aria-controls="collapseSeveteen">
                                        <h1>Whitepaper</h1>
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseSeveteen" className="collapse" aria-labelledby="headingSeveteen"
                                data-parent="#accordionExample">
                                <div className="card-body questionbtn">
                                    <h1>The team</h1>
                                    <p>The team behind Soland is already a community of people who are driven by the exciting
                                        opportunities of
                                        the Metaverse. What we seek to do is grow and prosper in this new world, and we want you
                                        to become part
                                        of that process.</p>
                                    <p>This is going to be a journey that requires the strength of a solid community that
                                        creates new
                                        opportunities for financial growth within a completely new and limitless environment.
                                        There is a world
                                        of complexity behind NFTs and the Metaverse, but our goal is to make this process
                                        seamless and to help
                                        you make this transition into the latest stage of the digital age.</p>
                                    <p>No need for technical knowledge, no need for complex explanations. You can learn the
                                        essentials and still
                                        become a productive and extremely valuable member of our community. This is the reason
                                        why Soland City
                                        is the place you want to be when you make your way into the Metaverse.</p>


                                    <br />
                                    <br />
                                    <h1>NFT Collection</h1>
                                    <p>The Soland NFT collection stands out for being a small representation of your involvement
                                        in a vibr/ant
                                        city that is going to change the way we look at virtual property. Our lives are about to
                                        take a turn
                                        that is unlike anything we have experienced before as a species.</p>

                                    <p>There are many technical and intricate aspects to the Metaverse, DeFi services, NFTs and
                                        the entire
                                        cryptocurrency/blockchain structure. The complexity of those topics is enough to write
                                        dozens of books,
                                        but the idea behind our collection is to help anyone become a community member by simply
                                        understanding
                                        the core of the NFT world and the way in which the Metaverse will be implemented into
                                        our daily lives.
                                    </p>
                                    <p>Soland City covers the endlessly complex aspects of the Metaverse and all the tools you
                                        need in order to
                                        become an active and productive community member. The collection serves as an entry
                                        point to a community
                                        that will help you learn the basic ropes in a way that is seamless and easy to grasp.
                                    </p>
                                    <p>There is no need to feel overwhelmed by the phenomenon that is on the verge of happening.
                                        This NFT
                                        collection is your passport to the new era. Once that helps you transition and take full
                                        advantage
                                        decentralized finance opportunities that have limitless potential. </p>
                                    <p>Let Soland give you that initial push that is going to provide the building blocks to a
                                        whole new way of
                                        life. We are a community that seeks toc create a permanent bond with all members as we
                                        help them develop
                                        the skills to thrive and prosper within the realm of the Metaverse.</p>

                                    <br />
                                    <br />
                                    <h1>NFT Story</h1>
                                    <p>There is no denying that we are now living in a world that is completely changed by
                                        restrictions on
                                        global borders. The entire planet is moving towards a new way of life, but it is one
                                        that limits the way
                                        that we are able to conduct business.</p>
                                    <p>Many aspects of society as we know it today are crumbling right before our eyes. We are
                                        headed into a
                                        serious change and most of the world is not prepared for the transition. It may seem
                                        like this is a time
                                        for distress, but instead, it is a time that br/ings very positive changes into our
                                        lives.</p>
                                    <p>In times when digital communication is so seamless, we seem to be unable to take full
                                        advantage of it,
                                        but that is all about to change. We are soon to be involved in what is the greatest and
                                        most relevant
                                        change we have seen so far</p>
                                    <p>We are headed into the Metaverse. This is a new alternate reality that we can control
                                        without fear of
                                        restrictions in the process of development, and financial growth. This world is a
                                        completely new and
                                        very exciting place to be, and Soland is the ultimate virtual financial community to
                                        help you make this
                                        important transition.</p>
                                    <p>Make no mistake about it; we are going to live in this world just as much as we live in
                                        the traditional
                                        world. It is not ideal to say “real” and “virtual”. The truth is that the digital world
                                        that we
                                        experience in the Metaverse is going to be just as real as the one you experience
                                        online.</p>
                                    <p>You will be living in a city that is full of line, within a metaverse that is highly
                                        engaging and full of
                                        options that give us a vast number of opportunities that seem so out of reach today.
                                        Humanity has yet to
                                        witness the incredible changes that are coming and Soland City wants to offer the
                                        perfect community that
                                        will be there for each other during this essential transition.</p>

                                    <br />
                                    <br />
                                    <h1>NFT Utility</h1>
                                    <p>When we started Soland City, the idea was to create a powerful community that will grow
                                        together and
                                        create a strong presence in the vastness of the Metaverse. Your NFT value is something
                                        that can
                                        skyrocket without limitations and that is one of the most exciting aspects of this
                                        journey.</p>
                                    <p>With that said, the true value of your Soland NFT collection acquisition comes in the
                                        form of community
                                        support. Not only that, but also in the feeling that you are part of something bigger
                                        and something that
                                        allows you to make this intimidating transition much easier to handle.</p>
                                    <p>It is thanks to the power of community that we have been able to move forward and evolve
                                        as a species.
                                        Strength has always been in numbers and this is even more relevant and true now that we
                                        are headed into
                                        such a massively new and promising future.</p>
                                    <p>It is the power of community that gives the highest value to our collection. It goes
                                        beyond the value of
                                        the NFT itself and it turns into a passport that makes you a member of an exclusive
                                        community and
                                        anactive citizen of the Metaverse.</p>
                                    <p>There was a time when this all seemed like science fiction, but the Metaverse is real and
                                        we are going to
                                        merge the offline world with the online world in ways that are incredibly creative and
                                        efficient.</p>
                                    <p>The global Soland will give you the power to evolve within the Metaverse and to create
                                        business
                                        opportunities that have a longer and much more reliable reach.</p>
                                    <div className="logimg">
                                        <img src="./img/Soland Logo.png" width="250px" alt="" />
                                    </div>
                                    <br />
                                    <div className="para">
                                        <p>We reserve the right to edit this Whitepaper at anytime without pre announcing it</p>

                                        <p>2. Our technical documentation will be published during the month of April</p>

                                        <p>www.soland.live</p>
                                        <p>Whitepaper 1.0</p>

                                        <a href="https://discord.gg/3rNUnCbW3V">
                                            <img src="./img/discord.png" width="30px" alt="" />
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>


                </div>


                <div id="colectionsection" className="collectioHeading">
                    <h1>Our Collection</h1>
                </div>
                <br />
                <br />

                <div className="check">
                    <div className="scroll-main">

                        <div className="scrollimg2">
                            <img src={collection1} width="250px" alt="" />
                            <img src={collection2} width="250px" alt="" />
                            <img src={collection3} width="250px" alt="" />
                            <img src={collection4} width="250px" alt="" />
                            <img src={collection6} width="250px" alt="" />
                            <img src={collection7} width="250px" alt="" />
                        </div>

                        <div className="scrollimg2">
                            <img src={collection8} width="250px" alt="" />
                            <img src={collection9} width="250px" alt="" />
                            <img src={collection10} width="250px" alt="" />
                            <img src={collection15} width="250px" alt="" />
                            <img src={collection12} width="250px" alt="" />
                            <img src={collection13} width="250px" alt="" />
                        </div>

                    </div>


                </div>
                <br />
                <br />
                <div className="parnterHeading container ">
                    <h1>Wallets supported</h1>

                    <br />
                    <br />

                    <div className="walletLogo">

                        <a href={solfare} download><img src={solfare} id="wallet" width="120px" alt="" /></a>
                        <a href={phantomlogo} download><img src={phantomlogo} id="phantom" width="80px" alt="" /></a>
                        <br />
                        <br />
                        <h5 id="click">Click On Logo to Download</h5>
                    </div>


                </div>


                <div className="solandCity">

                    <br />
                    <br />

                    <h1>Soland City in: </h1>


                    <br />
                    <br />
                    <div className="cityCard">

                        <div className="nftScrooing">

                            <a href="https://nftscoring.com/upcoming/Soland-City"><h5> NFT Scooring </h5></a>
                        </div>
                        <div className="nftclander">

                            <a href="https://nftcalendar.io/event/soland-city/"><h5>NFT Calendar</h5></a>
                            <a href="UpcomingNFT.art">UpcomingNFT</a>
                            <br />
                            <a href="https://upcomingnft.art/soland-city/">Soland-city UpcomingNFT</a>
                        </div>
                        <div className="nftFeed">
                            <a href="https://www.nftfeed.app/solana/projects/solandcity"> <h5>NFTFeed</h5></a>

                        </div>
                        <div className="solScan">
                            <a href="https://solscan.io/token/soLDKcxDXu7Z1iCZxdbYLMup6szxCWsUJKZkVwbv4n2"> <h5>SolScan</h5></a>
                        </div>
                    </div>
                </div>

                <br />
                <br />
            </div>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-interval="false" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">

                        <div id="citysection" className="videos">
                            <video width="100%" controls>
                                <source src={nftVideo} poster={nftpster} />
                            </video>
                        </div>
                    </div>

                </div>
            </div>




            <div className="roadmap">


                <br />
                <br />


                <div className="roadmapHeading">



                    <br />
                    <br />
                    <h1>Roadmap</h1>
                </div>



                <div className="wrapper">
                    <div className="center-line">
                        <a href="#" className="scroll-icon"><i className="fas "></i></a>
                    </div>
                    <div className="row row-1">
                        <section>
                            <i className="icon fas "></i>
                            <div className="details">
                                <span className="title">Marketing</span>

                            </div>
                            <p>NFT Calendars <br />
                                Twitter <br />
                                YouTube
                            </p>

                        </section>
                    </div>
                    <div className="row row-2">
                        <section>
                            <i className="icon fas "></i>
                            <div className="details">
                                <span className="title">4th April </span>

                            </div>
                            <p>Soland Collection minting live </p>

                        </section>
                    </div>
                    <div className="row row-1">
                        <section>
                            <i className="icon fas "></i>
                            <div className="details">
                                <span className="title">Early April</span>

                            </div>
                            <p>Private Sale Swap DINT to Soland </p>


                        </section>
                    </div>
                    <div className="row row-2">
                        <section>
                            <i className="icon fas "></i>
                            <div className="details">
                                <span className="title">Late April</span>

                            </div>
                            <p>Soland Token IEO Presale <br />
                                CEX Listing
                            </p>

                        </section>
                    </div>
                    <div className="row row-1">
                        <section>
                            <i className="icon fas "></i>
                            <div className="details">
                                <span className="title">NFT Staking Dapp Launch </span>

                            </div>

                        </section>
                    </div>
                    <br />


                    <br />
                    <div className="row row-2">
                        <section>
                            <i className="icon fas "></i>
                            <div className="details">
                                <span className="title">3D Soland DeFi City </span>

                            </div>
                            <p>Visuals and Planning of 3D landscapes
                                Soland Buildings and City Design
                                Floor Planning & Design
                                Decoration options
                            </p>

                        </section>
                    </div>
                    <div className="row row-1">
                        <section>
                            <i className="icon fas"></i>
                            <div className="details">
                                <span className="title">DEX Listing </span>

                            </div>
                            <p>Raydium.io</p>
                        </section>
                    </div>
                </div>


            </div>

            <div className="partnerplacholder">
                <br />
                <br />
                <br />

                <div className="blogheading">
                    <h1>Soland Blog </h1>
                    <br />
                    <br />
                    <br />
                </div>
                <div className="fa-content">

                    <div className="FAQS container ">
                        <div className="accordion  " id="accordionExample">



                            <div className="card question">
                                <div className="card-header" id="headingeighteen">
                                    <h2 className="mb-0">
                                        <button className="btn  btn-block text-left collapsed questionbtn" type="button"
                                            data-toggle="collapse" data-target="#collapseeighteen" aria-expanded="false"
                                            aria-controls="collapseeighteen">
                                            <h2>Soland is featured in</h2>
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseeighteen" className="collapse" aria-labelledby="headingeighteen"
                                    data-parent="#accordionExample">
                                    <div className="card-body questionbtn">

                                        <p>
                                            <li> UpcomingNFT.art</li>
                                            <li> NFTFeed </li>
                                            <li> SolScan </li>
                                        </p>
                                    </div>
                                </div>
                            </div>




                            <div className="card question">
                                <div className="card-header" id="headingFour">
                                    <h2 className="mb-0">
                                        <button className="btn  btn-block text-left collapsed questionbtn" type="button"
                                            data-toggle="collapse" data-target="#collapseFour" aria-expanded="false"
                                            aria-controls="collapseFour">
                                            <h2> Rebr/anding from ETH to Solana</h2>
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseFour" className="collapse" aria-labelledby="headingFour"
                                    data-parent="#accordionExample">
                                    <div className="card-body questionbtn">
                                        <p>In 2021, many developers shifted away from Ethereum and toward alternative
                                            blockchains.
                                            Because high gas prices and congestion still plague the Ethereum network. Solana was
                                            one
                                            of the networks that reaped the biggest benefits from this situation. Its meteoric
                                            rise
                                            since 2021 has established it as one of Ethereum's main competitors. Solana can do
                                            more
                                            transactions per unit of time and offers lower fees than Ethereum. We're rebr/anding
                                            Solana and taking it to the next level with the 3D Metaverse Soland City, using the
                                            same
                                            defi approach as Ethereum.</p>
                                        <p>Even though Ethereum is older and more well-known, Solana is a genuine competitor.
                                            One
                                            concern is that Ethereum's potential for global-scale applications is essentially
                                            limited by the limited number of transactions per second that it can enable. Solana
                                            can
                                            process tens of thousands of transactions every second, whereas Ethereum can only
                                            process roughly 13 transactions per second. Furthermore, Solana provides
                                            "significantly
                                            lower costs." One of the most prominent critiques leveled at Ethereum is its high
                                            transaction costs.</p>
                                    </div>
                                </div>
                            </div>



                            <div className="card question">
                                <div className="card-header" id="headingFive">
                                    <h2 className="mb-0">
                                        <button className="btn  btn-block text-left collapsed questionbtn" type="button"
                                            data-toggle="collapse" data-target="#collapseFive" aria-expanded="false"
                                            aria-controls="collapseFive">
                                            <h2> What sets Solana apart from the competition? </h2>
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseFive" className="collapse" aria-labelledby="headingFive"
                                    data-parent="#accordionExample">
                                    <div className="card-body questionbtn">
                                        <p>Solana varies from other blockchains in the way consensus is achieved among nodes.
                                            While
                                            proof-of-history has its benefits, others are concerned about Solana's voting
                                            procedure
                                            and if it would lead to centralization.</p>
                                        <p>Before joining the chain in Solana, nodes must vote on the legitimacy of blocks and
                                            transactions. Nodes send their votes to the leader, who then collects the votes and
                                            signs off on the block.</p>
                                    </div>
                                </div>
                            </div>



                            <div className="card question">
                                <div className="card-header" id="headingSix">
                                    <h2 className="mb-0">
                                        <button className="btn  btn-block text-left collapsed questionbtn" type="button"
                                            data-toggle="collapse" data-target="#collapseSix" aria-expanded="false"
                                            aria-controls="collapseSix">
                                            <h2> Data about the Solana network </h2>
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseSix" className="collapse" aria-labelledby="headingSix"
                                    data-parent="#accordionExample">
                                    <div className="card-body questionbtn">
                                        <p>Solana's network has the capacity to perform 65,000 transactions per second, much
                                            above
                                            Bitcoin's seven transactions per second and Ethereum's fifteen transactions per
                                            second.
                                            (TPS). When paired with the ETH blockchain's hefty gas costs, Solana presents a far
                                            lower barrier to entry, allowing it to build its user base rapidly.</p>
                                        <p>Solana transactions are a fraction of the cost of other blockchains, with each
                                            transaction costing an average of $0.00025. Solana attracts customers from all
                                            around
                                            the world due to its inexpensive cost and excellent throughput capabilities.</p>
                                        <p>Solana now has 1,469 nodes in its ecosystem, with over 74% of all tokens in
                                            circulation
                                            staked to the network and providing rewards.</p>

                                    </div>
                                </div>
                            </div>


                            <div className="card question">
                                <div className="card-header" id="headingSeven">
                                    <h2 className="mb-0">
                                        <button className="btn  btn-block text-left collapsed questionbtn" type="button"
                                            data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false"
                                            aria-controls="collapseSeven">
                                            <h2>
                                                Solana's DeFi </h2>
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven"
                                    data-parent="#accordionExample">
                                    <div className="card-body questionbtn">
                                        <p>Solana's DeFi ecosystem currently has $8.6 billion locked up across its many
                                            platforms.
                                            Solana is now sixth in the rankings, after Ethereum, Terra, Avalanche, and Fantom.
                                        </p>
                                        <p>Solana's three most essential platforms are the decentralized exchange Serum, the
                                            available liquidity mining platform Quarry, and the Solana staking platform Marinade
                                            Finance.</p>


                                    </div>
                                </div>
                            </div>


                            <div className="card question">
                                <div className="card-header" id="headingEight">
                                    <h2 className="mb-0">
                                        <button className="btn  btn-block text-left collapsed questionbtn" type="button"
                                            data-toggle="collapse" data-target="#collapseEight" aria-expanded="false"
                                            aria-controls="collapseEight">
                                            <h2> 3D Metaverse Soland city</h2>
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseEight" className="collapse" aria-labelledby="headingEight"
                                    data-parent="#accordionExample">
                                    <div className="card-body questionbtn">
                                        <p>A metaverse is a digital environment that combines physical, augmented, and virtual
                                            reality into a single online area. 3D metaverse soland city model will have a
                                            building
                                        </p>
                                        <p>Each DeFi service has its building; for example, staking has its building, farming
                                            has
                                            its building, and lending has its building. New projects will have their level when
                                            they
                                            join, allowing the structures to rise taller than we could fathom in real life.</p>
                                        <p>Holders of DINT will be able to swap their tokens for Soland Tokens and receive a
                                            bonus!
                                        </p>

                                    </div>
                                </div>
                            </div>

                            <div className="card question">
                                <div className="card-header" id="headingNine">
                                    <h2 className="mb-0">
                                        <button className="btn  btn-block text-left collapsed questionbtn" type="button"
                                            data-toggle="collapse" data-target="#collapseNine" aria-expanded="false"
                                            aria-controls="collapseNine">
                                            <h2> Soland City Collection </h2>
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseNine" className="collapse" aria-labelledby="headingNine"
                                    data-parent="#accordionExample">
                                    <div className="card-body questionbtn">
                                        <p>The first NFT project entered the market in 2017. The ERC721 token standard entered
                                            into
                                            force in early 2018. Over the last three to four years, the advent of non-fungible
                                            tokens as a technological paradigm has attracted investors and crypto enthusiasts.
                                            The
                                            general crypto industry had a great surge in 2020, prompting the sub-domain of NFTs
                                            to
                                            rise even quicker, nearly exponentially.</p>

                                    </div>
                                </div>
                            </div>

                            <div className="card question">
                                <div className="card-header" id="headingTen">
                                    <h2 className="mb-0">
                                        <button className="btn  btn-block text-left collapsed questionbtn" type="button"
                                            data-toggle="collapse" data-target="#collapseTen" aria-expanded="false"
                                            aria-controls="collapseTen">
                                            <h2> • Art Ownership </h2>
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseTen" className="collapse" aria-labelledby="headingTen"
                                    data-parent="#accordionExample">
                                    <div className="card-body questionbtn">

                                        <p>NFTs (non-fungible tokens) are blockchain-based digital certificates linked to a
                                            single
                                            digital asset. In
                                            Soland city collection, NFTs will prove your art ownership and your ownership in
                                            Metaverse buildings and
                                            floors and compute profit sharing</p>
                                        <h6>• Defi Expansion</h6>

                                        <p>Because of the spike in popularity of DeFi platforms and the NFT wave, fundamental
                                            adjustments in how
                                            creative labor is paid, decentralized networks have received much attention in the
                                            last
                                            two years.
                                            Digital assets have always been a difficult asset className, but NFTs considerably
                                            elevate
                                            the stakes.
                                            Baking, our DeFi extension that comprises cross-staking and farming of NFTs, Tokens,
                                            and
                                            Liquidity Pool
                                            Tokens, is a pure combination where the investor may benefit the most.</p>

                                        <h6>• Amount</h6>
                                        <p>Solana-based NFTs gained significance after Ethereum, the most popular blockchain for
                                            NFTs, had extremely
                                            high transaction fees in the second half of 2021. Each NFT has a set quantity of
                                            Soland
                                            Tokens (100,
                                            150, 200, 250, 500, or 1000 Tokens)</p>
                                        <h6>• Pixel Gems</h6>
                                        <p>Pixel Gems will increase the APY and let you receive rewards by staking your Soland
                                            tokens. You may stake
                                            your tokens by delegating them to validators, who process transactions and operate
                                            the
                                            network.</p>
                                        <p>Delegating a stake is a shared-risk, shared-reward financial concept that may
                                            generate
                                            long-term benefits
                                            to token holders. This is accomplished by coordinating the financial incentives of
                                            token
                                            holders
                                            (delegators) and the validators to whom they delegate.</p>
                                        <h6>• Liquidity Mining layer</h6>
                                        <p>Liquidity mining is a decentralized financial mechanism in which participants donate
                                            a
                                            percentage of
                                            their cryptocurrency assets to numerous liquidity pools in return for tokens and
                                            fees.
                                            When farming
                                            Soland Tokens, the Liquidity Miner layer will increase the APY.</p>
                                        <h6>• The lending of NFT's</h6>
                                        <p>What if you could borrow money using your NFTs as collateral? This would open the
                                            door to
                                            a slew of new
                                            habits, such as borrowing money to pay for lunch or taxes! Alternatively, you could
                                            utilize your
                                            borrowed stables to purchase even more NFTs! By lending your nfts, you can get
                                            tokens.
                                        </p>
                                        <h6>• Non-Fungible Liquidity </h6>
                                        <p>The word "liquidity" is used in the securities market. It specifies how quickly a
                                            company's assets may be
                                            converted into cash. This is a critical issue when it comes to a company's worth.
                                            It's
                                            crucial because
                                            it lets investors put money into a firm, knowing that they'll be able to sell their
                                            shares for cash
                                            fast. Using our liquidity platform, you may instantaneously buy, sell, or earn a
                                            yield
                                            on your NFTs.</p>
                                        <h6>• Voting in the best interests of the community.</h6>
                                        <h6>• VIP access to the Metaverse.</h6>
                                        <p><q>Tokenomics</q> should be rewarded. The second sale pays out to the first NFT
                                            holder.
                                            It then chose one
                                            holder at random to get 10% of each sale. When the collection is entirely sold out,
                                            the
                                            jackpot money of
                                            10% of the total collection will be distributed to ten persons. </p>


                                    </div>
                                </div>
                            </div>




                            <div className="card question">
                                <div className="card-header" id="headingEleven">
                                    <h2 className="mb-0">
                                        <button className="btn  btn-block text-left collapsed questionbtn" type="button"
                                            data-toggle="collapse" data-target="#collapseEleven" aria-expanded="false"
                                            aria-controls="collapseEleven">
                                            <h2> Top-performing NFTs collections on Solana for 2022 </h2>
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseEleven" className="collapse" aria-labelledby="headingEleven"
                                    data-parent="#accordionExample">
                                    <div className="card-body questionbtn">
                                        <p>The term "non-fungible token" is becoming increasingly prevalent. Non-volatile memory
                                            (NFT) regions process billions of transactions per month.</p>
                                        <p>The whole Solana ecosystem is witnessing a large spike in demand as the gas charge on
                                            Ethereum rises. The Solana NFT ecosystem expands and executes billions of
                                            transactions
                                            every day. Projects are increasing because of Solana's specialized marketplace and
                                            Solana-based NFT.</p>

                                    </div>
                                </div>
                            </div>


                            <div className="card question">
                                <div className="card-header" id="headingTel">
                                    <h2 className="mb-0">
                                        <button className="btn  btn-block text-left collapsed questionbtn" type="button"
                                            data-toggle="collapse" data-target="#collapseTel" aria-expanded="false"
                                            aria-controls="collapseTel">
                                            <h2> • Degenerate Ape Academy </h2>
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseTel" className="collapse" aria-labelledby="headingTel"
                                    data-parent="#accordionExample">
                                    <div className="card-body questionbtn">
                                        <p>According to Solanalysis, Degenerate Ape Academy is Solana's most valuable NFT
                                            collection. To present, the blue-chip enterprise has a market valuation of almost
                                            $503
                                            million (at the time of writing). The exhibit features 10,000 "smoothest br/ained"
                                            apes
                                            displaying "degenerate behavior." The NFT also offers its bearers utility and
                                            exclusive
                                            access to the "Academy." </p>
                                        <p>Like many other well-known companies, Degen Ape is supported by a large community. It
                                            has
                                            more than 82,000 Twitter followers but just 18,000 Discord members. The collection's
                                            qualities, uniqueness, and amazing 3D artwork have contributed to its popularity
                                            among
                                            collectors..</p>

                                    </div>
                                </div>
                            </div>


                            <div className="card question">
                                <div className="card-header" id="headingTherteen">
                                    <h2 className="mb-0">
                                        <button className="btn  btn-block text-left collapsed questionbtn" type="button"
                                            data-toggle="collapse" data-target="#collapseTherteen" aria-expanded="false"
                                            aria-controls="collapseTherteen">
                                            <h2> • Monkey Business in Solana </h2>
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseTherteen" className="collapse" aria-labelledby="headingTherteen"
                                    data-parent="#accordionExample">
                                    <div className="card-body questionbtn">
                                        <p>The second blue-chip NFT collection is Solana Monkey Business. The SMB collection is
                                            made
                                            up of 5000 monkeys who were produced at random and had a range of traits. By
                                            providing
                                            special privileges and a common wallet to holders, "The Monkeys" hope to create a
                                            large
                                            community around Solana. </p>
                                        <p>With a market capitalization of $60 million, the current floor price is 59 SOL.</p>

                                    </div>
                                </div>
                            </div>


                            <div className="card question">
                                <div className="card-header" id="headingFourteen">
                                    <h2 className="mb-0">
                                        <button className="btn  btn-block text-left collapsed questionbtn" type="button"
                                            data-toggle="collapse" data-target="#collapseFourteen" aria-expanded="false"
                                            aria-controls="collapseFourteen">
                                            <h2> • Aurory </h2>
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseFourteen" className="collapse" aria-labelledby="headingFourteen"
                                    data-parent="#accordionExample">
                                    <div className="card-body questionbtn">
                                        <p>Aurory is a free-to-play desktop game that allows players to trade over 10,000 NFT
                                            items.
                                            The Aurory program has received funding from the Solana Foundation, Alameda
                                            Research,
                                            and CMS. </p>
                                        <p>The Aurory team is comprised of experts from the gaming and cryptocurrency sectors.
                                            With
                                            prior employment experience at Ubisoft, EA, and other reputable companies.</p>

                                    </div>
                                </div>
                            </div>



                            <div className="card question">
                                <div className="card-header" id="headingFiveteen">
                                    <h2 className="mb-0">
                                        <button className="btn  btn-block text-left collapsed questionbtn" type="button"
                                            data-toggle="collapse" data-target="#collapseFiveteen" aria-expanded="false"
                                            aria-controls="collapseFiveteen">
                                            <h2> • Frakt</h2>
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseFiveteen" className="collapse" aria-labelledby="headingFiveteen"
                                    data-parent="#accordionExample">
                                    <div className="card-body questionbtn">
                                        <p>Frakt, unlike the other PFP projects, uses one-of-a-kind, randomly created fractal
                                            art
                                            NFTs. They are available in five various forms and four separate color palettes. The
                                            collection, which also includes Degen Apes and Solana Monkeys, has a total of 10,000
                                            NFTs. Frakt token holders can stake their tokens to get voting rights in the Frakt
                                            DAO.
                                            Staking can also earn them the $FRKT utility and governance token. </p>
                                        <p>In addition, by playing the game's many modes, users may win $AURY tokens. These
                                            tokens
                                            can then be exchanged on exchanges and the Aurory marketplace. In the future, the
                                            game
                                            will add governance features to the token. While it hasn't had the same success as
                                            Axie
                                            Infinity in space, it has accomplished numerous noteworthy feats</p>

                                    </div>
                                </div>
                            </div>

                            <div className="card question">
                                <div className="card-header" id="headingSixteen">
                                    <h2 className="mb-0">
                                        <button className="btn  btn-block text-left collapsed questionbtn" type="button"
                                            data-toggle="collapse" data-target="#collapseSixteen" aria-expanded="false"
                                            aria-controls="collapseSixteen">
                                            <h2> • SolPunks </h2>
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseSixteen" className="collapse" aria-labelledby="headingSixteen"
                                    data-parent="#accordionExample">
                                    <div className="card-body questionbtn">
                                        <p>SolPunks allows collectors to add generative-profile art to their collections at a
                                            lower
                                            cost. Although the quality isn't the same, SolPunks is a one-of-a-kind experience.
                                            The
                                            floor price, or average sale price, is presently at 12.6 SOL, and market
                                            capitalization
                                            is declining after surpassing $50 million. It's also worth mentioning that SolPunks
                                            has
                                            no affiliation with Larva Labs. </p>
                                        <p>People who missed out on Crypto Punks are now interested in adding a SolPunk to their
                                            collection. The community is strong for Punks, and with more maturation, it will see
                                            significant price appreciation in the future.</p>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>



                <br />
                <br />
                <br />
                {/* <!-- <div className="parnterHeading container ">
    <h1>Wallets supported
        <br/>
        <br/>

        <div className="walletLogo">
            <img src="./img/Solflare Wallet.png" id="wallet" width="120px" alt="">
            <img src="./img/phantomlogo-.net.png" id="phantom" width="80px" alt="">
            <br/>
            <br/>
             <p id="click">Click On Logo to Download</p>
        </div>
     
    </h1>
</div> --> */}
            </div>


            <section className="faqs">

                <div className="farHeading">
                    <h1>FAQS</h1>
                </div>


                <div className="FAQS container ">
                    <div className="accordion  " id="accordionExample">
                        <div className="card question">
                            <div className="card-header" id="headingOne">
                                <h2 className="mb-0  ">
                                    <button className="btn btn-link  btn-block text-left questionbtn" type="button"
                                        data-toggle="collapse" data-target="#collapseOne" aria-expanded="true"
                                        aria-controls="collapseOne">
                                        What is the Metaverse?
                                    </button>
                                </h2>
                            </div>

                            <div id="collapseOne" className="collapse " aria-labelledby="headingOne"
                                data-parent="#accordionExample">
                                <div className="card-body questionbtn">
                                    <p>The Metaverse is extremely complex, yet very simple if you want to explain it in a few
                                        words. It is an advanced version of a virtual world that includes all the activities we
                                        conduct in the traditional offline world. You will be conducting business, socializing,
                                        and exploring this vast world.. </p>

                                </div>
                            </div>
                        </div>
                        <div className="card question">
                            <div className="card-header" id="headingTwo">
                                <h2 className="mb-0">
                                    <button className="btn btn-link btn-block text-left collapsed questionbtn" type="button"
                                        data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false"
                                        aria-controls="collapseTwo">
                                        What is an NFT?
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div className="card-body questionbtn">
                                    The NFT is very easy to explain, but also quite complex when you get into the details. This
                                    is basically a digital credential that allows you to show proof of ownership of a digital
                                    purchase of any kind.

                                </div>
                            </div>
                        </div>
                        <div className="card question">
                            <div className="card-header" id="headingThree">
                                <h2 className="mb-0">
                                    <button className="btn btn-link btn-block text-left collapsed questionbtn" type="button"
                                        data-toggle="collapse" data-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree">
                                        What makes NFT grow in value?
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                                data-parent="#accordionExample">
                                <div className="card-body questionbtn">

                                    NFTs grow in value due to exposure and to community strength. If an NFT is backed by a
                                    strong community, it already holds more value if you seek to sell. The longer you hold on to
                                    your NFT as the community grows, the more value it will gain over the years simply due to
                                    the community value behind it. With that said, there are many other factors that will alter
                                    the value of your NFT, but that is the core principle.
                                </div>
                            </div>
                        </div>



                        <div className="card question">
                            <div className="card-header" id="headingtwenty">
                                <h2 className="mb-0">
                                    <button className="btn btn-link btn-block text-left collapsed questionbtn" type="button"
                                        data-toggle="collapse" data-target="#collapsetwenty" aria-expanded="false"
                                        aria-controls="collapsetwenty">
                                        How much is collection of?
                                    </button>
                                </h2>
                            </div>
                            <div id="collapsetwenty" className="collapse" aria-labelledby="headingtwenty"
                                data-parent="#accordionExample">
                                <div className="card-body questionbtn">

                                    8000
                                </div>
                            </div>
                        </div>

                        <div className="card question">
                            <div className="card-header" id="headingtwentyOne">
                                <h2 className="mb-0">
                                    <button className="btn btn-link btn-block text-left collapsed questionbtn" type="button"
                                        data-toggle="collapse" data-target="#collapsetwentyOne" aria-expanded="false"
                                        aria-controls="collapsetwentyOne">
                                        What blockchain this project works on ?
                                    </button>
                                </h2>
                            </div>
                            <div id="collapsetwentyOne" className="collapse" aria-labelledby="headingtwentyOne"
                                data-parent="#accordionExample">
                                <div className="card-body questionbtn">

                                    Solana
                                </div>
                            </div>
                        </div>


                        <div className="card question">
                            <div className="card-header" id="headingtwentyTwo">
                                <h2 className="mb-0">
                                    <button className="btn btn-link btn-block text-left collapsed questionbtn" type="button"
                                        data-toggle="collapse" data-target="#collapsetwentyTwo" aria-expanded="false"
                                        aria-controls="collapsetwentyTwo">
                                        How much price per mint?
                                    </button>
                                </h2>
                            </div>
                            <div id="collapsetwentyTwo" className="collapse" aria-labelledby="headingtwentyTwo"
                                data-parent="#accordionExample">
                                <div className="card-body questionbtn">

                                    0.8 sol
                                </div>
                            </div>
                        </div>





                    </div>
                </div>

            </section>



            <div id="connect" className="footer">
                <br />
                <br />
                <br />
                <div className="footercontent container">
                    <div className="footerlogo">
                        <img src={logo} width="120px" alt="" />

                        <p>connect@soland.live </p>
                    </div>
                    <div className="blog">
                        <h4>Blog</h4>

                    </div>




                    <div className="blog">
                        <h4>Follow us! </h4>
                        <a href="https://www.instagram.com/soland.live/">
                            <img src={insta} width="30px" alt="" />
                        </a>

                        <a href="https://vm.tiktok.com/ZMLabwwQp/">
                            <img src={tiktok} width="30px" alt="" />
                        </a>
                        <a href="https://discord.gg/3rNUnCbW3V">
                            <img src={dscord} width="30px" alt="" />
                        </a>
                        <a href="https://twitter.com/SolandCity">
                            <img src={twitter} width="30px" alt="" />
                        </a>
                        <a href="">

                            <img src={youtube} width="30px" alt="" />

                        </a>
                    </div>
                </div>


                <div className="copyright">
                    <p>Copyright 2022 &copy; </p>
                </div>
            </div>

        </>
    )
}

export default Home