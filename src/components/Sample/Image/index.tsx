import "./styles.scss";

function SampleImage(props: any) {
    const { src, className, onRemove } = props;

    return (
        <div className={`${className} md-sample-image`}>
            <div className="md-sample-overlay">
                <span onClick={() => {
                    onRemove && onRemove(src)
                }}>{svgDelete}</span>
            </div>

            <img src={src} alt={src} />
        </div>
    )
}

export default SampleImage;

const svgDelete = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><g id="Icon"><path id="Vector" d="M15.8327 5.34175L14.6577 4.16675L9.99935 8.82508L5.34102 4.16675L4.16602 5.34175L8.82435 10.0001L4.16602 14.6584L5.34102 15.8334L9.99935 11.1751L14.6577 15.8334L15.8327 14.6584L11.1743 10.0001L15.8327 5.34175Z" fill="#ffffff"></path></g></svg>
