import "./styles.scss";

function Input() {
    return (
        <div className="input-icons">
            <i className="fa fa-search"></i>

            <input style={{
                width: '100%'
            }} className="md-header-search" />
        </div>
    )
}

export default Input