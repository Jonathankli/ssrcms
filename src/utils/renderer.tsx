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
        <div id="root">
            <Helmet
                bodyAttributes={{
                    style: "padding: 0; margin: 0;",
                }}
                htmlAttributes={{
                    lang: "de",
                }}
            >
                <title>{title}</title>
            </Helmet>
            <PageContainer initCmsObjectTree={components} initData={_data}/>
        </div>
    )
    const helmet = Helmet.renderStatic();

    const html = `
        <!doctype html>
        <html ${helmet.htmlAttributes.toString()}>
            <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                ${helmet.link.toString()}
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <script>
                    var initData = ${JSON.stringify(_data)};
                    var initCmsObjectTree = ${JSON.stringify(components)};
                </script>
                <script defer src='assets/bundle.js'></script>
            </head>
            <body ${helmet.bodyAttributes.toString()}>
                ${appHtml}
            </body>
        </html>
    `;

    return html;
    

}

export default rendererPage;