import useTranslation from "../../hooks/useTranslate/useTranslation";
import { useLocation, useNavigate } from "react-router-dom";

import Input from "../Input";

import { MENU_CONSTANT } from "../../constants/constants";

import Logo from "../../assets/images/logo.png";
import "./styles.scss";


function Header() {
    const { t } = useTranslation();
    const navigate: any = useNavigate();
    const location = useLocation();
    const path = location?.pathname || "";

    return (
        <div className="md-d-flex md-items-center md-py-20 md-bg-secondary">
            <img src={Logo} className="md-cursor-pointer md-header-logo" onClick={() => {
                navigate("/")
            }} alt="image_logo" />

            <div className="md-ml-30">
                <ul className="md-header-menu">
                    {MENU_CONSTANT.map((menu: any, idx: any) => {
                        return <li key={`${idx}`} className={`${path.includes(menu.name.toLowerCase()) ? "md-header-menu-item-active " : ""
                            } md-header-menu-item ${MENU_CONSTANT.length - 1 !== idx ? "md-mr-40" : ""}`}
                            onClick={() => {
                                navigate(menu.path)
                            }}
                        >{t(menu.name)}
                        </li>
                    })}
                </ul>

                <Input isHasIcon />
            </div>
        </div>
    )
}

export default Header