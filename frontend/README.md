# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

* [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
* [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev \& build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.



\## Student Search



The student management page supports searching students by name.



\- Enter a name in the search field.

\- The application waits 300 milliseconds after typing stops before sending the search request.

\- The search request uses the backend API endpoint `/students/search?name=...`.

\- The search text is URL-encoded before being sent.

\- The frontend displays matching students or an error message if the request fails.

\- Clearing the search field reloads the full student list.



The search feature helps reduce unnecessary API requests while the user is typing.

