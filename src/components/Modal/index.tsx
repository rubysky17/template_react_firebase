import Dialog from "rc-dialog";

import "rc-dialog/assets/index.css";
import "./styles.scss";

interface IModal {
    visible?: boolean;
    onClose?: any;
    renderHeader?: any;
    renderBody?: any;
    renderFooter?: any;
    afterClose?: any;
    destroyOnClose?: boolean;
    closable?: boolean;
    maskClosable?: boolean;
    className?: string;
}

const Modal = (props: IModal) => {
    const {
        visible,
        onClose,
        closable,
        maskClosable,
        renderHeader,
        renderBody,
        afterClose,
        className,
        renderFooter,
    } = props;

    return (
        <Dialog
            title={renderHeader()}
            visible={visible}
            closable={closable}
            afterClose={afterClose}
            maskClosable={maskClosable}
            onClose={onClose}
            className={`${className} hrv-gga-mt-100`}
            footer={renderFooter()}
        >
            {renderBody()}
        </Dialog>
    );
};

Modal.defaultProps = {
    visible: false,
    onClose: () => { },
    renderHeader: () => { },
    renderBody: () => { },
    renderFooter: () => { },
    afterClose: () => { },
    destroyOnClose: false,
    closable: true,
    maskClosable: true,
    className: "",
};

export default (Modal);
