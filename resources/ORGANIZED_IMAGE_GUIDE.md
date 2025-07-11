# CYCLEDEALIA ORGANIZED IMAGE GUIDE

**Created:** 2025-07-10  
**Status:** Complete - All images organized and renamed

## 📂 NEW FOLDER STRUCTURE

```
resources/images/organized/
├── homepage/           # Homepage hero and featured content
├── services/           # Service and maintenance images  
├── products/           # Product showcase bikes
├── lifestyle/          # Lifestyle and community images
└── brands/            # Logos and brand assets
```

## 🏠 HOMEPAGE FOLDER
**Path:** `resources/images/organized/homepage/`

| File Name | Original File | Usage |
|-----------|--------------|-------|
| `hero-ebike-landscape.webp` | `hero/assets_task_01jztesgbved2876rgkkb650b5_1752160878_img_1.webp` | Primary homepage hero |
| `featured-mountain-bike.webp` | `new-pngs/2022_FUJI_RAKAN_11_LT_POLISHEDSILVER_FRONT-300x300.webp` | Featured product card |
| `featured-ebike.webp` | `new-pngs/mountain-3-4_large.webp` | Featured e-bike card |
| `featured-commuter.png` | `new-pngs/ccm-21-sp-fs-men-s-sector-27-5-d5205bb3-f0a4-455c-ad2b-5276ab6dfa55-300x258.png` | Featured commuter card |

**Usage Strategy:**
- **Hero Section:** `hero-ebike-landscape.webp` as main hero background
- **Featured Products:** 3 bike cards showcasing different categories
- **Clean Naming:** Easy to identify in development

## 🔧 SERVICES FOLDER
**Path:** `resources/images/organized/services/`

| File Name | Original File | Usage |
|-----------|--------------|-------|
| `bike-maintenance.webp` | `gallery/Clean_your_bike2-1024x457.webp` | Service & Repairs page hero |
| `bikefit-diagram.jpg` | `gallery/bikefit-1.jpg` | BikeFit process explanation |
| `professional-service.jpg` | `gallery/bicycles-e1725697128878-1024x626.jpg` | Service detail sections |

**Usage Strategy:**
- **Service Pages:** Professional maintenance imagery
- **Process Diagrams:** Technical bike fitting information
- **Trust Building:** Professional service environment

## 🚴 PRODUCTS FOLDER
**Path:** `resources/images/organized/products/`

| File Name | Original File | Usage |
|-----------|--------------|-------|
| `downhill-bike.webp` | `new-pngs/downhill-bicycles.webp` | Performance cycling section |
| `red-mountain-bike.png` | `new-pngs/—Pngtree—mountain-bike-3d-rendering-on_15051833-300x300.png` | Mountain bike category |
| `premium-blue-bike.jpg` | `products/HL2BlueOhlinsBuildFront34BlackBG-2048x1366.jpg` | Premium bike showcase |
| `commencal-mountain-bike.jpg` | `products/bike-commencal-bicycle-mountain-bike-wallpaper-preview.jpg` | Brand specific bikes |

**Usage Strategy:**
- **Product Categories:** Different bike types clearly shown
- **High Quality:** Professional product photography
- **Brand Showcase:** Specific manufacturer examples

## 🌟 LIFESTYLE FOLDER
**Path:** `resources/images/organized/lifestyle/`

| File Name | Original File | Usage |
|-----------|--------------|-------|
| `woman-ebike-coast.jpg` | `gallery/Best-Comfort-Bikes-4-1024x694.jpg` | E-bike lifestyle appeal |
| `group-mountain-bikers.webp` | `gallery/IMG_20190911_191533_3-scaled-2.webp` | Community and group riding |
| `urban-cyclist.webp` | `gallery/Gallery-2_b098b3af-18f5-4ba4-bed5-97e7538b6b9d_570x836_crop_center.webp` | City commuting |
| `solo-adventure.png` | `gallery/agriv8r._Touring_with_mountain_bike_with_rider_wearing_helmet_1e0b63c0-7612-413e-b52c-2f63f6736444_0-1024x574.png` | Adventure cycling |
| `countryside-ebike.webp` | `gallery/assets_task_01jztd0493f3ws6r84f1agbxct_1752159059_img_1.webp` | Rural e-biking |
| `artistic-bike.jpg` | `gallery/robert-bye-tG36rvCeqng-unsplash-1024x683.jpg` | Section dividers |
| `yellow-bike-pattern.png` | `gallery/bike-made-up-of-bikes.png` | Background patterns |

**Usage Strategy:**
- **About Us:** Community focus with group images
- **E-bike Pages:** Lifestyle appeal for different demographics
- **Section Backgrounds:** Subtle pattern elements
- **Emotional Connection:** Real people enjoying cycling

## 🏷️ BRANDS FOLDER
**Path:** `resources/images/organized/brands/`

| File Name | Original File | Usage |
|-----------|--------------|-------|
| `cycledealia-main-logo.png` | `Main Logo/cycledealia-logo-2048x664.png` | Primary brand logo |
| `cyclescheme-logo.png` | `icons/cyclescheme_big2-300x133.png` | Government scheme prominence |
| `halfords-cycle-to-work.png` | `icons/halfords-cycle-to-work-300x103.png` | Cycle to work scheme |
| `giant-bikes.gif` | `icons/giant.gif` | Major bike manufacturer |
| `kona-bikes.gif` | `icons/kona.gif` | Mountain bike specialist |
| `dawes-bikes.gif` | `icons/dawes.gif` | Traditional British brand |
| `orro-bikes.gif` | `icons/orro.gif` | Performance bike brand |

**Usage Strategy:**
- **Header:** CycleDealia logo and cycle scheme prominence
- **Footer:** Brand partnership grid
- **Credibility:** Established manufacturer relationships
- **Trust Signals:** Government scheme participation

## 🎨 COLOR COORDINATION

### Image Selection Based on Color Scheme
**Primary Colors:** Navy (#0B2C3D), Yellow (#FFC72C), Paper White (#F5F5F5)

**Complementary Images:**
- **Navy Backgrounds:** Product images with dark/neutral backgrounds
- **Yellow Accents:** Yellow bike pattern matches accent color
- **Clean Contrast:** White/light backgrounds for text overlay

**Avoided:**
- Heavily saturated colors that clash with matte palette
- Busy backgrounds that compete with text
- Low contrast images that reduce readability

## 📱 RESPONSIVE CONSIDERATIONS

### Image Sizing Strategy
- **Hero Images:** Large landscape formats for desktop heroes
- **Product Cards:** Square/portrait formats for mobile-friendly cards
- **Lifestyle Images:** Mixed orientations for varied layouts
- **Brand Logos:** Vector formats where possible for scalability

### Mobile Optimization
- **Compressed Formats:** WebP used where supported
- **Fallback Images:** JPG/PNG for older browsers
- **Proper Aspect Ratios:** Optimized for mobile viewports

## 🔄 DEVELOPMENT INTEGRATION

### Import Paths for Development
```javascript
// Homepage Images
import heroImage from '@/images/organized/homepage/hero-ebike-landscape.webp';
import featuredMTB from '@/images/organized/homepage/featured-mountain-bike.webp';

// Service Images  
import maintenanceImage from '@/images/organized/services/bike-maintenance.webp';
import bikefitDiagram from '@/images/organized/services/bikefit-diagram.jpg';

// Product Images
import downhillBike from '@/images/organized/products/downhill-bike.webp';
import redMountainBike from '@/images/organized/products/red-mountain-bike.png';

// Lifestyle Images
import womanEbike from '@/images/organized/lifestyle/woman-ebike-coast.jpg';
import groupRiders from '@/images/organized/lifestyle/group-mountain-bikers.webp';

// Brand Assets
import mainLogo from '@/images/organized/brands/cycledealia-main-logo.png';
import cycleScheme from '@/images/organized/brands/cyclescheme-logo.png';
```

### Component Usage Examples
```jsx
// Hero Section
<img src={heroImage} alt="E-bike rider in countryside landscape" />

// Product Cards
<img src={featuredMTB} alt="Premium mountain bike" />

// Service Sections
<img src={maintenanceImage} alt="Professional bike maintenance" />
```

## ✅ ORGANIZATION COMPLETE

**Total Images Organized:** 18
- **Homepage:** 4 images
- **Services:** 3 images  
- **Products:** 4 images
- **Lifestyle:** 7 images
- **Brands:** 7 assets

**Benefits:**
- **Clear Structure:** Easy to find images by purpose
- **Descriptive Names:** Self-documenting file names
- **Development Ready:** Optimized for React imports
- **Scalable:** Easy to add new images to categories

**Ready for Development:** All images organized and ready for website implementation.