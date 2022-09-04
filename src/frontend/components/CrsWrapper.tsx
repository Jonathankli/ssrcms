import React, { useEffect, useState } from 'react';

const CrsWrapper = (props) => {

    const {
        object,
        settings
    } = props;

    const Component = object.default;
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetcher = object.getSsrData || object.getSsgData;
        if(fetcher) {
            fetcher(settings).then(setData).finally(setIsLoading.bind(this, false));
            return;
        }
        setIsLoading(false);
    }, [])

    if(isLoading) {
        return null;
    }

    return <Component {...props} data={data} />
}
 
export default CrsWrapper;