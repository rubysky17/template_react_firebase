import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../AppProvider/context/store";
import useWindowDimension from "../../hooks/useWindowDimension/useWindowDimension"

import { MENU_CONSTANT } from "../../constants/constants"


import Map from "../Map"

function MenuList() {
    const { dispatch, actions } = useStore();
    const { width } = useWindowDimension();
    const refMenu = useRef<any>(null);
    const navigate = useNavigate();

    // ! Width sẽ theo tỉ lệ của chiều cao màn hình nếu dưới 992px
    const widthConfig = width < 992 ? refMenu?.current?.clientHeight / MENU_CONSTANT.length : ""

    return (
        <div style={{
            height: width >= 992 ? "70%" : "80%",
            overflow: "hidden"
        }} className={`${width >= 992 ? "md-row  md-p-20" : "md-d-flex md-justify-between md-items-center md-flex-col md-p-10"}`} ref={refMenu}>
            {MENU_CONSTANT.map((item: any, idx: any) => {
                return <div className="md-lg-col-4 md-relative md-p-10 md-flex md-justify-center md-items-center" key={idx} style={{
                    height: widthConfig,
                    width: widthConfig
                }}>
                    {item.type === 'image' ? <img alt="img_menu" src={item.image} className="md-custom-menu md-cursor-pointer" onClick={() => {
                        dispatch(actions.setKeySearch(""));

                        navigate(item.path);
                    }} /> : <div style={{
                        borderRadius: '50%',
                        aspectRatio: "1 / 1",
                        overflow: 'hidden',
                        position: 'relative',
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                    }}>
                        <Map />
                    </div>}

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
                </div>
            })}
        </div>
    )
}

export default MenuList
