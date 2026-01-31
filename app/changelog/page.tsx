import ChangelogList from "../../features/changelog/ChangelogList";
import { GITHUB_REPO_COMMIT_READ_URL } from "../../lib/constants";
import { CommitHistory } from "../../types/github/commits";

export default async function Changelog() {
    const commitHistory = await getCommitHistory();
    return (
        <main>
            <ChangelogList commitHistory={commitHistory} />
        </main>
    );
}

const getCommitHistory = async () => {
    const res = await fetch(GITHUB_REPO_COMMIT_READ_URL, {
        headers: {
            Authorization: `Bearer ${process.env.GITHUB_PAT}`,
        },
        next: { revalidate: 3600 }, // Keep data in cache but revalidate after 60 minutes
    });

    if (!res.ok) throw new Error("Failed to fetch commit history");
    const data: CommitHistory = await res.json();
    return data;
};
