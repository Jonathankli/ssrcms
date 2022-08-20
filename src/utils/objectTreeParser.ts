import cmsObjects from "../cmsobjects";

export enum ParseType{
    SSG,
    SSR
}

export type PublishObjectDTO = {
    object: any,
    type: ParseType,
    usesSsr: boolean,
    usesSsg: boolean,
    data: {[key: string]: any}
}

const parseObject = (dto: PublishObjectDTO): PublishObjectDTO => {
    const reactComponent = cmsObjects[dto.object.type];
    
    dto.object.Component = reactComponent.default;
    dto.object.filepath = reactComponent.FILEPATH;

    if(dto.type == ParseType.SSG && reactComponent.getSsgData) {
        dto.data[dto.object.id] = reactComponent.getSsgData(dto.object.settings);
    }
    if(dto.type == ParseType.SSR && reactComponent.getSsrData) {
        dto.data[dto.object.id] = reactComponent.getSsrData(dto.object.settings);
    }
    
    dto.usesSsg ||= !!reactComponent.getSsgData;
    dto.usesSsr ||= !!reactComponent.getSsrData;

    if(dto.object.children?.length) {
        dto.object.children = dto.object.children.map(child => {
            return parseObject({ ...dto, object: child }).object;
        });
    }

    return dto;
}

const parseObjectTree = async (root, type: ParseType = ParseType.SSG) => {
    let data: {[key: string]: any} = {};
    let usesSsg = false;
    let usesSsr = false;

    const components: PublishObjectDTO[] = root.children.map(object => {
        const parsed = parseObject({
            object,
            type,
            data: {},
            usesSsg: false,
            usesSsr: false
        });
        data = {
            ...data,
            ...parsed.data
        };
        usesSsg ||= parsed.usesSsg;
        usesSsr ||= parsed.usesSsr;
        return parsed;
    });
    
    let dataResolved = await Promise.all(Object.values(data));
    const dataKeys = Object.keys(data);
    
    data = dataResolved.reduce((acc, data, index) => {
        acc[dataKeys[index]] = data;
        return acc;
    }, {});
    
    return {
        data,
        components,
        usesSsg,
        usesSsr
    }

}

export default parseObjectTree;