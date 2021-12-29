import { Pattern } from '../src';
import { Matchable } from '../src/types/Pattern';

type ExtendsPattern<a, p extends Pattern<a>> = true;

describe('Pattern', () => {
  it("shouldn't allow invalid patterns", () => {
    type Input = { type: 'a'; x: { y: string } } | { type: 'b' };

    type cases = [
      ExtendsPattern<Input, { type: 'a'; x: { y: Matchable<unknown, string> } }>
    ];
  });
});
