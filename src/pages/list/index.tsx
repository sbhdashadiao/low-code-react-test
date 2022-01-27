import React,{useRef} from 'react';
import DeskTop from './desktop';
import ComponentType from './componentType';
import styles from './index.less';



function List(){
    const desktopRef =useRef<any>(null);
    const createEle=(props:any)=>{
        desktopRef.current!.createEle(props)
    }
    return (
        <div className={styles.listContainer}>
            <DeskTop ref={desktopRef} />
            <ComponentType createEle={createEle} />
        </div>
    )
}

export default List