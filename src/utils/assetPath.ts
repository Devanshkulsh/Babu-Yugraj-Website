const ABSOLUTE_URL_PATTERN = /^(?:[a-z]+:)?\/\//i;

const getPublicAssetPath = (assetPath: string) => {
  if (!assetPath || assetPath === "#" || ABSOLUTE_URL_PATTERN.test(assetPath)) {
    return assetPath;
  }

  const normalizedPath = assetPath.replace(/^\/+/, "");
  const baseUrl = import.meta.env.BASE_URL || "/";

  return encodeURI(`${baseUrl}${normalizedPath}`);
};

const getDocumentViewerPath = (assetPath: string, title?: string) => {
  const params = new URLSearchParams({
    src: getPublicAssetPath(assetPath),
  });

  if (title) {
    params.set("title", title);
  }

  return `/document-viewer?${params.toString()}`;
};

export { getDocumentViewerPath };
export default getPublicAssetPath;
