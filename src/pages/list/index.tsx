import React,{useRef, useState} from 'react';
import DeskTop from './desktop';
import ComponentType from './componentType';
import styles from './index.less';



function List(){
    const [focusProps,setFocusProps] = useState({})
    const desktopRef =useRef<any>(null);
    const createEle=(props:any)=>{
        desktopRef.current!.createEle(props)
    }
    return (
        <div className={styles.listContainer}>
            <DeskTop setFocusProps={setFocusProps}   ref={desktopRef} />
            <ComponentType focusProps={focusProps} createEle={createEle} ele={desktopRef.current!.ele} />
        </div>
    )
}

export default List