// Assets

export const R2_BASE_URL =
    "https://pub-280f09da048d460093e78e545200c0e6.r2.dev";

export const ASSETS = {
    icons: {
        nicoPfp: `${R2_BASE_URL}/nico.dev/icons/Nico-Sadia-PFP.jpg`,
        spotifyPrimary: `${R2_BASE_URL}/nico.dev/icons/Spotify_Primary_Logo_Green.png`,
        cronJob: `${R2_BASE_URL}/nico.dev/icons/cron-job-logo.jpg`,
        github: {
            white: `${R2_BASE_URL}/nico.dev/icons/GitHub_Invertocat_White.svg`,
            black: `${R2_BASE_URL}/nico.dev/icons/GitHub_Invertocat_Black.svg`,
        },
    },
    diagrams: {
        spotifySaverSequence: `${R2_BASE_URL}/nico.dev/diagrams/spotify-saver-sequence-diagram.svg`,
    },
    pokemon: {
        pulls: {
            sv: {
                mew: {
                    venuPoli: `${R2_BASE_URL}/nico.dev/pokemon/IMG_1117.jpeg`,
                    spread: `${R2_BASE_URL}/nico.dev/pokemon/IMG_1116.jpeg`,
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
