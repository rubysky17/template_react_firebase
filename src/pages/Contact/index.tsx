import Input from "../../components/Input";
import Map from "../../components/Map"
import TextArea from "../../components/TextArea";
import useTranslation from "../../hooks/useTranslate/useTranslation";
import useWindowDimensions from "../../hooks/useWindowDimension/useWindowDimension";
import "./styles.scss";

function ContactPage() {
    const { t } = useTranslation();
    const { width } = useWindowDimensions();

    return (
        <div className="md-mb-20 md-row md-items-center md-justify-between" style={{
            paddingLeft: width > 768 ? "150px" : "0",
            paddingRight: width > 768 ? "150px" : "0"
        }} >
            <div className="md-col-12 md-md-col-5">
                <h2 className="md-fw-700 md-fs-14 md-md-fs-16 md-mb-4">{t('address')}</h2>
                <p className="md-mb-16">33/16 Lý Văn Phức, phường Tân Định, quận 1, thành phố Hồ Chí Minh</p>

                <h2 className="md-fw-700 md-fs-14 md-md-fs-16 md-mb-4">{t('phone')}</h2>
                <p className="md-fs-12 md-md-fs-14 md-mb-0">+84 1212121212</p>
                <p className="md-fs-12 md-md-fs-14 md-mb-16">+84 1212121212</p>

                <h2 className="md-fw-700 md-fs-14 md-md-fs-16 md-mb-4">{t('mail')}</h2>
                <p className="md-fs-12 md-md-fs-14 md-mb-16">woaarchitects.info@gmail.com</p>

                <h2 className="md-fw-700 md-fs-14 md-md-fs-16 md-mb-4">{t('follow us')}</h2>
            </div>

            <div style={{
                aspectRatio: width > 768 ? "1 / 1" : "unset",
                borderRadius: width > 768 ? "50%" : "unset",
                overflow: 'hidden',
                height: width > 768 ? "" : "300px",
            }} className="md-col-12 md-md-col-5 md-lg-col-4">
                <Map />
            </div>
        </div>
    )
}

export default ContactPage