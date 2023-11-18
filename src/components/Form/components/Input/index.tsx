import "./styles.scss";

function AInput(props: any) {
    const { placeholder, className, onChange, name, value, onKeyEnter } = props;

    const handleKeyDown = (event: any) => {
        if (event.keyCode === 13) {
            onKeyEnter && onKeyEnter(value);
        }
    };

    return (
        <input placeholder={placeholder} type="text" className={`${className} md-a-input`} onChange={(e) => {
            onChange && onChange(e.target.value);
        }} name={name} value={value} onKeyDown={handleKeyDown} />
    )
}

export default AInput