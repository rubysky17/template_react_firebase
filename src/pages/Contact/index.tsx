import Map from "../../components/Map"
import useTranslation from "../../hooks/useTranslate/useTranslation";
import useWindowDimensions from "../../hooks/useWindowDimension/useWindowDimension";


import { FaInstagram } from "react-icons/fa6";
import { BiLogoFacebook } from "react-icons/bi";
import { SiZalo } from "react-icons/si";

import "./styles.scss";

function ContactPage() {
    const { t } = useTranslation();
    const { width } = useWindowDimensions();
    const social = [
        {
            icon: <FaInstagram size={30} color="black" />,
            href: ""
        },
        {
            icon: <BiLogoFacebook size={30} color="black" />,
            href: ""
        },
        {
            icon: <SiZalo size={30} color="black" />,
            href: ""
        }
    ]
    return (
        <div className="md-mb-20 md-row md-items-start md-justify-between md-mt-0 md-md-mt-50 md-lg-mt-100" style={{
            paddingLeft: width > 768 ? "150px" : "0",
            paddingRight: width > 768 ? "150px" : "0"
        }} >
            <div className="md-col-12 md-md-col-6 md-pr-30">
                <h2 className="md-fw-700 md-fs-14 md-md-fs-16 md-mb-4">{t('address')}</h2>
                <p className="md-mb-16">33 Lý Văn Phức, Phường Tân Định, Quận 1, Thành phố Hồ Chí Minh, Việt Nam</p>

                <h2 className="md-fw-700 md-fs-14 md-md-fs-16 md-mb-4">{t('phone')}</h2>
                <p className="md-fs-12 md-md-fs-14 md-mb-0">+84 1212121212</p>
                <p className="md-fs-12 md-md-fs-14 md-mb-16">+84 1212121212</p>

                <h2 className="md-fw-700 md-fs-14 md-md-fs-16 md-mb-4">{t('mail')}</h2>
                <a className="md-fs-12 md-md-fs-14 md-mb-16 md-cursor-pointer md-text-color-black-1" href="mailto:woaarchitects.info@gmail.com" target="_blank">woaarchitects.info@gmail.com</a>

                <h2 className="md-fw-700 md-fs-14 md-md-fs-16 md-mb-4 md-mt-16">{t('follow us')}</h2>

                {social.map((link, idx) => {
                    return <a className="md-mr-8" href={link.href} key={idx}>{link.icon}</a>
                })}
            </div>

            <div className="md-col-12 md-md-col-6 md-lg-col-4">
                <Map customClass="map-tiles-circle" />
            </div>
        </div>
    )
}

export default ContactPage