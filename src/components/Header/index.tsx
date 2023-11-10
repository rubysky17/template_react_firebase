import useTranslation from "../../hooks/useTranslate/useTranslation";
import { useMatches, useNavigate } from "react-router-dom";

import Input from "../Input";

import { MENU_CONSTANT } from "../../constants/constants";

import Logo from "../../assets/images/logo.png";
import "./styles.scss";


function Header() {
    const { t } = useTranslation();
    const matches: any = useMatches();
    const navigate: any = useNavigate()
    const path = matches[0].pathname.split("/")[1];

    return (
        <div className="md-d-flex md-items-center md-py-20 md-px-60 md-bg-secondary">
            <img src={Logo} className="md-cursor-pointer md-header-logo" onClick={() => {
                navigate("/")
            }} />

            <div className="md-ml-30">
                <ul className="md-header-menu">
                    {MENU_CONSTANT.map((menu: any, idx: any) => {
                        return <li key={`${idx}`} className={`${path === menu.name.toLowerCase() ? "md-header-menu-item-active " : ""
                            } md-header-menu-item ${MENU_CONSTANT.length - 1 !== idx ? "md-mr-40" : ""}`}
                            onClick={() => {
                                navigate(menu.path)
                            }}
                        >{t(menu.name)}
                        </li>
                    })}
                </ul>

                <Input />
            </div>
        </div>
    )
}

export default Header