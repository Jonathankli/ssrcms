import ReactDOMServer from 'react-dom/server';
import React from 'react';
import Template from "../frontend/Template";

const rendererPage = (components, data, title, renderComponentTree = true): string => {

    const html = ReactDOMServer.renderToString(
        <Template data={data} cmsObjects={components} title={title} renderComponentTree={renderComponentTree} />
    )

    return "<!DOCTYPE html>" + html;
    

}

export default rendererPage;