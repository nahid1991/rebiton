import i18n from "i18next";
import {Link} from "react-router-dom";
import React from "react";

i18n.init({
    // we init with resources
    lng: document.getElementById("locale").value,
    resources: {
        en: {
            translations: {
                "Hi": "Hi",
                "This is rebiton": "This is rebiton",
                "You must be lost!": "You must be lost!",
                "You can go back to homepage ": "You can go back to homepage ",
                "here": "here"
            }
        },
        bn: {
            translations: {
                "Hi": "ওহে",
                "This is rebiton": "এটি রিবিটন",
                "You must be lost!": "আপনি কি হারিয়েছেন?",
                "You can go back to homepage ": "আপনি হোমপেজে ফিরে যেতে পারেন ",
                "here": "এখানে"
            }
        }
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
        escapeValue: false, // not needed for react!!
        formatSeparator: ","
    },

    react: {
        wait: true
    }
});

export default i18n;
