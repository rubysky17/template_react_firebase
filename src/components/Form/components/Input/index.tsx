import "./styles.scss";

function AInput(props: any) {
    const { placeholder, className, onChange, name, value } = props;

    return (
        <input placeholder={placeholder} type="text" className={`${className} md-a-input`} onChange={(e) => {
            onChange && onChange(e.target.value)
        }} name={name} value={value} />
    )
}

export default AInput