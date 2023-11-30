import { useStore } from "../AppProvider/context/store";
import Header from "../components/Header";
import { SearchPage } from "../pages";

import useDebounce from "../hooks/useDebounded";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useHistory from "../hooks/useHistory";
import { buildQueryString } from "../helpers/helpers";


const ExploreDetailLayout = ({ children }: any) => {
    const { state, actions, dispatch } = useStore();
    const location = useLocation();
    const { push } = useHistory();
    const [isPush, setIsPush] = useState(false)


    const { keySearch } = state;

    const debouncedValue = useDebounce<string>(keySearch, 500);

    const handleChangeSearch = (value: any) => {
        setIsPush(true);
        dispatch(actions.setKeySearch(value))
    }


    useEffect(() => {
        if (debouncedValue.length && isPush) {
            let queryParam = buildQueryString({
                key: debouncedValue
            });

            push(`${location.pathname}${queryParam}`);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedValue]);


    useEffect(() => {
        const searchParams: any = new URLSearchParams(location.search);

        if (searchParams.has("key")) {
            let getTypeParams = searchParams.get('key')
            dispatch(actions.setKeySearch(getTypeParams))
        } else {
            dispatch(actions.setKeySearch(''))
        }
    }, [location.search])


    useEffect(() => {
        if (location?.search) {
            const searchParams: any = new URLSearchParams(location.search);

            if (searchParams.has("key")) {
                let getSearchParams = searchParams.get('key');

                dispatch(actions.setKeySearch(getSearchParams));
                setIsPush(false);
            } else {
                dispatch(actions.setKeySearch(''));
            }
        } else {
            dispatch(actions.setKeySearch(''));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location])

    return (
        <div className="md-report-container md-bg-secondary">
            <div className="wrapper-container">
                <Header keySearch={keySearch} onSearch={handleChangeSearch} />

                {debouncedValue.length ? <div className="md-px-20 md-md-px-30 md-bg-secondary">
                    <SearchPage keySearch={debouncedValue} />
                </div> : <div className="md-bg-secondary">
                    {children}
                </div>}
            </div>

        </div>
    );
};

export default ExploreDetailLayout;
