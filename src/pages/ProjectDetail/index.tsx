import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import useTranslation from '../../hooks/useTranslate/useTranslation';

import { getDocById } from '../../constants/firebase';
import Lightbox from 'yet-another-react-lightbox';

function ProjectDetailPage() {
    const [detailProject, setDetailProject] = useState<any>({});
    const [isLoadingProject, setIsLoadingProject] = useState(false);
    const [indexPicture, setIndexPicture] = useState(0);

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

                <div className="md-row" style={{
                    marginRight: '-10px',
                    marginLeft: '-10px',
                }}>
                    {detailProject.project_collection?.map((imgSrc: any, idx: any) => {
                        return <div style={{
                            width: `calc(100% / 5)`,
                            aspectRatio: '1 / 1',
                        }} className="md-p-10" key={idx} onClick={() => {
                            setIndexPicture(idx)
                        }}>
                            <img src={imgSrc} style={{
                                width: '100%',
                                height: '100%',
                            }} />
                        </div>
                    })}
                </div>

                <Lightbox open={indexPicture !== 0 ? true : false}
                    close={() => setIndexPicture(0)}
                    slides={detailProject?.project_collection?.map((t: any) => {
                        return { src: t }
                    })}
                    index={indexPicture}
                />
            </div>}
        </div>
    )
}

export default ProjectDetailPage