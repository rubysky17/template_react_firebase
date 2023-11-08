import { MENU_CONSTANT } from "../../constants/constants"
import useWindowDimension from "../../hooks/useWindowDimension/useWindowDimension"

function MenuList() {
    const { width } = useWindowDimension();

    return (
        <div style={{
            height: "70%"
        }} className="md-d-flex md-justify-between md-items-center md-p-40">
            {MENU_CONSTANT.map((item, idx) => {
                return <div className="md-p-10 md-relative" key={idx} style={{
                    width: (width / 3.5)
                }}>
                    <img src={item.image} className="md-custom-menu md-cursor-pointer" />

                    <h2 className="md-cursor-pointer md-text-color-white md-absolute md-mb-0" style={{
                        top: "50%",
                        left: '50%',
                        transform: `translate(-50%, -50%)`
                    }}>{item.name}</h2>
                </div>
            })}
        </div>
    )
}

export default MenuList