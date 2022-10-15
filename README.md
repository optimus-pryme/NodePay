# NodePay
Paystack API implementation for Nodejs and Express
# README

This README would normally document whatever steps are necessary to get your
application up and running.

### What is this repository for?

-   Quick summary
-    Paystack  Payment API review
-   Version
-   [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

---

## Paystack

Paystack is a payment service provider that helps businesses in Africa get paid by anyone, anywhere in the world. Keep mind Paystack is not associated or a subdiary Paypal most confuse them to be associated. While Paypal is not accessible to some part of Africa, Paystack is much open to most African countries if not all. 

To start receiving payment you simply need to create an account on their <b>official [website](https://paystack.com)</b> . Once you complete registration, you will be able to integrate their payment solutions into your applications using their [API](https://api.paystack.com).

The Paystack Application Programming Interface (API) allows you to access and expand the functionality of our dashboard inside your own software. It is designed to be RESTful and is structured around the primary resources with which you will be working, with a few significant exceptions.[(reference here)](https://paystack.com/docs/api/#introduction)


## Requirements

For development, you will only need Node.js and a node global package,npm,
installed in your environement. You can equally use yarn as your package manager(if you understand how to use it) but i will not cover it in-depth here.

### Node

-   #### Node installation on Windows

    Just go on [official Node.js website](https://nodejs.org/) and download the
    installer. Also, be sure to have `git` available in your PATH, `npm` might
    need it (You can find git [here](https://git-scm.com/)).

-   #### Node installation on Ubuntu

    You can install nodejs and npm easily with apt install, just run the
    following commands.

        $ sudo apt install nodejs
        $ sudo apt install npm

-   #### Other Operating Systems
    You can find more information about the installation on the
    [official Node.js website](https://nodejs.org/) and the
    [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following
command.

    $ node --version
    v12.6.0  or above

    $ npm --version
    6.13.4 or above

If you need to update `npm`, you can make it using `npm`! Cool right? After
running the following command, just open again the command line and be happy.

    $ npm install npm -g

###

### Yarn installation(Optional for those who prefer Yarn)

After installing node, this project will need yarn too, so just run the
following command.

      $ npm install -g yarn

---

## Install

    $ git clone [NodePay](https://github.com/optimus-pryme/NodePay.git)
    $ cd NodePay
    $ npm install or yarn install(for yarn lovers ❤️❤️)

## Configuration

Create a .env file in project root directory for your enviroment config. You can
refer to the example.env for app configuration.

     $ APP=dev
     $ PORT=*******

## Running the project

-   #### Build Application

        $ npm build
        $ yarn buid


-   #### Start Application

        $ npm start
        $ yarn start

-   #### Start Application With Nodemom

        $ npm debug
        $ yarn debug

    Application will restart on changes to ./src source folder

### Who do I talk to?

-   Repo owner or admin
-   Also refer to Paystack API

##
