import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


class Fire {
    constructor(){
        this.init()
        this.checkAuth()
    }

    init = () => {
        if (!firebase.apps.length){
            firebase.initializeApp({
                    apiKey: "AIzaSyBBNf3MYvpR6IdVWMDG_c1vFPe3EqstagE",
                    authDomain: "chatapp-a8730.firebaseapp.com",
                    projectId: "chatapp-a8730",
                    storageBucket: "chatapp-a8730.appspot.com",
                    messagingSenderId: "703720558051",
                    appId: "1:703720558051:web:bc8298a0c7b072492664d6",
                    measurementId: "G-9K64EW8WXP"
            });
        }
    };

    checkAuth = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (!user){
                firebase.auth().signInAnonymously();
            }
        });
    };
    send = messages => {
        messages.forEach(item => {
            const message = {
                text: item.text,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: item.user
            }

            this.db.push(message)

        });

            
    }

    parse = message => {
        const {user, text, timestamp} = message.val()
        const {key: _id}  = message;
        const createdAt = new Date(timestamp)

        return {
            _id, 
            createdAt,
            text,
            user
        }
    }

    get = callback => {
        this.db.on("child_added", snapshot => callback(this.parse(snapshot)));

    }

    off(){
        this.db.off()
    }
    get db(){
        return firebase.database().ref("messages");
    }

    get uid() {
        return (firebase.auth.currentUser || {}).uid;
    }
}

export default new Fire();