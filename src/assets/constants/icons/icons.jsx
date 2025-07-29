import { BsCheckAll, BsArrowLeft, BsMic, BsStar, BsStarFill, BsChatLeftText, BsChatLeftTextFill, BsDisc, BsDiscFill } from "react-icons/bs";
import { TbSearch} from "react-icons/tb";
import { MdOutlineLock } from "react-icons/md";
import { IoSend, IoChatbubbleEllipsesOutline,IoChatbubbleEllipsesSharp, IoSettingsOutline, IoSettingsSharp    } from "react-icons/io5";
import { HiUserGroup, HiOutlineUserGroup } from "react-icons/hi2";


const ICONS = {

    Doublecheckmark: BsCheckAll,
    Arrowleft: BsArrowLeft,
    Search: TbSearch,
    Mic: BsMic,
    Send: IoSend,
    Star: BsStar,
    StarFill: BsStarFill,
    Chat: BsChatLeftText,
    ChatFill: BsChatLeftTextFill,
    Status: BsDisc,
    StatusFill: BsDiscFill,
    Lock: MdOutlineLock,
    Channels: IoChatbubbleEllipsesOutline,
    ChannelsFill: IoChatbubbleEllipsesSharp,
    Communities: HiOutlineUserGroup,
    CommunitiesFill: HiUserGroup,
    Settings: IoSettingsOutline,
    SettingsFill: IoSettingsSharp
}

export default ICONS