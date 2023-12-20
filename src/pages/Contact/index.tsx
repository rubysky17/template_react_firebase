import Map from "../../components/Map"
import useTranslation from "../../hooks/useTranslate/useTranslation";
import useWindowDimensions from "../../hooks/useWindowDimension/useWindowDimension";


import { FaInstagram } from "react-icons/fa6";
import { BiLogoFacebook } from "react-icons/bi";
// import { SiZalo } from "react-icons/si";

import "./styles.scss";

function ContactPage() {
    const { t } = useTranslation();
    const { width } = useWindowDimensions();
    const social = [
        {
            icon: <FaInstagram size={30} color="black" />,
            href: "https://instagram.com/woa_architects"
        },
        {
            icon: <BiLogoFacebook size={30} color="black" />,
            href: "https://www.facebook.com/people/WOA-Architects/100053104308865/"
        },
        // {
        //     icon: <SiZalo size={30} color="black" />,
        //     href: "https://zalo.me/0909357569"
        // }
    ]
    return (
        <div className="md-mb-20 md-row md-items-start md-justify-between md-mt-0 md-md-mt-50 md-lg-mt-100" style={{
            paddingLeft: width > 768 ? "150px" : "0",
            paddingRight: width > 768 ? "150px" : "0"
        }} >
            <div className="md-col-12 md-md-col-6 md-pr-30">
                <h2 className="md-fw-700 md-fs-14 md-md-fs-16 md-mb-4">{t('address')}</h2>
                <a className="md-fs-12 md-md-fs-14 md-mb-16 md-cursor-pointer md-text-color-black-1" href="https://www.google.com/maps/place/33+L%C3%BD+V%C4%83n+Ph%E1%BB%A9c,+Ph%C6%B0%E1%BB%9Dng+T%C3%A2n+%C4%90%E1%BB%8Bnh,+Qu%E1%BA%ADn+1,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.7910566,106.691152,17z/data=!3m1!4b1!4m6!3m5!1s0x317528cc9ee44733:0x863342a33fd220e!8m2!3d10.7910566!4d106.6937269!16s%2Fg%2F11gbkqm2lw?hl=vi-VN&entry=ttu" target="_blank" rel="noreferrer">33 Lý Văn Phức, Phường Tân Định, Quận 1, Thành phố Hồ Chí Minh, Việt Nam</a>

                <h2 className="md-fw-700 md-fs-14 md-md-fs-16 md-mb-4 md-mt-16">{t('phone')}</h2>
                <a href='tel:+842862716499' className="md-d-flex md-fs-12 md-md-fs-14 md-mb-4 md-cursor-pointer md-text-color-black-1" >(+84) 286.271.6499</a>
                <a className="md-d-flex md-fs-12 md-md-fs-14 md-mb-16 md-cursor-pointer md-text-color-black-1" href='tel:+84378823091'>(+84) 378.823.091</a>

                <h2 className="md-fw-700 md-fs-14 md-md-fs-16 md-mb-4">{t('mail')}</h2>
                <a className="md-fs-12 md-md-fs-14 md-mb-16 md-cursor-pointer md-text-color-black-1" href="mailto:woaarchitects.info@gmail.com" target="_blank" rel="noreferrer">woaarchitects.info@gmail.com</a>

                <h2 className="md-fw-700 md-fs-14 md-md-fs-16 md-mb-4 md-mt-16">{t('follow us')}</h2>

                {social.map((link, idx) => {
                    return <a className="md-mr-8" href={link.href} key={idx} target="_blank" rel="noreferrer">{link.icon}</a>
                })}


            </div>

            <div className="md-col-12 md-md-col-6 md-lg-col-4 md-mt-16 md-md-mt-0">
                <Map customClass="map-tiles-circle" />
            </div>
        </div>
    )
}

export default ContactPage