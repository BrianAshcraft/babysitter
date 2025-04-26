<!-- 
  MetaTags.svelte - Reusable component for setting meta tags
  Usage:
  <MetaTags
    title="Page Title"
    description="Page description"
    image="/path/to/image.jpg"
    type="website"
    route="/current-route"
    style="fun|professional"
  />
-->
<script>
  // Props with defaults
  export let title = "Elmira's Playhouse - Professional Babysitting Services";
  export let description = "Trusted childcare services by Elmira, providing safe and engaging care for children of all ages in Boston, MA.";
  export let image = "/images/elmira-social.jpg"; // Default social sharing image
  export let type = "website";
  export let route = "";
  export let style = ""; // 'fun' or 'professional'
  
  // Compute the full URL for canonical and OG tags
  const baseUrl = "https://elmirasplayhouse.com"; // Replace with actual domain when deployed
  const url = `${baseUrl}${route}`;
  
  // Style-specific content
  $: styleSpecificTitle = style === 'fun' 
    ? `Elmira's Playhouse - Fun & Engaging Childcare`
    : `Elmira's Professional Childcare Services`;
    
  $: styleSpecificDescription = style === 'fun'
    ? "Fun, creative, and engaging childcare services with Elmira. Where playtime is magical and learning is an adventure!"
    : "Professional, reliable childcare services by Elmira. Providing safe, structured, and nurturing care for your children.";
    
  // Use style-specific content if style is provided, otherwise use defaults
  $: metaTitle = style ? styleSpecificTitle : title;
  $: metaDescription = style ? styleSpecificDescription : description;
</script>

<svelte:head>
  <!-- Basic Meta Tags -->
  <title>{metaTitle}</title>
  <meta name="description" content={metaDescription} />
  
  <!-- Canonical Link -->
  <link rel="canonical" href={url} />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content={type} />
  <meta property="og:url" content={url} />
  <meta property="og:title" content={metaTitle} />
  <meta property="og:description" content={metaDescription} />
  <meta property="og:image" content={`${baseUrl}${image}`} />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content={url} />
  <meta name="twitter:title" content={metaTitle} />
  <meta name="twitter:description" content={metaDescription} />
  <meta name="twitter:image" content={`${baseUrl}${image}`} />
  
  <!-- Additional Meta Tags -->
  <meta name="keywords" content="babysitting, childcare, Boston, nanny, babysitter, children, kids, care, {style === 'fun' ? 'fun, creative, playful' : 'professional, reliable, experienced'}" />
  <meta name="author" content="Elmira" />
  
  <!-- Robots -->
  <meta name="robots" content="index, follow" />
</svelte:head>
