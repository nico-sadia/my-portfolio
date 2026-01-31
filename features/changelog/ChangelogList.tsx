import { formatDate } from "../../lib/utils";
import { CommitHistory } from "../../types/github/commits";
import ChangelogEntry from "./ChangelogEntry";

type ChangelogListProps = {
    commitHistory: CommitHistory;
};

export default function ChangelogList({ commitHistory }: ChangelogListProps) {
    return (
        <div className="flex flex-col gap-16">
            {commitHistory.map((c) => (
                <ChangelogEntry
                    key={c.sha}
                    date={formatDate(c.commit.author.date)}
                    sha={c.sha}
                    message={c.commit.message}
                />
            ))}
        </div>
    );
}
