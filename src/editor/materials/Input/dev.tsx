import { useRef, useEffect } from 'react';
import { Input as AntdInput, InputRef } from 'antd';
import { CommonComponentProps } from '../../interface';
import { useDrag } from 'react-dnd';

const Input = ({ id, type, text, styles }: CommonComponentProps) => {
    const inputRef = useRef<InputRef>(null);  // 创建一个 InputRef 的引用

    const [, drag] = useDrag(() => ({
        type: 'Input',
        item: {
            type: 'Input',
            dragType: 'move',
            id: id,
        },
    }));

    // 使用 useEffect 将拖拽逻辑连接到 ref
    useEffect(() => {
        if (inputRef.current) {
            drag(inputRef.current.input); // 直接将内部的 DOM 元素与 drag 连接
        }
    }, [drag]);

    return (
        <AntdInput
            ref={inputRef}
            data-component-id={id}
            type={type}
            style={styles}
            value={text}
        />
    );
};

export default Input;
