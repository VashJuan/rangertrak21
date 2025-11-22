import { getTestBed } from '@angular/core/testing';
import {
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

// Initialize the Angular testing environment with zoneless change detection
getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting(),
    {
        providers: [provideExperimentalZonelessChangeDetection()]
    }
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