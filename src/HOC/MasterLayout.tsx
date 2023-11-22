import { useStore } from "../AppProvider/context/store";
import Header from "../components/Header";
import { SearchPage } from "../pages";

import useDebounce from "../hooks/useDebounded";


const MasterLayout = ({ children }: any) => {
    const { state, actions, dispatch } = useStore();


    const { keySearch } = state;

    const debouncedValue = useDebounce<string>(keySearch, 500);


    const handleChangeSearch = (value: any) => {
        dispatch(actions.setKeySearch(value))
    }

    return (
        <div className="md-report-container md-bg-secondary">
            <div className="wrapper-container">
                <Header keySearch={keySearch} onSearch={handleChangeSearch} />

                {debouncedValue.length ? <div className="md-px-20 md-md-px-30 md-bg-secondary">
                    <SearchPage keySearch={debouncedValue} />
                </div> : <div className="md-px-20 md-md-px-30 md-bg-secondary">
                    {children}
                </div>}
            </div>

        </div>
    );
};

export default MasterLayout;
