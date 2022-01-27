import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { menu } from '../../config/menu';
import App from '../../router';
import styles from './index.less'


const Layout: any = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const navigate = useNavigate();
    const location = useLocation();



    useEffect(() => {
        setCurrentIndex(Object.keys(menu).indexOf(location.pathname))
    }, [location])
    return (
        <div className={styles.layout}>
            <div className="layout_menu">
                {Object.keys(menu).map((ele: any, n: number) => <div
                    key={ele}
                    className={currentIndex === n ? 'layout_active' : ''}
                    onClick={() => {
                        setCurrentIndex(n);
                        navigate(`${ele}`, { replace: false })
                    }}>
                    {menu[ele]}
                </div>)}
            </div>
            <div className="layout_container">
                <App></App>
            </div>
        </div>

    )
}

export default Layout