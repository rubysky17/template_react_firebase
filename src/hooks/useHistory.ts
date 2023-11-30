// import { useEmbedApp } from "@haravan/reactapp";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

export default function useHistory() {
    const navigate = useNavigate();
    const navigator = useMemo(
        () => ({
            push: (path: any) => navigate(path, { replace: false, state: { propagator: true } }),
        }),
        [navigate],
    );

    const push = (path: any) => {
        navigator.push(path);
    }

    return { push };
}