type ChangelogEntryProps = {
    date: string;
    sha: string;
    message: string;
};

export default function ChangelogEntry({
    date,
    sha,
    message,
}: ChangelogEntryProps) {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-between">
                <h2 className="text-lg font-bold">{date}</h2>
                <h4 className="text-xs">{sha}</h4>
            </div>
            <p>{message}</p>
        </div>
    );
}
