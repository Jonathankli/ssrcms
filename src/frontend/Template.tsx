import React from 'react';
import PageContainer from './PageContainer';

const Template = (props) => {
    
    let contetnt = <div id="root"></div>

    const data = {};
    Object.keys(props.data).forEach(key => {
        data[key] = props.data[key].data;
    });

    if(props.renderComponentTree) {
        contetnt = <div id="root"><PageContainer initCmsObjectTree={props.cmsObjects} initData={data}/></div>
    }
    
    return ( 
        <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="google-site-verification" content="uLDMexM5FOjq6ROMOoAobeAsUQO9XVaZcNH0nLJX89I" />
            <title>{props.title}</title>
            <meta name="description" content={props.metaDescription || "Bachelor Test App"} />
            <script dangerouslySetInnerHTML={{ __html: `var initCmsObjectTree = ${JSON.stringify(props.cmsObjects)};`}}></script>
            <script dangerouslySetInnerHTML={{ __html: `var initData = ${JSON.stringify(data)};`}}></script>
            <script defer src='assets/bundle.js' />
        </head>
        <body style={{margin: 0, padding: 0}}> 
            {contetnt}
        </body>
        </html>
    );
}
 
export default Template;