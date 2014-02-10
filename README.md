Ibotta Developer Project
=========

Ruby on Rails
---

This application uses:

* Ruby (1.9.3 or above)
* Rails (3.2.16)

Learn more about [Installing Rails](http://railsapps.github.io/installing-rails.html).

Here's a quick install procedure for OSX Mavericks:

1. Ensure XCode and Command Line Tools are installed
1. install [brew](http://brew.sh/)
1. install the following brew packages

    ~~~ sh
    brew install git node pcre rbenv ruby-build
    ~~~

1. ensure your rbenv profile is setup per the instructions printed during brew install, and possibly restart your terminal
1. setup ruby

    ~~~ sh
    rbenv install 1.9.3-p484
    rbenv rehash
    rbenv global 1.9.3-p484
    rbenv rehash
    gem install bundler
    ~~~

1. cd to the project root directory (where Gemfile is) and initialize the application

    ~~~ sh
    bundle install
    rake db:migrate
    rake db:test:prepare
    rake db:seed
    ~~~

Common commands:
* ```guard``` automatically runs the rails server as well as runs tests when files change
* ```rake db:seed``` will always reload the given test data
* ```rails console``` an interactive ruby console including the rails environment
* ```rails db``` an interactive database console

Database
---

This application uses SQLite with ActiveRecord.

The tables given to you are stored in the .seed.csv files, and are loaded to your local sqlite database by the command ```rake db:seed```

Development Frameworks Available
---

* Template Engine: Haml or ERB
* Testing Framework: RSpec and Factory Girl
* Front-end Framework: Twitter Bootstrap 3.0 (Sass, Javascript)
* Continuous Testing: Guard
