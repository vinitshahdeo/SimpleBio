# Git/GitHub workflow

1. Create a branch with: `git branch myBranch` or instead of `myBranch` use any name you like
2. Switch to that branch with: `git checkout myBranch`
3. Create/edit your files
4. Stage your files for commit with: `git add -A`
5. Commit your files with: `git commit -m “some comment”`

    Use this as your guide:

    ```text
    Feat: add hat wobble
    ^--^  ^------------^
    |     |
    |     +-> Summary in present tense.
    |
    +-------> Type: Chore, Docs, Feat, Fix, Refactor, Style, or Test

    Type Details:
    Chore: changes to build tools, libraries,  etc; no production code change
    Docs: changes to the documentation
    Feat: new feature for the user, not a new feature for build script
    Fix: bug fix for the user, not a fix to a build script
    Refactor: refactoring production code, eg. renaming a variable
    Style: formatting, missing semi colons, etc; no production code change
    Test: adding missing or correcting existing tests
    ```

6. Push files up to your branch created in step 5 with: `git push origin myBranch`
7. Create a pull request by going to the repo on GitHub You’ll see a new green button to create a pull
request. Click it and enter a brief description of what your changes are, and submit it
8. Primary user then goes to GitHub, and either approves or denies the pull request. If they approve,
then they can go ahead and delete the branch after merging the new code
9. All users can then update their local repository by first switching to the master branch: `git checkout
master`
10. Update the user master repo with: `git pull`
11. For user whose branch was merged & deleted on GitHub, they can then delete their local branch with:
`git branch -d myBranch`
12. Now create a new branch and repeat the process (step 2 to 11)

### Note

If you are working in a branch, and in the meantime there is a new update completed to the master
branch, you can switch over to your local master and do a new pull

However, now your local branch is
behind the local master. To fix this, switch back to your local branch and enter: `git merge master`

Anytime you forget what branch you’re on, or whether you’ve committed or not, enter: `git status`
