import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../styles/header.css';
import Logo from "../../src/images/logo.png";

const movies_list = [{ id: 1, image: "http://www.bravenewhollywood.com/wp-content/uploads/2019/05/Aladdin-movie-Mena-Massoud-Naomi-Scott-casting-980x476.jpg", name: "Aladdin", desc: "Film, also called movie or motion picture" }, { id: 2, image: "https://i.ytimg.com/vi/ELeMaP8EPAA/maxresdefault.jpg", name: "Once Upon a time in Hollywood", desc: "Film, also called movie or motion picture" }, { id: 3, image: "http://www.45enord.ca/wp-content/uploads/2018/08/180831-jack-ryan.jpg", name: "Jack Ryan", desc: "Film, also called movie or motion picture" },
{ id: 4, image: "https://i.ytimg.com/vi/s0kajDvqtNU/hqdefault.jpg", name: "Sabotage", desc: "dasdasd" }, { id: 5, image: "https://the-hollywood-gossip-res.cloudinary.com/iu/s--yFFjtBdR--/t_teaser_wide/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1370963167/riddick-banner.jpg", name: "I Bow to no Man", desc: "asdasdad" }, { id: 6, image: "https://img.rasset.ie/0000c537-500.jpg", name: "Ghost Rider", desc: "sadad" },
{ id: 7, image: "https://static-koimoi.akamaized.net/wp-content/new-galleries/2018/08/gold-movie-review-1.jpg", name: "Gold", desc: "wewrw" }, { id: 8, image: "https://www.showcasecinemas.co.uk/media/3294/john-wick-quad.jpg", name: "Keanu Reeves", desc: "sdfdsfs" }, { id: 9, image: "https://cf-images.us-east-1.prod.boltdns.net/v1/static/5359769168001/b49837f3-3565-489a-be4c-df2492230347/21509a19-fc34-410e-a4a4-f545cd2be038/1280x720/match/image.jpg", name: "Captain Marvel", desc: "Film, also called movie or motion picture" },
{ id: 10, image: "http://www.apnakatta.com/img/movies/banjo-banner-sm.jpg", name: "Banjo", desc: "wewrw" }, { id: 11, image: "https://www.eyecinema.ie/thumb.php?src=/images/films/the-lion-king-2d-backdrop-16.jpg&w=765&h=350&zc=1", name: "Lion King", desc: "sdfdsfs" }, { id: 12, image: "https://i.ytimg.com/vi/XkHV7ROmIVA/hqdefault.jpg", name: "War", desc: "dsfs" }
];

class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            moviesListing: []
        }
        this.onChange = this.onChange.bind(this);
    }
    onChange(event) {
        const text = event.target.value.toLowerCase();
        this.setState({ text }, () => this.filterList());
    }
    filterList() {
        let newData = movies_list;
        let text = this.state.text;
        newData = newData.filter(function (element) {
            return element.name.toLowerCase().indexOf(text) !== -1;
        });
        this.setState({ moviesListing: newData });
    }
    render() {
        return (
            <div>
                <div className="header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3">
                                <Link to="/">
                                    <img src={Logo} alt="Company Logo" />
                                </Link>
                            </div>
                            <div className="col-md-6 col6">
                                <div className="search-container">
                                    <input type="text" placeholder="Search Movies by Name..." name="search" onChange={this.onChange} />
                                </div>
                                <ul className="movies_suggestion">
                                    {this.state.moviesListing.map((u, i) => {
                                        return (
                                            <li key={i}><Link to={{ pathname: `moviesdesc/${u.id}`}}>{u.name}</Link></li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <div className="header-right">
                                    <Link to="/">About</Link>
                                    <Link to="/">Contact</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
