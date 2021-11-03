import  LocalHospitalIcon  from '@material-ui/icons/LocalHospital'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import  PeopleIcon  from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow'
import  StorefrontIcon  from '@material-ui/icons/Storefront'
import  VideoLibraryIcon  from '@material-ui/icons/VideoLibrary'
import { ExpandMoreOutlined } from '@material-ui/icons'
function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src="https://scontent.fhan3-4.fna.fbcdn.net/v/t1.6435-9/89951757_1057569771273040_1808126200200036352_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=bx_RR5BWugEAX_94Kjp&tn=TlW7obSw9K3IxkR8&_nc_ht=scontent.fhan3-4.fna&oh=3679f03559f0517403694b8b72b3b316&oe=61610492" title="Bach Dang Dung" />
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center" />
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SidebarRow Icon={PeopleIcon} title="Friends" />
            <SidebarRow Icon={ChatIcon} title="Messenger" />
            <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlined} title="a"/>
        </div>
    )
}

export default Sidebar
