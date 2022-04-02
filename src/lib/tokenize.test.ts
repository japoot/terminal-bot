import tokenize from './tokenize';

describe('Tokenize', () => {
  it('returns 3 tokens', () => {
    expect(tokenize('a ber cd')).toStrictEqual(['a', 'ber', 'cd']);
  });

  it('returns 1 tokens', () => {
    expect(tokenize(' 1')).toStrictEqual(['1']);
  });

  it('returns 0 tokens', () => {
    expect(tokenize(' ')).toStrictEqual(null);
  });

  it('returns tokens with non-alpanumeric chars', () => {
    expect(tokenize('ab ;12')).toStrictEqual(['ab', ';12']);
  });
});
