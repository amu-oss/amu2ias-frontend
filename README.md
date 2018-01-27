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

