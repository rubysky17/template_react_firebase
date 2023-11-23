import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useWindowDimension from "../../hooks/useWindowDimension/useWindowDimension";

import { getList } from "../../constants/firebase";
import { uniq, uniqArr } from "../../helpers/helpers";
import { useStore } from "../../AppProvider/context/store";

function Search(props: any) {
    const { dispatch, actions } = useStore();
    const { keySearch } = props;
    const [tagExactly, setTagExactly] = useState<any>([]);
    const [result, setResult] = useState<any>([]);
    const navigate = useNavigate();
    const { width } = useWindowDimension();

    useEffect(() => {
        const promise1 = getList("projects");
        const promise2 = getList("explores");

        Promise.all([promise1, promise2]).then(res => {
            const keySearchArray = keySearch.split(",");
            const mergeData = res.flat();

            const getAllTags = mergeData.map(data => {
                if (data.hasOwnProperty("project_tag")) {
                    return data.project_tag
                } else {
                    return data.explore_tag
                }
            })

            let flatAllTags = getAllTags.flat()
            let finalTagExactly: any = [];
            let finalResult: any = []

            keySearchArray.forEach((value: any) => {
                let key = value.trim();
                let result = flatAllTags.filter(item => key.length && item.includes(key));

                let resultProject = mergeData.filter(y => {

                    if (y?.hasOwnProperty("project_tag")) {
                        let indexKey = y.project_tag.findIndex((item: any) => key.length && item.includes(key));
                        return indexKey !== -1
                    } else {
                        let indexKey = y.explore_tag.findIndex((item: any) => key.length && item.includes(key));
                        return indexKey !== -1
                    }
                });

                finalTagExactly = [...finalTagExactly, ...result]
                finalResult = [...finalResult, ...resultProject]
            });

            // ! Làm sạch mảng
            finalResult = uniq(finalResult, "id");
            finalTagExactly = uniqArr(finalTagExactly);

            setTagExactly(finalTagExactly);
            setResult(finalResult);
        }).catch(error => {
            console.log(error)
        })
    }, [keySearch])

    return (
        <div style={{
            paddingLeft: width > 768 ? "150px" : "0",
            marginTop: 20
        }}>
            <div className="md-d-flex md-wrap">
                {tagExactly.map((y: any, idx: any) => {
                    return <h3 key={idx} className="md-mr-4 md-fs-26 md-font-primary md-fw-500 md-mb-8">#{y}</h3>
                })}
            </div>

            <div>
                {result.map((item: any, id: any) => {
                    return <p className="md-uppercase md-mb-4 md-cursor-pointer md-fw-300" key={id} onClick={() => {
                        dispatch(actions.setKeySearch(""))
                        navigate(`/${item.hasOwnProperty("project_name") ? 'project' : "explore"}/${item.id}`)
                    }}>{item.hasOwnProperty("project_name") ? item.project_name : item.explore_name}</p>
                })}
            </div>
        </div>
    )
}

export default Search