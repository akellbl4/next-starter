import { random } from './random'

describe('random', () => {
	it.each([
		[1, 255],
		[-225, 100],
		[1, 1],
		[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
	])('should return a random number between %d and %d', (min, max) => {
		expect(random(min, max)).toBeWithin(min, max + 1)
	})
})
