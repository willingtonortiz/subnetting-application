import { OnlyAddressPipe } from './only-address.pipe';

describe('OnlyAddressPipe', () => {
  it('create an instance', () => {
    const pipe = new OnlyAddressPipe();
    expect(pipe).toBeTruthy();
  });
});
