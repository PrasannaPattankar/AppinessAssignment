import React from 'react';
// import { HeaderLogo } from '../../uri/icons';

import './Footer.scss'

const Footer = () => {
    return (
        <footer className="footer-component">
        <div className=" footer-component-container">
            <div className="pro_border">
                <div className="row">
                    <div className="col-xl-6 col-md-6">
                        <div className="lets_projects">
                            <h3></h3>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-6">
                        <div className="phone_number" style={{ color: "#fff", "font-weight": 100 }}>
                            <h3 id="footer-component-SupportEmail" style={{ color: "#fff" }}><span></span></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copy-right_text">
            <div className="footer-component-container">
                <div className="footer-component_border"></div>
                <div className="footer-row">
                    <div className="col-xl-12">
                        <p className="copy_right text-center">
                            Copyright &copy; 2020 All rights reserved.
                                </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
//         <footer className="bck_blue">
//             <div id="footer">
//             {/* <div className="footer_logo">
//                         <HeaderLogo 
//                             link={true}
//                             linkTo="/Learner"
//                             width='150px'
//                             height='55px'
//                         />
//                     </div> */}
//                 {/* <p id="footer">Productivity Enhancement</p> */}
//                 <span id="footerText">Copyrights &copy; 2019 </span>
//                 <span id="footerText">Powered by Aroha Technologies</span>
//                 {/* <div className="ml-auto"> */}
//                 {/* <span style={{color: "#000"}}>Powered by</span> */}
//                 {/* <p id="footer">Aroha Technologies</p> */}
//             </div>
//             {/* </div> */}
//             {/* <div className="ml-auto">
//                 <span style={{color: "#000"}}>Powered by</span>
//                 <p id="footer">Aroha Technologies</p>
//             </div> */}
//         </footer>
//         // <footer className="bck_blue">
//         //     <div className="footer_logo">
//         //         <HeaderLogo 
//         //             link={true}
//         //             linkTo="/Learner"
//         //             width='150px'
//         //             height='55px'
//         //         />
//         //     </div>
//         //     <div className="footer_discl">
//         //         {/* Aroha &copy; 2019 */}
//         //         Copyrights © 2019 All Rights Reserved by Aroha Technologies.
//         //     </div>
//         // </footer>

//         /* Footer 
//             <footer class="page-footer font-small unique-color-dark pt-4">

//             <div class="container">

//             <ul class="list-unstyled list-inline text-center py-2">
//                 <li class="list-inline-item">
//                 <h5 class="mb-1">Register for free</h5>
//                 </li>
//                 <li class="list-inline-item">
//                 <a href="#!" class="btn btn-outline-white btn-rounded">Sign up!</a>
//                 </li>
//             </ul>
//             </div>
//             <div class="footer-copyright text-center py-3">© 2018 Copyright:
//             {/* <a href=""> MDBootstrap.com</a> 
//             </div>
//             </footer>
// // Footer */
    );
};

export default Footer;