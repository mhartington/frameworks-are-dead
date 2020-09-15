// import { themes } from 'mdx-deck'

const customTheme = {
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
    monospace: '"Operator Mono", monospace',
  },
  fontWeights: {
    body: 600,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.75,
    heading: 1.125,
  },
  colors: {
    text: '#434C6C',
    background: '#ffffff',
    link: '#3880FF',
    pre: '#f0f',
    preBackground: '#011627',
    code: '#434C6C',
    primary: '#3880FF',
    secondary: '#30c',
    muted: '#f6f6f6',
    heading: '#151D34',
  },
  styles: {
    Slide: {
      fontSize: 64,
    },
    h1: {
      color: 'primary',
      fontSize: '2em',
      fontWeight: 300,
      textTransform: 'Uppercase',
      marginTop: 0,
      marginBottom: 0,
      textAlign: 'center',
    },
    blockquote: {
      fontStyle: 'italic',
      width: '80%',
      textAlign: 'center',
    },
    h2: {
      fontSize: '1.6em',
      fontWeight: 900,
      marginBottom: 0,
      marginTop: 0,
      textTransform: 'uppercase',
      wordSpacing: 20,
      textAlign: 'center',
      color: 'heading',
    },
    h3: {
      fontSize: '1.3em',
      fontWeight: 900,
      marginBottom: 10,
      marginTop: 10,
      textTransform: 'uppercase',
      wordSpacing: 10,
      textAlign: 'center',
      color: 'primary',
    },
    h4: {
      textAlign: 'center',
      color: 'heading',
      fontSize: '1.2em',
      marginBottom: 10,
      marginTop: 10,
    },
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSize: 64,
    },
    p: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      textAlign: 'center',
      fontSize: '1em',
      margin: 0,
    },
    li: {
      fontSize: '1em',
    },
    a: {
      color: 'text',
      textDecoration: 'none',
      transition: 'color 0.15s ease',
      ':hover': {
        color: 'link',
      },
      '::after': {
        content: '""',
        display: 'block',
        width: '100%',
        height: 2,
        backgroundColor: 'primary',
        opacity: 0,
        transform: 'translate3D(0,10px, 0)',
        transition: 'opacity 0.3s, transform 0.3s',
      },
      ':hover::after': {
        opacity: 1,
        transform: 'translate3D(0,0,0)',
      },
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      textAlign: 'left !important',
      fontWeight: 500,
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    img: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
    },
    ol: {
      textAlign: 'left',
    },
    ul: {
      textAlign: 'center',
      listStyle: 'none',
      lineHeight: 1.6,
      paddingInlineStart: 0,
    },
  },
};

export default { ...customTheme };
