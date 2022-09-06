import axios from "axios";
import React from "react";

const Teaser = props => {

    const {
        settings: _settings,
        data
    } = props;
    
    return (
        <div style={{
            border: "1px solid #aaa",
            width: "100%",
        }}>
            <div style={{width: "100%", height: "200px"}}>
                <img src={data.image} style={{width: "100%", height: "100%", objectFit: "cover"}} alt={data.name}/>
            </div>
            <div style={{padding: "30px"}}>
                <p style={{fontWeight: "bold", fontSize: "20px"}}>
                    {data.name}
                </p>
                <div> {data.description} </div>
                <div style={{fontSize: "20px"}}>
                    <span style={{fontSize: "14px"}}>p.p ab</span> {data.price},- €
                </div>
            </div>
        </div>
    )
}

export const getSsgData = async settings => {
    return await axios.get(`https://bachelor-api.herokuapp.com/api/hotels/${settings.hotelId}/teaser`)
        .then(res => res.data.data);
}

export const isrTimeliness = 15;

export default Teaser;