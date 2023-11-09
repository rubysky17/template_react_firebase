import { useNavigate } from "react-router-dom";
import { MENU_CONSTANT } from "../../constants/constants"

import useTranslation from "../../hooks/useTranslate/useTranslation";
import useWindowDimension from "../../hooks/useWindowDimension/useWindowDimension"

import Map from "../Map"

function MenuList() {
    const { width } = useWindowDimension();
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <div style={{
            height: "70%"
        }} className="md-d-flex md-justify-between md-items-center md-p-40">
            {MENU_CONSTANT.map((item, idx) => {
                return <div className="md-p-10 md-relative" key={idx} style={{
                    width: (width / 3.5)
                }}>
                    {item.type === 'image' ? <img alt="img_menu" src={item.image} className="md-custom-menu md-cursor-pointer" onClick={() => {
                        navigate(item.path)
                    }} /> : <div style={{
                        width: (width / 3.5),
                        maxHeight: (width / 3.5),
                        borderRadius: '50%',
                        overflow: 'hidden'
                    }}>
                        <Map />
                    </div>}

                    {item.type === 'image' ? <h2 className="md-cursor-pointer md-text-color-white md-absolute md-mb-0" style={{
                        top: "50%",
                        left: '50%',
                        transform: `translate(-50%, -50%)`,
                        zIndex: 9999
                    }}>{t(item.name)}</h2> : <span className="md-cursor-pointer md-text-color-white md-absolute md-mb-0" style={{
                        top: "50%",
                        left: '50%',
                        transform: `translate(-50%, -50%)`,
                        zIndex: 9999
                    }} dangerouslySetInnerHTML={{ __html: item.name }} />}
                </div>
            })}
        </div>
    )
}

export default MenuList
