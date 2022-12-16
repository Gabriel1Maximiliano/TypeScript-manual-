(() => {
    class Avenger {
        constructor(
            public name:string,
            public realName:string
        ){
            console.log('constructor Avenger llamado')
        }
        private getFullName () {
            return `${ this.name } ${ this.realName }`
        }
    }

    class Xmen extends Avenger {

    }
})()