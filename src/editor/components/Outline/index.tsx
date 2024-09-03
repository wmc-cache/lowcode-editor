import { Tree } from "antd";
import { useComponetsStore } from "../../stores/components";

export function Outline() {
    const { components, setCurComponentId } = useComponetsStore();

    console.log("components", components)

    return <Tree
        fieldNames={{ title: 'desc', key: 'id' }}
        treeData={components as any}
        showLine
        defaultExpandAll
        onSelect={([selectedKey]) => {
            setCurComponentId(selectedKey as number);
        }}
    />
}