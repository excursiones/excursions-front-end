/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Footer from "components/Footer/Footer.jsx";
import NotFound from "views/public/NotFound.jsx";
import routes from "routes.js";
import publicStyle from "assets/jss/material-dashboard-react/layouts/publicStyle.jsx";
import image from "assets/img/sidebar-2.jpg";

const switchRoutes = (
    <Switch>{routes.map((prop, key) => {
        if (prop.layout === "/public") {
            return (
                <Route
                path={prop.layout + prop.path}
                component={prop.component}
                key={key}
                /> );
            }
        })
    }
    <Route path="*" exact={true} component={NotFound} />
    </Switch>
    );
    
    class Public extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                image: image,
                color: "blue",
                hasImage: true,
                fixedClasses: "dropdown show",
                mobileOpen: false
            };
        }
        
        handleImageClick = image => {
            this.setState({ image: image });
        };
        
        handleColorClick = color => {
            this.setState({ color: color });
        };
        
        handleFixedClick = () => {
            if (this.state.fixedClasses === "dropdown") {
                this.setState({ fixedClasses: "dropdown show" });
            } else {
                this.setState({ fixedClasses: "dropdown" });
            }
        };
        
        handleDrawerToggle = () => {
            this.setState({ mobileOpen: !this.state.mobileOpen });
        };
        
        getRoute() {
            return this.props.location.pathname !== "/user/maps";
        }
        
        resizeFunction = () => {
            if (window.innerWidth >= 960) {
                this.setState({ mobileOpen: false });
            }
        };
        
        componentDidMount() {
            if (navigator.platform.indexOf("Win") > -1) {
                const ps = new PerfectScrollbar(this.refs.mainPanel);
            }
            window.addEventListener("resize", this.resizeFunction);
        }
        
        componentDidUpdate(e) {
            if (e.history.location.pathname !== e.location.pathname) {
                this.refs.mainPanel.scrollTop = 0;
                if (this.state.mobileOpen) {
                    this.setState({ mobileOpen: false });
                }
            }
        }
        
        componentWillUnmount() {
            window.removeEventListener("resize", this.resizeFunction);
        }
        
        render() {
            const { classes, ...rest } = this.props;
            
            var userRoutes;
            var userRoutesHead;
            if(routes != undefined) {
                userRoutes = routes.filter(function (route) {
                    return route.layout == "/public" && route.nShow != true;
                });
                userRoutesHead = routes.filter(function (route) {
                    return route.layout == "/public";
                });
            } else {
                console.log("Undefined");
            }
            
            return (
                <div className={classes.wrapper}>
                
                <div className={classes.mainPanel} ref="mainPanel">
                
                {/* On the /maps route we want the map to be on full screen - this is not possible 
                    if the content and conatiner classes are present because they have some paddings 
                which would make the map smaller */}
                {this.getRoute() ? (
                    <div className={classes.content}>
                    <div className={classes.container}>{switchRoutes}</div>
                    </div>
                    ) : (
                        <div className={classes.map}>{switchRoutes}</div>
                        )
                    }
                    
                    {this.getRoute() ? <Footer /> : null}
                    </div>
                    </div>
                    );
                }
            }
            
            Public.propTypes = {
                classes: PropTypes.object.isRequired
            };
            
            export default withStyles(publicStyle)(Public);
            