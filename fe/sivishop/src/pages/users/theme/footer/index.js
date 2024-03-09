import { memo, useState } from "react"
import "./style.scss";
import { Link } from "react-router-dom";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="footer_about">
                            <h1 className="footer_about_logo">Nam SHOP</h1>
                            <ul>
                                <li>
                                    Location: 713 Nguyem Tat Thanh
                                </li>
                                <li>Phone: 0911-395-126</li>
                                <li>Email: hoangquocnam8@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="footer_widget">
                            <h6>Shop</h6>
                            <ul>
                                <li>
                                    <Link to="">Contact</Link>
                                </li>
                                <li>
                                    <Link to="">About us</Link>
                                </li>
                                <li>
                                    <Link to="">business products</Link>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <Link to="">Account Infomation</Link>
                                </li>
                                <li>
                                    <Link to="">Cart</Link>
                                </li>
                                <li>
                                    <Link to="">Favorite List</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="footer_widget">
                            <h6>promotions & offers</h6>
                            <p>Register to have infomation here</p>
                            <form action="#">
                                <div>
                                    <input type="text" placeholder="Enter email"></input>
                                    <button type="submit" className="button-submit">
                                        Register
                                    </button>
                                </div>
                                <div className="footer_widget_social">
                                    <div>
                                        <AiOutlineFacebook />
                                    </div>
                                    <div>
                                        <AiOutlineInstagram />
                                    </div>
                                    <div>
                                        <AiOutlineLinkedin />
                                    </div>
                                    <div>
                                        <AiOutlineTwitter />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default memo(Footer);