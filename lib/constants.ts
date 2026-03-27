// Assets
export const R2_BASE_URL =
    "https://pub-280f09da048d460093e78e545200c0e6.r2.dev";

const r2NicoAsset = (path: string) => `${R2_BASE_URL}/nico.dev/${path}`;

export const ASSETS = {
    icons: {
        nicoPfp: r2NicoAsset("icons/Nico-Sadia-PFP.jpg"),
        spotifyPrimary: r2NicoAsset("icons/Spotify_Primary_Logo_Green.png"),
        cronJob: r2NicoAsset("icons/cron-job-logo.jpg"),
        github: {
            white: r2NicoAsset("icons/GitHub_Invertocat_White.svg"),
            black: r2NicoAsset("icons/GitHub_Invertocat_Black.svg"),
        },
    },
    diagrams: {
        spotifySaverSequence: r2NicoAsset(
            "diagrams/spotify-saver-sequence-diagram.svg",
        ),
    },
    screenshots: {
        cronJobCreationSettings: r2NicoAsset(
            "screenshots/cron_job_creation_settings.png",
        ),
        spotifySaverDashboard: r2NicoAsset(
            "screenshots/spotify-saver-dashboard.webp",
        ),
        spotifySaverHistory: r2NicoAsset(
            "screenshots/spotify-saver-history.webp",
        ),
        spotifySaverLanding: r2NicoAsset(
            "screenshots/spotify-saver-landing.webp",
        ),
        spotifySaverSettings: r2NicoAsset(
            "screenshots/spotify-saver-settings.webp",
        ),
    },
    pokemon: {
        pulls: {
            sv: {
                mew: {
                    venuPoli: r2NicoAsset("pokemon/IMG_1117.jpeg"),
                    spread: r2NicoAsset("pokemon/IMG_1116.jpeg"),
                },
            },
        },
    },
};

// Github
const GITHUB_BASE_URL = "https://api.github.com";
const GITHUB_OWNER = "nico-sadia";
const GITHUB_REPO = "my-portfolio";
export const GITHUB_REPO_URL = "https://github.com/nico-sadia/my-portfolio";
export const GITHUB_REPO_COMMIT_READ_URL = `${GITHUB_BASE_URL}/repos/${GITHUB_OWNER}/${GITHUB_REPO}/commits`;
