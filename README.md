*Locker Tracker*

What it does
  - main function is to manage the relationship between students and their assigned lockers

How functionality can be expanded
  - updates to user interface
  - visually show lockers on a map
  - comment on this repo with suggestions

Underlying technology
  Application Framework (backend/server)
    - sails.js v0.12 (sailsjs.com)
  Database
    - PostgreSQL 9.6.1 (postgresql.org)
  CSS/Javascript Library (frontend)
    - bootstrap v3.3 (getboostrap.com)

How to install PostgreSQL
  - if you're not using macOS, you will need to install PostgreSQL some other way (postgresql.org)
  install homebrew via curl
    - /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
  install PostgreSQL via homebrew
   - `brew update` - this updates homebrew
   - `brew doctor` - this cleans up any broken links within homebrew
   - `brew install postgresql`

How to install the Sails.js framework
  - macOS based installation
  - will most likely work on Ubuntu linux distribution
  install node.js (nodejs.org)
    - npm comes with node.js
  install sails via npm
    `npm install sails -g`
    - might need to specify the version

How to install Bootstrap
  - the project comes with minified Bootstrap files in the `assets` directory

How to run and view the application
  - `sails lift`
  - in the browser, go to `localhost:1337`
