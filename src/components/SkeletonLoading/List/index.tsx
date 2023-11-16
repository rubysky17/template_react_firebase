import Skeleton from 'react-loading-skeleton'
import useWindowDimensions from '../../../hooks/useWindowDimension/useWindowDimension';

function SkeletonList(props: any) {
    const { numberItems } = props;

    const { width } = useWindowDimensions();

    return (
        <div className="md-row">
            {Array(numberItems).fill(0).map((_: any, idx: any) => {
                return <div className="md-col-12 md-sm-col-6 md-md-col-4 md-lg-col-3 md-px-20 md-pb-20" key={idx} style={{
                    width: width > 1200 ? "20%" : ""
                }}>
                    <div>
                        <div>
                            <Skeleton baseColor="#adb5bd" height={300} />
                        </div>

                        <div>
                            <Skeleton baseColor="#adb5bd" />
                        </div>

                        <div>
                            <Skeleton baseColor="#adb5bd" />
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default SkeletonList