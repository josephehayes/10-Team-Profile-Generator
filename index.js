import inquirer from 'inquirer';
import fs from 'fs';
import utils from './utils/index';

const mgrQs = [
    {
        type: 'input',
        name: 'mgrName',
        message: 'Manager name: ',
    },
    {
        type: 'input',
        name: 'mgrId',
        message: 'Employee Id: ',
    },
    {
        type: 'input',
        name: 'mgrEmail',
        message: 'Email: ',
    },
    {
        type: 'input',
        name: 'mgrOffNum',
        message: 'Office Number: ',
    },
];

const engQs = [
    {
        type: 'input',
        name: 'engName',
        message: 'Name: ',
    },
    {
        type: 'input',
        name: 'engId',
        message: 'Id: ',
    },
    {
        type: 'input',
        name: 'engGH',
        message: 'Github: ',
    },
    {
        type: 'input',
        name: 'engEmail',
        message: 'Email: ',
    },
];

const internQs = [
    {
        type: 'input',
        name: 'intName',
        message: 'Name: ',
    },
    {
        type: 'input',
        name: 'intId',
        message: 'Id: ',
    },
    {
        type: 'input',
        name: 'intEmail',
        message: 'Email: ',
    },
    {
        type: 'input',
        name: 'intSchool',
        message: 'School: ',
    },
];



/*
    {
        type: 'input',
        name: '',
        message: '',
    },
*/