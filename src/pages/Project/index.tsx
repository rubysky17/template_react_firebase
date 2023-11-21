import { useState, useEffect } from "react"
import GridSystem from "../../components/Grid"
import { getListWithOrderBy } from "../../constants/firebase";
import { SkeletonList } from "../../components/SkeletonLoading";

function ProjectPage() {
    const [listProject, setListProject] = useState([]);
    const [isLoadingList, setIsLoadingList] = useState(false);

    useEffect(() => {
        setIsLoadingList(true)

        getListWithOrderBy("projects", 'project_year', "desc")
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