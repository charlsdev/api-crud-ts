import figlet from 'figlet';
import chalk from 'chalk';

console.log(
   chalk.redBright.bold(
      figlet.textSync('CharlsDEV', {
         font: 'Slant',
         horizontalLayout: 'fitted',
         verticalLayout: 'default',
         whitespaceBreak: true
      })
   )
);

console.log();
console.log(chalk.blueBright.bold(' Author: ') + chalk.yellowBright.italic('CharlsDEV'));
console.log(chalk.blueBright.bold(' Version: ') + chalk.yellowBright.italic('1.0.0'));
console.log(chalk.blueBright.bold(' License: ') + chalk.yellowBright.italic('MIT'));
console.log(chalk.blueBright.bold(' Description: ') + chalk.yellowBright.italic('API de TypeScript con MySQL and MongoDB...'));
console.log();