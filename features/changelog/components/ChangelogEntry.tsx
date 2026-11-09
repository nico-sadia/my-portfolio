import Link from "../../../components/ui/Link";
import { EntryDetail } from "../../../types/github/commits";

type ChangelogEntryProps = { date: string; entries: EntryDetail[] };

const prefixClasses: Record<string, string> = {
    fix: "text-rose-400",
    content: "text-sky-400",
    feat: "text-emerald-400",
    refactor: "text-violet-400",
    update: "text-amber-400",
    chore: "text-yellow-400",
};

export default function ChangelogEntry({ date, entries }: ChangelogEntryProps) {
    return (
        <div>
            <h2 className="text-xl font-bold">{date}</h2>
            <ul className="list-disc pl-2">
                {entries.map((e) => {
                    const [rawPrefix, ...rest] = e.message.split(":");
                    const prefix = rawPrefix.trim();
                    const message = rest.join(":").trim();
                    const prefixClass =
                        prefixClasses[prefix.toLowerCase()] ?? "text-gray-400";

                    return (
                        <li
                            key={e.sha}
                            className="flex flex-row justify-between"
                        >
                            <p>
                                {">"}{" "}
                                <span
                                    className={`font-semibold ${prefixClass}`}
                                >
                                    {prefix}:
                                </span>{" "}
                                {message}
                            </p>
                            <span className="text-xs">
                                <Link
                                    href={`https://github.com/nico-sadia/my-portfolio/commit/${e.sha}`}
                                >
                                    {e.sha.substring(0, 7)}
                                </Link>
                            </span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
