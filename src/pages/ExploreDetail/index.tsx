import { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import useTranslation from '../../hooks/useTranslate/useTranslation';

import { getDocById } from '../../constants/firebase';
import Lightbox from 'yet-another-react-lightbox';
import { SkeletonExplore } from '../../components/SkeletonLoading';
import { buildQueryString } from '../../helpers/helpers';
import useHistory from '../../hooks/useHistory';
import { useStore } from '../../AppProvider/context/store';
import AspectRatioContainer from '../../components/AspectRatio';

function ExploreDetailPage() {
    const [detailExplore, setDetailExplore] = useState<any>({});
    const [isLoadingExplore, setIsLoadingExplore] = useState(false);
    const [indexPicture, setIndexPicture] = useState(-1);

    const { push } = useHistory();
    const location = useLocation();
    const { dispatch, actions } = useStore();

    const { id } = useParams();
    const { t } = useTranslation();

    useEffect(() => {
        setIsLoadingExplore(true);

        getDocById("explores", id).then((res) => {
            setDetailExplore(res);
            setIsLoadingExplore(false);
        })
            .catch((err) => console.log(err))
            .finally(() => {
                setIsLoadingExplore(false);
            });
    }, [id])

    return (
        <div>
            {
                isLoadingExplore ?
                    <div className="md-row md-px-10 md-md-px-60">
                        <SkeletonExplore />
                    </div> :

                    <div className="md-row md-px-10 md-md-px-60">
                        <div className="md-col-12">
                            <img src={detailExplore.explore_banner} alt="explore_banner" style={{
                                height: "30vh",
                                width: '100%',
                                objectFit: "cover"
                            }} />
                        </div>

                        <div className="md-mt-20 md-col-12">
                            <h2 className="md-uppercase md-fw-500 md-fs-14 md-md-fs-16 md-mb-4 md-font-primary">{t('tag')}</h2>

                            <div className="md-d-flex md-mb-10">
                                {detailExplore?.explore_tag?.map((tag: any, idx: any) => {
                                    return <p className="md-fs-14 md-md-fs-16 md-mb-0 md-mr-4 md-font-primary md-fw-100" key={idx} onClick={() => {
                                        dispatch(actions.setKeySearch(tag));

                                        const queryParam = buildQueryString({
                                            key: tag
                                        })
                                        push(`${location.pathname}${queryParam}`);
                                    }}>#{tag}</p>
                                })}
                            </div>
                        </div>

                        <div className="md-col-12 md-md-col-6 md-pr-30 md-mb-30 md-md-mb-0">
                            <p className='md-fs-14 md-md-fs-16 md-mb-0 md-font-primary md-fw-100' style={{
                                lineHeight: "18px"
                            }} dangerouslySetInnerHTML={{
                                __html: detailExplore?.explore_description
                            }}></p>
                        </div>

                        <div className="md-row md-col-12 md-md-col-6" style={{
                            marginTop: '-20px'
                        }}>
                            {detailExplore.explore_collection?.map((imgSrc: any, idx: any) => {
                                return <div style={{
                                    width: `calc(100% / 2)`,
                                }} className={`md-md-py-20 md-py-8 ${idx % 2 === 0 ? "md-md-pr-20 md-pr-8" : 'md-md-pl-20 md-pl-8'}`} key={idx} onClick={() => { setIndexPicture(idx) }}>
                                    <AspectRatioContainer aspectRatio={1 / 1}>
                                        <img src={imgSrc} style={{
                                            width: '100%',
                                            height: '100%',
                                        }} alt="img_detai_project" className="md-cursor-pointer " />
                                    </AspectRatioContainer>
                                </div>
                            })}
                        </div>
                    </div>
            }



            <Lightbox open={indexPicture !== -1 ? true : false}
                close={() => setIndexPicture(-1)}
                slides={detailExplore.explore_collection?.map((t: any) => {
                    return { src: t }
                })}
                index={indexPicture}
            />
        </div>
    )
}

export default ExploreDetailPage