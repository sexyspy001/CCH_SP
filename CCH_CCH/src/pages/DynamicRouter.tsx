import { useParams } from "react-router-dom";
import { platforms, allServicePages, locations, blogs } from "../data";

import PlatformPage from "./PlatformPage";
import ServicePage from "./ServicePage";
import LocationPage from "./LocationPage";
import BlogPost from "./BlogPost";

export default function DynamicRouter() {

  const { slug } = useParams<{ slug: string }>();

  if (!slug) return null;

  // PLATFORM PAGE
  const platform = platforms.find((p) => p.slug === slug);

  if (platform) {
    return <PlatformPage platform={platform} />;
  }

  // SERVICE PAGE
  const service = allServicePages.find((s) => s.slug === slug);

  if (service) {
    const parentPlatform = platforms.find(
      (p) => p.id === service.platformId
    );

    return <ServicePage service={service} platform={parentPlatform} />;
  }

  // BLOG PAGE
  const blog = blogs.find((b) => b.slug === slug);

  if (blog) {
    return <BlogPost blog={blog} />;
  }

  // LOCATION PAGE
  const locationMatch = locations.find((loc) =>
    slug.endsWith("-" + loc)
  );

  if (locationMatch) {

    const serviceSlug = slug.replace("-" + locationMatch, "");

    const matchedService = allServicePages.find(
      (s) => s.slug === serviceSlug
    );

    if (matchedService) {

      const parentPlatform = platforms.find(
        (p) => p.id === matchedService.platformId
      );

      return (
        <LocationPage
          service={matchedService}
          platform={parentPlatform}
          location={locationMatch}
        />
      );
    }
  }

  // 404 PAGE
  return (
    <div style={{ padding: "80px", textAlign: "center" }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}
