import { useState, useEffect } from "react"
import GridSystem from "../../components/Grid"
import { getList } from "../../constants/firebase";
import { SkeletonList } from "../../components/SkeletonLoading";

function ExplorePage() {
    const [listExplore, setListExplore] = useState([]);
    const [isLoadingList, setIsLoadingList] = useState(false);

    useEffect(() => {
        setIsLoadingList(true)

        getList("explores")
            .then((res) => {
                setListExplore(res)
                setIsLoadingList(false);
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setIsLoadingList(false);
            });
    }, []);

    return (
        <div className="related-posts_group">
            {isLoadingList ? <SkeletonList numberItems={10} /> : <GridSystem list={listExplore} type={"explore"} />}
        </div>
    )
}

export default ExplorePage