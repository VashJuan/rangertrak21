import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Coordinates {
    latitude: number;
    longitude: number;
}

export interface DMSCoordinates {
    latDegrees: number;
    latMinutes: number;
    latSeconds: number;
    latDirection: 'N' | 'S';
    lngDegrees: number;
    lngMinutes: number;
    lngSeconds: number;
    lngDirection: 'E' | 'W';
}

export interface DDMCoordinates {
    latDegrees: number;
    latMinutes: number;
    latDirection: 'N' | 'S';
    lngDegrees: number;
    lngMinutes: number;
    lngDirection: 'E' | 'W';
}

@Component({
    selector: 'app-coordinate-converter',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './coordinate-converter.component.html',
    styleUrl: './coordinate-converter.component.css'
})
export class CoordinateConverterComponent {
    // Input format selection
    inputFormat = signal<'DD' | 'DMS' | 'DDM'>('DD');

    // Decimal Degrees inputs
    ddLatitude = signal<number>(0);
    ddLongitude = signal<number>(0);

    // Degrees Minutes Seconds inputs
    dmsLatDegrees = signal<number>(0);
    dmsLatMinutes = signal<number>(0);
    dmsLatSeconds = signal<number>(0);
    dmsLatDirection = signal<'N' | 'S'>('N');
    dmsLngDegrees = signal<number>(0);
    dmsLngMinutes = signal<number>(0);
    dmsLngSeconds = signal<number>(0);
    dmsLngDirection = signal<'E' | 'W'>('E');

    // Degrees Decimal Minutes inputs
    ddmLatDegrees = signal<number>(0);
    ddmLatMinutes = signal<number>(0);
    ddmLatDirection = signal<'N' | 'S'>('N');
    ddmLngDegrees = signal<number>(0);
    ddmLngMinutes = signal<number>(0);
    ddmLngDirection = signal<'E' | 'W'>('E');

    // Computed conversions
    ddCoordinates = computed(() => {
        const format = this.inputFormat();

        if (format === 'DD') {
            return {
                latitude: this.ddLatitude(),
                longitude: this.ddLongitude()
            };
        } else if (format === 'DMS') {
            return this.dmsToDD();
        } else {
            return this.ddmToDD();
        }
    });

    dmsCoordinates = computed(() => {
        const dd = this.ddCoordinates();
        return this.ddToDMS(dd.latitude, dd.longitude);
    });

    ddmCoordinates = computed(() => {
        const dd = this.ddCoordinates();
        return this.ddToDDM(dd.latitude, dd.longitude);
    });

    // Format selection methods
    setInputFormat(format: 'DD' | 'DMS' | 'DDM') {
        this.inputFormat.set(format);
    }

    // DD input methods
    updateDDLatitude(value: string) {
        const num = parseFloat(value);
        if (!isNaN(num) && num >= -90 && num <= 90) {
            this.ddLatitude.set(num);
        }
    }

    updateDDLongitude(value: string) {
        const num = parseFloat(value);
        if (!isNaN(num) && num >= -180 && num <= 180) {
            this.ddLongitude.set(num);
        }
    }

    // DMS input methods
    updateDMSLatDegrees(value: string) {
        const num = parseInt(value);
        if (!isNaN(num) && num >= 0 && num <= 90) {
            this.dmsLatDegrees.set(num);
        }
    }

    updateDMSLatMinutes(value: string) {
        const num = parseInt(value);
        if (!isNaN(num) && num >= 0 && num < 60) {
            this.dmsLatMinutes.set(num);
        }
    }

    updateDMSLatSeconds(value: string) {
        const num = parseFloat(value);
        if (!isNaN(num) && num >= 0 && num < 60) {
            this.dmsLatSeconds.set(num);
        }
    }

    updateDMSLngDegrees(value: string) {
        const num = parseInt(value);
        if (!isNaN(num) && num >= 0 && num <= 180) {
            this.dmsLngDegrees.set(num);
        }
    }

    updateDMSLngMinutes(value: string) {
        const num = parseInt(value);
        if (!isNaN(num) && num >= 0 && num < 60) {
            this.dmsLngMinutes.set(num);
        }
    }

    updateDMSLngSeconds(value: string) {
        const num = parseFloat(value);
        if (!isNaN(num) && num >= 0 && num < 60) {
            this.dmsLngSeconds.set(num);
        }
    }

    // DDM input methods
    updateDDMLatDegrees(value: string) {
        const num = parseInt(value);
        if (!isNaN(num) && num >= 0 && num <= 90) {
            this.ddmLatDegrees.set(num);
        }
    }

    updateDDMLatMinutes(value: string) {
        const num = parseFloat(value);
        if (!isNaN(num) && num >= 0 && num < 60) {
            this.ddmLatMinutes.set(num);
        }
    }

    updateDDMLngDegrees(value: string) {
        const num = parseInt(value);
        if (!isNaN(num) && num >= 0 && num <= 180) {
            this.ddmLngDegrees.set(num);
        }
    }

    updateDDMLngMinutes(value: string) {
        const num = parseFloat(value);
        if (!isNaN(num) && num >= 0 && num < 60) {
            this.ddmLngMinutes.set(num);
        }
    }

    // Conversion methods
    private dmsToDD(): Coordinates {
        const latSign = this.dmsLatDirection() === 'N' ? 1 : -1;
        const lngSign = this.dmsLngDirection() === 'E' ? 1 : -1;

        const latitude = latSign * (
            this.dmsLatDegrees() +
            this.dmsLatMinutes() / 60 +
            this.dmsLatSeconds() / 3600
        );

        const longitude = lngSign * (
            this.dmsLngDegrees() +
            this.dmsLngMinutes() / 60 +
            this.dmsLngSeconds() / 3600
        );

        return { latitude, longitude };
    }

    private ddmToDD(): Coordinates {
        const latSign = this.ddmLatDirection() === 'N' ? 1 : -1;
        const lngSign = this.ddmLngDirection() === 'E' ? 1 : -1;

        const latitude = latSign * (
            this.ddmLatDegrees() +
            this.ddmLatMinutes() / 60
        );

        const longitude = lngSign * (
            this.ddmLngDegrees() +
            this.ddmLngMinutes() / 60
        );

        return { latitude, longitude };
    }

    private ddToDMS(lat: number, lng: number): DMSCoordinates {
        const latAbs = Math.abs(lat);
        const lngAbs = Math.abs(lng);

        const latDegrees = Math.floor(latAbs);
        const latMinutesFloat = (latAbs - latDegrees) * 60;
        const latMinutes = Math.floor(latMinutesFloat);
        const latSeconds = (latMinutesFloat - latMinutes) * 60;

        const lngDegrees = Math.floor(lngAbs);
        const lngMinutesFloat = (lngAbs - lngDegrees) * 60;
        const lngMinutes = Math.floor(lngMinutesFloat);
        const lngSeconds = (lngMinutesFloat - lngMinutes) * 60;

        return {
            latDegrees,
            latMinutes,
            latSeconds: Math.round(latSeconds * 1000) / 1000,
            latDirection: lat >= 0 ? 'N' : 'S',
            lngDegrees,
            lngMinutes,
            lngSeconds: Math.round(lngSeconds * 1000) / 1000,
            lngDirection: lng >= 0 ? 'E' : 'W'
        };
    }

    private ddToDDM(lat: number, lng: number): DDMCoordinates {
        const latAbs = Math.abs(lat);
        const lngAbs = Math.abs(lng);

        const latDegrees = Math.floor(latAbs);
        const latMinutes = (latAbs - latDegrees) * 60;

        const lngDegrees = Math.floor(lngAbs);
        const lngMinutes = (lngAbs - lngDegrees) * 60;

        return {
            latDegrees,
            latMinutes: Math.round(latMinutes * 1000) / 1000,
            latDirection: lat >= 0 ? 'N' : 'S',
            lngDegrees,
            lngMinutes: Math.round(lngMinutes * 1000) / 1000,
            lngDirection: lng >= 0 ? 'E' : 'W'
        };
    }

    // Preset coordinates for testing
    loadSampleCoordinate() {
        // Seattle coordinates
        this.setInputFormat('DD');
        this.ddLatitude.set(47.6062);
        this.ddLongitude.set(-122.3321);
    }

    clearAll() {
        this.ddLatitude.set(0);
        this.ddLongitude.set(0);
        this.dmsLatDegrees.set(0);
        this.dmsLatMinutes.set(0);
        this.dmsLatSeconds.set(0);
        this.dmsLatDirection.set('N');
        this.dmsLngDegrees.set(0);
        this.dmsLngMinutes.set(0);
        this.dmsLngSeconds.set(0);
        this.dmsLngDirection.set('E');
        this.ddmLatDegrees.set(0);
        this.ddmLatMinutes.set(0);
        this.ddmLatDirection.set('N');
        this.ddmLngDegrees.set(0);
        this.ddmLngMinutes.set(0);
        this.ddmLngDirection.set('E');
    }
}