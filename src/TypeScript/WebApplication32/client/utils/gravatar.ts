/// <reference path="md5.ts" />

module MyApp.utils {

    export interface IGravatarService {
        /** Generates a gravatar URL from the given email address */
        url: (email: string) => string;

        /** The URL for an empty gravatar */
        none: string;
    }

    class GravatarService implements IGravatarService {
        private urlPrefix = "https://www.gravatar.com/avatar/";
        
        public none = this.urlPrefix + "00000000000000000000000000000000?s=32";

        public url(email: string, size = 32): string {
            return this.urlPrefix + MD5(email) + "?s=" + size;
        }
    }

    // Register the singleton with angular
    utilsModule.factory("MyApp.utils.IGravatarService", function (): IGravatarService {
        return new GravatarService();
    });
} 