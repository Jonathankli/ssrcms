import React from 'react';
import ComponentTree from './ComponentTree';

const Template = (props) => {
    return ( 
        <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{props.title}</title>
        </head>
        <body> 
            {props.cmsObjects?.map?.(object => <ComponentTree key={object.id} cmsObject={object} data={props.data} />)}
        </body>
        </html>
    );
}
 
export default Template;