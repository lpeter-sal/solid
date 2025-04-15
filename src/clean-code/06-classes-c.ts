(() => {
    // Aplicando el principio de responsabilidad única
    // Priorizar la composición sobre la herencia

    type Gender = 'M' | 'F';

    interface PersonProps {
        name:       string;
        gender:     Gender;
        birthdate:  Date;
    }

    class Person {
        public name:       string;
        public gender:     Gender;
        public birthdate:  Date;

        constructor({ name, gender, birthdate }: PersonProps ){
            this.name       = name;
            this.gender     = gender;
            this.birthdate  = birthdate;

        }
    }

    interface UserProps {
        email       : string;
        role        : string;
    }

    class User {

        public email:      string;
        public role:       string;        
        public lastAccess: Date;

        constructor( {email, role}: UserProps){
            this.lastAccess = new Date();
            this.email      = email;
            this.role       = role;
        }

        checkCredentials() {
            // Login logic
            return true;
        }

    }

    interface SettingsProps {
        workingDirectory: string;
        lastOpenFolder  : string;
    }

    class Settings {
        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({ workingDirectory, lastOpenFolder}: SettingsProps ){
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder   = lastOpenFolder;
        }
    }

    interface UserSettingsProps {
        workingDirectory: string;
        lastOpenFolder  : string;
        email           : string;
        role            : string;
        name            : string;
        gender          : Gender;
        birthdate       : Date
    }

    //* Composición de clases
    //* Separa la lógica de cada clase en su propia responsabilidad
    //* y evita la herencia excesiva
    //* que puede llevar a un código difícil de mantener y entender.
    //* En su lugar, se utilizan instancias de clases para componer
    //* la funcionalidad deseada.
    class UserSettings {

        public person   : Person;
        public user     : User;
        public settings : Settings;

        constructor(
           { name, gender, birthdate, workingDirectory, 
            lastOpenFolder, email, role }: UserSettingsProps
        ){
            this.person = new Person({ name, gender, birthdate });
            this.user = new User({ email, role });
            this.settings = new Settings({ workingDirectory, lastOpenFolder });
        }
    }

    const userSettings = new UserSettings({
        workingDirectory: '/usr/home',
        lastOpenFolder: '/home',
        email: 'luis@salvador.com',
        role: 'admin',
        name: 'Luis',
        gender: 'M',
        birthdate: new Date('1990-01-01')
    });

    console.log({ userSettings });
})();