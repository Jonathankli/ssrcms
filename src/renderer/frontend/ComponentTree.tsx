import React from 'react';
import cmsObjects from "../../cmsobjects/index";

const ComponentTree = (props) => {

    const {
        cmsObject,
        data
    } = props;

    const objectData = data[cmsObject.id];
    const Component = cmsObjects[cmsObject.type]?.default
    

    return ( 
        <Component 
            data={objectData}
            settings={cmsObject.settings}
            id={cmsObject.id}
        >
            {cmsObject.children?.map?.(child => <ComponentTree key={child.id} cmsObject={child} />)}
        </Component>
    );
}
 
export default ComponentTree;