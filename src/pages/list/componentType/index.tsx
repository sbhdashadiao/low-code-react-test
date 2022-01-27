import React,{useState} from 'react';
import { Input } from 'antd';
import styles from './index.less';

interface TypeProps{
    createEle:(e:any)=>void
}
    function ComponentType(props:TypeProps) {
const [eleType,setEleType] = useState({})
    const componentDropEnd = (e:any) => {
        
        const obj = Object.assign({},{end:e},eleType)
        props.createEle(obj)
    }
    const componentDropStart = (e: React.DragEvent<HTMLInputElement>,eleType: string) => {
        const type={
            eleType,
            start:e
        }
        setEleType(type)
    }
    return (
        <React.Fragment>
            <div className={styles.componentType}>
                <h1 className='title'>组件类型</h1>
                <div className='componentContainer'>
                    <div className="component">
                        <div>
                            输入框
                        </div>
                        <div>
                            <Input
                            onDragEnd={componentDropEnd}
                            onDragStart={(e)=>componentDropStart(e,'Input')}
                            disabled
                            draggable
                            />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ComponentType