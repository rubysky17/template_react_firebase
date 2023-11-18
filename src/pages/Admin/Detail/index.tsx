import { useParams } from 'react-router-dom';


import { configScreen, sidebarWidth } from '../constant';
import SidebarAdmin from './components/sidebar';

function AdminDetailPage() {
    const { screen } = useParams<any>();

    return (
        <div>
            <SidebarAdmin />

            <div style={{
                paddingLeft: sidebarWidth
            }}>
                {configScreen.map((item, idx) => {
                    return <>
                        {item.path === screen?.toString() && item.screen}
                    </>
                })}
            </div>
        </div>
    )
}

export default AdminDetailPage