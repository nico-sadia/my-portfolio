import { Logo, SpotifyGreen } from "@/svg";
import { MdOutlineTimer } from "react-icons/md";

export const ICON_MAP = {
    spotifyGreen: SpotifyGreen,
    logo: Logo,
    timer: MdOutlineTimer,
};

export type IconKey = keyof typeof ICON_MAP;
