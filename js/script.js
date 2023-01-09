//1ER ARRAY
var Asignatura = {
    ref: 'BBDD',
    nom: 'Bases de Dades',
    hores: 180,
    UF: ['UF1','UF2','UF3','UF4'],
    professor: 'Pep Parés',
    alumnes: ['alu1','alu2','alu13','alu4','alu5']
    };

    //Ejercicio 1

    console.log(Asignatura);

    //Ejercicio 2

   // delete Asignatura.alumnes;
    console.log(Asignatura);

    //Ejercicio 3

    console.log(Object.keys(Asignatura));


//2DO ARRAY    
var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];

    //Ejercicio 4 
    for(let i=0; i<library.length; i++){
        console.log("Autor: " +library[i].author + ", Titol: " + library[i].title);
    }

    //Ejercicio 5
    function Cilindre (radio, alto){
        this.radio = radio;
        this.alto = alto;
        this.volum = Math.PI*(radio**2)*alto;
    }
    
    let latilla = new Cilindre(2, 4);
    
    
    console.log(latilla.volum.toFixed(4));

    //Ejercicio 6
    var circulo = {
        radio: 5,
        color_contorn: '',
        color_fondo: '',
        grosor_contorno: '',
        perimetro() {
            console.log(2 * Math.PI * radio);
        },
        area() {
            console.log(Math.PI * Math.pow(r, 2));
        }
    }
    //Ejercicio 7
    function metodos(obj) {
        for (var id in obj) {
            if (typeof(obj[id]) == "function") {
                console.log(obj[id])
            }
        }
    }
    metodos(circulo)
    //Ejercicio 8
    
    function posaProps(objecte) {
        let matriu=[];
        for (i in objecte){
            let matriu2=[];
            matriu2.push(i);
            matriu2.push(objecte[i]);
            matriu.push(matriu2);
        }
    }
    //Ejercicio 9 
    let objeto = {
        propiedad1: 'uno',
        propiedad2: 'dos',
        propiedad3: 'tres'
    }
    let invertido = new Object();
    for (var id in objeto) {
        invertido[objeto[id]] = id
    }
    for (var id in invertido) {
        console.log(id + " " + invertido[id])
    }

    //Ejercicio 10
    function propiedadObjeto(prop, obj) {
        for (var id in obj) {
            if (prop == id) {
                return true
            }
        }
        return false
    }
    console.log(propiedadObjeto('propiedad1', objeto))

    