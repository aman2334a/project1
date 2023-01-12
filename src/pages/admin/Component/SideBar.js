import React from "react";
import classnames from "classnames";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

import "./styles.css";


class Sidebar extends React.Component {
  
  state = {
    open: window.matchMedia("(min-width: 1024px)").matches || false
  };

  ontoggleNav = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  render() {
    const { open } = this.state;
    const mobile = window.matchMedia("(max-width: 768px)").matches;
    console.log(mobile, open);
    return (
      <div>
        <div className="navHeaderWrap">
          <Header ontoggleNav={this.ontoggleNav} />
        </div>
        <div className="bodyWrap">
          <div className={classnames({ blur: mobile && open })} />
          <div
            className={classnames(
              "sidenav",
              { sidenavOpen: open },
              { sidenavClose: !open }
            )}
          >
            <a
              href="javascript:void(0)"
              className="closebtn hidex"
              onClick={() => this.ontoggleNav("0px")}
            >
              &times;
            </a>
            <ul>
              <li className="NavLinkHeading">Reports
                <ul>
                  <li><NavLink to="/admin/reports?view=CustomerWise">Customer Wise</NavLink></li>
                  <li><NavLink to="/admin/reports?view=ServiceWise">Service Wise</NavLink></li>
                </ul>
              </li>
              <li className="NavLinkHeading">Portal Updates
                <ul>
                  <li><NavLink to="/admin/updates?view=AddScheme">Add Schemes</NavLink></li>
                  <li><NavLink to="/admin/updates?view=HotOffer">Hot Offer</NavLink></li>
                  {/* <li><NavLink to="/admin/updates?view=NewServices">New services</NavLink></li> */}
                  <li><NavLink to="/admin/updates?view=ServiceCategory">Services Category </NavLink></li>
                </ul>
              </li>
              <li className="NavLinkHeading">Admin
                <ul>
                  <li><NavLink to="/admin/manage?view=UserMangement">User Management</NavLink></li>
                  <li><NavLink to="/admin/manage?view=Payments">Payments</NavLink></li>
                </ul>
              </li>

            </ul>

            {/* <a href="#">
              <i class="fa fa-fw fa-home" />
              Reports
            </a>
            <a href="#">Portal Updates</a>
            <a href="#">Admin</a> */}

          </div>

          <div
            className={classnames(
              "main",
              { mainShrink: open },
              { mainExpand: !open },
              { noscroll: mobile && open }
            )}
          >
            {this.props.element}
            {/* <h2> Push this Div Aside</h2>
            <p>
              Click on the element below to open the side navigation menu, and
              push this content to the right.
            </p> */}

          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
