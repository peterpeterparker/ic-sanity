# ic-sanity

This template enables you to deploy an Astro + Sanity website on the Internet Computer. The deployment is done through [Juno](https://juno.build/).

> 🌟 **New to Juno?** Check it out at [juno.build](https://juno.build/)

> 🚀 **New to Astro?** Check it out at [astro.build](https://astro.build/)

> 🎯 **New to Sanity?** Check it out at [sanity.io](https://sanity.io/)

## Usage

### Requirements

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/download/)
- [pnpm](https://pnpm.io/)
- [Juno CLI](https://juno.build/docs/miscellaneous/cli)

### Local development

1. Clone this repository (or use it as a template for your own project) and install dependencies:

   ```bash
   git clone https://github.com/ICP-HUB-Italy-Ticino/ic-sanity.git
   cd ic-sanity
   pnpm install
   ```

2. Create a satellite on Juno ([guide](https://juno.build/docs/create-a-satellite)). Copy the satellite ID once done.
3. Login to the Juno console and link the new satellite once asked:

   ```bash
   juno login
   ```

4. Update the `<your-satellite-id>` in the [`juno.config.ts`](./juno.config.ts) file with the new satellite ID.
5. Create a new project with a dataset on Sanity ([guide](https://www.sanity.io/docs/getting-started-with-sanity)). Copy the project ID and the dataset name once done.
6. Set the environment variables in the `.env` file, following the [.env.example](./.env.example) template.
7. Deploy your project on Juno:
   ```bash
   pnpm run deploy
   ```

You can now access your website at `https://<your-satellite-id>.icp0.io` and the [Sanity Studio](https://www.sanity.io/studio) at `https://<your-satellite-id>.icp0.io/studio`.

Every time you make a change, you have to deploy your project again with the Juno CLI:

```bash
pnpm run deploy
```

Have a look at the [Set up the GitHub Action](#set-up-the-github-action) and/or [Set up Sanity deployments](#set-up-sanity-deployments) to configure automatic deployments.

You can run the local preview with:

```bash
pnpm dev
```

### Set up the GitHub Action

In order to deploy your website to production every time you push to the `main` branch, you need to set up a GitHub Action. There's already a GitHub Action set up for this repository, check it out at [deploy.yaml](./.github/workflows/deploy.yaml).

You need to configure the same environment variables of your `.env` file as GitHub Action variables ([guide](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/store-information-in-variables)):

- `JUNO_TOKEN` ([guide](https://juno.build/docs/guides/github-actions))
- `SANITY_STUDIO_PROJECT_ID`
- `SANITY_STUDIO_DATASET`

> We recommend you to set up GitHub variables instead of secrets for the `SANITY_STUDIO_*` variables, so that you can always lookup the values of these variables at any time. If you choose to set up secrets instead, make sure you update the [deploy.yaml](./.github/workflows/deploy.yaml) action to read the values from the secrets.

### Set up Sanity deployments

In order to update the content of the website every time you save a document on Sanity, you need to set up a Sanity to trigger a deployment on GitHub.

TBD
