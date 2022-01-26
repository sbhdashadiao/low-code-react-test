import React from 'react';
import App from '../../router';
import styles from './index.less'


function Layout() {

    return (
        <div className={styles.layout}>
            <div className="layout_menu">123</div>
            <div className="layout_container">
                <App></App>
            </div>
        </div>
    )
}

export default Layout