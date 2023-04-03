# 🔎 GitHub Repository Search

This is a small application that allows you to search for repositories on GitHub.

![App demo](https://user-images.githubusercontent.com/20664868/229500728-bcea1ea5-bc89-4cb4-9a2e-a6efed77165e.png)

## 📝 Features

- Search for repositories by text query
- Sort and order by Stars or Updated column
- Simple pagination support (next and previous page)
- Change the number of results per page
- Results are cached in memory for 1 minute
- Loading and error states are displayed when necessary

>I have decided to use RTK Query because there was Redux requirement and I thought that It would be better choice than Tanstack Query because I added Redux Toolkit also. Usually I would use Tanstack Query for this kind of application.

>Btw, I have used Redux Toolkit Query for the first time so I might have not used it in the best way.

## Missing features

- Unit tests
- No React Context was used
- State is not hold in the URL, so if you refresh the page, the state is lost (If I had more time I would move the searchParams state from redux to URL query params)
- GitHuB API rate limits are not handled
- Search, Next, Prev buttons have no loading state (I would disable them while the request is being made and display a loading spinner inside)

## 🚀 Technologies used

- [TypeScript](https://www.typescriptlang.org/)
- [ReactJS](https://reactjs.org/)
- [NextJS](https://nextjs.org/)
- [Redux](https://redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Redux Toolkit Query](https://redux-toolkit.js.org/rtk-query/overview)
- [TailwindCSS](https://tailwindcss.com/)

## 🪚 Requirements
This project uses pnpm as package manager, so you need to install it before running the project.

```bash
# Install pnpm
$ npm install -g pnpm
```



## 📦 How to run

```bash
# Install the dependencies
$ pnpm install

# Run production build
$ pnpm build
$ pnpm start

# or

# Run development build
$ pnpm dev
```
