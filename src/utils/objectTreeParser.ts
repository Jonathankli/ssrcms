import cmsObjects from "../cmsobjects";

export enum ParseType{
    PUBLISH,
    REQUEST,
    CSR
}

export type PublishObjectDTO = {
    object: any,
    type: ParseType,
    usesSsr: boolean,
    usesSsg: boolean,
    usesIsr: boolean,
    initData: {[key: string]: any},
    data: {[key: string]: any}
}

const parseObject = (dto: PublishObjectDTO): PublishObjectDTO => {
    const reactComponent = cmsObjects[dto.object.type];

    if(dto.type != ParseType.CSR) {
        if(dto.type == ParseType.PUBLISH && reactComponent.getSsgData) {
            dto.data[dto.object.id] = {
                data: reactComponent.getSsgData(dto.object.settings),
                validUntill: reactComponent.isrTimeliness ? (new Date((new Date).getTime() + reactComponent.isrTimeliness * 1000)).getTime() : 0
            };
        }
        if(dto.type == ParseType.REQUEST) {        
            if(dto.initData[dto.object.id]?.validUntill && (new Date).getTime() - dto.initData[dto.object.id]?.validUntill > 0) {
                dto.data[dto.object.id] = {
                    data: reactComponent.getSsgData(dto.object.settings),
                    validUntill: (new Date((new Date).getTime() + reactComponent.isrTimeliness * 1000)).getTime()
                };
            }
            if(reactComponent.getSsrData) {
                dto.data[dto.object.id] = {
                    data: reactComponent.getSsrData(dto.object.settings),
                    validUntill: 0
                };
            }            
        }
    }

    dto.usesSsg ||= !!reactComponent.getSsgData;
    dto.usesSsr ||= !!reactComponent.getSsrData;
    dto.usesIsr ||= !!reactComponent.isrTimeliness;

    if(dto.object.children?.length) {
        dto.object.children = dto.object.children.map(child => {
            const parsed = parseObject({ ...dto, object: child });
            dto.usesSsg ||= parsed.usesSsg;
            dto.usesSsr ||= parsed.usesSsr;
            dto.data = {
                ...dto.data,
                ...parsed.data
            };
            return parsed.object;
        });
    }

    return dto;
}

const parseObjectTree = async (root, type: ParseType = ParseType.PUBLISH, initData = {}) => {
    let data: {[key: string]: any} = {};
    let usesSsg = false;
    let usesSsr = false;
    let usesIsr = false;

    const components: PublishObjectDTO[] = root.children.map(object => {
        const parsed = parseObject({
            object,
            type,
            initData,
            data: {},
            usesSsg: false,
            usesSsr: false,
            usesIsr: false,
        });
        data = {
            ...data,
            ...parsed.data
        };
        usesSsg ||= parsed.usesSsg;
        usesSsr ||= parsed.usesSsr;
        usesIsr ||= parsed.usesIsr;
        
        return parsed.object;
    });
    
    let dataResolved = await Promise.all(Object.values(data).map(d => d.data));
    const dataKeys = Object.keys(data);
    
    data = dataResolved.reduce((acc, objData, index) => {    
        acc[dataKeys[index]] = {
            data: objData,
            validUntill: data[dataKeys[index]].validUntill
        };
        return acc;
    }, {});
    
    return {
        data,
        components,
        usesSsg,
        usesSsr,
        usesIsr,
    }

}

export default parseObjectTree;