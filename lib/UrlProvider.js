const Constants = require('./Constants');

class UrlProvider {
    constructor(urlSdk) {
        this._urlSdk = urlSdk;
    }

    toUrl(path, currentUrl, baseUrl) {
        if (!path || path.length === 0 || path === Constants.notFound)
            return null;
        if (this.isValidUri(path))
            return this.createUrl(path);
        try {
            return this.createUrl(path, baseUrl);
        } catch (e) { }
        try {
            return this.createUrl(path, currentUrl);
        } catch (e) { }

        return null;
    }

    createUrl(source, base) {
        return new this._urlSdk.URL(source, base);
    }

    isValidUri(path) {
        return this._urlSdk.isValidURI(path);
    }
}

module.exports = UrlProvider;