import "./styles.scss";

function ATextArea(props: any) {
    const { placeholder, className, onChange, name, value, onKeyEnter } = props;

    const handleKeyDown = (event: any) => {
        if (event.keyCode === 13) {
            onKeyEnter && onKeyEnter(value);
        }
    };

    return (
        <textarea placeholder={placeholder} className={`${className} md-a-input`} onChange={(e) => {
            onChange && onChange(e.target.value);
        }} name={name} value={value} onKeyDown={handleKeyDown} />
    )
}

export default ATextArea