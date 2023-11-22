import "./styles.scss";

function Input(props: any) {
    const { isHasIcon, customClass, value, onChange } = props

    return (
        <div className="input-icons">
            {isHasIcon && <i className="fa fa-search"></i>}

            <input style={{
                width: '100%'
            }} className={`md-header-search ${customClass}`} value={value} onChange={(e) => {
                onChange && onChange(e.target.value)
            }} />
        </div>
    )
}

export default Input