import Link from "../../components/ui/Link";
import { EntryDetail } from "../../types/github/commits";

type ChangelogEntryProps = { date: string; entries: EntryDetail[] };

export default function ChangelogEntry({ date, entries }: ChangelogEntryProps) {
    return (
        <div>
            <h2 className="text-xl font-bold">{date}</h2>
            <ul className="list-disc pl-2">
                {entries.map((e) => (
                    <li key={e.sha} className="flex flex-row justify-between">
                        <p>
                            {">"} {e.message}
                        </p>
                        <span className="text-xs">
                            <Link
                                href={`https://github.com/nico-sadia/my-portfolio/commit/${e.sha}`}
                            >
                                {e.sha.substring(0, 7)}
                            </Link>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
