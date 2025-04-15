(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    interface HtmlProps {
        id: string;
        type?: HtmlType;
    }


    class Html {
        public id: string;
        public type?: HtmlType;

        constructor({ id, type = 'input' }: HtmlProps) {
            this.id = id;
            this.type = type;
        }
    }

    interface AttributesProps {
        value: string;
        placeholder: string;
    }

    class Attributes {
        public value: string;
        public placeholder: string;

        constructor({ value, placeholder}: AttributesProps) {
            this.value = value;
            this.placeholder = placeholder;
        }
    }


    class Events {
        constructor() {};

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }

    interface InputElementProps {
        id: string;
        value: string;
        placeholder: string;
    }

    //* Composición de clases
    //* Separa la lógica de cada clase en su propia responsabilidad
    //* y evita la herencia excesiva
    //* que puede llevar a un código difícil de mantener y entender.
    //* En su lugar, se utilizan instancias de clases para componer
    //* la funcionalidad deseada.
    class InputElement {
        public html: Html;
        public attributes: Attributes;
        public events: Events;

        constructor({ id, value, placeholder }: InputElementProps) {
            this.html = new Html({ id });
            this.attributes = new Attributes({ value, placeholder });
            this.events = new Events();
        }


    }

    const nameField = new InputElement({
        value: 'Fernando', 
        placeholder: 'Enter first name', 
        id:'txtName',
    });

    console.log({ nameField });

})()