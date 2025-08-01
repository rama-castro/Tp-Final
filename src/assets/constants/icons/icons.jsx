import { BsCheckAll, BsMic, BsStar, BsStarFill , BsDisc, BsDiscFill, BsThreeDotsVertical, BsPlusCircle, BsKey,BsQuestionCircle     } from "react-icons/bs";
import { MdOutlineLock, MdArrowForwardIos, MdChat, MdOutlineChat , MdOutlineLogout    } from "react-icons/md";
import { IoSend, IoChatbubbleEllipsesOutline,IoChatbubbleEllipsesSharp, IoSettingsOutline, IoSettingsSharp, IoSearchSharp     } from "react-icons/io5";
import { HiUserGroup, HiOutlineUserGroup,    } from "react-icons/hi2";
import { FaRegBell,FaRegKeyboard, FaUserCircle   } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { PiVideoCameraBold } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineModeEditOutline } from "react-icons/md";





const ICONS = {

    Doublecheckmark: BsCheckAll,
    Arrowleft: FaArrowLeft,
    Search:IoSearchSharp ,
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
    Camera: PiVideoCameraBold,
    DownArrow: IoIosArrowDown,
    PencilEdit: MdOutlineModeEditOutline,
    UserCircle: FaUserCircle,
}

export default ICONS