import { useState, useEffect } from "react"
import GridSystem from "../../components/Grid"
import { getList } from "../../constants/firebase";

function ProjectPage() {
    const [listProject, setListProject] = useState([]);
    const [IsLoadingList, setIsLoadingList] = useState(false);

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
            <GridSystem list={listProject} />
        </div>
    )
}

export default ProjectPage