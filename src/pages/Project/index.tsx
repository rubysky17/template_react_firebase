import { useState, useEffect } from "react"
import GridSystem from "../../components/Grid"
import { getList } from "../../constants/firebase";

function ProjectPage() {
    const [listProject, setListProject] = useState([]);
    const [isLoadingList, setIsLoadingList] = useState(false);

    useEffect(() => {
        setIsLoadingList(true)

        getList("projects")
            .then((res) => {
                setListProject(res)
                setIsLoadingList(false);
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setIsLoadingList(false);
            });
    }, [])

    return (
        <div className="related-posts_group">
            {isLoadingList ? <p>Đang tải</p> : <GridSystem list={listProject} type={"project"} />}
        </div>
    )
}

export default ProjectPage