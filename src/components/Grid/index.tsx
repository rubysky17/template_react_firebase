import { useNavigate, useMatches } from "react-router-dom";
import "./styles.scss"

function GridSystem(props: any) {
    const navigate = useNavigate();
    const matches = useMatches();

    const { list } = props;

    const DEFAULT_ARRAY = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/md-woaa-project.appspot.com/o/40931027_480746245768216_4216755099726249984_n.jpg?alt=media&token=b83abab6-008d-41b1-821f-2759612555a7',
            name: 'office tan binh',
            tag: ['office', 'interior', 'vietnam', 'saigon'],
            width: 838,
            height: 524,
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/md-woaa-project.appspot.com/o/Photo%2014-08-2022%2C%2007%2031%2006.jpg?alt=media&token=ba8dd935-ec25-4717-9587-03f89715162b',
            name: 'office tan binh',
            tag: ['office', 'interior', 'vietnam', 'saigon'],
            width: 393,
            height: 524
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/md-woaa-project.appspot.com/o/_MG_6434.jpg?alt=media&token=ae1ff4f7-65a5-484a-a743-91044e4da2b3',
            name: 'office tan binh',
            tag: ['office', 'interior', 'vietnam', 'saigon'],
            width: 349,
            height: 524
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/md-woaa-project.appspot.com/o/40931027_480746245768216_4216755099726249984_n.jpg?alt=media&token=b83abab6-008d-41b1-821f-2759612555a7',
            name: 'office tan binh',
            tag: ['office', 'interior', 'vietnam', 'saigon'],
            width: 838,
            height: 524,
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/md-woaa-project.appspot.com/o/Photo%2014-08-2022%2C%2007%2031%2006.jpg?alt=media&token=ba8dd935-ec25-4717-9587-03f89715162b',
            name: 'office tan binh office tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binh office tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binh',
            tag: ['office', 'interior', 'vietnam', 'saigon'],
            width: 393,
            height: 524
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/md-woaa-project.appspot.com/o/_MG_6434.jpg?alt=media&token=ae1ff4f7-65a5-484a-a743-91044e4da2b3',
            name: 'office tan binh',
            tag: ['office', 'interior', 'vietnam', 'saigon'],
            width: 349,
            height: 524
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/md-woaa-project.appspot.com/o/40931027_480746245768216_4216755099726249984_n.jpg?alt=media&token=b83abab6-008d-41b1-821f-2759612555a7',
            name: 'office tan binh office tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binh',
            tag: ['office', 'interior', 'vietnam', 'saigon'],
            width: 838,
            height: 524,
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/md-woaa-project.appspot.com/o/Photo%2014-08-2022%2C%2007%2031%2006.jpg?alt=media&token=ba8dd935-ec25-4717-9587-03f89715162b',
            name: 'office tan binh office tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binhoffice tan binh',
            tag: ['office', 'interior', 'vietnam', 'saigon'],
            width: 393,
            height: 524
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/md-woaa-project.appspot.com/o/_MG_6434.jpg?alt=media&token=ae1ff4f7-65a5-484a-a743-91044e4da2b3',
            name: 'office tan binh office tan binh office tan binh office tan binh office tan binh office tan binh office tan binh office tan binh office tan binh office tan binh',
            tag: ['office', 'interior', 'vietnam', 'saigon'],
            width: 349,
            height: 524
        }
    ];

    const handleClickDetail = (id: any) => {
        navigate(`${matches[0].pathname}/${id}`)
    }

    return (
        <>
            <ul className="postlist_items">
                {list.map((item: any, idx: any) => {
                    console.log({ item })
                    return <li className="postlist_item md-d-flex md-justify-center md-items-center" key={idx}>
                        <div className="md-relative">
                            <div >
                                <div className="postlist_item_images md-d-flex md-justify-center md-items-center" style={{
                                    objectFit: "contain",
                                }}>
                                    <img src={item.project_collection[0]} style={{
                                        width: `calc(100%*min(1, ${478 / 319}))`,
                                        height: ''
                                    }} onClick={() => {
                                        handleClickDetail(item.id)
                                    }} className="md-cursor-pointer" />
                                </div>

                                <div className="postlist_item_text">
                                    <div className="postlist_item_text_inner">
                                        <h3 className="postlist_item_pointmark md-uppercase md-mb-0 md-cursor-pointer" onClick={() => {
                                            handleClickDetail(item.id)
                                        }}>{item.project_name}</h3>

                                        <div className="md-d-flex md-justify-center">
                                            {item.project_tag.map((tag: any, idx: any) => {
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