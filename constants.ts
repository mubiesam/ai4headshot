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
];
