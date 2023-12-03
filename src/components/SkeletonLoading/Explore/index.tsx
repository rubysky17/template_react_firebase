import React from 'react'
import Skeleton from 'react-loading-skeleton'
import AspectRatioContainer from '../../AspectRatio'

function SkeletonExplore() {
    return (
        <>
            <div className="md-col-12">
                <Skeleton baseColor="#adb5bd" height={"30vh"} width={'100%'} />
            </div>

            <div className="md-mt-20 md-col-12">
                <Skeleton baseColor="#adb5bd" />
                <Skeleton baseColor="#adb5bd" />
            </div>


            <div className="md-col-12 md-md-col-6 md-pr-3 md-mt-20">
                <Skeleton baseColor="#adb5bd" count={20} />
            </div>

            <div className="md-row md-col-12 md-md-col-6 md-pl-30 md-mt-0" style={{
                marginTop: '-20px'
            }}>
                {Array(4).fill(0)?.map((_: any, idx: any) => {
                    return <AspectRatioContainer aspectRatio={1 / 1}>
                        <div style={{
                            width: `calc(100% / 2)`,
                            height: `calc(100% / 2)`,
                        }} key={idx} className={`md-py-20 ${idx % 2 === 0 ? "md-pr-20" : 'md-pl-20'}`}>
                            <Skeleton baseColor="#adb5bd" width={"100%"} height={"100%"} />


                        </div>
                    </AspectRatioContainer>

                })}
            </div>
        </>
    )
}

export default SkeletonExplore