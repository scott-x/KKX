#!/usr/bin/env node
'use strict'

var chalk = require('chalk');
var inquirer = require('inquirer');

inquirer
  .prompt([
    /* Pass your questions in here */
      {
        type: 'input',
        name: 'groupId',
        message: `${chalk.magenta(' groupId(default:com.damu.mybatis): ')}`,
        default: 'com.damu.mybatis'
      },
      {
        type: 'input',
        name: 'artifactId',
        message: `${chalk.magenta(' artifactId(default:mybatis-pro): ')}`,
        default: 'mybatis-pro'
      }
   
  ])
  .then(answers => {
      require('./task').genPom(answers.groupId,answers.artifactId)
  }).catch(err=>{
     console.log(err)
  });
