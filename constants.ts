import { HeadshotStyle } from './types';

export const HEADSHOT_STYLES: HeadshotStyle[] = [
  {
    id: 'corporate-grey',
    name: 'Corporate Grey',
    prompt: `Generate a photorealistic, professional corporate headshot of the person in the image. 
    They should be wearing professional business attire (a sharp suit or blazer). 
    The background should be a clean, neutral, solid light-grey studio backdrop. 
    Maintain the person's facial features and identity accurately. 
    The lighting should be soft, even, and flattering, typical of a high-end professional photoshoot. 
    The final image should be sharp, high-resolution, and polished. Do not alter their ethnicity or core facial structure.`,
    thumbnailColor: 'bg-slate-500',
  },
  {
    id: 'modern-tech',
    name: 'Modern Tech Office',
    prompt: `Generate a photorealistic, professional headshot of the person in the image, suitable for a tech company profile.
    They should be dressed in smart-casual business attire.
    The background should be a modern, slightly blurred office setting with architectural elements and natural light (e.g., glass walls, plants, soft lighting).
    Maintain the person's facial features and identity accurately.
    The expression should be approachable and confident.
    The final image should look authentic and professional. Do not alter their ethnicity or core facial structure.`,
    thumbnailColor: 'bg-sky-600',
  },
  {
    id: 'outdoor-natural',
    name: 'Outdoor Natural Light',
    prompt: `Generate a photorealistic, professional headshot of the person in the image with an outdoor setting.
    They should be wearing business-casual or smart-casual clothing.
    The background should be a pleasant, softly blurred outdoor environment, like a park or modern building exterior.
    The lighting must be natural, soft daylight, creating a warm and approachable feel.
    Maintain the person's facial features and identity accurately.
    The final image should appear friendly, professional, and authentic. Do not alter their ethnicity or core facial structure.`,
    thumbnailColor: 'bg-emerald-500',
  },
  {
    id: 'black-white-classic',
    name: 'Classic Black & White',
    prompt: `Generate a classic, artistic, and professional black and white headshot of the person in the image.
    They can be in simple, classic attire.
    The background should be a simple, dark, and non-distracting studio backdrop.
    Lighting should be dramatic and high-contrast (e.g., Rembrandt or split lighting) to create a powerful, timeless look.
    Maintain the person's facial features and identity accurately.
    The final image should be a high-quality monochrome portrait. Do not alter their ethnicity or core facial structure.`,
    thumbnailColor: 'bg-gray-700',
  },
   {
    id: 'creative-studio',
    name: 'Creative Studio',
    prompt: `Generate a vibrant and professional headshot for a creative industry professional.
    The person in the image should be in stylish, modern attire.
    The background should be a studio setting with a pop of bold, solid color (e.g., teal, mustard yellow, or deep blue).
    Lighting should be bright and clean, making the subject stand out.
    The expression should be creative and engaging.
    Maintain the person's facial features and identity accurately. Do not alter their ethnicity or core facial structure.`,
    thumbnailColor: 'bg-rose-500',
  },
  {
    id: 'warm-cafe',
    name: 'Warm & Approachable',
    prompt: `Generate a photorealistic, professional headshot of the person in the image with a warm, approachable, and friendly vibe.
    They should be dressed in smart-casual attire.
    The background should be a cozy, blurred interior like a modern cafe or a comfortable lounge area.
    The lighting should be warm and soft.
    Maintain the person's facial features and identity accurately.
    The expression should be a genuine, gentle smile. Do not alter their ethnicity or core facial structure.`,
    thumbnailColor: 'bg-amber-600',
  },
  {
    id: 'rooftop-cityscape',
    name: 'Rooftop Cityscape',
    prompt: `Generate a photorealistic, professional headshot of the person in the image, posed on a rooftop with a blurred cityscape at dusk in the background.
    They should be in stylish business-casual attire.
    The lighting should be a mix of ambient twilight and soft artificial light, creating a sophisticated and modern mood.
    Maintain the person's facial features and identity accurately. The final image should be sharp and compelling. Do not alter their ethnicity or core facial structure.`,
    thumbnailColor: 'bg-indigo-700',
  },
  {
    id: 'geometric-gradient',
    name: 'Geometric Gradient',
    prompt: `Generate a modern and clean professional headshot of the person in the image against an abstract, geometric background.
    The background should feature a subtle gradient of professional colors (e.g., blues, greys, teals) and soft-edged shapes.
    The subject should be in simple, contemporary business wear.
    Lighting should be bright, even, and studio-quality.
    Maintain the person's facial features and identity accurately. Do not alter their ethnicity or core facial structure.`,
    thumbnailColor: 'bg-purple-500',
  },
  {
    id: 'autumn-park',
    name: 'Autumn Park',
    prompt: `Generate a warm and approachable professional headshot of the person in the image, set in a beautiful park during autumn.
    The background should be filled with soft-focused fall foliage (oranges, reds, yellows).
    The subject should be wearing cozy yet professional attire, like a sweater or a stylish coat.
    The lighting should be soft, golden-hour sunlight.
    Maintain the person's facial features and identity accurately. The expression should be friendly and relaxed. Do not alter their ethnicity or core facial structure.`,
    thumbnailColor: 'bg-orange-600',
  },
  {
    id: 'textured-wall',
    name: 'Textured Wall',
    prompt: `Generate a sophisticated and professional headshot of the person in the image against a minimalist, textured wall.
    The background could be polished concrete, brushed metal, or a dark textured plaster.
    The subject should be dressed in elegant, simple attire.
    The lighting should be slightly dramatic, creating soft shadows that emphasize their features.
    Maintain the person's facial features and identity accurately. The final image should feel artistic yet professional. Do not alter their ethnicity or core facial structure.`,
    thumbnailColor: 'bg-stone-500',
  },
  {
    id: 'street-style-business',
    name: 'Street Style Business',
    prompt: `Generate a dynamic, professional headshot of the person in the image on a bustling, stylish city street.
    The background should be out of focus (bokeh effect) to keep the focus on the subject.
    They should be dressed in modern, sharp business attire.
    The lighting should appear natural and candid, as if captured in a moment.
    Maintain the person's facial features and identity accurately. The expression should be confident and energetic. Do not alter their ethnicity or core facial structure.`,
    thumbnailColor: 'bg-yellow-500',
  },
  {
    id: 'winter-professional',
    name: 'Winter Professional',
    prompt: `Generate a crisp and professional headshot of the person in the image with a subtle winter theme.
    The background could be a modern office window looking out onto a soft-focused snowy scene, or a clean, bright indoor setting with cool-toned light.
    The subject should be in sharp, professional winter business attire (e.g., a dark blazer or a fine-knit turtleneck).
    The lighting should be clean and bright with cool undertones.
    Maintain the person's facial features and identity accurately. Do not alter their ethnicity or core facial structure.`,
    thumbnailColor: 'bg-sky-300',
  },
];