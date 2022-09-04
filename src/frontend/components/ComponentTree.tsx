import React from 'react';
import cmsObjects from "../../cmsobjects/index";
import useCmsObjectData from '../hooks/useCmsObjectData';

const ComponentTree = (props) => {

    const {
        cmsObject,
        cmsObjects
    } = props;

    const Component = cmsObjects[cmsObject.type]?.default
    const data = useCmsObjectData(cmsObject.id);

    return ( 
        <Component 
            data={data}
            settings={cmsObject.settings}
            id={cmsObject.id}
        >
            {cmsObject.children?.map?.(child => <ComponentTree key={child.id} cmsObject={child} cmsObjects={cmsObjects} />)}
        </Component>
    );
}
 
export default ComponentTree;