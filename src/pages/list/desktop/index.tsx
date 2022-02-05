import React, { useImperativeHandle, forwardRef, useState, useEffect } from 'react';
import { Input, Form } from 'antd';
import styles from './index.less';

const FormItem = Form.Item

function DeskTop(props: any, ref: any) {
    const [ele, setEle] = useState<any>([])
    const [bounding, setBounding] = useState<any>({})

    useEffect(() => {
        const div = document.querySelector('#desk')
        setBounding(div?.getBoundingClientRect())
        console.log(div?.getBoundingClientRect());
    }, [])
    const createEle = (data: any) => {
        // console.log(data);
        // 边界判断
        if (data.end.clientX - data.start.nativeEvent.offsetX < Math.ceil(bounding.left + 32) || data.end.clientX - data.start.nativeEvent.offsetX > Math.ceil(bounding.right) || data.end.clientY - data.start.nativeEvent.offsetY < 32 || data.end.clientY > 232) {
            return
        }
        if (data.eleType) {
            console.log(ele, data);
            if (data.edit) {
                const temp = [...ele];
                temp[data.index] = data
                setEle(temp)
            } else {
                const temp = [...ele, data];
                setEle(temp)
            }

        }

    }
    useImperativeHandle(ref, () => ({
        // changeVal 就是暴露给父组件的方法
        createEle,ele
    }));
    const eleFocus = (e: React.FocusEvent<HTMLInputElement, Element>, obj: { type: any; index: number; }) => {
        props.setFocusProps(obj)
    }
    return (
        <React.Fragment>
            <div id='desk' className={styles.desktop}>
                <div id='appke' className="searchFrame">
                    我是搜索栏
                    <Form
                        labelCol={{ span: 2 }}
                        wrapperCol={{ span: 4 }}
                    >
                        {ele.map((item: any, index: number) => {
                            if (item.eleType === 'Input')
                                return (
                                    <FormItem key={item.end.clientX} label={item.label}>
                                        {item.edit ? <Input
                                            onFocus={(e) => eleFocus(e, { type: item.eleType, index })}
                                            placeholder={item.placeholder}
                                        /> : <Input onFocus={(e) => eleFocus(e, { type: item.eleType, index })} style={{ position: 'absolute', left: item.end.clientX - item.start.nativeEvent.offsetX, top: item.end.clientY - item.start.nativeEvent.offsetY, width: '200px', display: item.edit ? 'none' : 'block' }} />}
                                    </FormItem>
                                )
                        })}

                    </Form>

                </div>


                <div className="tableFrame">
                    我是表格
                </div>


            </div>

        </React.Fragment>
    )
}

export default forwardRef(DeskTop)