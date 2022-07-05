import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import './404.scss';


const Page404 = () => {

    const light = useRef(null);

    useEffect(() => {
        window.addEventListener("mousemove", moveLight);

        return () => {
            window.removeEventListener("mousemove", moveLight);
        }
    }, []);

    const moveLight = (e) => {
        light.current.style.top = e.clientY + "px";
        light.current.style.left = e.clientX + "px";
    }

    return(
        <div>
            <div className="error__box">
                <h1 className="error__title">404</h1>
                <h2 className="error__title error__first">Uh, Ohh</h2>
                <h3 className="error__title error__second">This page is missing or an error has occurred</h3>
                <h3 className="error__title error__second">Click on the logo to return to the main page</h3>
            </div>

            <div className="error__torch" ref={light}></div>
        </div>
    );
}

export default Page404;
