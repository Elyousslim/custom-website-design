import { base } from './base';

export const fontFamily = 'sans-serif';

const heading = {
  fontWeight: 'normal',
};

export const h1 = {
  ...heading,
  fontSize: 100,
  lineHeight: base(5),
  margin: `0 0 ${base(2)}`,
};

export const h2 = {
  ...heading,
  fontSize: 94,
  lineHeight: base(5),
  margin: `${base(2)} 0`,
};

export const h3 = {
  ...heading,
  fontSize: 70,
  lineHeight: base(4),
  margin: `${base(2)} 0 ${base(1.5)}`,
};

export const h4 = {
  ...heading,
  fontSize: 45,
  lineHeight: base(2.65),
  margin: `${base(1.5)} 0 ${base()}`,
};

export const h5 = {
  ...heading,
  fontSize: 32,
  lineHeight: base(2.25),
  margin: `${base(1)} 0 ${base(0.5)}`,
};

export const body = {
  fontSize: 18,
  lineHeight: base(1.5),
};

export const largeBody = {
  fontSize: 22,
  lineHeight: base(2.25),
  margin: `${base(0.5)} 0`,
};

export const label = {
  fontSize: 15,
  lineHeight: base(2.4),
  letterSpacing: '2.5px',
  textTransform: 'uppercase',
};
