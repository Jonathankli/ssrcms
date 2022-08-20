import * as ReactDOMServer from 'react-dom/server';
import * as React from 'react';
import Template from "./frontend/Template";

const rendererPage = (components, data, renderComponentTree = true): string => {

    const cmsObjects = components.map(comp => comp.object);

    const html = ReactDOMServer.renderToString(
        <Template data={data} cmsObjects={cmsObjects} renderComponentTree={renderComponentTree} />
    )

    return html;
    

}

export default rendererPage;