import React from 'react';
import ComponentTree from './ComponentTree';

declare global {
    interface Window {
        cmsObjectTree: Object;
        cmsPageData: Object;
    }
  }

const PageContainer = (props) => {

    const {
        cmsObjects,
        data
    } = props;

    let _cmsObjects = cmsObjects || window?.cmsObjectTree;
    let _data = data || window?.cmsPageData;
    
    return _cmsObjects.map?.(child => <ComponentTree key={child.id} cmsObject={child} data={_data} />);
}
 
export default PageContainer;