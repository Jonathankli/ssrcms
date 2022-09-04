import axios from 'axios';
import React, { useCallback, useEffect, useMemo } from 'react';
import ComponentTree from './components/ComponentTree';
import cmsObjects from "../cmsobjects/index";
import crsObjects from '../cmsobjects/crs';
import CrsWrapper from './components/CrsWrapper';

declare global {
    interface Window {
        initCmsObjectTree: Object
    }
}

export const PageContext = React.createContext({navigate: path => {}, data: {}});

const PageContainerCrs = (props) => {

    const {
        initCmsObjectTree
    } = props;

    const [ cmsObjectTree, setCmsObjectTree ] = React.useState(initCmsObjectTree || window?.initCmsObjectTree);

    useEffect(() => {
        window.history.replaceState({ 
            cmsObjectTree
        }, "");
        const onChange = event => {
            setCmsObjectTree(event.state.cmsObjectTree);
        }
        addEventListener('popstate', onChange);
        return () => removeEventListener('popstate', onChange);
    }, [])

    const navigate = useCallback(async path => {
        const response = await axios.get("/api/pageData/csr", {
            params: {
                path: "/csr"+path
            }
        });
        if(response.data.status !== "success") {
            console.error("Page not found");
            return;            
        }
        
        setCmsObjectTree(response.data.data.components);

        document.title = response.data.data.title;

        const nextURL = window.location.origin+"/csr"+path;
        const nextTitle = response.data.data.pageData?.title;
        const nextState = { 
            cmsObjectTree: response.data.data.components
        };

        window.history.pushState(nextState, nextTitle, nextURL);
    }, [setCmsObjectTree])

    const _cmsObjects = useMemo(() => {
        const objects = {...cmsObjects};
        crsObjects.forEach(obj => {
            objects[obj] = {
                ...objects[obj],
                default: props => <CrsWrapper {...props} object={cmsObjects[obj]} />
            };
        });
        return objects;
    }, [])

    return (
        <PageContext.Provider value={{data: {}, navigate}}>
            { cmsObjectTree.map?.(child => <ComponentTree key={child.id} cmsObject={child} cmsObjects={_cmsObjects}/>)}
        </PageContext.Provider>
    )
}
 
export default PageContainerCrs;