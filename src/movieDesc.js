import React, { Component } from 'react';
import './styles/moviesdesc.css';
import Header from "./componenets/header";
import Footer from "./componenets/footer";

const movies_list = [{ id:1, image: "http://www.bravenewhollywood.com/wp-content/uploads/2019/05/Aladdin-movie-Mena-Massoud-Naomi-Scott-casting-980x476.jpg", name: "Aladdin", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" }, { id:2, image: "https://i.ytimg.com/vi/ELeMaP8EPAA/maxresdefault.jpg", name: "Once Upon a time in Hollywood", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" }, { id:3, image: "http://www.45enord.ca/wp-content/uploads/2018/08/180831-jack-ryan.jpg", name: "Jack Ryan", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" },
    { id:4, image: "https://i.ytimg.com/vi/s0kajDvqtNU/hqdefault.jpg", name: "Sabotage", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" }, { id:5, image: "https://the-hollywood-gossip-res.cloudinary.com/iu/s--yFFjtBdR--/t_teaser_wide/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1370963167/riddick-banner.jpg", name: "I Bow to no Man", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" }, { id:6, image: "https://img.rasset.ie/0000c537-500.jpg", name: "Ghost Rider", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" },
    { id:7, image: "https://static-koimoi.akamaized.net/wp-content/new-galleries/2018/08/gold-movie-review-1.jpg", name: "Gold", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" }, { id:8, image: "https://www.showcasecinemas.co.uk/media/3294/john-wick-quad.jpg", name: "Keanu Reeves", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" }, { id:9, image: "https://cf-images.us-east-1.prod.boltdns.net/v1/static/5359769168001/b49837f3-3565-489a-be4c-df2492230347/21509a19-fc34-410e-a4a4-f545cd2be038/1280x720/match/image.jpg", name: "Captain Marvel", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" },
    { id:10, image: "http://www.apnakatta.com/img/movies/banjo-banner-sm.jpg", name: "Banjo", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" }, { id:11, image: "https://www.eyecinema.ie/thumb.php?src=/images/films/the-lion-king-2d-backdrop-16.jpg&w=765&h=350&zc=1", name: "Lion King", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" }, { id:12, image: "https://i.ytimg.com/vi/XkHV7ROmIVA/hqdefault.jpg", name: "War", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" }
];

class MoviesDesc extends Component {

    constructor(props) {
        super(props)
        this.state = {
            productinfo: []
        }
    }
    componentDidMount() {
        movies_list.filter((u) => {
            if(parseInt(this.props.match.params.id) === u.id) {
                return this.setState({
                    productinfo: u
                })
            } else {
                return false;
            }
        });
    }
    render() {
        return (
            <div>
                <Header />
                <div className="movies_desc">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 col-xs-12">
                                <div className="movies_list">
                                    <img src={this.state.productinfo.image} alt={this.state.productinfo.name} />
                                </div>
                            </div>
                            <div className="col-md-6 col-xs-12">
                                <h4>{this.state.productinfo.name}</h4>
                                <p>{this.state.productinfo.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default MoviesDesc;
