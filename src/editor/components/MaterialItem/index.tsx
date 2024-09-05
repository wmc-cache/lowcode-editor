import { useDrag } from "react-dnd";

export interface MaterialItemProps {
    name: string
    desc: string
}

export function MaterialItem(props: MaterialItemProps) {

    const {
        name,
        desc
    } = props;
    
    // 使用 useDrag 钩子来创建一个拖动源
    
    const [_, drag] = useDrag({
        type: name,
        item: {
            type: name
        }
    });

    return <div
        ref={drag}
        className='
            border-dashed
            border-[1px]
            border-[#593196]
            py-[8px] px-[10px] 
            m-[10px]
            cursor-move
            inline-block
            bg-white
            hover:bg-[#ccc]
        '
    >
        {desc}
    </div>
}