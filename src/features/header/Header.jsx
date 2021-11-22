import React from 'react'

import "./Header.css"

const Header = () => {
    return (
        <div className={"header"}>
            <div className={"name"}>
                Curtis Martin
            </div>
            <div className={"tag"}>
                Amazing tag line that makes HR managers want to hire you immediately.\\The tag line is aligned with the bottom of the picture to the right, so if you have\\multiple lines it fills the space to your name from the bottom. You might want to\\introduce manual line breaks to make this look nicer then simply filling up the lines.
            </div>
        </div>
    )
}

export default Header;