import { groupCommitsByDate } from "../../../lib/utils";
import { CommitHistory } from "../../../types/github/commits";
import ChangelogEntry from "./ChangelogEntry";

type ChangelogListProps = {
  commitHistory: CommitHistory;
};

export default function ChangelogList({ commitHistory }: ChangelogListProps) {
  const commitMap = groupCommitsByDate(commitHistory);
  return (
    <div className="flex flex-col gap-10">
      {[...commitMap.entries()].map(([date, entries]) => (
        <ChangelogEntry key={date} date={date} entries={entries} />
      ))}
    </div>
  );
}
