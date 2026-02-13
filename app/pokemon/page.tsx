import Image from "next/image";
import { ASSETS } from "../../lib/constants";

export default function Pokemon() {
    return (
        <div>
            <h1>pokemon yeahhhh</h1>
            <div className="flex flex-row gap-8">
                <Image
                    src={ASSETS.pokemon.pulls.sv.mew.spread}
                    alt="151 pack spread"
                    width={250}
                    height={250}
                />
                <Image
                    src={ASSETS.pokemon.pulls.sv.mew.venuPoli}
                    alt="Venusaur and Poliwhirl 151 pull"
                    width={250}
                    height={250}
                />
            </div>
        </div>
    );
}
