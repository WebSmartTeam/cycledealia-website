# CYCLEDEALIA PROJECT PLAN

**Project:** CycleDealia Website Rebuild  
**Start Date:** 2025-07-10  
**Framework:** React + TypeScript + Tailwind CSS  
**Status:** Planning Complete - Ready for Development

## 🎯 PROJECT OVERVIEW

### Business Objectives
- **Primary:** Increase service bookings and bike sales
- **Secondary:** Establish local cycling community presence
- **Tertiary:** Showcase professional expertise and brand partnerships

### Technical Requirements
- **Design:** Matte flat design (no gradients/glassmorphism)
- **Colors:** Navy primary, yellow accent, matte finish
- **Images:** Comprehensive cycling photography collection
- **Responsive:** Mobile-first approach
- **Performance:** Fast loading times

## 📊 WEBSITE STRUCTURE

### Total Pages: 7
1. **Homepage** - Hero + Services + Featured Products
2. **Service & Repairs** - Professional maintenance services
3. **E-Bikes** - Modern electric bike showcase
4. **Bike Brands** - Brand partnerships and product lines
5. **Cycle Scheme** - Government cycle-to-work program
6. **BikeFit** - Professional bike fitting service
7. **Find Us** - Contact, location, and business information

## 🏗️ DETAILED PAGE SPECIFICATIONS

### 1. HOMEPAGE
**Purpose:** Primary conversion page for services and products

**Sections:**
- **Hero Section**
  - Image: E-bike rider in landscape
  - Headline: "Premium Cycling Equipment & Expert Service"
  - CTA: "Book Service" (Yellow) + "View Bikes" (Blue)
  - Subtext: "Hitchin's trusted cycling specialists with 30+ years experience"

- **Services Grid**
  - Service & Repairs + BikeFit + Cycle Scheme
  - Images: Maintenance, fitting, commuter lifestyle
  - Layout: 3-column responsive grid

- **Featured Products**
  - 4 product showcases from new-pngs collection
  - Layout: Product cards with specifications
  - CTA: "View All Bikes"

- **Why Choose Us**
  - Free setup and service package (£130 value)
  - Professional bike fitting included
  - Local expertise and community focus

- **Brand Partnerships**
  - Brand logos from icons folder
  - Layout: Horizontal scroll on mobile, grid on desktop

### 2. SERVICE & REPAIRS PAGE
**Purpose:** Service booking and maintenance information

**Sections:**
- **Hero Section**
  - Image: Bike maintenance detail
  - Headline: "Professional Bike Service & Repairs"
  - Subtext: "Expert maintenance to keep you cycling safely"

- **Service Packages**
  - Basic Service: £45 - Standard maintenance
  - Premium Service: £75 - Comprehensive check
  - Emergency Repairs: £60/hour - Quick fixes
  - Winter Service: £55 - Seasonal preparation

- **What's Included**
  - Image: Service checklist or maintenance process
  - Detailed service breakdown
  - Warranty information

- **Book Service**
  - Prominent booking CTA
  - Contact form or phone number
  - Turnaround time information

### 3. E-BIKES PAGE
**Purpose:** E-bike sales and education

**Sections:**
- **Hero Section**
  - Image: Woman on e-bike by coast
  - Headline: "E-Bikes for Every Adventure"
  - Benefits: Eco-friendly, efficient, fun

- **E-Bike Categories**
  - Commuter E-bikes
  - Mountain E-bikes  
  - Leisure E-bikes
  - Each with specific product examples

- **Benefits Section**
  - Cost savings vs. car/public transport
  - Health benefits
  - Environmental impact
  - Government incentives

- **Product Showcase**
  - Images: E-bike products from collection
  - Specifications and pricing
  - Test ride booking

### 4. BIKE BRANDS PAGE
**Purpose:** Brand credibility and product range

**Sections:**
- **Hero Section**
  - Image: Brand collage or premium bike
  - Headline: "Trusted Bike Brands"
  - Subtext: "Quality bikes from leading manufacturers"

- **Brand Grid**
  - Giant, Kona, Dawes, Claud Butler, Kross, Orro
  - Each brand with description and specialties
  - Links to available models

- **Why These Brands**
  - Quality assurance
  - Warranty support
  - Local service availability

### 5. CYCLE SCHEME PAGE
**Purpose:** Government cycle-to-work program explanation

**Sections:**
- **Hero Section**
  - Image: Commuter cycling lifestyle
  - Headline: "Save Up to 42% with Cycle Scheme"
  - Benefits: Tax savings, monthly payments

- **How It Works**
  - 4-step process with icons
  - Employer participation
  - Voucher redemption
  - Monthly payment structure

- **Eligible Products**
  - Bikes up to £1,000 standard
  - Extended scheme options
  - Accessories included

- **Apply Now**
  - Application process
  - Employer list
  - Contact for assistance

### 6. BIKEFIT PAGE
**Purpose:** Professional bike fitting service

**Sections:**
- **Hero Section**
  - Image: Professional bike fitting
  - Headline: "Professional Bike Fitting"
  - Subtext: "Optimize comfort and performance"

- **Fitting Process**
  - Image: BikeFit diagram
  - Assessment stages
  - Adjustment procedures
  - Follow-up service

- **Benefits**
  - Comfort improvement
  - Performance enhancement
  - Injury prevention
  - Before/after comparison

- **Booking**
  - £80 service (included with bike purchase)
  - Duration: 1-2 hours
  - Appointment scheduling

### 7. FIND US PAGE
**Purpose:** Contact information and location

**Sections:**
- **Contact Information**
  - Address: 15C Sun Street, Hitchin, Hertfordshire, SG5 1AH
  - Phone: 01462 631555
  - Email: info@cycledealia.co.uk

- **Opening Hours**
  - Monday-Friday: 10am-6pm
  - Saturday: 9:30am-5:30pm
  - Sunday: Closed

- **Contact Form**
  - Background: Yellow bike pattern (subtle)
  - Name, email, message fields
  - Service inquiry options

- **Location Map**
  - Interactive map integration
  - Parking information
  - Public transport links

## 🎨 DESIGN SYSTEM

### Color Palette
```css
:root {
  --primary-dark: #0B2C3D;    /* Navy - Headers, navigation */
  --accent-yellow: #FFC72C;   /* Yellow - Primary CTAs */
  --background: #F5F5F5;      /* Paper white - Backgrounds */
  --text-body: #2C2C2C;       /* Dark grey - Body text */
  --link-cta: #007BBA;        /* Blue - Secondary CTAs */
}
```

### Typography
- **Headlines:** Bold, navy color (#0B2C3D)
- **Body Text:** Regular, dark grey (#2C2C2C)
- **CTAs:** Bold, contrasting colors
- **Font Stack:** System fonts for performance

### Components
- **Buttons:** Flat design, no shadows
- **Cards:** Matte backgrounds, clean borders
- **Forms:** Minimal, high contrast
- **Navigation:** Simple, flat design

## 🖼️ IMAGE USAGE GUIDE

### Hero Images
- **Homepage:** E-bike rider in landscape
- **Service:** Bike maintenance detail
- **E-bikes:** Woman on e-bike by coast
- **Brands:** Brand collage or premium bike
- **Cycle Scheme:** Commuter lifestyle
- **BikeFit:** Professional fitting
- **Find Us:** Contact form with bike pattern

### Product Images
- **E-bike:** Black e-bike (mountain-3-4_large.webp)
- **Mountain:** Full-suspension + Red/black mountain bike
- **Commuter:** Blue commuter bike
- **Performance:** Downhill bike

### Lifestyle Images
- **Community:** Group mountain bikers
- **Adventure:** Solo mountain rider
- **Urban:** City cyclist in motion
- **Maintenance:** Service process images

## 🔧 TECHNICAL SPECIFICATIONS

### Development Stack
- **Frontend:** React 18 + TypeScript
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Deployment:** Netlify
- **Images:** Optimized WebP format

### Performance Targets
- **Page Load:** < 3 seconds
- **Mobile Score:** > 90 (Lighthouse)
- **Accessibility:** WCAG 2.1 AA compliance
- **SEO:** Structured data and meta optimization

### Responsive Breakpoints
- **Mobile:** 320px - 767px
- **Tablet:** 768px - 1023px
- **Desktop:** 1024px+

## 🚀 DEVELOPMENT PHASES

### Phase 1: Foundation (Week 1)
- Project setup and configuration
- Color system and typography
- Component library creation
- Image optimization and organization

### Phase 2: Core Pages (Week 2)
- Homepage with hero and services
- Service & Repairs page
- Navigation and footer
- Basic responsive layout

### Phase 3: Product Pages (Week 3)
- E-bikes showcase page
- Bike brands page
- Product card components
- Image galleries

### Phase 4: Information Pages (Week 4)
- Cycle scheme page
- BikeFit page
- Find Us page with contact form
- Content integration

### Phase 5: Optimization (Week 5)
- Performance optimization
- SEO implementation
- Mobile refinements
- Testing and bug fixes

## 📋 CONTENT REQUIREMENTS

### Content Files Created
- ✅ **CYCLEDEALIA_CONTENT_ANALYSIS.md** - Business information
- ✅ **DESIGN_PLAN.md** - Visual design strategy
- ✅ **PROJECT_PLAN.md** - Development roadmap

### Content To Create
- **Service descriptions** - Detailed service offerings
- **Product specifications** - Bike technical details
- **Brand partnerships** - Individual brand information
- **FAQ section** - Common customer questions
- **About us** - Company history and team
- **Blog content** - Cycling tips and local routes

## 📞 CONTACT INTEGRATION

### Business Information
- **Phone:** 01462 631555 (prominent placement)
- **Email:** info@cycledealia.co.uk
- **Address:** 15C Sun Street, Hitchin, Hertfordshire, SG5 1AH
- **Hours:** Mon-Fri 10am-6pm, Sat 9:30am-5:30pm, Sun Closed

### CTA Strategy
- **Primary:** "Book Service" (Yellow buttons)
- **Secondary:** "Call Now" (Blue links)
- **Tertiary:** "Email Us" (Text links)

## 🎯 SUCCESS METRICS

### Business KPIs
- **Service Bookings:** 30% increase
- **Product Sales:** 25% increase
- **Brand Enquiries:** 40% increase
- **Local Visibility:** Top 3 Google rankings

### Technical KPIs
- **Page Speed:** < 3 seconds
- **Mobile Usability:** 95+ score
- **Accessibility:** WCAG AA compliance
- **SEO Performance:** 90+ Lighthouse score

---

## ✅ APPROVAL CHECKLIST

- [x] **Content Analysis Complete** - All business information gathered
- [x] **Image Analysis Complete** - All images categorized and assigned
- [x] **Design Plan Complete** - Color scheme and layout defined
- [x] **Project Structure Complete** - 7 pages planned with detailed specs
- [x] **Technical Requirements Complete** - Stack and performance targets set
- [x] **Development Timeline Complete** - 5-phase implementation plan

**STATUS: READY FOR DEVELOPMENT APPROVAL**

All planning, content analysis, and design work complete. Ready to begin development once approved.