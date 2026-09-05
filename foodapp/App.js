import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://png.pngtree.com/png-vector/20221218/ourmid/pngtree-simple-and-modern-food-logo-vector-design-png-image_6527848.png" />
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
    );
};

const stylecard = {
    backgroundColor:"#D3D3D3",
}

const RestrauntCard = (props) => {
    console.log(props);
    const {resData}=props;
    return (
        <div className="res-card" style={stylecard}>
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/RX_THUMBNAIL/IMAGES/VENDOR/2025/7/17/31f98a8b-b727-47fa-b84d-fc385bd91c1c_27768.jpg"/>
           <h3>{resObj.info.name}</h3> 
           <h4>{resObj.info.cuisines.join(", ")}</h4>
           <h4>{resObj.info.avgRating} stars</h4>
           <h4>{resObj.info.costForTwo}</h4>
           <h4>{resObj.info.sla.deliveryTime} minutes</h4>
        </div>
    );
};

const resObj={
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                      "id": "411529",
                      "name": "Komalavilas Pure Veg Hotel",
                      "cloudinaryImageId": "bsgrncndstkpbkfu4y7v",
                      "locality": "Ballard Road",
                      "areaName": "Ballard Road",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "South Indian",
                        "Kerala",
                        "Coffee",
                        "Tea"
                      ],
                      "avgRating": 4.5,
                      "veg": true,
                      "parentId": "453439",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "7.2K+",
                      "sla": {
                        "deliveryTime": 28,
                        "lastMileTravel": 0.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "0.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-09-04 21:30:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹89",
                        "logoCtx": {
                          "text": "BENEFITS"
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        },
                        "commsStyling": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "maxDuration": "3000",
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                      "priceComparisonComms": {
                        
                      }
                    },
                    "analytics": {
                      "context": "seo-data-311229fa-fb20-4ea6-acdc-60b863d34a71"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/kannur/komalavilas-pure-veg-hotel-ballard-road-rest411529",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_JHS_byName"
                  };


const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {/* Restraunt card */}
                <RestrauntCard resData={resObj} />
                <RestrauntCard
                resName="KFC"
                cuisine="Burgers,Fries,Wings"
                />
                
            </div>
        </div>
    )
}

const AppLayout = () => {
    return <div className="app">
        <Header/>
        <Body/>
        </div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);

