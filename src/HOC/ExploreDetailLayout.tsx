import Header from "../components/Header";

const ExploreDetailLayout = ({ children }: any) => {
    return (
        <div className="md-report-container md-bg-secondary">
            <div className="wrapper-container">
                <Header />

                <div className="md-bg-secondary">
                    {children}
                </div>
            </div>

        </div>
    );
};

export default ExploreDetailLayout;
