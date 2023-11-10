import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import useTranslation from '../../hooks/useTranslate/useTranslation';

import { getDocById } from '../../constants/firebase';

function ProjectDetailPage() {
    const [detailProject, setDetailProject] = useState<any>({});
    const [isLoadingProject, setIsLoadingProject] = useState(false);
    const { id } = useParams();
    const { t } = useTranslation();

    useEffect(() => {
        setIsLoadingProject(true);

        getDocById("projects", id).then((res) => {
            setDetailProject(res);
            setIsLoadingProject(false);
        })
            .catch((err) => console.log(err))
            .finally(() => {
                setIsLoadingProject(false);
            });
    }, [])

    return (
        <div>
            {isLoadingProject ? <p>Đang tải</p> : <div>
                <h2 className="md-uppercase md-fw-700 md-fs-16 md-mb-4">{t('name')}</h2>
                <p className="md-mb-10">{detailProject.project_name}</p>

                <h2 className="md-uppercase md-fw-700 md-fs-16 md-mb-4">{t('tag')}</h2>
                <div className="md-d-flex md-mb-10">
                    {detailProject?.project_tag?.map((tag: any, idx: any) => {
                        return <p className="md-mb-0 md-mr-4" key={idx}>#{tag}</p>
                    })}
                </div>

                <h2 className="md-uppercase md-fw-700 md-fs-16 md-mb-4">{t('project_year')}</h2>
                <p className="md-mb-10">{detailProject.project_year}</p>
            </div>}
        </div>
    )
}

export default ProjectDetailPage