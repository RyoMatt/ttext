import React from 'react';

export default class Post {
    constructor() {
        this.id = 'bd7acbea-c1b1-46c2-aed5-3ad53adb28ba'
        this.user = 'RYO'
        this.title = 'First Event Item'
        this.detail = "Hi, this is a description of the post."
        this.image = require('./assets/aqua.png')   //has to be require('')
        this.location = "building name. **********, Irvine"
        this.time = "4/28/2021 12:05 AM"
        this.registered = 31
        this.tag = ["Tag","Tag","Tag","Tag"]
    }
}