import "./styles.scss";

function SampleImage(props: any) {
    const { src, className, onRemove, onSelect, showSelect = false, isSelected = false } = props;

    return (
        <div className={`${className} ${isSelected ? "md-sample-image-selected" : ""} md-sample-image`}>
            <div className="md-sample-overlay">
                <span onClick={() => {
                    onRemove && onRemove(src)
                }}>{svgDelete}</span>

                {showSelect && <span className="md-ml-20 md-text-color-white" onClick={() => {
                    onSelect && onSelect(src)
                }}>{svgCheck}</span>}

            </div>

            <img src={src} alt={src} />
        </div>
    )
}

export default SampleImage;

const svgDelete = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><g id="Icon"><path id="Vector" d="M15.8327 5.34175L14.6577 4.16675L9.99935 8.82508L5.34102 4.16675L4.16602 5.34175L8.82435 10.0001L4.16602 14.6584L5.34102 15.8334L9.99935 11.1751L14.6577 15.8334L15.8327 14.6584L11.1743 10.0001L15.8327 5.34175Z" fill="#ffffff"></path></g></svg>

const svgCheck = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="20px" height="20px"><path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z" fill="#ffffff" /></svg>