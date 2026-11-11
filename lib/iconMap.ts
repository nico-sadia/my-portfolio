import { Logo, SpotifyGreen } from "@/svg";
import { MdEco, MdOutlineTimer } from "react-icons/md";

export const ICON_MAP = {
    spotifyGreen: SpotifyGreen,
    logo: Logo,
    timer: MdOutlineTimer,
    eco: MdEco,
};

export type IconKey = keyof typeof ICON_MAP;
