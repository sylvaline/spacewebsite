import React from 'react'
import Contact from './Contact'
import MobileContact from './MobileContact'
import Float from "./Float";

function SubLayout({children}) {
    return (
        <div>
            {children}
            <div className="mobile_contact">
            <MobileContact />
            </div>
            <div className="window_contact">
            <Contact />
            </div>
            <Float />
        </div>
    )
}

export default SubLayout
