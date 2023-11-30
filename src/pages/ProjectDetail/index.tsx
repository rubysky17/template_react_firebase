import { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import useTranslation from '../../hooks/useTranslate/useTranslation';
import useWindowDimensions from '../../hooks/useWindowDimension/useWindowDimension';

import { getDocById } from '../../constants/firebase';
import Lightbox from 'yet-another-react-lightbox';


import "./styles.scss";
import { SkeletonProject } from '../../components/SkeletonLoading';
import moment from 'moment';
import { useStore } from '../../AppProvider/context/store';
import { buildQueryString } from '../../helpers/helpers';
import useHistory from '../../hooks/useHistory';

function ProjectDetailPage() {
    const { width } = useWindowDimensions();
    const [detailProject, setDetailProject] = useState<any>({});
    const [isLoadingProject, setIsLoadingProject] = useState(false);
    const [indexPicture, setIndexPicture] = useState(-1);
    const { dispatch, actions } = useStore();
    const { push } = useHistory();
    const location = useLocation();

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
    }, [id])

    return (
        <div>
            {isLoadingProject ? <div style={{
                paddingLeft: width > 768 ? "150px" : "0"
            }}><SkeletonProject /></div> : <div style={{
                paddingLeft: width > 768 ? "150px" : "0"
            }}>
                <h2 className="md-uppercase md-fw-700 md-fs-14 md-md-fs-16 md-mb-4">{t('name')}</h2>
                <p className="md-fs-12 md-md-fs-14 md-mb-10 md-font-primary md-fw-300">{detailProject.project_name}</p>

                <h2 className="md-uppercase md-fw-700 md-fs-14 md-md-fs-16 md-mb-4">{t('tag')}</h2>
                <div className="md-d-flex md-wrap md-mb-10">
                    {detailProject?.project_tag?.map((tag: any, idx: any) => {
                        return <p className="md-fs-12 md-md-fs-14 md-mb-0 md-mr-4 md-font-primary md-fw-300 md-cursor-pointer" key={idx} onClick={() => {
                            dispatch(actions.setKeySearch(tag));
                            const queryParam = buildQueryString({
                                key: tag
                            })
                            push(`${location.pathname}${queryParam}`);
                        }}>#{tag}</p>
                    })}
                </div>

                <h2 className="md-uppercase md-fw-700 md-fs-14 md-md-fs-16 md-mb-4">{t('project_year')}</h2>
                <p className="md-fs-12 md-md-fs-14 md-mb-10 md-font-primary md-fw-300">{moment(detailProject.project_year).format("DD/MM/YYYY")}</p>

                <div className="md-row" style={{
                    marginRight: '-10px',
                    marginLeft: '-10px',
                }}>
                    {detailProject.project_collection?.map((imgSrc: any, idx: any) => {
                        return <div style={{
                            aspectRatio: '1 / 1',
                        }} className="md-p-10 md-project-detail-picture" key={idx} onClick={() => {
                            setIndexPicture(idx)
                        }}>
                            <img src={imgSrc} style={{
                                width: '100%',
                                height: '100%',
                            }} alt="img_detai_project" className="md-cursor-pointer " />
                        </div>
                    })}
                </div>

                <Lightbox open={indexPicture !== -1 ? true : false}
                    close={() => setIndexPicture(-1)}
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