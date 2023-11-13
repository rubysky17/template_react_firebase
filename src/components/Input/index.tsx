import "./styles.scss";

function Input(props: any) {
    const { isHasIcon, customClass } = props

    return (
        <div className="input-icons">
            {isHasIcon && <i className="fa fa-search"></i>}

            <input style={{
                width: '100%'
            }} className={`md-header-search ${customClass}`} />
        </div>
    )
}

export default Input