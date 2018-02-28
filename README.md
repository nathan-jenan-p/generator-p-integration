# Polarity Integration Template Yeoman Generator

### Installation
Install with:

```
    git clone https://github.com/polarityio/generator-polarity-integration
    cd generator-polarity-integration
    npm install -g
```

### Usage
Run `yo polarity-integration` and follow the prompts.

## Sync Script
The sync script is intended to aid development of Polarity Integrations with a local development server. The sync script automatically detects changes in the current project and syncs them to the integration directory on the Polarity Server, and then performs a service restart to make sure the changes are used.

Integrations created with this yeoman generator automatically include a sync.js script.  The script can be run directly or via `npm run dev` and will prompt for the login credentials for your local polarity dev server (unless a .polarity.conf file exists, see below).

### .polarity.conf file
The .polarity.conf file is a configuration file to store the hostname, username, and password to the local dev server for use by the local sync script.  The format of the .polarity.conf file is:

```
module.exports = {
    "username": "<USERNAME>",
    "password": "<PASSWORD>",
    "host": "polarity.dev"
};

```
