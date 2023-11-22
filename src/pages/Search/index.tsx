import { useState, useEffect } from "react";
import { getList } from "../../constants/firebase";

function Search(props: any) {
    const { keySearch } = props;
    const [tagExactly, setTagExactly] = useState<any>([]);
    const [result, setResult] = useState<any>([]);

    useEffect(() => {
        const promise1 = getList("projects");
        const promise2 = getList("explores");

        Promise.all([promise1, promise2]).then(res => {
            const mergeData = res.flat();

            const filterByKeySearch = mergeData.filter(y => {
                if (y.hasOwnProperty("project_tag")) {
                    return y.project_tag.includes(keySearch)
                } else {
                    return y.explore_tag.includes(keySearch)
                }
            });

            const mergeTags = mergeData.map(y => {
                if (y.hasOwnProperty("project_tag")) {
                    return y.project_tag;
                } else {
                    return y.explore_tag;
                }
            }).flat();

            const filterTagExactly = mergeTags.filter(t => t.includes(keySearch))

            console.log({
                filterByKeySearch
            })
            setTagExactly(filterTagExactly)
            setResult(filterByKeySearch)
        }).catch(error => {
            console.log(error)
        })
    }, [keySearch])

    return (
        <div>
            <div className="md-d-flex md-wrap">
                {tagExactly.map((y: any, idx: any) => {
                    return <h3 key={idx} className="md-mr-4">#{y}</h3>
                })}
            </div>

            <div>
                {result.map((item: any, id: any) => {
                    return <p className="" key={id}>{item.hasOwnProperty("project_name") ? item.project_name : item.explore_name}</p>
                })}
            </div>
        </div>
    )
}

export default Search