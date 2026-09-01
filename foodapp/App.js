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

const RestrauntCard = () => {
    return (
        <div className="res-card" style={stylecard}>
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/RX_THUMBNAIL/IMAGES/VENDOR/2025/7/17/31f98a8b-b727-47fa-b84d-fc385bd91c1c_27768.jpg"/>
           <h3>Meghana foods</h3> 
           <h4>Biriyani, North indian, asian</h4>
           <h4>4.4 stars</h4>
           <h4>30 minutes</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {/* Restraunt card */}
                <RestrauntCard/>
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

