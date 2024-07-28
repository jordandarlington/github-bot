import { Probot } from "probot";
import { PullRequestOpenedEvent } from "@octokit/webhooks-types";

export default (app: Probot) => {

    // ADD LABELS TO NEW PRS
    app.on("pull_request.opened", async (context) => {
        const pr: PullRequestOpenedEvent["pull_request"] = context.payload.pull_request;
        const branch: string = pr.head.ref;
        let labelsToAdd: string[] = [];

        if (branch === "main") {
            labelsToAdd = ["main", "QA in progress"];
        } else if (branch === "develop") {
            labelsToAdd = ["develop"];
        }

        const existingLabels = pr.labels.map(label => label.name);
        const newLabels = labelsToAdd.filter(label => !existingLabels.includes(label));

        if (newLabels.length > 0) {
            await context.octokit.issues.addLabels({
                owner: pr.base.repo.owner.login,
                repo: pr.base.repo.name,
                issue_number: pr.number,
                labels: newLabels
            });
        }
    });

    // APPROVE PRS THAT ALREADY HAVE A APPROVAL FROM A SPECIFOC TEAM MEMBER
    // app.on("pull_request_review.submitted", async (context) => {
    //     const pr: PullRequestOpenedEvent["pull_request"] = context.payload.pull_request;
    //     const reviews = await context.octokit.pulls.listReviews({
    //         owner: pr.base.repo.owner.login,
    //         repo: pr.base.repo.name,
    //         pull_number: pr.number
    //     });

    //     const approvals = reviews.data.filter(review => review.state === "APPROVED");
    //     if (approvals.length > 0) {
    //         await context.octokit.pulls.createReview({
    //             owner: pr.base.repo.owner.login,
    //             repo: pr.base.repo.name,
    //             pull_number: pr.number,
    //             event: "APPROVE"
    //         });
    //     }
    // });

    //TODO: create private method to approve pull requests then call it on all relevant pull request review events
    // async function assessApproval(context: any) {

    // }

    // async function assessLabels(context: any) {

    // }
};
