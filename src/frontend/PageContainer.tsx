import axios from 'axios';
import React, { useCallback, useEffect } from 'react';
import ComponentTree from './components/ComponentTree';

declare global {
    interface Window {
        initCmsObjectTree: Object;
        initData: Object;
    }
}

export const PageContext = React.createContext({navigate: path => {}, data: {}});

const PageContainer = (props) => {

    const {
        initCmsObjectTree,
        initData
    } = props;

    const [ cmsObjectTree, setCmsObjectTree ] = React.useState(initCmsObjectTree || window?.initCmsObjectTree);
    const [ data, setData ] = React.useState(initData || window?.initData);

    useEffect(() => {
        window.history.replaceState({ 
            cmsObjectTree,
            data
        }, "");
        const onChange = event => {
            setCmsObjectTree(event.state.cmsObjectTree);
            setData(event.state.data);
        }
        addEventListener('popstate', onChange);
        return () => removeEventListener('popstate', onChange);
    }, [])

    const navigate = useCallback(async path => {
        const response = await axios.get("/api/pageData", {
            params: {
                path
            }
        });
        if(response.data.status !== "success") {
            console.error("Page not found");
            return;            
        }
        
        setCmsObjectTree(response.data.data.components);
        setData(response.data.data.pageData);

        const nextURL = 'http://localhost:3000'+path;
        const nextTitle = response.data.data.pageData?.title;
        const nextState = { 
            cmsObjectTree: response.data.data.components,
            data: response.data.data.pageData
        };

        window.history.pushState(nextState, nextTitle, nextURL);
    }, [setCmsObjectTree, setData])
    

    return (
        <PageContext.Provider value={{data, navigate}}>
            { cmsObjectTree.map?.(child => <ComponentTree key={child.id} cmsObject={child} data={data} />)}
        </PageContext.Provider>
    )
}
 
export default PageContainer;