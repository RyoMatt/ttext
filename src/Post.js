import React from 'react';

export default class Post {
    constructor() {
        this.id = 'bd7acbea-c1b1-46c2-aed5-3ad53adb28ba'
        this.title = 'First Event Item'
        this.detail = "Hi, this is a description of the post."
        this.image = require('./assets/aqua.png')   //has to be require('')
    }
}