import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
    auth: "YOUR_GITHUB_TOKEN"
});

async function updateFile(){

    // STEP-1: get file info
    const file = await octokit.repos.getContent({

        owner: "Prince161724",
        repo: "Test-repo",
        path: "backend/ksksksk/app.js"
    });

    const sha = file.data.sha;

    // STEP-2: update file
    await octokit.repos.createOrUpdateFileContents({

        owner: "Prince161724",
        repo: "Test-repo",

        path: "backend/ksksksk/app.js",

        message: "update app.js using Octokit",

        content: Buffer.from(
            'console.log("Updated by Octokit 🔥");'
        ).toString("base64"),

        sha: sha

    });

    console.log("File updated successfully");

}

updateFile();