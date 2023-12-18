import { useEffect, useRef } from 'react';
const _ = require('lodash');

const AspectRatioContainer = ({ aspectRatio, className, children }: any) => {
    const containerRef = useRef<any>();


    const updateHeight = () => {
        if (containerRef.current) {
            containerRef.current.style.height = `${containerRef.current.offsetWidth / aspectRatio}px`;
        }
    };

    const debouncedUpdateHeight = _.debounce(updateHeight, 100);


    useEffect(() => {
        if (containerRef.current && 'ResizeObserver' in window) {
            const resizeObserver = new ResizeObserver(debouncedUpdateHeight);
            resizeObserver.observe(containerRef.current);

            return () => {
                resizeObserver.disconnect();
            };
        } else {
            window.addEventListener('resize', debouncedUpdateHeight);

            return () => {
                window.removeEventListener('resize', debouncedUpdateHeight);
            };
        }
    }, [aspectRatio, debouncedUpdateHeight]);

    return (
        <div ref={containerRef} style={{ position: 'relative', width: '100%' }} className={className}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                {children}
            </div>
        </div>
    );
};

export default AspectRatioContainer