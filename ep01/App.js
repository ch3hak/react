import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img 
                    className="logo" 
                    src="https://cdn.dribbble.com/users/1635051/screenshots/4291569/media/37f248faab6fa8df62c797c590385fbf.png"
                /> 
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

const styleCard = {
    backgroundColor: "#f0f0f0"
};

const RestaurantCard = (props) => {
const { resData } = props;

    return(
        <div className="res-card" style={ {backgroundColor: "#f0f0f0"} }>
            <img
                className="res-logo"
                alt="res-logo" 
                src={
                    "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1661805422/"+
                    resData.info.cloudinaryImageId
                }
            />
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines}</h4>
            <h4>{resData.info.avgRating} stars</h4>
            <h4>{resData.info.costForTwo}</h4>
            <h4>{resData.info.deliveryTime} minutes</h4>
        </div>
    );
};

const resObj = {
    "info": {
        "id": "581970",
        "name": "Pizza Hut",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/8b0b5572-f456-41ae-9995-023883a577ed_581970.jpg",
        "locality": "Sector 11",
        "areaName": "Rohini",
        "costForTwo": "₹350 for two",
        "cuisines": [
        "Pizzas"
        ],
        "avgRating": 4.1,
        "parentId": "721",
        "avgRatingString": "4.1",
        "totalRatingsString": "2.0K+",
        "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 2.3,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "2.3 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-11-28 01:00:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "Rxawards/_CATEGORY-Pizza.png",
        "description": "Delivery!"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "textBased": {},
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "imageId": "Rxawards/_CATEGORY-Pizza.png",
        "description": "Delivery!"
        }
        }
        ]
        },
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹189",
        "logoCtx": {
        "text": "BENEFITS"
        }
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=581970",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
    }
}


const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard 
                    resData={resObj}
                />
                
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
