function highlightKeywords(template, keywords) {
    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    keywords.forEach(keyword => {
        const regex = new RegExp(escapeRegExp(keyword), 'g');
        template = template.replace(regex, `<span class='highlight'>${keyword}</span>`);
    });

    return template;
}

const keywords = ["JavaScript", "template", "tagged"];
const template = "Learn ${0} tagged templates to create custom ${1} literals for ${2} manipulation.";

const preparedTemplate = template
    .replace('${0}', 'JavaScript')
    .replace('${1}', 'template')
    .replace('${2}', 'tagged');

const highlighted = highlightKeywords(preparedTemplate, keywords);

console.log(highlighted);
// Expected: "Learn <span class='highlight'>JavaScript</span> tagged templates to create custom <span class='highlight'>template</span> literals for <span class='highlight'>tagged</span> manipulation."