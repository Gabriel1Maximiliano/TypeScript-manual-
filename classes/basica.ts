(() => {
 class Avenger {
    private name :string;// podmeos asignar atributos opcionales con ? 
    public team: string;
    public realName: string;
    constructor(name:string , team:string,realName: string){
        this.name = name;
        this.team= team;
        this.realName = realName
    }
 }
// propiedades static se llaman directamente con el nombre de la clase Avenger.variable estática
 const antman: Avenger = new Avenger('Hormiga','Agilidad','Jon Snow')
 console.log(antman)
})()