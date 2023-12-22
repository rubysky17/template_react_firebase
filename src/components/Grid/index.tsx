import { useLocation, useNavigate } from "react-router-dom";
import "./styles.scss"
import { buildQueryString, dimensionURL } from "../../helpers/helpers";
import { useStore } from "../../AppProvider/context/store";
import useHistory from "../../hooks/useHistory";

function GridSystem(props: any) {
    const navigate = useNavigate();
    const { list, type } = props;
    const { dispatch, actions } = useStore();
    const { push } = useHistory();
    const location = useLocation();

    const handleClickDetail = (id: any) => {
        navigate(`${id}`)
    }

    let banner = '', name = '', tag = "";

    if (type === 'project') {
        banner = 'project_banner';
        name = 'project_name';
        tag = 'project_tag'
    }

    if (type === 'explore') {
        banner = 'explore_banner';
        name = 'explore_name';
        tag = 'explore_tag'
    };

    return (
        <>
            <ul className="postlist_items" style={{
                marginRight: "-15px",
                marginLeft: "-15px",
            }}>
                {list.map((item: any, idx: any) => {
                    return <li className="md-px-15 postlist_item md-d-flex md-justify-center md-items-center md-wrap" key={idx}>
                        <div className="md-relative">
                            <div >
                                <div className="postlist_item_images md-d-flex md-justify-center md-items-center" style={{
                                    objectFit: "contain",
                                }}>
                                    <img src={item[banner]} style={{
                                        width: `calc(100%*min(1, ${dimensionURL(item[banner]).width / dimensionURL(item[banner]).height}))`,
                                        height: ''
                                    }} onClick={() => {
                                        handleClickDetail(item.id)
                                    }} className="md-cursor-pointer" alt="image_project" />
                                </div>

                                <div className="postlist_item_text">
                                    <div className="postlist_item_text_inner">
                                        <h3 className="postlist_item_pointmark md-uppercase md-mb-0 md-cursor-pointer" onClick={() => {
                                            handleClickDetail(item.id)
                                        }}>{item[name]}</h3>

                                        <div className="md-d-flex md-justify-center md-wrap">
                                            {item[tag].map((tag: any, idx: any) => {
                                                return <p className="postlist_item_subtitle md-font-primary md-fw-300 md-cursor-pointer" key={idx} onClick={() => {
                                                    dispatch(actions.setKeySearch(tag));
                                                    const queryParam = buildQueryString({
                                                        key: tag
                                                    })
                                                    push(`${location.pathname}${queryParam}`);
                                                }}>#{tag}</p>
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                })}
            </ul>
        </>
    )
}

export default GridSystem