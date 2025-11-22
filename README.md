# RangerTrak 21 - Coordinate Converter

A professional Angular v21 component for converting between different coordinate
formats using Angular Signals.

## Features

- **Real-time Conversion**: Converts between three coordinate formats:

  - **Decimal Degrees (DD)**: Standard decimal format (e.g., 47.6062, -122.3321)
  - **Degrees Minutes Seconds (DMS)**: Traditional format (e.g., 47° 36' 22.32"
    N, 122° 19' 55.56" W)
  - **Degrees Decimal Minutes (DDM)**: Hybrid format (e.g., 47° 36.372' N, 122°
    19.926' W)

- **Angular Signals**: Built with Angular v21's signal-based reactive forms
- **Real-time Validation**: Input validation with proper bounds checking
- **Responsive Design**: Mobile-friendly interface
- **Sample Data**: Load Seattle coordinates for testing
- **Professional UI**: Clean, modern interface with smooth animations

## Component Structure

```text
src/app/components/coordinate-converter/
├── coordinate-converter.component.ts    # Main component logic with signals
├── coordinate-converter.component.html  # Template with reactive forms
└── coordinate-converter.component.css   # Responsive styling
```

## Key Angular v21 Features Used

### Signals Implementation

- `signal()` for reactive state management
- `computed()` for derived values and automatic conversions
- Real-time updates without manual subscription management

### Standalone Components

- No module dependencies
- Direct imports of required Angular features
- Tree-shakable architecture

## Installation & Setup

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Run Development Server**:

   ```bash
   ng serve
   ```

3. **Run Tests**:

   ```bash
   npm test              # Run tests once
   npm run test:ui       # Run tests with UI
   npm run test:coverage # Run with coverage report
   npm run test:watch    # Run tests in watch mode
   ```

4. **Build for Production**:

   ```bash
   ng build
   ```

## Usage

### Basic Integration

```typescript
import { CoordinateConverterComponent } from "./components/coordinate-converter/coordinate-converter.component"

@Component({
  standalone: true,
  imports: [CoordinateConverterComponent],
  template: "<app-coordinate-converter></app-coordinate-converter>",
})
export class MyComponent {}
```

### Coordinate Formats

#### Decimal Degrees (DD)

- Latitude: -90 to 90 degrees
- Longitude: -180 to 180 degrees
- Example: 47.6062, -122.3321

#### Degrees Minutes Seconds (DMS)

- Degrees: 0-90 (lat), 0-180 (lng)
- Minutes: 0-59
- Seconds: 0-59.999
- Direction: N/S for latitude, E/W for longitude
- Example: 47° 36' 22.32" N, 122° 19' 55.56" W

#### Degrees Decimal Minutes (DDM)

- Degrees: 0-90 (lat), 0-180 (lng)
- Minutes: 0-59.999 (decimal)
- Direction: N/S for latitude, E/W for longitude
- Example: 47° 36.372' N, 122° 19.926' W

## Component API

### Signals

- `inputFormat`: Current input format ('DD' | 'DMS' | 'DDM')
- `ddLatitude`, `ddLongitude`: Decimal degree inputs
- `dmsLatDegrees`, `dmsLatMinutes`, etc.: DMS input values
- `ddmLatDegrees`, `ddmLatMinutes`, etc.: DDM input values

### Computed Values

- `ddCoordinates`: Always provides decimal degree output
- `dmsCoordinates`: Always provides DMS format output
- `ddmCoordinates`: Always provides DDM format output

### Methods

- `setInputFormat(format)`: Change input format
- `loadSampleCoordinate()`: Load Seattle coordinates
- `clearAll()`: Reset all inputs

## Validation Rules

- **Latitude**: -90° to 90°
- **Longitude**: -180° to 180°
- **Minutes**: 0 to 59
- **Seconds**: 0 to 59.999
- **Decimal Minutes**: 0 to 59.999

## Testing

This project uses **Vitest** as the test runner for faster and more modern
testing:

### Test Commands

- `npm test` - Run all tests once
- `npm run test:watch` - Run tests in watch mode
- `npm run test:ui` - Run tests with interactive UI
- `npm run test:coverage` - Generate coverage report

### Test Features

- **Fast execution** with Vitest's lightning-fast test runner
- **Modern syntax** with built-in TypeScript support
- **Coverage reports** with V8 provider
- **Interactive UI** for better test debugging
- **Watch mode** for continuous testing during development

### Writing Tests

Tests use Vitest's modern API:

```typescript
import { describe, it, expect } from "vitest"

describe("Component", () => {
  it("should work", () => {
    expect(true).toBe(true)
  })
})
```

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Technical Details

### Conversion Algorithms

#### DMS to DD

```text
DD = Degrees + (Minutes/60) + (Seconds/3600)
Apply direction: N/E = positive, S/W = negative
```

#### DD to DMS

```text
Degrees = floor(abs(DD))
Minutes = floor((abs(DD) - Degrees) * 60)
Seconds = ((abs(DD) - Degrees) * 60 - Minutes) * 60
```

#### DDM to DD

```text
DD = Degrees + (Minutes/60)
Apply direction: N/E = positive, S/W = negative
```

### Performance

- Signals provide automatic dependency tracking
- Computations only run when input signals change
- No manual subscription management required
- Minimal re-renders with OnPush-like behavior

## Customization

### Styling

Modify `coordinate-converter.component.css` for custom themes:

- CSS custom properties for colors
- Responsive breakpoints
- Animation preferences

### Validation

Extend validation rules in the component methods:

- Custom coordinate bounds
- Additional format support
- Integration with Angular forms

## License

MIT License - See LICENSE file for details

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Create a Pull Request

## Support

For issues and questions, please use the GitHub issue tracker.

====

Perfect! I've successfully created a comprehensive Angular v21 component for
coordinate conversion using Angular Signals. Here's what I've built:

🎯 Complete Coordinate Converter Component Key Features: Angular v21 Signals:
Fully reactive using signal() and computed() Three Coordinate Formats: Decimal
Degrees (DD): e.g., 47.6062, -122.3321 Degrees Minutes Seconds (DMS): e.g., 47°
36' 22.32" N Degrees Decimal Minutes (DDM): e.g., 47° 36.372' N Component
Architecture: coordinate-converter.component.ts:

Uses Angular Signals for reactive state management Real-time conversion between
all formats Input validation with proper bounds checking Professional coordinate
conversion algorithms coordinate-converter.component.html:

Dynamic form based on selected input format Real-time display of all coordinate
formats Responsive design with mobile support Accessible form controls
coordinate-converter.component.css:

Modern, professional styling Responsive grid layout Smooth animations and
transitions Mobile-first design approach Angular v21 Features Used: Standalone
Components: No module dependencies Signals: signal() for state, computed() for
derived values Reactive Forms: Signal-based form handling Modern TypeScript:
Latest Angular patterns Usage Example: Features: ✅ Real-time Conversion:
Instant updates between formats ✅ Input Validation: Proper coordinate bounds
checking ✅ Sample Data: Load Seattle coordinates for testing ✅ Professional
UI: Clean, modern interface ✅ Mobile Responsive: Works on all device sizes ✅
Accessibility: Proper ARIA labels and keyboard navigation ✅ Type Safety: Full
TypeScript support

To Run: Install dependencies: npm install Start dev server: ng serve

Open [http://localhost:4200]

The component is production-ready and follows Angular v21 best practices with
signals-based reactive programming!
