import { memo, useState } from "react"
import "./style.scss";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail, AiOutlineShoppingCart, AiOutlineTwitter, AiOutlineUser } from "react-icons/ai";
import { Link } from 'react-router-dom'
import { formatter } from "utils/formatter";
import { ROUTERS } from "utils/router";

const Header = () => {

    const [menus, setMenu] = useState([
        {
            name: "Home",
            path: ROUTERS.USER.HOME
        },
        {
            name: "PRODUCTS",
            path: ROUTERS.USER.PRODUCT
        },
        {
            name: "",
            path: "",
            isShowSubMenu: false,
            child: [
                {
                    name: "Meat",
                    path: "",
                },
                {
                    name: "Vegetable",
                    path: "",
                },
                {
                    name: "FastFood",
                    path: "",
                }
            ]
        },
        {
            name: "BLOGS",
            path: ""
        },
        {
            name: "CONTACT",
            path: ""
        }
    ]);

    return (
        <>
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
            <div className="container">
                <div className="row">
                    <div className="col-xl-3">
                        <div className="header_logo">
                            <h1>Nam SHOP</h1>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <nav className="header_menu">
                            <ul>
                                {
                                    menus?.map((menu, menuKey) => (
                                        <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                                            <Link to={menu?.path}>
                                                {menu?.name}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </nav>
                    </div>
                    <div className="col-xl-3">
                        <div className="header_cart">
                            <div className="header_cart_price">
                                <span>{formatter(1001230)}</span>
                            </div>
                            <ul>
                                <li>
                                    <Link to='#'>
                                        <AiOutlineShoppingCart /> <span>5</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    );
};

export default memo(Header);