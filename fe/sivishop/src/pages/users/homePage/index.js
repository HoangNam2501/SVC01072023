import { memo } from "react"
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import cat1 from "assets/users/images/categories/cat-1.jpg";
import cat2 from "assets/users/images/categories/cat-2.jpg";
import cat3 from "assets/users/images/categories/cat-3.jpg";
import cat4 from "assets/users/images/categories/cat-4.jpg";
import "./style.scss";

const HomePage = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const slidersItem = [
        {
            bgImg: cat1,
            name: "Fresh Orange",
        },
        {
            bgImg: cat2,
            name: "Dried Fruit",
        },
        {
            bgImg: cat3,
            name: "Fresh Vegetables",
        },
        {
            bgImg: cat4,
            name: "Canned Milk",
        },

    ]

    return (
        <>
            {/*Categories Begin*/}
            <div className="container container_categories_slider">
                <Carousel responsive={responsive} className="categories_slider">
                    {
                        slidersItem.map((item, key) => (
                            <div 
                                className="categories_slider_item"
                                style={{ backgroundImage: `url(${item.bgImg})` }}
                                key={key}
                            >
                                <p>{item.name}</p>
                            </div>
                        ))
                    }
                </Carousel>
            </div>
            {/*Categories End*/}
        </>
    );
};

export default memo(HomePage);