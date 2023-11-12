import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import useTranslation from '../../hooks/useTranslate/useTranslation';

import { getDocById } from '../../constants/firebase';
import Lightbox from 'yet-another-react-lightbox';

function ExploreDetailPage() {
    const [detailExplore, setDetailExplore] = useState<any>({});
    const [isLoadingExplore, setIsLoadingExplore] = useState(false);
    const [indexPicture, setIndexPicture] = useState(-1);

    const { id } = useParams();
    const { t } = useTranslation();

    useEffect(() => {
        setIsLoadingExplore(true);

        getDocById("explore", id).then((res) => {
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
                    <p>Đang tải</p> :

                    <div className="md-row">
                        <div className="md-col-12">
                            <img src={detailExplore.explore_banner} alt="explore_banner" style={{
                                height: "30vh",
                                width: '100%',
                                objectFit: "cover"
                            }} />
                        </div>

                        <div className="md-mt-20 md-col-12">
                            <h2 className="md-uppercase md-fw-700 md-fs-16 md-mb-4">{t('tag')}</h2>

                            <div className="md-d-flex md-mb-10">
                                {detailExplore?.explore_tag?.map((tag: any, idx: any) => {
                                    return <p className="md-fs-16 md-mb-0 md-mr-4 md-font-secondary" key={idx}>#{tag}</p>
                                })}
                            </div>
                        </div>

                        <div className="md-col-6 md-pr-20">
                            <p className='md-fs-16 md-mb-0 md-font-secondary md-fw-300' style={{
                                lineHeight: "18px"
                            }}>
                                Andisi ilit, sit untiatis am ipicia susapid maximperum untis ni con cus essi necabo. Temodi debis et vel eos nectiusae. Rerspitios quibus sin exceat ex et deruptas aspic tem re de maior sinim sunti dia pa que mo vendisimi, cum et
                                plabo. Ita solores doluptur aut explisi tataquo vel etur soluptat aut voluptatis et omnienim dolorepro quibuscitem
                                quatiurepel im dolent aut mossumquam volorro vitatem pernatisci ditae. Ebitatem ratquod ma debis rectati nuscias repudan ihictorem rehentet unt a aut id et laborempera vit doluptat.Enda senis cum que nisto cum il maximpero offictas quodign ienitatur aut occaeperio offictat esed quam est etus, quamus, solorrum haritat quatus, comnist, necerrum hil etur sum qui in exceren imincto offic te volupturior solupis endio. Opta vero ex</p>
                        </div>

                        <div className="md-row md-col-6 md-pl-20" style={{

                        }}>
                            {detailExplore.explore_collection?.map((imgSrc: any, idx: any) => {
                                return <div style={{
                                    width: `calc(100% / 2)`,
                                    height: `calc(100% / 2)`,
                                    aspectRatio: '1 / 1',
                                }} key={idx} onClick={() => {
                                    setIndexPicture(idx)
                                }
                                } className={`${idx % 2 === 0 ? "md-pr-20" : ""}`}>
                                    <img src={imgSrc} style={{
                                        width: '100%',
                                        height: '100%',
                                    }} alt="img_detai_project" className="md-cursor-pointer md-py-10" />
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