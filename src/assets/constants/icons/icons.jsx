import { BsCheckAll, BsMic, BsStar, BsStarFill , BsDisc, BsDiscFill, BsThreeDotsVertical, BsPlusCircle, BsKey,BsQuestionCircle     } from "react-icons/bs";
import { TbSearch} from "react-icons/tb";
import { MdOutlineLock, MdArrowForwardIos, MdChat, MdOutlineChat , MdOutlineLogout    } from "react-icons/md";
import { IoSend, IoChatbubbleEllipsesOutline,IoChatbubbleEllipsesSharp, IoSettingsOutline, IoSettingsSharp,     } from "react-icons/io5";
import { HiUserGroup, HiOutlineUserGroup,    } from "react-icons/hi2";
import { FaRegBell,FaRegKeyboard  } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";




const ICONS = {

    Doublecheckmark: BsCheckAll,
    Arrowleft: FaArrowLeft,
    Search: TbSearch,
    Mic: BsMic,
    Send: IoSend,
    Star: BsStar,
    StarFill: BsStarFill,
    Chat: MdOutlineChat ,
    ChatFill: MdChat ,
    Status: BsDisc,
    StatusFill: BsDiscFill,
    Lock: MdOutlineLock,
    Channels: IoChatbubbleEllipsesOutline,
    ChannelsFill: IoChatbubbleEllipsesSharp,
    Communities: HiOutlineUserGroup,
    CommunitiesFill: HiUserGroup,
    Settings: IoSettingsOutline,
    SettingsFill: IoSettingsSharp,
    DotsMenu: BsThreeDotsVertical  ,
    PlusCircle: BsPlusCircle,
    ArrowForward: MdArrowForwardIos,
    Key: BsKey,
    Bell: FaRegBell,
    Keyboard: FaRegKeyboard,
    QuestionCircle: BsQuestionCircle,
    Logout: MdOutlineLogout,
}

export default ICONS