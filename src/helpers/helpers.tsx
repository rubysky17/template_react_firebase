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


export const urlencode = (str: any) => {
    str = (str + "").toString();

    // Tilde should be allowed unescaped in future versions of PHP (as reflected below), but if you want to reflect current
    // PHP behavior, you would need to add ".replace(/~/g, '%7E');" to the following.
    return encodeURIComponent(str)
        .replace(/!/g, "%21")
        .replace(/'/g, "%27")
        .replace(/\(/g, "%28")
        .replace(/\)/g, "%29")
        .replace(/\*/g, "%2A")
        .replace(/%20/g, "+");
};


export const buildQueryString = (
    queries: any,
    whiteList: any = [],
    bridgeSign: string = "?",
) => {
    const queryString: any = [];
    const checkWhitelist: boolean = whiteList.length > 0 ? true : false;
    Object.keys(queries).forEach((prop) => {
        if (queries[prop] !== "") {
            if (checkWhitelist) {
                if (whiteList.includes(prop)) {
                    queryString.push(urlencode(prop) + "=" + urlencode(queries[prop]));
                }
            } else {
                queryString.push(urlencode(prop) + "=" + urlencode(queries[prop]));
            }
        }
    });

    return queryString.length > 0 ? `${bridgeSign}${queryString.join("&")}` : "";
};
