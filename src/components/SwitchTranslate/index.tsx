import React from 'react'
import { useLocalStorage } from '../../hooks/useStorage/useStorage';

function SwitchTranslate() {
    const [language, setLanguage] = useLocalStorage("language");

    console.log({
        language
    });

    const LANGS = [
        {
            display: "eng",
            value: 'en'
        },
        {
            display: "vie",
            value: 'vi'
        }
    ];

    return (
        <div className='md-d-flex md-mt-10' style={{
            width: '100px'
        }}>
            {LANGS.map((lang, idx) => {
                return <div key={idx} className="md-d-flex">
                    <p className="md-cursor-pointer md-uppercase md-text-color-white md-mb-0 md-fw-500 md-fs-20 md-mx-6" onClick={() => {
                        setLanguage(lang.value);

                        window.location.reload();
                    }} style={{
                        opacity: language === lang.value ? 1 : 0.5
                    }}>{lang.display}</p>

                    {idx !== LANGS.length - 1 && <div className="md-text-color-white md-fs-20 md-fw-500">|</div>}
                </div>
            })}
        </div >
    )
}

export default SwitchTranslate