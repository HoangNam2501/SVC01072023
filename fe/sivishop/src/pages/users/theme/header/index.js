import { memo } from "react"
import "./style.scss";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail, AiOutlineTwitter, AiOutlineUser } from "react-icons/ai";
import { Link } from 'react-router-dom'
import { formatter } from "utils/formatter";

const Header = () => {
    return (
        <div className="header_top">
            <div className="container">
                <div className="row">
                    <div className="col-6 header_top_left">
                        <ul>
                            <li>
                                <AiOutlineMail /> hello@gmail.com
                            </li>
                            <li>
                                Freeship with bill more than {formatter(200000)}
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 header_top_right">
                        <ul>
                            <li>
                                <Link to={""}>
                                    <AiOutlineFacebook />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <AiOutlineInstagram />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <AiOutlineLinkedin />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <AiOutlineTwitter />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <AiOutlineUser />
                                </Link>
                                <span>Login</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(Header);