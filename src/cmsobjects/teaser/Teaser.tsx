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
                <img src={data.image.cover?.src} style={{width: "100%", height: "100%", objectFit: "cover"}}/>
            </div>
            <div style={{padding: "30px"}}>
                <p style={{fontWeight: "bold", fontSize: "20px"}}>
                    {data.name}
                </p>
                <div style={{}} dangerouslySetInnerHTML={{__html: data.description.substring(0, 450) + "..."}}></div>
                <div style={{fontSize: "20px"}}>
                    <span style={{fontSize: "14px"}}>p.p ab</span> {data.price.bestPricePerPerson.value},- €
                </div>
            </div>
        </div>
    )
}

export const getSsgData = async settings => {
    return await axios.post("http://olimar-ibe.test/api/teaser/bestOffer", {
        "limit": 1,
        "hotelsGiataList": [
            settings.hotelId
        ],
        "startDate": "11.09.2022",
        "endDate": "15.03.2023",
        "adults": 2,
        "children": [],
        "minCategory": 3,
        "productType": "pauschal",
        "durationFrom": 7,
        "durationTo": 7,
    }).then(res => res.data.result[0]);
}

export const isrTimeliness = 10;

export default Teaser;