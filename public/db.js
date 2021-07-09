'use strict';
// workaround for the lack of webpack/babel
  var  usersById= {
        1: {
            username: 'John',
            age: 18
        },
        2: {
            username: 'Paul',
            age: 29
        },
        3: {
            username: 'Rita',
            age: 12
        },
        4: {
            username: 'Erica',
            age: 90
        },
        5: {
            username: 'Tina',
            age: 90
        },
    }


   var itemsOfUserByUsername= {
        John: [
            'carrot', 'apple', 'grapes', 'cake'
        ],
        Paul: [
            'crackers', 'chips', 'cake', 'tv'
        ],
        Rita: [
            'ham', 'beef', 'cake', 'chips'
        ],
        Erica: [
            'tv'
        ],
        Tina: [
            'tv'
        ]
    }
