import figlet from 'figlet';
import chalk from 'chalk';

console.log(
   chalk.cyanBright.bold(
      figlet.textSync('CharlsDEV', {
         font: 'Slant',
         horizontalLayout: 'fitted',
         verticalLayout: 'default',
         whitespaceBreak: true
      })
   )
);

console.log();
console.log(chalk.yellow(' Author: ') + chalk.green('CharlsDEV'));
console.log(chalk.yellow(' Version: ') + chalk.green('1.0.0'));
console.log(chalk.yellow(' License: ') + chalk.green('MIT'));
console.log(chalk.yellow(' Description: ') + chalk.green('API de TypeScript con MySQL and MongoDB...'));
console.log();