"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import { Leaf, Wine } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="compact"
        sizing="largeSmallSizeMediumTitles"
        background="circleGradient"
        cardStyle="gradient-mesh"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "About",          id: "about"},
        {
          name: "Menu",          id: "products"},
        {
          name: "Reviews",          id: "testimonials"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Gourmet Table"
      button={{ text: "Reserve", href: "#contact" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCentered
      background={{
        variant: "gradient-bars"}}
      title="Unforgettable Dining Experiences"
      description="Indulge in our carefully curated menu, prepared with the finest locally sourced ingredients in an elegant atmosphere."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/relaxed-teenager-with-drink-mobile_1157-1131.jpg",          alt: "Happy Guest 1"},
        {
          src: "http://img.b2bpic.net/free-photo/group-young-friends-having-wine-together_23-2148454148.jpg",          alt: "Happy Guest 2"},
        {
          src: "http://img.b2bpic.net/free-photo/charming-successful-female-entrepreneur-sit-alone-table-restaurant-modern-cafe-touch-neck-cute-tender-smiling-camera-eat-salad-enjoy-coffee-good-food-lead-healthy-diet-relaxing-break-lunch_197531-30650.jpg",          alt: "Happy Guest 3"},
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-rich-woman-table_23-2149684353.jpg",          alt: "Happy Guest 4"},
        {
          src: "http://img.b2bpic.net/free-photo/lovely-couple-enjoying-new-year-party_23-2149173295.jpg",          alt: "Happy Guest 5"},
      ]}
      avatarText="Loved by 1,000+ guests"
      buttons={[
        {
          text: "Reserve a Table",          href: "#contact"},
        {
          text: "View Menu",          href: "#products"},
      ]}
      buttonAnimation="slide-up"
      marqueeItems={[
        {
          type: "text",          text: "Michelin Star Awarded"},
        {
          type: "text-icon",          text: "Locally Sourced",          icon: Leaf,
        },
        {
          type: "text",          text: "Fine Dining Since 2009"},
        {
          type: "text-icon",          text: "Expert Sommelier",          icon: Wine,
        },
        {
          type: "text",          text: "Seasonal Tasting Menus"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={true}
      heading={[
        {
          type: "text",          content: "Crafting Excellence in "},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/shouting-chef-with-speech-bubble_329181-702.jpg",          alt: "Our Passion"},
        {
          type: "text",          content: " Every Dish"},
      ]}
      buttons={[
        {
          text: "Our Philosophy",          href: "#"},
      ]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="one-large-right-three-stacked-left"
      useInvertedBackground={false}
      products={[
        {
          id: "1",          name: "Truffle Infused Risotto",          price: "$32.00",          imageSrc: "http://img.b2bpic.net/free-photo/crab-meat-coconut-cream-soup-micro-greens-gray-concrete-background-top-view-copy-space-h_1258-52397.jpg"},
        {
          id: "2",          name: "Aged Wagyu Ribeye",          price: "$68.00",          imageSrc: "http://img.b2bpic.net/free-photo/sauteed-roasted-lamb-bone-served-teriyaki-sauce_114579-1895.jpg"},
        {
          id: "3",          name: "Handmade Ravioli",          price: "$28.00",          imageSrc: "http://img.b2bpic.net/free-photo/pasta-with-stuffed-meat-sauce_140725-9598.jpg"},
        {
          id: "4",          name: "Artisan Sourdough Platter",          price: "$12.00",          imageSrc: "http://img.b2bpic.net/free-photo/sushi-roll_74190-2908.jpg"},
        {
          id: "5",          name: "Valrhona Chocolate Torte",          price: "$16.00",          imageSrc: "http://img.b2bpic.net/free-photo/dessert-with-strawberry-cafe_181624-26180.jpg"},
        {
          id: "6",          name: "Fresh Catch Sea Bass",          price: "$42.00",          imageSrc: "http://img.b2bpic.net/free-photo/beef-with-pistachio-topping-served-with-fruits-berries_7502-7390.jpg"},
      ]}
      title="Our Signature Dishes"
      description="Experience the artistry of our chefs through our meticulously crafted menu selection."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",          name: "Sarah Johnson",          role: "Food Critic",          company: "Fine Dining Weekly",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/relaxed-teenager-with-drink-mobile_1157-1131.jpg"},
        {
          id: "2",          name: "Michael Chen",          role: "Patron",          company: "Regular",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/group-young-friends-having-wine-together_23-2148454148.jpg"},
        {
          id: "3",          name: "Emily Rodriguez",          role: "Foodie",          company: "Review Blog",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/charming-successful-female-entrepreneur-sit-alone-table-restaurant-modern-cafe-touch-neck-cute-tender-smiling-camera-eat-salad-enjoy-coffee-good-food-lead-healthy-diet-relaxing-break-lunch_197531-30650.jpg"},
        {
          id: "4",          name: "David Kim",          role: "Guest",          company: "Local",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-rich-woman-table_23-2149684353.jpg"},
        {
          id: "5",          name: "Alex Smith",          role: "Visitor",          company: "Tourist",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/lovely-couple-enjoying-new-year-party_23-2149173295.jpg"},
      ]}
      kpiItems={[
        {
          value: "4.9/5",          label: "Average Rating"},
        {
          value: "12k+",          label: "Happy Diners"},
        {
          value: "15",          label: "Years Served"},
      ]}
      title="Guest Stories"
      description="What our patrons say about their fine dining journey with us."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Reserve Your Experience"
      description="We are ready to welcome you. Provide your details below for a seamless reservation experience."
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Your Name",          required: true,
        },
        {
          name: "email",          type: "email",          placeholder: "Email Address",          required: true,
        },
        {
          name: "guests",          type: "number",          placeholder: "Number of Guests",          required: true,
        },
      ]}
      textarea={{
        name: "comments",        placeholder: "Dietary requirements or special requests?",        rows: 3,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/wide-angle-shot-travel-accommodation-hotel-lounge-with-check-reception-desk-stylish-empty-modern-resort-foyer-interior-with-cozy-furniture-warm-fireplace-ready-welcome-tourists_482257-67830.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Navigate",          items: [
            {
              label: "Home",              href: "#hero"},
            {
              label: "Our Story",              href: "#about"},
            {
              label: "Full Menu",              href: "#products"},
            {
              label: "Contact Us",              href: "#contact"},
          ],
        },
        {
          title: "Location",          items: [
            {
              label: "123 Culinary Ave",              href: "#"},
            {
              label: "Food City, FC 90210",              href: "#"},
            {
              label: "Mon-Sun: 5pm-11pm",              href: "#"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
          ],
        },
      ]}
      logoText="Gourmet Table"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
