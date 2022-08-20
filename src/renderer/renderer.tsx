import * as ReactDOMServer from 'react-dom/server';
import * as React from 'react';
import Template from "./frontend/Template";

const rendererPage = (components, data): string => {

    const cmsObjects = components.map(comp => comp.object);

    const html = ReactDOMServer.renderToString(
        <Template data={data} cmsObjects={cmsObjects} />
    )

    return html;
    

}

export default rendererPage;