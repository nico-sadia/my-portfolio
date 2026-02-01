type ChangelogStatsProps = {
    commitCount: number;
    lastUpdate: string;
};

export default function ChangelogStats({
    commitCount,
    lastUpdate,
}: ChangelogStatsProps) {
    return (
        <div className="flex flex-row justify-between text-xs font-bold">
            <h3>{commitCount} commits</h3>
            <h3>last update: {lastUpdate}</h3>
        </div>
    );
}
