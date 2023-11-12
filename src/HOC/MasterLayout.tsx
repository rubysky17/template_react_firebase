import Header from "../components/Header";

const MasterLayout = ({ children }: any) => {
    return (
        <div className="md-report-container md-bg-secondary">
            <div className="wrapper-container">
                <Header />

                <div className="md-px-90 md-bg-secondary">
                    {children}
                </div>
            </div>

        </div>
    );
};

export default MasterLayout;
