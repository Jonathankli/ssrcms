import React from 'react';

const ComponentTree = (props) => {

    const {
        cmsObject,
        data
    } = props;

    const objectData = data[cmsObject.id];

    return ( 
        <cmsObject.Component 
            data={objectData}
            settings={cmsObject.settings}
            id={cmsObject.id}
        >
            {cmsObject.children?.map?.(child => <ComponentTree key={child.id} cmsObject={child} />)}
        </cmsObject.Component>
    );
}
 
export default ComponentTree;