// import React from "react";
// import "./header.css";
// import logo from "../../../src/assets/Netflix-logo/netflix-4.svg";
// import SearchIcon from "@mui/icons-material/Search";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import AccountBoxIcon from "@mui/icons-material/AccountBox";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// const Header = () => {
//   return (
//     <div className="header_outer_container">
//       <div className="header_container">
//         <div className="headr_left">
//           <ul>
//             <li>
//               <img src={logo} alt="Netflix-logo" width="100" />
//             </li>
//             <li>Netflix</li>
//             <li>Home</li>
//             <li>TVshows</li>
//             <li>Movies</li>
//             <li>Latest</li>
//             <li>My List</li>
//             <li>Browse by Languages</li>
//           </ul>
//         </div>
//         <div className="header_right">
//           <ul>
//             <li>
//               <SearchIcon />
//             </li>

//             <li>
//               <NotificationsNoneIcon />
//             </li>
//             <li>
//               <AccountBoxIcon />
//             </li>
//             <li>
//               <ArrowDropDownIcon />
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../../src/assets/Netflix-logo/netflix-4.svg";
// import HeaderLogo from "../../assets/logo/logo/netflix-4.svg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  return (
    <Navbar
      variant="dark"
      expand="lg"
      className="text-white sticky-top"
      style={{ backgroundColor: "transparent", padding: "10px 0" }}
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={Logo} alt="Netflix Logo" width="100" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            <Nav.Link href="#action1 ">Home</Nav.Link>
            <Nav.Link href="#action2">TVShow</Nav.Link>
            <Nav.Link href="#action2">Movies</Nav.Link>
            <Nav.Link href="#action2">Latest</Nav.Link>
            <Nav.Link href="#action2">MyList</Nav.Link>
            <Nav.Link href="#action2">Browse by Languages</Nav.Link>
          </Nav>

          <Nav className="d-flex align-items-right">
            <Nav.Link href="#">
              <SearchIcon />
            </Nav.Link>

            <Nav.Link href="#">
              <NotificationsNoneIcon />
            </Nav.Link>

            <Nav.Link href="#">
              <AccountBoxIcon />
            </Nav.Link>
            <Nav.Link href="#">
              <ArrowDropDownIcon />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
