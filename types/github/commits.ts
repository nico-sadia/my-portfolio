import { GithubAuthor, Verification } from "./shared";

export type CommitHistory = Commit[];

interface Commit {
    url: string;
    sha: string;
    node_id: string;
    html_url: string;
    comments_url: string;
    commit: CommitDetail;
    author: GithubAuthor;
    committer: GithubAuthor;
    parents: CommitTree[];
}

interface CommitDetail {
    url: string;
    author: CommitAuthor;
    committer: CommitAuthor;
    message: string;
    tree: CommitTree;
    comment_count: number;
    verification: Verification;
}

interface CommitAuthor {
    name: string;
    email: string;
    date: string;
}

interface CommitTree {
    url: string;
    sha: string;
}
