import inquirer from 'inquirer';
import chalk from 'chalk';
import fs from 'fs';
import { log } from 'console';
operation()

function operation() {
    inquirer.prompt([
    {
        type: 'list',
        name: 'action',
        message: 'O que você deseja fazer?',
        choices: [
          'Criar conta',
          'Consultar Saldo',
          'Depositar',
          'Sacar',
          'Sair',
        ],
      },
    ])
    .then()
    .catch((err) => console.log(err));
}
