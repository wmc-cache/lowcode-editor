// import { CommonComponentProps } from "../../interface";

// function Page({ children, styles }: CommonComponentProps) {

//     return (
//         <div
//             className='p-[20px]'
//             style={{ ...styles }}
//         >
//             {children}
//         </div>
//     )
// }

// export default Page;

import React from "react";
import { CommonComponentProps } from "../../interface";

// 使用 React.forwardRef 包装组件以支持 ref
const Page = React.forwardRef<HTMLDivElement, CommonComponentProps>(
    ({ children, styles }, ref) => {
        return (
            <div
                ref={ref} // 将 ref 转发给 div 元素
                className='p-[20px]'
                style={{ ...styles }}
            >
                {children}
            </div>
        );
    }
);

export default Page;
