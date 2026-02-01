// Assets

export const R2_BASE_URL =
    "https://pub-280f09da048d460093e78e545200c0e6.r2.dev";

export const ASSETS = {
    ICONS: {
        NICO: {
            PFP: `${R2_BASE_URL}/nico.dev/icons/Nico-Sadia-PFP.jpg`,
        },
    },
    POKEMON: {
        PULLS: {
            SV: {
                MEW: {
                    VENUPOLI: `${R2_BASE_URL}/nico.dev/pokemon/IMG_1117.jpeg`,
                    SPREAD: `${R2_BASE_URL}/nico.dev/pokemon/IMG_1116.jpeg`,
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
