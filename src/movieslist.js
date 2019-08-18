import React, { Component } from 'react';
import './styles/movies.css';
import Header from "./componenets/header";
import Footer from "./componenets/footer";
import Banner from "../src/images/banner.jpg";

const movies_list = [{ image: "http://www.bravenewhollywood.com/wp-content/uploads/2019/05/Aladdin-movie-Mena-Massoud-Naomi-Scott-casting-980x476.jpg", name: "Aladdin", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" }, { image: "https://i.ytimg.com/vi/ELeMaP8EPAA/maxresdefault.jpg", name: "Once Upon a time in Hollywood", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" }, { image: "http://www.45enord.ca/wp-content/uploads/2018/08/180831-jack-ryan.jpg", name: "Jack Ryan", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" },
{ image: "https://i.ytimg.com/vi/s0kajDvqtNU/hqdefault.jpg", name: "Sabotage", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" }, { image: "https://the-hollywood-gossip-res.cloudinary.com/iu/s--yFFjtBdR--/t_teaser_wide/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1370963167/riddick-banner.jpg", name: "I Bow to no Man", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" }, { image: "https://img.rasset.ie/0000c537-500.jpg", name: "Ghost Rider", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" },
{ image: "https://static-koimoi.akamaized.net/wp-content/new-galleries/2018/08/gold-movie-review-1.jpg", name: "Gold", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" }, { image: "https://www.showcasecinemas.co.uk/media/3294/john-wick-quad.jpg", name: "Keanu Reeves", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" }, { image: "https://cf-images.us-east-1.prod.boltdns.net/v1/static/5359769168001/b49837f3-3565-489a-be4c-df2492230347/21509a19-fc34-410e-a4a4-f545cd2be038/1280x720/match/image.jpg", name: "Captain Marvel", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" },
{ image: "http://www.apnakatta.com/img/movies/banjo-banner-sm.jpg", name: "Banjo", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" }, { image: "https://www.eyecinema.ie/thumb.php?src=/images/films/the-lion-king-2d-backdrop-16.jpg&w=765&h=350&zc=1", name: "Lion King", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" }, { image: "https://i.ytimg.com/vi/XkHV7ROmIVA/hqdefault.jpg", name: "War", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" }
];
class MoviesList extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div>
                <Header/>
                <img src={Banner} alt="banner" width="100%"/>
                <div className="body_desc">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <h4>Movies List <span className="lines">||</span></h4>
                            </div>
                        </div>
                        <div className="row">
                            {movies_list.length > 0 && movies_list.map((u, i) => {
                                return (
                                    <div className="col-md-3" key={i}>
                                        <div className="movies_list">
                                            <img src={u.image} alt={u.name} />
                                            <h4>{u.name}</h4>
                                            <p>{u.desc.substring(0, 200)}</p>
                                        </div>
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default MoviesList;
