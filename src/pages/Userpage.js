import React, {useState} from "react";
import "./Userpage.css";
import dashImage from "./images/dash.png"
import reviewImage from "./images/revs.png"
import favImage from "./images/heart.png"

function Userpage() {
    const [activeTab, setActiveTab] = useState("dash");
    const handleClick = (tab) => {setActiveTab(tab);};

    const renderContent = () => {
        if (activeTab === "dash") {
            return (
                <div>
                    <h1 className = "userHeader">User Profile</h1>
                <div className = "userrow1">
                    <div className="pfpname">
                    <div className = "pfp"></div>
                    <div className = "nameCol">
                        <h1>Name</h1>
                        <h2>Position</h2>
                        <p>Location</p>
                    </div>
                    </div>
                    <div className = "buttons1">
                    <button className = "updateBut">Update</button>
                    <button className = "deleteBut">Delete</button>
                    </div>
                </div>
                <div className = "userrow2">
                    <div className = "FL">
                        <div className= "first1">
                            <form className ="responseBox1">
                                <label> First Name </label>
                                <input type = 'text' id = "FN"></input>
                            </form>
                        </div>
                    <div className= "last">
                        <form className ="responseBox1">
                            <label> Last Name </label>
                            <input type = 'text' id = "LN"></input>
                        </form>
                    </div>
                </div>
                <div className = "userrow3"> 
                    <form className ="responseBox1">
                        <label> Username</label>
                        <input type = 'text' id = "UN"></input>
                    </form>
                </div>
                <div className = "userrow4">
                    <form className ="responseBox1">
                        <label> Email Address</label>
                        <input type = 'text'  id = "EM"></input>
                    </form>
                </div>
                <div className = "userrow5">
                    <div className = "newoldPass">
                        <div className= "currentPass">
                            <form className ="responseBox1">
                                <label> Current Password </label>
                                <input type = 'text' id = "CP"></input>
                            </form>
                        </div>
                        <div className= "newPass">
                            <form className ="responseBox1">
                                <label> New Password </label>
                                <input type = 'text' id = "NP"></input>
                            </form>
                        </div>
                    </div>
                </div>
                <div className = "userrow6"> 
                    <form className ="responseBox1">
                        <label>Confirm New Password</label>
                        <input type = 'text' id = "CNP"></input>
                    </form>
                </div>
                <div className = "userrow7">
                    <button className = "cancel">Cancel</button>
                    <button className = "save">Save Changes</button>
                </div>
            </div>
                </div>
            );
        } else if (activeTab === "reviews") {
            return (<div></div>);
        } else if (activeTab === "favs") {
            return (<div></div>);
        }

    }

    return (
      <div>
        <div className = "user">
        <div className = "leftPanel">
            <div className={`reviewsTab ${activeTab === "dash" ? "dashTab" : "reviewsTab"}`}
            onClick={() => handleClick("dash")}>
                <div className = "imgDash">
                <img src = {dashImage}></img>
                Dashboard
                </div>
                <div className = "arrowBox">&gt;</div>
            </div>
            <div className={`reviewsTab ${activeTab === "reviews" ? "dashTab" : "reviewsTab"}`}
            onClick={() => handleClick("reviews")}>
                <div className = "imgReview">
                <img src = {reviewImage}></img>
                Reviews
                </div>
                <div className = "arrowBox">&gt;</div>
            </div>
            <div className={`reviewsTab ${activeTab === "favs" ? "dashTab" : "reviewsTab"}`}
            onClick={() => handleClick("favs")}>
                <div className = "imgFav">
                <img src = {favImage}></img>
                Favorites
                </div>
                <div className = "arrowBox">&gt;</div>
            </div>
            <button className = "signOut">Sign out</button>
        </div>
        <div className = "rightPanel">
            {renderContent()}
        </div>
        </div>
      </div>
    );
  }
  
  export default Userpage;
  