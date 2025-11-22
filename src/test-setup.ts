import 'zone.js';
import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

// Initialize the Angular testing environment
getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
);

// Mock global objects that might be needed
Object.defineProperty(window, 'CSS', { value: null });
Object.defineProperty(document, 'doctype', {
    value: '<!DOCTYPE html>',
});
Object.defineProperty(window, 'getComputedStyle', {
    value: () => {
        return {
            display: 'none',
            appearance: ['-webkit-appearance'],
        };
    },
});