# Project Overview

This repository contains the source code for the mobile app "T-Text", directed by Mohammed Talah Anwar. 

It is written in Javascript + React-Native.


# Design Overview
(Everything here is subject to change as development progresses and the repo changes hands)

T-Text is an iOS/Android app with the goal of being a one-stop-shop of sorts for college students. It displays upcoming events for the user's school, has an online marketplace manager for local campus buying/selling/trading, a general feed page for university notifications, and a page for the school and students to advertise their services. 

The current implementation has a bottom navbar that allows access to the five main pages: "Events", "Marketplace", "General Feed", "Services", and "User Profile". These pages are filled out with some sample data, which are expected to eventually be drawn from a database via a webAPI. 
Local assets are placed in the matching page folder. The global assets folder should be deprecated and replaced with a "shared assets" folder in which only assets which are utilized by many pages (shared) should be placed. 
App.js contains the bootup functionality of the app.


# Unfinished Functionality
- Splash page (first loading screen upon opening the app)
- Login & Registration pages
- Page for Handshake integration 
- Page for Housing services

# Consideration for Changes
- seamless header as a header component on app.js instead of having custom header on each screen.js
- viewable user profile for other users
- common UI(fonts, images, color)
- icon image transparency
- numbers on icons like message, comments, up down votes
- class functions which requires database

# Advice
- Some documentation on getting set up to work & debug with this repo: https://reactnative.dev/docs/environment-setup
- There is a site called 'BuilderX' which lets you graphically draw screens and then provides sample React-Native code for your drawings. While it isn't perfect, and only has a 30-day free trial per Google Account, it may be very helpful in designing new screens or understanding existing ones.
- AES -> CBC 128b -> 'fluffcatverycute' (If you know, you know.)
