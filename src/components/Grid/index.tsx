import "./styles.scss"

function GridSystem() {
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
    ]
    return (
        <>
            <ul className="postlist_items">
                {DEFAULT_ARRAY.map((item) => {
                    return <li className="postlist_item md-d-flex md-justify-center md-items-center">
                        <div className="md-relative">
                            <div >
                                <div className="postlist_item_images md-d-flex md-justify-center md-items-center" style={{
                                    objectFit: "contain",
                                }}>
                                    <img src={item.img} style={{
                                        width: `calc(100%*min(1, ${item.width / item.height}))`,
                                        height: ''
                                    }} />
                                </div>

                                <div className="postlist_item_text">
                                    <div className="postlist_item_text_inner">
                                        <h3 className="postlist_item_pointmark --general is-uppercase">{item.name}</h3>

                                        <p className="postlist_item_subtitle">Austin, Texas, USA</p>
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