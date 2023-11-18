import { useParams } from 'react-router-dom';


import { configScreen, sidebarWidth } from '../constant';
import SidebarAdmin from './components/sidebar';
import { Provider } from './context';

function AdminDetailPage() {
    const { screen } = useParams<any>();

    return (
        <Provider>
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
        </Provider>

    )
}

export default AdminDetailPage