# Tea Menu template

Tea menu is a small website for you to keep track of all of the teas (or other drinks) you have in your unreasonably large tea collection. This makes it easier for you to remember to drink all your teas, and helps your guests choose what they'd like to drink.

> [!INFO] > [Here's the live tea menu from the author's house](https://tea.fcg.place), go have a look!

Tea menu is an [Astro](https://astro.build) site. By default, it uses [Keystatic](https://keystatic.com/) as a Content Management System (CMS), to give you an online editing interface for your teas.

Because it uses Keystatic, you need to use one of Astro's [on-demand rendering (SSR) adapters](https://docs.astro.build/en/guides/server-side-rendering/) and deploy somewhere that can run a Node server. The repo is configured to use Cloudflare by default, but you can switch that out for any other adapter.

![](/screenshots/Keystatic-dashboard.png?raw=true)

The menu itself is static, with all the data stored in a big YAML file in the repository. If you don't want an editing interface, you can remove the Cloudflare adapter and set the rendering mode `output: static`, then deploy this anywhere you can put HTML files.

## Make it yours

> [!TIP]
> If you don't know what these things mean, or get stuck at any point, open an issue [on the template repository](https://github.com/caro401/tea-menu-template/issues/new) and Caro the author can walk you through things.

### Before you start

- Click the big "Use this template" button to get your own copy of this repository.
- decide whether you want to use the CMS for editing your teas, or remove it (see above)
- Have [NodeJS](https://nodejs.org/en) v20 or newer and `npm` installed on your computer. Clone the repository and run `npm install` to install the dependencies.

### If you're using Keystatic

- choose and install the right adapter for where you want to eventually deploy your site. The default is Cloudflare
- Set your GitHub repo and owner values in `keystatic.config.ts`
- copy `.env.example` to `.env`, uncomment the variable there as instructed in the file.
- run `npm run dev` to start the dev server.
- Work through [Keystatic's instructions on setting up GitHub mode](https://keystatic.com/docs/github-mode)
- deploy your site on your service of choice, remembering to set the environment variables that Keystatic wrote into your `.env` file.
- go to `https://your-site-url/keystatic` and edit your tea collection

### If you just want a static site

- Delete `keystatic.config.ts`. From `astro.config.mjs` remove references to `cloudflare`, `react`, `markdoc` and `keystatic`. Set `output: 'static'`, remove the `adapter` and `vite` sections. Remove those same things from your `package.json` and run `npm i` again.
- Run `npm run dev` to start the dev server. Add your teas manually in `content/teas/teas.yaml`, watching your dev server terminal output for errors in your data formatting.
- Deploy the site anywhere you can build and deploy a static site - GitHub pages or whatever you like.
- When you need to edit a tea, edit the `teas.yaml` file, commit, push and rebuild your site.

![](/screenshots/tea-menu.png?raw=true)
