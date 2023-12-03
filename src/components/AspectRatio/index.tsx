import { useEffect, useRef } from 'react';

const AspectRatioContainer = ({ aspectRatio, children }: any) => {
    const containerRef = useRef<any>();

    useEffect(() => {
        const updateHeight = () => {
            if (containerRef.current) {
                containerRef.current.style.height = `${containerRef.current.offsetWidth / aspectRatio
                    }px`;
            }
        };

        // Khởi tạo chiều cao ban đầu
        updateHeight();

        // Cập nhật lại chiều cao khi cửa sổ trình duyệt thay đổi kích thước
        window.addEventListener('resize', updateHeight);

        // Cleanup effect khi component unmount
        return () => {
            window.removeEventListener('resize', updateHeight);
        };
    }, [aspectRatio]);

    return (
        <div ref={containerRef} style={{ position: 'relative', width: '100%' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                {children}
            </div>
        </div>
    );
};

export default AspectRatioContainer