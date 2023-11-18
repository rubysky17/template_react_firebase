import Skeleton from 'react-loading-skeleton'

function SkeletonTable(props: any) {
    const { rows, cols } = props;
    {/* <div className="md-mb-10">
                    <Skeleton baseColor="#adb5bd" />
                </div> */}

    return (
        <div className='md-row'>
            {Array(rows).fill(0).map((_, idx) => {
                return <div className="md-d-flex md-items-center" key={idx} style={{
                    width: "100%"
                }}>
                    <>
                        {Array(cols).fill(0).map((_, index) => {
                            return <div style={{
                                width: `calc(100% / ${cols})`,
                            }} className="md-mb-10 md-pr-10">
                                <Skeleton baseColor="#e4e6eb" key={index} height={30} />
                            </div>
                        })}
                    </>
                </div>
            })}

        </div>
    )
}

export default SkeletonTable