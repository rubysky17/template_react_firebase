import Input from "../../components/Input";
import Map from "../../components/Map"
import TextArea from "../../components/TextArea";
import useTranslation from "../../hooks/useTranslate/useTranslation";
import "./styles.scss"
function ContactPage() {
    const { t } = useTranslation();

    return (
        <div className="md-d-flex md-items-center md-justify-between" >
            <div style={{
                width: "40%"
            }}>
                <h2 className="md-fw-700 md-fs-16 md-mb-4">{t('address')}</h2>
                <p className="md-mb-16">33/16 Lý Văn Phức, phường Tân Định, quận 1, thành phố Hồ Chí Minh</p>

                <h2 className="md-fw-700 md-fs-16 md-mb-4">{t('phone')}</h2>
                <p className="md-mb-0">+84 1212121212</p>
                <p className="md-mb-16">+84 1212121212</p>

                <h2 className="md-fw-700 md-fs-16 md-mb-4">{t('mail')}</h2>
                <p className="md-mb-16">woaarchitects.info@gmail.com</p>

                <h2 className="md-fw-700 md-fs-16 md-mb-4">{t('follow us')}</h2>


                <h2 className="md-fw-700 md-fs-16 md-mb-0">{t('subject')}</h2>
                <Input customClass={"md-mb-10 md-custom-input"} />

                <h2 className="md-fw-700 md-fs-16 md-mb-0">{t('your phone')}</h2>
                <Input customClass={"md-mb-10 md-custom-input"} />

                <h2 className="md-fw-700 md-fs-16 md-mb-0">{t('content')}</h2>
                <TextArea />

                <h2 className="md-fw-700 md-fs-16 md-mb-0">{t('attach file')}</h2>

                <h2 className="md-uppercase md-fw-700 md-fs-16 md-mb-4">{t('send')}</h2>
            </div>

            <div style={{
                width: "40%",
                aspectRatio: "1 / 1",
                borderRadius: "50%",
                overflow: 'hidden'
            }}>
                <Map />
            </div>
        </div>
    )
}

export default ContactPage