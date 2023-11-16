import { useState, useEffect } from "react"
import GridSystem from "../../components/Grid"
import { getList } from "../../constants/firebase";
import { SkeletonList } from "../../components/SkeletonLoading";

function ProjectPage() {
    const [listProject, setListProject] = useState([]);
    const [isLoadingList, setIsLoadingList] = useState(false);

    useEffect(() => {
        setIsLoadingList(true)

        getList("projects")
            .then((res) => {
                setListProject(res);
                setIsLoadingList(false);
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setIsLoadingList(false);
            });
    }, [])

    return (
        <div className="related-posts_group">
            {isLoadingList ? <SkeletonList numberItems={10} /> : <GridSystem list={listProject} type={"project"} />}
        </div>
    )
}

export default ProjectPage