# Development

 ## Pre-requisites
 Generally, the latest version compatible version of `node` and `pnpm` are used, assuming they are available on Cloudflare Pages as well.

 - **Node 20.4.0**
 - **pnpm 8.6.9**

_Optionally but recommended_, feel free to use [VSCode](https://code.visualstudio.com/) with the following recommended extensions. This will help highlight lint errors and ensure your automatic formatting follow repo standards. If you are using VSCode, it should recommend these automatically.

- `bradlc.vscode-tailwindcss` Shows Tailwind hints in editor
- `rome.rome` Linter / formatter

## Setup
1. Retreive and put `FONTAWESOME_NPM_AUTH_TOKEN` into your environment:
	- ```sh
		# zsh, bash, similar
		FONTAWESOME_NPM_AUTH_TOKEN=token
		```
		```powershell
		# powershell
		[System.Environment]::SetEnvironmentVariable('FONTAWESOME_NPM_AUTH_TOKEN','token', 'User')
		```
	- Note: Once using [bun](https://bun.sh/), this should only be needed inside `.env` file.

2. Create a `.env` file from `.example.env`, retreiving the required Client IDs and Secrets.

3. `pnpm i` Install dependencies

4. `pnpm run dev`, `pnpm dev` Run local development

## Notes

### Creating new tables for D1
When a new table is required for D1, you can edit [`config/d1-adapter.sql`](config/d1-setup.sql) and follow the pattern to set up the table desired. Once this file is ready, you can run `pnpm run setup` to generate the table. _Note this will delete all data_ currently in your database.

**DO NOT** change `pnpm run setup` to remove the `--local` flag. If new tables are needed, they will need to be added manually on the remote for Cloudflare Pages to match what we have locally.
