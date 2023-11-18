import React from 'react'

function Button(props: any) {
    const { content, status, className, onClick } = props;

    let styles = {
        color: status === "success" ? "#fff" : '#424242',
        background: status === "success" ? "#fec843" : "#eee"
    }

    return (
        <div style={{
            height: 40,
            padding: "11px 12px",
            minWidth: "90px",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: 14,
            fontWeight: 500,
            display: 'inline-flex',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            ...styles
        }} className={`${className}`} onClick={() => {
            onClick && onClick()
        }}>
            <p className="md-m-0">{content}</p>
        </div>
    )
}

export default Button