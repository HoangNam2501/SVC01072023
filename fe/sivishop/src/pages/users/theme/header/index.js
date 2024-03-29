import { memo, useState } from "react"
import "./style.scss";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail, AiOutlineMenu, AiOutlinePhone, AiOutlineShoppingCart, AiOutlineTwitter, AiOutlineUser } from "react-icons/ai";
import { Link } from 'react-router-dom'
import { formatter } from "utils/formatter";
import { ROUTERS } from "utils/router";

const Header = () => {
    const [isShowCategories, setIsShowCategories] = useState(true);
    const [menus] = useState([
        {
            name: "Home",
            path: ROUTERS.USER.HOME
        },
        {
            name: "SHOP",
            path: ""
        },
        {
            name: "PRODUCT",
            path: "PRODUCT",
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
                                            {
                                                menu.child && (
                                                    <ul className="header_menu_dropdown">
                                                        {
                                                            menu.child.map((childItem, childKey) => (
                                                                <li key={`${menuKey}-${childKey}`}>
                                                                    <Link to={childItem.path}>
                                                                        {childItem.name}
                                                                    </Link>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                )
                                            }
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
            <div className="container">
                <div className="row hero_categories_container">
                    <div className="col-lg-3 hero_categories">
                        <div className="hero_categories_all" onClick={() => setIsShowCategories(!isShowCategories)}>
                            <AiOutlineMenu />
                            Product List
                        </div>
                            <ul className={isShowCategories ? "" : "hidden"}>
                                <li>
                                    <Link to="#">
                                        Fresh meat
                                    </Link>
                                </li>    
                                <li>
                                    <Link to="#">
                                        Vegetables
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        Juice
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        Fruit
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        Seafood
                                    </Link>
                                </li>                     
                            </ul>
                        </div>
                    <div className="col-lg-9 hero_search_container">
                        <div className="hero_seach">
                            <div className="hero_search_form">
                                <form>
                                    <input type="" name="" value="" placeholder="What are you seaching?"/>
                                    <button type="submit">Search</button>
                                </form>
                            </div>
                            <div className="hero_search_phone">
                                <div className="hero_search_phone_icon">
                                    <AiOutlinePhone />
                                </div>
                                <div className="hero_search_phone_text">
                                    <p>0911.395.126</p>
                                    <span>Support 24/7</span>
                                </div>
                            </div>
                        </div>
                        <div className="hero_item">
                            <div className="hero_text">
                                <span>Fresh Fruit</span>
                                <h2>Vegetables <br />
                                    Fresh 100%
                                </h2>
                                <p>Free delivery</p>
                                <Link to="" className="primary_btn">
                                    Buy now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default memo(Header);