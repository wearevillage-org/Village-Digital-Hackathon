# Contributing to the Village Digital Hackathon

Welcome, developers! Whether you are a seasoned developer or just starting out, you are useful here. **No stupid question.** 🏳️‍🌈

## Ground rules

1. **Synthetic data only.** Use the files in `data/`. Never add real member names, photos, emails or content.
2. **Standalone.** This project does not connect to the live Village app, its backend or any real account.
3. **No secrets.** Never commit passwords, tokens or API keys.
4. **Be kind.** Read our [Code of Conduct](CODE_OF_CONDUCT.md). If something feels wrong, tell Aurélia or any organiser, in person or in the chat.

## 1. Pick a task

- Open the **Issues** tab and look for the label **`good first issue`**.
- Priorities are labelled `must`, `should` and `nice`. Start with `must`.
- Comment "I'm on it" on the issue so that others know. Pairing up is encouraged.
- Interpretation is welcome: if you have a better idea for how a feature could work, say so in the issue.

## 2. Get set up

See the **Start in 3 steps** section in the [README](README.md). The easiest way is **GitHub Codespaces** (nothing to install).

## 3. Work on a branch

Never work directly on `main`.

```bash
git checkout main
git pull
git checkout -b feature/short-description   # e.g. feature/submit-form
```

Prefer not to use the command line? You can use **GitHub Desktop** or the **web editor** (press `.` on the repo page). Ask for help, we'll show you.

Tips:
- Keep changes **small**. One task = one branch = one pull request.
- Commit often with a clear message, e.g. `Add submission form`.
- Pull `main` regularly to stay up to date.

## 4. Open a pull request (PR)

1. Push your branch and click **Compare & pull request** on GitHub.
2. Fill in: what you did, how to try it, and a screenshot if it's visual.
3. Ask anyone on your team to review. **Anyone can review, including beginners.**
4. The **integrator of the hour** (we rotate during the day) merges it into `main` once:
   - the automatic check is green, and
   - one person has looked at it.
5. Then everyone pulls `main` to get the latest version.

### Before you ask for review

- [ ] It runs (`bun start --web`)
- [ ] It uses only the synthetic data in `data/`
- [ ] No secrets or real personal data
- [ ] Text is readable (contrast, size) and buttons have clear labels

## Credit and licence

You are credited as a contributor. Licence: **[TO BE CONFIRMED BY VILLAGE BEFORE THE EVENT]**. Everything built here is intended to be open source.

## Need help?

Ask in the hackathon chat or raise your hand. 💛
