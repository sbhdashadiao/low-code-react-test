import React, { useEffect, useState } from 'react';
import { Input, Modal, Button, message, Form } from 'antd';
import {useRecoilState} from 'recoil'
import {jsonData} from '../../../store'
import styles from './index.less';


const FormItem = Form.Item
interface TypeProps {
    createEle: (e: any) => void,
    ele:any,
    focusProps: any
}
function ComponentType(props: TypeProps) {
    const [form] = Form.useForm();
    const [,setJsonData]=useRecoilState(jsonData)
    const [eleType, setEleType] = useState({})
    const [modalVisible, setVisible] = useState(false)
    const componentDropEnd = (e: any) => {

        const obj = Object.assign({}, { end: e }, eleType)
        setEleType(obj)
        props.createEle(obj)
    }
    const componentDropStart = (e: React.DragEvent<HTMLInputElement>, eleType: string) => {
        const type = {
            eleType,
            start: e
        }
        setEleType(type)
    }
    const addActions = () => {
        if (JSON.stringify(props.focusProps) === '{}') {
            message.info('请先拖拽创建组件')
            return
        }
        setVisible(true)
    }

    const preview = () => {
        setJsonData(props.ele)
    }



    const onSubmit = () => {

        const value = form.getFieldsValue()
        const obj = Object.assign({}, eleType, value, { edit: true }, props.focusProps)
        props.createEle(obj)
        setVisible(false)

    }

    useEffect(() => {
        console.log('=====', props.focusProps);
    }, [props.focusProps])
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
                                width={100}
                                onDragEnd={componentDropEnd}
                                onDragStart={(e) => componentDropStart(e, 'Input')}
                                disabled
                                draggable
                            />
                        </div>
                    </div>
                </div>

                <h1 className='title'>操作</h1>
                <Button onClick={addActions}>增加操作</Button>
                <Button onClick={preview}>预览</Button>
                <Modal visible={modalVisible}
                    onCancel={() => setVisible(false)}
                    onOk={onSubmit}

                >
                    <Form
                        form={form}
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 8 }}>
                        <FormItem name={'label'} label='要增加的label'>
                            <Input width={100} />

                        </FormItem>
                        <FormItem name={'placeholder'} label='要增加的placeholder'>
                            <Input width={100} />
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        </React.Fragment>
    )
}

export default ComponentType