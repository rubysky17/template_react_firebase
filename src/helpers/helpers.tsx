export const decodeURL = (url: string) => {
    return decodeURI(url)
}

export const dimensionURL: any = (url: string) => {
    const findOpenBracket = decodeURL(url).indexOf("[");
    const findCloseBracket = decodeURL(url).indexOf("]");

    const slideWAndH = decodeURL(url).slice(findOpenBracket + 1, findCloseBracket);
    const spliceWAndH = slideWAndH.split("x")

    return {
        width: spliceWAndH[0],
        height: spliceWAndH[1]
    }
};

export const uniq = (array: any, key: string) => {
    const result = array.reduce((accumulator: any, current: any) => {
        let exists = accumulator.find((item: any) => {
            return item[key] === current[key];
        });

        if (!exists) {
            accumulator = accumulator.concat(current);
        }

        return accumulator;
    }, []);

    return result
}

export function uniqArr(a: any) {
    let newArr = a.filter(
        (item: any, index: any) =>
            a.indexOf(item) === index && item !== null && item !== undefined,
    );

    return newArr;
}