import { configScreen, sidebarWidth } from "../../../constant"

import useTranslation from "../../../../../hooks/useTranslate/useTranslation";
import { useNavigate, useParams } from "react-router-dom";

import logo from "../../../../../assets/images/logo.png"

import "./styles.scss"

function SidebarAdmin() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { screen } = useParams();

    return (
        <div className="md-sidebar" style={{
            width: sidebarWidth
        }}>
            <div className="md-d-flex md-justify-center">
                <img src={logo} className="md-sidebar-logo md-cursor-pointer" onClick={() => {
                    navigate(`/`)
                }} alt="logo_company" />
            </div>

            <ul className="md-p-0 md-m-0">
                {configScreen.map((menu, idx) => {
                    return <li key={idx} className={`${screen === menu.path ? "md-active-sidebar" : ''}`} onClick={() => {
                        navigate(`/admin/${menu.path}`)
                    }}>
                        {t(menu.path)}
                    </li>
                })}
            </ul>
        </div>

    )
}

export default SidebarAdmin