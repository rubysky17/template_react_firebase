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
}