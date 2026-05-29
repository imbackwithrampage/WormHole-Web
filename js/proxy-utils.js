export const getProxyUrl = (url) => {
    return url;
};

export const wrapTidalUrl = (url) => {
    if (!url || typeof url !== 'string') return url;
    return url
        .replace('openapi.tidal.com', 'tidal-proxy.w0rmh0le-web.vercel.app/openapi')
        .replace('api.tidal.com', 'tidal-proxy.w0rmh0le-web.vercel.app/api');
};
