import NewsifyIcon from "../NewsifyIcon";

import "./MainHeader.scss"

const MainHeader = ({children}) => {
    
    return (
        <header className="mainHeader --flex --gap-16px">
            <h1 className="__heading --playfair --grey --flex --gap-16px"><NewsifyIcon size={"small"} />Newsify</h1>
            {children}
        </header>
    )
}

export default MainHeader