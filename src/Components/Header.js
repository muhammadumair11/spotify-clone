import { Search } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import "../assets/scss/components-scss/header.scss";
import { useDataLayerValue } from "../ContextAPI/DataLayer";


function Header() {
    const [{ user }, dispatch] = useDataLayerValue();
    return (
        <div className="header">
            <div className="header__left">
                <Search/>
                <input placeholder="Search for Artists, Songs, or Anything else" type="text" />
            </div>
            <div className="header__right">
                <Avatar src={user?.images[0]?.url} alt={ user?.display_name} />
                <h4>
                    { user?.display_name }
                </h4>
            </div>
        </div>
    )
}

export default Header