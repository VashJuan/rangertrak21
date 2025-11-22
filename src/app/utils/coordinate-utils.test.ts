import { describe, it, expect } from 'vitest';

// Simple utility function tests
describe('Coordinate Conversion Utils', () => {
    it('should convert degrees to radians', () => {
        const degreesToRadians = (degrees: number) => degrees * (Math.PI / 180);

        expect(degreesToRadians(0)).toBe(0);
        expect(degreesToRadians(90)).toBeCloseTo(Math.PI / 2);
        expect(degreesToRadians(180)).toBeCloseTo(Math.PI);
        expect(degreesToRadians(360)).toBeCloseTo(2 * Math.PI);
    });

    it('should validate latitude bounds', () => {
        const isValidLatitude = (lat: number) => lat >= -90 && lat <= 90;

        expect(isValidLatitude(0)).toBe(true);
        expect(isValidLatitude(90)).toBe(true);
        expect(isValidLatitude(-90)).toBe(true);
        expect(isValidLatitude(91)).toBe(false);
        expect(isValidLatitude(-91)).toBe(false);
    });

    it('should validate longitude bounds', () => {
        const isValidLongitude = (lng: number) => lng >= -180 && lng <= 180;

        expect(isValidLongitude(0)).toBe(true);
        expect(isValidLongitude(180)).toBe(true);
        expect(isValidLongitude(-180)).toBe(true);
        expect(isValidLongitude(181)).toBe(false);
        expect(isValidLongitude(-181)).toBe(false);
    });
});