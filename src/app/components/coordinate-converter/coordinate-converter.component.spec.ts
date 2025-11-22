import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach } from 'vitest';

describe('CoordinateConverterComponent', () => {
    let component: CoordinateConverterComponent;
    let fixture: ComponentFixture<CoordinateConverterComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CoordinateConverterComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(CoordinateConverterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should initialize with DD format', () => {
        expect(component.inputFormat()).toBe('DD');
    });

    it('should convert DD to DMS correctly', () => {
        // Set Seattle coordinates
        component.ddLatitude.set(47.6062);
        component.ddLongitude.set(-122.3321);

        const dms = component.dmsCoordinates();

        expect(dms.latDegrees).toBe(47);
        expect(dms.latMinutes).toBe(36);
        expect(dms.latDirection).toBe('N');
        expect(dms.lngDegrees).toBe(122);
        expect(dms.lngMinutes).toBe(19);
        expect(dms.lngDirection).toBe('W');
    });

    it('should convert DD to DDM correctly', () => {
        component.ddLatitude.set(47.6062);
        component.ddLongitude.set(-122.3321);

        const ddm = component.ddmCoordinates();

        expect(ddm.latDegrees).toBe(47);
        expect(Math.round(ddm.latMinutes * 1000) / 1000).toBe(36.372);
        expect(ddm.latDirection).toBe('N');
        expect(ddm.lngDegrees).toBe(122);
        expect(Math.round(ddm.lngMinutes * 1000) / 1000).toBe(19.926);
        expect(ddm.lngDirection).toBe('W');
    });

    it('should convert DMS to DD correctly', () => {
        component.setInputFormat('DMS');
        component.dmsLatDegrees.set(47);
        component.dmsLatMinutes.set(36);
        component.dmsLatSeconds.set(22.32);
        component.dmsLatDirection.set('N');
        component.dmsLngDegrees.set(122);
        component.dmsLngMinutes.set(19);
        component.dmsLngSeconds.set(55.56);
        component.dmsLngDirection.set('W');

        const dd = component.ddCoordinates();

        expect(Math.round(dd.latitude * 10000) / 10000).toBe(47.6062);
        expect(Math.round(dd.longitude * 10000) / 10000).toBe(-122.3321);
    });

    it('should convert DDM to DD correctly', () => {
        component.setInputFormat('DDM');
        component.ddmLatDegrees.set(47);
        component.ddmLatMinutes.set(36.372);
        component.ddmLatDirection.set('N');
        component.ddmLngDegrees.set(122);
        component.ddmLngMinutes.set(19.926);
        component.ddmLngDirection.set('W');

        const dd = component.ddCoordinates();

        expect(Math.round(dd.latitude * 10000) / 10000).toBe(47.6062);
        expect(Math.round(dd.longitude * 10000) / 10000).toBe(-122.3321);
    });

    it('should handle southern/western coordinates correctly', () => {
        component.ddLatitude.set(-33.8688);
        component.ddLongitude.set(151.2093);

        const dms = component.dmsCoordinates();

        expect(dms.latDirection).toBe('S');
        expect(dms.lngDirection).toBe('E');
    });

    it('should clear all inputs', () => {
        component.ddLatitude.set(47.6062);
        component.ddLongitude.set(-122.3321);

        component.clearAll();

        expect(component.ddLatitude()).toBe(0);
        expect(component.ddLongitude()).toBe(0);
        expect(component.dmsLatDegrees()).toBe(0);
        expect(component.dmsLatMinutes()).toBe(0);
    });

    it('should load sample coordinates', () => {
        component.loadSampleCoordinate();

        expect(component.inputFormat()).toBe('DD');
        expect(component.ddLatitude()).toBe(47.6062);
        expect(component.ddLongitude()).toBe(-122.3321);
    });

    it('should validate latitude bounds', () => {
        const initialLat = component.ddLatitude();

        component.updateDDLatitude('95'); // Invalid
        expect(component.ddLatitude()).toBe(initialLat);

        component.updateDDLatitude('45'); // Valid
        expect(component.ddLatitude()).toBe(45);
    });

    it('should validate longitude bounds', () => {
        const initialLng = component.ddLongitude();

        component.updateDDLongitude('185'); // Invalid
        expect(component.ddLongitude()).toBe(initialLng);

        component.updateDDLongitude('-120'); // Valid
        expect(component.ddLongitude()).toBe(-120);
    });
});