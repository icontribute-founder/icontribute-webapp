import ICFirebase from "./firebase-access";

const environmentVars = [
    "REACT_APP_FIRESTORE_API_KEY",
    "REACT_APP_FIRESTORE_APP_ID",
    "REACT_APP_FIRESTORE_AUTH_DOMAIN",
    "REACT_APP_FIRESTORE_MEASUREMENT_ID",
    "REACT_APP_FIRESTORE_MESSAGING_SENDER_ID",
    "REACT_APP_FIRESTORE_PROJECT_ID",
    "REACT_APP_FIRESTORE_STORAGE_BUCKET",
];

let missingVars = "";

environmentVars.forEach((variable: string) => {
    if (!Object.keys(process.env).includes(variable)) {
        missingVars += `"${variable}" is required, but it's not missing\n`;
    }
});

if (missingVars !== "") {
    throw new Error(`ENV ERROR: ${missingVars}`);
}

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIRESTORE_API_KEY,
    authDomain: process.env.REACT_APP_FIRESTORE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIRESTORE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIRESTORE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIRESTORE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIRESTORE_APP_ID,
    measurementId: process.env.REACT_APP_FIRESTORE_MEASUREMENT_ID,
};

export const icFirebase = ICFirebase.create(firebaseConfig);