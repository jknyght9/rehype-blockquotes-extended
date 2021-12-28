import { stream } from 'unified-stream';
import { unified } from 'unified'
import remarkBlockquotesExtended from 'remark-blockquotes-extended';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import rehypeBlockquotesExtended from '../index.js';

const processor = unified()
  .use(remarkParse)
  .use(remarkBlockquotesExtended)
  .use(remarkRehype)
  .use(rehypeBlockquotesExtended)
  .use(rehypeFormat)
  .use(rehypeStringify)

process.stdin.pipe(stream(processor)).pipe(process.stdout)