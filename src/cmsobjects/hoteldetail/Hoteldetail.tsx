import axios from "axios";
import React, { useEffect } from "react";
import Helmet from "react-helmet";
import moment from "moment";

const Hoteldetail = props => {

    const {
        data
    } = props;

    const fromDate = moment(data.formDate);
    const toDate = moment(data.toDate);

    return (
        <>
            <Helmet>
                <title>{data.name}</title>
                <meta name="description" content={data.description.substring(0, 100)}/>
            </Helmet>
            <div style={{width: "100%", height: "300px"}}>
                <img src={data.image} alt={data.name} style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                }}/>
            </div>
            <h1 style={{textAlign: "center", maxWidth: "900px", margin: "20px auto"}}>{data.name}</h1>
            <div style={{
                marginTop: "20px",
                maxWidth: "900px",
                margin: "auto"
            }}>
                <div style={{width: `calc( 50% - ${2*20}px)`, float: "left", padding: `0 ${20}px`}}>
                    <b>{data.stars} Sterne</b><br/>
                    {data.description}
                </div>
                <div style={{width: `calc( 50% - ${2*20}px)`, float: "left", padding: `0 ${20}px`}}>
                    von {fromDate.format("d.m.Y")}<br/>
                    bis {toDate.format("d.m.Y")}<br/><br/>
                    für nur {data.price},€ <br/><br/>

                    <a href="#">Jetzt buchen!</a>
                </div>
                <div style={{clear: "both", height: "0"}}></div>
            </div>
        </>

    )
}

export const getSsrData = async settings => {
    return await axios.get(`https://bachelor-api.herokuapp.com/api/hotels/${settings.hotelId}`)
        .then(res => res.data.data);
}

export default Hoteldetail;