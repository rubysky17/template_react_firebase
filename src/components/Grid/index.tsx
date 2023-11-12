import { useNavigate, useMatches } from "react-router-dom";
import "./styles.scss"

function GridSystem(props: any) {
    const navigate = useNavigate();
    const matches = useMatches();

    const { list, type } = props;

    const handleClickDetail = (id: any) => {
        navigate(`${matches[0].pathname}/${id}`)
    }

    let collections = '', name = '', tag = "";

    if (type === 'project') {
        collections = 'project_collection';
        name = 'project_name';
        tag = 'project_tag'
    }

    if (type === 'explore') {
        collections = 'explore_collection';
        name = 'explore_name';
        tag = 'explore_tag'
    }

    return (
        <>
            <ul className="postlist_items">
                {list.map((item: any, idx: any) => {
                    return <li className="postlist_item md-d-flex md-justify-center md-items-center" key={idx}>
                        <div className="md-relative">
                            <div >
                                <div className="postlist_item_images md-d-flex md-justify-center md-items-center" style={{
                                    objectFit: "contain",
                                }}>
                                    <img src={item[collections][0]} style={{
                                        width: `calc(100%*min(1, ${478 / 319}))`,
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

                                        <div className="md-d-flex md-justify-center">
                                            {item[tag].map((tag: any, idx: any) => {
                                                return <p className="postlist_item_subtitle" key={idx}>#{tag}</p>
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