import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Create the Sanity client
export const client = createClient({
  projectId: 'viv3sflq', 
  dataset: 'production', 
  apiVersion: '2021-08-31', 
  useCdn: false, 
});

// Create the image URL builder using the client
const builder = imageUrlBuilder(client);

// Function to generate URLs for Sanity images
export function urlFor(source: any) {
  return builder.image(source);
}
