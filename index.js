// Importing npm packages for console logging
const chalk = require('chalk');
const figlet = require('figlet');

// Function to make tea
function makeTea(teaType, sugar, milk) {
    // Displaying a welcome message using chalk and figlet
    console.log(chalk.green(figlet.textSync('Welcome to Tea Maker!', { horizontalLayout: 'full' })));

    // Brewing the tea
    console.log(chalk.yellow(`Brewing a delicious ${teaType} tea...`));

    // Adding sugar if needed
    if (sugar) {
        console.log(chalk.yellow(`Adding ${sugar} spoon(s) of sugar...`));
    }

    // Adding milk if needed
    if (milk) {
        console.log(chalk.yellow(`Adding ${milk} ml of milk...`));
    }

    // Displaying completion message
    console.log(chalk.green('Your tea is ready! Enjoy! ☕️'));
}

// Exporting the function
module.exports = makeTea;
