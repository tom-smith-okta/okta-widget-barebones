# Okta widget - barebones

This application is intended to be the shortest possible path to get the Okta authentication widget up and running in a self-hosted environment (as opposed to an Okta-hosted solution).

At the end of the authentication flow, the user will have an Okta session - an Okta cookie in the browser.

This app does not do OIDC, but it can be used as a starting point for an Okta OIDC flow.

## Prerequisites

* An Okta tenant
* Node.js, or another web server

> Note: this app was built to run on a Node.js server, but it will run on any web server as a static html file. Just take a look at the following files: `html/index.html` and `config.json` file, and replace the {{}} placeholders in the `index.html` file.

## Setup

Download this repo:

`git clone https://github.com/tom-smith-okta/okta-widget-barebones.git`

Change to the `okta-widget-barebones` directory and innstall the Node.js dependencies:

`cd okta-widget-barebones`
`npm install`

[Add your web host as a trusted origin to your Okta tenant](https://developer.okta.com/docs/guides/enable-cors/overview/#granting-cross-origin-access-to-websites). If you are using the default values for this app, then your web host is:

`http://localhost:3008`

Open the `config.json` file and update the value for `okta_tenant_url`. Save the file.

## Run the app

`node app.js`

You should see a message like:

`App listening on port 3008...`

Now, open a new web browser. If you are already logged in to Okta (logged in to your admin dashboard for example) open an incognito window or open a different browser (Firefox vs. Chrome, e.g.).

Load the site:

`http://localhost:3008`

The Okta widget will appear on the page (assuming you do not already have an Okta session).

Try to authenticate - using your admin account is fine. The results of authentication will appear in the developer console, so make sure you [open the developer console](https://developers.google.com/web/tools/chrome-devtools/open#console).

After you authenticate, the widget will "disappear" and it will print a message to the console that the user is authenticated, along with a simple object that contains information about that user.

## About the Okta widget

This app is intended to get you up and running quickly with a very basic Okta authentication widget. The widget is extremely configurable; please see the following resources for more info:

* [Okta developer: Okta Sign-In Widget Guide](https://developer.okta.com/code/javascript/okta_sign-in_widget)
* [Okta sign-in widget github repo](https://github.com/okta/okta-signin-widget)
* [Okta live widget](https://developer.okta.com/live-widget/)
