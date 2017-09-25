export class Bike {
    constructor (
        public pic_url: string = '',
        public title: string = '',
        public desc: string = '',
        public price: number = 0,
        public location: string = ''
        // public created_at: Date = new Date(),
        // public updated_at: Date = new Date()
    ) {}
}
