import React from 'react'

function SwitchTranslate() {
    const LANGS = [
        {
            display: "eng",
            value: 'en'
        },
        {
            display: "vie",
            value: 'vi'
        }
    ]
    return (
        <div className='md-d-flex md-mt-10' style={{
            width: '100px'
        }}>
            {LANGS.map((lang, idx) => {
                return <div key={idx} className="md-d-flex">
                    <p className="md-uppercase md-text-color-white md-mb-0 md-fw-500 md-fs-20 md-mx-6">{lang.display}</p>

                    {idx !== LANGS.length - 1 && <div className="md-text-color-white md-fs-20 md-fw-500">|</div>}
                </div>
            })}
        </div>
    )
}

export default SwitchTranslate