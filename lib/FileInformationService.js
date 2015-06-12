class FileInformationService {
    constructor(mimeService) {
        this._mimeService = mimeService;
    }
    getTypeForFile(file) {
        /*
         * From Mozilla
		 * Gets a content-type for the given file, by
		 * asking the global MIME service for a content-type, and finally by failing
		 * over to application/octet-stream.
		 *
		 * @param file : nsIFile
		 * the nsIFile for which to get a file type
		 * @returns string
		 * the best content-type which can be determined for the file
		 */
        try {
            return this._mimeService.getTypeFromFile(file);
        }
        catch (e) {
            return "application/octet-stream"; //todo: does this belong in a constants?
        }
    }
}

module.exports = FileInformationService;