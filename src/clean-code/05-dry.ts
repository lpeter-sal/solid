
type Size = '' | 's' | 'm' | 'l' | 'xl';

class Product {

    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = '',

    ){ }

    isProductReady(): boolean {

        for( const key in this ) { 
            switch (key) {
                case 'string':
                    if((<string>(this[key])).length === 0) {
                        throw new Error(`${ key } is empty`);
                    }
                    break;
                case 'number':
                    if((<number>(this[key])) <= 0) 
                        throw new Error(`${ key } is zero`);
                    break;
                case 'size':
                    if((<string>(this[key])).length === 0) 
                        throw new Error(`${ key } is empty`);
                break;
                default:
                    throw new Error(`${ key } is not valid`);
            }
        }
        return true;
    }


    toString () {

        if( !this.isProductReady ) return;
        
        return `${ this.name } (${ this.price }) - ${ this.size }`;
    }

}


(() => {

    const bluePants = new Product('Blue Pants', 10, 'm');
    console.log(bluePants.toString());


})();

