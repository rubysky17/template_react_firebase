import Header from "../components/Header";

const MasterLayout = ({ children }: any) => {
    return (
        <div className="wrapper-container-embbed hrv-report-container">
            <Header />

            <div className="md-px-20 md-bg-secondary">
                {children}
            </div>
        </div>
    );
};

export default MasterLayout;
