import { CommitHistory, EntryDetail } from "../types/github/commits";

export const formatDate = (isoString: string) => {
    const date = new Date(isoString);

    return new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
    }).format(date);
};

export const groupCommitsByDate = (commitHistory: CommitHistory) => {
    const commitMap = new Map<string, EntryDetail[]>();
    commitHistory.forEach((c) => {
        const date = formatDate(c.commit.author.date);
        commitMap.has(date)
            ? commitMap
                  .get(date)
                  ?.push({ sha: c.sha, message: c.commit.message })
            : commitMap.set(date, [{ sha: c.sha, message: c.commit.message }]);
    });
    return commitMap;
};
