import { searchSpaces } from '../service/search';
import delay from './delay';

type Results = {
  spaces: Space[];
};

type Space = {
  name: string;
};

describe('Delay function', () => {
  it("Should returns one row", () => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');
    searchSpaces("Kraków HQ 12")
      .then(delay(1500))
      .then(res => expect(res.spaces).toEqual([{ name: "Kraków HQ 12" }]))
      .catch(err => {
        expect(err.message).toBe("Network error")
      })
    expect(setTimeout).toHaveBeenCalledTimes(1)
  })

  it("Negative delay time", () => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');
    searchSpaces("Kraków HQ 12")
      .then(delay(-1500))
      .then(res => expect(res.spaces).toEqual([{ name: "Kraków HQ 12" }]))
      .catch(err => {
        expect(err.message).toBe("Network error")
      })
    expect(setTimeout).toHaveBeenCalledTimes(1)
  })

  it("Multiple delays", () => {

    searchSpaces("Kraków HQ")
      .then(delay(500))
      .then(delay(500))
      .then(delay(500))
      .then(data => {
        expect(Array.isArray(data.spaces)).toBe(true)
      })
      .catch(err => {
        expect(err.message).toBe("Network error")
      })
  })
});