import { useMemo } from "react";
import { useComponentConfigStore } from "../../stores/component-config";
import { MaterialItem } from "../MaterialItem";

export function Material() {
    const { componentConfig } = useComponentConfigStore();


    // useMemo 用于在 componentConfig 发生变化时重新计算 components。
    //如果 componentConfig 未发生变化，useMemo 将返回上一次计算的结果，从而避免不必要的计算和重新渲染。

    const components = useMemo(() => {
        return Object.values(componentConfig).filter(item => item.name !== 'Page');
    }, [componentConfig]);

    return <div>{
        components.map((item, index) => {
            return <MaterialItem name={item.name} desc={item.desc} key={item.name + index} />
        })
    }</div>
}