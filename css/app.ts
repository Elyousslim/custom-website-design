import { createUseStyles } from 'react-jss';
import colors from './colors';
import { htmlFontSize, baselinePX, base } from './base';
import { h1, h2, h3, h4, h5, body } from './type';
import queries from './queries';

export default createUseStyles({
  '@global': {
    'html, body': {
      margin: 0,
      color: colors.gray,
    },
    '*': {
      boxSizing: 'border-box',
    },
    html: {
      fontFamily: 'system-ui, Helvetica Neue, Helvetica, Arial, sans-serif',
      fontSize: htmlFontSize,
      lineHeight: `${baselinePX}px`,
      [queries.m]: {
        fontSize: htmlFontSize * 0.75,
      },
    },
    h1,
    h2,
    h3,
    h4,
    h5,
    p: {
      ...body,
    },
    ol: {
      padding: `0 0 0 ${base()}`,
      margin: `0 0 ${base()} 0`,
    },
    ul: {
      padding: `0 0 0 ${base()}`,
      margin: `0 0 ${base()} 0`,
    },
    li: {
      ...body,
    },
  },
  app: {
    height: '100%',
  },
  header: {
    height: '3%',
  },
  featuredImage: {
    height: '12%',
  },
  footer: {
    height: '8%',
  },
});
