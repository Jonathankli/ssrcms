import ReactDOMServer from 'react-dom/server';
import React from 'react';
import Helmet from "react-helmet";
import PageContainer from '../frontend/PageContainer';

const rendererPage = (components, data, title): string => {

    const _data = {};
    Object.keys(data).forEach(key => {
        _data[key] = data[key].data;
    });

    const appHtml = ReactDOMServer.renderToString(
        <>
            <Helmet
                bodyAttributes={{
                    style: "padding: 0; margin: 0;"
                }}
            >
                <title>{title}</title>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <script defer src='assets/bundle.js' />
            </Helmet>
            <PageContainer initCmsObjectTree={components} initData={_data}/>
        </>
    )
    const helmet = Helmet.renderStatic();

    const html = `
        <!doctype html>
        <html ${helmet.htmlAttributes.toString()}>
            <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                ${helmet.link.toString()}
                <script>
                    var initData = ${JSON.stringify(_data)};
                    var initCmsObjectTree = ${JSON.stringify(components)};
                </script>
                ${helmet.script.toString()}
            </head>
            <body ${helmet.bodyAttributes.toString()}>
                <div id="root">
                    ${appHtml}
                </div>
            </body>
        </html>
    `;

    return html;
    

}

export default rendererPage;