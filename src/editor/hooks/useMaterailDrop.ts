import { useDrop } from "react-dnd";
import { useComponentConfigStore } from "../stores/component-config";
import { getComponentById, useComponentsStore } from "../stores/components";

export interface ItemType {
  type: string;
  dragType?: 'move' | 'add',
  id: number
}

export function useMaterailDrop(accept: string[], id: number) {
    const { addComponent, deleteComponent, components } = useComponentsStore();
    const { componentConfig } = useComponentConfigStore();
    // 使用 useDrop 钩子来创建放置目标
    const [{ canDrop }, drop] = useDrop(() => ({
        accept,
        drop: (item: ItemType, monitor) => {
            const didDrop = monitor.didDrop()
            if (didDrop) {
              return;
            }

            if(item.dragType === 'move') {
              const component = getComponentById(item.id, components)!;


              // 先删除旧组件，再添加到新位置
              deleteComponent(item.id);

              addComponent(component, id)
            } else {
              const config = componentConfig[item.type];

              addComponent({
                id: new Date().getTime(),
                name: item.type,
                desc: config.desc,
                props: config.defaultProps
              }, id)
            }
        },
        collect: (monitor) => ({
          canDrop: monitor.canDrop(),
        }),
    }));

    return { canDrop, drop }
}
