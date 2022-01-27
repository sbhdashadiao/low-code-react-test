import React, { useImperativeHandle, forwardRef, useState,useEffect } from 'react'
import { Input } from 'antd';
import styles from './index.less';


function DeskTop(props: any, ref: any) {
    const [ele, setEle] = useState<any>([])
const [bounding,setBounding] =useState<any>({})

    useEffect(()=>{
        const div = document.querySelector('#desk')
        setBounding(div?.getBoundingClientRect())
        console.log(div?.getBoundingClientRect());
    },[])
    const createEle = (data: any) => {
        // console.log(data);
        // 边界判断
        if(data.end.clientX-data.start.nativeEvent.offsetX<Math.ceil(bounding.left+32)||data.end.clientX-data.start.nativeEvent.offsetX>Math.ceil(bounding.right)||data.end.clientY-data.start.nativeEvent.offsetY<32||data.end.clientY>232) {
            return
        }
        if (data.eleType) {
            const temp = [...ele, data]
            setEle(temp)
        }
    }
    useImperativeHandle(ref, () => ({
        // changeVal 就是暴露给父组件的方法
        createEle
    }));

    return (
        <React.Fragment>
            <div id = 'desk' className={styles.desktop}>
                <div id='appke' className="searchFrame">
                    我是搜索栏
                    {ele.map((item: any) => {
                        if (item.eleType === 'Input')
                            return <Input key={item.end.clientX} style={{ position: 'absolute', left:item.end.clientX-item.start.nativeEvent.offsetX , top: item.end.clientY-item.start.nativeEvent.offsetY }} />
                    })}
                </div>


                <div className="tableFrame">
                    我是表格
                </div>


            </div>

        </React.Fragment>
    )
}

export default forwardRef(DeskTop)