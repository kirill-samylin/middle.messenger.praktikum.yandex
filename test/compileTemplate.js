import Handlebars from 'handlebars';

export function compileTemplate(templateString = '') {
    return Handlebars.compile(templateString);
}