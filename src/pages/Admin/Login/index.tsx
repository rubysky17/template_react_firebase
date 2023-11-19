import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../../hooks/useStorage/useStorage";

import { ToastContainer, toast } from 'react-toastify';
import { getList } from "../../../constants/firebase";

import "./styles.scss";

const DATE_EXPIRED = 3 * 24 * 60 * 6 * 1000; // 3 ngày

function LoginPage() {
    const navigate = useNavigate();

    const [token, setToken] = useLocalStorage("token");
    const [expiredToken, setExpiredToken] = useLocalStorage("expired_token");

    const [isLoading, setIsLoading] = useState(false)
    const [account, setAccount] = useState<any>({
        username: "",
        password: ""
    });


    useEffect(() => {
        if (token && expiredToken > Date.now()) {
            navigate('/admin/project')
        } else {
            setToken(false)
            setExpiredToken("")
        }
    }, [token]);

    const onHandleChange = (name: any, value: any) => {
        setAccount({
            ...account,
            [name]: value
        })
    }

    const onClickSubmit = () => {
        setIsLoading(true);

        if (isLoading) {
            return;
        }

        if (!account.username.length) {
            toast.error("Vui lòng nhập tài khoản", {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: true,
                theme: 'dark'
            })


            return setIsLoading(false)
        }

        if (!account.password.length) {
            toast.error("Vui lòng nhập mật khẩu", {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: true,
                theme: 'dark'
            })

            return setIsLoading(false)
        }

        getList("admin_login")
            .then((res) => {
                const accountList = res;

                const findAccount = accountList.findIndex((y: any) => y.username === account.username);

                if (findAccount !== -1) {
                    if (accountList[findAccount].password === account.password) {
                        toast.success("Đăng nhập thành công", {
                            position: "bottom-right",
                            autoClose: 2000,
                            hideProgressBar: true,
                            theme: 'dark'
                        });

                        setToken(true);
                        setExpiredToken(Date.now() + DATE_EXPIRED)
                    } else {
                        toast.error("Đăng nhập thất bại vui lòng kiểm tra lại", {
                            position: "bottom-right",
                            autoClose: 2000,
                            hideProgressBar: true,
                            theme: 'dark'
                        })
                    }
                } else {
                    toast.error("Đăng nhập thất bại vui lòng kiểm tra lại", {
                        position: "bottom-right",
                        autoClose: 2000,
                        hideProgressBar: true,
                        theme: 'dark'
                    })
                }
                setIsLoading(false)
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setIsLoading(false)
            });
    }

    return (
        <div className="md-login-background">
            <form className="md-form">
                <h2>Đăng nhập</h2>

                <input className="md-login-input md-user" type="text" placeholder="Tài khoản" value={account.username} onChange={(e) => {
                    onHandleChange("username", e.target.value)
                }} />
                <input className="md-login-input md-pass" type="password" placeholder="Mật khẩu" value={account.password} onChange={(e) => {
                    onHandleChange("password", e.target.value)
                }} />

                <button className="md-btn" onClick={() => {
                    onClickSubmit();
                }} type="button">Đăng nhập</button>
            </form>

            <ToastContainer />
        </div>
    )
}

export default LoginPage