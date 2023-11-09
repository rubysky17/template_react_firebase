import { useState, useEffect } from "react"

import LoadingPage from "../../components/Loading"
import MenuList from "../../components/Menu";
import SwitchTranslate from "../../components/SwitchTranslate";
import Logo from "../../assets/images/logo.png"

function HomePage() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, []);

    return (
        <>
            {<LoadingPage isLoading={isLoading} />}

            <div className="md-bg-primary" style={{
                width: "100vw",
                height: "100vh",
                zIndex: 1
            }}>
                <div style={{
                    height: "20%"
                }} className="md-d-flex md-justify-center md-items-center md-flex-col">
                    <img src={Logo} style={{
                        width: 70,
                        height: 70
                    }} alt="menu_trans" />

                    <SwitchTranslate />
                </div>

                <MenuList />
            </div>
        </>
    )
}

export default HomePage