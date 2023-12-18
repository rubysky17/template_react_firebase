import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../AppProvider/context/store";
import useWindowDimension from "../../hooks/useWindowDimension/useWindowDimension"

import { MENU_CONSTANT } from "../../constants/constants"


import Map from "../Map"
import AspectRatioContainer from "../AspectRatio";
import { getList } from "../../constants/firebase";

function MenuList() {
    const { dispatch, actions } = useStore();
    const { width } = useWindowDimension();
    const refMenu = useRef<any>(null);
    const navigate = useNavigate();
    const [isLoadingList, setIsLoadingList] = useState(false);

    const [listMenu, setListMenu] = useState([]);

    useEffect(() => {
        setIsLoadingList(true)

        getList("designs")
            .then((res) => {
                setListMenu(res)
                setIsLoadingList(false);
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setIsLoadingList(false);
            });
    }, []);

    // ! Width sẽ theo tỉ lệ của chiều cao màn hình nếu dưới 992px
    const widthConfig: any = width < 992 ? refMenu?.current?.clientHeight / MENU_CONSTANT.length : ""

    return (
        <div style={{
            height: width >= 992 ? "70%" : "80%",
            overflow: "hidden"
        }} className={`${width >= 992 ? "md-row  md-p-20" : "md-d-flex md-justify-between md-items-center md-flex-col md-p-10"}`} ref={refMenu}>
            {!isLoadingList && <>
                {MENU_CONSTANT.map((item: any, idx: any) => {
                    const imageFromDb: any = listMenu.find((y: any) => y.name === item.name.toLowerCase());

                    return <div className="md-lg-col-4 md-relative md-p-10 md-flex md-justify-center md-items-center" key={idx} style={{
                        height: widthConfig,
                        width: widthConfig
                    }}>
                        {item.type === 'image' ? <AspectRatioContainer aspectRatio={1 / 1} >
                            <img alt="img_menu" src={imageFromDb?.image} className="md-custom-menu md-cursor-pointer" onClick={() => {
                                dispatch(actions.setKeySearch(""));

                                navigate(item.path);
                            }} />

                            {item.type === 'image' ? <h2 className="md-font-secondary md-fs-10 md-md-fs-14 md-lg-fs-16 md-cursor-pointer md-text-color-white md-absolute md-mb-0" style={{
                                top: "50%",
                                left: '50%',
                                transform: `translate(-50%, -50%)`,
                            }}>{item.name}</h2> : <h2 className="md-font-secondary md-fs-10 md-md-fs-14 md-lg-fs-16 md-text-center md-cursor-pointer md-text-color-white md-absolute md-mb-0" style={{
                                top: "50%",
                                left: '50%',
                                transform: `translate(-50%, -50%)`,
                                zIndex: 3
                            }} dangerouslySetInnerHTML={{ __html: item.detail }} onClick={() => {
                                dispatch(actions.setKeySearch(""));

                                navigate(item.path);
                            }} />}
                        </AspectRatioContainer> :
                            <AspectRatioContainer aspectRatio={1 / 1}>
                                <div style={{
                                    borderRadius: '50%',
                                    width: "100%",
                                    height: "100%",
                                    overflow: 'hidden',
                                    position: 'relative',
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                }}>
                                    <Map customClass={"md-border-circle"} />
                                </div>

                                {item.type === 'image' ? <h2 className="md-font-secondary md-cursor-pointer md-text-color-white md-absolute md-mb-0" style={{
                                    top: "50%",
                                    left: '50%',
                                    transform: `translate(-50%, -50%)`,
                                    fontSize: Math.floor(widthConfig * 0.07)
                                }} >{item.name}</h2> : <h2 className="md-font-secondary md-fs-10 md-md-fs-14 md-lg-fs-16 md-text-center md-cursor-pointer md-text-color-white md-absolute md-mb-0" style={{
                                    top: "50%",
                                    left: '50%',
                                    transform: `translate(-50%, -50%)`,
                                    zIndex: 3
                                }} dangerouslySetInnerHTML={{ __html: item.detail }} onClick={() => {
                                    dispatch(actions.setKeySearch(""));

                                    navigate(item.path);
                                }} />}
                            </AspectRatioContainer>}
                    </div>
                })}
            </>}

        </div>
    )
}

export default MenuList
