export default function BadgesWClose(props: any) {
    const { item, onRemove, index } = props;

    const handleRemoveKeyWord = (value: any) => {
        onRemove && onRemove(value);
    };

    return (
        <div
            key={`keyword_${index}_372`}
            className="md-mr-8 md-mb-8 md-px-8 md-d-flex md-items-center md-py-4 md-border-gray-9 md-border-4"
            style={{
                background: "#F3F4F6",
            }}
        >
            <p
                className="md-mb-0 md-fs-12 md-text-color-black-5"
                style={{
                    height: 16,
                }}
            >
                {item}
            </p>

            <span
                className="md-cursor-pointer md-ml-4"
                onClick={() => {
                    handleRemoveKeyWord(item);
                }}
            >
                {svgClose}
            </span>
        </div>
    );
}

const svgClose = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
    >
        <path
            d="M12.6673 4.27398L11.7273 3.33398L8.00065 7.06065L4.27398 3.33398L3.33398 4.27398L7.06065 8.00065L3.33398 11.7273L4.27398 12.6673L8.00065 8.94065L11.7273 12.6673L12.6673 11.7273L8.94065 8.00065L12.6673 4.27398Z"
            fill="#4B5563"
        />
    </svg>
);
