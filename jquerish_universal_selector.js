// universal selector
// selector - valid CSS selector
// context - DOM element OR string - both accepted
// TODO: behavior when context is falsy (empty) -> when passed as string returns undefined, but id passed as object - uses document as context and returns collection from document
const $ = function(selector, context = document) {
    if (selector === '') return undefined
    let q = (context !== document) ? 
        ( typeof(context) === 'object' && context !== null) ? context.querySelectorAll(selector) :
            (document.querySelector(context)) ? document.querySelector(context).querySelectorAll(selector) : [] :
                document.querySelectorAll(selector)
    return (q.length > 1) ? Array.from(q) : q[0]
}