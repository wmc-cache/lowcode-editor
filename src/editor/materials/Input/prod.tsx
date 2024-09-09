import { Input as AntdInput } from 'antd';
import { CommonComponentProps } from '../../interface';


const Input = ({ id, type, styles }: CommonComponentProps) => {



    return (
        <AntdInput data-component-id={id} type={type} style={styles}></AntdInput>
    )
}

export default Input;