import "./styles.scss";

import { CiSearch } from "react-icons/ci";


function Input(props: any) {
    const { isHasIcon, customClass, value, onChange, placeholder } = props

    return (
        <div className="input-icons">
            {isHasIcon && <CiSearch />}

            <input style={{
                width: '100%'
            }} className={`md-header-search ${customClass}`} value={value} onChange={(e) => {
                onChange && onChange(e.target.value)
            }} placeholder={placeholder} />
        </div>
    )
}

export default Input