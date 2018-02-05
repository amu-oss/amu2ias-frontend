# amu2ias

> Vue.js Frontend for AMU2IAS

## Build Setup

- Install npm
- Install yarn `npm install -g yarn`

``` bash
# install dependencies
yarn

# serve with hot reload at localhost:8080
yarn run dev

# build for production with minification
yarn run build

# build for production and view the bundle analyzer report
yarn run build --report

# run unit tests
yarn run unit

# run all tests
yarn test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Contribution Workflow

- Fork the `amu2ias-frontend` [repo](https://github.com/amu-oss/amu2ias-frontend).
- Clone your fork to your local machine:
``` bash
git clone https://github.com/<username>/amu2ias-frontend
```
- Follow the build procedure given above.
- Set `upstream`:
``` bash
git remote add upstream https://github.com/amu-oss/amu2ias
```
- For solving each issue, undertake the procedure mentioned below:
   - Update `master`:
   ```bash
   # Its a good idea to keep the master clean and make changes in an issue-specific branch.
   git pull upstream master
   ```
   - Create and switch to new branch for the issue:
   ```bash
   # Its better if the branch name is related to the issue you are solving. 
   git checkout -b <branch_name>
   ```
   - Make the required changes in the new branch.
   - Commit the changes:
   ```bash
   # Make sure the commit message is meaningful.
   git commit -m 'your commit message'
   ```
   - Check if your new branch is up-to-date when the issue is solved.
   ```bash
   git fetch upstream
   git rebase upstream/master
   ```
   - Push the new branch to `origin`:
   ```bash
   git push origin <branch_name>
   ```
   - Make a pull request from your new branch to the `upstream/master`
      - Make sure your PR contains the keyword that automatically closes the issue its referring to.
      - Have a look at this [github-doc](https://help.github.com/articles/closing-issues-using-keywords/)
   - Checkout to master:
   ```bash
   git checkout master
   ```   

### Repository Structure
- `src` folder is where most of the developmet takes place.
- In the `router` folder, the `index.js` file contains all the details of the routes of pages.
- The App.vue file contains the basic layout of the site which is common to all the pages. It includes navigation-drawer, tool-bar, etc.
- The component folder contains \*.vue files for all the pages. The respective vue file of the page is rendered when the page opens.
- If you wish to make changes in the basic layout of the site. Work on `App.vue` file
- If you wish to make changes in a particular page. Work on the .vue file of the page.
- To create a new page:
   - Makes its `vue` file in the `components` folder.
   - Add its route in the `router/index.js` file.
   - Add its link in the navigation drawer by adding the page details in `items` list in `App.vue` file.
