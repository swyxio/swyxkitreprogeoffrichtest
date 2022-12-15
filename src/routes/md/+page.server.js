import { compile } from 'mdsvex';

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
	const transformed = await compile(`
    # Hello from mdsvex

> This is a quote

\`\`\`js
console.log('hello world');
\`\`\`
`);
	return {
		content: transformed.code
			.replace(/>{@html `<code class="language-/g, '><code class="language-')
			.replace(/<\/code>`}<\/pre>/g, '</code></pre>')
	};
};
