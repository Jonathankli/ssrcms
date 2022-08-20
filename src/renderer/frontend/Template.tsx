import React from 'react';
import PageContainer from './PageContainer';

const Template = (props) => {
    
    let contetnt = <div id="root"></div>

    if(props.renderComponentTree) {
        contetnt = <div id="root"><PageContainer cmsObjects={props.cmsObjects} data={props.data}/></div>
    }
    
    return ( 
        <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{props.title}</title>
            <script dangerouslySetInnerHTML={{ __html: `var cmsObjectTree = ${JSON.stringify(props.cmsObjects)};`}}></script>
            <script dangerouslySetInnerHTML={{ __html: `var cmsPageData = ${JSON.stringify(props.data)};`}}></script>
            <script defer src='assets/bundle.js' />
        </head>
        <body> 
            {contetnt}
        </body>
        </html>
    );
}
 
export default Template;