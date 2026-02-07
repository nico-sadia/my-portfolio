import { formatDistanceToNow } from "date-fns";
import ChangelogList from "../../features/changelog/components/ChangelogList";
import ChangelogStats from "../../features/changelog/components/ChangelogStats";
import { getCommitHistory } from "../../features/changelog/services/getCommitHistory";

export default async function Changelog() {
  const commitHistory = await getCommitHistory();
  return (
    <main className="space-y-6">
      <ChangelogStats
        commitCount={commitHistory.length}
        lastUpdate={formatDistanceToNow(commitHistory[0].commit.author.date, {
          addSuffix: true,
        })}
      />
      <ChangelogList commitHistory={commitHistory} />
    </main>
  );
}
