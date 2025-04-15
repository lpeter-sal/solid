(() => {

    // No aplicando el principio de responsabilidad única





    type Gender = 'M' | 'F';

    class Person {
        constructor(        
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ){}
    }

    class User extends Person {

        private lastAccess: Date;

        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ){
            super(name, gender, birthdate );
            this.lastAccess = new Date();
        }

        checkCredentials() {
            // Login logic
            return true;
        }

    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email:      string,
            role:       string,
            name:       string,
            gender:     Gender,
            birthdate:  Date
        ){
            super(email, role, name, gender, birthdate );
        }
    }


    const userSettings = new UserSettings(
        '/usr/home',
        '/home',
        'luis@salvador.com',
        'admin',
        'Luis',
        'M',
        new Date('1990-01-01')
    );

    console.log({ userSettings });



})();