import { h } from 'hastscript';
import { visit, SKIP } from 'unist-util-visit';
import { extendedTypes } from './config.js';

/**
 * Plugin to add extended blockquote formatting
 *
 * @type {import('unified').Plugin<void[], Root>}
 */
export default function rehypeBlockquoteExtended() {
    return (tree) => {
        visit(tree, 'element', (node, index, parent) => {
            if (node.tagName !== "blockquote") return;
            const { children = [] } = node;
            const { properties = []} = node;
            const { tagName } = node;
            const [{ value, type }, ...siblings] = children;

            let bqType = {};
            if (!properties.class)
                bqType = extendedTypes.important;
            else
                bqType = Object.entries(extendedTypes).find(([t,{}]) => t.match(node.properties.class))[1];
            if (!bqType) return;

            const newBq = h('div', {class: 'blockquote blockquote-'.concat(bqType.keyword)}, [
                h('div', {class: 'blockquote-heading'}, [
                    h('h5', '', [
                        [h('span', {class: 'blockquote-icon'}, [bqType.icon])].concat(formatKeyword(bqType.keyword))
                    ])
                ]),
                h('div', {class: 'blockquote-content'}, children)
            ]);
            parent.children.splice(index, 1, newBq);
            return [SKIP, index];
        });
    }
}

const formatKeyword = (keyword) => {
    return keyword.charAt(0).toUpperCase() + keyword.slice(1);
}