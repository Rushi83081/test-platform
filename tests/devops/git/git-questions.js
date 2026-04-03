const questions = [
  {
    question: "What does git init do?",
    options: [
      "Clones a repo",
      "Creates a repository on GitHub",
      "Initializes a local repository",
      "Commits code"
    ],
    answer: 2
  },
  {
    question: "Which command stages changes?",
    options: [
      "git clone",
      "git push",
      "git commit",
      "git add"
    ],
    answer: 3
  },
  {
    question: "What is the default branch name in modern Git?",
    options: ["main", "master", "root", "default"],
    answer: 0
  },
  {
    question: "What does git status show?",
    options: [
      "Branch list",
      "Commit history",
      "Current changes",
      "Repo health"
    ],
    answer: 2
  },
  {
    question: "Which command downloads a repository?",
    options: ["git fetch", "git init", "git clone", "git pull"],
    answer: 2
  },
  {
    question: "What is a commit?",
    options: [
      "Push request",
      "Snapshot of changes",
      "Branch",
      "Backup"
    ],
    answer: 1
  },

  // MEDIUM

  {
    question: "Difference between git pull and git fetch?",
    options: [
      "Fetch deletes files",
      "Same",
      "Pull merges, fetch only downloads",
      "Pull only downloads"
    ],
    answer: 2
  },
  {
    question: "What does git commit -m do?",
    options: ["Modify", "Message", "Merge", "Move"],
    answer: 1
  },
  {
    question: "Which command creates a new branch?",
    options: [
      "git create branch",
      "git switch new",
      "git checkout new",
      "git branch new"
    ],
    answer: 3
  },
  {
    question: "What is HEAD in Git?",
    options: [
      "Branch name",
      "Current commit pointer",
      "Remote repo",
      "First commit"
    ],
    answer: 1
  },
  {
    question: "Which command switches branches?",
    options: ["git shift", "git move", "git checkout", "git change"],
    answer: 2
  },
  {
    question: "What happens in git merge?",
    options: [
      "Pushes code",
      "Deletes branch",
      "Combines histories",
      "Resets repo"
    ],
    answer: 2
  },

  // HARD

  {
    question: "Difference between git reset and git revert?",
    options: [
      "Reset pushes code",
      "Same",
      "Revert deletes repo",
      "Reset deletes history, revert adds new commit"
    ],
    answer: 3
  },
  {
    question: "What is git stash?",
    options: [
      "Push code",
      "Merge branch",
      "Save changes temporarily",
      "Delete changes"
    ],
    answer: 2
  },
  {
    question: "What does git rebase do?",
    options: [
      "Clones repo",
      "Pushes changes",
      "Rewrites commit history",
      "Deletes commits"
    ],
    answer: 2
  },
  {
    question: "What is a detached HEAD?",
    options: [
      "Deleted commit",
      "Merge issue",
      "HEAD not pointing to branch",
      "Broken repo"
    ],
    answer: 2
  },
  {
    question: "What does git cherry-pick do?",
    options: [
      "Pushes code",
      "Merges branches",
      "Deletes commit",
      "Picks specific commit"
    ],
    answer: 3
  },
  {
    question: "What is a tag in Git?",
    options: [
      "Remote repo",
      "File",
      "Branch",
      "Label for commit"
    ],
    answer: 3
  },

  // SCENARIO

  {
    question: "You committed sensitive data. What should you use?",
    options: [
      "git fetch",
      "git add",
      "git reset / history rewrite",
      "git revert"
    ],
    answer: 2
  },
  {
    question: "Team pushed changes. You want to review without merging. Use?",
    options: [
      "git clone",
      "git fetch",
      "git push",
      "git pull"
    ],
    answer: 1
  },
  {
    question: "You want to temporarily switch work without committing.",
    options: [
      "git commit",
      "git push",
      "git stash",
      "git reset"
    ],
    answer: 2
  },
  {
    question: "CI/CD pipeline triggers on which action?",
    options: ["git clone", "git status", "git push", "git add"],
    answer: 2
  },
  {
    question: "You want clean history before merge. Use?",
    options: [
      "git stash",
      "git reset",
      "git rebase",
      "git merge"
    ],
    answer: 2
  },
  {
    question: "Merge conflict occurs. What do you do?",
    options: [
      "Ignore",
      "Delete repo",
      "Resolve manually",
      "Reset system"
    ],
    answer: 2
  },

  // BONUS

  {
    question: "What is origin in Git?",
    options: [
      "Branch",
      "Default remote",
      "Commit",
      "Local repo"
    ],
    answer: 1
  },
  {
    question: "What is upstream?",
    options: [
      "Server",
      "Repo",
      "Remote tracking branch",
      "Parent branch"
    ],
    answer: 2
  },
  {
    question: "Which command shows commit history?",
    options: [
      "git history",
      "git show",
      "git log",
      "git status"
    ],
    answer: 2
  },
  {
    question: "What is GitHub?",
    options: [
      "OS",
      "Database",
      "Cloud Git hosting",
      "Tool"
    ],
    answer: 2
  },
  {
    question: "What is fork?",
    options: [
      "Merge",
      "Branch",
      "Clone",
      "Copy repo to your account"
    ],
    answer: 3
  },
  {
    question: "What is a pull request?",
    options: [
      "Clone repo",
      "Push",
      "Request to merge code",
      "Delete repo"
    ],
    answer: 2
  }
];
