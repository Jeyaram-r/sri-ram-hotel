"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "ta";

interface LangContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
}

const LangContext = createContext<LangContextType>({
  lang: "en",
  toggleLang: () => {},
  t: (key) => key,
});

export const translations: Record<string, Record<Lang, string>> = {
  // Navbar
  "home":       { en: "Home",    ta: "முகப்பு" },
  "menu":       { en: "Menu",    ta: "மெனு" },
  "about":      { en: "About",   ta: "பற்றி" },
  "services":   { en: "Services",ta: "சேவைகள்" },
  "contact":    { en: "Contact", ta: "தொடர்பு" },

  // Hero
  "hero.welcome":   { en: "Welcome to",  ta: "வரவேற்கிறோம்" },
  "hero.name":      { en: "Sri Ram Hotel", ta: "ஸ்ரீ ராம் ஹோட்டல்" },
  "hero.tagline":   { en: "Small place, big taste. Simple food cooked with heart — the way it's always been done.", ta: "சிறிய இடம், பெரிய சுவை. இதயத்தால் சமைக்கப்பட்ட எளிய உணவு — எப்போதும் இப்படித்தான்." },
  "hero.viewmenu":  { en: "View Our Menu", ta: "மெனு பார்க்க" },
  "hero.timings":   { en: "Our Timings",   ta: "நேரங்கள்" },

  // Specials
  "specials.label":       { en: "— what we're known for —", ta: "— எங்களின் சிறப்புகள் —" },
  "specials.title":       { en: "Today's Specials", ta: "இன்றைய சிறப்பு உணவுகள்" },
  "specials.tag1":        { en: "Breakfast Special", ta: "காலை சிறப்பு" },
  "specials.tag2":        { en: "Must Try",          ta: "அவசியம் சாப்பிட வேண்டும்" },
  "specials.tag3":        { en: "Dinner Favourite",  ta: "இரவு விருப்பம்" },
  "specials.desc1":       { en: "Crispy golden dosa with spiced potato filling", ta: "மொறுமொறுப்பான தங்க நிற தோசை உருளைக்கிழங்கு பூரணத்துடன்" },
  "specials.desc2":       { en: "Flaky poratta tossed with egg, spices & onions", ta: "முட்டை, மசாலா மற்றும் வெங்காயத்துடன் கலைத்த பரோட்டா" },
  "specials.desc3":       { en: "Soft chappathi served with flavourful kuruma", ta: "மென்மையான சப்பாத்தி சுவையான குருமாவுடன்" },

  // CTA section
  "cta.label":    { en: "Come visit us",    ta: "எங்களை சந்திக்க வாருங்கள்" },
  "cta.title":    { en: "We'd love to feed you", ta: "உங்களுக்கு உணவிட விரும்புகிறோம்" },
  "cta.desc":     { en: "Whether it's your first visit or your hundredth, you'll always find a warm meal and a welcoming table at Sri Ram Hotel.", ta: "இது உங்கள் முதல் வருகையாக இருந்தாலும் நூறாவது வருகையாக இருந்தாலும், ஸ்ரீ ராம் ஹோட்டலில் எப்போதும் சூடான உணவும் வரவேற்பும் காத்திருக்கும்." },
  "cta.btn":      { en: "View Our Menu",    ta: "மெனு பார்க்க" },

  // Why Us
  "why.label":    { en: "Why people love us", ta: "மக்கள் எங்களை ஏன் விரும்புகிறார்கள்" },
  "why.title1":   { en: "Hot & Fresh",        ta: "சூடான & புதியது" },
  "why.desc1":    { en: "Every dish made to order, served piping hot", ta: "ஒவ்வொரு உணவும் ஆர்டருக்கு தயாரிக்கப்பட்டு சூடாக பரிமாறப்படும்" },
  "why.title2":   { en: "Pure Ingredients",   ta: "தூய பொருட்கள்" },
  "why.desc2":    { en: "No compromise on quality — ever", ta: "தரத்தில் எந்த சமரசமும் இல்லை — எப்போதும்" },
  "why.title3":   { en: "Honest Prices",      ta: "நேர்மையான விலைகள்" },
  "why.desc3":    { en: "Great food that doesn't empty your pocket", ta: "உங்கள் பையை காலி செய்யாத சிறந்த உணவு" },
  "why.title4":   { en: "Made with Love",     ta: "அன்புடன் தயாரிக்கப்பட்டது" },
  "why.desc4":    { en: "Recipes passed down through generations", ta: "தலைமுறைகளாக கடத்தப்பட்ட சமையல் குறிப்புகள்" },

  // Timings
  "timings.title":       { en: "We're Open",         ta: "நாங்கள் திறந்திருக்கிறோம்" },
  "timings.breakfast":   { en: "Breakfast",           ta: "காலை உணவு" },
  "timings.lunch":       { en: "Lunch",               ta: "மதிய உணவு" },
  "timings.dinner":      { en: "Dinner",              ta: "இரவு உணவு" },
  "timings.thursday":    { en: "Thursday Leave *",    ta: "வியாழன் விடுமுறை *" },

  // Footer
  "footer.location":  { en: "MuthuKrishnaperi · Open 7 days a week", ta: "முத்துகிருஷ்ணபேரி · வாரம் 7 நாட்களும் திறந்திருக்கும்" },
  "footer.rights":    { en: "© 2026 Sri Ram Hotel. All rights reserved.", ta: "© 2026 ஸ்ரீ ராம் ஹோட்டல். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை." },

  // Menu page
  "menu.established":  { en: "Established 2010",                   ta: "2010 இல் நிறுவப்பட்டது" },
  "menu.title":        { en: "Our Menu",                           ta: "எங்கள் மெனு" },
  "menu.subtitle":     { en: "Fresh · Flavourful · Crafted with love", ta: "புதியது · சுவையானது · அன்புடன் தயாரிக்கப்பட்டது" },
  "menu.breakfast":    { en: "Breakfast",   ta: "காலை உணவு" },
  "menu.lunch":        { en: "Lunch",       ta: "மதிய உணவு" },
  "menu.dinner":       { en: "Dinner",      ta: "இரவு உணவு" },
  "menu.maindish":     { en: "Main Dish",   ta: "முக்கிய உணவு" },
  "menu.curry":        { en: "Curry",       ta: "கறி" },
  "menu.sidedish":     { en: "Side Dishes", ta: "பக்க உணவுகள்" },
  "menu.complimentary":{ en: "Complimentary", ta: "இலவசம்" },
  "menu.footnote":     { en: "All prices are in Indian Rupees (₹) · Taxes included", ta: "அனைத்து விலைகளும் இந்திய ரூபாயில் (₹) · வரி உட்பட" },

  // About page
  "about.ourstory":     { en: "Our Story",          ta: "எங்கள் கதை" },
  "about.title":        { en: "About Us",            ta: "எங்களைப் பற்றி" },
  "about.tagline":      { en: "More than a decade of serving the community — one plate at a time.", ta: "ஒரு தசாப்தத்திற்கும் மேலாக சமூகத்திற்கு சேவை — ஒரு தட்டு ஒரு தட்டாக." },
  "about.founderlabel": { en: "Founder & Owner",    ta: "நிறுவனர் & உரிமையாளர்" },
  "about.founderbio":   { en: "With a passion for authentic South Indian flavours and a belief that good food should be accessible to everyone, Ravichandran P founded Sri Ram Hotel in 2013. Starting from scratch in MuthuKrishnaperi, he built the hotel on three principles — freshness, honesty, and heart. Over a decade later, he continues to oversee every aspect of the kitchen, ensuring every dish served carries the same love and care it always has.", ta: "உண்மையான தென்னிந்திய சுவைகளின் மீதான ஆர்வத்துடனும், நல்ல உணவு அனைவருக்கும் கிடைக்க வேண்டும் என்ற நம்பிக்கையுடனும், ரவிச்சந்திரன் பெ 2013ல் ஸ்ரீ ராம் ஹோட்டலை நிறுவினார். முத்துகிருஷ்ணபேரியில் புதிதாக தொடங்கி, புத்துணர்வு, நேர்மை மற்றும் இதயம் என்ற மூன்று கொள்கைகளில் ஹோட்டலை கட்டினார். ஒரு தசாப்தத்திற்கும் மேலாக, ஒவ்வொரு உணவிலும் அதே அன்பும் அக்கறையும் இருப்பதை உறுதி செய்கிறார்." },
  "about.valueslabel":  { en: "What drives us",     ta: "எங்களை இயக்குவது" },
  "about.valuestitle":  { en: "Our Values",          ta: "எங்கள் மதிப்புகள்" },
  "about.v1title":      { en: "Fresh Every Day",     ta: "தினமும் புதியது" },
  "about.v1desc":       { en: "We prepare everything fresh each morning. No shortcuts, no leftovers served the next day.", ta: "ஒவ்வொரு காலையும் எல்லாவற்றையும் புதிதாக தயாரிக்கிறோம். குறுக்கு வழிகள் இல்லை, மறுநாள் மீதமானது பரிமாறப்படாது." },
  "about.v2title":      { en: "Community First",     ta: "சமூகம் முதலில்" },
  "about.v2desc":       { en: "We've grown alongside our neighbours. Every customer is treated like family.", ta: "நாங்கள் எங்கள் அண்டை வீட்டாருடன் வளர்ந்தோம். ஒவ்வொரு வாடிக்கையாளரும் குடும்பத்தினரைப் போல் நடத்தப்படுவார்கள்." },
  "about.v3title":      { en: "Simple & Pure",       ta: "எளிமை & தூய்மை" },
  "about.v3desc":       { en: "No fancy additives or shortcuts. Just clean ingredients and traditional recipes.", ta: "அலங்கார சேர்க்கைகள் இல்லை. தூய்மையான பொருட்கள் மற்றும் பாரம்பரிய சமையல் குறிப்புகள் மட்டுமே." },
  "about.v4title":      { en: "Affordable Always",   ta: "எப்போதும் மலிவான விலை" },
  "about.v4desc":       { en: "Good food should be for everyone. We've kept our prices fair since day one.", ta: "நல்ல உணவு அனைவருக்கும் கிடைக்க வேண்டும். தொடக்கத்திலிருந்தே நியாயமான விலையை பராமரிக்கிறோம்." },
  "about.journeylabel": { en: "Since 2013",          ta: "2013 முதல்" },
  "about.journeytitle": { en: "Our Journey",         ta: "எங்கள் பயணம்" },
  "about.ctalabel":     { en: "Come visit us",       ta: "எங்களை சந்திக்க வாருங்கள்" },
  "about.ctatitle":     { en: "We'd love to feed you", ta: "உங்களுக்கு உணவிட விரும்புகிறோம்" },
  "about.ctadesc":      { en: "Whether it's your first visit or your hundredth, you'll always find a warm meal and a welcoming table at Sri Ram Hotel.", ta: "இது உங்கள் முதல் வருகையாக இருந்தாலும், ஸ்ரீ ராம் ஹோட்டலில் எப்போதும் வரவேற்பு காத்திருக்கும்." },
  "about.ctabtn":       { en: "View Our Menu",       ta: "மெனு பார்க்க" },

  // Milestones
  "milestone.2013.title": { en: "The Beginning",        ta: "தொடக்கம்" },
  "milestone.2013.desc":  { en: "Sri Ram Hotel opened its doors in MuthuKrishnaperi, Alangulam — a humble kitchen with a big dream.", ta: "ஸ்ரீ ராம் ஹோட்டல் முத்துகிருஷ்ணபேரியில் திறக்கப்பட்டது — ஒரு பெரிய கனவுடன் ஒரு சிறிய சமையலறை." },
  "milestone.2015.title": { en: "Growing Reputation",   ta: "வளரும் புகழ்" },
  "milestone.2015.desc":  { en: "Word spread across the neighbourhood. Regulars came every morning for idly and dosa.", ta: "செய்தி அண்டை வீடுகளில் பரவியது. தினமும் காலையில் இட்லி தோசைக்கு வழக்கமான வாடிக்கையாளர்கள் வந்தனர்." },
  "milestone.2018.title": { en: "A Trusted Name",       ta: "நம்பகமான பெயர்" },
  "milestone.2018.desc":  { en: "Sri Ram Hotel became a go-to spot for families, workers, and travellers.", ta: "ஸ்ரீ ராம் ஹோட்டல் குடும்பங்கள், தொழிலாளர்கள் மற்றும் பயணிகளுக்கு விரும்பிய இடமாக மாறியது." },
  "milestone.2023.title": { en: "A Decade of Flavour",  ta: "ஒரு தசாப்த சுவை" },
  "milestone.2023.desc":  { en: "Ten years of serving the community — thousands of meals and countless loyal customers.", ta: "சமூகத்திற்கு பத்து ஆண்டுகள் சேவை — ஆயிரக்கணக்கான உணவுகள் மற்றும் எண்ணற்ற விசுவாசமான வாடிக்கையாளர்கள்." },
  "milestone.2026.title": { en: "Still Going Strong",   ta: "இன்னும் வலுவாக" },
  "milestone.2026.desc":  { en: "Over a decade later, Sri Ram Hotel continues to serve the same heart-made food that started it all.", ta: "ஒரு தசாப்தத்திற்கும் மேலாக, ஸ்ரீ ராம் ஹோட்டல் அதே இதயத்தால் செய்யப்பட்ட உணவை தொடர்ந்து பரிமாறுகிறது." },
};

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const toggleLang = () => setLang((l) => (l === "en" ? "ta" : "en"));
  const t = (key: string) => translations[key]?.[lang] ?? key;
  return (
    <LangContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}