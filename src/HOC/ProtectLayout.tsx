import { useEffect } from "react";
import { useLocalStorage } from "../hooks/useStorage/useStorage";
import { useNavigate } from "react-router-dom";

const ProtectLayout = ({ children }: any) => {
    const navigate = useNavigate();
    const [token, setToken] = useLocalStorage("token");
    const [expiredToken, setExpiredToken] = useLocalStorage("expired_token");

    useEffect(() => {
        if (!token || expiredToken < Date.now()) {
            setToken(false)
            setExpiredToken("")
            navigate("/admin");
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="md-report-container md-bg-secondary">
            <div className="wrapper-container">
                <div className="md-bg-secondary">
                    {children}
                </div>
            </div>

        </div>
    );
};

export default ProtectLayout;
