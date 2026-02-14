// Sanity CMS Configuration
// Replace 'YOUR_PROJECT_ID' with your actual Sanity project ID

const SANITY_CONFIG = {
  projectId: 'YOUR_PROJECT_ID',  // Get this from https://sanity.io/manage
  dataset: 'production',
  apiVersion: 'v2021-10-21',
  useCdn: true  // Use CDN for faster response times
};

// Helper function to build Sanity image URLs
function getSanityImageUrl(imageAsset, width = 300, height = 300) {
  if (!imageAsset || !imageAsset.asset) return '';

  // Extract image ID from asset reference
  const ref = imageAsset.asset._ref || imageAsset.asset.url;

  if (ref.includes('http')) {
    // It's already a full URL
    return `${ref}?w=${width}&h=${height}&fit=crop`;
  }

  // Build URL from image reference
  return `https://cdn.sanity.io/images/${SANITY_CONFIG.projectId}/${SANITY_CONFIG.dataset}/${ref}?w=${width}&h=${height}&fit=crop`;
}
