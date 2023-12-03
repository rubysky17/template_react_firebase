import React from 'react'
import Skeleton from 'react-loading-skeleton'
import AspectRatioContainer from '../../AspectRatio'

function SkeletonProject() {
    return (
        <div>
            <div>
                <div className="md-mb-4">
                    <Skeleton baseColor="#adb5bd" />
                </div>
                <div className="md-mb-10">
                    <Skeleton baseColor="#adb5bd" />
                </div>

                <div className="md-mb-4">
                    <Skeleton baseColor="#adb5bd" />
                </div>
                <div className="md-mb-10">
                    <Skeleton baseColor="#adb5bd" />
                </div>

                <div className="md-mb-4">
                    <Skeleton baseColor="#adb5bd" />
                </div>

                <div className="md-mb-10">
                    <Skeleton baseColor="#adb5bd" />
                </div>

                <div className="md-row" style={{
                    marginRight: '-10px',
                    marginLeft: '-10px',
                }}>
                    {Array(10).fill(0).map((_: any, idx: any) => {
                        return <AspectRatioContainer aspectRatio={1 / 1}>
                            <div style={{
                                width: '100%',
                                height: "100%"
                            }} className="md-p-10 md-project-detail-picture" key={idx} >
                                <Skeleton baseColor="#adb5bd" width="100%" height="100%" />
                            </div>
                        </AspectRatioContainer>
                    })}
                </div>
            </div>
        </div>
    )
}

export default SkeletonProject