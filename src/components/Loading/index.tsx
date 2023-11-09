import "./styles.scss"

function LoadingPage(props: any) {
    const { isLoading } = props;

    return (
        <div className={`md-wrapper-loading ${!isLoading && "md-wrapper-loading-closed"}`} style={{
            zIndex: 99
        }}>
            <p className="md-mb-0 md-font-secondary md-text-color-gray-1 md-fs-24">WOA Architects</p>
        </div>
    )
}

export default LoadingPage