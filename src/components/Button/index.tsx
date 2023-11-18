import React from 'react'

function Button(props: any) {
    const { content, status, className, onClick, type } = props;

    let styles = {
        color: status === "success" ? "#fff" : '#424242',
        background: status === "success" ? "#fec843" : "#eee"
    }

    return (
        <button style={{
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
            margin: 0,
            outline: "none",
            ...styles
        }} className={`${className}`} onClick={() => {
            onClick && onClick()
        }} type={type}>
            <p className="md-m-0">{content}</p>
        </button>
    )
}

export default Button