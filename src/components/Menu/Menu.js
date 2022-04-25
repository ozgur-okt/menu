import { useContext, useEffect, useState } from "react";
import MenuContext from "../context/MenuContext";
import "./menu.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons'


function Menu() {

    const { menu, setMenu } = useContext(MenuContext);
    const [filtredMenu, setFiltredMenu] = useState([]);


    useEffect(() => {
        setFiltredMenu(menu);

    }, []);

    const cats = menu.map(q => q.category);

    const category = cats.filter((q, idx) => cats.indexOf(q) === idx)
        ;

    function handleMenu(e) {
        e.target.value !== "all"
            ? setFiltredMenu(menu.filter(item => item.category === e.target.value))
            : setFiltredMenu(menu);
    }

    return (


        <>
            <div className="container">
                <h1>Our Menu</h1>
                
                <FontAwesomeIcon icon={ faBowlFood } className="icon" />
                <div className="btn-box">
                    <button value="all" onClick={handleMenu}>All</button>
                    {category.map((item, index) => (
                        <>
                            <button key={index} value={item} onClick={handleMenu}>
                                {item}
                            </button>
                        </>
                    ))}
                </div>
                <div className="menu">
                    {filtredMenu.map((item) =>

                        <div key={item.id} className="card">
                            <img src={item.src} alt="image" />
                            <div className="info">
                                <div className="title">
                                    {item.title}
                                </div>
                                <div className="category">
                                    {item.category}
                                </div>

                                <div className="desc">
                                    {item.desc}
                                </div>
                                <div className="price">
                                    $ {item.price}
                                </div>
                            </div>
                        </div>

                    )}
                </div>
            </div>
        </>


    )
}

export default Menu