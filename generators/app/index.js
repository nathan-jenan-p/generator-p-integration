var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    copyTemplates() {
        return this.prompt([{
            type: 'input',
            name: 'name',
            message: 'Your project name',
            default: this.appname
        },
        {
            type: 'input',
            name: 'acronym',
            message: 'What is the acroynm for this project?'
        },
        {
            type: 'input',
            name: 'dataTypes',
            message: 'Enter a comma separated list of data types (see documentation for available types)'
        }]).then((answers) => {
            let dataTypes = answers.dataTypes.split(',').map((entry) => {
                return `'${entry}'`;
            }).join(',');

            let context = { name: answers.name, acronym: answers.acronym, dataTypes: dataTypes };

            this.fs.copy(
                this.templatePath('LICENSE'),
                this.destinationPath('LICENSE')
            );
            this.fs.copy(
                this.templatePath('gitignore'),
                this.destinationPath('.gitignore')
            );
            this.fs.copyTpl(
                this.templatePath('sync.js'),
                this.destinationPath('sync.js'),
                context
            );
            this.fs.copyTpl(
                this.templatePath('components/template-block.js'),
                this.destinationPath('components/' + context.name + '-block.js'),
                context
            );
            this.fs.copyTpl(
                this.templatePath('components/template-summary.js'),
                this.destinationPath('components/' + context.name + '-summary.js'),
                context
            );
            this.fs.copyTpl(
                this.templatePath('templates/template-block.hbs'),
                this.destinationPath('templates/' + context.name + "-block.hbs"),
                context
            );
            this.fs.copyTpl(
                this.templatePath('templates/template-summary.hbs'),
                this.destinationPath('templates/' + context.name + "-summary.hbs"),
                context
            );
            this.fs.copyTpl(
                this.templatePath('integration.js'),
                this.destinationPath('integration.js'),
                context
            );
            this.fs.copyTpl(
                this.templatePath('package.json'),
                this.destinationPath('package.json'),
                context
            );
            this.fs.copyTpl(
                this.templatePath('config/config.js'),
                this.destinationPath('config/config.js'),
                context
            );
            this.fs.copyTpl(
                this.templatePath('README.md'),
                this.destinationPath('README.md'),
                context
            );
            this.fs.copy(
                this.templatePath('styles/template.less'),
                this.destinationPath('styles/' + context.name + '.less')
            );
        });
    }
};
