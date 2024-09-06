// import { Button as AntdButton } from 'antd';
// import { CommonComponentProps } from '../../interface';

// const Button = ({id, type, text, styles, ...props}: CommonComponentProps) => {
//   return (
//     <AntdButton type={type} style={styles} {...props}>{text}</AntdButton>
//   )
// }

// export default Button;


import React from 'react';
import { Button as AntdButton } from 'antd';
import { CommonComponentProps } from '../../interface';

// 使用 React.forwardRef 包装函数组件以支持 ref
const Button = React.forwardRef<HTMLButtonElement, CommonComponentProps>(
  ({ id, type, text, styles, ...props }, ref) => {
    return (
      <AntdButton
        ref={ref} // 将 ref 直接转发给 AntdButton 组件
        type={type}
        style={styles}
        {...props}
      >
        {text}
      </AntdButton>
    );
  }
);

export default Button;
