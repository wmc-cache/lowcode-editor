import React, { useRef } from "react";
import { useComponentConfigStore } from "../../stores/component-config";
import { Component, useComponentsStore } from "../../stores/components"
import { message } from "antd";
import { ActionConfig } from "../Setting/ActionModal";

export function Preview() {
    const { components } = useComponentsStore();
    const { componentConfig } = useComponentConfigStore();

    const componentRefs = useRef<Record<string, any>>({});

    function handleEvent(component: Component) {
        const props: Record<string, any> = {};
        const componentEvents = componentConfig[component.name]?.events || [];

        componentEvents.forEach((event) => {
          
            const eventConfig = component.props?.[event.name];
            if (eventConfig) {
                props[event.name] = (...args: any[]) => {
                    eventConfig?.actions?.forEach((action: ActionConfig) => {
                        switch (action.type) {
                            case 'customJS':
                                const func = new Function('context', 'args', action.code);
                                console.log("component", component)
                                console.log("args", args)
                                func({
                                    name: component.name,
                                    props: component.props,
                                    showMessage: message.success,
                                }, args);
                                break;
                        }
                    });
                };
            }

            console.log("props", props)
        });

        return props;
    }


    function renderComponents(components: Component[]): React.ReactNode {
        return components.map((component: Component) => {
            const config = componentConfig?.[component.name]

            if (!config?.prod) {
                return null;
            }

            return React.createElement(
                config.prod,
                {
                    key: component.id,
                    id: component.id,
                    name: component.name,
                    styles: component.styles,
                    ref: (ref: Record<string, any>) => { componentRefs.current[component.id] = ref; },
                    ...config.defaultProps,
                    ...component.props,
                    ...handleEvent(component)
                },
                renderComponents(component.children || [])
            )
        })
    }

    return <div>
        {renderComponents(components)}
    </div>
}